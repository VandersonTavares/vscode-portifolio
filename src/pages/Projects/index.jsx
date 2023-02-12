import React from 'react'

import "./styles.css";

import ProjectCard from '../../components/ProjectCard';

const Projects = () => {


  return (

    <div className='layout-content'>
      <h3>Projetinho Fellas</h3>  
      <div className="project-content">
          <ProjectCard name={"Cellshop"} description={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid saepe corrupti"}/>
          <ProjectCard name={"Cellshop"} description={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid saepe corrupti"}/>
          <ProjectCard name={"Cellshop"} description={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid saepe corrupti"}/>
      </div>
    </div>
  )
}

export default Projects;