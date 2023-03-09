const mongoose=require("mongoose");


const allSchema= new mongoose.Schema({
    type:{type:String,require:true},
    src:{type:String,require:true},
    name:{type:String,require:true},
    desc:{type:String,require:true},
    price:{type:Number, require:true},
    offer:{type:Number,require:true},
    quantity:{type:Number, require:true}
});


const allModel= mongoose.model("allProducts",allSchema);

module.exports=allModel;