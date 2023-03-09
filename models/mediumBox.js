const mongoose=require("mongoose");


const mediumBoxSchema= new mongoose.Schema({
    
    name:{type:String,require:true},
    weight:{type:Number,require:true},
   
});


const mediumBoxModel= mongoose.model("mediumBox",mediumBoxSchema);

module.exports=mediumBoxModel;