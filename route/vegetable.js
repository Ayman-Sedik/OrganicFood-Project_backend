const express=require("express");
const router=express.Router();
const vegetableModel=require("../models/vegetable");

router.get("/",async(req,res)=>{
    try {
        const allVegetable=await vegetableModel.find();
        res.json(allVegetable);
    } catch (error) {
        res.send("DB:error");
    }
    });
    
    router.get("/:id",async(req,res)=>{
        const id=req.params.id;
    try {
        const vegetable=await vegetableModel.findById(id);
        res.json(vegetable);
    
    } catch (error) {
        res.send("DB:error");
    }
    });
    
    router.post("/",async(req,res)=>{
     
        const vegetableData=req.body;
        const newVegetable=new vegetableModel(vegetableData);
        try {
            const saveData=await newVegetable.save();
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
            const updateData = await vegetableModel.findOneAndUpdate({ _id: id }, { $set: { type:updateType, src: updatsrc, name: updatname, desc: updatdesc,price:updataprice,offer:updateOffer,quantity:updatquantity } }, { new: true });
            res.json(updateData);
        } catch (error) {
            res.send("DB:error");
        }
    });
    
    router.delete("/:id",async(req,res)=>{
        const id=req.params.id;
        try {
            const deletData = await vegetableModel.findOneAndDelete({ _id: id });
            res.json(deletData);
        } catch (error) {
            res.send("DB:error");
        }
    })
    
    
   module.exports=router; 
    
    