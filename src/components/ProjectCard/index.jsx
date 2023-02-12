import React from 'react'
import { NavLink } from 'react-router-dom';

import "./styles.css";

const ProjectCard = ({name, description, gitLink, demoLink}) => {
  return (
    <div className="card">
        <div className="img">
        </div>
        <div className="project-infos">
            <h3>{name}</h3>
            <p>{description}</p>
        </div>
        <div className="project-tags">
            <span>react</span>
            <span>HTML</span>
            <span>CSS</span>
        </div>
        <div className="project-urls">
            <NavLink to={gitLink} target={"_blank"}>Código Fonte</NavLink>
            <NavLink to={demoLink} target={"_blank"}>Live Demo</NavLink>
        </div>
    </div>
  )
}

export default ProjectCard