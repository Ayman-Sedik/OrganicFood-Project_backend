const express=require("express");
const router=express.Router();
const milkModel=require("../models/milk");

router.get("/",async(req,res)=>{
    try {
        const allMilk=await milkModel.find();
        res.json(allMilk);
    } catch (error) {
        res.send("DB:error");
    }
    });
    
    router.get("/:id",async(req,res)=>{
        const id=req.params.id;
    try {
        const milk=await milkModel.findById(id);
        res.json(milk);
    
    } catch (error) {
        res.send("DB:error");
    }
    });
    
    router.post("/",async(req,res)=>{
     
        const milkData=req.body;
        const newMilk=new milkModel(milkData);
        try {
            const saveData=await newMilk.save();
            res.json(saveData);
        } catch (error) {
            res.send("DB:error");
        }
    });
    
    router.put("/:id",async(req,res)=>{
        const id = req.params.id;
        const updateType=req.body.type;

        const updatsrc = req.body.src;
        const updatname = req.body.name;
        const updatdesc = req.body.desc;
        const updataprice=req.body.price;
        const updateOffer=req.body.offer;

        const updatquantity=req.body.quantity;
        try {
            const updateData = await milkModel.findOneAndUpdate({ _id: id }, { $set: { type:updateType, src: updatsrc, name: updatname, desc: updatdesc,price:updataprice,offer:updateOffer,quantity:updatquantity } }, { new: true });
            res.json(updateData);
        } catch (error) {
            res.send("DB:error");
        }
    });
    
    router.delete("/:id",async(req,res)=>{
        const id=req.params.id;
        try {
            const deletData = await milkModel.findOneAndDelete({ _id: id });
            res.json(deletData);
        } catch (error) {
            res.send("DB:error");
        }
    })
    
    
   module.exports=router; 
    
    