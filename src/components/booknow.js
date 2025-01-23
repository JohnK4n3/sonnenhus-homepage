import React from "react";
import "./booknow.css";
import { Link } from "react-router";
import Booking from "../pages/Booking";

const Booknow = () => {
    return (<>
        <div className="booknow">
                <Link to="/buchung" element = {<Booking/>}>
     <button type="button">
          Jetzt buchen
     </button></Link>
        </div>
    </>);
}
export default Booknow;