import React from 'react';
import '../styles/ProjectCard.css';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={`/images/${project.image}`} alt={project.title} />
      </div>
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-company">{project.company}</p>
        
        <div className="project-section">
          <h4>Project Overview:</h4>
          <ul>
            {project.overview.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="project-section">
          <h4>Approach:</h4>
          <ul>
            {project.approach.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;