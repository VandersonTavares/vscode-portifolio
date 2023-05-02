import React from "react";
import { NavLink } from "react-router-dom";
import Typewriter from "react-ts-typewriter";

import "./styles.css";

const Home = () => {
  return (
    <div className="home-personal-container">
      <div className="home-personal-infos">
        <h1>Vanderson Tavares</h1>
        <Typewriter text='Desenvolvedor Front-End'/>
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
