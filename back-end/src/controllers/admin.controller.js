const db = require('../services/dbConnection');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");


class AdminController {


    async logIn(req, res) {
        try {
        // console.log(req.body)
            const adminExist = await db.getAdminByEmail(req.body.email);
            // console.log(adminExist)
            if (!adminExist) {
                return res.status(401).send({
                    message: "Email does not exist!"
                })
            }
            const isPassValid = await bcrypt.compare(req.body.password, adminExist.password);

            if(!isPassValid) {
                return res.status(401).send({
                    message: "Password is incorrect"
                })
            }

            const payload = {
              id: adminExist.id,
            };

            const accessToken = jwt.sign(
              payload,
              process.env.ACCESS_TOKEN_SECRET,
              { expiresIn: "15m" }
            );
            // console.log(accessToken);
            const refreshToken = jwt.sign(
                payload,
                process.env.REFRESH_TOKEN_SECRET,
                { expiresIn: "30d" }
            );
            // res.cookie("refreshToken", refreshToken, {
            //   // expires: new Date(Date.now() + 2.5 * 3600000),
            //   path: "/",
            //   secure: true,
            // //   httpOnly: true,
            //   sameSite: true,
            // }); 
            // res.setHeader("Set-Cookie", `refreshToken=${refreshToken}`);
            res.cookie("refreshToken", refreshToken,
            //  {
            //   path: "/",
            //   secure: true,
            //   httpOnly: true,
            //   sameSite: true,
            // }
            );

            const adminToken = await db.getRefreshTokenById(adminExist.id);
            if (adminToken) {
                await db.deleteRefreshToken(adminExist.id)
            }

            await db.insertRefreshToken({ userId: adminExist.id, token: refreshToken})

            return res.status(200).send({
              authenticated: true,
              accessToken,
              user: adminExist,
            });

        } catch(err){
            return res.status(400).send({
              authenticated: false,
              message: err,
            });
        }
    }


    async logOut(req, res) {
        try {
        // res.cookie("refreshToken", { expires: Date.now() });
                res.clearCookie("connect.sid");
                res.status(200)
                    .clearCookie("refreshToken", {
                    path: "/",
               })
                .send({
                    logOut: true,
                    message: "Successfully logged out 😏 🍀",
                });
             res.end();
        } catch (error) {
            return res.status(400).send({
                message: error
            })
        }
    }
}

module.exports = new AdminController();