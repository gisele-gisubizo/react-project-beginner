import React from "react"
import { useState } from "react";
import '../styles/form.css'
import {Link} from 'react-router-dom'
import { IoMdClose } from "react-icons/io";
import SignUp from "./SignUp";




 

const Form =({handleLoginForm})=>
    

    {

        
    const [form,setForm]= useState(false);
    const handleSign = () =>
    {
        setForm(!form);
    }

    {
       
    return(
       <div className="overlay">
           <div className="content-form">
            
           
               <div className="container-form">
               <h1>Login Form<IoMdClose onClick={handleLoginForm } className="icon-close"/></h1>
            <input type="text"  placeholder="name"/>
            <input type="text" placeholder="password" />
            <button type="" className="button">Sign in</button>
             

             <div className="forgot"><p>Forgot password</p></div>
                 <div><p>Don't have an account?    <span onClick={handleSign} className="span-form">Sign up</span></p></div>
           </div>
           </div>
           {form && <SignUp handleSign={handleSign} handleLoginForm={handleLoginForm}/> }
       </div>

    )



}

}
export default Form;