const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({

    content : {
         type: String,
         required: true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'signup_data'
    },
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Posts'
    }
},{timestamps: true});

const comment = mongoose.model('comments',commentSchema);

module.exports = comment;