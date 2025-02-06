import React from 'react'
import { useParams } from 'react-router-dom';
import { productList } from './HomePage';
import('../styles/SinglePage.css')
function SinglePage (){
   const { id }=useParams();
   console.log("productList",id);

   const card=productList.find((card)=>card.id==id);

    return(
        <div>
            <div className="single">
             <img src={card.image}/>
            </div> 
            <div>
            {card.cardTitle}
            </div>
        </div>
    )
}

export default SinglePage;