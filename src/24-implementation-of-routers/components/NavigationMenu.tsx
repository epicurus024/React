import React from 'react';
import { Link } from 'react-router-dom';

const NavigationMenu = () => {
    return (
        <div>
            {/* Anchor tags refreshes page. */}
            {/* <a href="/">Home</a>
            <a href="/Contact">Contact</a> */}

            {/* Link will not refresh page, rather just uses right elements */}
            <Link to="/">Home</Link>
            <Link to="/Contact">Contact</Link>

            {/* if we use NavLink instead of Link, it acts same but we can have 'className' property and manage to do css on the same */}
            {/* <NavLink to="/" activeClassName='active' >Home</NavLink>
            <NavLink to="/Contact" activeClassName='active' >Contact</NavLink> */}

        </div>
    );
};

export default NavigationMenu;