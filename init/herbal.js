const mongoose = require('mongoose');

mongoose.set("strictQuery", false);
mongoose.connect("mongodb://127.0.0.1:27017/finalprojectApp", (err) => {
    if (!err) return console.log("db connected");
    console.log(err);
});

const herbal = require("../models/herbal");

const herbals = [
    new herbal({
        type:"herbal",
        src: "https://produits.bienmanger.com/34571-0w600h600_Organic_Ginger.jpg ",
        name: "ginger",
        desc: "ginger increases serotonin and dopamine levels. This can reduce inflammation, which may cause depression",
        price: 12,
        offer:0,

        quantity: 5

    }),
    new herbal({
        type:"herbal",

        src: " https://www.abelandcole.co.uk/media/7073_14599_m.jpg ",
        name: "Rosemary",
        desc: "Studies have shown that the carnosic and rosmarinic acids in rosemary have powerful antibacterial, antiviral, and antifungal properties",
        price: 12,
        offer:0,

        quantity: 5

    }),

    new herbal({
        type:"herbal",

        src: "https://5.imimg.com/data5/LG/JJ/MY-15718946/organic-cinnamon-powder-2f-usda-certifie-2f-iso-2f-gmp-500x500.jpg",
        name: "cinnamon",
        desc: "Cinnamon is rich in antioxidants and other beneficial compounds. Some research suggests that it may help support blood sugar control",
        price: 12,
        offer:0,

        quantity: 5
    }),

    new herbal({
        type:"herbal",

        src: "https://strictlymedicinalseeds.com/wp-content/uploads/2022/04/Greater_wild_thyme_potted_plant_600.jpg ",
        name: "Wild thyme ",
        desc: "The flowering parts of the plant are used to make medicine. People take wild thyme for breathing problems including cough, bronchitis, and swollen airways.",
        price: 12,
        offer:0,

        quantity: 5

    }),

    new herbal({
        type:"herbal",

        src: " https://tropicaliment.com/wp-content/uploads/2017/10/Organic-Parsley.png",
        name: "parsley",
        desc: "Parsley works as a powerful natural diuretic and can help reduce bloating and blood pressure. Parsley is loaded with vitamin K, which has been linked to bone health. ",
        price: 12,
        offer:0,

        quantity: 5

    }),

    new herbal({
        type:"herbal",

        src: "https://cdn11.bigcommerce.com/s-jl3t5tg/images/stencil/920x596/products/265/2140/organic-nettle-leaf__65522.1501625378.png?c=2",
        name: "nettle",
        desc: "General Uses. Stinging nettle has been used for hundreds of years to treat painful muscles and joints, eczema, arthritis",
        price: 12,
        offer:0,

        quantity: 5



    }),

    new herbal({
        type:"herbal",

        src: "https://m.media-amazon.com/images/I/51bxH2sF3-L._AC_SY1000_.jpg ",
        name: "licorice",
        desc: "Licorice root contains over 300 chemical compounds and flavonoids. Glycyrrhizin, the most active chemical compound found in licorice, has been studied for its medicinal properties",
        price: 12,
        offer:0,

        quantity: 5


    }),

    new herbal({
        type:"herbal",

        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeJP1LFopkF3UipHzlYE23w19-pdHb4-RvWg&usqp=CAU ",
        name: "turmeric",
        desc: "Turmeric can increase the antioxidant capacity of the body",
        price: 12,
        offer:0,

        quantity: 5


    }),

    new herbal({
        type:"herbal",

        src: " https://cdn.shopify.com/s/files/1/0104/1059/0266/products/Organic_Celery.jpg?v=1580900999",
        name: "celery",
        desc: "Widely recognized as one of the healthiest snacks available, celery is a wonderful source of fiber",
        price: 12,
        offer:0,

        quantity: 5


    }),

    new herbal({
        type:"herbal",

        src: "https://gatheringplacetrading.com/wp-content/uploads/2019/01/clove-whole-organic.jpg ",
        name: "cloves",
        desc: "Cloves are full of antioxidants. These compounds help your body to fight free radicals, which damage your cells and can lead to disease.",
        price: 12,
        offer:0,

        quantity: 5



    }),

    new herbal({
        type:"herbal",

        src: "https://target.scene7.com/is/image/Target/GUEST_c8bf76de-4c69-4fc7-8b3d-a6da27a830e9?fmt=webp&wid=250&hei=250&qlt=80 ",
        name: "anise",
        desc: "anise , can keep your blood healthy and reduce your risk of iron deficiency anemia. ",
        price: 12,
        offer:0,

        quantity: 5


    }),

    new herbal({
        type:"herbal",

        src: " https://m.media-amazon.com/images/I/81VpFYDN9AL._SL1500_.jpg",
        name: "menthe",
        desc: " Mint provides a refreshing taste that can make the mouth feel clean. It also has antibacterial and anti-inflammatory properties, which can improve teeth and gum ",
        price: 12,
        offer:0,

        quantity: 5


    }),

    new herbal({
        type:"herbal",

        src: " https://www.forestwholefoods.co.uk/wp-content/uploads/2017/04/Organic-Caraway-Seeds-1500px.jpg",
        name: "caraway",
        desc: "Caraway is loaded with fiber and several important minerals, including iron, magnesium, copper, and calcium",
        price: 12,
        offer:0,

        quantity: 5



    }),


    new herbal({
        type:"herbal",

        src: "https://www.australherbs.com.au/assets/full/XSAGE.jpg?20210810165810 ",
        name: "sage",
        desc: "Sage is very high in vitamin K, and it also contains vital minerals like magnesium, zinc, and copper",
        price: 12,
        offer:0,

        quantity: 5


    }),

    new herbal({
        type:"herbal",

        src: "https://cdn.shopify.com/s/files/1/0284/2450/products/BASILCLASSICITALIAN_1024x.jpg?v=1595658733 ",
        name: "basil",
        desc: "basil can block calcium channels, which may help to lower blood pressure ",
        price: 12,
        offer:0,

        quantity: 5



    }),

    new herbal({
        type:"herbal",

        src: "https://www.healthysupplies.co.uk/pics/fenugreek-seeds-organic-small-7FEU1.jpg",
        name: "Fenugreek",
        desc: "Fenugreek is an herb with many potential health benefits, including improving cholesterol and blood pressure.",
        price: 12,
        offer:0,

        quantity: 5



    })




]

var num = 0;
for (var i = 0; i < herbals.length; i++) {
    console.log(i);
    herbals[i].save((error, data) => {
        if (!error) {
            console.log(data);
            num++;
            if (num === herbals.length) {
                mongoose.disconnect();
            }

        } else {
            console.log(error);
        }

    })
}      