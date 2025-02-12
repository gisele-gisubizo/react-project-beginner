import React from 'react'

import './DashBoard_styles/DashBoard.css'
import { MdDashboard } from "react-icons/md";
import { CiShoppingCart } from "react-icons/ci";
import { GiBeachBag } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { TbReportSearch } from "react-icons/tb";
import { SiGooglemarketingplatform } from "react-icons/si";
import { FaUserAlt } from "react-icons/fa";
import { MdWidgets } from "react-icons/md";
import {Link} from 'react-router-dom'
import { SlCalender } from "react-icons/sl";
import { IoIosSettings } from "react-icons/io";
function SideBar(){

return(

    <div className='container-sidebar'>
         <div className='sidebar-content'>
            <h1>Botiga Admin</h1>
            <input type="text" placeholder='Search' className='search-container' />

            <div className='sideContainer'>
                <ul>
                    <Link className='sideBar-link'>
                        <li> <MdDashboard style={{ fontSize: "17px", color: "white" }} className='dash-icon'/>DashBoard</li>
                    </Link>
                    <Link  className='sideBar-link'>
                        <li> <CiShoppingCart  style={{ fontSize: "17px", color: "white" }} className='dash-icon'/>   Orders Management</li>
                    </Link>
                    <Link  className='sideBar-link'>
                        <li> <GiBeachBag  style={{ fontSize: "17px", color: "white" }} className='dash-icon'/>Products</li>
                    </Link>
                    <Link  className='sideBar-link'>
                        <li> < CgProfile style={{ fontSize: "17px", color: "white" }} className='dash-icon'/> Customers</li>
                    </Link>
                    <Link  className='sideBar-link'>
                        <li> <TbReportSearch style={{ fontSize: "17px", color: "white" }} className='dash-icon'/>Analytics & reports</li>
                    </Link>
                    <Link  className='sideBar-link'>
                        <li><SiGooglemarketingplatform style={{ fontSize: "17px", color: "white" }} className='dash-icon' />Marketing & promotions</li>
                    </Link>
                    <Link  className='sideBar-link'>
                        <li> <FaUserAlt style={{ fontSize: "17px", color: "white" }} className='dash-icon'  />Authentication and user roles</li>
                    </Link>
                    <Link  className='sideBar-link'>
                        <li> <MdWidgets  style={{ fontSize: "17px", color: "white" }} className='dash-icon'  />UI components and Widgets</li>
                    </Link>
                    <Link  className='sideBar-link'>
                        <li> <SlCalender style={{ fontSize: "17px", color: "white" }} className='dash-icon' />Calender and Events</li>
                    </Link>
                    <Link  className='sideBar-link'>
                        <li><IoIosSettings style={{ fontSize: "17px", color: "white" }} className='dash-icon' />Settings</li>
                    </Link>
                </ul>

            </div>
         </div>
    </div>
)

}

export default SideBar;