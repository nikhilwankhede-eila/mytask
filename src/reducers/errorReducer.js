import { FETCH_ERROR } from '../actions/types'

const initialState = null

export default (state = initialState, action) => {
    switch (action.type) {

        case FETCH_ERROR :
            console.log(action.payload)
            return  state,
                    action.payload
               
        default :
            return state    
    }
};