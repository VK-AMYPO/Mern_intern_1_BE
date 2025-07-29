//expressjs - nodejs - web framework 
//easy server, middleware, 

//npm - node package manager 
//nodemon - node application - live run - to handle the modules 
//test, start, build

//npm init -y ----> to initilaize the backend folder or package.json
//npm i nodemon -----> to handle the third party libraries and packages
//npm i express ------> web framework -----> server, 
// go to package.json --> script ---> start:"nodemon filename" -- to generate the starting command


//MVC - structure  - model view controller


//to create a server
var express = require("express");
const server = express(); //127.0.0.1
const port = 8080;
var cors=require("cors")//cross origin resourse sharing
var userRouter=require("./router/user.router")

server.use(express.json())
server.use(cors())
server.use("/user",userRouter)


//router



//id,
// server.get("/",(req,res)=>{// object
//     res.status(200).send("Im vinothkumar");  // to create the data
// })//location - string,API (req,res)

server.listen(port, () => {
    console.log("Server is running on " + port);
})

