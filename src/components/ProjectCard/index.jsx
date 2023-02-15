import React from 'react'
import { NavLink } from 'react-router-dom';

import "./styles.css";

const ProjectCard = ({name, description, gitLink, demoLink}) => {
  return (
    <div className="card">
        <div className="img">
        </div>
        <div className="project-infos">
            <h3><NavLink to={demoLink} target={"_blank"}>{name}</NavLink></h3>
            <p>{description}</p>
        </div>
        <div className="project-tags">
            <span>ReactJS</span>
            <span>HTML5</span>
            <span>CSS3</span>
        </div>
        <div className="project-urls">
            <NavLink to={gitLink} target={"_blank"}>Código Fonte</NavLink>
        </div>
    </div>
  )
}

export default ProjectCard