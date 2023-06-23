const signupModel = require('../model/Signup_Schema');

module.exports.home =async function(req,res){

    return res.render('home');

}

module.exports.profile =async function(req,res){

    return res.render('profile');

}


