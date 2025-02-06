import React from "react";
import { useParams } from "react-router-dom";
import { vendorsList } from "./Shop";


function SingleVendors(){
const{id}=useParams();
const singlevendors=vendorsList.find((singlevendors)=>singlevendors.id==id);

    return(

        <div className="vendors-content-container">

            <div className="vendors-vendors">
             <img src={singlevendors.image} className="singlecard-image-image"/>
            </div>

            <div>{singlevendors.words}</div>
            <div>{singlevendors.address}</div>


        </div>
    )
}
export default SingleVendors;