import React from "react";

import { VscSourceControl, VscError, VscWarning, VscCheckAll, VscBell, VscFeedback } from 'react-icons/vsc';
import { RiSignalTowerFill } from 'react-icons/ri';

import "./styles.css";

const Footer = () => {
    return(
        
        <div className="footer-container">
            <div className="bottombar-section">
                <div className="bottombar">
                    <div><VscSourceControl className="icon"/><p>main*</p></div>
                </div>    
                <div className="bottombar">
                    <div><VscError className="icon"/><p>0</p></div>
                    <div><VscWarning className="icon"/><p>0</p></div>
                </div>    
                </div>
            <div className="bottombar-section">
             <div className="bottombar">
                    <div ><RiSignalTowerFill className="icon"/><p>Go Live</p></div>
                </div>
                <div className="bottombar">
                    <div><VscCheckAll className="icon"/><p>Prettier</p></div>
                </div>
                <div className="bottombar">
                    <div className="icon-size"><VscFeedback className="icon"/></div>
                </div>
                <div className="bottombar">
                    <div className="icon-size"><VscBell className="icon"/></div>
                </div>
            </div>
        </div>
        
    )
}
export default Footer;