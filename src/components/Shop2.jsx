import React from 'react'
import { useParams } from 'react-router-dom'
import { services } from './Shop'
// import { arrivals } from './Shop'

import('../styles/Shop2.css')


function Shop2(){
    const{id}=useParams();
   
   
    

 const viewServices=services.find((viewServices)=>viewServices.id==id);
//  const viewArrivals=arrivals.find((viewArrivals)=>viewArrivals.id==id);

    return(
        <div className='shop2'>
   <div>
       <div className="single-image">
                 <img src={viewServices.image} className='single-image-image'/>
                </div>
    <div className='container-shop2'>
                    <div className='single-image-name'>
                    {viewServices.name }
                    </div>
                    <div className='productTitle '>
                    {viewServices.productTitle }
                    </div>
                    <div className='description'>
                    {viewServices.description }
                    </div>
                    <div className='productAdd'>
                    {viewServices.productAdd }
                    </div>
                    <div className='add'>
                    {viewServices.add}
                    </div>
                    <button type='button' className='button-shop2'>Buy</button>
                </div>
   </div>

   

        </div>
    )
}

export default Shop2;
