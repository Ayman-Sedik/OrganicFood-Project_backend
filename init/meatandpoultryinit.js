const mongoose=require('mongoose');

mongoose.set("strictQuery", false);
mongoose.connect("mongodb://127.0.0.1:27017/finalprojectApp",(err)=>{
    if(!err) return console.log("db connected");
    console.log(err);
});

const meatandpoulty=require("../models/meatandpoultry");

const mAndp=[
    new meatandpoulty({
        type:"meat",

        src:"https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name:"Beef",
        desc:"Beef red meat doesn't raise your cholesterol and contains nutrients like protein, vitamin B12, iron, niacin, and zinc. Beef tenderloin is a lean, delicious -- and healthy ",
        price:30,
        offer:10,

        quantity:15
    }),

    new meatandpoulty({
        type:"meat",

        src:"https://images.pexels.com/photos/128401/pexels-photo-128401.jpeg",
        name:"Soft minced meat",
        desc:"Beef red meat doesn't raise your cholesterol and contains nutrients like protein, vitamin B12, iron, niacin, and zinc. Beef tenderloin is a lean, delicious and healthy ",
        price:35,
        offer:0,

        quantity:20
    }),

    new meatandpoulty({
        type:"meat",

        src:"https://media.istockphoto.com/id/538918713/photo/lamb-chops.jpg?s=612x612&w=0&k=20&c=qRiDgM6Pp7mKLcIf_hIy6o4jom6J-wGrtkRMaXw5RaM=",
        name:"Lamb meat",
        desc:"lamb is a good source of protein, omega-3 fatty acids, vitamin B12, niacin, zinc, and iron ",
        price:50,
        offer:20,

        quantity:30
    }),

    new meatandpoulty({
        type:"meat",

        src:"https://media.istockphoto.com/id/540579864/photo/raw-lamb-leg-on-blue-stone-background-with-herbs.jpg?s=612x612&w=0&k=20&c=SNnFNXdO_CXoNrZKLVbwJDT1FjX4pQnTddJJQzO6cng=",
        name:"Lamb meat",
        desc:"lamb is a good source of protein, omega-3 fatty acids, vitamin B12, niacin, zinc, and iron ",
        price:60,
        offer:0,

        quantity:20
    }),

    new meatandpoulty({
        type:"meat",

        src:"https://media.istockphoto.com/id/105489252/photo/rack-of-lamb-with-rosemary.jpg?s=612x612&w=0&k=20&c=O1Vpfvq9_TZOsuy0QdaXyx3sFOvH3kGf29nPBZB_aHY=",
        name:"Lamb meat",
        desc:"lamb is a good source of protein, omega-3 fatty acids, vitamin B12, niacin, zinc, and iron ",
        price:40,
        offer:0,

        quantity:10
    }),

    new meatandpoulty({
        type:"meat",

        src:"https://media.istockphoto.com/id/1219384973/photo/shoulder-of-lamb.jpg?s=612x612&w=0&k=20&c=Tc7XU4f6hPwJ1FaFt7UPKJhw4HoKUBVcRuc_66tCdDU=",
        name:"Lamb meat",
        desc:"lamb is a good source of protein, omega-3 fatty acids, vitamin B12, niacin, zinc, and iron ",
        price:50,
        offer:0,

        quantity:10
    }),

    new meatandpoulty({
        type:"meat",

        src:"https://media.istockphoto.com/id/1391917848/photo/butcher-board-with-raw-lamb-mutton-leg-with-herbs-wooden-background-top-view.jpg?s=612x612&w=0&k=20&c=1fB9BtR0vZD04gNKw0err_IoiuBow7A8pHuW2I6o3aI=",
        name:"Goat meat",
        desc:"It has far less fat and calories than other red meats, and has plenty of vitamins and nutrients. It also has very little saturated fat even less than chicken.",
        price:60,
        offer:30,

        quantity:20
    }),

    new meatandpoulty({
        type:"meat",

        src:"https://media.istockphoto.com/id/494764324/photo/goat-meat.jpg?s=612x612&w=0&k=20&c=0FfudVZmM-TpypFKjqtu-_wzmEOGAivZ2DOrfZu4ONM=",
        name:"Bison meat",
        desc:"This is one of the leanest red meats, which makes it healthier from the start. But there's more: Compared to beef with the same fat content, bison doesn't make as many of the fatty plaques that can clog your arteries and lead to heart disease. ",
        price:50,
        offer:10,

        quantity:10
    }),

    new meatandpoulty({
        type:"meat",

        src:"https://media.istockphoto.com/id/1218138254/photo/angus-beef-meat-on-a-wood-board-raw-red-meat-on-wooden-table.jpg?s=612x612&w=0&k=20&c=xQxHDQpnmsFu8fundXXn3uiKQAKQUVrKpKeLAAlv02Q=",
        name:"Bison meat",
        desc:"This is one of the leanest red meats, which makes it healthier from the start. But there's more: Compared to beef with the same fat content, bison doesn't make as many of the fatty plaques that can clog your arteries and lead to heart disease. ",
        price:50,
        offer:0,

        quantity:20
    }),

    new meatandpoulty({
        type:"meat",

        src:"https://media.istockphoto.com/id/1188701405/photo/fresh-raw-beef-steak-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=81e_IT4_vLtTbrUTUIYMO0hk3VXLuxFTDEg5fypF6Pk=",
        name:"Bison meat",
        desc:"This is one of the leanest red meats, which makes it healthier from the start. But there's more: Compared to beef with the same fat content, bison doesn't make as many of the fatty plaques that can clog your arteries and lead to heart disease. ",
        price:100,
        offer:0,

        quantity:20
    }),

    new meatandpoulty({
        type:"meat",
        src:"https://media.istockphoto.com/id/93456470/photo/two-raw-chicken-breast-on-white-backdrop.jpg?s=612x612&w=0&k=20&c=ZjLBVTWFSMpkDR9iiu5X2xBHyWlv5glzsOjJd5mkcfg=",
        name:"Chicken",
        desc:" chicken has all nine essential amino acids (which is called a complete protein). It's also lower in saturated fat than most red meat. ",
        price:10,
        offer:0,

        quantity:10
    }),

    new meatandpoulty({
        type:"meat",

        src:"https://media.istockphoto.com/id/1400102034/photo/chicken-breast-isolated-raw-chicken-fillet-on-white-background-poultry-raw-chicken-meat-with.jpg?s=612x612&w=0&k=20&c=xcNODBIArV_LvkpZ847Lqc4rQtNjeloeACpn-7nTaFg=",
        name:"Turkey",
        desc:" Turkey has all nine essential amino acids (which is called a complete protein). It's also lower in saturated fat than most red meat. ",
        price:80,
        offer:0,

        quantity:20
    }),

    new meatandpoulty({
        type:"meat",

        src:"https://media.istockphoto.com/id/1351966509/photo/raw-chicken-biriyani-cut-without-skin.jpg?s=612x612&w=0&k=20&c=EVEpZu80ujfBBbhFAVhj1ln-r6gV7dtJ2xAgOjTo2kk=",
        name:"Chicken",
        desc:" Chicken has all nine essential amino acids (which is called a complete protein). It's also lower in saturated fat than most red meat. ",
        price:10,
        offer:0,

        quantity:20
    }),

    new meatandpoulty({
        type:"meat",

        src:"https://media.istockphoto.com/id/93456512/photo/raw-chicken.jpg?s=612x612&w=0&k=20&c=UuvFL4g04JjBtrBdF9dAVReSUxELJey3CHEZv5z9OyE=",
        name:"Chicken",
        desc:" Chicken has all nine essential amino acids (which is called a complete protein). It's also lower in saturated fat than most red meat. ",
        price:10,
        offer:0,

        quantity:30
    }),

    new meatandpoulty({
        type:"meat",

        src:"https://media.istockphoto.com/id/1282866808/photo/fresh-raw-chicken.jpg?s=612x612&w=0&k=20&c=QtfdAhdeIGpR3JUNDmYFo6cN0el8oYMcOXMQI7Qder4=",
        name:"Chicken",
        desc:" Chicken has all nine essential amino acids (which is called a complete protein). It's also lower in saturated fat than most red meat. ",
        price:20,
        offer:10,

        quantity:30
    }),

    new meatandpoulty({
        type:"meat",

        src:"https://media.istockphoto.com/id/654548016/photo/raw-chicken-breasts-fillets-with-thyme-and-spices-on-wooden-cutting-board-on-rustic-background.jpg?s=612x612&w=0&k=20&c=DtPQwLwHsykYW1__4mh7CdpqMr1olyeC9lXYDEdrC4c=",
        name:"Turkey",
        desc:" Turkey has all nine essential amino acids (which is called a complete protein). It's also lower in saturated fat than most red meat. ",
        price:70,
        offer:20,

        quantity:30
    }),

    new meatandpoulty({
        type:"meat",

        src:"https://media.istockphoto.com/id/1402330988/photo/slices-of-raw-turkey-meat-fillet.jpg?s=612x612&w=0&k=20&c=tG6m295S3ODnwR7gX1VX-3SnCY2MqKBOERXU_xkrmTA=",
        name:" Soft minced chicken",
        desc:" Chicken has all nine essential amino acids (which is called a complete protein). It's also lower in saturated fat than most red meat. ",
        price:20,
        offer:10,

        quantity:30
    }),

    new meatandpoulty({
        type:"meat",

        src:"https://media.istockphoto.com/id/1371036072/photo/raw-duck-breasts-with-skin-on-wooden-cutting-board-with-old-butcher-cleaver-knife-on-old-dark.jpg?s=612x612&w=0&k=20&c=DBtTzvj-Nbt63cy65QJCXCkT1pV6T2IayGN4Ip9-w40=",
        name:" Duck",
        desc:" Duck meat is an excellent source of iron, providing 50% of the iron we need in a day. Iron helps make healthy blood that flows through our bodies, giving us energy and making us grow. Healthy blood keeps us from getting tired ",
        price:50,
        offer:0,

        quantity:30
    }),

    new meatandpoulty({
        type:"meat",

        src:"https://media.istockphoto.com/id/617880108/photo/raw-duck-breast.jpg?s=612x612&w=0&k=20&c=8WRECQzIHsWbmhV3BSkB5UzzoVUSAg-0NR8vFUn3nfg=",
        name:" Duck",
        desc:" Duck meat is an excellent source of iron, providing 50% of the iron we need in a day. Iron helps make healthy blood that flows through our bodies, giving us energy and making us grow. Healthy blood keeps us from getting tired ",
        price:30,
        offer:0,

        quantity:100
    }),

    new meatandpoulty({
        type:"meat",

        src:"https://media.istockphoto.com/id/91092265/photo/raw-magret-duck-fillet.jpg?s=612x612&w=0&k=20&c=L-Rol0dpatQWJ2FLIV94uZQhNAptG6lOILSQoRjYfH8=",
        name:" Duck",
        desc:" Duck meat is an excellent source of iron, providing 50% of the iron we need in a day. Iron helps make healthy blood that flows through our bodies, giving us energy and making us grow. Healthy blood keeps us from getting tired ",
        price:50,
        offer:0,

        quantity:100
    }),

    new meatandpoulty({
        type:"meat",

        src:"https://media.istockphoto.com/id/176837012/photo/organic-duck-cleaned-and-ready-for-cooking.jpg?s=612x612&w=0&k=20&c=OG-ThgkYGKOtZyJugwHCZl38Vx8rhbDdySK7WnVKPGA=",
        name:" Duck",
        desc:" Duck meat is an excellent source of iron, providing 50% of the iron we need in a day. Iron helps make healthy blood that flows through our bodies, giving us energy and making us grow. Healthy blood keeps us from getting tired ",
        price:60,
        offer:0,

        quantity:100
    }),

    new meatandpoulty({
        type:"meat",

        src:"https://media.istockphoto.com/id/1282553598/photo/raw-whole-duck-pink-pepper-and-rosemary-black-background-top-view.jpg?s=612x612&w=0&k=20&c=3tA4Iebe_a7d4tNEO-hhTSt6eMogD5vvL0XYXMO4UrU=",
        name:" Geese",
        desc:" Geese meat is an excellent source of iron, providing 50% of the iron we need in a day. Iron helps make healthy blood that flows through our bodies, giving us energy and making us grow. Healthy blood keeps us from getting tired ",
        price:60,
        offer:0,

        quantity:100
    }),

    new meatandpoulty({
        type:"meat",

        src:"https://media.istockphoto.com/id/457549585/photo/close-up-of-foie-gras-on-grey-tile-cutting-board.jpg?s=612x612&w=0&k=20&c=sNwPTSwu9QuppQbUgBT6ZZvy6qTmA0aeHWljILNUXzU=",
        name:" Geese",
        desc:" Geese meat is an excellent source of iron, providing 50% of the iron we need in a day. Iron helps make healthy blood that flows through our bodies, giving us energy and making us grow. Healthy blood keeps us from getting tired ",
        price:100,
        offer:50,

        quantity:100
    }),

    new meatandpoulty({
        type:"meat",

        src:"https://media.istockphoto.com/id/477555578/photo/raw-poultry.jpg?s=612x612&w=0&k=20&c=Xuy1xtU2cUpn-NnjZHtNRyTUMOZZy4BPBMG8LztDfjU=",
        name:" Guinea fowl",
        desc:" Guinea fowl meat is an excellent source of iron, providing 50% of the iron we need in a day. Iron helps make healthy blood that flows through our bodies, giving us energy and making us grow. Healthy blood keeps us from getting tired ",
        price:100,
        offer:20,

        quantity:100
    }),

    new meatandpoulty({
        type:"meat",

        src:"https://media.istockphoto.com/id/174479270/photo/fresh-ribeye-steaks-at-the-butcher-shop.jpg?s=612x612&w=0&k=20&c=PrfT8kONs8UCd-0LLoBD6LG_NMRRPgOUsv_s-e7sIU4=",
        name:"Beef",
        desc:"Beef red meat doesn't raise your cholesterol and contains nutrients like protein, vitamin B12, iron, niacin, and zinc. Beef tenderloin is a lean, delicious -- and healthy ",
        price:50,
        offer:0,

        quantity:100
    }),

    new meatandpoulty({
        type:"meat",

        src:"https://media.istockphoto.com/id/171359079/photo/prime-boneless-hip-sirloin-steak.jpg?s=612x612&w=0&k=20&c=DiPF84Yz3xDGgdS5cahHRn11OUt1YNs_cpjebaSPC0g=",
        name:"Beef",
        desc:"Beef red meat doesn't raise your cholesterol and contains nutrients like protein, vitamin B12, iron, niacin, and zinc. Beef tenderloin is a lean, delicious -- and healthy ",
        price:60,
        offer:30,

        quantity:60
    }),

    new meatandpoulty({
        type:"meat",

        src:"https://media.istockphoto.com/id/157681614/photo/beef-tenderloin-steaks.jpg?s=612x612&w=0&k=20&c=gLDYXG_Hho6Wp6YGEDZ8MAJRbIpaFkIYdVw9Qcp9268=",
        name:"Beef",
        desc:"Beef red meat doesn't raise your cholesterol and contains nutrients like protein, vitamin B12, iron, niacin, and zinc. Beef tenderloin is a lean, delicious -- and healthy ",
        price:40,
        offer:0,

        quantity:10
    }),

    new meatandpoulty({
        type:"meat",

        src:"https://media.istockphoto.com/id/469354734/photo/fresh-and-raw-meat-sirloin-medallions-steaks.jpg?s=612x612&w=0&k=20&c=OH-FtjIgFS2psxomUDTZ450Zc35VvyZCQP2w64cbl_4=",
        name:"Beef",
        desc:"Beef red meat doesn't raise your cholesterol and contains nutrients like protein, vitamin B12, iron, niacin, and zinc. Beef tenderloin is a lean, delicious -- and healthy ",
        price:50,
        offer:0,

        quantity:40
    }),

    new meatandpoulty({
        type:"meat",

        src:"https://media.istockphoto.com/id/923692030/photo/variety-of-raw-black-angus-prime-meat-steaks.jpg?s=612x612&w=0&k=20&c=QWs-aEHfLMF74kWVHt5srGB-1noX-st5I3Ntg-kAJ9s=",
        name:"Cow meat",
        desc:"Cow meat red meat doesn't raise your cholesterol and contains nutrients like protein, vitamin B12, iron, niacin, and zinc. Beef tenderloin is a lean, delicious -- and healthy ",
        price:55,
        offer:10,

        quantity:40
    }),

    new meatandpoulty({
        type:"meat",

        src:"https://media.istockphoto.com/id/935316446/photo/fresh-raw-rib-eye-steaks-isolated-on-white.jpg?s=612x612&w=0&k=20&c=UBnLccI6y47Vynuxa2BybZS0jPUtEqpJvL4LzVgGSOg=",
        name:"Cow meat",
        desc:"Cow meat red meat doesn't raise your cholesterol and contains nutrients like protein, vitamin B12, iron, niacin, and zinc. Beef tenderloin is a lean, delicious -- and healthy ",
        price:55,
        offer:0,

        quantity:40
    })

]

var num=0;
for (var i=0 ;i<mAndp.length; i++){
    console.log(i);
    mAndp[i].save((error,data)=>{
        if(!error){
        console.log(data);
        num++;
        if(num===mAndp.length){
            mongoose.disconnect();
        }
    
    }else{
        console.log(error);
    }
        
    })
}