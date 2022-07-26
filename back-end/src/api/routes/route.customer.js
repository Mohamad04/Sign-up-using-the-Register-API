const express = require("express");
const router = express.Router();



const customerController = require("../../controllers/customer.controller");


router.post("/register", customerController.registerCustomer);
router.post("/average_registrations", customerController.getAverageRegistrations);
router.get("/", customerController.getCustomers);

module.exports = router;