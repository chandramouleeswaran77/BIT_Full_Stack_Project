const express=require('express')
const app=express();
const connectDb=require('./config/connectDb')
const port=8080;
connectDb();
app.listen(port,()=>{
    console.log(`server is listening on port:${port}`);
})