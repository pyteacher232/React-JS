import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import ScheduleList from './ScheduleList';
import {connect} from 'react-redux';
import * as actions from '../actions';


const defaultProps = {

};

class App extends Component {

  componentDidUpdate(prevProps, prevState) {
  }

  render() {
    return (
      <div>
        <div>
          <Link
            to={{
              pathname: "/next",
            }}
          >
            <button>Next Page</button>
          </Link>
        </div>
        <Header
          percent={this.props.percent}
          status={this.props.status}
        />
        <ScheduleList
          data={this.props.schedule_info}
          onSelect={this.props.handleSelectItem}
        />
      </div>
    )
  }

}

App.defaultProps = defaultProps;

const mapStateToProps = (state) => {
  return {
    selected_id: state.scheduleCheck.selected_id,
    percent: state.scheduleCheck.percent,
    status: state.scheduleCheck.status,
    schedule_info: state.scheduleCheck.schedule_info, 
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSelectItem: (selected_id) => {dispatch(actions.selectItem(selected_id))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (App);
