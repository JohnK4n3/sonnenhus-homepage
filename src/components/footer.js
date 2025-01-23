import React from "react";
import { Link } from "react-router";
import Imprint from "../pages/Imprint";
import GTC from "../pages/GTC";
import Data_Protection from "../pages/Data_Protection";

const Footer = () => {

    return (<>
        <div className="outer">

            <div className="header">
                
            </div>
        <div className="rooter">
                
                <p className="footer-address">Lobkevitz 23 <br/>
                18556 Breege
                </p>
                
                <div className="footer_navigation-items" style={{marginLeft:"125px"}}>
                     <ul style={{margin:"0 auto", alignSelf:"center"}}>
                        
                        <li className="footer-list-items-narrow"><Link to ="/impressum" element = {<Imprint/>}>Impressum</Link></li>
                        <li className="footer-list-items-narrow"><Link to ="/agb" element = {<GTC/>}>AGB</Link></li>
                        <li className="footer-list-items-narrow"><Link to ="/datenschutz" element = {<Data_Protection/>}>Datenschutz</Link></li>
                    </ul>
                 </div>
                <div className="footer_navigation-items">
                        <ul style={{columnGap:"125px", flexDirection:"column", textAlign:"left"}}>
                        <li><a href="https://www.facebook.com/Sonnenhus-102255241810930/" target="_blank"><b>Facebook:</b> Sonnenhus Rügen</a></li>
                        <li>© Alle Rechte vorbehalten.</li>
                        </ul>
                 </div>
        </div> 
        </div>

        
    </>);
}
export default Footer;