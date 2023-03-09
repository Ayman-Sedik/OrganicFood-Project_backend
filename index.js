const express=require("express");
const mongoose=require('mongoose');
const app=express();
const cors=require('cors');
app.use(express.json());
app.use(cors());
require ("dotenv").config();

const signupRouter=require('./route/signup');  
const loginRouter=require("./route/login") ;
const fruitsRouter=require("./route/fruits");
const vegetableRouter=require("./route/vegetable");
const herbalRouter=require("./route/herbals");
const meatRouter=require("./route/meat");
const milkRouter=require("./route/milk");
const mealsRouter=require("./route/meals");
const diseasesRouter=require("./route/diseases");
const allProducts=require("./route/allProducts");
const payment=require("./route/payment");
const smallBox=require("./route/smallBox");
const mediumBox=require("./route/mediumBox");
const largeBox=require("./route/largeBox");

//routes
app.use("/signup",signupRouter);
app.use("/login",loginRouter);
app.use("/fruits",fruitsRouter);
app.use("/vegetable",vegetableRouter);
app.use("/herbals",herbalRouter);
app.use("/meat",meatRouter);
app.use("/milk",milkRouter);
app.use("/meals",mealsRouter);
app.use("/diseases",diseasesRouter);
app.use("/all",allProducts);
app.use("/payment",payment);
app.use("/smallBox",smallBox);
app.use("/mediumBox",mediumBox);
app.use("/largeBox",largeBox);
//database 
mongoose.set("strictQuery", false);
mongoose.connect("mongodb://127.0.0.1:27017/finalprojectApp",(err)=>{
    if(!err) return console.log("db connected");
    console.log(err);
});

//server
app.listen(5000,(error)=>{
    if(!error) return console .log("server is starting....");
    console.log(error);
})