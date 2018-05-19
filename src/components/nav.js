import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {changeAuth} from '../actions';
import auth from '../hoc/auth';

class Nav extends Component{
    renderLinks(){
        const {auth, changeAuth} = this.props;
        if(auth){
            return(
                <Fragment>
                <li>
                        <Link to='/secret-doc'>Secret Doc</Link>
                    </li>
                    <li>
                        <Link to='/operative-list'>Operative List</Link>
                    </li> 
                    <li>
                        <button className="btn grey" onClick={()=>changeAuth(false)}>Sign Out</button>
                 </li>
                 </Fragment>
            );
        }
        return( <li><button  className="btn grey" onClick={()=> changeAuth(true)}>Sign In</button></li>);
    }
    render(){
        return(
            <nav style={{padding: '0 2%'}} className="blue-grey">
                <div className="nav-wrapper">
                    <Link style={{marginLeft:'2%'}} to='/' className="brand-logo">CIA DATA</Link>
                    <ul className="right">
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    {this.renderLinks()}
                    </ul>
                </div>
            </nav>
        )
    }
}

function mapStateToProps(state){
    return{
        auth: state.user.auth
    }
}


export default connect(mapStateToProps, {changeAuth})(Nav);