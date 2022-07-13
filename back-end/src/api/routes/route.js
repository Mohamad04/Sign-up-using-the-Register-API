const express = require('express');
const router = express.Router();

const adminRoute = require('../../controllers/admin.controller')


router.post('/login', adminRoute.logIn)

module.exports = router;