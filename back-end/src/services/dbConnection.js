const mysql = require("mysql");
require("dotenv").config();


 
// create connection 
var con = mysql.createPool({
    connectionLimit: 100,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password:  process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT             
}); 




// connect to MySQL
con.getConnection( (error, connection) => {
    if(error) {
        return console.error("Error in connection to db ⚠️ : " + error.message)
    }
    console.log("DB connected successful: " + connection.threadId)
})



let db = {}

db.getAdminByEmail = (email) => {
    return new Promise((resolve, reject) => {
        con.query("SELECT * from admins WHERE email=?", [email], (admin, error) => {
            if(error){
                return reject(error)
            }
            return resolve(admin[0]);
        })
    })
}

module.exports = db;