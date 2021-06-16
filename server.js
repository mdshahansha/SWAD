const express=require('express');
const app=express();//ise app object ke andar sab function  rhega jo hame express deti h

const ejs=require('ejs');
const path=require('path');
const expressLayout=require('express-ejs-layouts');

const PORT= 3000;//ye env wala tab  hoga jab hamara production ke liye hoga  || process.env.PORT ||
const mongoose=require('mongoose');

//database connection 
const url='mongodb://localhost/pizza-test';
mongoose.connect(url,{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true,useFindAndModify:true});
const connection=mongoose.connection;
connection.once('open',()=>{
    console.log('Database connceted...');
}).catch(err=>{
    console.log('Connection failed....');
})


app.use(express.static('public'));

//set Templates engine 
app.use(expressLayout);
app.set('views',path.join(__dirname,'/resources/views'));
app.set('view engine','ejs');

require('./routes/web')(app); 




app.listen(PORT,()=>{
    console.log(`listening on port 3000  to ${PORT}`);
})
