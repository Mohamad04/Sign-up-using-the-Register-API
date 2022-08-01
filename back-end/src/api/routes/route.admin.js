const express = require('express');
const router = express.Router();


const adminController = require('../../controllers/admin.controller');
const AuthController = require('../../controllers/auth.controller');


router.post('/login', adminController.logIn);
router.get('/auth/verify', AuthController.Authverify)
router.get('/refresh', AuthController.verifyRefreshToken)
router.get("/logout", adminController.logOut);


module.exports = router;