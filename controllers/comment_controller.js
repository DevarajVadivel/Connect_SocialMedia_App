
const commentSchema = require('../model/Comments_Schema');
const postSchema = require('../model/Post_Schema');

module.exports.createComment = async function(req,res){

    // console.log(req.body);
    const post = await postSchema.findById(req.body.post_id);

    if(post){ 
    const commentCreated = await commentSchema.create({
     content : req.body.comment,
     user:req.user._id,
     post:req.body.post_id
    
    });

    if(commentCreated){
        post.comments.push(commentCreated._id);
        await post.save();
    };
  
     return res.redirect('/home');
    }
 }


 module.exports.destroyCommment = async function(req,res){

   const comment =  await commentSchema.findById(req.params.id);
   
   
   if(comment){

    const post =  await postSchema.findById(comment.post);
    
        // console.log(post.user);

        if(comment.user == req.user.id || post.user == req.user.id){

            //storing the post id of commment which is going to be deleted.
            //because the comment is stored in post model as well and we have to delete it as well.
             let postId = comment.post;

             await comment.deleteOne();

             await postSchema.findByIdAndUpdate(postId, { $pull : {comments: req.params.id}});
            
             return res.redirect('/home');

        }else{
            return res.redirect('/home');

        }
    
   }
 }