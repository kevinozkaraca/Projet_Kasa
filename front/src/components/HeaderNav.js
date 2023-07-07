import React from "react";
import { NavLink } from "react-router-dom";

const navbar = () => {
    // header de navigation du site
    return (
        <div>
            <div className="navbarContainer">
                <div className="leftContainer">
                    <img src="/images/logoKasa.png" alt="logo du site Kasa" />
                </div>
                <div className="rightContainer">
                    <NavLink to="/">Accueil</NavLink>
                    <NavLink to="/apropos">A propos</NavLink>
                </div>
            </div>
        </div>
    );
};

export default navbar;