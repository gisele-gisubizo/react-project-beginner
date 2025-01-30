import React from 'react'
import('../styles/Vendors.css')
import Navbar from './navbar'
import Footer from './Footer'
import { IoMenuSharp } from "react-icons/io5";
import john from '../assets/john.webp'
import { IoGridSharp } from "react-icons/io5";
import jessica from '../assets/jessica.webp'
function Vendors(){

    const vendors =[
        {
            store:"John Doe's store",
            picture:john,
            address:'Central Park, New York, New York,',
            country:'United States (US)'
        
        },
        {
            store:"Jessica's Store",
            picture:jessica,
             address:'Central Park, New York, New York,',
            country:'United States (US)'
          
        },
        {
            store:"Santa Monica's Store",
            picture:santa,
             address:'Central Park, New York, New York,',
            country:'United States (US)'
            
        },
        
        
    ]

    return(
  <div className='vendors-list'>

<div className='store'><h1>Store List</h1></div>

<div className='vendors-board'>
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
             
    
      {
             vendors.map((item) => (
                <>
              <div className='vendors-images'>
                     
                 <div className='vendors-shop'><img src={item.picture} className='image-image-vendors'/> </div>
                                 
                     <div className='vendors.name'>{item.store}</div>
                     <div className='vendors.name'>{item.address}</div>
                     <div className='vendors.name'>{item.country}</div>
                   
                     
                  
              </div>
                    
                    
           
                </>
             ))
             }
    </div>
 </div>






  </div>

    )
}
export default Vendors;