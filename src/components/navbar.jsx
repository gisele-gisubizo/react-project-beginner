import React from "react";
import('../styles/page.css')
import {Link} from 'react-router-dom'
import '@fontsource/poppins'
import '@fontsource/montserrat'
import '@fontsource/open-sans'

function Navbar(){
    return(

 <div className="container">

      <div className="tittle">
         <h1> Botiga</h1>
      </div>

      <div className="input">
          <select id="myDropdown-one">
            <option value="">All categories</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
           
            <div className="real-input"><input type="text" name="search" placeholder="Search products"/></div>
      </div>
       
       <div className="trends">
       <select id="myDropdown">
            <option value="">Trending categories</option>
            <option value="option1">Body Lotion </option>
            <option value="option2">Electronics</option>
            <option value="option3">Women Clothes</option>
            <option value="option3">Shoes</option>
            <option value="option3">Watch</option>
          </select>

       
        <Link to="/Shop" className="custom-link" >
        <li>HOME</li>
        </Link> 
          <Link to='/Home' className="custom-link"><li>SHOP</li></Link>
        <Link to='/Vendors' className="custom-link"><li>VENDORS</li></Link>  
        <Link className="custom-link"> <li>BLOG</li></Link> 
         <Link className="custom-link"><li>CONTACT</li></Link> 
         <Link to='/LoginForm'className="custom-button"><li>LOGIN</li></Link> 

       </div>

       
       
</div>
    )
}

export default Navbar;