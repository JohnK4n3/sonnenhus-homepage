import React from "react";
import { Link } from "react-router";
import Imprint from "../pages/Imprint";
import GTC from "../pages/GTC";
import Data_Protection from "../pages/Data_Protection";

const Footer = () => {

    return (<>
        <footer>
            <div className="footer-col">
                <p>Lobkevitz 23a <br/>18556 Breege</p>
                
            </div>  
            <div className="footer-col">
            <a style={{fontWeight:600}} href="mailto:info@sonnenhus.com">info@sonnenhus.com</a>
                <a href="https://www.facebook.com/Sonnenhus-102255241810930/" target="_blank"><b>Facebook:</b> Sonnenhus Rügen</a>
            </div>  
            <div className="footer-col">
                <ul className="footnotes">
                    <li><Link to ="/impressum" element = {<Imprint/>}>Impressum</Link></li>
                    <li>|</li>
                    <li><Link to ="/agb" element = {<GTC/>}> AGB</Link></li>
                    <li>|</li>
                    <li><Link to ="/datenschutz" element = {<Data_Protection/>}> Datenschutz</Link></li>
                </ul>
                <p style={{fontSize:"10px"}}>© Alle Rechte vorbehalten.</p>
            </div>
        </footer>

        
    </>);
}
export default Footer;