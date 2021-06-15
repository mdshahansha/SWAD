const express=require('express');
const app=express();//ise app object ke andar sab function  rhega jo hame express deti h

const ejs=require('ejs');
const path=require('path');
const expressLayout=require('express-ejs-layouts');

const PORT= 3000;//ye env wala tab  hoga jab hamara production ke liye hoga  || process.env.PORT ||

app.use(express.static('public'));

//set Templates engine 
app.use(expressLayout);
app.set('views',path.join(__dirname,'/resources/views'));
app.set('view engine','ejs');


app.get('/', (req,res)=>{
    res.render('home');
})

app.get('/cart',(req,res)=>{
    res.render('customers/cart');
})

app.get('/login',(req,res)=>{
    res.render('auth/login');
})

app.get('/register',(req,res)=>{
    res.render('auth/register');
})



app.listen(PORT,()=>{
    console.log(`listening on port 3000  to ${PORT}`);
})
