import React from 'react';
import {connect} from 'react-redux';
import './navbar.css';
import NavLinks from './nav-links';
import path from './nav-links-path';
import  * as actions from '../../actions/loginActions';
import BtnLoginLogout from './btnLoginLogout';
import activeStyle from './nanbar-active-style';


const Navbar = ({loginState, navItemState, login, logout}) => {
    return (
        <div className='navbar'>
            <ul className='navbar-nav'>
                { path.map((arr, index) =>
                    <li className='nav-item' key={index}>
                        <NavLinks className="nav-link" exact to={arr[0]} activeStyle={activeStyle}>
                            {arr[1]}
                        </NavLinks>
                    </li>) }
            </ul>
            <BtnLoginLogout loginState={loginState} logout={logout} />
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        loginState: state.loginState
    }
};

export default connect(mapStateToProps, actions)(Navbar);