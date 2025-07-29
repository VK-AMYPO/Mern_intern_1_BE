var express=require("express");
var routing=express.Router();
var {postUser,getData,getDataById,updateData,deleteData}=require("../controller/user.controller")

routing.post("/postdata",postUser)
routing.get("/getdata",getData)
routing.get("/getdata/:id",getDataById)
routing.put("/update/:id",updateData)
routing.delete("/delete/:id",deleteData)

module.exports=routing