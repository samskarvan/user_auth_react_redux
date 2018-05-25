import React, {Component} from 'react';
import {getMovieQuote} from '../actions';
import {connect} from 'react-redux';

class MovieQuote extends Component{
    componentDidMount(){
        this.props.getMovieQuote();
    }
    render(){
        const {quote} = this.props
        return(
           <div className="center">
               <h1>Movie Quote</h1>
               <h3>{quote}</h3>
           </div> 
        )
    }
}


function mstp(state){
    return{
        quote: state.movie.quote
    }
}
export default connect(mstp, {getMovieQuote})(MovieQuote);