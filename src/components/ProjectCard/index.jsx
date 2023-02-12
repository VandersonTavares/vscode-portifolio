import React from 'react'

import "./styles.css";

const ProjectCard = ({name, description}) => {
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
            <a href="link">Código Fonte</a>
            <a href="link">Live Demo</a>
        </div>
    </div>
  )
}

export default ProjectCard