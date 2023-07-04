const signupModel = require('../model/Signup_Schema');
const postSchema = require('../model/Post_Schema');

module.exports.home = async function(req,res){
    
    const postdata = await postSchema.find({})
    .populate('user')
    .populate({
        path:'comments',
            populate:{
                path:'user'
        }
    }).exec();
    // const commentdata = await

    return res.render('home',{
        title:"Connect | Home",
        post:postdata

    });

    
}



module.exports.profile =function(req,res){

    return res.render('profile');

}


