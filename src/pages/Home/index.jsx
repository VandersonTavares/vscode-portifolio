import React from "react";
import { NavLink } from "react-router-dom";
import Typewriter from "react-ts-typewriter";

import "./styles.css";

const Home = () => {
  return (
    <div className="personal-container">
      <div className="personal-infos">
        <h1>Vanderson Tavares</h1>
        <Typewriter text='Desenvolvedor Front-End Iniciante'/>
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
