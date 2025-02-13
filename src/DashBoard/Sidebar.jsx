import React from 'react';
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
 import Graph from './Graph';
 import Chart from './Chart';
 import GraphTwo from './GraphTwo';
import LineChartTwoComponent from './LineChartTwo';
import CustomBarChart from './BarChart';
import LineChartComponent from './LineChart';
import { FaUserLarge } from "react-icons/fa6";
// import Download from './Download';
import ThemeToggle from "./Dark"; // Adjust the path as needed




function SideBar() {


    
//   const [download,setDownload] =useState (false);
//   const handleDownload=()=>
//   {
//     setDownload(!download)
//   }
    return (
        // {download && <Download handleDownload={handleDownload}/>}
        <div className='container-sidebar'>
            <div className='sidebar-content'>
                <div className='admin'>
                    <p className='admin-position'><FaUserLarge style={{ color: "white", fontSize: "34px" }} /></p>
                    <h1>Admin</h1>
                    <ThemeToggle />
                </div>
                
                <div className='realContent-Sidebar'>
                   
                  
                   
                </div>

                <div className='sideContainer'>
                    <ul>
                        <Link className='sideBar-link'>
                            <li > <MdDashboard style={{ fontSize: "17px", color: "white" }} className='dash-icon' />DashBoard</li>
                        </Link>
                        <Link className='sideBar-link'>
                            <li> <CiShoppingCart style={{ fontSize: "17px", color: "white" }} className='dash-icon' /> Orders Management</li>
                        </Link>
                        <Link className='sideBar-link'>
                            <li> <GiBeachBag style={{ fontSize: "17px", color: "white" }} className='dash-icon' />Products</li>
                        </Link>
                        <Link className='sideBar-link'>
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

            {/* Individual divs instead of using an array */}
            <div className='input-dashboard'>
                 <p className='input-dashboard-p'>Welcome to analytical DashBoard</p>
              <p className='input-dashboard-p-one'>Website Analytics</p>

            </div>

            <div className='array'>
                <div className='sidebar-array'>
                    <div className='item-number-sidebar'>Today sales</div>
                    <div className='item-data-sidebar'>22k</div>
                    <div className='item-graphs-sidebar'><Graph/></div>
                    <div className='item-content-sidebar'>Analytical for last week</div>
                </div>

                <div className='sidebar-array'>
                    <div className='item-number-sidebar'>Analytics </div>
                    <div className='item-data-sidebar'>100k</div>
                    <div className='item-graphs-sidebar'><GraphTwo/></div>
                    <div className='item-content-sidebar'>Analytical for last week</div>
                </div>


                <div className='sidebar-array'>
                    <div className='item-number-sidebar'>Analytics</div>
                    <div className='item-data-sidebar'>100k</div>
                    <div className='item-graphs-sidebar'><Graph/></div>
                    <div className='item-content-sidebar'>Analytical for last week</div>
                </div>

                <div className='sidebar-arrays'>
                    <div className='item-number-sidebar'>Inventory Overview</div>
                    <div className='item-data-sidebar'>50k</div>
                    <div className='item-graphs-sidebar'><Chart/></div>
                    <div className='item-content-sidebar'>Analytical for last week</div>
                </div>
            </div>

            <div className='audience'>
               <h3>Audience OverView</h3>
               <p className='colored-p'>or you can <span className='colored-audience'>sync your data to the dashboard</span> to ensure your data is always updated</p>
               <input type="text"  />
               <div className='content-table'>
                    <div className='item-dashboard'>
                     <p>$3,056</p>
                        <sub>item</sub>
                    </div>
                         <div className='value-dashboard'>
    
                        <p>$3,056</p>
                         <sub>value</sub>
                         </div>

                     <div className='week-dashboard'>
                         <p>Week</p>
                         <p>Month</p>
                         <div className='week-dashboard-button'>
                             <p >Year</p>
                         </div>
                      
                     </div>
                  
               </div>
               <CustomBarChart/>
            </div>
            <div className='active-users'>
                <h3>Active Users</h3>
                <p className='active-users-p'>How have your users visited over time?</p>

            <div className='tables-activeUsers'>

                  <div  className='users-daily'>
                       <h4>Daily</h4>
                       <p>1.08k</p>
                       <sub >-1.08%</sub>
                  </div>

                  <div className='users-weekly'>
                  <h4>Weekly</h4>
                       <p>1.08k</p>
                       <sub>-1.08%</sub>
                  </div>

                  <div className='users-monthly'>
                  <h4>Monthly</h4>
                       <p>1.08k</p>
                       <sub>-1.08%</sub>
                  </div>
                 
                </div>
                <LineChartComponent/>

            </div>


            <div className='session'>
                <h3>Session By Device</h3>
                <p className='active-users-p'>How have your users visited over time?</p>

                <div className='session-list'>
                    <p className='session-list-p'>1W</p>
                    <p>1M</p>
                    <p>1Y</p>
                  <LineChartTwoComponent/>
                   
                </div>



            </div>

            <div className='top-tittles'>
                <div className='download-Top-title'>
                    <p >Download</p>
                </div>
                <div className='generate-Top-title'>
                    <p >Generate Report</p>
                </div>
            </div>
        </div>
    );
}

export default SideBar;