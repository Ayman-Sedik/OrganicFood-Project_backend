const mongoose=require("mongoose");


const diseasesSchema= new mongoose.Schema({
    type:{type:String,require:true},
    image:{type:String,require:true},
    question:{type:String,require:true},
    answer:{type:[String],require:true},
    products:{type:[{}],require:true}
});


const diseasesModel= mongoose.model("diseases",diseasesSchema);

module.exports=diseasesModel;