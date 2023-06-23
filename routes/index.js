const express = require('express');
const router = express.Router();
const passport = require('passport');
const passportLocal = require('../config/passport-local-strategy').Passport;

const controller = require('../controllers/login_controller');


router.get('/',controller.login);

//using  passport as a middleware.
router.post('/', passport.authenticate('local',{failureRedirect:'/'}),controller.verifyLogin);
//logout
router.get('/sign-out',controller.signout);
//back
router.get('/back',controller.back);


router.use('/signup',require('./signup'));
router.use('/home',require('./home'))


module.exports = router;