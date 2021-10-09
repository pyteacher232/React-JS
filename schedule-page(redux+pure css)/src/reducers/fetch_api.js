import * as types from '../actions/ActionTypes';

const initialState = {
    pending: false,
    error: null,
    items: []
}

export default function fetchAPI(state = initialState, action) {
    switch (action.type) {
        case types.FETCH_API_PENDING:
            return {
                ...state,
                pending: true
            }
        case types.FETCH_API_SUCCESS:
            return {
                ...state,
                pending: false,
                items: action.items
            }
        case types.FETCH_API_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default:
            return state;
    }
}
