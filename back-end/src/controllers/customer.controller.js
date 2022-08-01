const db = require('../services/dbConnection');
const short = require("short-uuid");
const uuid = short();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


class CustomerController {


    async registerCustomer(req, res) {
        try {
            const { name, email, password } = req.body;
            const customerExist = await db.getCustomerByEmail(email);
            if(customerExist){
                return res.status(401).send({
                    message: "customer already exists"
                })
            }
            // console.log("cusotmer exist");

            const salt = await bcrypt.genSalt(10);          // => default = 10 ||   if there are more than 2 users with the same password. If the hacker cracked one he will know the others
            const hash = await bcrypt.hash(password, salt); //  bcrypt.hash() is an async function so we need to use async/await.
            const created_at = new Date(
              new Date().toLocaleString("en-US", {
                timeZone: "Europe/Paris",
              })
            );

            const customer = {
                name: name,
                email: email,
                password: hash,
                created_at: created_at
            };
            const insertCustomer = await db.insertCustomer(customer);
            // console.log("insert   ")
            if(!insertCustomer) {
                return res.send(401).send({
                    message: "Something happened "
                })
            }

            const accessToken = jwt.sign(
                { customer: customer },
                process.env.ACCESS_TOKEN_SECRET,
                { expiresIn: "15m" }
            );

            const refreshToken = jwt.sign(
              { customer: customer },
              process.env.REFRESH_TOKEN_SECRET,
              { expiresIn: "30d" }
            );

             res.cookie("refreshToken", refreshToken, {
               // expires: new Date(Date.now() + 2.5 * 3600000),
               path: "/",
               secure: true,
               httpOnly: true,
               sameSite: true,
             });


            return res.status(201).send({
              authenticated: true,
              accessToken,
              customer: customer,
            });


        } catch (error) {
            return res.status(400).send({
                message: error.message
            })
        }
    }


    async getCustomers(req, res) {
        try {
            const getCustomers = await db.getAllCustomers();
            
            if(!getCustomers){
                return res.status(401).send({
                    message : "No customers found"
                })
            }
            // console.log(getCustomers)
            return res.status(200).send(
                getCustomers
            )

        } catch (error) {
          return res.status(400).send({
            message: error.message,
          });
        }
    }



    async getAverageRegistrations (req, res) {
        try {
          const nbOfTime = req.body.nbOfTime;
          const timeUnit = req.body.timeUnit;
          // console.log(req.body)
          const getAverageNumber = await db.getAverageRegistrations(
            nbOfTime,
            timeUnit
          );

          if (!getAverageNumber) {
            return res.status(401).send({
              message: "No customers found",
            });
          }
  
          return res.status(200).send(getAverageNumber);
        } catch (error) {
            return res.status(400).send({
              message: error.message,
            });
        }
    
    }

}

module.exports = new CustomerController();