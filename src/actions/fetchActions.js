import { FETCH_MOVIES, FETCH_MOVIE, ADD_PAGE, FETCH_ERROR } from './types'

export const fetchMovies = (searchFor, page) => async dispatch => {
    
    try {
        if (!searchFor) {
            page = Number(page)
            const res = await fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=b4541729378510982ba7490b1bf63950&page=${page+1}`)
            const data = await res.json();
            if (page === 0) {

                dispatch({
                    type : FETCH_MOVIE,
                    payload : data.results
                })
                
                dispatch({
                    type : ADD_PAGE
                })
            }

            else {
                dispatch({
                    type : FETCH_MOVIES,
                    payload : data.results
                })

                dispatch({
                    type : ADD_PAGE
                })
            }
        }

        else {
            page = Number(page)
            const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=b4541729378510982ba7490b1bf63950&query=${searchFor}&page=${Number(page+1)}`)
            const data = await res.json();
    
            if (page === 0) {
                dispatch({
                    type : FETCH_MOVIE,
                    payload : data.results
                })
                dispatch({
                    type : ADD_PAGE
                })
            }

            else {
                dispatch({
                    type : FETCH_MOVIES,
                    payload : data.results
                })
                dispatch({
                    type : ADD_PAGE
                })
            }
        }
    }
    catch (err) {
        dispatch({
                type : FETCH_ERROR,
                payload : err.message
            });
        alert(err.message)    
    };   
}

/*
export const fetchMovies = (searchFor, page) => dispatch => {
    if (!searchFor) {

        fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=b4541729378510982ba7490b1bf63950&page=${page+1}`)
        .then(res => res.json())
        .then(data => {
            if (page === 0) {

                dispatch({
                    type : FETCH_MOVIE,
                    payload : data.results
                })
                
                dispatch({
                    type : ADD_PAGE
                })
            }

            else {
                dispatch({
                    type : FETCH_MOVIES,
                    payload : data.results
                })

                dispatch({
                    type : ADD_PAGE
                })
            }
        }       
        );
    }    

    else {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=b4541729378510982ba7490b1bf63950&query=${searchFor}&page=${page+1}`)
        .then(res => res.json())
        .then(data => {
            if (page === 0) {
                dispatch({
                    type : FETCH_MOVIE,
                    payload : data.results
                })
                dispatch({
                    type : ADD_PAGE
                })
            }

            else {
                dispatch({
                    type : FETCH_MOVIES,
                    payload : data.results
                })
                dispatch({
                    type : ADD_PAGE
                })
            }
        }      
        );
    }
}

*/
    




