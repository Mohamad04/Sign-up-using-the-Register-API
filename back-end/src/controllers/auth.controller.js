const jwt = require('jsonwebtoken');
const db = require('../services/dbConnection')

class AuthController {


  Authverify(req, res) {
    try {
      const authHeader = req.headers["authorization"];
      // console.log(authHeader);
      const token = authHeader && authHeader.split(" ")[1];
      // console.log(token)
      if (token === null) {
        return res.status(401).send({
          authenticated: false,
        });
      }

      jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET,
        function (err, decoded) {
          if (err) {
            return res.status(403).send({
              authenticated: false,
              message: "Token has expired",
            });
          }

          res.status(200).send({
            authenticated: true,
            email: decoded.admin.email,
            id: decoded.admin.id,
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


  async verifyRefreshToken (req, res) {
    try {
          console.log("refresh = " ,req.headers.cookie);
          // const verifyRefresh = await db.getRefreshTokenByToken(token); 
          return res.send({
            mesg: "sadfsdf"
          })
    } catch (error) {
          return res.status(401).send({
              authenticated: false,
              error: error.message,
          });
    }
  }



}

module.exports = new AuthController();
