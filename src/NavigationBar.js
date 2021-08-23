
import { Link } from "gatsby";
import React from "react";
function NavigationBar({ title }) {

    return (
        <nav>
            <div className="brand">
                <Link to="/">{title}</Link>
            </div>
            <ul>
                <li>
                    <Link to="/">Pokedex</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavigationBar;