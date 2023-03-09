const mongoose = require('mongoose');

mongoose.set("strictQuery", false);
mongoose.connect("mongodb://127.0.0.1:27017/finalprojectApp", (err) => {
    if (!err) return console.log("db connected");
    console.log(err);
});

const allProducts = require("../models/allProducts");

const all = [
    new allProducts({
        type:"vegetable",

        src: " https://m.media-amazon.com/images/I/61Anhiq1UwL._SL1200_.jpg",
        name: "turnip",
        desc: "Turnips are a cruciferous vegetable with multiple health benefits. They boast an impressive nutritional profile",
        price: 12,
        offer:0,

        quantity: 5

    }),
    new allProducts({
        type:"vegetable",

        src: "https://cdnprod.mafretailproxy.com/sys-master-root/he3/h75/10187585781790/390441_main.jpg_480Wx480H",
        name: "carrots",
        desc: "Carrots are a particularly good source of beta carotene, fiber, vitamin K1, potassium, and antioxidants ( 1 )",
        price: 13,
        offer:0,

        quantity: 5

    }),

    
    new allProducts({
        type:"vegetable",

        src: " https://cdn.salla.sa/m6NJwS5HvoVqlU257CyH0T9EGpyUT7h8riC2yKUk.jpg ",
        name: "spud",
        desc: "They're rich in vitamin C, which is an antioxidant. Potatoes were a life-saving food source in early times",
        price: 13,
        offer:0,

        quantity: 7

    }),

    new allProducts({
        type:"vegetable",

        src: " https://cdnprod.mafretailproxy.com/sys-master-root/hec/h46/9342314709022/315896_main.jpg_480Wx480H",
        name: "onion",
        desc: "Onions contain antioxidants and compounds that fight inflammation, decrease triglycerides, and reduce cholesterol levels",
        price: 19,
        offer:0,

        quantity: 4


    }),

    new allProducts({
        type:"vegetable",

        src: "https://m.media-amazon.com/images/I/71KmgOL2q4L._SX679_.jpg",
        name: "Garlic",
        desc: "Antioxidants can not only help protect against chronic disease but also may play a key role in sexual health and fertility. Fresh garlic and aged garlic extract ",
        price: 13,
        offer:0,

        quantity: 4


    }),

    new allProducts({
        type:"vegetable",

        src: " https://produits.bienmanger.com/39229-0w600h600_Organic_Broccoli.jpg",
        name: "broccoli",
        desc: "Broccoli has a ton of nutritional benefits and contains 2.3 grams of fiber per cup, plus potassium and even some protein.",
        price: 19,
        offer:5,

        quantity: 7


    }),

    new allProducts({
        type:"vegetable",

        src: " https://ripeme.com/wp-content/uploads/RV-10047-RIPE-ORGANIC-ORGANIC-LETTUCE-ROMAINE.png",
        name: "lettuce",
        desc: "Lettuce is particularly rich in antioxidants like vitamin C and other nutrients like vitamins A and K and potassium",
        price: 19,
        offer:0,

        quantity: 7


    }),

    new allProducts({
        type:"vegetable",

        src: " https://cdn.shopify.com/s/files/1/0336/7167/5948/products/image-of-organic-parsley-organics-28657363746860_1200x1200.jpg?v=1628094275",
        name: "parsley",
        desc: " Parsley works as a powerful natural diuretic and can help reduce bloating and blood pressure. Parsley is loaded with vitamin K, which has been linked to bone health",
        price: 19,
        offer:0,

        quantity: 7


    }),

    new allProducts({
        type:"vegetable",
        src: " https://cdn.shopify.com/s/files/1/0206/9470/products/3542_grande.jpg?v=1622096058",
        name: "watercress",
        desc: "Watercress is also rich in vitamin C, which supports your immune system, helps you heal from injuries, and supports healthy collagen production",
        price: 19,
        offer:0,

        quantity: 5


    }),

    new allProducts({
        type:"vegetable",

        src: "https://m.media-amazon.com/images/I/91f+tameo2L._SX522_.jpg",
        name: "Mint",
        desc: "Health Benefits of Mint Leaves Are: Treat Indigestion; Relieve Irritable Bowel Syndrome; Improve Respiratory Complaints",
        price: 19,
        offer:0,

        quantity: 6


    }),

    new allProducts({
        type:"vegetable",

        src: "https://5.imimg.com/data5/KH/DJ/MY-1735846/fresh-spinach-500x500.jpg   ",
        name: "spinach",
        desc: "Spinach is a nutritious, leafy green. This vegetable has been shown to benefit health in several ways",
        price: 14,
        offer:0,

        quantity: 8


    }),

    new allProducts({
        type:"vegetable",

        src: "https://produits.bienmanger.com/38827-0w600h600_Organic_Fresh_Green_Peppers.jpg",
        name: "pepper",
        desc: "Peppers have a lot going for them. They're low in calories and are loaded with good nutrition. ",
        price: 12,
        offer:5,

        quantity: 7


    }),


    new allProducts({
        type:"vegetable",

        src: "https://5.imimg.com/data5/CA/CB/MY-2/organic-cucumber-500x500.jpg",
        name: "cucumber",
        desc: "All that water in cucumbers can help keep you hydrated. Plus, the fiber boost they give you helps you stay regular and avoid constipation",
        price: 17,
        offer:5,

        quantity: 7


    }),

    new allProducts({
        type:"vegetable",

        src: "https://4.imimg.com/data4/NN/NN/GLADMIN-/wp-content-uploads-french-beans-1-500x500.jpg ",
        name: "beans",
        desc: "Beans provide protein, fiber, iron, and antioxidants that can make them a healthful addition to the diet ",
        price: 19,
        offer:5,

        quantity: 7


    }),

    new allProducts({
        type:"vegetable",

        src: "https://produits.bienmanger.com/35322-0w0h0_Peas_From_France.jpg ",
        name: "peas",
        desc: "Peas are a good source of vitamins C and E, zinc, and other antioxidants that strengthen your immune system",
        price: 16,
        offer:0,

        quantity: 7


    }),

    new allProducts({
        type:"vegetable",

        src: "https://5.imimg.com/data5/JF/QO/GB/SELLER-13256592/cow-pea-250x250.jpg ",
        name: "cowpea",
        desc: "Cowpeas are rich in fibers, plant-based proteins, vitamins (A, C, thiamine, riboflavin, folate, and B6), iron, selenium, zinc, magnesium, phosphorus, and copper, which have countless health benefits",
        price: 19,
        offer:5,

        quantity: 7


    }),

    new allProducts({
        type:"vegetable",

        src: "https://cdn10.bigcommerce.com/s-f70ch/products/234/images/460/taro_root__63589.1500641139.1280.1280.jpg?c=2 ",
        name: "taro",
        desc: "Taro root is an excellent source of dietary fiber and good carbohydrates, which both improve the function of your digestive system and can contribute to healthy weight loss",
        price: 16,
        offer:0,

        quantity: 12



    }),

    new allProducts({
        type:"vegetable",

        src: "https://cdn.shopify.com/s/files/1/0104/1059/0266/products/Organic_Cabbage_Green.jpg?v=1544634755 ",
        name: "cabbage",
        desc: "Half a cup of cooked cabbage has about a third the vitamin C you need for the day. It also gives you doses of fiber",
        price: 13,
        offer:0,

        quantity: 9


    }),

    new allProducts({
        type:"vegetable",

        src: " https://organic-village.co.th/wp-content/uploads/2021/11/1-Okra.jpeg",
        name: "Okra",
        desc: "Okra is rich in vitamins A and C, as well as antioxidants that help reduce the risk of serious health conditions like cancer, diabetes, stroke, and heart disease. ",
        price: 18,
        offer:0,

        quantity: 4



    }),
    new allProducts({
        type:"vegetable",

        src: "https://media.istockphoto.com/id/511868689/photo/fresh-cauliflower-with-pieces-isolated-on-white.jpg?s=612x612&w=0&k=20&c=6HjOXfDxV2B5Oazl4jK69GiORAtQEPS7WYpTAJ-KW24= ",
        name: "cauliflower",
        desc: "Half a cup of cooked cauliflower has about a third the vitamin C you need for the day. It also gives you doses of fiber",
        price: 15,
        offer:0,

        quantity: 9


    }),

    new allProducts({
        type:"vegetable",

        src: "https://media.istockphoto.com/id/492464736/photo/fresh-celery-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=ezU7mfSslZFyzZV2yngLsaCAYOkexCMRyjdGJqyFwnA= ",
   name: "celery",
   desc: "Half a cup of cooked celery has about a third the vitamin C you need for the day. It also gives you doses of fiber",
   price: 10,
   offer:0,

   quantity: 50


    }),

    new allProducts({
        type:"vegetable",

        src: "https://media.istockphoto.com/id/1168507984/photo/artichoke-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=7xn2ZRItLqwMTRZz14SutgxXwSln8H2P-i1GhNi9Ry8=",
   name: "artichoke",
   desc: "Artichokes are low in fat while rich in fiber, vitamins, minerals, and antioxidants. Particularly high in folate and vitamins C and K, they also supply important minerals, such as magnesium, phosphorus, potassium, and iron",
   price: 20,
   offer:5,

   quantity: 10


    }),

    new allProducts({
        type:"vegetable",

        src: "https://media.istockphoto.com/id/1084123600/photo/green-asparagus-sticks.jpg?s=612x612&w=0&k=20&c=x7E0xz8E81yt3fg_BD_NMUw1qENCt-kZsWmwPCr4OnM=",
        name: "asparagus",
        desc: "Asparagus is a good source of dietary fiber, which plays an important role in digestion. Insoluble dietary fiber acts as a prebiotic, feeding important gut bacteria, while soluble dietary fiber helps wash “bad” cholesterol out of your system. Asparagus is also a good source of: Vitamin A.",
        price: 30,
        offer:10,

        quantity: 10


    }),


    new allProducts({
        type:"vegetable",

        src: "https://media.istockphoto.com/id/172925573/photo/red-tomatoes-still-on-the-vine.jpg?s=612x612&w=0&k=20&c=uljVOwI9ICETjf-bUHwDxP0sgb6e0hWRkmGcCJMei4E=",
   name: "tomatoes",
   desc: "Getting more tomatoes into your diet may make you less likely to have a stroke, which is when blood flow gets cut off to a part of your brain. Studies suggest that they may ease inflammation, boost your immune system, lower your cholesterol levels, and keep your blood from clotting.",
   price: 10,
   offer:0,

   quantity: 60


    }),
    new allProducts({
        type:"vegetable",

        src: "https://media.istockphoto.com/id/182356201/photo/two-courgettes.jpg?s=612x612&w=0&k=20&c=IPE6nJj3a92Dz1V_SRReBMa1uzIss7PxD2Lm_WFVwic=",
   name: "zucchini",
   desc: "Zucchini is rich in vitamin B6. Research suggests that this vitamin can help with regulating blood glucose. The vitamin may even play a protective role against diabetes. Compounds such as lutein and zeaxanthin protect the eye's cells by filtering blue light wavelengths.",
   price: 10,
   offer:0,

   quantity: 80


    }),

    new allProducts({
        type:"vegetable",

        src: "https://media.istockphoto.com/id/584890470/photo/fresh-beetroot-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=PE1qdc2DEMLTu4MaFUsAeHBf6gHXoVNt3g0k375eCG0=",
    name: "Beets",
    desc: "Beets are rich in folate (vitamin B9) which helps cells grow and function. Folate plays a key role in controlling damage to blood vessels, which can reduce the risk of heart disease and stroke. Beets are naturally high in nitrates, which are turned into nitric oxide in the body.",
    price: 20,
    offer:0,

    quantity: 100


    }),

    new allProducts({
        type:"fruits",
        src: "https://png.pngtree.com/png-vector/20210713/ourlarge/pngtree-organic-guava-fruit-png-image_3591750.jpg",
        name: "Guava",
        desc: "Guava is an excellent source of dietary fibe and the ultimate superfood with the highest concentration of antioxidants",
        price: 12,
        offer:0,

        quantity: 5
    }),
    new allProducts({
        type:"fruits",
        src: "https://blogs-images.forbes.com/bethhoffman/files/2012/04/Apple.jpg",
        name: "Apple",
        desc: "apples, crisped to perfection. With a crisp and delicious taste and no added sugar, preservatives or anything extra, kids will love these",
        price: 13,
        offer:0,

        quantity: 5

    }),

    new allProducts({
        type:"fruits",

        src: "https://produits.bienmanger.com/30249-0w470h470_Fresh_Oranges_From_Spain.jpg",
        name: "Orange",
        desc: "Organic is a delicious and nutritious fruit that is packed with vitamins and minerals. Grown without the use of synthetic pesticides or fertilizers",
        price: 13,
        offer:10,

        quantity: 7
    }),

    new allProducts({
        type:"fruits",

        src: "https://bjs.scene7.com/is/image/bjs/28378?$bjs-Zoom$",
        name: "Banana",
        desc: "dried Organic Banana is prepared from sound, properly ripened fruit which has been dried to the specified moisture range, washed",
        price: 13,
        offer:0,

        quantity: 7

    }),

    new allProducts({
        type:"fruits",

        src: "https://images.albertsons-media.com/is/image/ABS/184700047?$ng-ecom-pdp-mobile$&defaultImage=Not_Available",
        name: "pear",
        desc: "Pears are native to Asia and Europe. Mildly sweet and rich in flavor pears offer crunchiness of apples yet juicy as peach and nectarine.",
        price: 19,
        offer:30,

        quantity: 4


    }),

    new allProducts({
        type:"fruits",

        src: "https://metropolitan-market.com/wp-content/uploads/2018/07/local-peaches-peach-o-rama-metropolitan-market.jpg  ",
        name: "peach",
        desc: "Peaches store a broad range of nutrients such as vitamin A, beta-carotene, and vitamin C. They are also a good source of vitamin E, vitamin K, vitamin B1, vitamin B2, vitamin B3, vitamin B-6, folate, and pantothenic acid",
        price: 13,
        offer:0,

        quantity: 4


    }),

    new allProducts({
        type:"fruits",

        src: " https://brotesorganic.org/WebRoot/Store24/Shops/f13a8031-52c7-4687-9a63-a5230b6d025c/55A3/F6A8/BA63/5FA3/945D/0A48/355F/6BFB/VVV.jpg",
        name: "apricot",
        desc: "apricots are organic, grown and processed without any artificial inputs; have no added sugar or preservatives",
        price: 19,
        offer:0,

        quantity: 7


    }),

    new allProducts({
        type:"fruits",

        src: " https://cdn.shopify.com/s/files/1/0080/1443/0255/products/BIORGANIC_PLUMS_600x600.jpg?v=1560764588",
        name: "plum",
        desc: "excellent antioxidant, promote digestive health, have a low glycemic index",
        price: 19,
        offer:0,

        quantity: 7


    }),

    new allProducts({
        type:"fruits",

        src: " https://produits.bienmanger.com/34089-0w470h470_Organic_Fresh_Kiwi.jpg",
        name: "kiwi",
        desc: " Kiwis have more Vitamin C than citrus and can be used in marinades as a meat tenderizer",
        price: 19,
        offer:20,

        quantity: 7


    }),

    new allProducts({
        type:"fruits",

        src: " https://cdn.shopify.com/s/files/1/0336/7167/5948/products/image-of-organic-pineapple-fruit-28663963680812_600x600.jpg?v=1628112278",
        name: "pineapple",
        desc: " free of artificial or synthetic fertilizers and full of unforgettable, great tasting flavor. ",
        price: 19,
        offer:0,

        quantity: 5


    }),

    new allProducts({
        type:"fruits",

        src: "https://cdn.shopify.com/s/files/1/0104/1059/0266/products/water-melon_large_a5014e18-0b00-4481-98e1-04ae9bad0122.jpg?v=1566981123",
        name: "watermelon",
        desc: "Watermelon consists mostly of water (91%) and carbs (7.5%). It provides almost no protein or fat and is very low in calories. ",
        price: 19,
        offer:0,

        quantity: 6


    }),

    new allProducts({
        type:"fruits",

        src: " https://www.hgofarms.com/wp-content/uploads/2021/05/grapes1.png ",
        name: "grapes",
        desc: "eating fresh grapes may prevent the accumulation of harmful oxidized cholesterol as well as the development of atherosclerotic lesions.",
        price: 14,
        offer:30,

        quantity: 8


    }),

    new allProducts({
        type:"fruits",

        src: " https://www.theorganicplace.com.au/wp-content/uploads/2015/06/Organic-Avocado.jpg",
        name: "avocado",
        desc: "Avocados are known for their rich, nutty flavor and creamy texture. Not only are they delicious but they are also deliver health benefits because they are high in good fats",
        price: 12,
        offer:0,

        quantity: 7


    }),


    new allProducts({
        type:"fruits",

        src: "https://tusupertogo.com/wp-content/uploads/2020/05/22203.jpg",
        name: "blueberry",
        desc: "Organic Blueberries are fleshy fruits with a bit of acid taste, bluish-black color and small size",
        price: 17,
        offer:0,

        quantity: 7


    }),

    new allProducts({
        type:"fruits",

        src: "https://www.newdirectionsaromatics.ca/images/products/main/PricklypearCO_v1.jpg",
        name: "prickly pear",
        desc: "It's high in fiber, antioxidants and carotenoids. ",
        price: 19,
        offer:0,

        quantity: 7


    }),

    new allProducts({
        type:"fruits",

        src: " https://i5.walmartimages.com/asr/81131765-9311-47ed-ae77-15dddde6b01d.7363231977ed5579d57e0b24cd7c1d9f.png",
        name: "coconut",
        desc: "Coconut contains potassium, magnesium, and sodium, which are all essential for regulating your body's water content as well as many heart, ...",
        price: 16,
        offer:0,

        quantity: 7


    }),

    new allProducts({
        type:"fruits",

        src: "https://produits.bienmanger.com/33591-0w470h470_Organic_Fresh_Mango.jpg ",
        name: "mango",
        desc: "They are a great source of magnesium and potassium, both of which are connected to lower blood pressure and a regular pulse.",
        price: 19,
        offer:20,

        quantity: 7


    }),

    new allProducts({
        type:"fruits",

        src: "https://target.scene7.com/is/image/Target/GUEST_95c6384a-7d40-4b61-8198-3d6a1598af5f?wid=488&hei=488&fmt=pjpeg  ",
        name: "Strawberry",
        desc: "Strawberries are good for your whole body. They naturally deliver vitamins, fiber, and particularly high levels of antioxidants known as polyphenols ",
        price: 16,
        offer:0,

        quantity: 12


    }),

    new allProducts({
        type:"fruits",

        src: " https://produits.bienmanger.com/36823-0w600h600_Organic_Mandarin.jpg ",
        name: "mandarin",
        desc: "Mandarin have even more beta-carotene and beta-cryptoxanthin than common oranges, making them excellent additions to your diet",
        price: 13,
        offer:0,

        quantity: 9


    }),

    new allProducts({
        type:"fruits",

        src: "https://cdn.shopify.com/s/files/1/0104/1059/0266/products/pomegranate.png?v=1541589453",
        name: "pomegranate",
        desc: "Pomegranates are rich in antioxidants and flavonoids, both of which are known to prevent free radicals from damaging your cells",
        price: 18,
        offer:0,

        quantity: 4


    }),

    new allProducts({
        type:"fruits",

        src: "https://media.istockphoto.com/id/464387287/photo/bunch-of-cherries.jpg?s=612x612&w=0&k=20&c=nL3BAsDDKN24jriZexcCsRAA3Q62mBsy4ORSPOG5_sk=",
        name: "Cherry",
        desc: "Cherries are rich in antioxidants. These are natural chemicals that can help your body deal with day-to-day damage to your cells. The havoc may come from normal metabolism, inflammation, exercise, smoking, pollution, or radiation. Some studies show that both sweet and tart cherries help reduce this damage.",
        price: 20,
        offer:0,

        quantity: 90


    }),

    new allProducts({
        type:"herbal",
        src: "https://produits.bienmanger.com/34571-0w600h600_Organic_Ginger.jpg ",
        name: "ginger",
        desc: "ginger increases serotonin and dopamine levels. This can reduce inflammation, which may cause depression",
        price: 12,
        offer:0,

        quantity: 5

    }),
    new allProducts({
        type:"herbal",

        src: " https://www.abelandcole.co.uk/media/7073_14599_m.jpg ",
        name: "Rosemary",
        desc: "Studies have shown that the carnosic and rosmarinic acids in rosemary have powerful antibacterial, antiviral, and antifungal properties",
        price: 12,
        offer:0,

        quantity: 5

    }),

    new allProducts({
        type:"herbal",

        src: "https://5.imimg.com/data5/LG/JJ/MY-15718946/organic-cinnamon-powder-2f-usda-certifie-2f-iso-2f-gmp-500x500.jpg",
        name: "cinnamon",
        desc: "Cinnamon is rich in antioxidants and other beneficial compounds. Some research suggests that it may help support blood sugar control",
        price: 12,
        offer:0,

        quantity: 5
    }),

    new allProducts({
        type:"herbal",

        src: "https://strictlymedicinalseeds.com/wp-content/uploads/2022/04/Greater_wild_thyme_potted_plant_600.jpg ",
        name: "Wild thyme ",
        desc: "The flowering parts of the plant are used to make medicine. People take wild thyme for breathing problems including cough, bronchitis, and swollen airways.",
        price: 12,
        offer:0,

        quantity: 5

    }),

    new allProducts({
        type:"herbal",

        src: " https://tropicaliment.com/wp-content/uploads/2017/10/Organic-Parsley.png",
        name: "parsley",
        desc: "Parsley works as a powerful natural diuretic and can help reduce bloating and blood pressure. Parsley is loaded with vitamin K, which has been linked to bone health. ",
        price: 12,
        offer:0,

        quantity: 5

    }),

    new allProducts({
        type:"herbal",

        src: "https://cdn11.bigcommerce.com/s-jl3t5tg/images/stencil/920x596/products/265/2140/organic-nettle-leaf__65522.1501625378.png?c=2",
        name: "nettle",
        desc: "General Uses. Stinging nettle has been used for hundreds of years to treat painful muscles and joints, eczema, arthritis",
        price: 12,
        offer:0,

        quantity: 5



    }),

    new allProducts({
        type:"herbal",

        src: "https://m.media-amazon.com/images/I/51bxH2sF3-L._AC_SY1000_.jpg ",
        name: "licorice",
        desc: "Licorice root contains over 300 chemical compounds and flavonoids. Glycyrrhizin, the most active chemical compound found in licorice, has been studied for its medicinal properties",
        price: 12,
        offer:0,

        quantity: 5


    }),

    new allProducts({
        type:"herbal",

        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeJP1LFopkF3UipHzlYE23w19-pdHb4-RvWg&usqp=CAU ",
        name: "turmeric",
        desc: "Turmeric can increase the antioxidant capacity of the body",
        price: 12,
        offer:0,

        quantity: 5


    }),

    new allProducts({
        type:"herbal",

        src: " https://cdn.shopify.com/s/files/1/0104/1059/0266/products/Organic_Celery.jpg?v=1580900999",
        name: "celery",
        desc: "Widely recognized as one of the healthiest snacks available, celery is a wonderful source of fiber",
        price: 12,
        offer:0,

        quantity: 5


    }),

    new allProducts({
        type:"herbal",

        src: "https://gatheringplacetrading.com/wp-content/uploads/2019/01/clove-whole-organic.jpg ",
        name: "cloves",
        desc: "Cloves are full of antioxidants. These compounds help your body to fight free radicals, which damage your cells and can lead to disease.",
        price: 12,
        offer:0,

        quantity: 5



    }),

    new allProducts({
        type:"herbal",

        src: "https://target.scene7.com/is/image/Target/GUEST_c8bf76de-4c69-4fc7-8b3d-a6da27a830e9?fmt=webp&wid=250&hei=250&qlt=80 ",
        name: "anise",
        desc: "anise , can keep your blood healthy and reduce your risk of iron deficiency anemia. ",
        price: 12,
        offer:0,

        quantity: 5


    }),

    new allProducts({
        type:"herbal",

        src: " https://m.media-amazon.com/images/I/81VpFYDN9AL._SL1500_.jpg",
        name: "menthe",
        desc: " Mint provides a refreshing taste that can make the mouth feel clean. It also has antibacterial and anti-inflammatory properties, which can improve teeth and gum ",
        price: 12,
        offer:0,

        quantity: 5


    }),

    new allProducts({
        type:"herbal",

        src: " https://www.forestwholefoods.co.uk/wp-content/uploads/2017/04/Organic-Caraway-Seeds-1500px.jpg",
        name: "caraway",
        desc: "Caraway is loaded with fiber and several important minerals, including iron, magnesium, copper, and calcium",
        price: 12,
        offer:0,

        quantity: 5



    }),


    new allProducts({
        type:"herbal",

        src: "https://www.australherbs.com.au/assets/full/XSAGE.jpg?20210810165810 ",
        name: "sage",
        desc: "Sage is very high in vitamin K, and it also contains vital minerals like magnesium, zinc, and copper",
        price: 12,
        offer:0,

        quantity: 5


    }),

    new allProducts({
        type:"herbal",

        src: "https://cdn.shopify.com/s/files/1/0284/2450/products/BASILCLASSICITALIAN_1024x.jpg?v=1595658733 ",
        name: "basil",
        desc: "basil can block calcium channels, which may help to lower blood pressure ",
        price: 12,
        offer:0,

        quantity: 5



    }),

    new allProducts({
        type:"herbal",

        src: "https://www.healthysupplies.co.uk/pics/fenugreek-seeds-organic-small-7FEU1.jpg",
        name: "Fenugreek",
        desc: "Fenugreek is an herb with many potential health benefits, including improving cholesterol and blood pressure.",
        price: 12,
        offer:0,

        quantity: 5



    }),

    new allProducts({
        type:"meat",

        src:"https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name:"Beef",
        desc:"Beef red meat doesn't raise your cholesterol and contains nutrients like protein, vitamin B12, iron, niacin, and zinc. Beef tenderloin is a lean, delicious -- and healthy ",
        price:30,
        offer:10,

        quantity:15
    }),

    new allProducts({
        type:"meat",

        src:"https://images.pexels.com/photos/128401/pexels-photo-128401.jpeg",
        name:"Soft minced meat",
        desc:"Beef red meat doesn't raise your cholesterol and contains nutrients like protein, vitamin B12, iron, niacin, and zinc. Beef tenderloin is a lean, delicious and healthy ",
        price:35,
        offer:0,

        quantity:20
    }),

    new allProducts({
        type:"meat",

        src:"https://media.istockphoto.com/id/538918713/photo/lamb-chops.jpg?s=612x612&w=0&k=20&c=qRiDgM6Pp7mKLcIf_hIy6o4jom6J-wGrtkRMaXw5RaM=",
        name:"Lamb meat",
        desc:"lamb is a good source of protein, omega-3 fatty acids, vitamin B12, niacin, zinc, and iron ",
        price:50,
        offer:20,

        quantity:30
    }),

    new allProducts({
        type:"meat",

        src:"https://media.istockphoto.com/id/540579864/photo/raw-lamb-leg-on-blue-stone-background-with-herbs.jpg?s=612x612&w=0&k=20&c=SNnFNXdO_CXoNrZKLVbwJDT1FjX4pQnTddJJQzO6cng=",
        name:"Lamb meat",
        desc:"lamb is a good source of protein, omega-3 fatty acids, vitamin B12, niacin, zinc, and iron ",
        price:60,
        offer:0,

        quantity:20
    }),

    new allProducts({
        type:"meat",

        src:"https://media.istockphoto.com/id/105489252/photo/rack-of-lamb-with-rosemary.jpg?s=612x612&w=0&k=20&c=O1Vpfvq9_TZOsuy0QdaXyx3sFOvH3kGf29nPBZB_aHY=",
        name:"Lamb meat",
        desc:"lamb is a good source of protein, omega-3 fatty acids, vitamin B12, niacin, zinc, and iron ",
        price:40,
        offer:0,

        quantity:10
    }),

    new allProducts({
        type:"meat",

        src:"https://media.istockphoto.com/id/1219384973/photo/shoulder-of-lamb.jpg?s=612x612&w=0&k=20&c=Tc7XU4f6hPwJ1FaFt7UPKJhw4HoKUBVcRuc_66tCdDU=",
        name:"Lamb meat",
        desc:"lamb is a good source of protein, omega-3 fatty acids, vitamin B12, niacin, zinc, and iron ",
        price:50,
        offer:0,

        quantity:10
    }),

    new allProducts({
        type:"meat",

        src:"https://media.istockphoto.com/id/1391917848/photo/butcher-board-with-raw-lamb-mutton-leg-with-herbs-wooden-background-top-view.jpg?s=612x612&w=0&k=20&c=1fB9BtR0vZD04gNKw0err_IoiuBow7A8pHuW2I6o3aI=",
        name:"Goat meat",
        desc:"It has far less fat and calories than other red meats, and has plenty of vitamins and nutrients. It also has very little saturated fat even less than chicken.",
        price:60,
        offer:30,

        quantity:20
    }),

    new allProducts({
        type:"meat",

        src:"https://media.istockphoto.com/id/494764324/photo/goat-meat.jpg?s=612x612&w=0&k=20&c=0FfudVZmM-TpypFKjqtu-_wzmEOGAivZ2DOrfZu4ONM=",
        name:"Bison meat",
        desc:"This is one of the leanest red meats, which makes it healthier from the start. But there's more: Compared to beef with the same fat content, bison doesn't make as many of the fatty plaques that can clog your arteries and lead to heart disease. ",
        price:50,
        offer:10,

        quantity:10
    }),

    new allProducts({
        type:"meat",

        src:"https://media.istockphoto.com/id/1218138254/photo/angus-beef-meat-on-a-wood-board-raw-red-meat-on-wooden-table.jpg?s=612x612&w=0&k=20&c=xQxHDQpnmsFu8fundXXn3uiKQAKQUVrKpKeLAAlv02Q=",
        name:"Bison meat",
        desc:"This is one of the leanest red meats, which makes it healthier from the start. But there's more: Compared to beef with the same fat content, bison doesn't make as many of the fatty plaques that can clog your arteries and lead to heart disease. ",
        price:50,
        offer:0,

        quantity:20
    }),

    new allProducts({
        type:"meat",

        src:"https://media.istockphoto.com/id/1188701405/photo/fresh-raw-beef-steak-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=81e_IT4_vLtTbrUTUIYMO0hk3VXLuxFTDEg5fypF6Pk=",
        name:"Bison meat",
        desc:"This is one of the leanest red meats, which makes it healthier from the start. But there's more: Compared to beef with the same fat content, bison doesn't make as many of the fatty plaques that can clog your arteries and lead to heart disease. ",
        price:100,
        offer:0,

        quantity:20
    }),

    new allProducts({
        type:"meat",
        src:"https://media.istockphoto.com/id/93456470/photo/two-raw-chicken-breast-on-white-backdrop.jpg?s=612x612&w=0&k=20&c=ZjLBVTWFSMpkDR9iiu5X2xBHyWlv5glzsOjJd5mkcfg=",
        name:"Chicken",
        desc:" chicken has all nine essential amino acids (which is called a complete protein). It's also lower in saturated fat than most red meat. ",
        price:10,
        offer:0,

        quantity:10
    }),

    new allProducts({
        type:"meat",

        src:"https://media.istockphoto.com/id/1400102034/photo/chicken-breast-isolated-raw-chicken-fillet-on-white-background-poultry-raw-chicken-meat-with.jpg?s=612x612&w=0&k=20&c=xcNODBIArV_LvkpZ847Lqc4rQtNjeloeACpn-7nTaFg=",
        name:"Turkey",
        desc:" Turkey has all nine essential amino acids (which is called a complete protein). It's also lower in saturated fat than most red meat. ",
        price:80,
        offer:0,

        quantity:20
    }),

    new allProducts({
        type:"meat",

        src:"https://media.istockphoto.com/id/1351966509/photo/raw-chicken-biriyani-cut-without-skin.jpg?s=612x612&w=0&k=20&c=EVEpZu80ujfBBbhFAVhj1ln-r6gV7dtJ2xAgOjTo2kk=",
        name:"Chicken",
        desc:" Chicken has all nine essential amino acids (which is called a complete protein). It's also lower in saturated fat than most red meat. ",
        price:10,
        offer:0,

        quantity:20
    }),

    new allProducts({
        type:"meat",

        src:"https://media.istockphoto.com/id/93456512/photo/raw-chicken.jpg?s=612x612&w=0&k=20&c=UuvFL4g04JjBtrBdF9dAVReSUxELJey3CHEZv5z9OyE=",
        name:"Chicken",
        desc:" Chicken has all nine essential amino acids (which is called a complete protein). It's also lower in saturated fat than most red meat. ",
        price:10,
        offer:0,

        quantity:30
    }),

    new allProducts({
        type:"meat",

        src:"https://media.istockphoto.com/id/1282866808/photo/fresh-raw-chicken.jpg?s=612x612&w=0&k=20&c=QtfdAhdeIGpR3JUNDmYFo6cN0el8oYMcOXMQI7Qder4=",
        name:"Chicken",
        desc:" Chicken has all nine essential amino acids (which is called a complete protein). It's also lower in saturated fat than most red meat. ",
        price:20,
        offer:10,

        quantity:30
    }),

    new allProducts({
        type:"meat",

        src:"https://media.istockphoto.com/id/654548016/photo/raw-chicken-breasts-fillets-with-thyme-and-spices-on-wooden-cutting-board-on-rustic-background.jpg?s=612x612&w=0&k=20&c=DtPQwLwHsykYW1__4mh7CdpqMr1olyeC9lXYDEdrC4c=",
        name:"Turkey",
        desc:" Turkey has all nine essential amino acids (which is called a complete protein). It's also lower in saturated fat than most red meat. ",
        price:70,
        offer:20,

        quantity:30
    }),

    new allProducts({
        type:"meat",

        src:"https://media.istockphoto.com/id/1402330988/photo/slices-of-raw-turkey-meat-fillet.jpg?s=612x612&w=0&k=20&c=tG6m295S3ODnwR7gX1VX-3SnCY2MqKBOERXU_xkrmTA=",
        name:" Soft minced chicken",
        desc:" Chicken has all nine essential amino acids (which is called a complete protein). It's also lower in saturated fat than most red meat. ",
        price:20,
        offer:10,

        quantity:30
    }),

    new allProducts({
        type:"meat",

        src:"https://media.istockphoto.com/id/1371036072/photo/raw-duck-breasts-with-skin-on-wooden-cutting-board-with-old-butcher-cleaver-knife-on-old-dark.jpg?s=612x612&w=0&k=20&c=DBtTzvj-Nbt63cy65QJCXCkT1pV6T2IayGN4Ip9-w40=",
        name:" Duck",
        desc:" Duck meat is an excellent source of iron, providing 50% of the iron we need in a day. Iron helps make healthy blood that flows through our bodies, giving us energy and making us grow. Healthy blood keeps us from getting tired ",
        price:50,
        offer:0,

        quantity:30
    }),

    new allProducts({
        type:"meat",

        src:"https://media.istockphoto.com/id/617880108/photo/raw-duck-breast.jpg?s=612x612&w=0&k=20&c=8WRECQzIHsWbmhV3BSkB5UzzoVUSAg-0NR8vFUn3nfg=",
        name:" Duck",
        desc:" Duck meat is an excellent source of iron, providing 50% of the iron we need in a day. Iron helps make healthy blood that flows through our bodies, giving us energy and making us grow. Healthy blood keeps us from getting tired ",
        price:30,
        offer:0,

        quantity:100
    }),

    new allProducts({
        type:"meat",

        src:"https://media.istockphoto.com/id/91092265/photo/raw-magret-duck-fillet.jpg?s=612x612&w=0&k=20&c=L-Rol0dpatQWJ2FLIV94uZQhNAptG6lOILSQoRjYfH8=",
        name:" Duck",
        desc:" Duck meat is an excellent source of iron, providing 50% of the iron we need in a day. Iron helps make healthy blood that flows through our bodies, giving us energy and making us grow. Healthy blood keeps us from getting tired ",
        price:50,
        offer:0,

        quantity:100
    }),

    new allProducts({
        type:"meat",

        src:"https://media.istockphoto.com/id/176837012/photo/organic-duck-cleaned-and-ready-for-cooking.jpg?s=612x612&w=0&k=20&c=OG-ThgkYGKOtZyJugwHCZl38Vx8rhbDdySK7WnVKPGA=",
        name:" Duck",
        desc:" Duck meat is an excellent source of iron, providing 50% of the iron we need in a day. Iron helps make healthy blood that flows through our bodies, giving us energy and making us grow. Healthy blood keeps us from getting tired ",
        price:60,
        offer:0,

        quantity:100
    }),

    new allProducts({
        type:"meat",

        src:"https://media.istockphoto.com/id/1282553598/photo/raw-whole-duck-pink-pepper-and-rosemary-black-background-top-view.jpg?s=612x612&w=0&k=20&c=3tA4Iebe_a7d4tNEO-hhTSt6eMogD5vvL0XYXMO4UrU=",
        name:" Geese",
        desc:" Geese meat is an excellent source of iron, providing 50% of the iron we need in a day. Iron helps make healthy blood that flows through our bodies, giving us energy and making us grow. Healthy blood keeps us from getting tired ",
        price:60,
        offer:0,

        quantity:100
    }),

    new allProducts({
        type:"meat",

        src:"https://media.istockphoto.com/id/457549585/photo/close-up-of-foie-gras-on-grey-tile-cutting-board.jpg?s=612x612&w=0&k=20&c=sNwPTSwu9QuppQbUgBT6ZZvy6qTmA0aeHWljILNUXzU=",
        name:" Geese",
        desc:" Geese meat is an excellent source of iron, providing 50% of the iron we need in a day. Iron helps make healthy blood that flows through our bodies, giving us energy and making us grow. Healthy blood keeps us from getting tired ",
        price:100,
        offer:50,

        quantity:100
    }),

    new allProducts({
        type:"meat",

        src:"https://media.istockphoto.com/id/477555578/photo/raw-poultry.jpg?s=612x612&w=0&k=20&c=Xuy1xtU2cUpn-NnjZHtNRyTUMOZZy4BPBMG8LztDfjU=",
        name:" Guinea fowl",
        desc:" Guinea fowl meat is an excellent source of iron, providing 50% of the iron we need in a day. Iron helps make healthy blood that flows through our bodies, giving us energy and making us grow. Healthy blood keeps us from getting tired ",
        price:100,
        offer:20,

        quantity:100
    }),

    new allProducts({
        type:"meat",

        src:"https://media.istockphoto.com/id/174479270/photo/fresh-ribeye-steaks-at-the-butcher-shop.jpg?s=612x612&w=0&k=20&c=PrfT8kONs8UCd-0LLoBD6LG_NMRRPgOUsv_s-e7sIU4=",
        name:"Beef",
        desc:"Beef red meat doesn't raise your cholesterol and contains nutrients like protein, vitamin B12, iron, niacin, and zinc. Beef tenderloin is a lean, delicious -- and healthy ",
        price:50,
        offer:0,

        quantity:100
    }),

    new allProducts({
        type:"meat",

        src:"https://media.istockphoto.com/id/171359079/photo/prime-boneless-hip-sirloin-steak.jpg?s=612x612&w=0&k=20&c=DiPF84Yz3xDGgdS5cahHRn11OUt1YNs_cpjebaSPC0g=",
        name:"Beef",
        desc:"Beef red meat doesn't raise your cholesterol and contains nutrients like protein, vitamin B12, iron, niacin, and zinc. Beef tenderloin is a lean, delicious -- and healthy ",
        price:60,
        offer:30,

        quantity:60
    }),

    new allProducts({
        type:"meat",

        src:"https://media.istockphoto.com/id/157681614/photo/beef-tenderloin-steaks.jpg?s=612x612&w=0&k=20&c=gLDYXG_Hho6Wp6YGEDZ8MAJRbIpaFkIYdVw9Qcp9268=",
        name:"Beef",
        desc:"Beef red meat doesn't raise your cholesterol and contains nutrients like protein, vitamin B12, iron, niacin, and zinc. Beef tenderloin is a lean, delicious -- and healthy ",
        price:40,
        offer:0,

        quantity:10
    }),

    new allProducts({
        type:"meat",

        src:"https://media.istockphoto.com/id/469354734/photo/fresh-and-raw-meat-sirloin-medallions-steaks.jpg?s=612x612&w=0&k=20&c=OH-FtjIgFS2psxomUDTZ450Zc35VvyZCQP2w64cbl_4=",
        name:"Beef",
        desc:"Beef red meat doesn't raise your cholesterol and contains nutrients like protein, vitamin B12, iron, niacin, and zinc. Beef tenderloin is a lean, delicious -- and healthy ",
        price:50,
        offer:0,

        quantity:40
    }),

    new allProducts({
        type:"meat",

        src:"https://media.istockphoto.com/id/923692030/photo/variety-of-raw-black-angus-prime-meat-steaks.jpg?s=612x612&w=0&k=20&c=QWs-aEHfLMF74kWVHt5srGB-1noX-st5I3Ntg-kAJ9s=",
        name:"Cow meat",
        desc:"Cow meat red meat doesn't raise your cholesterol and contains nutrients like protein, vitamin B12, iron, niacin, and zinc. Beef tenderloin is a lean, delicious -- and healthy ",
        price:55,
        offer:10,

        quantity:40
    }),

    new allProducts({
        type:"meat",

        src:"https://media.istockphoto.com/id/935316446/photo/fresh-raw-rib-eye-steaks-isolated-on-white.jpg?s=612x612&w=0&k=20&c=UBnLccI6y47Vynuxa2BybZS0jPUtEqpJvL4LzVgGSOg=",
        name:"Cow meat",
        desc:"Cow meat red meat doesn't raise your cholesterol and contains nutrients like protein, vitamin B12, iron, niacin, and zinc. Beef tenderloin is a lean, delicious -- and healthy ",
        price:55,
        offer:0,

        quantity:40
    }),

    new allProducts({
        type:"milk",
        src:"https://cdn-prod.medicalnewstoday.com/content/images/articles/295/295714/yogurt-greek.jpg",
        name:"yoghurt",
        desc:"Yogurts can be high in protein, calcium, vitamins, and live culture, or probiotics, which can enhance the gut microbiota ",
        price:10,
        offer:0,

        quantity:100
    }),

    new allProducts({
        type:"milk",

        src:"https://article.innovadatabase.com/articleimgs/article_images/637012813408253935breakfast%20yoghurt%20[750x750].jpg",
        name:"yoghurt",
        desc:"Yogurts can be high in protein, calcium, vitamins, and live culture, or probiotics, which can enhance the gut microbiota ",
        price:13,
        offer:0,

        quantity:200
    }),

    new allProducts({
        type:"milk",

        src:"https://media.istockphoto.com/id/1197838680/photo/various-kinds-of-vegan-milk.jpg?s=612x612&w=0&k=20&c=6VGC5R9qc4NS9F7Iwp9UlJLqfDVeaEMjQLKeizSh6cA=",
        name:"Milk",
        desc:"Milk is an excellent source of calcium and phosphorus which are necessary for the development and maintenance of strong, healthy bones and teeth. ",
        price:10,
        offer:0,

        quantity:90
    }),

    new allProducts({
        type:"milk",

        src:"https://media.istockphoto.com/id/148985963/photo/camembert-cheese.jpg?s=612x612&w=0&k=20&c=Potx_o5i1bRiOfmQvlpWF-WKWPoGSirnnNRDWibpH3s=",
        name:"American Cheese",
        desc:"American Cheese is an excellent source of calcium and phosphorus which are necessary for the development and maintenance of strong, healthy bones and teeth. ",
        price:100,
        offer:50,

        quantity:60
    }),

    new allProducts({
        type:"milk",

        src:"https://media.istockphoto.com/id/504482253/photo/fresh-brie-cheese.jpg?s=612x612&w=0&k=20&c=iTBgadOLwd-yFh63alzmGzwZj4Lk4nSeee8OAhE0c_E=",
        name:"Brie Cheese",
        desc:"Brie Cheese is an excellent source of calcium and phosphorus which are necessary for the development and maintenance of strong, healthy bones and teeth. ",
        price:90,
        offer:40,

        quantity:70
    }),

    new allProducts({
        type:"milk",

        src:"https://media.istockphoto.com/id/1315847880/photo/triangle-of-fresh-brie-cheese.jpg?s=612x612&w=0&k=20&c=2iqFo1dnQmMCfN4RHc7-dzdOg04KTnYJoOqyJpmpG2I=",
        name:"Brie Cheese",
        desc:"Brie Cheese is an excellent source of calcium and phosphorus which are necessary for the development and maintenance of strong, healthy bones and teeth. ",
        price:10,
        offer:0,

        quantity:70
    }),

    new allProducts({
        type:"milk",

        src:"https://media.istockphoto.com/id/531048911/photo/portion-of-cheddar.jpg?s=612x612&w=0&k=20&c=mzcYWuuRiPHm-UOIk1GToW7O0qhPEkb-3WDa46M2lbg=",
        name:"Cheddar Cheese",
        desc:"cheddar is a cow's milk cheese that was first produced in England. Like most cheeses, young cheddars are mild and creamy; aged cheddars are more crumbly and complex in flavor ",
        price:90,
        offer:20,

        quantity:70
    }),

    new allProducts({
        type:"milk",

        src:"https://media.istockphoto.com/id/513274009/photo/sliced-cheese.jpg?s=612x612&w=0&k=20&c=elXkrNBi5AdFJOst6Q04vYL-pQPn5smrxH5kWiSt-hg=",
        name:"Cheddar Cheese",
        desc:"cheddar is a cow's milk cheese that was first produced in England. Like most cheeses, young cheddars are mild and creamy; aged cheddars are more crumbly and complex in flavor ",
        price:5,
        offer:0,

        quantity:100
    }),

    new allProducts({
        type:"milk",

        src:"https://media.istockphoto.com/id/156152121/photo/traditional-yellow-cheddar-cheese.jpg?s=612x612&w=0&k=20&c=OEim0pTd7Gh62480Pofz6C7FJmaczw6i9XTCjmHtbqg=",
        name:"Cheddar Cheese",
        desc:"cheddar is a cow's milk cheese that was first produced in England. Like most cheeses, young cheddars are mild and creamy; aged cheddars are more crumbly and complex in flavor ",
        price:10,
        offer:0,

        quantity:50
    }),

    new allProducts({
        type:"milk",

        src:"https://media.istockphoto.com/id/843658780/photo/desi-ghee-or-clariified-liquid-butter-cooking-oil-pure-ghee.jpg?s=612x612&w=0&k=20&c=euSGI7fpLfzASpGmtSZ-k60xInWvR9JGx-2iIZNyf90=",
        name:"Clarified butter",
        desc:"Clarified butter is rich in vitamins, works over high heat ",
        price:20,
        offer:0,

        quantity:30
    }),

    new allProducts({
        type:"milk",

        src:"https://media.istockphoto.com/id/1166196966/photo/ghee-clarified-butter-in-jar.jpg?s=612x612&w=0&k=20&c=frQwEWE_TWQH6n7OuRdU2yqVmhe6QhVMdmdfLv3hio4=",
        name:"Clarified butter",
        desc:"Clarified butter is rich in vitamins, works over high heat ",
        price:50,
        offer:0,

        quantity:200
    }),

    new allProducts({
        type:"milk",

        src:"https://media.istockphoto.com/id/1338222224/photo/butter-blocks-and-pieces-on-wooden-table-copy-space.jpg?s=612x612&w=0&k=20&c=65ZYwALchrY4iXYkfrchnnWKCpuP20TZvXnSSmWnBPM=",
        name:"Spreadable butter",
        desc:"Spreadable butter is rich in vitamins, works over high heat ",
        price:54,
        offer:0,

        quantity:100
    }),

    new allProducts({
        type:"milk",

        src:"https://media.istockphoto.com/id/465281885/photo/cotija-cheese.jpg?s=612x612&w=0&k=20&c=av7APq4KthKCkVsnUtpwRKfXf3YsXO62uFz5s8K5q8A=",
        name:"Cotija cheese",
        desc:"Cotija provides protein, which your body needs to build and repair tissue, and some vitamin A, which is good for eyesight and gives your immune system a boost.",
        price:35,
        offer:0,

        quantity:6
    }),

    new allProducts({
        type:"milk",

        src:"https://media.istockphoto.com/id/1390761340/photo/mexican-white-cotija-cheese-tequila-shot-with-fresh-ingredients-in-mexico-latin-america.jpg?s=612x612&w=0&k=20&c=TgNmvPHRRJmmdMVCDFkjW3sNEjVKTyjDo5NNIzpz3GM=",
        name:"Cotija cheese",
        desc:"Cotija provides protein, which your body needs to build and repair tissue, and some vitamin A, which is good for eyesight and gives your immune system a boost.",
        price:20,
        offer:0,

        quantity:6
    }),

    new allProducts({
        type:"milk",

        src:"https://media.istockphoto.com/id/155445919/photo/bowl-of-cottage-cheese.jpg?s=612x612&w=0&k=20&c=68ZJjQC-403C0gT24D3Q0YB8G_cuNFTK38u2koB_zqs=",
        name:"Cottage Cheese",
        desc:"Cottage cheese is an excellent source of calcium, a mineral that plays a major role in tooth and bone health, and in the prevention of osteoporosis. It also helps you to regulate your blood pressure and might even play a roleTrusted Source in preventing certain cancers, such as prostate cancer..",
        price:60,
        offer:20,

        quantity:55
    }),

    new allProducts({
        type:"milk",

        src:"https://media.istockphoto.com/id/479095932/photo/greek-feta-cheese-block-isolated-on-white.jpg?s=612x612&w=0&k=20&c=7_Swl1P9UI5XKxSiz4cxS-Gqi7xE4f6bOvML1yH_jmE=",
        name:"Feta Cheese",
        desc:"Feta cheese is an excellent source of calcium, a mineral that plays a major role in tooth and bone health, and in the prevention of osteoporosis. It also helps you to regulate your blood pressure and might even play a roleTrusted Source in preventing certain cancers, such as prostate cancer..",
        price:10,
        offer:0,

        quantity:33
    }),

    new allProducts({
        type:"milk",

        src:"https://media.istockphoto.com/id/157398750/photo/piece-of-dutch-gouda-cheese.jpg?s=612x612&w=0&k=20&c=7tfrVOvzgQYIH04t7EEyF_STQHlawZHVWevDhQ47iBg=",
        name:"Fontina Cheese",
        desc:"Fontina cheese gives support to your bones, muscles and immune system.",
        price:26,
        offer:5,

        quantity:40
    }),

    new allProducts({
        type:"milk",

        src:"https://media.istockphoto.com/id/511852087/photo/slices-of-goat-cheese-with-fresh-thyme.jpg?s=612x612&w=0&k=20&c=IEguHfoJrQPXexnSs6VbS0Ku-Ap-bBo76PEfK0okeXk=",
        name:"Goat Cheese",
        desc:"Goat cheese is a source of protein, calcium, and healthy fats.",
        price:26,
        offer:0,

        quantity:50
    }),

    new allProducts({
        type:"milk",

        src:"https://media.istockphoto.com/id/1354385493/photo/fresh-soft-goat-cheese-on-a-cutting-board-with-thyme-black-background-top-view.jpg?s=612x612&w=0&k=20&c=CClYdJyMRBJrynIM5ZPXhxOgXKMOuEbTMoKnro8rldI=",
        name:"Goat Cheese",
        desc:"Goat cheese is a source of protein, calcium, and healthy fats.",
        price:50,
        offer:0,

        quantity:2
    }),

    new allProducts({
        type:"milk",

        src:"https://media.istockphoto.com/id/490690366/photo/various-cheeses.jpg?s=612x612&w=0&k=20&c=4epX68pm5rglZAJlhbfdyOITxWwJhcT_uLk4q2pJrnA=",
        name:"Gouda Cheese",
        desc:"Gouda Cheese is a source of protein, calcium, and healthy fats.",
        price:60,
        offer:0,

        quantity:5
    }),

    new allProducts({
        type:"milk",

        src:"https://media.istockphoto.com/id/532549702/photo/fenugreek-gauda-herb-cheese.jpg?s=612x612&w=0&k=20&c=GMyCa9FYP-iP2h-AAq5Ov-oCHHjtmCuDbjx7xKa7K98=",
        name:"Gouda Cheese",
        desc:"Gouda Cheese is a source of protein, calcium, and healthy fats.",
        price:100,
        offer:30,

        quantity:10
    }),

    new allProducts({
        type:"milk",

        src:"https://media.istockphoto.com/id/1346355665/photo/ghee-or-clarified-butter-in-wooden-bowl-cooking-oil-pure-ghee-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=9wRUSSx7AWfvnpEKiJU0UAV4_OpLKA-hj7WcVENIvBs=",
        name:"Ghee",
        desc:"Ghee  has healthy fats.",
        price:26,
        offer:0,

        quantity:50
    }),

    new allProducts({
        type:"milk",

        src:"https://media.istockphoto.com/id/500618702/photo/cheese.jpg?s=612x612&w=0&k=20&c=9iHzKzcA__6Ythj6ANb72TUg3rY1GTrFrh6N9aolEVs=",
        name:"Grana Padano",
        desc:"contains amino acids that relax your blood vessels, which subsequently reduces your risk of hypertension.",
        price:94,
        offer:20,

        quantity:25
    }),

    new allProducts({
        type:"milk",

        src:"https://media.istockphoto.com/id/1279647370/photo/whole-and-grated-italian-hard-cheese-grana-padano-or-parmesan-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=vcoGQvORLlfEaaj6bRdU2CyYO7pDQTnjmBWm5MWXEBk=",
        name:"Grana Padano",
        desc:"contains amino acids that relax your blood vessels, which subsequently reduces your risk of hypertension.",
        price:52,
        offer:5,

        quantity:34
    }),

    new allProducts({
        type:"milk",

        src:"https://media.istockphoto.com/id/519910637/photo/piece-of-cheese-with-holes.jpg?s=612x612&w=0&k=20&c=AJ4JAw9eLhEJqOxQG7-FTBl5pAAuudghVJJop5EBu0A=",
        name:"Gruyère",
        desc:"Gruyere cheese is healthy. It is also rich in thiamine and riboflavin as an excellent source of calcium and other vitamins like vitamins A,k, and B12.",
        price:58,
        offer:10,

        quantity:69
    }),

    new allProducts({
        type:"milk",

        src:"https://media.istockphoto.com/id/520244369/photo/comte-cheese-sliced.jpg?s=612x612&w=0&k=20&c=pw86urJRt5L_hn8d2Xr4PaXivHYk_sHSV0CiOtpAsDQ=",
        name:"Gruyère",
        desc:"Gruyere cheese is healthy. It is also rich in thiamine and riboflavin as an excellent source of calcium and other vitamins like vitamins A,k, and B12.",
        price:47,
        offer:0,

        quantity:100
    }),

    new allProducts({
        type:"milk",

        src:"https://media.istockphoto.com/id/496599287/photo/halloumi-cheese-sliced.jpg?s=612x612&w=0&k=20&c=ZVB-nQqDkHn-YP4KCAaJX6XM1VL_iltVSdM2HtSajVc=",
        name:"Halloumi",
        desc:"Halloumi cheese is healthy. It is also rich in thiamine and riboflavin as an excellent source of calcium and other vitamins like vitamins A,k, and B12.",
        price:47,
        offer:0,

        quantity:100
    }),

    new allProducts({
        type:"milk",

        src:"https://media.istockphoto.com/id/1136653744/photo/cured-manchego-cheese.jpg?s=612x612&w=0&k=20&c=0KrLAbUW4tY2MOd6mu2XP4wj10en_1QSq0omRTJsMPU=",
        name:"Manchego",
        desc:" manchego cheese is a important source of calcium, a mineral necesary for the growth of bones.",
        price:86,
        offer:0,

        quantity:57
    }),

    new allProducts({
        type:"milk",

        src:"https://media.istockphoto.com/id/517929743/photo/spanish-manchego-cheese.jpg?s=612x612&w=0&k=20&c=afI_fJksvdCNjL2S7dSrBd3DiVPkdvUvEhNErdEfuwg=",
        name:"Manchego",
        desc:" manchego cheese is a important source of calcium, a mineral necesary for the growth of bones.",
        price:200,
        offer:20,

        quantity:5
    }),

    new allProducts({
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
for (var i=0 ;i<all.length; i++){
    console.log(i);
    all[i].save((error,data)=>{
        if(!error){
        console.log(data);
        num++;
        if(num===all.length){
            mongoose.disconnect();
        }
    
    }else{
        console.log(error);
    }
        
    })
}