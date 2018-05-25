import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import {connect} from 'react-redux';
import {signIn, clearAuthError} from '../actions';
import {renderInput} from '../helpers';


class SignIn extends Component{
    handleSignIn(values){
        this.props.signIn(values);
    }
    
    componentWillUnmount(){
        this.props.clearAuthError();
    }

    render(){
        const {handleSubmit, authError} = this.props;
        return(
            <div className="row">
            <div className="col s8 offset-s2">
                <div style={{margin: '10% 0'}}className="card blue lighten-5">
                    <div className="card-content">
                    <span className="card-title">Sign In</span>
                    <form onSubmit={handleSubmit(this.handleSignIn.bind(this))}>
                        <Field name="email" label="Email" component={renderInput}/>
                        <Field name="password" label="Password" component={renderInput} type="password"/>
                        <div className="row right-align">
                        <button style={{marginLeft:'10%'}} className="btn blue-grey lighten-3 white-text">Sign In</button>
                        <p className="right-align red-text">{authError}</p>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
            </div>
        )
    }
} 

function validateInputs(values){
    const {email, password} = values;
    const errors = {};
    if(!email){
        errors.email = 'Please enter a valid email address';
    }

    if(!password){
        errors.password = 'Please enter a valid password';
    }

    return errors
}

SignIn = reduxForm({
    form: 'sign-in',
    validate: validateInputs
})(SignIn)

function mstp(state){
    return{
        authError: state.user.error
    }
}
export default connect(mstp, {signIn, clearAuthError})(SignIn);