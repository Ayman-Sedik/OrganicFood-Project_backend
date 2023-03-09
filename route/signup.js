const express=require("express");
const router=express.Router();
const {check,validationResult}=require("express-validator");
const userModel= require("../models/users");
const bcrypt = require('bcrypt');

router.post("/",check("fullname").matches(/[A-Z][a-z]*/) ,
check("phone").matches(/^\d{11}$/),
check("province").matches(/[A-Z][a-z]*/),
check("email").isEmail(),
check("password").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/),
check("confirmPassword").custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error('Password confirmation does not match password');
    }

    // Indicates the success of this synchronous custom validator
    return true;
  })
,async(req,res)=>{
    const {fullname,phone,province,email,password}=req.body;
    
    const errors=validationResult(req)

    if(errors.isEmpty()){
        const userEmail=await userModel.findOne({email})
        if(userEmail==null){
            bcrypt.hash(password, 4,async function(err, hash) {
                 
                try {
                    const saveData=await userModel.insertMany({fullname,phone,province,email,password:hash});
                    res.json(saveData);
                } catch (error) {
                    res.send("DB:error");
                }
    

            });
           
        }else{
            res.send("Email already exists")
        }
       
    }else{
        console.log(errors.array());
        res.send(errors.array());
    
    }
    
   
   
});

module.exports = router;