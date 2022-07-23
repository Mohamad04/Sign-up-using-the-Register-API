const jwt = require('jsonwebtoken');


class AuthController {

  verify(req, res, next) {
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

        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, function (err, decoded) {
            if (err) {
                return res.status(403).send({
                    authenticated: false,
                    message: "Token has expired",
                });
            }

        //  res.status(200).send({
        //     authenticated: true,
        //     email: decoded.admin.email,
        //     id: decoded.admin.id,
        // });
        req.token = token;
        req.admin = decoded.admin;
        next();
      });
    } catch (error) {
        return res.status(401).send({
            authenticated: false,
            error: error.message,
        });
    }
  }
}

module.exports = new AuthController();
