import { ADD_PAGE, PAGE_ZERO } from '../actions/types'

export default (state = 0, action) => {

    switch (action.type) {

        case ADD_PAGE :
            return state + 1;

        case PAGE_ZERO :
            return state = 0;
            
        default :
            return state    
    }
};