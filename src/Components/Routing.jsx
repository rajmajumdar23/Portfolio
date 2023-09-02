import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Navbar_Right from './Navbar_Right';
import Services from './Services';
import Blogs from './Blogs';

const Routing = () => {
  const [isSidebarActive, setIsSidebarActive] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarActive(!isSidebarActive);
  };

  return (
    <Router>
      <div className="App">
        <Navbar onSidebarToggle={toggleSidebar} />
        <Navbar_Right onSidebarToggle={toggleSidebar} />
        <Sidebar isSidebarActive={isSidebarActive} toggleSidebar={toggleSidebar} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Routing;
