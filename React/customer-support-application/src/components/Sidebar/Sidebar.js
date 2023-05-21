
import {CSidebar,CSidebarBrand, CSidebarNav, CNavTitle, CNavGroup, CNavItem, CBadge,CSidebarToggler } from '@coreui/react';
import {Link} from "react-router-dom";


function getRedirectString(){

    const userType= localStorage.getItem('userType').toLowerCase();
    return `/${userType}`;
}

function SideBar(){

    const onLogout=()=>{
        localStorage.clear();
        window.location.href="/";
    }

    return <CSidebar unfoldable className='vh-100 bg-black'>
  <CSidebarNav>
    <CNavTitle>Customer Support App</CNavTitle>

    <CNavItem href="#">
       <i className="text-white m-2 bi bi-house text-white"></i>
        <Link className='text-decoration-none text-white mx-3' to={getRedirectString()}> Home </Link>

    </CNavItem>


    <CNavItem href="#">
        <i className="text-white m-2 bi bi-arrow-90deg-left"></i>
        <div className='text-decoration-none text-white mx-3' onClick={onLogout}>
            Logout
        </div>

    </CNavItem>


  </CSidebarNav>
  <CSidebarToggler />
</CSidebar>
}

export default SideBar;