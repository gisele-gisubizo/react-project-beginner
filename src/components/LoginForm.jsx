import React from "react"
import { IoMdClose } from "react-icons/io";

const LoginForm=({handleForm}) =>
{
    return(
        <div className="container">
     <IoMdClose onClick={handleForm}/>
   <input type="text" placeholder="enter your name" />
   <input type="text" placeholder="enter your email" />
    <button type="Login"> LOGIN</button>
        </div>
    )
}
export default LoginForm;