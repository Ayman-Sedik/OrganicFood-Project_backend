const mongoose = require('mongoose');

mongoose.set("strictQuery", false);
mongoose.connect("mongodb://127.0.0.1:27017/finalprojectApp", (err) => {
    if (!err) return console.log("db connected");
    console.log(err);
});

const vegetable = require("../models/vegetable");

const vegetables = [
    new vegetable({
        type:"vegetable",

        src: " https://m.media-amazon.com/images/I/61Anhiq1UwL._SL1200_.jpg",
        name: "turnip",
        desc: "Turnips are a cruciferous vegetable with multiple health benefits. They boast an impressive nutritional profile",
        price: 12,
        offer:0,

        quantity: 5

    }),
    new vegetable({
        type:"vegetable",

        src: "https://cdnprod.mafretailproxy.com/sys-master-root/he3/h75/10187585781790/390441_main.jpg_480Wx480H",
        name: "carrots",
        desc: "Carrots are a particularly good source of beta carotene, fiber, vitamin K1, potassium, and antioxidants ( 1 )",
        price: 13,
        offer:0,

        quantity: 5

    }),

    
    new vegetable({
        type:"vegetable",

        src: " https://cdn.salla.sa/m6NJwS5HvoVqlU257CyH0T9EGpyUT7h8riC2yKUk.jpg ",
        name: "spud",
        desc: "They're rich in vitamin C, which is an antioxidant. Potatoes were a life-saving food source in early times",
        price: 13,
        offer:0,

        quantity: 7

    }),

    new vegetable({
        type:"vegetable",

        src: " https://cdnprod.mafretailproxy.com/sys-master-root/hec/h46/9342314709022/315896_main.jpg_480Wx480H",
        name: "onion",
        desc: "Onions contain antioxidants and compounds that fight inflammation, decrease triglycerides, and reduce cholesterol levels",
        price: 19,
        offer:0,

        quantity: 4


    }),

    new vegetable({
        type:"vegetable",

        src: "https://m.media-amazon.com/images/I/71KmgOL2q4L._SX679_.jpg",
        name: "Garlic",
        desc: "Antioxidants can not only help protect against chronic disease but also may play a key role in sexual health and fertility. Fresh garlic and aged garlic extract ",
        price: 13,
        offer:0,

        quantity: 4


    }),

    new vegetable({
        type:"vegetable",

        src: " https://produits.bienmanger.com/39229-0w600h600_Organic_Broccoli.jpg",
        name: "broccoli",
        desc: "Broccoli has a ton of nutritional benefits and contains 2.3 grams of fiber per cup, plus potassium and even some protein.",
        price: 19,
        offer:5,

        quantity: 7


    }),

    new vegetable({
        type:"vegetable",

        src: " https://ripeme.com/wp-content/uploads/RV-10047-RIPE-ORGANIC-ORGANIC-LETTUCE-ROMAINE.png",
        name: "lettuce",
        desc: "Lettuce is particularly rich in antioxidants like vitamin C and other nutrients like vitamins A and K and potassium",
        price: 19,
        offer:0,

        quantity: 7


    }),

    new vegetable({
        type:"vegetable",

        src: " https://cdn.shopify.com/s/files/1/0336/7167/5948/products/image-of-organic-parsley-organics-28657363746860_1200x1200.jpg?v=1628094275",
        name: "parsley",
        desc: " Parsley works as a powerful natural diuretic and can help reduce bloating and blood pressure. Parsley is loaded with vitamin K, which has been linked to bone health",
        price: 19,
        offer:0,

        quantity: 7


    }),

    new vegetable({
        type:"vegetable",
        src: " https://cdn.shopify.com/s/files/1/0206/9470/products/3542_grande.jpg?v=1622096058",
        name: "watercress",
        desc: "Watercress is also rich in vitamin C, which supports your immune system, helps you heal from injuries, and supports healthy collagen production",
        price: 19,
        offer:0,

        quantity: 5


    }),

    new vegetable({
        type:"vegetable",

        src: "https://m.media-amazon.com/images/I/91f+tameo2L._SX522_.jpg",
        name: "Mint",
        desc: "Health Benefits of Mint Leaves Are: Treat Indigestion; Relieve Irritable Bowel Syndrome; Improve Respiratory Complaints",
        price: 19,
        offer:0,

        quantity: 6


    }),

    new vegetable({
        type:"vegetable",

        src: "https://5.imimg.com/data5/KH/DJ/MY-1735846/fresh-spinach-500x500.jpg   ",
        name: "spinach",
        desc: "Spinach is a nutritious, leafy green. This vegetable has been shown to benefit health in several ways",
        price: 14,
        offer:0,

        quantity: 8


    }),

    new vegetable({
        type:"vegetable",

        src: "https://produits.bienmanger.com/38827-0w600h600_Organic_Fresh_Green_Peppers.jpg",
        name: "pepper",
        desc: "Peppers have a lot going for them. They're low in calories and are loaded with good nutrition. ",
        price: 12,
        offer:5,

        quantity: 7


    }),


    new vegetable({
        type:"vegetable",

        src: "https://5.imimg.com/data5/CA/CB/MY-2/organic-cucumber-500x500.jpg",
        name: "cucumber",
        desc: "All that water in cucumbers can help keep you hydrated. Plus, the fiber boost they give you helps you stay regular and avoid constipation",
        price: 17,
        offer:5,

        quantity: 7


    }),

    new vegetable({
        type:"vegetable",

        src: "https://4.imimg.com/data4/NN/NN/GLADMIN-/wp-content-uploads-french-beans-1-500x500.jpg ",
        name: "beans",
        desc: "Beans provide protein, fiber, iron, and antioxidants that can make them a healthful addition to the diet ",
        price: 19,
        offer:5,

        quantity: 7


    }),

    new vegetable({
        type:"vegetable",

        src: "https://produits.bienmanger.com/35322-0w0h0_Peas_From_France.jpg ",
        name: "peas",
        desc: "Peas are a good source of vitamins C and E, zinc, and other antioxidants that strengthen your immune system",
        price: 16,
        offer:0,

        quantity: 7


    }),

    new vegetable({
        type:"vegetable",

        src: "https://5.imimg.com/data5/JF/QO/GB/SELLER-13256592/cow-pea-250x250.jpg ",
        name: "cowpea",
        desc: "Cowpeas are rich in fibers, plant-based proteins, vitamins (A, C, thiamine, riboflavin, folate, and B6), iron, selenium, zinc, magnesium, phosphorus, and copper, which have countless health benefits",
        price: 19,
        offer:5,

        quantity: 7


    }),

    new vegetable({
        type:"vegetable",

        src: "https://cdn10.bigcommerce.com/s-f70ch/products/234/images/460/taro_root__63589.1500641139.1280.1280.jpg?c=2 ",
        name: "taro",
        desc: "Taro root is an excellent source of dietary fiber and good carbohydrates, which both improve the function of your digestive system and can contribute to healthy weight loss",
        price: 16,
        offer:0,

        quantity: 12



    }),

    new vegetable({
        type:"vegetable",

        src: "https://cdn.shopify.com/s/files/1/0104/1059/0266/products/Organic_Cabbage_Green.jpg?v=1544634755 ",
        name: "cabbage",
        desc: "Half a cup of cooked cabbage has about a third the vitamin C you need for the day. It also gives you doses of fiber",
        price: 13,
        offer:0,

        quantity: 9


    }),

    new vegetable({
        type:"vegetable",

        src: " https://organic-village.co.th/wp-content/uploads/2021/11/1-Okra.jpeg",
        name: "Okra",
        desc: "Okra is rich in vitamins A and C, as well as antioxidants that help reduce the risk of serious health conditions like cancer, diabetes, stroke, and heart disease. ",
        price: 18,
        offer:0,

        quantity: 4



    }),
    new vegetable({
        type:"vegetable",

        src: "https://media.istockphoto.com/id/511868689/photo/fresh-cauliflower-with-pieces-isolated-on-white.jpg?s=612x612&w=0&k=20&c=6HjOXfDxV2B5Oazl4jK69GiORAtQEPS7WYpTAJ-KW24= ",
        name: "cauliflower",
        desc: "Half a cup of cooked cauliflower has about a third the vitamin C you need for the day. It also gives you doses of fiber",
        price: 15,
        offer:0,

        quantity: 9


    }),

    new vegetable({
        type:"vegetable",

        src: "https://media.istockphoto.com/id/492464736/photo/fresh-celery-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=ezU7mfSslZFyzZV2yngLsaCAYOkexCMRyjdGJqyFwnA= ",
   name: "celery",
   desc: "Half a cup of cooked celery has about a third the vitamin C you need for the day. It also gives you doses of fiber",
   price: 10,
   offer:0,

   quantity: 50


    }),

    new vegetable({
        type:"vegetable",

        src: "https://media.istockphoto.com/id/1168507984/photo/artichoke-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=7xn2ZRItLqwMTRZz14SutgxXwSln8H2P-i1GhNi9Ry8=",
   name: "artichoke",
   desc: "Artichokes are low in fat while rich in fiber, vitamins, minerals, and antioxidants. Particularly high in folate and vitamins C and K, they also supply important minerals, such as magnesium, phosphorus, potassium, and iron",
   price: 20,
   offer:5,

   quantity: 10


    }),

    new vegetable({
        type:"vegetable",

        src: "https://media.istockphoto.com/id/1084123600/photo/green-asparagus-sticks.jpg?s=612x612&w=0&k=20&c=x7E0xz8E81yt3fg_BD_NMUw1qENCt-kZsWmwPCr4OnM=",
        name: "asparagus",
        desc: "Asparagus is a good source of dietary fiber, which plays an important role in digestion. Insoluble dietary fiber acts as a prebiotic, feeding important gut bacteria, while soluble dietary fiber helps wash “bad” cholesterol out of your system. Asparagus is also a good source of: Vitamin A.",
        price: 30,
        offer:10,

        quantity: 10


    }),


    new vegetable({
        type:"vegetable",

        src: "https://media.istockphoto.com/id/172925573/photo/red-tomatoes-still-on-the-vine.jpg?s=612x612&w=0&k=20&c=uljVOwI9ICETjf-bUHwDxP0sgb6e0hWRkmGcCJMei4E=",
   name: "tomatoes",
   desc: "Getting more tomatoes into your diet may make you less likely to have a stroke, which is when blood flow gets cut off to a part of your brain. Studies suggest that they may ease inflammation, boost your immune system, lower your cholesterol levels, and keep your blood from clotting.",
   price: 10,
   offer:0,

   quantity: 60


    }),
    new vegetable({
        type:"vegetable",

        src: "https://media.istockphoto.com/id/182356201/photo/two-courgettes.jpg?s=612x612&w=0&k=20&c=IPE6nJj3a92Dz1V_SRReBMa1uzIss7PxD2Lm_WFVwic=",
   name: "zucchini",
   desc: "Zucchini is rich in vitamin B6. Research suggests that this vitamin can help with regulating blood glucose. The vitamin may even play a protective role against diabetes. Compounds such as lutein and zeaxanthin protect the eye's cells by filtering blue light wavelengths.",
   price: 10,
   offer:0,

   quantity: 80


    }),

    new vegetable({
        type:"vegetable",

        src: "https://media.istockphoto.com/id/584890470/photo/fresh-beetroot-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=PE1qdc2DEMLTu4MaFUsAeHBf6gHXoVNt3g0k375eCG0=",
    name: "Beets",
    desc: "Beets are rich in folate (vitamin B9) which helps cells grow and function. Folate plays a key role in controlling damage to blood vessels, which can reduce the risk of heart disease and stroke. Beets are naturally high in nitrates, which are turned into nitric oxide in the body.",
    price: 20,
    offer:0,

    quantity: 100


    }),
    
]

var num = 0;
for (var i = 0; i < vegetables.length; i++) {
    console.log(i);
    vegetables[i].save((error, data) => {
        if (!error) {
            console.log(data);
            num++;
            if (num === vegetables.length) {
                mongoose.disconnect();
            }

        } else {
            console.log(error);
        }

    })
}