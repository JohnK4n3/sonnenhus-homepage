import React from "react";
import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router";
import Hauptseite from "../pages/Hauptseite";
import Hus1 from "../pages/Hus1";
import Hus2 from "../pages/Hus2";
import Infos from "../pages/Infos";
import Booking from "../pages/Booking";
import Request from "../pages/Request";
import Booking_Hus1 from "../pages/Booking_Hus1";
import Booking_Hus2 from "../pages/Booking_Hus2";
import Request_Hus1 from "../pages/Request_Hus1";
import Request_Hus2 from "../pages/Request_Hus2";
import Contact from "../pages/Contact";



const Navbar = () => {
  const [buchungOpen, setBuchungOpen] = useState(false);
  const [anfrageOpen, setAnfrageOpen] = useState(false);
    const menuRef = useRef(null);

    const anfrageRef = useRef(null);
    const buchungRef = useRef(null);
    
    const toggleBuchung = () => {
      setBuchungOpen(!buchungOpen);
      setAnfrageOpen(false); // Close other menu
  };
  const toggleAnfrage = () => {
    setAnfrageOpen(!anfrageOpen);
    setBuchungOpen(false); // Close other menu
};
  
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && !anfrageRef.current.contains(event.target) && !buchungRef.current.contains(event.target)) {
        setBuchungOpen(false);
        setAnfrageOpen(false);
      }
  };

  useEffect(() => {
      document.addEventListener('mousedown', handleClickOutside);
      // document.addEventListener('mouseleave', handleClickOutside);
      return () => {
          document.removeEventListener('mousedown', handleClickOutside);
      };
  }, []);



  return (
      <nav className="nav-desktop">
       <NavLink to ="/" element = {<Hauptseite/>} className="navlogo">
          <img src="/images/logo_notext_black.png" alt="Logo" className="navlogo"/>
       
       </NavLink>
         <div>
          <ul>
            <li><NavLink to ="/" element = {<Hauptseite/>} className={({ isActive }) => (isActive ? "nav-item-active" : "nav-item")}>Übersicht</NavLink></li>
            <li><NavLink to ="/hus1" element = {<Hus1/>} className={({ isActive }) => (isActive ? "nav-item-active" : "nav-item")}>Hus Eins</NavLink></li>
            <li><NavLink to ="/hus2" element = {<Hus2/>} className={({ isActive }) => (isActive ? "nav-item-active" : "nav-item")}>Hus Zwei</NavLink></li>
            <li><NavLink to ="/infos" element = {<Infos/>} className={({ isActive }) => (isActive ? "nav-item-active" : "nav-item")}>Informationen</NavLink></li>
            <li><NavLink to ="/kontakt" element = {<Contact/>} className={({ isActive }) => (isActive ? "nav-item-active" : "nav-item")}>Kontakt</NavLink></li>
          </ul>
         <div className="button-container">
          <button ref={anfrageRef} onClick={toggleAnfrage} onMouseOver={toggleAnfrage} className="dropdown-menu">
            Anfrage
          </button>
            {anfrageOpen && (
        <div className="mobile-links" ref={menuRef}>
            <NavLink to="/anfrage_hus1" element={<Request_Hus1/>} className={({ isActive }) => (isActive ? "dropdown-item-active" : "dropdown-item")} onClick={toggleAnfrage}>Hus Eins</NavLink>
            <NavLink to="/anfrage_hus2" element={<Request_Hus2/>} className={({ isActive }) => (isActive ? "dropdown-item-active" : "dropdown-item")} onClick={toggleAnfrage}>Hus Zwei</NavLink>
          </div>
      )}
      </div>
      <div className="button-container">
      <button ref={buchungRef} onClick={toggleBuchung} onMouseOver={toggleBuchung} className="dropdown-menu">
            Buchung
      </button>
            {buchungOpen && (
        <div className="mobile-links" ref={menuRef}>
            <NavLink to="/buchung_hus1" element={<Booking_Hus1/>} className={({ isActive }) => (isActive ? "dropdown-item-active" : "dropdown-item")} onClick={toggleBuchung}>Hus Eins</NavLink>
            <NavLink to="/buchung_hus2" element={<Booking_Hus2/>} className={({ isActive }) => (isActive ? "dropdown-item-active" : "dropdown-item")} onClick={toggleBuchung}>Hus Zwei</NavLink>
          </div>
      )}
      </div>
     </div>
      </nav>
  );
}

export default Navbar;
