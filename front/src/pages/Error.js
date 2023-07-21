import React from "react";
import { NavLink } from "react-router-dom";

const Error = () => {
    return (
        <div>
            <div className="errorMiddle">
                <h1>404</h1>
                <p>Oups! La page que vous demandez n'existe pas.</p>
            </div>
            <div className="errorDown">
                <NavLink to="/">Retourner sur la page d'accueil</NavLink>
            </div>
        </div>
    );
};

export default Error;