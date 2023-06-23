const express = require('express');
const router = express.Router();

const controller = require('../controllers/Signup_controller');
const passport = require('passport');

router.get('/',controller.signup);
router.post('/redirect-login',controller.getData);


module.exports = router;