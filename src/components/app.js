import React from 'react';
import {Route} from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import Home from './home';
import Nav from './nav';
import About from './about';
import SecretDoc from './secret_doc';
import OpList from './operative_list';


const App = () => (
    <div>
           <Nav/>
           <div className="container">
            <Route exact path='/' component = {Home}/>
            <Route path ='/about' component = {About}/>
            <Route path ='/secret-doc' component = {SecretDoc}/>
            <Route path ='/operative-list' component = {OpList}/>
        </div>
    </div>
);

export default App;
