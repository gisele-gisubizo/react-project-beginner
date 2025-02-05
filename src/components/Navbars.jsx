import React from 'react'
import LoginForm from '../components/LoginForm'
import '../styles/Navbars.css'
import { useState } from 'react';

function Navbars(){

    const[form,setForm] = useState(false);
    const handleForm=()=>{

        setForm(!form);
    }

    return(
        <div className='container-new'>
            <section className='navigation'>
            
                    {form && <LoginForm handleForm={handleForm}/>}
             <button type='button' onClick={handleForm}> Click me</button>
            </section>
            <div className='container'>
           
            </div>
        </div>
    )
}
export default Navbars;