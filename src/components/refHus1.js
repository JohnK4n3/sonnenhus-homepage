import React from "react";
import "./booknow.css";
import { Link } from "react-router";
import Booking from "../pages/Booking";

const RefHus1 = () => {
    return (          
        <Link to="/hus1" element = {<Booking/>} className="button-ref">Zu Hus Eins</Link>
    );
}
export default RefHus1;