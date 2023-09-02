import React from 'react';
import { RiMenuLine } from 'react-icons/ri';
import './Styling/Navbar.css';

const Navbar = ({ onSidebarToggle, isSidebarActive }) => {
  
  return (
    <div className="navbar2">
      <button className="menu-button" onClick={onSidebarToggle}>
        <RiMenuLine />
      </button>
      <label className='Logo'>RM</label>
      <div className={`menu-overlay ${isSidebarActive ? 'active' : ''}`} />
    </div>
  );
};

export default Navbar;
