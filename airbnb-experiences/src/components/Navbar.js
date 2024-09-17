import { ReactDOM } from "react";
import logo from "../images/airbnb-logo.svg";
import '../App.css';

export default function Navbar() {
    return (
        <div className="nav-bar">
           <img className="logo" src={logo} alt="airbnb-logo"/>           
        </div>
    )
}