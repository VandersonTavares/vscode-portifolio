import React, { useEffect, useState } from "react";
import axios from "axios";

import { BsLinkedin } from "react-icons/bs";

import "./styles.css";

const Github = () => {
  const [perfil, setPerfil] = useState("");

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/vandersontavares`)
      .then((response) => {
        setPerfil(response.data);
      });
  }, []);

  return (
    <div className="github-container">
      <div className="github-img">
        <img src={perfil.avatar_url} alt="avatar" />
      </div>
      <div className="github-personal-infos">
        <h2>{perfil.name}</h2>
        <p>{perfil.login}</p>
        <strong>{perfil.bio}</strong>
        <p>
          {perfil.followers} followers - {perfil.following} following
        </p>
        <p>{perfil.location}</p>
        <a
          href={`https://github.com/${perfil.login}?tab=repositories`}
          target={"_blank"}
          rel="noreferrer"
        >
          <p>Repositorios - {perfil.public_repos}</p>
        </a>
        <p className="linkedin-link">
          <a
            href="https://www.linkedin.com/in/vanderson-tavares-da-silva-77832b222/"
            target={"_blank"}
            rel="noreferrer"
          >
            <BsLinkedin /> In/Vanderson Tavares
          </a>
        </p>
      </div>
    </div>
  );
};

export default Github;
