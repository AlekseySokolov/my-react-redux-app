import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../../actions/loginActions';
import {Field, reduxForm} from 'redux-form';
import {validate} from "./validate";
import {renderField} from "./renderField";
import './login.css';

const Login = (props) => {
    const {handleSubmit, reset, login,submitting, pristine, isPristine  } = props;
    const submit = (values) => {
       if(values.username === 'admin' && values.password === '12345') {
           return login();
       }
    };
    return (
        <div className='formContainer'>
        <form onSubmit={handleSubmit(submit)} className='loginForm'>
                <Field
                    name="username"
                    component={renderField}
                    type="login"
                    label="Username"
                />
                <Field
                    name="password"
                    component={renderField}
                    type="password"
                    label="Password"
                />
            <div className='buttonContainer'>
                <button className={pristine === true ? 'btn-submit disabled' : 'btn-submit'} type="submit" label="submit" disabled={pristine || submitting }>
                    Submit
                </button>
                <button className={pristine === true ? 'btn-submit disabled' : 'btn-submit'} type="button" label="submit" disabled={pristine || submitting} onClick={reset}  >
                    Clear
                </button>
            </div>
        </form>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        loginState: state.loginState
    }
}

const Example = connect(
    mapStateToProps,
    actions
)(Login);

export default reduxForm({form : 'loginForm', validate})(Example);


