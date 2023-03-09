const mongoose = require('mongoose');

mongoose.set("strictQuery", false);
mongoose.connect("mongodb://127.0.0.1:27017/finalprojectApp", (err) => {
    if (!err) return console.log("db connected");
    console.log(err);
});

const meal = require("../models/meals");
const meals = [
    new meal({
        src: "https://img.delicious.com.au/EEJ2ozkv/del/2020/10/green-tea-noodles-with-sticky-sweet-chilli-salmon-140868-2.jpg",
        name: "Green tea noodles with sticky sweet chilli salmon",

        ingredient: ["1/2 cup (125ml) peanut oil", "1 tbs finely chopped ginge", "3 long green shallots, thinly sliced",
            "1 lemongrass stalk (white part only), finely grated", "1 1/2 tbs runny honey", "2 tbs extra virgin olive oil",
            "80g chilli paste in soybean oil", "600g whole skinless salmon fillet, pin-boned", "240g packet dried green tea noodles", "1/3 cup (80ml) lime juice", "2 1/2 tsp caster sugar", "2 tsp fish sauce", "1/2 tsp chilli flakes, plus extra to serve", "Toasted sesame seeds & micro shiso leaves, to serve"],

        desc: ["Preheat oven to 220°C. Heat peanut oil in a small saucepan over low heat. Add ginger, long green shallot, lemongrass and a pinch of salt. Cook, stirring occasionally, for 6-8 minutes until long green shallot is very soft but not coloured. Remove from heat and cool.",
            "Meanwhile, combine honey, olive oil and chilli paste in a bowl. Stir to combine. Line a baking tray with baking paper and add salmon. Rub honey mixture over salmon to coat, then season. Roast for 12-15 minutes for medium. Set aside, loosely covered with foil, to rest for 5 minutes.",
            "Cook noodles according to packet instructions. Drain and rinse briefly with warm water.", "Whisk lime juice, sugar, fish sauce and chilli flakes into the shallot oil mixture. Place noodles in a large bowl with three quarters of the shallot oil, season and toss to combine. Arrange on a serving platter and flake salmon over the top. Drizzle over remaining shallot oil and scatter with extra chilli flakes, toasted sesame seeds and shiso leaves. Serve at room temperature or chilled."]

    }),

    
     new meal({
            src: "https://img.delicious.com.au/Zg3Ofy7x/del/2021/09/sesame-beef-with-gochujang-udon-noodles-157974-2.jpg",
            name: "Sesame beef with gochujang udon noodles",
            
            ingredient: ["400g skirt beef steak",
                "2 tsp sesame oil",
                "400g udon noodles",
                "50g unsalted butter, chopped",
                "150g mixed Asian mushrooms, sliced",
                "1/4 cup gochujang (Korean fermented chilli paste)",
               " 1 tbs tomato sauce",
               " 120g baby spinach leaves",
                "1 bunch broccolini, cut in half on the diagonal, blanched",
                "Chopped nori & toasted sesame seeds, to serve"],
    
            desc: ["Place the skirt steak on a large oven tray, season with salt flakes and drizzle with the sesame oil. Leave steak to stand at room temperature for 30 minutes or until the fridge chill has gone..",
                "Cook the udon noodles according to packet instructions, reserving 1 cup (250ml) of noodle water.",
                "Heat a lightly greased barbecue or chargrill pan over high heat. Grill the steak for 3-4 minutes on each side until cooked to your liking. Remove from the heat and rest, loosely covered with foil, for 10-12 minutes.", "Meanwhile, heat half the butter in a large non-stick frypan over medium-high heat. Add the mushroom and cook for 2-3 minutes until golden. Remove and set aside. Add the gochujang and tomato sauce to the pan and cook, stirring, for 1-2 minutes until the gochujang is lightly caramelised. Add the noodle water and bring to a simmer, cooking for 2-3 minutes until the liquid is slightly reduced.",
            "Add the noodles, spinach and remaining butter, and stir until spinach is wilted and noodles are coated in the sauce.",
        "Divide noodles among serving plates, top with sliced steak, broccolini, mushroom and nori. Sprinkle with sesame seeds to serve."]
    
        }),

        new meal({
            src: "https://img.delicious.com.au/XOkfl61w/del/2020/12/lemon-chicken-144144-1.jpg",
            name: "Lemon chicken",
            
            ingredient: ["1 tsp cornflour",
               " 1 tsp dark soy sauce",
                "Finely grated zest & juice 1/2 small lemon",
               " 2 tsp coconut or canola oil",
                "1 skinless chicken breast fillet (around 150g), cut into 1.5cm slices",
               " 1 capsicum, any colour, deseeded and sliced",
               " 1 medium carrot (around 80g), trimmed and thinly sliced",
                "100g broccoli, cut into small florets",
               " 150ml chicken stock (made with 1/2 Massel Plant Based Chicken Stock cube)",
                "4 spring onions, trimmed and thickly sliced"],
    
            desc: ["Mix the cornflour with the soy sauce and lemon juice in a small bowl.",
                "Heat the oil in a large frying pan or wok over a high heat, add the chicken, capsicum, carrot and broccoli and stir-fry for 2–3 minutes, or until the chicken is lightly browned and the vegetables are beginning to soften.",
                "Heat a lightly greased barbecue or chargrill pan over high heat. Grill the steak for 3-4 minutes on each side until cooked to your liking. Remove from the heat and rest, loosely covered with foil, for 10-12 minutes.", "Meanwhile, heat half the butter in a large non-stick frypan over medium-high heat. Add the mushroom and cook for 2-3 minutes until golden. Remove and set aside. Add the gochujang and tomato sauce to the pan and cook, stirring, for 1-2 minutes until the gochujang is lightly caramelised. Add the noodle water and bring to a simmer, cooking for 2-3 minutes until the liquid is slightly reduced.",
            "Sprinkle with grated lemon zest and serve with rice."]
    
        }),


        new meal({
            src: "https://img.delicious.com.au/FhRD4JI0/del/2020/12/iceberg-with-dried-oregano-dressing-and-creamy-sheeps-milk-cheese-143662-2.jpg",
            name: "Iceberg with dried oregano dressing and creamy sheep's milk cheese",
            
            ingredient: ["2 iceberg lettuces, outer leaves removed",
                "1 bunch chives, snipped",
                "1/2 bunch dill, fronds picked",
                "50-70g creamy sheep’s milk feta (Bulgarian sheep’s milk feta works, or even a Danish cow’s milk feta would be good too)",
                "VINAIGRETTE DRESSING",
                "30g thinly sliced eschalot",
                "50ml agrodolce-style white wine vinegar (if you can’t find that, add 2 tsp honey to regular white wine vinegar)",
               " 1 tsp salt",
                "1 1/ 2 tsp dried oregano",
                "120ml extra-virgin olive oil"],
    
            desc: ["First, make your vinaigrette. In a small bowl or jar with a lid, combine the eschalot, vinegar and salt. Leave to macerate for about 15 minutes. Next, add the oregano and olive oil and mix or shake to combine.",
                
            "Cut your iceberg into thin, long wedges and arrange on a platter. Shake the dressing up just before pouring it over the lettuce. Sprinkle a bit of salt on top, followed by the chives and dill, then shave slices of cheese over the whole thing, or simply crumble it in. Serve immediately."]
    
        }),

        new meal({
            src: "https://img.delicious.com.au/Bwlx7yoN/del/2017/06/asian-eggs-47827-2.jpg",
            name: "This recipe for Asian eggs is what to cook when you don't feel like cooking",
            
            ingredient: ["1&1/2 cups (300g) long-grain rice",            
           " 1/2 cup (75g) unsalted peanuts",
           " 100ml sunflower or peanut oil",
            "8 eggs",
           " 1 bunch each coriander & Thai basil, leaves picked",
           " Bean sprouts, chopped birdseye chilli & lime wedges to serve"],
    
            desc: ["Preheat oven to 180°C. Cook rice to packet instructions, then set aside.",
                
            "Place peanuts on a baking tray and roast for 10 minutes or until light golden then remove, cool and roughly chop.",
        "For the chilli paste, combine ingredients in a bowl and set aside.",
    "Heat oil in a wok over medium-high heat. Crack one egg into a cup, then when the oil is hot, use the cup to pour the egg into the centre. Cook for 1 minute or until the outside starts to go golden but the yolk is still runny. Remove with a slotted spoon and repeat with remaining eggs.",
"Spoon rice onto dishes, top with eggs, peanuts, herbs and chilli sauce. Serve with bean sprouts, extra chilli and lime wedges."]
    
        }),

]
var num=0;
for (var i=0 ;i<meals.length; i++){
    console.log(i);
    meals[i].save((error,data)=>{
        if(!error){
        console.log(data);
        num++;
        if(num===meals.length){
            mongoose.disconnect();
        }
    
    }else{
        console.log(error);
    }
        
    })
}