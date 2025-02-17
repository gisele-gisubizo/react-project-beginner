import React, { useState, useEffect } from 'react';
import './DashBoard_styles/DashBoard.css';
import { MdDashboard, MdWidgets } from "react-icons/md";
import { CiShoppingCart } from "react-icons/ci";
import { GiBeachBag } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { TbReportSearch } from "react-icons/tb";
import { SiGooglemarketingplatform } from "react-icons/si";
import { FaUserAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { SlCalender } from "react-icons/sl";
import { IoIosSettings } from "react-icons/io";
import { FaUserLarge } from "react-icons/fa6";
import { MdWbSunny } from "react-icons/md";
import { LuMoonStar } from "react-icons/lu";
// import Dark from './Dark';
// import Download from './Download';





function SideBar() {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            setIsDarkTheme(true);
            document.body.classList.add('dark-theme');
        }
        else {
            setIsDarkTheme(false);
            document.body.classList.add('light-theme');
        }
    }, []);
    const toggleTheme = () => {
        setIsDarkTheme((previous) => {
            const newTheme = !previous;
            document.body.classList.toggle('dark-theme', newTheme);
            document.body.classList.toggle('light-theme', !newTheme);
            localStorage.setItem('theme', newTheme ? 'dark' : 'light');
            return newTheme
        });
    };


    //   const [download,setDownload] =useState (false);
    //   const handleDownload=()=>
    //   {
    //     setDownload(!download)
    //   }
    return (
        // {download && <Download handleDownload={handleDownload}/>}
        <div className={`container-sidebar ${isDarkTheme ? 'dark' : 'light'}`}>
           
            <div className='sidebar-content'>
                <div className='admin'>
                    <p className='admin-position'><FaUserLarge style={{ color: "rgb(89, 86, 233)", fontSize: "34px" }} /></p>
                    <h1>Admin</h1>
                    <button className='theme-toggle' onClick={toggleTheme}>
                    {isDarkTheme ? <MdWbSunny/> : <LuMoonStar/>}
                </button>

                </div>
                
                

                <div className='realContent-Sidebar'>



                </div>

                <div className='sideContainer'>
                    <ul>
                        <Link to='/Sidebar' className='sideBar-link'>
                            <li > <MdDashboard style={{ fontSize: "17px", color: "white" }} className='dash-icon' />DashBoard</li>
                        </Link>
                        <Link to='ListVendors'className='sideBar-link'>
                            <li> <CiShoppingCart style={{ fontSize: "17px", color: "white" }} className='dash-icon' /> Vendors</li>
                        </Link>
                        <Link to='/productview' className='sideBar-link'>
                            <li> <GiBeachBag style={{ fontSize: "17px", color: "white" }} className='dash-icon' />Products</li>
                        </Link>
                        <Link to='/Contacts'className='sideBar-link'>
                            <li> <CgProfile style={{ fontSize: "17px", color: "white" }} className='dash-icon' /> Customers</li>
                        </Link>
                        <Link className='sideBar-link'>
                            <li> <TbReportSearch style={{ fontSize: "17px", color: "white" }} className='dash-icon' />Analytics & reports</li>
                        </Link>
                        <Link className='sideBar-link'>
                            <li><SiGooglemarketingplatform style={{ fontSize: "17px", color: "white" }} className='dash-icon' />Marketing & promotions</li>
                        </Link>
                        <Link className='sideBar-link'>
                            <li> <FaUserAlt style={{ fontSize: "17px", color: "white" }} className='dash-icon' />Authentication and user roles</li>
                        </Link>
                        <Link className='sideBar-link'>
                            <li> <MdWidgets style={{ fontSize: "17px", color: "white" }} className='dash-icon' />UI components and Widgets</li>
                        </Link>
                        <Link className='sideBar-link'>
                            <li> <SlCalender style={{ fontSize: "17px", color: "white" }} className='dash-icon' />Calender and Events</li>
                        </Link>
                        <Link className='sideBar-link'>
                            <li><IoIosSettings style={{ fontSize: "17px", color: "white" }} className='dash-icon' />Settings</li>
                        </Link>
                        
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default SideBar;