const express = require('express');
const router = express.Router();

const controller = require('../controllers/home_controller');
const passport = require('passport');

router.get('/',passport.checkAuthentication,controller.home);
router.get('/profile',passport.checkAuthentication,controller.profile);



module.exports = router;