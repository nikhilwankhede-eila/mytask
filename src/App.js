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

const App = ({ movies, page, fetchMovies, setPage, error }) => {

  const [searchFor, setSearchFor] = useState('')
  const [currentMovie, setCurrentMovie] = useState(null)

  /*const pageNo = Number(page)
  console.log(page)
  console.log(typeof page)
  console.log(typeof pageNo)
  */
  //Display Movies when Components Load 
  useEffect(() => { 
    fetchMovies(searchFor, page);
    // eslint-disable-next-line  
  }, []);

  //Display Searched movies
  const handleSubmit = (e) => {
    e.preventDefault();
    if(searchFor) {
      fetchMovies(searchFor, page);
    }  
  };

  //Set SearchFor
  const onChange = (e) => {
    setSearchFor(e.target.value)
    setPage()   
  }

  //To set Current Movie
  const viewMovieInfo = (id) => {
    const filteredMovie = movies.filter(movie => movie.id ===id)
    const newCurrentMovie = filteredMovie.length > 0 ? filteredMovie[0] : null
    setCurrentMovie(newCurrentMovie)
    console.log(currentMovie)
  }

  //Go back from MovieInfo
  const closeMovieInfo = () => {
      setCurrentMovie(null)
  }

  return  (
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
};

App.propTypes = {
  fetchMovies: PropTypes.func.isRequired,
  movies : PropTypes.array.isRequired,
  setPage : PropTypes.func.isRequired,
  page : PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  movies : state.movie,
  page : state.page,
  error : state.error
}); 

export default connect(mapStateToProps, { fetchMovies, setPage })(App);
