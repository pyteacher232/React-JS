import './css/App.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import ScheduleList from './ScheduleList';

export default class App extends Component {
  state = {
    clicked: 0,
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
  }

  handleSelect = (id) => {
    const { schedule_info } = this.state;
    this.setState(
      {
        clicked: 1,
        schedule_info: schedule_info.map(function (el) {
          return { ...el, clicked: (el.id === id ? 1 : 0), checked_: el.id <= id ? 1 : 0 };
        }),
        percent: Math.floor(100 * id / schedule_info.length)

      }
    )
  }

  componentDidUpdate(prevProps, prevState) {
    const { clicked, percent } = this.state;

    if (clicked) {
      this.setState({
        clicked: 0,
      })
      if (percent === prevState.percent) {
        this.setState({
          status: 'You clicked the same Percentage',
        })
      }
      else if (percent < prevState.percent) {
        this.setState({
          status: 'You clicked a lower Percentage'
        })
      }

      else {
        this.setState({
          status: 'You clicked a greater Percentage'
        })
      }

    }

  }

  render() {

    console.log(this.props.history);
    return (
      <div>
        <Header
          percent={this.state.percent}
          status={this.state.status}
        />
        <ScheduleList
          data={this.state.schedule_info}
          onSelect={this.handleSelect}
        />
      </div>
    )
  }

}
