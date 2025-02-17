

import React from 'react'
import '../styles/shop.css'
import Navbar from './navbar'
import Footer from './Footer'
import botiga from '../assets/botiga.webp'
import earphones from '../assets/earphones.webp'
import earphones2 from '../assets/earphones2.webp'
import lotion from '../assets/lotion.webp'
import electronics from '../assets/electronics.webp'
import gadget from '../assets/gadget.webp'
import sports from '../assets/sports.webp'
import watch from '../assets/watch.webp'
import bottle from '../assets/bottle.webp'
import alexa from '../assets/alexa.webp'
import { useNavigate } from 'react-router-dom'
import { MdStar } from "react-icons/md";
import { MdStarHalf } from "react-icons/md";
import { MdStarOutline } from "react-icons/md";
import SingleArrival from './SingleArrival'
import { ClassNames } from '@emotion/react'
import store1 from '../assets/store1.webp'
import store2 from '../assets/store2.webp'
import store3 from '../assets/store3.webp'
import store4 from '../assets/store4.webp'
import store5 from '../assets/store5.webp'
import store6 from '../assets/store6.webp'
import icon1 from '../assets/icon1.svg'
import icon2 from '../assets/icon2.svg'
import icon3 from '../assets/icon3.svg'
import '@fontsource/overlock'; // Default weight 400

import { IoIosArrowDroprightCircle } from "react-icons/io";
import { Description } from '@mui/icons-material'



export const services =[
    {   id:1,
        name:'Body Lotion',
        image:lotion,
        productTitle:"Product Description:",
       description:"Discover the Nivea Daily Moisturizing Lotion, a 500ml skincare essential designed to keep your skin hydrated, soft, and smooth throughout the day. This lightweight, non-greasy formula absorbs quickly, making it perfect for daily use. Enriched with shea butter, Vitamin E, and Aloe Vera, this lotion nourishes and restores your skin’s natural moisture barrier. Dermatologically tested, it is suitable for all skin types, including sensitive skin. Its mild, refreshing scent leaves you feeling fresh all day long. Ideal for use after showering or whenever your skin needs a hydration boost.",
       productAdd:"Additional Information:",
       add:"Made by the trusted brand Nivea, this lotion comes in a compact 500ml bottle that is easy to store and use. Whether it's winter dryness or everyday skincare, this lotion is your go-to solution. Made in Germany, it promises quality you can trust.",
    },
    {     id:2,
        name:'Sports',
        image:gadget,
        productTitle:"Sports Jersey",
        description:"Step onto the field with confidence in this premium Sports Jersey, crafted for ultimate comfort and performance. Made from lightweight, breathable fabric, it keeps you cool and dry during intense workouts or games. The durable material is designed to withstand rigorous activities, while its stylish design ensures you look great both on and off the field. Available in multiple sizes and colors, this jersey offers the perfect fit for athletes of all levels. Whether you're training, competing, or cheering from the sidelines, this jersey is a must-have addition to your sportswear collection.",
        productAdd:"Additional Information:",
       add:"Made from a high-quality polyester blend with moisture-wicking properties, this jersey is both comfortable and practical. It is available in sizes ranging from Small to XXL, ensuring a great fit for everyone. The jersey is easy to maintain and can be machine washed without losing its vibrant color or texture. Whether you're into soccer, basketball, running, or gym workouts, this jersey is an ideal choice for any athletic activity.",
    },
    {    id:3,
        name:'uncle fils',
        image:electronics,
        productTitle:"Earphones",
        description:"Experience immersive sound quality with these sleek and lightweight earphones. Designed for comfort and durability, they feature soft silicone ear tips for a secure fit during workouts, commutes, or casual listening. With high-definition sound and deep bass, these earphones bring your music to life. The in-line remote and microphone allow you to manage calls and control your playlist effortlessly. Compatible with most devices, these earphones are your perfect audio companion for every occasion.",
        productAdd:"Additional Information:",
         add:"These earphones are designed to be universally compatible with smartphones, tablets, laptops, and MP3 players, offering versatility for various devices. The tangle-free 1.2m cable ensures hassle-free use, and the noise-isolating feature enhances audio clarity, even in noisy environments. For wireless models, you can enjoy up to 12 hours of playback on a single charge. Built to last, these earphones also come with a 1-year warranty for added peace of mind.",
      
    },
    {    id:4,
        name:'Electronics',
        image:sports,
        productTitle:"Watch",
        description:"Elevate your style with this elegant and functional watch, designed to complement any outfit. Featuring a durable stainless steel body and a scratch-resistant glass face, it ensures long-lasting wear. The precise quartz movement guarantees accurate timekeeping, while the water-resistant feature adds practicality for everyday use. Whether you're heading to the office, a casual outing, or an evening event, this watch blends style and functionality seamlessly, making it an essential accessory for any wardrobe.",
        productAdd:"Additional Information:",
        add:"This watch features a sturdy stainless steel case paired with your choice of a leather or silicone strap for versatile styling. With a water resistance of up to 50 meters, it is perfect for both daily wear and outdoor activities. The 42mm dial size offers a bold yet refined look, while the quartz precision movement ensures reliable performance. Additionally, the watch is backed by a 2-year warranty, making it a timeless and reliable investment.",

        
    },
    {     id:5,
        name:'Watch',
        image:watch,
       productTitle:"Bottle",
       description:"Stay hydrated on the go with this sleek and durable water bottle. Made from high-quality BPA-free material, it is safe for both hot and cold beverages. The leak-proof cap ensures zero spills, while the lightweight design makes it easy to carry in your bag or hand. With a 750ml capacity, this bottle is perfect for workouts, office use, or outdoor adventures. Its modern design and vibrant color options add a touch of style to your daily hydration routine.",
       productAdd:"Additional Information:",
       add:"This water bottle is crafted from BPA-free Tritan plastic, ensuring safety and durability. If you prefer an insulated option, it can keep beverages hot for up to 12 hours or cold for 24 hours, making it perfect for every season. It is available in multiple vibrant colors, including blue, black, green, and red, to suit your style. Cleaning is a breeze, as the bottle is dishwasher safe, adding to its practicality. Whether you’re at the gym, the office, or on an outdoor adventure, this bottle is your ideal hydration companion.",
    },
    {     id:6,
        name:'Clothes',
        image:electronics,
        productTitle:"Bag",
        description:"Carry all your essentials with ease in this versatile and stylish bag. Made from durable, water-resistant material, it is designed to withstand daily use while keeping your belongings safe. Featuring multiple compartments and zippered pockets, it offers ample space for your laptop, books, gym gear, or travel essentials. The padded straps ensure maximum comfort, even during extended use. Whether you’re heading to work, the gym, or a weekend getaway, this bag combines functionality and style to meet all your needs.",
        productAdd:"Additional Information:",
        add:"This bag is designed for versatility, with dimensions of 45cm x 30cm x 20cm, making it spacious enough to carry a 15.6-inch laptop alongside other essentials. It includes three main compartments and two side bottle holders for added convenience. Made from durable, water-resistant nylon or polyester, it is ideal for both daily use and travel. The bag’s lightweight construction, weighing just 0.8kg, ensures ease of carrying. With its combination of practicality and modern design, this bag is perfect for urban professionals and travelers alike.",
       
    },
]


export const arrivals =[
    {   id:1,
        name:'All In One Bottle',
        images:bottle,
        price:'$22.00 – $55.00',
        colors: [
      <div key="color1" className="arrivals-color" style={{ backgroundColor: '#3B4456' }} />, 
      <div key="color2" className="arrivals-color" style={{ backgroundColor: 'A0785A' }} />, 
      <div key="color2" className="arrivals-color" style={{ backgroundColor: 'silver' }} />,
      <div key="color2" className="arrivals-color" style={{ backgroundColor: 'white' }} />,

    ],
        rates: [<MdStar key={1} style={{ color: 'orange', fontSize: '22px' }}/>,<MdStar key={2} style={{ color: 'orange', fontSize: '22px' }} />, <MdStar  key={3} style={{ color: 'orange', fontSize: '22px' }} />, <MdStar  key={4}  style={{ color: 'orange', fontSize: '22px' }}/>, <MdStarHalf key={5} style={{ color: 'orange', fontSize: '22px' }}/>],
    
    },
    {    id:2,
        name:'Amazon Alexa',
        images:alexa,
        price:'$49.00 – $69.00',
        colors: [
            <div key="color1" className="arrivals-color" style={{ backgroundColor: 'silver' }} />, 
            <div key="color2" className="arrivals-color" style={{ backgroundColor: 'black' }} />, 
          ],
        rates: [<MdStar key={1} style={{ color: 'orange', fontSize: '22px' }} />,<MdStar key={2} style={{ color: 'orange', fontSize: '22px' }} />, <MdStar  key={3} style={{ color: 'orange', fontSize: '22px' }} />, <MdStar  key={4} style={{ color: 'orange', fontSize: '22px' }} />, <MdStarHalf key={5} style={{ color: 'orange', fontSize: '22px' }} />],
      
    },
    {   id:3,
        name:'Headset Gamer Legion',
        images:earphones,
        price:'22.00 – $55.00',
        colors: [
            <div key="color1" className="arrivals-color" style={{ backgroundColor: '#3B4456' }} />,
            <div key="color1" className="arrivals-color" style={{ backgroundColor: 'silver' }} />, 
            <div key="color2" className="arrivals-color" style={{ backgroundColor: 'black' }} />,
            <div key="color2" className="arrivals-color" style={{ backgroundColor: 'white' }} />,  
          ],
        rates: [<MdStar key={1} style={{ color: 'orange', fontSize: '24px' }}/>,<MdStar key={2} style={{ color: 'orange', fontSize: '22px' }} />, <MdStar  key={3} style={{ color: 'orange', fontSize: '22px' }} />, <MdStar  key={4}  style={{ color: 'orange', fontSize: '22px' }}/>, < MdStarOutline key={5} style={{ color: 'grey', fontSize: '22px' }}/>],
        
    },
    ]
    export const vendorsList=[

        {
         id:1,
         image:store1,
         words: "Santa Monica's Store",
         address:'New York,Ny',
         arrow: [<IoIosArrowDroprightCircle key={1} style={{ color: 'grey', fontSize: '64px' }}/>]
    
        },
    
    
     
    
           {
            id:2,
            image:store2,
            words: "Josh Doe's Store",
            address:'New York,Ny',
            arrow: [<IoIosArrowDroprightCircle key={1} style={{ color: 'grey', fontSize:'64px' }}/>]
       
           },
    
           {
            id:3,
            image:store3,
            words: "Digital Good's Store",
            address:'New York,Ny',
            arrow: [<IoIosArrowDroprightCircle key={1} style={{ color: 'grey', fontSize: '64px' }}/>]
       
           },

        
       
           
           {
            id:4,
            image:store1,
            words: "Jessica's Store",
            address:'New York,Ny',
            arrow: [<IoIosArrowDroprightCircle key={1} style={{ color: 'grey', fontSize:'64px' }}/>]
       
           },
    

           {
            id:4,
            image:store5,
            words: "Jessica's Store",
            address:'New York,Ny',
            arrow: [<IoIosArrowDroprightCircle key={1} style={{ color: 'grey', fontSize:'64px' }}/>]
       
           },
    
           
           {
            id:6,
            image:store6,
            words: "John Doe's Store",
            address:'New York,Ny',
            arrow: [<IoIosArrowDroprightCircle key={1} style={{ color: 'grey', fontSize: '64px' }}/>]
       
           },

    ]


    export const whyUs=[

        {
         id:1,
         image:icon1,
         words: "Easy Returns",
         address:'Our return policy is simple and that is why customers love our shop.',
        
    
        },
    
    
     
    
           {
            id:2,
            image:icon2,
            words: "Customer Service",
            address:'Our return policy is simple and that is why customers love our shop.',
           
       
           },
    
           {
            id:3,
            image:icon3,
            words: "High Quality",
            address:'Our return policy is simple and that is why customers love our shop.',
          
       
           },

        
    

    ]



    export const customers=[

        {
         id:1,
        names:"Gisubizo Gisele",
        order:3,
        contact:"09873633553",
        address: "KG 122 Avenue",
        
    
        },

        {
            id:2,
           names:"Gikundiro Gentille",
           order:10,
           contact:"09873456789",
           address: "KG 32 Avenue",
           
       
           },
    
           
           {
            id:3,
           names:"Innocent mugabo",
           order:5,
           contact:"0987363670",
           address: "KG 122  Avenue",
           
       
           },
    
           

           {
            id:4,
           names:"Christelle muneza",
           order:30,
           contact:"09893633553",
           address: "Gasabo 123",
           
       
           },
    
           

           {
            id:5,
           names:"Ngambwa Joshua",
           order:3,
           contact:"09873633553",
           address: "Kimironko Near the market",
           
       
           },
    
           {
            id:6,
           names:"Gisubizo natasha",
           order:40,
           contact:"09873633553",
           address: "Kimironko Near the market",
           
       
           },
    
           
           {
            id:7,
           names:"Munezero carine",
           order:3,
           contact:"09873633553",
           address: "Kacyiru",
           
       
           },
       
    
    
     
    
           {
            id:8,
            names:"Impundu Lyra",
            order:3,
            contact:"09873633553",
            address: "Kimironko Near the market",
            
       
           },
    
           {
            id:9,
            names:"Impano Laura",
            order:3,
            contact:"09873633553",
            address: "KG 122 Avenue",
            
       
           },

        
    

    ]



    function Shop() {
    
        const Navigation= useNavigate();
        const handleNavigation=(id)=>{
            Navigation(`/Shopcards/${id}`)
        
        }
        const Navigate= useNavigate();
        const handleNavigate=(id)=>{
            Navigate(`/singlearrival/${id}`)
        
        }


        const Navigator= useNavigate();
        const handleNavigator=(id)=>{
            Navigatior(`/Shopcards/${id}`)
        
        }

        const Navigated= useNavigate();
const handleNavigated=(id)=>{
    Navigate(`/singlevendors/${id}`)

}


// }
         return(
<div className='shop-shop'>

       <div className='shop-shop-list' >
           <ul>
            <li>Electronics</li>
            <li>Computer Gadgets</li>
            <li>Fashion</li>
            <li>Body Lotion</li>
            <li>Sports</li>
            <li>Women Clothes</li>
            <li>Shoes</li>
            <li>Watch</li>
           </ul>
        </div>

        

<div className='shop-part'>
    
            <h2>
                Explore our latest and <br />
                greatest electronics
            </h2>
    
            <button type='button'>SHOP NOW</button>
    


      <div className='categories' >

               <h1>
             Popular Categories
             </h1>
           
    
 {
             services.map((value) => (
                <>
              <div key={value.id} className='popular-images'>
                     
                                  <div className='image-shop'><img src={value.image} onClick={()=>handleNavigation(value.id)} className='image-image-shop'/> </div>
                                 
                     <div className='item.name'>{value.name}</div>
                   
                  
              </div>
                    
                    
           
                </>
             ))
             }
             
      </div>
</div>

   <div className='arrivals'>
   <h1>New Arrival Products</h1>
   
   {
             arrivals.map((item) => (
                <>
              <div   className='arrivals-images'>
                     
                                  <div className='image-arrivals'><img src={item.images} className='image-image-arrivals'
                                 onClick={()=> handleNavigate(item.id)}
                                  /> </div>
                                 
                     <div className='item.name'>{item.name}</div>
                     <div className='item-price'>{item.price}</div>
                     <div className='item-rates'>{item.rates}</div>
                     <div >{item.colors}</div>
                   
                  
              </div>

           
                    
                    
           
                </>
             ))
             }
<button className='arrivals-button'>SHOP NOW</button>
  </div>

    <div className='vendors-shop'>
    <h1>Our Vendor List</h1>


    {
             vendorsList.map((item) => (
                <>
              <div   className='vendors-images'>
                     
                                  <div className='image-vendors'><img src={item.image} className='image-image-vendors'
                                 onClick={()=> handleNavigated(item.id)}
                                  /> </div>
                                 
                
                     <div className='vendors-others'>
                         <div className='item-words'>{item.words}</div>
                         <div className='item-arrow'>{item.arrow}</div>
                     </div>
                     <div className='item-address'>{item.address}</div>
                  
              </div>

           
                    
                    
           
                </>
             ))
             }

    </div>
    <button className="vendors-button">SEE ALL VENDORS</button>

    <div className='why-shop'>
   <h1>Why People Choose Us</h1>
   {
             whyUs.map((item) => (
                <>
              <div   className='why-images'>
                     
                                  <div className='image-why'><img src={item.image} className='image-image-why'
                                //  onClick={()=> handleNavigator(item.id)}
                                  /> </div>
                                 
                
                     <div className='why-others'>
                         <div className='item-words-why'>{item.words}</div>
                         <div className='item-address-why'>{item.address}</div>
                       
                        
                     </div>
                   
                  
              </div>

           
                    
                    
           
                </>
             ))
             }
    </div>
</div>

         )
    }

    export default Shop;