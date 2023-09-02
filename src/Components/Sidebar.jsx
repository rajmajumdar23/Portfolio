import React from 'react';
import { NavLink} from 'react-router-dom';
import { FaHome, FaFolder,FaUser, FaBlog } from 'react-icons/fa';
import { RiFacebookCircleFill, RiGithubFill, RiLinkedinFill, RiInstagramFill } from 'react-icons/ri';
import { IoIosCall } from 'react-icons/io';
import './Styling/sidebar.css';

const Sidebar=({ isSidebarActive })=>{

  return (
    <div className={`sidebar ${isSidebarActive ? 'active' : ''}`}>
      <div className='SideLogo'>RM</div>
      <ul className="nav">
        <NavLink exact to="/" className="nav-link1" activeClassName="active">
          <FaHome />
        </NavLink>
        <NavLink to="/projects" className="nav-link1" activeClassName="active">
          <FaFolder />
        </NavLink>
        <NavLink to="/about" className="nav-link1" activeClassName="active">
        <FaUser />
        </NavLink>
        <NavLink to="/services" className="nav-link1" activeClassName="active">
        <IoIosCall /> 
        </NavLink>
        <NavLink to="blogs" className="nav-link1" activeClassName="active">
        <FaBlog />
        </NavLink>
      </ul>
      <div className="social-icons">
        <div className="social-link">
          <a href="https://www.facebook.com/raj.majumdar.7330/">
            <RiFacebookCircleFill />
          </a>
        </div>
        <div className="social-link">
          <a href="https://www.instagram.com/rajmajumdar49/">
            <RiInstagramFill />
          </a>
        </div>
        <div className="social-link">
          <a href="https://www.linkedin.com/in/raj-majumdar-0919ba286/">
            <RiLinkedinFill />
          </a>
        </div>
        <div className="social-link">
          <a href="https://github.com/rajmajumdar23">
            <RiGithubFill />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
