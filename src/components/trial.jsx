import React from "react";
import botiga from '../assets/botiga.webp'
import 
const Home=() =>{



const cards=[

    {
        image: botiga
        cardTitle: 'All in One Bottle'
        cardContent: 'Super Product'
    }
]
    return(
    <div>
        {
        cards.map((cardData)=>{
            (
                <section>
                    <div >
                        <div className="card-container">
                            <div className="card-image">
                                <img src={cardData.image} /> </div>
                                <div className="text-one">{cardData.cardTittle}</div>
                                <div className="text-two">{cardData.cardContent}</div>
                            </div>
                </div>
                    </section>
                
            )
        })
        
        
        }
    </div>

}
export default Home;