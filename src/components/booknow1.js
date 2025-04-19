import React from "react";
import "./booknow.css";
import { Link } from "react-router";
import Booking from "../pages/Booking";

const Booknow1 = () => {
    return (          
        <Link to="/buchung_hus1" element = {<Booking/>} className="booknow">Jetzt buchen</Link>
    );
}
export default Booknow1;