const passport = require('passport');

const LocalStrategy = require('passport-local').Strategy;

const signup_model = require('../model/Signup_Schema');

//Authentication using passport.js
passport.use(new LocalStrategy(
    {
        usernameField:'email'
    },
     async function(email,password,done){
        //find a user and establish the identity
        let user = await signup_model.findOne({user_email:email});
        console.log(user);
        
        if(!user || user.user_password != password){
            console.log('Invalid email or password');
            return done(null,false);
        }

        return done(null,user);
    }

    ));

    //Serializing the user to decide which key is to be kept in cookies

    passport.serializeUser(function(user,done){

        return done(null,user._id);
    });

    //Deserializing the user from the key in the cookies

    passport.deserializeUser(async function(id,done){

        var user = await signup_model.findById(id);
        if(!user){
            return console.log('user not found belong to the token received');
        }

        if(user){
            return done(null,user);
        }

    });

    //Using the below custom middleware, we check whether the request is authenticated or not
    passport.checkAuthentication = function(req,res,next){

        //if Authenticated, then pass on the request to the next function(controller's action)
        if(req.isAuthenticated()){

            return next();
        }

        //if not Authenticated
        return res.redirect('/');
    }

    //Using the middleware, let's send the user data if authenticated
    passport.setAuthenticatedUser = function(req,res,next){

        if(req.isAuthenticated()){
           
            res.locals.data= req.user;
        }
        next();
    }

    //login
    passport.checkAuthForLogin = function(req,res,next){

    if(req.isAuthenticated()){
        return  next();
    }

        return res.render('login');
    }

    //signup
    passport.checkAuthForsignup = function(req,res,next){

        if(req.isAuthenticated()){
            return  next();
        }
    
            return res.render('signup');
        }
    


    module.exports = passport;