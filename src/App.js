import React from 'react'
import './App.css';
import Navbar from './components/Navbar'
import Search from './components/Search'
import MovieList from './components/MovieList'
import MovieInfo from './components/MovieInfo'

import {store} from './index'
import { Provider } from 'react-redux'

import PropTypes from 'prop-types'

import { useState, useEffect } from 'react'
import { connect } from 'react-redux';

import { fetchMovies } from './actions/fetchActions'

const App = ({ movies : {movies}, fetchMovies }) => {

  const [searchFor, setSearchFor] = useState('')
  const [allPage, setAllPage] = useState(0)
  const [currentMovie, setCurrentMovie] = useState(null)

  //useEffect

  useEffect(() => { 
    fetchMovies(searchFor, allPage);
    setAllPage(allPage + 1)
    console.log(allPage)
    // eslint-disable-next-line  
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(searchFor) {
      console.log(searchFor)
      fetchMovies(searchFor, allPage);
      setAllPage(allPage + 1)
      /*nextPage()*/
    }  
  };

  const onChange = (e) => {
    setSearchFor(e.target.value) 
    setAllPage(0)
  }

  const viewMovieInfo = (id) => {
    const filteredMovie = movies.filter(movie => movie.id ===id)
    const newCurrentMovie = filteredMovie.length > 0 ? filteredMovie[0] : null
    setCurrentMovie(newCurrentMovie)
  }

  const closeMovieInfo = () => {
      setCurrentMovie(null)
  }

  return (
        
            <div className="App">
              <Navbar /> 
              <br />
              {currentMovie == null ? 
                <div> 
                  <Search handleSubmit = {handleSubmit} onChange = {onChange} /> 
                  <MovieList /*movies = {movies}*/ searchFor = {searchFor} allPage = {allPage} viewMovieInfo = {viewMovieInfo} /*fetchMovies = {fetchMovies}*/ />  
                </div> :           
                <MovieInfo closeMovieInfo = {closeMovieInfo} currentMovie = {currentMovie}/>}                    
              <br/>
            </div>
             
      )  
}

App.propTypes = {
  fetchMovies: PropTypes.func.isRequired,
  movies : PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  movies : state.movie
}); 

export default connect(mapStateToProps, { fetchMovies })(App);
