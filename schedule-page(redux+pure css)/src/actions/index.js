import * as types from './ActionTypes';


export function selectItem(selected_id){
    return {
      type: types.SELECT_ITEM,
      selected_id
    };
}

export function fetchApiPending(){
  return {
    type: types.FETCH_API_PENDING
  }
}

export function fetchApiSuccess(items){
  return {
    type: types.FETCH_API_SUCCESS,
    items
  }
}

export function fetchApiError(error){
  return {
    type: types.FETCH_API_ERROR,
    error
  }
}
