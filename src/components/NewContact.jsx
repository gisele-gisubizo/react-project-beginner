import React from 'react'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import '../styles/HomeProduct.css'



function NewContact(){
  


    const {register, handleSubmit}= useForm();
     const click=(data)=>
     {
         const {name,email,subject,message}=data;
         const formInfo=new FormData();
         try{
         formInfo.append('name',name);
         formInfo.append('email',email);
         formInfo.append('subject',subject);
         formInfo.append('message',message);
     
     
         const results= axios.post(`https://botiga-kvf9.onrender.com/product/createProduct`,formInfo,
         {
            headers:{
     
             "Content-Type": "application/json"
            }
         }
     ); console.log(results) ;
         }
         catch(error)
         {
        console(error)
         }
     }
     
 
 
     return(
 
         <div className='content-HomeProduct'>
         <form  className='form-products' onSubmit={handleSubmit(click)}>
         <h1>Contact Form</h1>
             <input type="text" placeholder='Name' name='name' className='inputs-products' {...register('name',{required:true})} />
             <input type="email" placeholder='Email' name='email' className='inputs-products' {...register('email',{lowercase:true})}/>
             <input type="text" placeholder='Subject' name='subject' className='inputs-products' {...register('subject',{required:true})} />
             <textarea name="message" placeholder='Message' className='inputs-products'   {...register('message',{required:true})} ></textarea>
         <button type='submit' className='button-HomeProducts'>Create Product</button>
         </form>
             </div>
     )
 }
 export default NewContact;