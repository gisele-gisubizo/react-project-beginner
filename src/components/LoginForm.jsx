import React from "react";
import('../styles/LoginForm.css')

function LoginForm(){


    return(

        <div className="Login">

<h2>Login</h2>
<form action="" className="login-form">
    <div className="box">
    <p>First name</p>
    <input type="text" id="name" name="names" placeholder="Firstname" required /> </div>

    <div className="box">
    <p>Last name</p>
    <input type="text" id="name" name="names" placeholder="Surname" required /> </div>


     <div className="box">
        <p>Email</p>
        <input type="email" id="email" name="email" placeholder=" email" required/>
     </div>

     <div className="box">
      <p>Password</p>
       <input  type="password" id="password" name="password" placeholder=" password" required />
      </div>

    
   <button type="submit">Login</button>
</form>
</div>

        
    )
}

export default LoginForm;