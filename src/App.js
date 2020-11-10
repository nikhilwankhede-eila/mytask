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
import { setPage } from './actions/pageActions'


const App = ({ movies, page, fetchMovies, setPage }) => {

  const [searchFor, setSearchFor] = useState('')
  //const [allPage, setAllPage] = useState(0)
  const [currentMovie, setCurrentMovie] = useState(null)

  //useEffect

  useEffect(() => { 
    fetchMovies(searchFor, page);
    // eslint-disable-next-line  
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(searchFor) {
      fetchMovies(searchFor, page);
      /*nextPage()*/
    }  
  };

  const onChange = (e) => {
    setSearchFor(e.target.value)
    setPage() 
    //setAllPage(0)  
  }

  const viewMovieInfo = (id) => {
    const filteredMovie = movies.filter(movie => movie.id ===id)
    const newCurrentMovie = filteredMovie.length > 0 ? filteredMovie[0] : null
    setCurrentMovie(newCurrentMovie)
    console.log(currentMovie)
  }

  const closeMovieInfo = () => {
      setCurrentMovie(null)
  }

  return (
            <Provider store = {store}>
              <div className="App">
                <Navbar /> 
                <br />
                {currentMovie == null ? 
                  <div> 
                    <Search handleSubmit = {handleSubmit} onChange = {onChange} /> 
                    <MovieList  searchFor = {searchFor}  viewMovieInfo = {viewMovieInfo}  />  
                  </div> :           
                  <MovieInfo closeMovieInfo = {closeMovieInfo} currentMovie = {currentMovie}/>}                    
                <br/>
              </div>
            </Provider>             
      )  
}

App.propTypes = {
  fetchMovies: PropTypes.func.isRequired,
  movies : PropTypes.array.isRequired
};


const mapStateToProps = state => ({
  movies : state.movie,
  page : state.page
}); 

export default connect(mapStateToProps, { fetchMovies, setPage })(App);
