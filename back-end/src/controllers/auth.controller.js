const jwt = require('jsonwebtoken');



class AuthController {
  Authverify(req, res, next) {
    try {
      const authHeader = req.headers["authorization"];
      // console.log(authHeader);
      const token = authHeader && authHeader.split(" ")[1];
      // console.log("token = ", token)
      if (token === null) {
        return res.status(401).send({
          authenticated: false,
          message: "token is empty",
        });
      }

      jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET,
        function (err, decoded) {
        // console.log("error = ", err.message);
          if (err && err.message === "jwt expired") {
            console.log("expiryeeeeeeeeeeeeeeeeeee ");
            next();
          } else if(err) {
            return res.status(403).send({
              authenticated: false,
              message: err,
            });
          }
        //  console.log("details = " , decoded)
          res.status(200).send({
            authenticated: true,
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

module.exports = new AuthController();
