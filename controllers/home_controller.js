const signupModel = require('../model/Signup_Schema');
const postSchema = require('../model/Post_Schema');

module.exports.home = async function(req,res){

    const postdata = await postSchema.find({});

    return res.render('home',{
        post:postdata
    });
}

module.exports.getContent = async function(req,res){

   await postSchema.create(req.body);

    return res.redirect('/home');
}

module.exports.profile =function(req,res){

    return res.render('profile');

}


