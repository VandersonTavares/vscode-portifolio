import React from "react";
import { VscChromeRestore, VscChromeClose, VscChromeMinimize } from 'react-icons/vsc';

import "./styles.css";

const Header = () => {
    return (
        <div className="header-container">
            <div className="menu">
                <ul>
                    <li><button>File</button></li>
                    <li><button>Edit</button></li>
                    <li><button>Selection</button></li>
                    <li><button>View</button></li>
                    <li><button>Go</button></li>
                    <li><button>Run</button></li>
                    <li><button>Terminal</button></li>
                    <li><button>Help</button></li>
                </ul>
            </div>
            <div className="main-name">
                <p>Vanderson-Tavares-da-Silva.jsx - Visual Studio Code</p>
            </div>
            <div className="comands">
                <button className="command-button"><VscChromeMinimize/></button>
                <button className="command-button"><VscChromeRestore/></button>
                <button className="close command-button"><VscChromeClose/></button>
            </div>
        </div>

    )
}
export default Header