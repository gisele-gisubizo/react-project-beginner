import React from 'react'
import { useState } from 'react'
import SideBar from './Sidebar';



const Download =({handleDownload})=>
    

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


export default Download;