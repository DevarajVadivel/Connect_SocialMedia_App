const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({

    content:{
        type:String,
        required:true
    },

    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Signup_Schema'
    }

},{ timestamps:true}
);

const Post = mongoose.model('Posts',postSchema);

module.exports = Post;