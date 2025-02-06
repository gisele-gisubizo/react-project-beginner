import { arrivals } from "./Shop"
import { useParams } from "react-router-dom"
import '../styles/singlecard.css'
function SingleArrival(){

const{id}=useParams();
const singlecard=arrivals.find((singlecard)=>singlecard.id==id);
return(
<div className="singlecard">
    
        <div className="singlecard-image">
     <img src={singlecard.images} className="singlecard-image-image"/>
        </div>
         
        <div className="singlecard-name">
     <div className="singlecard-image-name">{singlecard.name} </div>
        </div>
</div>
)

}
export default SingleArrival