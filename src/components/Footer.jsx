import React from 'react';
import('../styles/Footer.css')
import cards from '../assets/cards.webp'
import { RiTwitterXFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";


function Footer()
{
    return(
<div>
    <div className="footer">
    <h1>Stay Up to date</h1>
    <p>Subscribe to our newsletter and get 20% discount in <br /> your first order</p>
    </div>
    <div className="email">
      <input type="email" placeholder="Enter your email" className="email-input" />
      <button type="submit">Submit</button>
    </div>

<div className="list">

    <div className="shop">
     <h2>Shop</h2>
     <p>Body Lotion</p>
     <p>Computer Gadget</p>
     <p>Electronic</p>
     <p>Fashion</p>
     <p>General</p>
     <p>Shoes</p>
     <p>Sports</p>
     <p>Watch</p>
     <p>Women Clothes</p>
    </div>
    
    
    <div className="company">
     <h2>Company</h2>
     <p>About</p>
     <p>Career</p>
     <p>Help</p>
     <p>Contact</p>
    </div>
    
    
    <div className="about">
     <h2>About</h2>
     <p>Who we are</p>
     <p>Reviews</p>
     <p>Contact</p>
    </div>


</div>

<div className="cards">
     <h2>Accept for</h2>
    <div ><img src={cards} alt="" className="my-image" /></div>
    </div>

<div className="words">
    <h1>Happy To help</h1>
   <p>1279 Thorn Street, NY</p>
   <p>Phone: 307-549-2480</p>
   <p>Mail: demo@gmail.com</p>

   <div className="platforms">
<FaFacebook  className="icon"/>
<RiTwitterXFill  className="icon"/>
<FaLinkedin  className="icon"/>
<IoLogoInstagram className="icon"/>
   </div>
</div>



</div>


    )
    

    }
    export default Footer