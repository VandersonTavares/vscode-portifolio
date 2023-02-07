import React from "react";
import { useState } from "react";

import { ReactComponent as ReactIcon } from "../util/img/react_icon.svg";
import { ReactComponent as HtmlIcon } from "../util/img/html_icon.svg";
import { ReactComponent as CssIcon } from "../util/img/css_icon.svg";
import { ReactComponent as JsIcon } from "../util/img/js_icon.svg";
import { ReactComponent as JsonIcon } from "../util/img/json_icon.svg";

import {
  VscFiles,
  VscChevronRight,
  VscChevronDown,
  VscEllipsis,
  VscSearch,
  VscSourceControl,
  VscDebugAlt,
  VscExtensions,
  VscAccount,
  VscGear,
} from "react-icons/vsc";

import "./styles.css";

const Main = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="grid-container">
      <div className="sidebar left">
        <div className="top-buttons">
          <div className="icon-config">
            <VscFiles className="active"/>
          </div>
          <div className="icon-config">
            <VscSearch />
          </div>
          <div className="icon-config">
            <VscSourceControl />
          </div>
          <div className="icon-config">
            <VscExtensions />
          </div>
          <div className="icon-config">
            <VscDebugAlt />
          </div>
        </div>
        <div className="botton-buttons">
          <div className="icon-config">
            <VscAccount />
          </div>
          <div className="icon-config">
            <VscGear />
          </div>
        </div>
      </div>
      <div className="explorer right">
        <div className="explorer-div">
          <h4>EXPLORER</h4>
            <VscEllipsis className="explorer-icon"/>
        </div>
        <button className="explorer-btn" onClick={()=> setOpen(!open)}> {open ? <VscChevronDown className="arrow-down"/> : <VscChevronRight/>} PORTFOLIO</button>
        {open && <div className="explorer-content">
          <div className="item">
            <a href="link">
              <ReactIcon className="explorer-icon" />
              <p>home.jsx</p>
            </a>
          </div>
          <div className="item">
            <a href="link">
              <HtmlIcon className="explorer-icon" />
              <p>about.html</p>
            </a>
          </div>
          <div className="item">
            <a href="link">
              <CssIcon className="explorer-icon" />
              <p>contact.css</p>
            </a>
          </div>
          <div className="item">
            <a href="link">
              <JsIcon className="explorer-icon" />
              <p>projects.js</p>
            </a>
          </div>
          <div className="item">
            <a href="link">
              <JsonIcon className="explorer-icon" />
              <p>github.md</p>
            </a>
          </div>
        </div>}
      </div>
      <div className="content r-right">
        <p>content</p>
      </div>
    </div>
  );
};

export default Main;
