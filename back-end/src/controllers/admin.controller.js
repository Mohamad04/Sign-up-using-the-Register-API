const db = require('../services/dbConnection');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");


class AdminController {


    async logIn(req, res) {
        try {
            const adminExist = await db.getAdminByEmail(req.body.email);
            // console.log(adminExist)
            if (adminExist === null) {
                return res.status(400).send({
                    message: "Email does not exist!"
                })
            }
            const isPassValid = await bcrypt.compare(req.body.password, adminExist.password);

            if(!isPassValid) {
                return res.status(401).send({
                    message: "Password is incorrect"
                })
            }
            const accessToken = jwt.sign(
              { admin: adminExist },
              process.env.ACCESS_TOKEN_SECRET,
              { expiresIn: "15m" }
            );
            // console.log(accessToken);
            const refreshToken = jwt.sign(
                {admin: adminExist},
                process.env.REFRESH_TOKEN_SECRET
            )
            res.cookie("refreshToken", refreshToken, {
              // expires: new Date(Date.now() + 2.5 * 3600000),
              path: "/",
              secure: true,
              httpOnly: true,
              sameSite: true,
            }); 

            return res.status(201).send({
              message: "Signed In!",
              accessToken,
              user: adminExist,
            });
        } catch(err){
            return res.status(401).send({
                message: err.message,
            })
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
            return res.status(500).send({
                message: error
            })
        }
    }
}

module.exports = new AdminController();