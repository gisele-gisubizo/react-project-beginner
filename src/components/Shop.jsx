

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
       description:"Discover the Nivea Daily Moisturizing Lotion, a 500ml skincare essential designed to keep your skin hydrated, soft, and smooth throughout the day. This lightweight, non-greasy formula absorbs quickly, making it perfect for daily use. Enriched with shea butter, Vitamin E, and Aloe Vera, this lotion nourishes and restores your skin’s natural moisture barrier. Dermatologically tested, it is suitable for all skin types, including sensitive skin. Its mild, refreshing scent leaves you feeling fresh all day long. Ideal for use after showering or whenever your skin needs a hydration boost."
    
    },
    {     id:2,
        name:'Sports',
        image:gadget,
      
    },
    {    id:3,
        name:'gadget',
        image:electronics,
        
    },
    {    id:4,
        name:'Electronics',
        image:sports,
        
    },
    {     id:5,
        name:'Watch',
        image:watch,
       
    },
    {     id:6,
        name:'Clothes',
        image:electronics,
       
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


    function Shop() {
    
        const Navigation= useNavigate();
        const handleNavigation=(id)=>{
            Navigation(`/Shopcards/${id}`)
        
        }
        const Navigate= useNavigate();
        const handleNavigate=(id)=>{
            Navigate(`/singlearrival/${id}`)
        
        }

        const Navigated= useNavigate();
const handleNavigated=(id)=>{
    Navigate(`/singlevendors/${id}`)

}

// const Navigator= useNavigate();
// const handleNavigator=(id)=>{
//     Navigator(`/singlwhy/${id}`)

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