import React from "react";

const Navbar = () => {
    return(
    <div className="navbar">
        <h3 className="navbar__heading">
            <span className="navbar__heading--main">Alexandre Steinhauslin</span>
            <span className="navbar__heading--sub">Web Developer</span>
        </h3>
        <div className="menu">
            <button className="dropbtn nav-button">menu</button>
            <nav className="nav-content">
                <a className="nav-button" href="#home"> Home </a>
                <a className="nav-button" href="#about"> About Me </a>
                <a className="nav-button" href="#projects"> Projects</a>
                <a className="nav-button" href="#resume"> Resume </a>
            </nav>
        </div>
    </div>
    )
}

export default Navbar;