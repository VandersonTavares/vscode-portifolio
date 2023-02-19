import React from "react";
import { NavLink } from "react-router-dom";

import { ReactComponent as ReactIcon } from "../../util/img/react_icon.svg";
import { ReactComponent as HtmlIcon } from "../../util/img/html_icon.svg";
import { ReactComponent as CssIcon } from "../../util/img/css_icon.svg";
import { ReactComponent as Typescript } from "../../util/img/typescript-2.svg";

import "./styles.css";

const ProjectCard = ({ name, description, gitLink, demoLink, image }) => {
  return (
    <div className="card">
      <div className="img">
        <img src={image} alt="project-img" />
      </div>
      <div className="project-infos">
        <h3>
          <NavLink to={demoLink} target={"_blank"}>
            {name}
          </NavLink>
        </h3>
        <p>{description}</p>
      </div>

      <div className="project-tags">
        <span>
          <ReactIcon />
        </span>
        <span>
          <HtmlIcon />
        </span>
        <span>
          <CssIcon />
        </span>
        <span>
          <Typescript />
        </span>
      </div>

      <div className="project-urls">
        <NavLink to={gitLink} target={"_blank"}>
          Código Fonte
        </NavLink>
      </div>
    </div>
  );
};

export default ProjectCard;
