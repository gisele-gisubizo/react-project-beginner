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
import { MdStar } from "react-icons/md";
import { MdStarHalf } from "react-icons/md";
import { MdStarOutline } from "react-icons/md";


function Shop() {
const services =[
    {
        name:'Body Lotion',
        picture:lotion,
    
    },
    {
        name:'Sports',
        picture:gadget,
      
    },
    {
        name:'gadget',
        picture:electronics,
        
    },
    {
        name:'Electronics',
        picture:sports,
        
    },
    {
        name:'Watch',
        picture:watch,
       
    },
    {
        name:'Clothes',
        picture:electronics,
       
    },
]


// /

const arrivals =[
    {
        name:'All In One Bottle',
        picture:bottle,
        price:'$22.00 – $55.00',
        colors: [
      <div key="color1" className="arrivals-color" style={{ backgroundColor: '#3B4456' }} />, 
      <div key="color2" className="arrivals-color" style={{ backgroundColor: 'A0785A' }} />, 
      <div key="color2" className="arrivals-color" style={{ backgroundColor: 'silver' }} />,
      <div key="color2" className="arrivals-color" style={{ backgroundColor: 'white' }} />,

    ],
        rates: [<MdStar key={1} style={{ color: 'orange', fontSize: '22px' }}/>,<MdStar key={2} style={{ color: 'orange', fontSize: '22px' }} />, <MdStar  key={3} style={{ color: 'orange', fontSize: '22px' }} />, <MdStar  key={4}  style={{ color: 'orange', fontSize: '22px' }}/>, <MdStarHalf key={5} style={{ color: 'orange', fontSize: '22px' }}/>],
    
    },
    {
        name:'Amazon Alexa',
        picture:alexa,
        price:'$49.00 – $69.00',
        colors: [
            <div key="color1" className="arrivals-color" style={{ backgroundColor: 'silver' }} />, 
            <div key="color2" className="arrivals-color" style={{ backgroundColor: 'black' }} />, 
          ],
        rates: [<MdStar key={1} style={{ color: 'orange', fontSize: '22px' }} />,<MdStar key={2} style={{ color: 'orange', fontSize: '22px' }} />, <MdStar  key={3} style={{ color: 'orange', fontSize: '22px' }} />, <MdStar  key={4} style={{ color: 'orange', fontSize: '22px' }} />, <MdStarHalf key={5} style={{ color: 'orange', fontSize: '22px' }} />],
      
    },
    {
        name:'Headset Gamer Legion',
        picture:earphones,
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
     </div>

<div className='categories'>
    <h1>
Popular Categories
    </h1>
    


    
 {
             services.map((item) => (
                <>
              <div className='popular-images'>
                     
                                  <div className='image-shop'><img src={item.picture} className='image-image-shop'/> </div>
                                 
                     <div className='item.name'>{item.name}</div>
                   
                     
                  
              </div>
                    
                    
           
                </>
             ))
             }

    </div>

    <div className='arrivals'>
        <h1>New Arrival Products</h1>

        {
             arrivals.map((item) => (
                <>
              <div className='arrivals-images'>
                     
                                  <div className='image-arrivals'><img src={item.picture} className='image-image-arrivals'/> </div>
                                 
                     <div className='item.name'>{item.name}</div>
                     <div className='item-price'>{item.price}</div>
                     <div className='item-rates'>{item.rates}</div>
                     <div >{item.colors}</div>
                  
              </div>

           
                    
                    
           
                </>
             ))
             }


    </div>

    <button className='arrivals-button'>SHOP NOW</button>
        
    </div>
   )
}
export default Shop;