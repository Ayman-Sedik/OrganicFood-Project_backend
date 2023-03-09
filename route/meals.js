const express=require("express");
const router=express.Router();
const mealsModel=require("../models/meals");

router.get("/",async(req,res)=>{
    try {
        const allMeal=await mealsModel.find();
        res.json(allMeal);
    } catch (error) {
        res.send("DB:error");
    }
    });
    
    router.get("/:id",async(req,res)=>{
        const id=req.params.id;
    try {
        const meal=await mealsModel.findById(id);
        res.json(meal);
    
    } catch (error) {
        res.send("DB:error");
    }
    });
    
    router.post("/",async(req,res)=>{
     
        const mealData=req.body;
        const newMeal=new mealsModel(mealData);
        try {
            const saveData=await newMeal.save();
            res.json(saveData);
        } catch (error) {
            res.send("DB:error");
        }
    });
    
    router.put("/:id",async(req,res)=>{
        const id = req.params.id;
        const updatsrc = req.body.src;
        const updatname = req.body.name;
        const updataIngredient=req.body.ingredient;

        const updatdesc = req.body.desc;
        try {
            const updateData = await mealsModel.findOneAndUpdate({ _id: id }, { $set: { src: updatsrc, name: updatname ,ingredient:updataIngredient, desc: updatdesc} }, { new: true });
            res.json(updateData);
        } catch (error) {
            res.send("DB:error");
        }
    });
    
    router.delete("/:id",async(req,res)=>{
        const id=req.params.id;
        try {
            const deletData = await mealsModel.findOneAndDelete({ _id: id });
            res.json(deletData);
        } catch (error) {
            res.send("DB:error");
        }
    })
    
    
   module.exports=router; 
    
    