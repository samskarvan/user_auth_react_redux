import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Nav extends Component{
    render(){
        return(
            <nav>
                <div className="nav-wrapper">
                    <Link style={{marginLeft:'2%'}} to='/' className="brand-logo">CIA DATA</Link>
                    <ul className="right">
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <Link to='/secret-doc'>Secret Doc</Link>
                    </li>
                    <li>
                        <Link to='/operative-list'>Operative List</Link>
                    </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Nav;