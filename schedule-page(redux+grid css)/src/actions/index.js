import * as types from './ActionTypes';


export function selectItem(selected_id){
    return {
      type: types.SELECT_ITEM,
      selected_id
    };
}

export function displayAPIDATA(is_loaded, error, items){
  console.log("displayAPIDATA => ", items);
  return {
    type: types.DISPLAY_API_DATA,
    is_loaded, error, items
  }
}
