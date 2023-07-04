const signupModel = require('../model/Signup_Schema');

module.exports.login = function(req,res){

    if(req.isAuthenticated()){

        return res.redirect('/home');
    }
   
    return res.render('login');
    
}

module.exports.verifyLogin = function(req,res){
    console.log('verify login action');
    return res.redirect('/home');
}

module.exports.signout = function(req,res){

    req.logout(function(err){console.log('error while log out')});
    return res.redirect('/');
}

module.exports.back = function(req,res){

    return res.redirect('/home');
}