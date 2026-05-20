import "./Navigation.css";
import React from 'react';
import { NavLink } from 'react-router-dom';
import logosmall from "../../assets/logo-small.png";

function Navigation() {
    return (
        <nav>
            <span><img src={logosmall} alt="logo company"/><h3>BIOgventure</h3></span>
            <ul>
                <li><NavLink to="/"
                             className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Home</NavLink>
                </li>
                <li><NavLink to="/newpost"
                             className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Newpost</NavLink>
                </li>
                <li><NavLink to="/overzicht"
                             className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Alle
                    posts</NavLink></li>
                <li>
                    <button type="button">Nieuwe Post</button>
                </li>
            </ul>
        </nav>
    )
}
export default Navigation