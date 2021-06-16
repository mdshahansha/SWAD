require('dotenv').config()
const express=require('express');
const app=express();//ise app object ke andar sab function  rhega jo hame express deti h

const ejs=require('ejs');
const path=require('path');
const expressLayout=require('express-ejs-layouts');

const PORT= 3000;//ye env wala tab  hoga jab hamara production ke liye hoga  || process.env.PORT ||
const mongoose=require('mongoose');
const session=require('express-session');
const flash=require('express-flash');
const MonogoDbStore=require('connect-mongo')(session);

//database connection 
const url='mongodb://localhost/pizza';
mongoose.connect(url,{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true,useFindAndModify:true});
const connection=mongoose.connection;
connection.once('open',()=>{
    console.log('Database connceted...');
}).catch(err=>{
    console.log('Connection failed....');
})

//session store
let mongoStore = new MonogoDbStore({
    mongooseConnection:connection,
    collection:'sessions'
})

console.log("Hello")

console.log(process.env.COOKIE_SECRET);

// session config 
app.use(session({
    secret:process.env.COOKIE_SECRET,
    resave:false,
    store:mongoStore,
    saveUninitialized:false,
   
    cookie:{maxAge:1000*60*60*24}//24hr

}))

app.use(flash());

//assets
app.use(express.static('public'));
app.use(express.json());

//global middleware
app.use((req,res,next)=>{
    res,locals.session =req.session;
    next()
})

//set Templates engine 
app.use(expressLayout);
app.set('views',path.join(__dirname,'/resources/views'));
app.set('view engine','ejs');

require('./routes/web')(app); 




app.listen(PORT,()=>{
    console.log(`listening on port 3000  to ${PORT}`);
})
