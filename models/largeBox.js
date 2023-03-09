const mongoose=require("mongoose");


const largeBoxSchema= new mongoose.Schema({
    
    name:{type:String,require:true},
    weight:{type:Number,require:true},
   
});


const largeBoxModel= mongoose.model("largeBox",largeBoxSchema);

module.exports=largeBoxModel;