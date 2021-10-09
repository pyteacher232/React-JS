// import './ScheduleItem.css';

import React, { Component } from 'react';

export default class ScheduleItem extends Component {
    static defaultProps = {
        info: {
            id: 0,
            checked_: 0,
            clicked: 0,
            date_str: '3 Aug',
            to_do: 'Staging',
            day_str: 'Friday'
        }
    }

    handleSelect = (id) => {
        const {info, onSelect} = this.props;
        onSelect(info.id);
    }

    
    render() {
        const {
            date_str, to_do, day_str
        } = this.props.info;

        return (
            <div role="button" onClick={this.handleSelect}>
                <input type="checkbox" className="checkbox-round"  checked={this.props.info.checked_}/>
                <div style={this.props.info.clicked ? { backgroundColor: "blue", color: "white" } : { backgroundColor: "white", color: "black" }}>{date_str}</div>
                <div>{to_do}</div>
                <div style={this.props.info.clicked ? { color: "blue" } : { color: "black" }}>{day_str}</div>
            </div>
        )
    }
}