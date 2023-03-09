const mongoose = require('mongoose');

mongoose.set("strictQuery", false);
mongoose.connect("mongodb://127.0.0.1:27017/finalprojectApp", (err) => {
    if (!err) return console.log("db connected");
    console.log(err);
});

const diseases = require("../models/diseases");

const diseasesArray = [
    new diseases({
        type: "diabetes",
        image:"https://i.pinimg.com/236x/d5/50/50/d55050ee1a60283c26dabeeff1a1a9b4.jpg",
        question: "General advice for diabetic patients",
        answer: ["Eat meals and snacks regularly and at scheduled times", "Eat the right amount of food at a meal. Eating more may cause your blood sugar to rise, and eating less may cause it to drop.",
            "Get rid of excess weight", "Do more physical activities", "Eat healthy plant foods", "Eat healthy fats", "Choose healthy foods."],
        products: [
            {
                src: " https://produits.bienmanger.com/39229-0w600h600_Organic_Broccoli.jpg",
                name: "broccoli",
                desc: "Broccoli has a ton of nutritional benefits and contains 2.3 grams of fiber per cup, plus potassium and even some protein.",
                price: 19,
                quentity: 7
            },
            {
                src: "https://cdn.shopify.com/s/files/1/0104/1059/0266/products/Organic_Cabbage_Green.jpg?v=1544634755 ",
                name: "cabbage",
                desc: "Half a cup of cooked cabbage has about a third the vitamin C you need for the day. It also gives you doses of fiber",
                price: 13,
                quentity: 9
            },
            {
                src: "https://media.istockphoto.com/id/511868689/photo/fresh-cauliflower-with-pieces-isolated-on-white.jpg?s=612x612&w=0&k=20&c=6HjOXfDxV2B5Oazl4jK69GiORAtQEPS7WYpTAJ-KW24= ",
                name: "cauliflower",
                desc: "Half a cup of cooked cauliflower has about a third the vitamin C you need for the day. It also gives you doses of fiber",
                price: 15,
                quentity: 9
            },

            {
                src: "https://media.istockphoto.com/id/492464736/photo/fresh-celery-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=ezU7mfSslZFyzZV2yngLsaCAYOkexCMRyjdGJqyFwnA= ",
                name: "celery",
                desc: "Half a cup of cooked celery has about a third the vitamin C you need for the day. It also gives you doses of fiber",
                price: 10,
                quentity: 50
            },
            {
                src: "https://5.imimg.com/data5/CA/CB/MY-2/organic-cucumber-500x500.jpg",
                name: "cucumber",
                desc: "All that water in cucumbers can help keep you hydrated. Plus, the fiber boost they give you helps you stay regular and avoid constipation",
                price: 17,
                quentity: 7
            },

            {
                src: "https://media.istockphoto.com/id/1168507984/photo/artichoke-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=7xn2ZRItLqwMTRZz14SutgxXwSln8H2P-i1GhNi9Ry8=",
                name: "artichoke",
                desc: "Artichokes are low in fat while rich in fiber, vitamins, minerals, and antioxidants. Particularly high in folate and vitamins C and K, they also supply important minerals, such as magnesium, phosphorus, potassium, and iron",
                price: 20,
                quentity: 10
            },

            {
                src: "https://media.istockphoto.com/id/1084123600/photo/green-asparagus-sticks.jpg?s=612x612&w=0&k=20&c=x7E0xz8E81yt3fg_BD_NMUw1qENCt-kZsWmwPCr4OnM=",
                name: "asparagus",
                desc: "Asparagus is a good source of dietary fiber, which plays an important role in digestion. Insoluble dietary fiber acts as a prebiotic, feeding important gut bacteria, while soluble dietary fiber helps wash “bad” cholesterol out of your system. Asparagus is also a good source of: Vitamin A.",
                price: 30,
                quentity: 10
            },

            {
                src: "https://media.istockphoto.com/id/172925573/photo/red-tomatoes-still-on-the-vine.jpg?s=612x612&w=0&k=20&c=uljVOwI9ICETjf-bUHwDxP0sgb6e0hWRkmGcCJMei4E=",
                name: "tomatoes",
                desc: "Getting more tomatoes into your diet may make you less likely to have a stroke, which is when blood flow gets cut off to a part of your brain. Studies suggest that they may ease inflammation, boost your immune system, lower your cholesterol levels, and keep your blood from clotting.",
                price: 10,
                quentity: 60
            },

            {
                src: "https://media.istockphoto.com/id/182356201/photo/two-courgettes.jpg?s=612x612&w=0&k=20&c=IPE6nJj3a92Dz1V_SRReBMa1uzIss7PxD2Lm_WFVwic=",
                name: "zucchini",
                desc: "Zucchini is rich in vitamin B6. Research suggests that this vitamin can help with regulating blood glucose. The vitamin may even play a protective role against diabetes. Compounds such as lutein and zeaxanthin protect the eye's cells by filtering blue light wavelengths.",
                price: 10,
                quentity: 80
            },

            {
                src: " https://cdnprod.mafretailproxy.com/sys-master-root/hec/h46/9342314709022/315896_main.jpg_480Wx480H",
                name: "onion",
                desc: "Onions contain antioxidants and compounds that fight inflammation, decrease triglycerides, and reduce cholesterol levels",
                price: 19,
                quentity: 4
            },
        ]

    }),

    new diseases({
        type: "Pressure",
        image:"https://i.pinimg.com/236x/7c/cf/e8/7ccfe87970980a7ef618b53f09867bb9.jpg",

        question: "General advice for pressure patients",
        answer: ["Use less salt. Processed meats, canned foods, commercial soups, frozen dinners and certain breads can be hidden sources of salt.", "Limit alcohol. Even if you're healthy, alcohol can raise your blood pressure. If you choose to drink alcohol, do so in moderation.",
            "Don't smoke. Tobacco injures blood vessel walls and speeds up the process of hardening of the arteries.", "Maintain a healthy weight. If you're overweight or have obesity, losing weight can help control blood pressure and lower the risk of complications. ", "Get more exercise. Regular exercise keeps the body healthy. ", "Practice good sleep habits.", "Manage stress.", "Eat healthy foods."],
        products: [
            {
                src: " https://produits.bienmanger.com/39229-0w600h600_Organic_Broccoli.jpg",
                name: "broccoli",
                desc: "Broccoli has a ton of nutritional benefits and contains 2.3 grams of fiber per cup, plus potassium and even some protein.",
                price: 19,
                quentity: 7
            },
            {
                src: "https://target.scene7.com/is/image/Target/GUEST_95c6384a-7d40-4b61-8198-3d6a1598af5f?wid=488&hei=488&fmt=pjpeg  ",
                name: "Strawberry",
                desc: "Strawberries are good for your whole body. They naturally deliver vitamins, fiber, and particularly high levels of antioxidants known as polyphenols ",
                price: 16,
                quentity: 12
            }, {
                src: "https://bjs.scene7.com/is/image/bjs/28378?$bjs-Zoom$",
                name: "Banana",
                desc: "dried Organic Banana is prepared from sound, properly ripened fruit which has been dried to the specified moisture range, washed",
                price: 13,
                quentity: 7
            },
            {
                src: "https://media.istockphoto.com/id/584890470/photo/fresh-beetroot-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=PE1qdc2DEMLTu4MaFUsAeHBf6gHXoVNt3g0k375eCG0=",
                name: "Beets",
                desc: "Beets are rich in folate (vitamin B9) which helps cells grow and function. Folate plays a key role in controlling damage to blood vessels, which can reduce the risk of heart disease and stroke. Beets are naturally high in nitrates, which are turned into nitric oxide in the body.",
                price: 20,
                quentity: 100
            },

            {
                src: " https://produits.bienmanger.com/34089-0w470h470_Organic_Fresh_Kiwi.jpg",
                name: "kiwi",
                desc: " Kiwis have more Vitamin C than citrus and can be used in marinades as a meat tenderizer",
                price: 19,
                quentity: 7
            },

            {
                src: "https://cdn.shopify.com/s/files/1/0104/1059/0266/products/water-melon_large_a5014e18-0b00-4481-98e1-04ae9bad0122.jpg?v=1566981123",
                name: "watermelon",
                desc: "Watermelon consists mostly of water (91%) and carbs (7.5%). It provides almost no protein or fat and is very low in calories. ",
                price: 19,
                quentity: 6
            },

            {
                src: "https://5.imimg.com/data5/KH/DJ/MY-1735846/fresh-spinach-500x500.jpg   ",
                name: "spinach",
                desc: "Spinach is a nutritious, leafy green. This vegetable has been shown to benefit health in several ways",
                price: 14,
                quentity: 8
            },

            {
                src: "https://cdn-prod.medicalnewstoday.com/content/images/articles/295/295714/yogurt-greek.jpg",
                name: "yoghurt",
                desc: "Yogurts can be high in protein, calcium, vitamins, and live culture, or probiotics, which can enhance the gut microbiota ",
                price: 10,
                quantity: 100
            },

            {
                src: "https://cdn.shopify.com/s/files/1/0104/1059/0266/products/pomegranate.png?v=1541589453",
                name: "pomegranate",
                desc: "Pomegranates are rich in antioxidants and flavonoids, both of which are known to prevent free radicals from damaging your cells",
                price: 18,
                quentity: 4
            },
            {
                src: "https://5.imimg.com/data5/LG/JJ/MY-15718946/organic-cinnamon-powder-2f-usda-certifie-2f-iso-2f-gmp-500x500.jpg",
                name: "cinnamon",
                desc: "Cinnamon is rich in antioxidants and other beneficial compounds. Some research suggests that it may help support blood sugar control",
                price: 12,
                quentity: 5
            },
            {
                src: "https://m.media-amazon.com/images/I/71KmgOL2q4L._SX679_.jpg",
                name: "Garlic",
                desc: "Antioxidants can not only help protect against chronic disease but also may play a key role in sexual health and fertility. Fresh garlic and aged garlic extract ",
                price: 13,
                quentity: 4
            }

        ]

    }),

    new diseases({
        type: "heart",
        image:"https://i.pinimg.com/236x/5d/d9/e0/5dd9e0df72af466217b4d496b913e957.jpg",

        question: "General advice for heart patients",
        answer: ["Be sure to eat plenty of fresh fruits and vegetables and fewer processed foods.",
            "Eating lots of foods high in saturated fat and trans fat may contribute to heart disease.", "Eating foods high in fiber and low in saturated fats, trans fat, and cholesterol can help prevent high cholesterol."],
        products: [
            {
                src: "https://cdn-prod.medicalnewstoday.com/content/images/articles/295/295714/yogurt-greek.jpg",
                name: "yoghurt",
                desc: "Yogurts can be high in protein, calcium, vitamins, and live culture, or probiotics, which can enhance the gut microbiota ",
                price: 10,
                quantity: 100
            },

            {
                src: "https://cdn.shopify.com/s/files/1/0104/1059/0266/products/pomegranate.png?v=1541589453",
                name: "pomegranate",
                desc: "Pomegranates are rich in antioxidants and flavonoids, both of which are known to prevent free radicals from damaging your cells",
                price: 18,
                quentity: 4
            },

            {
                src: "https://tusupertogo.com/wp-content/uploads/2020/05/22203.jpg",
                name: "blueberry",
                desc: "Organic Blueberries are fleshy fruits with a bit of acid taste, bluish-black color and small size",
                price: 17,
                quentity: 7
            },

            {
                src: "https://blogs-images.forbes.com/bethhoffman/files/2012/04/Apple.jpg",
                name: "Apple",
                desc: "apples, crisped to perfection. With a crisp and delicious taste and no added sugar, preservatives or anything extra, kids will love these",
                price: 13,
                quentity: 5
            },

            {
                src: "https://produits.bienmanger.com/38827-0w600h600_Organic_Fresh_Green_Peppers.jpg",
                name: "pepper",
                desc: "Peppers have a lot going for them. They're low in calories and are loaded with good nutrition. ",
                price: 12,
                quentity: 7
            },

            {
                src: "https://cdnprod.mafretailproxy.com/sys-master-root/he3/h75/10187585781790/390441_main.jpg_480Wx480H",
                name: "carrots",
                desc: "Carrots are a particularly good source of beta carotene, fiber, vitamin K1, potassium, and antioxidants ( 1 )",
                price: 13,
                quentity: 5
            },

            {
                src: " https://ripeme.com/wp-content/uploads/RV-10047-RIPE-ORGANIC-ORGANIC-LETTUCE-ROMAINE.png",
                name: "lettuce",
                desc: "Lettuce is particularly rich in antioxidants like vitamin C and other nutrients like vitamins A and K and potassium",
                price: 19,
                quentity: 7
            },

            {
                src: " https://cdn.shopify.com/s/files/1/0336/7167/5948/products/image-of-organic-parsley-organics-28657363746860_1200x1200.jpg?v=1628094275",
                name: "parsley",
                desc: " Parsley works as a powerful natural diuretic and can help reduce bloating and blood pressure. Parsley is loaded with vitamin K, which has been linked to bone health",
                price: 19,
                quentity: 7
            },

            {
                src: " https://cdn.shopify.com/s/files/1/0206/9470/products/3542_grande.jpg?v=1622096058",
                name: "watercress",
                desc: "Watercress is also rich in vitamin C, which supports your immune system, helps you heal from injuries, and supports healthy collagen production",
                price: 19,
                quentity: 5
            },

            {
                src: "https://m.media-amazon.com/images/I/91f+tameo2L._SX522_.jpg",
                name: "Mint",
                desc: "Health Benefits of Mint Leaves Are: Treat Indigestion; Relieve Irritable Bowel Syndrome; Improve Respiratory Complaints",
                price: 19,
                quentity: 6
            },
            {
                src: "https://5.imimg.com/data5/KH/DJ/MY-1735846/fresh-spinach-500x500.jpg   ",
                name: "spinach",
                desc: "Spinach is a nutritious, leafy green. This vegetable has been shown to benefit health in several ways",
                price: 14,
                quentity: 8
            },
            {
                src: "https://cdn.shopify.com/s/files/1/0104/1059/0266/products/Organic_Cabbage_Green.jpg?v=1544634755 ",
                name: "cabbage",
                desc: "Half a cup of cooked cabbage has about a third the vitamin C you need for the day. It also gives you doses of fiber",
                price: 13,
                quentity: 9
            },
            {
                src: "https://media.istockphoto.com/id/492464736/photo/fresh-celery-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=ezU7mfSslZFyzZV2yngLsaCAYOkexCMRyjdGJqyFwnA= ",
                name: "celery",
                desc: "Half a cup of cooked celery has about a third the vitamin C you need for the day. It also gives you doses of fiber",
                price: 10,
                quentity: 50
            }]

    }),

    new diseases({
        type: "kidney ",
        image:"https://i.pinimg.com/236x/2e/93/14/2e9314cff7ad953bb77f7a1f6d3860ab.jpg",

        question: "General advice for kidney patients",
        answer: ["Control your blood pressure.",
            "Meet your blood glucose goal if you have diabetes.", "Work with a dietitian to develop a meal plan", "Make physical activity part of your routine", "Aim for a healthy weight", "Get enough sleep", "Stop smoking", "Find healthy ways to cope with stress and depression"],
        products: [
            {
                src: "https://media.istockphoto.com/id/511868689/photo/fresh-cauliflower-with-pieces-isolated-on-white.jpg?s=612x612&w=0&k=20&c=6HjOXfDxV2B5Oazl4jK69GiORAtQEPS7WYpTAJ-KW24= ",
                name: "cauliflower",
                desc: "Half a cup of cooked cauliflower has about a third the vitamin C you need for the day. It also gives you doses of fiber",
                price: 15,
                quentity: 9
            },
            {
                src: "https://m.media-amazon.com/images/I/71KmgOL2q4L._SX679_.jpg",
                name: "Garlic",
                desc: "Antioxidants can not only help protect against chronic disease but also may play a key role in sexual health and fertility. Fresh garlic and aged garlic extract ",
                price: 13,
                quentity: 4
            }, {
                src: " https://cdnprod.mafretailproxy.com/sys-master-root/hec/h46/9342314709022/315896_main.jpg_480Wx480H",
                name: "onion",
                desc: "Onions contain antioxidants and compounds that fight inflammation, decrease triglycerides, and reduce cholesterol levels",
                price: 19,
                quentity: 4

            },
            {
                src: "https://cdn.shopify.com/s/files/1/0104/1059/0266/products/Organic_Cabbage_Green.jpg?v=1544634755 ",
                name: "cabbage",
                desc: "Half a cup of cooked cabbage has about a third the vitamin C you need for the day. It also gives you doses of fiber",
                price: 13,
                quentity: 9
            },
            {
                src: "https://media.istockphoto.com/id/93456470/photo/two-raw-chicken-breast-on-white-backdrop.jpg?s=612x612&w=0&k=20&c=ZjLBVTWFSMpkDR9iiu5X2xBHyWlv5glzsOjJd5mkcfg=",
                name: "Chicken",
                desc: " chicken has all nine essential amino acids (which is called a complete protein). It's also lower in saturated fat than most red meat. ",
                price: 10,
                quantity: 10
            }, {
                src: "https://produits.bienmanger.com/38827-0w600h600_Organic_Fresh_Green_Peppers.jpg",
                name: "pepper",
                desc: "Peppers have a lot going for them. They're low in calories and are loaded with good nutrition. ",
                price: 12,
                quentity: 7
            }, {
                src: " https://m.media-amazon.com/images/I/61Anhiq1UwL._SL1200_.jpg",
                name: "turnip",
                desc: "Turnips are a cruciferous vegetable with multiple health benefits. They boast an impressive nutritional profile",
                price: 12,
                quentity: 5
            }, {
                src: " https://cdn.shopify.com/s/files/1/0206/9470/products/3542_grande.jpg?v=1622096058",
                name: "watercress",
                desc: "Watercress is also rich in vitamin C, which supports your immune system, helps you heal from injuries, and supports healthy collagen production",
                price: 19,
                quentity: 5
            }, {
                src: "https://blogs-images.forbes.com/bethhoffman/files/2012/04/Apple.jpg",
                name: "Apple",
                desc: "apples, crisped to perfection. With a crisp and delicious taste and no added sugar, preservatives or anything extra, kids will love these",
                price: 13,
                quentity: 5

            }, {
                src: "https://tusupertogo.com/wp-content/uploads/2020/05/22203.jpg",
                name: "blueberry",
                desc: "Organic Blueberries are fleshy fruits with a bit of acid taste, bluish-black color and small size",
                price: 17,
                quentity: 7
            }, {
                src: "https://target.scene7.com/is/image/Target/GUEST_95c6384a-7d40-4b61-8198-3d6a1598af5f?wid=488&hei=488&fmt=pjpeg  ",
                name: "Strawberry",
                desc: "Strawberries are good for your whole body. They naturally deliver vitamins, fiber, and particularly high levels of antioxidants known as polyphenols ",
                price: 16,
                quentity: 12
            }, {
                src: " https://www.hgofarms.com/wp-content/uploads/2021/05/grapes1.png ",
                name: "grapes",
                desc: "eating fresh grapes may prevent the accumulation of harmful oxidized cholesterol as well as the development of atherosclerotic lesions.",
                price: 14,
                quentity: 8
            }, {
                src: " https://cdn.shopify.com/s/files/1/0336/7167/5948/products/image-of-organic-pineapple-fruit-28663963680812_600x600.jpg?v=1628112278",
                name: "pineapple",
                desc: " free of artificial or synthetic fertilizers and full of unforgettable, great tasting flavor. ",
                price: 19,
                quentity: 5
            }, {
                src: "https://media.istockphoto.com/id/464387287/photo/bunch-of-cherries.jpg?s=612x612&w=0&k=20&c=nL3BAsDDKN24jriZexcCsRAA3Q62mBsy4ORSPOG5_sk=",
                name: "Cherry",
                desc: "Cherries are rich in antioxidants. These are natural chemicals that can help your body deal with day-to-day damage to your cells. The havoc may come from normal metabolism, inflammation, exercise, smoking, pollution, or radiation. Some studies show that both sweet and tart cherries help reduce this damage.",
                price: 20,
                quentity: 90
            }]

    }),
    new diseases({
        type: "liver  ",
        image:"https://i.pinimg.com/236x/b0/3b/ae/b03baee592b25b8d79bf33eb6d7151de.jpg",

        question: "General advice for liver  patients",
        answer: ["Reducing the amount of animal protein you eat. This will help limit the buildup of toxic waste products.",
            "Eating fruits and vegetables and lean protein such as legumes, poultry, and fish. Avoid uncooked shellfish.", "Taking vitamins and medicines prescribed by your health care provider for low blood count, nerve problems, or nutritional problems from liver disease.", "Limiting your salt intake. Salt in the diet may worsen fluid buildup and swelling in the liver."],
        products: [
            {
                src: "https://media.istockphoto.com/id/93456470/photo/two-raw-chicken-breast-on-white-backdrop.jpg?s=612x612&w=0&k=20&c=ZjLBVTWFSMpkDR9iiu5X2xBHyWlv5glzsOjJd5mkcfg=",
                name: "Chicken",
                desc: " chicken has all nine essential amino acids (which is called a complete protein). It's also lower in saturated fat than most red meat. ",
                price: 10,
                quantity: 10
            }, {
                src: "https://media.istockphoto.com/id/1400102034/photo/chicken-breast-isolated-raw-chicken-fillet-on-white-background-poultry-raw-chicken-meat-with.jpg?s=612x612&w=0&k=20&c=xcNODBIArV_LvkpZ847Lqc4rQtNjeloeACpn-7nTaFg=",
                name: "Turkey",
                desc: " Turkey has all nine essential amino acids (which is called a complete protein). It's also lower in saturated fat than most red meat. ",
                price: 80,
                quantity: 20
            }, {
                src: "https://article.innovadatabase.com/articleimgs/article_images/637012813408253935breakfast%20yoghurt%20[750x750].jpg",
                name: "yoghurt",
                desc: "Yogurts can be high in protein, calcium, vitamins, and live culture, or probiotics, which can enhance the gut microbiota ",
                price: 13,
                quantity: 200
            }, {
                src: "https://media.istockphoto.com/id/531048911/photo/portion-of-cheddar.jpg?s=612x612&w=0&k=20&c=mzcYWuuRiPHm-UOIk1GToW7O0qhPEkb-3WDa46M2lbg=",
                name: "Cheddar Cheese",
                desc: "cheddar is a cow's milk cheese that was first produced in England. Like most cheeses, young cheddars are mild and creamy; aged cheddars are more crumbly and complex in flavor ",
                price: 90,
                quantity: 70
            }, {
                src: "https://media.istockphoto.com/id/155445919/photo/bowl-of-cottage-cheese.jpg?s=612x612&w=0&k=20&c=68ZJjQC-403C0gT24D3Q0YB8G_cuNFTK38u2koB_zqs=",
                name: "Cottage Cheese",
                desc: "Cottage cheese is an excellent source of calcium, a mineral that plays a major role in tooth and bone health, and in the prevention of osteoporosis. It also helps you to regulate your blood pressure and might even play a roleTrusted Source in preventing certain cancers, such as prostate cancer..",
                price: 60,
                quantity: 55
            }, {
                src: "https://4.imimg.com/data4/NN/NN/GLADMIN-/wp-content-uploads-french-beans-1-500x500.jpg ",
                name: "beans",
                desc: "Beans provide protein, fiber, iron, and antioxidants that can make them a healthful addition to the diet ",
                price: 19,
                quentity: 7
            }, {
                src: "https://media.istockphoto.com/id/1166196966/photo/ghee-clarified-butter-in-jar.jpg?s=612x612&w=0&k=20&c=frQwEWE_TWQH6n7OuRdU2yqVmhe6QhVMdmdfLv3hio4=",
                name: "Clarified butter",
                desc: "Clarified butter is rich in vitamins, works over high heat ",
                price: 50,
                quantity: 200
            }, {
                src: "https://m.media-amazon.com/images/I/71KmgOL2q4L._SX679_.jpg",
                name: "Garlic",
                desc: "Antioxidants can not only help protect against chronic disease but also may play a key role in sexual health and fertility. Fresh garlic and aged garlic extract ",
                price: 13,
                quentity: 4
            }, {
                src: "https://media.istockphoto.com/id/1197838680/photo/various-kinds-of-vegan-milk.jpg?s=612x612&w=0&k=20&c=6VGC5R9qc4NS9F7Iwp9UlJLqfDVeaEMjQLKeizSh6cA=",
                name: "Milk",
                desc: "Milk is an excellent source of calcium and phosphorus which are necessary for the development and maintenance of strong, healthy bones and teeth. ",
                price: 10,
                quantity: 90
            }, {
                src: "https://produits.bienmanger.com/34571-0w600h600_Organic_Ginger.jpg ",
                name: "ginger",
                desc: "ginger increases serotonin and dopamine levels. This can reduce inflammation, which may cause depression",
                price: 12,
                quentity: 5
            }, {
                src: "https://bjs.scene7.com/is/image/bjs/28378?$bjs-Zoom$",
                name: "Banana",
                desc: "dried Organic Banana is prepared from sound, properly ripened fruit which has been dried to the specified moisture range, washed",
                price: 13,
                quentity: 7
            }

        ]
    }),





]
var num=0;
for (var i=0 ;i<diseasesArray.length; i++){
    console.log(i);
    diseasesArray[i].save((error,data)=>{
        if(!error){
        console.log(data);
        num++;
        if(num===diseasesArray.length){
            mongoose.disconnect();
        }
    
    }else{
        console.log(error);
    }
        
    })
}
