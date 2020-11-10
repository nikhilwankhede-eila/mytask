import { FETCH_MOVIES, FETCH_MOVIE } from '../actions/types'

const initialState = []

export default (state = initialState, action) => {
    switch (action.type) {

        case FETCH_MOVIE :
            return state,
                   action.payload

        case FETCH_MOVIES :
            return  [...state, ...action.payload]
            
        default :
            return state    
    }
};