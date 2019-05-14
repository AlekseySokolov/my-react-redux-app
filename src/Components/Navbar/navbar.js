import React from 'react';
import {connect} from 'react-redux';
import './navbar.css';
import NavLinks from './nav-links';
import path from './nav-links-path';
import  * as actions from '../../actions/loginActions';

const Btn = ({loginState, logout}) => {
    if (loginState === true) {
        return <NavLinks exact to="/login">
            <button className='btn-login' onClick={logout}>LOGOUT</button>
        </NavLinks>
    }
    if (loginState === false) {
        return <NavLinks exact to="/login">
            <button className='btn-login'>LOGIN</button>
        </NavLinks>
    }
}


const Navbar = ({loginState, login, logout}) => {
    return (
        <div className='navbar'>
            <ul className='navbar-nav'>
                { path.map((arr, index) =>
                    <li className='nav-item' key={index}>
                        <NavLinks className="nav-link" exact to={arr[0]}>
                            {arr[1]}
                        </NavLinks>
                    </li>) }
            </ul>
            <Btn loginState={loginState} logout={logout} />
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        loginState: state.loginState
    }
};

export default connect(mapStateToProps, actions)(Navbar);