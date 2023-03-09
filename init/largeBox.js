const mongoose = require('mongoose');

mongoose.set("strictQuery", false);
mongoose.connect("mongodb://127.0.0.1:27017/finalprojectApp", (err) => {
    if (!err) return console.log("db connected");
    console.log(err);
});

const largeBox = require("../models/largeBox");

const products = [
    new largeBox({
        
        name: "turnip",
        weight: 5

    }),
    new largeBox({
 
        name: "carrots",
        weight: 7

    }),

    
    new largeBox({
 
        name: "spud",
        weight: 5

    }),

    new largeBox({
 
        name: "onion",
        weight: 9


    }),

    new largeBox({
 
        name: "Garlic",
        weight: 5


    }),

    new largeBox({
 
        name: "broccoli",
        weight: 5

    }),

     
    new largeBox({
 
        name:"yoghurt",
 
        weight: 5
    }),

   

    new largeBox({
 
        name:"Milk",
 
        weight: 5
    }),

    new largeBox({
 
        name:"American Cheese",
 
        weight: 9
    }),

    new largeBox({
 
        name:"Brie Cheese",
 
        weight: 5
    }),

   
    new largeBox({
 
        name:"Beef",
 
        weight: 7
    }),

    new largeBox({
 
        name:"Soft minced meat",
 
        weight: 5
    }),

    new largeBox({
 
        name:"Lamb meat",
 
        weight: 9
    }),

   new largeBox({
    

    name: "asparagus",
    weight:3
   }),

   new largeBox({
    

    
    name: "Okra",
    weight:3

   }),

   new largeBox({
    

    
    
    name:"Beef",
    weight:2


   }),

   new largeBox({
    

    
    
   

        name:" Duck",
        weight:1



   }),



   

    
   

    
     

         new largeBox({
 
        name: "ginger",
   
        weight: 9
        

    }),
    new largeBox({
 
        name: "Rosemary",
         
        weight: 5

    }),

    new largeBox({
 
        name: "cinnamon",
         
        weight: 5
    }),

    new largeBox({
 
        name: "Wild thyme ",
         
        weight: 6

    }),

    new largeBox({
 
        name: "parsley",
         
        weight: 6

    }),

    new largeBox({
 
        name: "nettle",
         
        weight: 5

    }),

    new largeBox({
 
        name: "Guava",
         
        weight: 5
    }),
    new largeBox({
 
        name: "Apple",
         
        weight: 7

    }),

    new largeBox({
 
        name: "Orange",
         
        weight: 5
    }),

    new largeBox({
 
        name: "Banana",
        
        weight: 9

    }),

    new largeBox({
 
        name: "pear",
         
        weight: 9


    }),

    new largeBox({
 
        name: "peach",
 
        
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