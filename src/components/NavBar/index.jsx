import React, {useEffect, useState} from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';


const NavBar = () => {
  const user = localStorage.getItem('userid')  
  const nav = useNavigate()
  const handleClick = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('userid')
    // windows.location.reload()
  }
  useEffect(()=>{
    if(localStorage.getItem('userid') === null){
      nav("/")
    }
  },[user])


  return (
    <>
      <header role="banner">
        <div className="logo-container">
          {/* <p>Social media</p> */}
        </div>
        <div>
            <nav className='main-nav'>
              <NavLink to="/" >Logo</NavLink>{' '}
              <NavLink to="/projects" > Projects </NavLink>
              {/* <NavLink to="/About" > About </NavLink> */}
              {/* <NavLink to="/Contact" > Contact </NavLink> */}
            </nav>
        </div>
      </header>

      <Outlet />
    </>
  );
};

export default NavBar;
