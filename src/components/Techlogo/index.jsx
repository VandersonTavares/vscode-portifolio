import React from 'react'

import "./styles.css";


import { ReactComponent as ReactIcon } from "../../util/img/react_icon.svg";
import { ReactComponent as HtmlIcon } from "../../util/img/html_icon.svg";
import { ReactComponent as CssIcon } from "../../util/img/css_icon.svg";
import { ReactComponent as Typescript } from "../../util/img/typescript-2.svg";


const Techlogo = () => {
  return (
    <div className="project-tags">
        <span><ReactIcon/></span>
        <span><HtmlIcon/></span>
        <span><CssIcon/></span>
        <span><Typescript/></span>
    </div>
  )
}

export default Techlogo