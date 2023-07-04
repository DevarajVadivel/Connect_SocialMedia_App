const postSchema = require('../model/Post_Schema');
const commentSchema = require('../model/Comments_Schema');

module.exports.createPost = async function(req,res){

    await postSchema.create({
     content : req.body.content,
     user:req.user._id
    });
 
     return res.redirect('/home');
 }

 module.exports.destroyPost =async function(req,res){

    console.log(req.params.id);
    const post = await postSchema.findById(req.params.id);
    console.log(post);
    //.id means converting object id to string
    if(post.user == req.user.id ){

        await post.deleteOne();

        await commentSchema.deleteMany({post : req.params.id});

        return res.redirect('/home');
    }else{
        return res.redirect('/home');
    }


 }