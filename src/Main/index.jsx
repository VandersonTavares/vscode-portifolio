import React from "react";

import {
  VscFiles,
  VscSearch,
  VscSourceControl,
  VscDebugAlt,
  VscExtensions,
  VscAccount,
  VscGear,
} from "react-icons/vsc";
import { AiFillHtml5 } from "react-icons/ai";

import "./styles.css";

const Main = () => {
  return (
    <div className="grid-container">
      <div className="sidebar left">
        <div className="top-buttons">
          <div className="icon-config">
            <VscFiles />
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
        <div class="dropdown">
          <button onclick="myFunction()" class="dropbtn">
            Dropdown
          </button>
          <div id="myDropdown" class="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
      </div>
      <div className="content r-right">
        <p>content</p>
      </div>
    </div>
  );
};

export default Main;
