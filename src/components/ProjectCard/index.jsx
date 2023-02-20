import { NavLink } from "react-router-dom";

import { ReactComponent as ReactIcon } from "../../util/img/react_icon.svg";
import { ReactComponent as HtmlIcon } from "../../util/img/html_icon.svg";
import { ReactComponent as CssIcon } from "../../util/img/css_icon.svg";
import { ReactComponent as Typescript } from "../../util/img/typescript-2.svg";
import { ReactComponent as Javascript } from "../../util/img/js_icon.svg";

import "./styles.css";

const ProjectCard = ({ name, description, gitLink, demoLink, image, technologies }) => {

  function TextToIcon(value) {
      const icones = {
        'react': <ReactIcon />,
        'html': <HtmlIcon />,
        'javascript': <Javascript />,
        'typescript': <Typescript />,
        'css': <CssIcon />,
    };
    return icones[value];
  }

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
        {technologies?.map((value) => {
        console.log('render')
          return (
            <span key={value} className="project-tags">
              {TextToIcon(value)}
            </span>
          );
        })}
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
