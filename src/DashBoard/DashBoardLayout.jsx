import React from 'react'
import SideBar from './Sidebar';
import NavBar from './DashBoardNavbar';
import { Outlet } from 'react-router-dom';

function DashBoardLayout(){

return(

    <div className=''>

<SideBar/>
<NavBar/>
<Outlet/>
    </div>
)

}

export default DashBoardLayout;