import React from "react";
import { NavLink } from "react-router-dom";

import "./styles.css";

const Home = () => {
  return (
    <div className="personal-container">
      <div className="personal-infos">
        <h1>Vanderson Tavares</h1>
        <h3>Desenvolvedor Front-End Iniciante</h3>
        <p>Portfolio inspirado na IDE vs-code. õ.o - a vá</p>
        <div className="buttons">
          <div className="button">
          <NavLink to="/projects">Projects</NavLink>
          </div>
          <div className="button">
            <NavLink to="/contact">Contato</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
