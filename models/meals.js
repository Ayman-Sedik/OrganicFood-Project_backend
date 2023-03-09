const mongoose=require("mongoose");


const mealSchema= new mongoose.Schema({
    src:{type:String,require:true},
    name:{type:String,require:true},
    ingredient:{type:[String],require:true},
    desc:{type:[String],require:true},
    
});


const mealModel= mongoose.model("meals",mealSchema);

module.exports=mealModel;