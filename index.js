const express = require('express');
const app = express();
const port = 2805;

const body_parser = require('body-parser');
const path = require('path');
const expresslayouts = require('express-ejs-layouts');
const cookieParser = require('cookie-parser');
const db = require('./config/mongoose');
const  signupSchema = require('./model/Signup_Schema');
//used for session cookie
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');
const MongoStore = require('connect-mongo');
// const sassMiddleware = require('sass');


//middleware

//parsing req/res datas into objects/Strings
app.use(express.urlencoded({extended:true}));
app.use(body_parser.json());

//cookie parser
app.use(cookieParser());

//use static files i.e assets folder
app.use(express.static('assets'));

//layouts to use when render different pages
app.use(expresslayouts);

//extract styles and scripts from sub-pages and put it in layouts page
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

//ejs config
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

//setting the session-cookie & Also, setting mongo store to store the session-cookie.
//if we restart the server, Cookie will not be removed as it is stored in mongo store i.e database 
app.use(session({

    name:'Connect.', //cookie name
    secret:'someRandomText', // we will change the secret while deploying in production
    saveUninitialized:false, 
    resave:false,
    cookie:{
        maxAge: (1000 * 60 * 100)  // it accepts duration in milli seconds. 
    },
    store: MongoStore.create(
        {
            mongoUrl: 'mongodb://127.0.0.1:27017/Connect_Datas',
        autoRemove:'disabled'
         }
            )

 })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);

//Connect to routes folder
app.use('/',require('./routes'));

app.listen(port,function(err){

    if(err){console.log('Error in connecting Server!'); return;}
    
    console.log("Server Connected.");

})