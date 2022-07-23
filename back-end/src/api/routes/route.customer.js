const express = require("express");
const router = express.Router();



const customerController = require("../../controllers/customer.controller");


router.post("/register", customerController.registerCustomer);
// router.get("/", customerController.getCustomers);

module.exports = router;