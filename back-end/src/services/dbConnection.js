const mysql = require("mysql");
const config = require('../api/config/config')

// console.log(process.env.DB_PASSWORD, process.env.DB_DATABASE)
//  host:  process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_DATABASE,

// create connection 
var con = mysql.createPool({
  connectionLimit: 100,
  host: config.database.host,
  user: config.database.user,
  password: config.database.password,
  port: config.database.port,
  database: config.database.database
  //   debug: true,
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
    // console.log(email)
    return new Promise((resolve, reject) => {
        con.query("SELECT * from admins WHERE email=? ", [email], (error, admins) => {
            // console.log(admins);
            if(error){
                reject(error)
            }
            resolve(admins[0]);
        })
    })
}


db.getCustomerByEmail = (email) => {
    // console.log("db");
    return new Promise((resolve, reject) => {
        con.query(`select * from customers where email=?`, [email], (error, customer) => {
            if(error){
                reject(error)
            }
            resolve(customer[0])
        })
    })
}




db.insertCustomer = (customerObject) => {
  return new Promise((resolve, reject) => {
    con.query(`insert into customers set ?`, [customerObject], (error, customer) => {
        if(error){
            reject(error)
        }
        resolve(true);
    });
  });
};


db.getAllCustomers = () => {
//   console.log(selectQuery);
  return new Promise((resolve, reject) => {
    con.query(`SELECT id, name, email FROM customers`, (error, result) => {
      if (error) {
        reject(error);
      }
      resolve(result);
    });
  });
};


db.getAverageRegistrations = (nbOfTime, timeUnit) => {
  //   console.log(selectQuery);
  return new Promise((resolve, reject) => {
    con.query(
      `SELECT id, name, email FROM customers where created_at > now() - interval ${nbOfTime} ${timeUnit}`,
  
      (error, result) => {
        if (error) {
          reject(error);
        }
        resolve(result);
      }
    );
  });
};




// console.log(db)
module.exports = db;