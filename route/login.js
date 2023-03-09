const express=require("express");
const router=express.Router();
const userModel= require("../models/users");
const bcrypt = require('bcrypt');

router.post("/",async(req,res)=>{
const {email,password}=req.body;
const userEmail= await userModel.findOne({email});
if(userEmail != null){
    const match = await bcrypt.compare(password, userEmail.password);

    if(match){
        res.send("user exists");
    }else{
        res.send("Password is not correct");
    }
}else{
    res.send("Email is not correct")
}
});

module.exports=router;
