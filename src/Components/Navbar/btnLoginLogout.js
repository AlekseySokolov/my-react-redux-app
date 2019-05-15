import React from 'react';
import NavLinks from './nav-links';

const BtnLoginLogout = ({loginState, logout}) => {
    if (loginState === true) {
        return <NavLinks exact to="/login">
            <button className='btn-login' onClick={logout}>Logout</button>
        </NavLinks>
    }
    if (loginState === false) {
        return <NavLinks exact to="/login">
            <button className='btn-login'>Login</button>
        </NavLinks>
    }
}

export default BtnLoginLogout;