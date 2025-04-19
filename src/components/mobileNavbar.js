import React from "react";
import { Link } from "react-router";
import Hauptseite from "../pages/Hauptseite";
import Hus1 from "../pages/Hus1";
import Hus2 from "../pages/Hus2";
import Infos from "../pages/Infos";
import Booking_Hus1 from "../pages/Booking_Hus1";
import Booking_Hus2 from "../pages/Booking_Hus2";
import Request_Hus2 from "../pages/Request_Hus2";


import { RxHamburgerMenu } from "react-icons/rx";
import { useState, useEffect, useRef } from "react";
import Request_Hus1 from "../pages/Request_Hus1";

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
      <Link to="/" element={<Hauptseite />} className="navlogo">
      <img src="/images/logo_notext.png" alt="Logo" className="navlogo"/>
      
      </Link>
      <button ref={hamburgerRef} onClick={toggle} className="mobile-menu">
        {Hamburger}
      </button>
      {click && (
        <div className="mobile-links" ref={menuRef}>
        <Link to="/" element={<Hauptseite />} className="nav-item" onClick={toggle}>Übersicht</Link>
        <Link to="/hus1" element={<Hus1 />} className="nav-item" onClick={toggle}>Hus 1</Link>
        <Link to="/hus2" element={<Hus2 />} className="nav-item" onClick={toggle}>Hus 2</Link>
        <Link to="/infos" element={<Infos />} className="nav-item" onClick={toggle}>Informationen</Link>
        <p className="nav-item">Anfrage</p>
        <ul>
        <li><Link to="/anfrage_hus1" element={Request_Hus1} className="nav-item" onClick={toggle}> &gt; Hus 1</Link></li>
        <li><Link to="/anfrage_hus2" element={Request_Hus2} className="nav-item" onClick={toggle}> &gt; Hus 2</Link></li>
        </ul>
        <p className="nav-item">Buchung</p>
        <ul>
        <li><Link to="/anfrage_hus1" element={Booking_Hus1} className="nav-item" onClick={toggle}>&gt; Hus 1</Link></li>
        <li><Link to="/anfrage_hus2" element={Booking_Hus2} className="nav-item" onClick={toggle}>&gt; Hus 2</Link></li>
        </ul>
        </div>
      )}
      </nav>
    );
      }
      
      

      
      export default MobileNavbar;
