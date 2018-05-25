import React from 'react';
import {Route} from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import Home from './home';
import Nav from './nav';
import About from './about';
import SecretDoc from './secret_doc';
import OpList from './operative_list';
import SignUp from './sign_up';
import SignIn from './sign_in';
import auth from '../hoc/auth';
import redirect from '../hoc/redirect';
import MovieQuote from './movie_quote';


const App = () => (
    <div>
           <Nav/>
           <div className="container">
            <Route exact path='/' component = {Home}/>
            <Route path ='/about' component = {About}/>
            <Route path ='/secret-doc' component = {auth(SecretDoc)}/>
            <Route path ='/operative-list' component = {OpList}/>
            <Route path='/sign-up' component={redirect(SignUp, '/movie-quote')}/>
            <Route path='/sign-in' component={redirect(SignIn, '/movie-quote')}/>
            <Route path='/movie-quote' component={auth(MovieQuote)}/>
        </div>
    </div>
);

export default App;
