import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import {connect} from 'react-redux';
import {signUp, clearAuthError} from '../actions';
import {renderInput} from '../helpers';


class SignUp extends Component{
    handleSignUp(values){
        this.props.signUp(values);
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
                    <span className="card-title">Enter your Info</span>
                    <form onSubmit={handleSubmit(this.handleSignUp.bind(this))}>
                        <Field name="email" label="Email" component={renderInput}/>
                        <Field name="password" label="Password" component={renderInput} type="password"/>
                        <Field name="confirmPassword" label="Confirm Password" component={renderInput} type="password"/>
                        <div className="row right-align">
                        <button style={{marginLeft:'10%'}} className="btn blue-grey lighten-3 white-text">Sign Up</button>
                        <p className="right-align red-text text-darken-2">{authError}</p>
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
    const {email, password, confirmPassword} = values;
    const errors = {};
    if(!email){
        errors.email = 'Please enter a valid email address';
    }

    if(!password){
        errors.password = 'Please enter a valid password';
    }

    if(password !==confirmPassword){
        errors.confirmPassword = 'Passwords do not match';
    }

    return errors
}

SignUp = reduxForm({
    form: 'sign-up',
    validate: validateInputs
})(SignUp)


function mstp(state){
    return{
        authError: state.user.error
    }
}
export default connect(mstp, {signUp, clearAuthError})(SignUp);