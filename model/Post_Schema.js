const mongoose = require('mongoose');
const signupSchema = require('./Signup_Schema');

const postSchema = new mongoose.Schema({

    content:{
        type:String,
        required:true
    },

    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'signup_data'
    },

    comments:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'comments'
        }
    ]

},{ timestamps:true}
);

const Post = mongoose.model('Posts',postSchema);

module.exports = Post;