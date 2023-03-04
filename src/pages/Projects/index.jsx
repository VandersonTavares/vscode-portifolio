import React from "react";

import "./styles.css";

import ProjectCard from "../../components/ProjectCard";

import TwitterImg from "../../util/img/twitter.png";
import VsCodeImg from "../../util/img/vscode-img.png";
import GithubImg from "../../util/img/github-cover.jpg";
import CellphoneImg from "../../util/img/cellshopbanner.png";
import FoodCommerce from "../../util/img/food-commerce.png";
import MusicApp from "../../util/img/musicapp.png";
import HydraPage from "../../util/img/hydra-page.jpg";
import Pokedex from "../..//util/img/pokedex.jpg";

const Projects = () => {
  return (
    <div className="layout-content">
      <h3>Meus Projetos</h3>
      <div className="project-content">
        <ProjectCard
          name={"Hydra Landing Page"}
          image={HydraPage}
          technologies={["react", "html", "css", "tailwind"]}
          description={
            "NÃO FINALIZADO - Hydra Landing Page, projeto free da comunidade do Figma, link no repositorio."
          }
          demoLink={"https://hydra-landingpage.netlify.app"}
          gitLink={"https://github.com/VandersonTavares/hydra-page"}
        />
        <ProjectCard
          name={"Music App"}
          image={MusicApp}
          technologies={["react", "html", "css", "tailwind"]}
          description={"NÃO FINALIZADO"}
          demoLink={"#"}
          gitLink={"https://github.com/VandersonTavares/musicapp"}
        />

        <ProjectCard
          name={"Vs-Code Protfolio"}
          image={VsCodeImg}
          technologies={["react", "html", "css"]}
          description={
            "NÃO FINALIZADO - Portfolio inspirado na IDE Visual Code Studio, projeto de portfolio pessoal."
          }
          demoLink={"https://vanderson-tavares-portfolio.netlify.app/"}
          gitLink={"https://github.com/VandersonTavares/vscode-portifolio"}
        />
        <ProjectCard
          name={"Food Commerce"}
          image={FoodCommerce}
          technologies={["react", "html", "css", "typescript"]}
          description={"NÃO FINALIZADO"}
          demoLink={"#"}
          gitLink={"https://github.com/VandersonTavares/Pedido-Online"}
        />
        <ProjectCard
          name={"Twitter Clone"}
          image={TwitterImg}
          technologies={["react", "html", "css", "typescript"]}
          description={"Projeto criado utlizando typescript, react-icons"}
          demoLink={"https://hydra-landingpage.netlify.app/"}
          gitLink={"https://github.com/VandersonTavares/twitter-clone"}
        />
        <ProjectCard
          name={"Pokedéx"}
          image={Pokedex}
          technologies={["react", "html", "css", "tailwind"]}
          description={"NÃO FINALIZADO - Utilizando a API PokeApi"}
          demoLink={""}
          gitLink={"https://github.com/VandersonTavares/pokedex"}
        />
        <ProjectCard
          name={"Buscador de Usuário Github"}
          image={GithubImg}
          technologies={["react", "html", "css"]}
          description={
            "Pequeno desafio feito no bootcamp da DevSuperior, ensinando como consumir API's."
          }
          demoLink={"https://buscador-github-api.netlify.app/"}
          gitLink={"https://github.com/VandersonTavares/desafio-github"}
        />
        <ProjectCard
          name={"Cellshop"}
          image={CellphoneImg}
          technologies={["react", "html", "css"]}
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
