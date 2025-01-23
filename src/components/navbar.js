import React from "react";
import { Link } from "react-router";
import Hauptseite from "../pages/Hauptseite";
import Hus1 from "../pages/Hus1";
import Hus2 from "../pages/Hus2";
import Infos from "../pages/Infos";
import Booking from "../pages/Booking";


const Navbar = () => {
  return (
      <nav>
        <h1 className="navlogo">Sonnenhus</h1>
          <ul>
            <li><Link to ="/" element = {<Hauptseite/>}className="nav-item">Übersicht</Link></li>
            <li><Link to ="/hus1" element = {<Hus1/>} className="nav-item">Hus 1</Link></li>
            <li><Link to ="/hus2" element = {<Hus2/>} className="nav-item">Hus 2</Link></li>
            <li><Link to ="/infos" element = {<Infos/>} className="nav-item">Informationen</Link></li>
            <li><Link to = "/buchung" element = {<Booking/>} className="nav-item">Buchungsanfrage</Link></li>
          </ul>
      </nav>
  );
}

export default Navbar;
