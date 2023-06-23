const signupModel = require('../model/Signup_Schema');

module.exports.signup = function(req,res){

    if(req.isAuthenticated()){
        return res.redirect('home');
    }
    
    return res.render('signup');
   
}

module.exports.getData =async function(req,res){
    
    if(req.body.password == req.body.confirmPassword){

        let userData = await signupModel.findOne({user_email:req.body.email});
            console.log(userData);
            if(!userData){
                signupModel.create({

                    user_firstName:req.body.firstName,
                    user_lastName:req.body.lastName,     
                    user_email:req.body.email,
                    user_password:req.body.password
                });
            
                return res.render('login');
            }else{
               
                return res.render('signup');
            }
    }else{
       
        return res.render('signup');
        }
    
}




