import React from 'react'

import "./styles.css";

import ProjectCard from '../../components/ProjectCard';

const Projects = () => {
  return (

    <div className='layout-content'>
      <h3>Projetinho Fellas</h3>  
      <div className="project-content">
          <ProjectCard name={"Cellshop"} description={"Projeto criado utilizando a API do Mercado Livre, Axios, Local Storage e Styled Components."} demoLink={"https://cellshop-demo.netlify.app/"} gitLink={"https://github.com/VandersonTavares/cellshop"}/>
          <ProjectCard name={"Vs-Code Protfolio"} description={"Portfolio inspirado na IDE Visual Code Studio, projeto de portfolio pessoal."} demoLink={"https://vanderson-tavares-portfolio.netlify.app/"} gitLink={"https://github.com/VandersonTavares/vscode-portifolio"}/>
          <ProjectCard name={"Buscador de Usuário Github"} description={"Pequeno desafio feito no bootcamp da DevSuperior, ensinando como consumir API's."} demoLink={"https://buscador-github-api.netlify.app/"} gitLink={"https://github.com/VandersonTavares/desafio-github"}/>
      </div>
    </div>
  )
}

export default Projects;