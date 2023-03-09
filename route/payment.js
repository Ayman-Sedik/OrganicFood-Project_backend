require ("dotenv").config();
const Stripe=require("stripe")(process.env.STRIPE_SECRET_KEY);
const express=require("express");
const router=express.Router();

router.post("/",async (req,res)=>{
    const {amount}=req.body;
    console.log(amount)
try {
    const paymentIntent=await Stripe.paymentIntent.create({
        amount,
        currency:"usd"
    })
    console.log(paymentIntent.client_secret);
    res.status(200).send(paymentIntent.client_secret);

} catch (error) {
    res.status(500).json({message:error.message})
}})

module.exports=router;