import * as types from '../actions/ActionTypes';

const initialState = {
    is_loaded: false,
    error: null,
    items: []
}

export default function fetchAPI(state = initialState, action) {
    console.log("fetchAPI => ", action);
    switch (action.type) {
        case types.DISPLAY_API_DATA:
            return {
                is_loaded: action.is_loaded,
                error: action.error,
                items: action.items,
            }
        
        default:
            return state;
    }
}
