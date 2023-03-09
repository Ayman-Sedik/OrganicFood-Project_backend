const mongoose=require('mongoose');

mongoose.set("strictQuery", false);
mongoose.connect("mongodb://127.0.0.1:27017/finalprojectApp",(err)=>{
    if(!err) return console.log("db connected");
    console.log(err);
});

const milk=require("../models/milk");

const milkArray=[
    new milk({
        type:"milk",
        src:"https://cdn-prod.medicalnewstoday.com/content/images/articles/295/295714/yogurt-greek.jpg",
        name:"yoghurt",
        desc:"Yogurts can be high in protein, calcium, vitamins, and live culture, or probiotics, which can enhance the gut microbiota ",
        price:10,
        offer:0,

        quantity:100
    }),

    new milk({
        type:"milk",

        src:"https://article.innovadatabase.com/articleimgs/article_images/637012813408253935breakfast%20yoghurt%20[750x750].jpg",
        name:"yoghurt",
        desc:"Yogurts can be high in protein, calcium, vitamins, and live culture, or probiotics, which can enhance the gut microbiota ",
        price:13,
        offer:0,

        quantity:200
    }),

    new milk({
        type:"milk",

        src:"https://media.istockphoto.com/id/1197838680/photo/various-kinds-of-vegan-milk.jpg?s=612x612&w=0&k=20&c=6VGC5R9qc4NS9F7Iwp9UlJLqfDVeaEMjQLKeizSh6cA=",
        name:"Milk",
        desc:"Milk is an excellent source of calcium and phosphorus which are necessary for the development and maintenance of strong, healthy bones and teeth. ",
        price:10,
        offer:0,

        quantity:90
    }),

    new milk({
        type:"milk",

        src:"https://media.istockphoto.com/id/148985963/photo/camembert-cheese.jpg?s=612x612&w=0&k=20&c=Potx_o5i1bRiOfmQvlpWF-WKWPoGSirnnNRDWibpH3s=",
        name:"American Cheese",
        desc:"American Cheese is an excellent source of calcium and phosphorus which are necessary for the development and maintenance of strong, healthy bones and teeth. ",
        price:100,
        offer:50,

        quantity:60
    }),

    new milk({
        type:"milk",

        src:"https://media.istockphoto.com/id/504482253/photo/fresh-brie-cheese.jpg?s=612x612&w=0&k=20&c=iTBgadOLwd-yFh63alzmGzwZj4Lk4nSeee8OAhE0c_E=",
        name:"Brie Cheese",
        desc:"Brie Cheese is an excellent source of calcium and phosphorus which are necessary for the development and maintenance of strong, healthy bones and teeth. ",
        price:90,
        offer:40,

        quantity:70
    }),

    new milk({
        type:"milk",

        src:"https://media.istockphoto.com/id/1315847880/photo/triangle-of-fresh-brie-cheese.jpg?s=612x612&w=0&k=20&c=2iqFo1dnQmMCfN4RHc7-dzdOg04KTnYJoOqyJpmpG2I=",
        name:"Brie Cheese",
        desc:"Brie Cheese is an excellent source of calcium and phosphorus which are necessary for the development and maintenance of strong, healthy bones and teeth. ",
        price:10,
        offer:0,

        quantity:70
    }),

    new milk({
        type:"milk",

        src:"https://media.istockphoto.com/id/531048911/photo/portion-of-cheddar.jpg?s=612x612&w=0&k=20&c=mzcYWuuRiPHm-UOIk1GToW7O0qhPEkb-3WDa46M2lbg=",
        name:"Cheddar Cheese",
        desc:"cheddar is a cow's milk cheese that was first produced in England. Like most cheeses, young cheddars are mild and creamy; aged cheddars are more crumbly and complex in flavor ",
        price:90,
        offer:20,

        quantity:70
    }),

    new milk({
        type:"milk",

        src:"https://media.istockphoto.com/id/513274009/photo/sliced-cheese.jpg?s=612x612&w=0&k=20&c=elXkrNBi5AdFJOst6Q04vYL-pQPn5smrxH5kWiSt-hg=",
        name:"Cheddar Cheese",
        desc:"cheddar is a cow's milk cheese that was first produced in England. Like most cheeses, young cheddars are mild and creamy; aged cheddars are more crumbly and complex in flavor ",
        price:5,
        offer:0,

        quantity:100
    }),

    new milk({
        type:"milk",

        src:"https://media.istockphoto.com/id/156152121/photo/traditional-yellow-cheddar-cheese.jpg?s=612x612&w=0&k=20&c=OEim0pTd7Gh62480Pofz6C7FJmaczw6i9XTCjmHtbqg=",
        name:"Cheddar Cheese",
        desc:"cheddar is a cow's milk cheese that was first produced in England. Like most cheeses, young cheddars are mild and creamy; aged cheddars are more crumbly and complex in flavor ",
        price:10,
        offer:0,

        quantity:50
    }),

    new milk({
        type:"milk",

        src:"https://media.istockphoto.com/id/843658780/photo/desi-ghee-or-clariified-liquid-butter-cooking-oil-pure-ghee.jpg?s=612x612&w=0&k=20&c=euSGI7fpLfzASpGmtSZ-k60xInWvR9JGx-2iIZNyf90=",
        name:"Clarified butter",
        desc:"Clarified butter is rich in vitamins, works over high heat ",
        price:20,
        offer:0,

        quantity:30
    }),

    new milk({
        type:"milk",

        src:"https://media.istockphoto.com/id/1166196966/photo/ghee-clarified-butter-in-jar.jpg?s=612x612&w=0&k=20&c=frQwEWE_TWQH6n7OuRdU2yqVmhe6QhVMdmdfLv3hio4=",
        name:"Clarified butter",
        desc:"Clarified butter is rich in vitamins, works over high heat ",
        price:50,
        offer:0,

        quantity:200
    }),

    new milk({
        type:"milk",

        src:"https://media.istockphoto.com/id/1338222224/photo/butter-blocks-and-pieces-on-wooden-table-copy-space.jpg?s=612x612&w=0&k=20&c=65ZYwALchrY4iXYkfrchnnWKCpuP20TZvXnSSmWnBPM=",
        name:"Spreadable butter",
        desc:"Spreadable butter is rich in vitamins, works over high heat ",
        price:54,
        offer:0,

        quantity:100
    }),

    new milk({
        type:"milk",

        src:"https://media.istockphoto.com/id/465281885/photo/cotija-cheese.jpg?s=612x612&w=0&k=20&c=av7APq4KthKCkVsnUtpwRKfXf3YsXO62uFz5s8K5q8A=",
        name:"Cotija cheese",
        desc:"Cotija provides protein, which your body needs to build and repair tissue, and some vitamin A, which is good for eyesight and gives your immune system a boost.",
        price:35,
        offer:0,

        quantity:6
    }),

    new milk({
        type:"milk",

        src:"https://media.istockphoto.com/id/1390761340/photo/mexican-white-cotija-cheese-tequila-shot-with-fresh-ingredients-in-mexico-latin-america.jpg?s=612x612&w=0&k=20&c=TgNmvPHRRJmmdMVCDFkjW3sNEjVKTyjDo5NNIzpz3GM=",
        name:"Cotija cheese",
        desc:"Cotija provides protein, which your body needs to build and repair tissue, and some vitamin A, which is good for eyesight and gives your immune system a boost.",
        price:20,
        offer:0,

        quantity:6
    }),

    new milk({
        type:"milk",

        src:"https://media.istockphoto.com/id/155445919/photo/bowl-of-cottage-cheese.jpg?s=612x612&w=0&k=20&c=68ZJjQC-403C0gT24D3Q0YB8G_cuNFTK38u2koB_zqs=",
        name:"Cottage Cheese",
        desc:"Cottage cheese is an excellent source of calcium, a mineral that plays a major role in tooth and bone health, and in the prevention of osteoporosis. It also helps you to regulate your blood pressure and might even play a roleTrusted Source in preventing certain cancers, such as prostate cancer..",
        price:60,
        offer:20,

        quantity:55
    }),

    new milk({
        type:"milk",

        src:"https://media.istockphoto.com/id/479095932/photo/greek-feta-cheese-block-isolated-on-white.jpg?s=612x612&w=0&k=20&c=7_Swl1P9UI5XKxSiz4cxS-Gqi7xE4f6bOvML1yH_jmE=",
        name:"Feta Cheese",
        desc:"Feta cheese is an excellent source of calcium, a mineral that plays a major role in tooth and bone health, and in the prevention of osteoporosis. It also helps you to regulate your blood pressure and might even play a roleTrusted Source in preventing certain cancers, such as prostate cancer..",
        price:10,
        offer:0,

        quantity:33
    }),

    new milk({
        type:"milk",

        src:"https://media.istockphoto.com/id/157398750/photo/piece-of-dutch-gouda-cheese.jpg?s=612x612&w=0&k=20&c=7tfrVOvzgQYIH04t7EEyF_STQHlawZHVWevDhQ47iBg=",
        name:"Fontina Cheese",
        desc:"Fontina cheese gives support to your bones, muscles and immune system.",
        price:26,
        offer:5,

        quantity:40
    }),

    new milk({
        type:"milk",

        src:"https://media.istockphoto.com/id/511852087/photo/slices-of-goat-cheese-with-fresh-thyme.jpg?s=612x612&w=0&k=20&c=IEguHfoJrQPXexnSs6VbS0Ku-Ap-bBo76PEfK0okeXk=",
        name:"Goat Cheese",
        desc:"Goat cheese is a source of protein, calcium, and healthy fats.",
        price:26,
        offer:0,

        quantity:50
    }),

    new milk({
        type:"milk",

        src:"https://media.istockphoto.com/id/1354385493/photo/fresh-soft-goat-cheese-on-a-cutting-board-with-thyme-black-background-top-view.jpg?s=612x612&w=0&k=20&c=CClYdJyMRBJrynIM5ZPXhxOgXKMOuEbTMoKnro8rldI=",
        name:"Goat Cheese",
        desc:"Goat cheese is a source of protein, calcium, and healthy fats.",
        price:50,
        offer:0,

        quantity:2
    }),

    new milk({
        type:"milk",

        src:"https://media.istockphoto.com/id/490690366/photo/various-cheeses.jpg?s=612x612&w=0&k=20&c=4epX68pm5rglZAJlhbfdyOITxWwJhcT_uLk4q2pJrnA=",
        name:"Gouda Cheese",
        desc:"Gouda Cheese is a source of protein, calcium, and healthy fats.",
        price:60,
        offer:0,

        quantity:5
    }),

    new milk({
        type:"milk",

        src:"https://media.istockphoto.com/id/532549702/photo/fenugreek-gauda-herb-cheese.jpg?s=612x612&w=0&k=20&c=GMyCa9FYP-iP2h-AAq5Ov-oCHHjtmCuDbjx7xKa7K98=",
        name:"Gouda Cheese",
        desc:"Gouda Cheese is a source of protein, calcium, and healthy fats.",
        price:100,
        offer:30,

        quantity:10
    }),

    new milk({
        type:"milk",

        src:"https://media.istockphoto.com/id/1346355665/photo/ghee-or-clarified-butter-in-wooden-bowl-cooking-oil-pure-ghee-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=9wRUSSx7AWfvnpEKiJU0UAV4_OpLKA-hj7WcVENIvBs=",
        name:"Ghee",
        desc:"Ghee  has healthy fats.",
        price:26,
        offer:0,

        quantity:50
    }),

    new milk({
        type:"milk",

        src:"https://media.istockphoto.com/id/500618702/photo/cheese.jpg?s=612x612&w=0&k=20&c=9iHzKzcA__6Ythj6ANb72TUg3rY1GTrFrh6N9aolEVs=",
        name:"Grana Padano",
        desc:"contains amino acids that relax your blood vessels, which subsequently reduces your risk of hypertension.",
        price:94,
        offer:20,

        quantity:25
    }),

    new milk({
        type:"milk",

        src:"https://media.istockphoto.com/id/1279647370/photo/whole-and-grated-italian-hard-cheese-grana-padano-or-parmesan-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=vcoGQvORLlfEaaj6bRdU2CyYO7pDQTnjmBWm5MWXEBk=",
        name:"Grana Padano",
        desc:"contains amino acids that relax your blood vessels, which subsequently reduces your risk of hypertension.",
        price:52,
        offer:5,

        quantity:34
    }),

    new milk({
        type:"milk",

        src:"https://media.istockphoto.com/id/519910637/photo/piece-of-cheese-with-holes.jpg?s=612x612&w=0&k=20&c=AJ4JAw9eLhEJqOxQG7-FTBl5pAAuudghVJJop5EBu0A=",
        name:"Gruyère",
        desc:"Gruyere cheese is healthy. It is also rich in thiamine and riboflavin as an excellent source of calcium and other vitamins like vitamins A,k, and B12.",
        price:58,
        offer:10,

        quantity:69
    }),

    new milk({
        type:"milk",

        src:"https://media.istockphoto.com/id/520244369/photo/comte-cheese-sliced.jpg?s=612x612&w=0&k=20&c=pw86urJRt5L_hn8d2Xr4PaXivHYk_sHSV0CiOtpAsDQ=",
        name:"Gruyère",
        desc:"Gruyere cheese is healthy. It is also rich in thiamine and riboflavin as an excellent source of calcium and other vitamins like vitamins A,k, and B12.",
        price:47,
        offer:0,

        quantity:100
    }),

    new milk({
        type:"milk",

        src:"https://media.istockphoto.com/id/496599287/photo/halloumi-cheese-sliced.jpg?s=612x612&w=0&k=20&c=ZVB-nQqDkHn-YP4KCAaJX6XM1VL_iltVSdM2HtSajVc=",
        name:"Halloumi",
        desc:"Halloumi cheese is healthy. It is also rich in thiamine and riboflavin as an excellent source of calcium and other vitamins like vitamins A,k, and B12.",
        price:47,
        offer:0,

        quantity:100
    }),

    new milk({
        type:"milk",

        src:"https://media.istockphoto.com/id/1136653744/photo/cured-manchego-cheese.jpg?s=612x612&w=0&k=20&c=0KrLAbUW4tY2MOd6mu2XP4wj10en_1QSq0omRTJsMPU=",
        name:"Manchego",
        desc:" manchego cheese is a important source of calcium, a mineral necesary for the growth of bones.",
        price:86,
        offer:0,

        quantity:57
    }),

    new milk({
        type:"milk",

        src:"https://media.istockphoto.com/id/517929743/photo/spanish-manchego-cheese.jpg?s=612x612&w=0&k=20&c=afI_fJksvdCNjL2S7dSrBd3DiVPkdvUvEhNErdEfuwg=",
        name:"Manchego",
        desc:" manchego cheese is a important source of calcium, a mineral necesary for the growth of bones.",
        price:200,
        offer:20,

        quantity:5
    }),

    new milk({
        type:"milk",

        src:"https://media.istockphoto.com/id/1129676506/photo/traditional-mascarpone-cheese-in-wooden-bowl-on-table.jpg?s=612x612&w=0&k=20&c=KCh8bXkPDNxobPCGBASY4xxN7OzI_j7Dq9S-OOX8iVU=",
        name:"Mascarpone",
        desc:" Mascarpone cheese is a important source of calcium, a mineral necesary for the growth of bones.",
        price:50,
        offer:0,

        quantity:54
    }),

]
var num=0;
for (var i=0 ;i<milkArray.length; i++){
    console.log(i);
    milkArray[i].save((error,data)=>{
        if(!error){
        console.log(data);
        num++;
        if(num===milkArray.length){
            mongoose.disconnect();
        }
    
    }else{
        console.log(error);
    }
        
    })
}