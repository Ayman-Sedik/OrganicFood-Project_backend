const mongoose=require("mongoose");


const userSchema= new mongoose.Schema({
    fullname:{type:String,require:true},
    phone:{type:Number,require:true},
    province:{type:String,require:true},
    email:{type:String, require:true},
    password:{type:String, require:true},
});


const userModel= mongoose.model("user",userSchema);

module.exports=userModel;