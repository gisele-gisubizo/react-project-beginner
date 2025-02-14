import React from 'react';
import './DashBoard_styles/DashBoardView.css';
 import Graph from './Graph';
 import Chart from './Chart';
 import GraphTwo from './GraphTwo';
import LineChartTwoComponent from './LineChartTwo';
import CustomBarChart from './BarChart';
import LineChartComponent from './LineChart';






function  DashBoardView() {


    
//   const [download,setDownload] =useState (false);
//   const handleDownload=()=>
//   {
//     setDownload(!download)
//   }
    return (
        // {download && <Download handleDownload={handleDownload}/>}
        <div className='container-sidebar'>
        
            {/* Individual divs instead of using an array */}
                <div className="welcome">
                  <p> Welcome to analytical DashBoard</p>
                  <h2>Website Analytics</h2>

                  </div>   
                  <div className='topTittles'>
                    <div className="download">Download</div>
                    <div className="generateReport">Generate Report</div>
                                      </div>        

            <div className='array'>

        
                <div className='sidebar-array'>
                    <div className='item-number-sidebar'>Today sales</div>
                    <div className='item-data-sidebar'>22k</div>
                    <div className='item-content-sidebar'>Analytical for last week</div>
                    <div className='graph-container'><Chart/></div>
                 
                </div>

                <div className='sidebar-array'>
                    <div className='item-number-sidebar'>Analytics </div>
                    <div className='item-data-sidebar'>100k</div>
                    <div className='item-content-sidebar'>Analytical for last week</div>
                    <div className='graph-container'><Chart/></div>
                  
                </div>


                <div className='sidebar-array'>
                    <div className='item-number-sidebar'>Analytics</div>
                    <div className='item-data-sidebar'>100k</div>
                    <div className='item-content-sidebar'>Analytical for last week</div>
                    <div className='graph-container'><Chart/></div>
                
                </div>

                <div className='sidebar-arrays'>
                    <div className='item-number-sidebar'>Inventory Overview</div>
                    <div className='item-data-sidebar'>50k</div>
                    <div className='item-content-sidebar'>Analytical for last week</div>
                    <div className='graph-containers'><Chart/></div>
                  
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
               <div className='custom'>
                 <CustomBarChart />
               </div>
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
                    <p className='session-normal'>1M</p>
                    <p className='session-normal'>1Y</p>
                  <LineChartTwoComponent/>
                   
                </div>



            </div>

           
        </div>
    );
}

export default DashBoardView;