const db = require("../services/dbConnection");
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
          message: "Email does not exist!",
        });
      }
      const isPassValid = await bcrypt.compare(
        req.body.password,
        adminExist.password
      );
      if (!isPassValid) {
        return res.status(401).send({
          message: "Password is incorrect",
        });
      }

    

      const accessToken = jwt.sign( { id: adminExist.id } , process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "15m",
      });
      // console.log(accessToken);
      const refreshToken = jwt.sign(
        { id: adminExist.id },
        process.env.REFRESH_TOKEN_SECRET,
        {
          expiresIn: "30d",
        }
      );

      const adminToken = await db.getRefreshTokenById(adminExist.id);
      if (adminToken) {
        await db.deleteRefreshToken(adminExist.id);
      }

      await db.insertRefreshToken({
        userId: adminExist.id,
        token: refreshToken,
      });

      res.cookie("refreshToken", refreshToken, {
        // expires: new Date(Date.now() + 2.5 * 3600000),
        path: "/",
        secure: true,
        httpOnly: true,
        sameSite: "none",
      });

      return res.status(200).send({
        authenticated: true,
        accessToken,
        user: adminExist,
      });
    } catch (err) {
      return res.status(400).send({
        authenticated: false,
        message: err.message,
      });
    }
  }



  async logOut(req, res) {
    try {
      // res.cookie("refreshToken", { expires: Date.now() });
        const refreshToken =
          req.headers.cookie && req.headers.cookie.split("=")[1];
        console.log(refreshToken);

        const adminToken = await db.getRefreshTokenByToken(refreshToken);
        if (adminToken === null) {
          return res.status(200).send({
            logOut: true,
            message: "Successfully logged out 😏 🍀",
          });
        }

        await db.deleteRefreshToken(adminToken.id);
      
      res
        .status(200)
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
        message: error,
      });
    }
  }




  async verifyRefreshToken(req, res) {
    try {
    //   console.log("refresh = ", req.headers.cookie);
      const refreshToken =
        req.headers.cookie && req.headers.cookie.split("=")[1];
      console.log("refresh = " ,  refreshToken);


      if (!refreshToken || refreshToken === "undefined") {
        return res.status(401).send({
          authenticated: false,
          message: "refresh token is empty"
        });
      }

      db.getRefreshTokenByToken(refreshToken, (error, tokenDetails) => {
            if (error) {
                return res.status(401).send({
                    authenticated: false,
                    message: "Something happened",
                });
            }
            if (!tokenDetails) {
                return res.status(400).send({
                    authenticated: false,
                    message: "Invalid refresh Token",
                });
            }
           
        });


        jwt.verify(
          refreshToken,
          process.env.REFRESH_TOKEN_SECRET,
          async function (err, tokenDetails) {
            if (err) {
              return res.status(400).send({
                authenticated: false,
                message: "Invalid refresh Token",
              });
            }

            const adminExist = await db.getAdminById(tokenDetails.id);
            // console.log(adminExist)
            if (!adminExist) {
                return res.status(401).send({
                message: "admin does not exist!",
                });
            }
            const accessToken = jwt.sign(
              { id: tokenDetails.id },
              process.env.ACCESS_TOKEN_SECRET,
              { expiresIn: "15m" }
            );
            return res.status(200).json({
              authenticated: true,
              accessToken,
              user: adminExist
            });
          }
        );
     

    } catch (error) {
      return res.status(401).send({
        authenticated: false,
        error: error.message,
      });
    }
  }
}

module.exports = new AdminController();
