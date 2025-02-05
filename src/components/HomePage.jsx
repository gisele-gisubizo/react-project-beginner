import React from 'react'
import('../styles/Home.css')
import botiga from '../assets/botiga.webp'
import('../styles/homepage.css')
import bottle from '../assets/bottle.webp'
import alexa from '../assets/alexa.webp'
import { useNavigate } from 'react-router-dom'
import mouse from '../assets/mouse.webp'
export const data =[
    {
  id:1,
  image:botiga,
  cardTitle:'oil'

    },

    {
        id:2,
        image:bottle,
        cardTitle:'sugar'
      
    }
]

function HomePage() {
    const navigation = useNavigate();
    const handleNavigate=(id)=>{
        navigation(`/singlecard/${id}`)
    }
return(
<div className='container-trial'>
{data.map((item)=>
(
    <div className='photo1' key={item.id}>
        <div className='photo'><img src={item.image} className='photo2' /></div>
        <div className='photo2'>{item.cardTitle}</div>
        <button type='button' className='button2' onClick={()=>handleNavigate(item.id)}>
            View</button>
    </div>

))}
</div>
)

}

export default HomePage;