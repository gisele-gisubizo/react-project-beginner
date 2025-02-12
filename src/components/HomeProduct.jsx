import React from 'react'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import '../styles/HomeProduct.css'
function HomeProduct(){
const {register,handleSubmit}= useForm();
 const send=(data)=>
 {
    const {productTitle,images,productPrice,productContent}=data;
    const formData=new FormData();
    try{
    formData.append('productTitle',productTitle);
    formData.append('images',images[0]);
    formData.append('productPrice',productPrice);
    formData.append('productContent',productContent);


    const result= axios.post(`https://botiga-kvf9.onrender.com/product/createProduct`,formData,
    {
       headers:{

        "Content.Type":"multipart/form-data"
       }
    }
); console.log(result) ;
    }
    catch(error)
    {
   console(error)
    }
}
return(

    <div className='content-HomeProduct'>
<form  className='form-products' onSubmit={handleSubmit(send)}>
<h1>Add Your Product</h1>
    <input type="text" placeholder='Product Title' name='productTitle' className='inputs-products' {...register('productTitle',{required:true})} />
    <input type="file" placeholder='Product image' name='images' className='inputs-products' {...register('images',{required:true})}/>
    <input type="text" placeholder='Product Content' name='productContent' className='inputs-products' {...register('productContent',{required:true})} />
    <input type="text" placeholder='Product Price' name='productPrice' className='inputs-products' {...register('productPrice',{required:true})}  />
<button type='submit' className='button-HomeProducts'>Create Product</button>
</form>
    </div>

    
)

}

export default HomeProduct;