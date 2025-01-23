      import React from "react";
      import { Link } from "react-router";
      import Hauptseite from "../pages/Hauptseite";
      import Hus1 from "../pages/Hus1";
      import Hus2 from "../pages/Hus2";
      import Infos from "../pages/Infos";
      import Booking from "../pages/Booking";
      import { RxHamburgerMenu } from "react-icons/rx";
      import { useState } from "react";
      import NavLinks from "./NavLinks"
      
     

     


      const MobileNavbar = () => {

        const [click, setClick] = useState(false);

        const Hamburger = <RxHamburgerMenu className="HamburgerMenu"
        size="30px" color="black"
        onClick={() => setClick(!click)}
        />

        return (
            <nav className="nav-mobile">
              <h1 className="navlogo">Sonnenhus</h1>
              {Hamburger}
              {click && <NavLinks />} 
             
            </nav>
        );
      }
      
      export default MobileNavbar;
      
     
  