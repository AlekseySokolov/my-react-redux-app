import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import * as actions from '../../../actions/loginActions';
import {connect} from 'react-redux';

const PrivateProfileRoute = ({loginState, component: Component, ...rest }) => {
    return (
        <Route {...rest} render = { props =>
            loginState === true ?
                <Component {...props} /> :
                <Redirect to={{pathname : '/login', state: {from: props.location}}} /> }
            />
    )
};

const mapStateToProps = (state) => {
    return {
        loginState : state.loginState
    }
}

export default connect(mapStateToProps, actions)(PrivateProfileRoute);
