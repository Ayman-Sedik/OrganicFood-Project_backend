const mongoose = require('mongoose');

mongoose.set("strictQuery", false);
mongoose.connect("mongodb://127.0.0.1:27017/finalprojectApp", (err) => {
    if (!err) return console.log("db connected");
    console.log(err);
});

const mediumbox = require("../models/mediumBox"); 

const products = [
    new mediumbox({
 
        name: "turnip",
 
        weight: 5

    }),
    new mediumbox({
 
        name: "carrots",
   
        weight: 7

    }),

    
    new mediumbox({
 
        name: "spud",
 
        weight: 5

    }),

    new mediumbox({
 
        name: "onion",
  
        weight: 9


    }),

    new mediumbox({
 
        name: "Garlic",
   
        weight: 5


    }),

    new mediumbox({
 
        name:"yoghurt",
 
        weight: 5
    }),

    

    new mediumbox({
 
        name:"Milk",
 
        weight: 5
    }),

    new mediumbox({
 
        name:"American Cheese",
 
        weight: 9
    }),

    new mediumbox({
 
        name:"Brie Cheese",
 
        weight: 5
    }),

    new mediumbox({
 
        name:"Beef",
 
        weight: 7
    }),

    new mediumbox({
 
        name:"Soft minced meat",
 
        weight: 5
    }),

    new mediumbox({
 
        name:"Lamb meat",
 
        weight: 9
    }),

   

    
    
    
    
     
     


       

         new mediumbox({
 
        name: "ginger",
    
        weight: 9
        

    }),
    new mediumbox({
 
        name: "Rosemary",
 
        weight: 5

    }),

    new mediumbox({
 
        name: "cinnamon",
 
        weight: 5
    }),

    new mediumbox({
 
        name: "Wild thyme ",
  
        weight: 6

    }),

    new mediumbox({
 
        name: "parsley",
 
        weight: 6

    }),

    new mediumbox({
 
        name: "Guava",
 
        weight: 5
    }),
    new mediumbox({
 
        name: "Apple",
     
        weight: 7

    }),

    new mediumbox({
 
        name: "Orange",
 
        weight: 5
    }),

    new mediumbox({
 
        name: "Banana",
     
        weight: 9

    }),

    new mediumbox({
 
        name: "pear",
 
       
        weight: 9


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


