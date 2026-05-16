import React from 'react'
import Clone from './Clone'
import CreateNav from './CreateNav'

const App = () => {

const bannerData = [
  {
    id: 1,
    title: "Under ₹1,499",
    subtitle: "Budget friendly headphones",
    brand: "boAt | Boult",
    image: "https://www.boat-lifestyle.com/cdn/shop/files/ACCG6DS7WDJHGWSH_0.png?v=1727669669",
    bgImage: "https://nikel.co.id/wp-content/uploads/2022/06/abstract-blur-pastel-beautiful-peach-pink-color-sky-warm-tone-background-design-as-banner-slide-show-others-scaled.jpg"
  },
  {
    id: 2,
    title: "Under ₹399",
    subtitle: "Shop t-shirts & polos",
    brand: "Top brands | Latest trends",
    image: "https://assets.ajio.com/medias/sys_master/root1/20250821/gJ6f/68a6f0bc8bfb9009aca0d5ac/-473Wx593H-700059482-multi-MODEL.jpg",
    bgImage: "https://t4.ftcdn.net/jpg/01/37/97/57/360_F_137975789_m9ci8tAWdbozSaeqVGQ8BVx8cGg0eVVH.jpg"
  },
  {
    id: 3,
    title: "Starting ₹999",
    subtitle: "Drying racks",
    brand: "Mega home sale",
    image: "data:image/jpeg;base64,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",
    bgImage: "https://img.freepik.com/free-vector/purple-background-with-white-spot-it_125964-4193.jpg?semt=ais_rp_progressive&w=740&q=80"
  },
    {
    id: 4,
    title: "Starting ₹99",
    subtitle: "Bestselling mobile accessories",
    brand: "wide Selection | Top Brands",
    image:"https://www.onezeros.in/cdn/shop/collections/blue-phone-case-and-eyeglasses-on-wooden-table_3.jpg?v=1721571788&width=1500",
   bgImage: "https://t4.ftcdn.net/jpg/03/66/59/11/360_F_366591171_O3GVRD27cvNaIOSiPsQXCjwp1gBpKahZ.jpg"
  }
];

const cardData = [
  {
    id: 1,
    title: "Appliances for your home | Up to 55% off",
    img1: "https://static.vecteezy.com/system/resources/thumbnails/025/739/597/small/close-up-shot-of-newly-installed-white-air-conditioner-working-ac-hanging-on-the-pastel-color-wall-with-a-lot-of-copy-space-for-text-background-generative-ai-free-photo.jpg",
    name1: "Air conditioners",
    img2: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg",
    name2: "Refrigerators",
    img3: "https://images.hindustantimes.com/tech/img/2024/07/01/1600x900/LG_launched_microwave_ovens_with_scan_to_cook_tech_1719839455685_1719839455873.jpg",
    name3: "Microwaves",
    img4: "https://aws-obg-image-lb-2.tcl.com/content/dam/brandsite/global/images-for-blog/how-to-open-a-locked-washing-machine-door-pc.jpg",
    name4: "Washing machines",
    link: "See more"
  },

  {
    id: 2,
    title: "Starting ₹49 | Deals on home essentials",
    img1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXT6-3n4-CnDVpk1jgaF_DaVIFruoNZt03Ng&s",
    name1: "Cleaning supplies",
    img2: "https://www.millers-va.com/wp-content/uploads/2019/08/Top_Rated_Shower_Heads_1600x.jpg",
    name2: "Accessories",
    img3: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiJ7VrG1X_vEiowIAYOl8DoyDpWtr4ByBbJg&s",
    name3: "Home tools",
    img4: "https://5.imimg.com/data5/ANDROID/Default/2022/3/ZN/QH/WA/12864891/product-jpeg-500x500.jpg",
    name4: "Wallpapers",
    link: "Explore all"
  },

  {
    id: 3,
    title: "Revamp your home in style",
    img1: "https://m.media-amazon.com/images/I/81E6AbHH4VL.jpg",
    name1: "Cushion covers",
    img2: "https://m.media-amazon.com/images/I/513w3gNF-uL._AC_SR290,290_.jpg",
    name2: "Figurines, vases ",
    img3: "https://assets.ajio.com/medias/sys_master/root/20240919/0px5/66ebf901f9b8ef490b516985/-473Wx593H-466399018-brown-MODEL.jpg",
    name3: "Home storage",
    img4: "https://www.le-electrical.co.uk/wp-content/uploads/2018/09/Fotolia_72421384_Subscription_Monthly_M-1024x675.jpg",
    name4: "Lighting solutions",
    link: "Explore all"
  },
    {
    id: 4,
    title: "Revamp your home in style",
    img1: "https://m.media-amazon.com/images/I/81E6AbHH4VL.jpg",
    name1: "Cushion covers",
    img2: "https://m.media-amazon.com/images/I/513w3gNF-uL._AC_SR290,290_.jpg",
    name2: "Figurines, vases ",
    img3: "https://assets.ajio.com/medias/sys_master/root/20240919/0px5/66ebf901f9b8ef490b516985/-473Wx593H-466399018-brown-MODEL.jpg",
    name3: "Home storage",
    img4: "https://www.le-electrical.co.uk/wp-content/uploads/2018/09/Fotolia_72421384_Subscription_Monthly_M-1024x675.jpg",
    name4: "Lighting solutions",
    link: "Explore all"
  }
];

const imgData = [
  {
  img1: "https://i.pinimg.com/736x/e4/64/28/e4642835c64f66feeffcf387c3b8675c.jpg",
  img2: "https://i.pinimg.com/736x/f6/33/e9/f633e92f5320f2abe72deae67a10f8bd.jpg",
  img3:"https://i.pinimg.com/736x/ac/df/7e/acdf7eb60e5d72b8120be562ddf474b0.jpg",
  img4:"https://i.pinimg.com/1200x/2e/4a/18/2e4a18c2f1e2af4f20af0ee92e1d3a49.jpg",
  img5: "https://i.pinimg.com/1200x/dd/8c/e5/dd8ce54661f15b0231c7a5104ce7f46d.jpg",
  img6: "https://i.pinimg.com/736x/d3/f0/9d/d3f09d3558262fddeb8c10f3f7955ccb.jpg",
  img7:"https://i.pinimg.com/736x/ba/ab/a3/baaba3661bf0715209d69f4a4047b7e8.jpg",
  img8:"https://i.pinimg.com/736x/6d/7b/1f/6d7b1f3167bf700c9cac907d284dfa51.jpg",

},
  {
  img1: "https://i.pinimg.com/1200x/27/c6/cf/27c6cf9275c38c617c80c58bf4f0f07b.jpg",
  img2: "https://i.pinimg.com/736x/45/64/8d/45648d2e50022d5cd27eedbf044cad2b.jpg",
  img3:"https://i.pinimg.com/736x/ac/df/7e/acdf7eb60e5d72b8120be562ddf474b0.jpg",
  img4:"https://i.pinimg.com/1200x/2e/4a/18/2e4a18c2f1e2af4f20af0ee92e1d3a49.jpg",
  img5: "https://i.pinimg.com/736x/93/f4/85/93f48511615b3612962658043e50a0e0.jpg",
  img6: "https://i.pinimg.com/736x/ea/4d/8f/ea4d8f3e0aaaccc86faec92ff8cdea2f.jpg",
  img7:"https://i.pinimg.com/736x/ba/ab/a3/baaba3661bf0715209d69f4a4047b7e8.jpg",
  img8:"https://i.pinimg.com/1200x/19/b9/5f/19b95f3af2873ca3b2fe5abc96f64b72.jpg",

}
];

const bikeData = [
{
  img1: "https://i.pinimg.com/1200x/fc/a6/89/fca689a3175605a6fd75856432b9bfae.jpg",
  img2: "https://i.pinimg.com/1200x/ac/b6/02/acb602af256c7c019d0193ef3e0250b6.jpg",
  img3:"https://i.pinimg.com/1200x/ba/d4/c1/bad4c13067a3595a6113c0eb74822284.jpg",
  img4:"https://i.pinimg.com/736x/a5/5b/4c/a55b4c0c4741c9da6881961d0f5c8300.jpg",
  img5: "https://i.pinimg.com/1200x/87/53/fe/8753fe16027ab6ca96d96a24473522f7.jpg",
  img6: "https://i.pinimg.com/736x/6e/9f/83/6e9f83b4363b75452233e0a694b4794c.jpg",
  img7:"https://i.pinimg.com/1200x/54/64/b5/5464b56979644b8fb4b121d9c6999a66.jpg",
  img8:"https://i.pinimg.com/736x/07/c3/73/07c373498e59523cea53da8f91607ac6.jpg"

},
{
  img1: "https://i.pinimg.com/1200x/fc/a6/89/fca689a3175605a6fd75856432b9bfae.jpg",
  img2: "https://i.pinimg.com/1200x/ac/b6/02/acb602af256c7c019d0193ef3e0250b6.jpg",
  img3:"https://i.pinimg.com/1200x/ba/d4/c1/bad4c13067a3595a6113c0eb74822284.jpg",
  img4:"https://i.pinimg.com/736x/a5/5b/4c/a55b4c0c4741c9da6881961d0f5c8300.jpg",
  img5: "https://i.pinimg.com/1200x/87/53/fe/8753fe16027ab6ca96d96a24473522f7.jpg",
  img6: "https://i.pinimg.com/736x/6e/9f/83/6e9f83b4363b75452233e0a694b4794c.jpg",
  img7:"https://i.pinimg.com/1200x/54/64/b5/5464b56979644b8fb4b121d9c6999a66.jpg",
  img8:"https://i.pinimg.com/736x/07/c3/73/07c373498e59523cea53da8f91607ac6.jpg"

},
]
const seperateCards = [
{
  title:"Customers’ Most-Loved Fashion for you",
  img1: "https://m.media-amazon.com/images/I/61UE51azLWL._AC_SY145_.jpg",
  img2: "https://i.pinimg.com/1200x/e2/98/c2/e298c2da811b7ccedf72c53f3586270f.jpg",
  img3:"https://i.pinimg.com/1200x/50/00/86/5000866395373d61e1427eace7b00289.jpg",
  img4:"https://m.media-amazon.com/images/I/51cADvJbCmL._AC_SY145_.jpg",
},
{
  title:"Best Sellers in Clothing & Accessories",
  img1: "https://m.media-amazon.com/images/I/71I53evweVL._SY741_.jpg",
  img2: "https://m.media-amazon.com/images/I/713n+TxyfCL._AC_SY170_.jpg",
  img3:"https://m.media-amazon.com/images/I/51xOEh5DKYL._AC_SY170_.jpg",
  img4:"https://m.media-amazon.com/images/I/81biKixsaDL._AC_SY170_.jpg",
},
{
  title:"Best Sellers in Beauty",
  img1: "https://m.media-amazon.com/images/I/61r7v2ziqPL._AC_SY170_.jpg",
  img2: "https://m.media-amazon.com/images/I/51wqZYWGr+L._AC_SY170_.jpg",
  img3:"https://m.media-amazon.com/images/I/61Ti2uv6V3L._AC_SY170_.jpg",
  img4:"https://m.media-amazon.com/images/I/41aY2ihjX6L._AC_SY170_.jpg",
},
{
  title:"Starting ₹99 | Start your fitness journey",
  img1: "https://images-eu.ssl-images-amazon.com/images/G/31/img19/Sports/GW_Desktop/1199101_379x304_Compressed._SY304_CB448278349_.jpg",
  img2: "https://images-eu.ssl-images-amazon.com/images/G/31/img19/Sports/GW_Desktop/1199101_379x304_Compressed._SY304_CB448278349_.jpg",
  img3:"https://images-eu.ssl-images-amazon.com/images/G/31/img19/Sports/GW_Desktop/1199101_379x304_Compressed._SY304_CB448278349_.jpg",
  img4:"https://images-eu.ssl-images-amazon.com/images/G/31/img19/Sports/GW_Desktop/1199101_379x304_Compressed._SY304_CB448278349_.jpg",
}
]

const fourthCrausal = [
{
  img1: "https://m.media-amazon.com/images/I/61Bgk1Lmw6L._AC_SY200_.jpg",
  img2: "https://m.media-amazon.com/images/I/61Kg4yEkqEL._AC_SY200_.jpg",
  img3:"https://m.media-amazon.com/images/I/71zIE1LEkmL._AC_SY200_.jpg",
  img4:"https://m.media-amazon.com/images/I/51jWV1JqpiL._AC_SY200_.jpg",
  img5: "https://m.media-amazon.com/images/I/614n6nCQ-JL._AC_SY200_.jpg",
  img6: "https://m.media-amazon.com/images/I/61I6Jdj4GNL._AC_SY200_.jpg",
  img7:"https://m.media-amazon.com/images/I/61MVc6LR-wL._AC_SY200_.jpg",
  img8:"https://m.media-amazon.com/images/I/81IVmHRE0wL._AC_SY200_.jpg"
},
{
  img1: "https://m.media-amazon.com/images/I/61Qzwh+ZFKL._AC_SY200_.jpg",
  img2: "https://m.media-amazon.com/images/I/81khXqyEKnL._AC_SY200_.jpg",
  img3:"https://m.media-amazon.com/images/I/61Bgk1Lmw6L._AC_SY200_.jpg",
  img4:"https://m.media-amazon.com/images/I/71+tJnGBTjL._AC_SY200_.jpg",
  img5: "https://m.media-amazon.com/images/I/61Wn3p7mX3L._AC_SY200_.jpg",
  img6: "https://m.media-amazon.com/images/I/61DEazpJ0eL._AC_SY200_.jpg",
  img7:"https://m.media-amazon.com/images/I/71UNh9NzjNL._AC_SY200_.jpg",
  img8:"https://m.media-amazon.com/images/I/61tYcdcbJIL._AC_SY200_.jpg"
}
]
const fifthCrausal = [
  {
  img1: "https://m.media-amazon.com/images/I/51WLLO95EmL._AC_SY200_.jpg",
  img2: "https://m.media-amazon.com/images/I/619sSmzbUjL._AC_SY200_.jpg",
  img3:"https://m.media-amazon.com/images/I/71wGvVv88uL._AC_SY200_.jpg",
  img4:"https://m.media-amazon.com/images/I/513QTB9p4hL._AC_SY200_.jpg",
  img5: "https://m.media-amazon.com/images/I/61-l-DKrlsL._AC_SY200_.jpg",
  img6: "https://m.media-amazon.com/images/I/51WmCssta3L._AC_SY200_.jpg",
  img7:"https://m.media-amazon.com/images/I/512wpyNp2qL._AC_SY200_.jpg",
  img8:"https://m.media-amazon.com/images/I/41ggFXk-slL._AC_SY200_.jpg"

},
{
  img1: "https://m.media-amazon.com/images/I/61tNRcQI9SL._AC_SY200_.jpg",
  img2: "https://m.media-amazon.com/images/I/51BERzTThLL._AC_SY200_.jpg",
  img3:"https://m.media-amazon.com/images/I/615-8A+JnRL._AC_SY200_.jpg",
  img4:"https://m.media-amazon.com/images/I/51sTasV5+cL._AC_SY200_.jpg",
  img5: "https://m.media-amazon.com/images/I/51zanHhW9pL._AC_SY200_.jpg",
  img6: "https://m.media-amazon.com/images/I/51WkwwaN8TL._AC_SY200_.jpg",
  img7:"https://m.media-amazon.com/images/I/71aHbP5M2HL._AC_SY200_.jpg",
  img8:"https://m.media-amazon.com/images/I/61VtxIS36CL._AC_SY200_.jpg"

},
]
  return (
    <>
      <CreateNav />
      <Clone bannerData={bannerData} cardData={cardData} imgData={imgData} bikeData={bikeData} seperateCards={seperateCards} fourthCrausal={fourthCrausal} fifthCrausal ={fifthCrausal } /> 
    </>
  )
}

export default App
