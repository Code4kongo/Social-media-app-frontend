import React from "react";
import { Link } from "react-router-dom";
import "./Logo.css";
import Logoimage from "../../images/CPN Transparent Background White Font1.png";

export default function Logo() {
  return (
    <div className="logo">
      <Link to="/home">
        <img src={Logoimage} alt="logo" />
      </Link>
    </div>
  );
}
