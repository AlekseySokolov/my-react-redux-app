import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../../actions/loginActions';
import './home.css';

const Home = ({loginState}) => {
    return (
        <>
        { loginState === false ?
          <h1 className='greeting'>Greetings visitor, log in to find out more</h1> :
          <h1 className='greeting user'>There is nothing here;) but I greet you Super Admin</h1>
        }
        </>
    )
};

const mapStateToProps = (state) => {
    return {
        loginState : state.loginState
    }
}
export default connect(mapStateToProps, actions)(Home);