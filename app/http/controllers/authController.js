const e = require('express');
const User=require('../../models/user');
const bcrypt=require('bcrypt');

function authController(){
    return {
         login(req,res){
            res.render('auth/login');
         },
         register(req,res){
            res.render('auth/register');
        },
       async postRegister(req,res){
            const{ name,email,password }=req.body;
            
            //validation error
            if(!name ||!email || !password){
                req.flash('error','all field are required');
                req.flash('name',name);
                req.flash('email',email);
            return res.redirect('/register'); 
        }

        //check iF EMAIL EXITS
        User.exists({email:email},(err,result)=>{
            if(result){
                req.flash('error','Email already Taken');
                req.flash('name',name);
                req.flash('email',email);
                return res.redirect('/register');
            }
        })
        //hash password ->need a package bcrypt
        const hashedPassword=await bcrypt.hash(password,10)
        //Create user
        const user=new User({
            name:name,
            email:email,
            password:hashedPassword
        })
        user.save().then(()=>{
            //Login
            return res.redirect('/')
        }).catch(err=>{
            req.flash('error','Something went WRONG!');
                 return res.redirect('/register');
        })


            console.log(req.body);
        }
    }
}

module.exports=authController;