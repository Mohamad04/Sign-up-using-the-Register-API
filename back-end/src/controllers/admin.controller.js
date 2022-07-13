const db = require('../services/dbConnection');



class AdminController {


    async logIn(req, res) {
        console.log(req)
        try {
            const adminExist = await db.getAdminByEmail(req.body.email);
            if (!adminExist) {
                return res.status(401).send({
                    message: "Email does not exist!"
                })
            }
            console.log(adminExist)
        
        } catch(err){
            return res.status(401).send({
                message: err.message,
            })
        }
    
    }

}

module.exports = new AdminController();