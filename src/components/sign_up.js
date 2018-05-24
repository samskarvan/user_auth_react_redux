import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import {connect} from 'react-redux';
import {signUp} from '../actions';


class SignUp extends Component{
    constructor(props){
        super(props);
        this.renderInput.bind(this);
    }
    handleSignUp(values){
        console.log('sign up info:',values);

        this.props.signUp(values);
    }
    renderInput({input, label, type, meta:{error, touched}}=props){
        return(
            <div>
                <label className="grey-text text-darken-2">{label}</label>
                <input {...input} type={type ? type: 'text'}/>
                <p className="red-text text-darken-2">{touched&&error}</p>
            </div>
        )
    }
    render(){
        const {handleSubmit} = this.props;
        return(
            <div className="row">
            <div className="col s8 offset-s2">
                <div style={{margin: '10% 0'}}className="card blue lighten-5">
                    <div className="card-content">
                    <span className="card-title">Enter your Info</span>
                    <form onSubmit={handleSubmit(this.handleSignUp.bind(this))}>
                        <Field name="email" label="Email" component={this.renderInput}/>
                        <Field name="password" label="Password" component={this.renderInput} type="password"/>
                        <Field name="confirmPassword" label="Confirm Password" component={this.renderInput} type="password"/>
                        <div className="row right-align">
                        <button style={{marginLeft:'10%'}} className="btn blue-grey lighten-3 white-text">Sign Up</button>
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

export default connect(null, {signUp})(SignUp);