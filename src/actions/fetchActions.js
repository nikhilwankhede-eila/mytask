import { FETCH_MOVIES, FETCH_MOVIE} from './types'

export const fetchMovies = (searchFor, allPage) => dispatch => {
    if (!searchFor) {

        fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=b4541729378510982ba7490b1bf63950&page=${allPage+1}`)
        .then(res => res.json())
        .then(data => {
            if (allPage === 0) {
                dispatch({
                    type : FETCH_MOVIE,
                    payload : data.results
                })    
            }

            else {
                dispatch({
                    type : FETCH_MOVIES,
                    payload : data.results
                })
            }
        }
           
        );
    }    

    else {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=b4541729378510982ba7490b1bf63950&query=${searchFor}&page=${allPage+1}`)
        .then(res => res.json())
        .then(data => {
            if (allPage === 0) {
                dispatch({
                    type : FETCH_MOVIE,
                    payload : data.results
                })
            }

            else {
                dispatch({
                    type : FETCH_MOVIES,
                    payload : data.results
                })
            }
        }      
        );
    }
        
}
    


/*
export const fetchMovies = (searchFor, allPage) => async dispatch => {
    try {
        const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=b4541729378510982ba7490b1bf63950&query=${searchFor}&page=${allPage+1}`);
        const data = await res.json();
        dispatch({
            type : FETCH_MOVIES,
            payload : data.results
        })
    } catch (err) {
        dispatch({
            type : FETCH_ERROR,
            payload : err.response.data
        });
    };
};

*/


