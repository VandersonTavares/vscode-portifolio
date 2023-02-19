import React from "react";

import "./styles.css";

import ProjectCard from "../../components/ProjectCard";

import TwitterImg from "../../util/img/twitter.png";
import VsCodeImg from "../../util/img/vscode-img.png";
import GithubImg from "../../util/img/github-cover.jpg";
import CellphoneImg from "../../util/img/cellshopbanner.png";
import FoodCommerce from "../../util/img/food-commerce.png";

const Projects = () => {
  return (
    <div className="layout-content">
      <h3>Meus Projetos</h3>
      <div className="project-content">
        <ProjectCard
          name={"Vs-Code Protfolio"}
          image={VsCodeImg}
          description={
            "Portfolio inspirado na IDE Visual Code Studio, projeto de portfolio pessoal."
          }
          demoLink={"https://vanderson-tavares-portfolio.netlify.app/"}
          gitLink={"https://github.com/VandersonTavares/vscode-portifolio"}
        />
        <ProjectCard
          name={"Food Commerce"}
          image={FoodCommerce}
          description={"NÃO FINALIZADO"}
          demoLink={"#"}
          gitLink={"https://github.com/VandersonTavares/Pedido-Online"}
        />
        <ProjectCard
          name={"Buscador de Usuário Github"}
          image={GithubImg}
          description={
            "Pequeno desafio feito no bootcamp da DevSuperior, ensinando como consumir API's."
          }
          demoLink={"https://buscador-github-api.netlify.app/"}
          gitLink={"https://github.com/VandersonTavares/desafio-github"}
        />
        <ProjectCard
          name={"Twitter Clone"}
          image={TwitterImg}
          description={"Projeto criado utlizando typescript, react-icons"}
          demoLink={"https://uitwitter-clone.netlify.app"}
          gitLink={"https://github.com/VandersonTavares/twitter-clone"}
        />
        <ProjectCard
          name={"Cellshop"}
          image={CellphoneImg}
          description={
            "Projeto criado utilizando a API do Mercado Livre, Axios, Local Storage e Styled Components."
          }
          demoLink={"https://cellshop-demo.netlify.app/"}
          gitLink={"https://github.com/VandersonTavares/cellshop"}
        />
      </div>
    </div>
  );
};

export default Projects;
