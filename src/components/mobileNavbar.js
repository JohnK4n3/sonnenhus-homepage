import React from "react";
import { Link } from "react-router";
import Hauptseite from "../pages/Hauptseite";
import Hus1 from "../pages/Hus1";
import Hus2 from "../pages/Hus2";
import Infos from "../pages/Infos";
import Booking from "../pages/Booking";
import Request from "../pages/Request";

import { RxHamburgerMenu } from "react-icons/rx";
import { useState, useEffect, useRef } from "react";

  const MobileNavbar = () => {
    const [click, setClick] = useState(false);
    const menuRef = useRef(null);
    const hamburgerRef = useRef(null);
    const toggle = () => {setClick(!click)};
  
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && !hamburgerRef.current.contains(event.target)) {
          setClick(false);
      }
  };

  useEffect(() => {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
          document.removeEventListener('mousedown', handleClickOutside);
      };
  }, []);

    const Hamburger =
      <RxHamburgerMenu className="HamburgerMenu" size = "24px"/>
     
      
    return (
      <nav className="nav-mobile">
      <Link to="/" element={<Hauptseite />} className="navlogo">Sonnenhus</Link>
      <button ref={hamburgerRef} onClick={toggle} className="mobile-menu">
        {Hamburger}
      </button>
      {click && (
        <div className="mobile-links" ref={menuRef}>
        <Link to="/" element={<Hauptseite />} className="nav-item" onClick={toggle}>Übersicht</Link>
        <Link to="/hus1" element={<Hus1 />} className="nav-item" onClick={toggle}>Hus 1</Link>
        <Link to="/hus2" element={<Hus2 />} className="nav-item" onClick={toggle}>Hus 2</Link>
        <Link to="/infos" element={<Infos />} className="nav-item" onClick={toggle}>Informationen</Link>
        <Link to="/anfrage" element={<Request />} className="nav-item" onClick={toggle}>Anfrage</Link>
        <Link to="/buchung" element={<Booking />} className="nav-item" onClick={toggle}>Buchung</Link>
        </div>
      )}
      </nav>
    );
      }
      
      

      
      export default MobileNavbar;
