import React from "react";
import "./booknow.css";
import { Link } from "react-router";
import Booking from "../pages/Booking";

const Booknow = () => {
    return (          
        <Link to="/buchung" element = {<Booking/>} className="booknow">Jetzt buchen</Link>
    );
}
export default Booknow;