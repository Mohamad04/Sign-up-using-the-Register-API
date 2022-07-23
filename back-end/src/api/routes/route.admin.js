const express = require('express');
const router = express.Router();

const adminController = require('../../controllers/admin.controller');
const AuthController = require('../../controllers/auth.controller');


router.post('/login', adminController.logIn);
router.get("/logout", AuthController.verify, adminController.logOut);


module.exports = router;