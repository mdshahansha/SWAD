const e = require('express');
const User=require('../../models/user');

function authController(){
    return {
         login(req,res){
            res.render('auth/login');
         },
         register(req,res){
            res.render('auth/register');
        },
        postRegister(req,res){
            const{ name,email,password }=req.body;
            
            //validation error
            if(!name ||!email || !password){
            return res.redirect('/register');
                    req.flash('error','all field are required')
        }
            console.log(req.body);
        }
    }
}

module.exports=authController;