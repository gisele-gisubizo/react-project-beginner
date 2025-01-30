import React from "react";
import('../styles/Home.css')
import botiga from '../assets/botiga.webp'
import bottle from '../assets/bottle.webp'
import alexa from '../assets/alexa.webp'
import mouse from '../assets/mouse.webp'
import { MdStar } from "react-icons/md";
import { MdStarHalf } from "react-icons/md";
import { MdStarOutline } from "react-icons/md";


function Home(){
    return(
      <div className="container-home">
        <div className="photo">
        <img src={botiga} alt="botiga photo" />
        <h2>Shop</h2>
       </div>


       <div className="real-content">
        <h3>Categories</h3>
        <ul>
            <li>Body lotion(1)</li>
            <li>Computer Gadgets(3)</li>
            <li>Electronics(5)</li>
            <li>Fashion(3)</li>
            <li>General(1)</li>
            <li>Shoes(2)</li>
            <li>Sports(3)</li>
            <li>Watch(1)</li>
            <li>Women clothes(3)</li>
        </ul>
        <hr/>
       </div>

<div className="other">
    <p>Showing all 3 results</p>
    <select id="myDropdown">
            <option value="">Default sorting</option>
            <option value="option1">Body Lotion </option>
            <option value="option2">Electronics</option>
            <option value="option3">Women Clothes</option>
            <option value="option3">Shoes</option>
            <option value="option3">Watch</option>
          </select>
</div>
   <hr/>

   <div className="images">
  
   
      
      <div className="image-container">
        <img src={bottle} alt="A pair of earphones" className="earphones" />
      </div>
      <h3 className="one-one">All In One Bottle</h3>
      <p className="one-one-one">$22.00-$55.00</p>
      <div className="stars">
        <MdStar  size="15px" color="gold" />
        <MdStar  size="15px" color="gold"/>
        <MdStar  size="15px" color="gold"/>
        <MdStarHalf size="15px" color="gold"/>
        <MdStarOutline size="15px" color="gold"/>
      </div>

      <div className="color-palette">
      <div className="color-circle" style={{ backgroundColor: "brown" }}></div>
      <div className="color-circle" style={{ backgroundColor: "black" }}></div>
      <div className="color-circle" style={{ backgroundColor: "grey" }}></div>
     
      
    </div>


   
      <div className="image-container-two">
        <img src={alexa} alt="A pair of earphones" className="earphones-two" />
      </div>
      <h3 className="one-two">Amazon Alexa</h3>
      <p className="one-one-two">$22.00-$55.00</p>
<div className="stars-two">
        <MdStar  size="15px" color="gold"/>
        <MdStar  size="15px" color="gold"/>
        <MdStar  size="15px" color="gold" />
        <MdStar  size="15px" color="gold"/>
        <MdStar  size="15px" color="gold"/>
</div>

<div className="color-palette-two">
      <div className="color-circle" style={{ backgroundColor: "white" }}></div>
      <div className="color-circle" style={{ backgroundColor: "black" }}></div>
      <div className="color-circle" style={{ backgroundColor: "grey" }}></div>
     
      
    </div>


   
      <div className="image-container-three">
        <img src={mouse} alt="A pair of earphones" className="earphones-three" />
      </div>
      <h3 className="one-three">Headset Gamer Legion</h3>
      <p className="one-one-three">$22.00-$55.00</p>
   
      <div className="stars-three">
        <MdStar  size="15px" color="gold"/>
        <MdStar  size="15px" color="gold"/>
        <MdStar  size="15px" color="gold" />
        <MdStar  size="15px" color="gold"/>
        <MdStarOutline size="15px" color="gold"/>
</div>

<div className="color-palette-three">
      <div className="color-circle" style={{ backgroundColor: "white" }}></div>
      <div className="color-circle" style={{ backgroundColor: "black" }}></div>
      <div className="color-circle" style={{ backgroundColor: "pink" }}></div>
     
      
    </div>
    
   
   </div>

      </div>

    )

}
export default Home;
