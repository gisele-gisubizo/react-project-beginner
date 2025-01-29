import React from "react";
import Home from './Home'
import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import Footer from './Footer'
import('../styles/Home.css')

function Layout(){
    return(
   <div>
       <Navbar/>
       <Outlet/>
       <Footer/>
       
   </div>
  

    )

}
export default Layout;