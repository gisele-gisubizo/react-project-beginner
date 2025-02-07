import React from 'react'
import('../styles/Vendors.css')
import Navbar from './navbar'
import Footer from './Footer'
import { IoMenuSharp } from "react-icons/io5";
import john from '../assets/john.webp'
import { IoGridSharp } from "react-icons/io5";
import jessica from '../assets/jessica.webp'
import santa from '../assets/santa.webp'
import store1 from '../assets/store1.webp'
import store2 from '../assets/store2.webp'
import store3 from '../assets/store3.webp'

import { MdStar } from "react-icons/md";
import { MdStarHalf } from "react-icons/md";
import { MdStarOutline } from "react-icons/md";

const vendorShop=[

  {
    store:"John Doe's store",
    picture:john,
    address:'Central Park, New York, New York,',
    country:'United States (US)',
     rates: [<MdStar key={1} style={{ color: 'orange', fontSize: '22px' }}/>,<MdStar key={2} style={{ color: 'orange', fontSize: '22px' }} />, <MdStar  key={3} style={{ color: 'orange', fontSize: '22px' }} />, <MdStar  key={4}  style={{ color: 'orange', fontSize: '22px' }}/>, <MdStarHalf key={5} style={{ color: 'orange', fontSize: '22px' }}/>],
        

},
{
    store:"Jessica's Store",
    picture:jessica,
     address:'Central Park, New York, New York,',
    country:'United States (US)',
     rates: [<MdStar key={1} style={{ color: 'orange', fontSize: '22px' }}/>,<MdStar key={2} style={{ color: 'orange', fontSize: '22px' }} />, <MdStar  key={3} style={{ color: 'orange', fontSize: '22px' }} />, <MdStar  key={4}  style={{ color: 'orange', fontSize: '22px' }}/>, <MdStarHalf key={5} style={{ color: 'orange', fontSize: '22px' }}/>],
        
  
},
{
    store:"Digital Good's Store",
    picture:store2,
     address:'Central Park, New York, New York,',
    country:'United States (US)',
     rates: [<MdStar key={1} style={{ color: 'orange', fontSize: '22px' }}/>,<MdStar key={2} style={{ color: 'orange', fontSize: '22px' }} />, <MdStar  key={3} style={{ color: 'orange', fontSize: '22px' }} />, <MdStar  key={4}  style={{ color: 'orange', fontSize: '22px' }}/>, <MdStarHalf key={5} style={{ color: 'orange', fontSize: '22px' }}/>],
        
    
},

{
  store:"Glass store",
  picture:store1,
  address:'Central Park, New York, New York,',
  country:'United States (US)',
   rates: [<MdStar key={1} style={{ color: 'orange', fontSize: '22px' }}/>,<MdStar key={2} style={{ color: 'orange', fontSize: '22px' }} />, <MdStar  key={3} style={{ color: 'orange', fontSize: '22px' }} />, <MdStar  key={4}  style={{ color: 'orange', fontSize: '22px' }}/>, <MdStarHalf key={5} style={{ color: 'orange', fontSize: '22px' }}/>],
      

},
{
  store:"Joshua Doe's Store",
  picture:store3,
   address:'Central Park, New York, New York,',
  country:'United States (US)',
   rates: [<MdStar key={1} style={{ color: 'orange', fontSize: '22px' }}/>,<MdStar key={2} style={{ color: 'orange', fontSize: '22px' }} />, <MdStar  key={3} style={{ color: 'orange', fontSize: '22px' }} />, <MdStar  key={4}  style={{ color: 'orange', fontSize: '22px' }}/>, <MdStarHalf key={5} style={{ color: 'orange', fontSize: '22px' }}/>],
      

},

]


function Vendors(){


return(
<div className='vendors-list'>
<div className='store'><h1>Store List</h1></div>

<div className='vendors-board' >
<p>Total stores showing:6</p>

 
        <div className='vendors-sort'>
          <p>Sort by:</p>
          <select id="myDropdown">
                  <option value="">Most Recent</option>
                  <option value="option1">Most Popular </option>
                  <option value="option2">Most Random</option>
          
                </select>
                <div style={{ display: 'flex', gap: '10px', fontSize: '17px', color: 'black',marginLeft:'15px', }} className='icons-vendors'>
          <IoGridSharp />
          <IoMenuSharp className='menu' />
        </div>
      </div> 
</div>


{
             vendorShop.map((item) => (
                <>
              <div className='vendors-images'>
                     
                 <div className='overlay-vendor'>
                   <div className='vendors-shop'><img src={item.picture} className='image-image-vendors'/> </div>
                 </div>
                                 
                     <div className='vendors-info'>
                       <div className='vendors.name'>{item.store}</div>
                       <div className='vendors.address'>{item.address}</div>
                       <div className='vendors.country'>{item.country}</div>
                       <div className='vendors.country'>{item.rates}</div>
                     </div>
                   
                     
                  
              </div>
                    
                    
           
                </>
             ))
             }

</div>

)



}

export default Vendors;