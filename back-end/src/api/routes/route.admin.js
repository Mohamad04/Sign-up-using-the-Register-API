const express = require('express');
const router = express.Router();


const adminController = require('../../controllers/admin.controller');
const AuthController = require('../../controllers/auth.controller');


router.post('/login', adminController.logIn);
router.get('/auth/verify', AuthController.Authverify,  adminController.verifyRefreshToken)
router.get('/refresh', adminController.verifyRefreshToken)
router.get("/logout", adminController.logOut);


module.exports = router;