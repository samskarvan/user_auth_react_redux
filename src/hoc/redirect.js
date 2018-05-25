import React, {Component} from 'react';
import {connect} from 'react-redux';



export default function(WrappedComponent, path="/"){
    class Redirect extends Component{
        componentDidMount(){
            if(this.props.auth){
                this.props.history.push(path);
            }
        }

        componentWillReceiveProps(nextProps){
            if(nextProps.auth){
                this.props.history.push(path);
            }
        }
        
        render(){
            return(
                <WrappedComponent {...this.props}/>
            )
        }

    }

    function mstp(state){
        return{
            auth: state.user.auth
        }
    }

    return connect(mstp)(Redirect)
}