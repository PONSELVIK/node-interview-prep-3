const express = require('express')
const server=express();
// 1)How do you create a simple Express.js application?

// server.get("/",(req,res)=>{
//     res.send("hello");
// })
// server.listen(3000,()=>{
//     console.log("server is running at port no:3000");
// })



// 2)Implementation of all types of exports in backend applications

// function defaul(req,res){
//     res.send("default exports")
// }
// function named(req,res) {
//     res.send("named exports")
// }
// module.exports=defaul;
// module.exports={named};

// server.listen(4000,()=>{
//     console.log("server is running at port no:4000");
// })


// 3 Create a middleware which will be applicable to all the routes.
const check=require("Routes/Check")
const app= express();
const middleware1=(req,res,next)=>{
    console.log("middleware1");
    next()
}
const middleware2=(req,res,next)=>{
    console.log("middleware2");
    next();
}
app.use(middleware1)
// app.get('/page1'.(req,res)=>{
//     res.send("page1 -both middleware1 and 2 applied")
// })













