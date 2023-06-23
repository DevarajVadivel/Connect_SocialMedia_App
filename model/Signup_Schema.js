const mongoose = require('mongoose');

const signup_schema = new mongoose.Schema({

    user_firstName:{
        type:String,
        required:true
    },
    user_lastName:{
        type:String,
        required:true
    },
    user_email:{
        type:String,
        required:true,
        unique:true
    },

    user_password:{
        type:String,
        required:true

    }

},{timestamps:true});

const signup_model = mongoose.model('signup_data',signup_schema);

module.exports = signup_model;