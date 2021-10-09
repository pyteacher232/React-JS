import React, { useReducer } from 'react';
import Header from './Header';
import {ScheduleList} from './ScheduleList';
import * as actions from '../actions';
import { scheduleCheckReducer, initialScheduleCheck} from '../reducers/schedule_check';

import './css/App.css';

export const App = () => {
  const [reducer, dispatch] = useReducer(scheduleCheckReducer, initialScheduleCheck);

  const handleSelectItem = (selected_id) => {
    dispatch(actions.selectItem(selected_id));
  }

  return (
    <div>
      <Header
        percent={reducer.percent}
        status={reducer.status}
      />
      <ScheduleList
        data={reducer.schedule_info}
        onSelect={handleSelectItem}
      />
    </div>
  )
}


