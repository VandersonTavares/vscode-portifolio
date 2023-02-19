import React from "react";
import { useState } from "react";

import { ReactComponent as ReactIcon } from "../../util/img/react_icon.svg";
import { ReactComponent as HtmlIcon } from "../../util/img/html_icon.svg";
import { ReactComponent as CssIcon } from "../../util/img/css_icon.svg";
import { ReactComponent as JsIcon } from "../../util/img/js_icon.svg";
import { ReactComponent as JsonIcon } from "../../util/img/json_icon.svg";

import Hamburger from "hamburger-react";

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
  VscClose,
} from "react-icons/vsc";

import "./styles.css";
import { NavLink, Outlet, Link } from "react-router-dom";

const Main = () => {
  const [open, setOpen] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container">
      <div className="sidebar">
        <div className="top-buttons">
          <div className="icon-config">
            <VscFiles className="side-active" />
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
          <a
            href="https://github.com/VandersonTavares"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="icon-config">
              <VscAccount title="Github" />
            </div>
          </a>
          <div className="icon-config">
            <VscGear />
          </div>
        </div>
      </div>
      <div className="explorer-tab">
        <div className="explorer-div">
          <h4>EXPLORER</h4>
          <VscEllipsis className="explorer-icon" />
        </div>
        <button className="explorer-btn" onClick={() => setOpen(!open)}>
          {" "}
          {open ? <VscChevronDown /> : <VscChevronRight />} PORTFOLIO
        </button>
        {open && (
          <div className="explorer-content">
            <div className="item">
              <Link to="/home">
                <ReactIcon className="explorer-icon" />
                <p>home.jsx</p>
              </Link>
            </div>
            <div className="item">
              <Link to="/about">
                <HtmlIcon className="explorer-icon" />
                <p>about.html</p>
              </Link>
            </div>
            <div className="item">
              <Link to="/contact">
                <CssIcon className="explorer-icon" />
                <p>contact.css</p>
              </Link>
            </div>
            <div className="item">
              <Link to="/projects">
                <JsIcon className="explorer-icon" />
                <p>projects.js</p>
              </Link>
            </div>
            <div className="item">
              <Link to="/github">
                <JsonIcon className="explorer-icon" />
                <p>github.md</p>
              </Link>
            </div>
          </div>
        )}
      </div>
      <div className="content">
        <div className="div-hamb">
        <Hamburger toggled={isOpen} toggle={setIsOpen}/>
        { isOpen &&
          <div className="hamb-menu">
            <div className="item">
              <Link to="/home">
                <ReactIcon className="explorer-icon" />
                <p>home.jsx</p>
              </Link>
            </div>
            <div className="item">
              <Link to="/about">
                <HtmlIcon className="explorer-icon" />
                <p>about.html</p>
              </Link>
            </div>
            <div className="item">
              <Link to="/contact">
                <CssIcon className="explorer-icon" />
                <p>contact.css</p>
              </Link>
            </div>
            <div className="item">
              <Link to="/projects">
                <JsIcon className="explorer-icon" />
                <p>projects.js</p>
              </Link>
            </div>
            <div className="item">
              <Link to="/github">
                <JsonIcon className="explorer-icon" />
                <p>github.md</p>
              </Link>
            </div>
          </div>
        }
        </div>
        <div className="top-header">
          <div className="tab">
            <NavLink to="/home">
              <div>
                <ReactIcon className="explorer-icon" />{" "}
                <p className="not-save">home.jsx</p>
                <VscClose className="hide" />
              </div>
            </NavLink>
          </div>
          <div className="tab">
            <NavLink to="/about">
              <div>
                <HtmlIcon className="explorer-icon" />
                <p>about.html</p>
                <VscClose className="hide" />
              </div>
            </NavLink>
          </div>
          <div className="tab">
            <NavLink to="/contact">
              <div>
                <CssIcon className="explorer-icon" />
                <p className="save">contact.css</p>
                <VscClose className="hide" />
              </div>
            </NavLink>
          </div>
          <div className="tab">
            <NavLink to="/projects">
              <div>
                <JsIcon className="explorer-icon" />
                <p className="not-save">projects.js</p>
                <VscClose className="hide" />
              </div>
            </NavLink>
          </div>
          <div className="tab">
            <NavLink to="/github">
              <div>
                <JsonIcon className="explorer-icon" />
                <p>github.md</p>
                <VscClose className="hide" />
              </div>
            </NavLink>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
