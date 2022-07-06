const express=require('express');
const dotenv=require('dotenv');
const path=require('path');
const bodyParser=require('body-parser');
const morgan=require('morgan');

const connectionDB=require('./server/database/connection');

const app=express();

dotenv.config({path:'config.env'});
const PORT=process.env.PORT||8080;

//log request
app.use(morgan('tiny'));

//mongoDB connection
connectionDB();

//parse request to bodyparser
app.use(bodyParser.urlencoded({extended:true}));

//set view engine
app.set('view engine','ejs');

//incase view in subfolder like views/html
// app.set('views',path.resolve(__dirname,'views/html'));

//load assets
app.use('/css',express.static(path.resolve(__dirname,"assets/css")));
app.use('/img',express.static(path.resolve(__dirname,"assets/img")));
app.use('/js',express.static(path.resolve(__dirname,"assets/js")));

app.use("/",require('./server/routes/router'))


app.listen(PORT,()=>{
    console.log(`Server Running on  http://localhost:${PORT}`);
})