import React from 'react'
import { NavLink } from 'react-router-dom';

import "./styles.css";

import Techlogo from "../Techlogo";


const ProjectCard = ({ name, description, gitLink, demoLink, image }) => {
  return (
    <div className="card">
        <div className="img">
          <img src={image} alt="project-img" />
        </div>
        <div className="project-infos">
            <h3><NavLink to={demoLink} target={"_blank"}>{name}</NavLink></h3>
            <p>{description}</p>
        </div>

        <Techlogo />
        
        <div className="project-urls">
            <NavLink to={gitLink} target={"_blank"}>Código Fonte</NavLink>
        </div>
    </div>
  )
}

export default ProjectCard