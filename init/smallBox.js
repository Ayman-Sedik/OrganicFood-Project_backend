const mongoose = require('mongoose');

mongoose.set("strictQuery", false);
mongoose.connect("mongodb://127.0.0.1:27017/finalprojectApp", (err) => {
    if (!err) return console.log("db connected");
    console.log(err);
});

const smallbox = require("../models/smallBox");

const products = [
     new smallbox({
 
        name: "turnip",
 
        weight: 5

    }),
    new smallbox({
 
        name: "carrots",
 
        weight: 2

    }),

    
    new smallbox({
 
        name: "spud",
 
        weight: 3

    }),

    new smallbox({
 
        name:"yoghurt",
     
        weight: 4
    }),

    
    new smallbox({
 
        name:"Milk",
    
        weight: 5
    }),

    new smallbox({
 
        name:"Beef",
    
        weight: 2
    }),

    new smallbox({
 
        name:"Soft minced meat",
   
        weight: 1
    }),

    new smallbox({
 
        name:"Lamb meat",
     
        weight: 1
    }),

    

    
    
     
     
      new smallbox({
 
        name: "ginger",
 
        
        weight: 1
        

    }),
    new smallbox({
 
        name: "Rosemary",
 
        weight: 1

    }),

    new smallbox({
 
        name: "cinnamon",
     
        weight: 1
    }),

    new smallbox({
 
        name: "Guava",
 
        weight: 2
    }),
    new smallbox({
 
        name: "Apple",
       
        weight: 4

    }),

    new smallbox({
 
        name: "Orange",
 
       
        weight: 5
    }),


]

var num=0;
for (var i=0 ;i<products.length; i++){
    console.log(i);
    products[i].save((error,data)=>{
        if(!error){
        console.log(data);
        num++;
        if(num===products.length){
            mongoose.disconnect();
        }
    
    }else{
        console.log(error);
    }
        
    })
}