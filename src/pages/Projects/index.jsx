import React from 'react'

import "./styles.css";

import ProjectCard from '../../components/ProjectCard';

const Projects = () => {
  return (

    <div className='layout-content'>
      <h3>Projetinho Fellas</h3>  
      <div className="project-content">
          <ProjectCard name={"Cellshop"} description={"Projeto criado utilizando a API do Mercado Livre, Axios, Local Storage e Styled Components."} demoLink={"https://stalwart-lily-2c6a43.netlify.app/"} gitLink={"https://github.com/VandersonTavares/cellshop"}/>
          <ProjectCard name={"Vs-Code Protfolio"} description={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid saepe corrupti"} demoLink={"https://tangerine-paprenjak-2b39d8.netlify.app/"} gitLink={"https://github.com/VandersonTavares/vscode-portifolio"}/>
          <ProjectCard name={"Cellshop"} description={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid saepe corrupti"} demoLink={"https://stalwart-lily-2c6a43.netlify.app/"} gitLink={"https://github.com/VandersonTavares/cellshop"}/>
      </div>
    </div>
  )
}

export default Projects;