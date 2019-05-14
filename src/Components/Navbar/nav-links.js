import React from 'react';
import { NavLink } from 'react-router-dom';

const NavLinks = (props) => {
    return (
        <NavLink activeClassName="active" {...props}>
            {props.children}
        </NavLink>
    )
};

export default NavLinks;