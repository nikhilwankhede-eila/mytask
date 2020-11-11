import { combineReducers } from 'redux'
import movieReducer from './movieReducer'
import pageReducer from './pageReducer';
import errorReducer from './errorReducer'

export default combineReducers({
    movie : movieReducer,
    page : pageReducer,
    error : errorReducer
});