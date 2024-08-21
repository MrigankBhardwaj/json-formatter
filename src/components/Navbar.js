import React from "react";
import navLogo from '../images/logo192.png'

const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-light container">
            <a className="navbar-brand" href="#">
                <img src={navLogo} width="30" height="30" className="d-inline-block align-top" alt="" />
                {" "}Mrigank Kumar
            </a>
        </nav>
    )
}
export default Navbar