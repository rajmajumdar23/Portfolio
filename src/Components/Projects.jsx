import React, { useState } from 'react';
import './Styling/Project.css';
import Project from "../Video/about.mp4"
import ProjectsData from './ProjectsData';
import YourImage from '../Images/mypic.png'

const Projects = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = ProjectsData.filter(project =>
    project.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="projects-container">
      <img src={YourImage} alt="Your Image" className="top-right-image" />
      <video autoPlay loop muted className="video-background">
        <source src={Project} type="video/mp4" />
      </video>
      <div className="projects-content">
        <input
          className='search-input'
          type="text"
          placeholder="Search projects"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {filteredProjects.map((project, index) => (
          <div className="project-card" key={index}>
            <video autoPlay loop muted className="project-video">
              <source src={project.video} type="video/mp4" />
            </video>
            <h2>{project.name}</h2>
            <p>Language: {project.language}</p>
            <p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">Visit Project</a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
