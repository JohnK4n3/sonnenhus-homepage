import React from "react";
import { NavLink } from "react-router";
import Hauptseite from "../pages/Hauptseite";
import Hus1 from "../pages/Hus1";
import Hus2 from "../pages/Hus2";
import Infos from "../pages/Infos";
import Booking from "../pages/Booking";


const Navbar = () => {
  return (
      <nav className="nav-desktop">
       <NavLink to ="/" element = {<Hauptseite/>} className="navlogo">Sonnenhus</NavLink>
          <ul>
            <li><NavLink to ="/" element = {<Hauptseite/>} className={({ isActive }) => (isActive ? "nav-item-active" : "nav-item")}>Übersicht</NavLink></li>
            <li><NavLink to ="/hus1" element = {<Hus1/>} className={({ isActive }) => (isActive ? "nav-item-active" : "nav-item")}>Hus 1</NavLink></li>
            <li><NavLink to ="/hus2" element = {<Hus2/>} className={({ isActive }) => (isActive ? "nav-item-active" : "nav-item")}>Hus 2</NavLink></li>
            <li><NavLink to ="/infos" element = {<Infos/>} className={({ isActive }) => (isActive ? "nav-item-active" : "nav-item")}>Informationen</NavLink></li>
            <li><NavLink to = "/buchung" element = {<Booking/>} className={({ isActive }) => (isActive ? "nav-item-active" : "nav-item")}>Buchung</NavLink></li>
          </ul>
      </nav>
  );
}

export default Navbar;
