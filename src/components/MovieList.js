import React from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';

import { connect } from 'react-redux';

import { fetchMovies } from '../actions/fetchActions'

const MovieList = ({fetchMovies, movies, viewMovieInfo, error}) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col s12">
                    
                <InfiniteScroll dataLength = {movies.length}
                        next = {fetchMovies}
                        hasMore = {true}
                        loader={<h4 style={{ textAlign: "center" }}>Loading...</h4>}
                    >
                        {movies.map((movie) => (
                                <div key = {movie.id} className = "col s12 m6 l3">
                                    <div className="card" >
                                        <div className="card-image waves-effect waves-block waves-light">
                                            {
                                                movie.poster_path == null ? <img src={`https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`} alt="card image"
                                                style = {{width:"100%", height :300}} /> :
                                                <img src = {`http://image.tmdb.org/t/p/w185${movie.poster_path}`}
                                                alt = "card image" style = {{width: "100%", height:300}}
                                                />  
                                            }   
                                        </div>   
                                        <div>
                                        <p style = {{textAlign:"center", fontWeight : "bold"}} > Rating : {movie.vote_average}</p>
                                        </div> 
                                        
                                        <div className="card-content details">
                                            <p><a className = "detail" href="#" onClick = {() => viewMovieInfo(movie.id)}>More Info</a></p>
                                        </div>
                                    </div>   
                                </div>
                            ))
                        }
                    </InfiniteScroll >        
                </div>
            </div>
        </div>
    )                 
}
const mapStateToProps = state => ({
    movies : state.movie,
    error : state.error
  }); 
  
export default connect(mapStateToProps, { fetchMovies })(MovieList);

