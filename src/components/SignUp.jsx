import React from "react"
import { useState } from "react";
import '../styles/SignUp.css'
import { IoMdClose } from "react-icons/io";
import Form from "./form";




const SignUp =({handleSign,handleLoginForm})=>
{
       
    return(
       <div className="overlay-sign">
           <div className="content-sign">
            <div className="container-sign">
                <h1>Sign up<IoMdClose onClick={handleLoginForm}className="icon-closed"/></h1>
                          
                   <input type="text"  placeholder="name" required/>
                   <input type="text"  placeholder="email" required/>
                   <input type="text" placeholder="password" required />
                   <input type="text" placeholder="Comfirm password" />
                   <button type="" className="button-sign">sign up</button>
                   <div>Have an account? <span onClick={handleLoginForm} className="span-form">Sign in</span></div>
                 
            </div>
           </div>
           
               
       </div>
    )
}
export default SignUp;