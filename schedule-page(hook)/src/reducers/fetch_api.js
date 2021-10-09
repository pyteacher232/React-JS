import * as types from '../actions/ActionTypes';

export const initialFetchAPI = {
    is_loaded: false,
    error: null,
    items: []
};

export const fetchAPIReducer = (state, action) => {
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
};