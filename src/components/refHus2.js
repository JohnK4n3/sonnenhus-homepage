import React from "react";
import "./booknow.css";
import { Link } from "react-router";
import Booking from "../pages/Booking";

const RefHus2 = () => {
    return (          
        <Link to="/hus2" element = {<Booking/>} className="button-ref">Zu Hus Zwei</Link>
    );
}
export default RefHus2;