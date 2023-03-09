const express=require("express");
const router=express.Router();
const diseasesModel=require("../models/diseases");

router.get("/",async(req,res)=>{
    try {
        const allDiseases=await diseasesModel.find();
        res.json(allDiseases);
    } catch (error) {
        res.send("DB:error");
    }
    });
    
    router.get("/:id",async(req,res)=>{
        const id=req.params.id;
    try {
        const diseases=await diseasesModel.findById(id);
        res.json(diseases);
    
    } catch (error) {
        res.send("DB:error");
    }
    });
    
    router.post("/",async(req,res)=>{
     
        const diseasesData=req.body;
        const newDiseases=new diseasesModel(diseasesData);
        try {
            const saveData=await newDiseases.save();
            res.json(saveData);
        } catch (error) {
            res.send("DB:error");
        }
    });
    
    router.put("/:id",async(req,res)=>{
        const id = req.params.id;
        const updateType = req.body.type;
        const updatImage = req.body.image;
        const updatQuestion = req.body.question;
        const updatAnswer=req.body.answer;
        const updatPproducts=req.body.products;
        try {
            const updateData = await diseasesModel.findOneAndUpdate({ _id: id }, { $set: { type: updateType, image: updatImage, question: updatQuestion,answer:updatAnswer,products:updatPproducts } }, { new: true });
            res.json(updateData);
        } catch (error) {
            res.send("DB:error");
        }
    });
    
    router.delete("/:id",async(req,res)=>{
        const id=req.params.id;
        try {
            const deletData = await diseasesModel.findOneAndDelete({ _id: id });
            res.json(deletData);
        } catch (error) {
            res.send("DB:error");
        }
    })
    
    
   module.exports=router; 
    
    