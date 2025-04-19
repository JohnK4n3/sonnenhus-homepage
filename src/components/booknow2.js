import React from "react";
import "./booknow.css";
import { Link } from "react-router";
import Booking from "../pages/Booking";

const Booknow2 = () => {
    return (          
        <Link to="/buchung_hus2" element = {<Booking/>} className="booknow">Jetzt buchen</Link>
    );
}
export default Booknow2;