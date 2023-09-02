import React from 'react';
import { NavLink } from 'react-router-dom';
import { RiMenuLine } from 'react-icons/ri';
import './Styling/Navbar_Right.css';

const Navbar_Right = ({ onSidebarToggle, isSidebarActive }) => {
  return (
    <div className="navbar">
      <button className="menu-button" onClick={onSidebarToggle}>
        <RiMenuLine />
      </button>
      <nav className="nav-links">
        <NavLink to="/" className="nav-link" activeClassName="active" onClick={onSidebarToggle}>
          Home
        </NavLink>
        <NavLink to="/projects" className="nav-link" activeClassName="active" onClick={onSidebarToggle}>
          Projects
        </NavLink>
        <NavLink to="/about" className="nav-link" activeClassName="active" onClick={onSidebarToggle}>
         About
        </NavLink>
        <NavLink to="/services" className="nav-link" activeClassName="active" onClick={onSidebarToggle}>
          Contact
        </NavLink>
        <NavLink to="/blogs" className="nav-link" activeClassName="active" onClick={onSidebarToggle}>
          Blogs
        </NavLink>
      </nav>
      <div className={`menu-overlay ${isSidebarActive ? 'active' : ''}`} />
    </div>
  );
};

export default Navbar_Right;
