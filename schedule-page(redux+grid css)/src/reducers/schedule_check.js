import * as types from '../actions/ActionTypes';

const initialState = {
  selected_id: -1,
  percent: 0,
  status: "",
  schedule_info: [
    {
      id: 0,
      checked_: 0,
      clicked: 0,
      date_str: '3 Aug',
      to_do: 'Staging',
      day_str: 'Friday'
    },
    {
      id: 1,
      checked_: 0,
      clicked: 0,
      date_str: '5 Aug',
      to_do: 'Photo Shoot',
      day_str: 'Sunday'
    },
    {
      id: 2,
      checked_: 0,
      clicked: 0,
      date_str: '10 Aug',
      to_do: 'Listing Date',
      day_str: 'Sunday'
    },
    {
      id: 3,
      checked_: 0,
      clicked: 0,
      date_str: '15 Aug',
      to_do: 'OpenHouse',
      day_str: 'Sunday'
    },
    {
      id: 4,
      checked_: 0,
      clicked: 0,
      date_str: '5 Aug',
      to_do: 'Offer Accepted',
      day_str: 'Sunday'
    },
    {
      id: 5,
      checked_: 0,
      clicked: 0,
      date_str: '5 Aug',
      to_do: 'Inspections Deadline',
      day_str: 'Sunday'
    },
    {
      id: 6,
      checked_: 0,
      clicked: 0,
      date_str: '5 Aug',
      to_do: 'Reply to Inspections Deadline',
      day_str: 'Sunday'
    },
    {
      id: 7,
      checked_: 0,
      clicked: 0,
      date_str: '5 Aug',
      to_do: 'Loan Deadline',
      day_str: 'Sunday'
    },
    {
      id: 8,
      checked_: 0,
      clicked: 0,
      date_str: '5 Aug',
      to_do: 'Estimated Closing Day',
      day_str: 'Sunday'
    },
  ]
};

export default function scheduleCheck(state = initialState, action) {

  switch (action.type) {
    case types.SELECT_ITEM:
      const percent = Math.floor(100 * (action.selected_id+1) / state.schedule_info.length);
      let status = ""
      if (percent === state.percent)
        status = "You clicked the same Percentage";
      else if (percent < state.percent)
        status = "You clicked a lower Percentage";
      else
        status = "You clicked a greater Percentage";

      return {
        selected_id: action.selected_id,
        schedule_info: state.schedule_info.map(function (el) {
          return { ...el, clicked: (el.id === action.selected_id ? 1 : 0), checked_: el.id <= action.selected_id ? 1 : 0 };
        }),
        percent: percent,
        status: status
      }
    default:
      return state;
  }
}