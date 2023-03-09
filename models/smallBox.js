const mongoose=require("mongoose");


const smallBoxSchema= new mongoose.Schema({
    
    name:{type:String,require:true},
    weight:{type:Number,require:true},
   
});


const smallBoxModel= mongoose.model("smallBox",smallBoxSchema);

module.exports=smallBoxModel;