// import './ScheduleItem.css';

import React, { Component } from 'react';


const defaultProps = {
    info: [],
}

class ScheduleItem extends Component {
    handleSelect = () => {
        const {info, onSelect} = this.props;
        onSelect(info.id);
    }

    render() {
        const {
            checked_, clicked, date_str, to_do, day_str
        } = this.props.info;

        return (
            <div role="button" onClick={this.handleSelect}>
                <input type="checkbox" className="checkbox-round"  checked={checked_} onClick={this.handleSelect} readOnly/>
                <div style={clicked ? { backgroundColor: "blue", color: "white" } : { backgroundColor: "white", color: "black" }}>{date_str}</div>
                <div>{to_do}</div>
                <div style={clicked ? { color: "blue" } : { color: "black" }}>{day_str}</div>
            </div>
        )
    }
}

ScheduleItem.defaultProps = defaultProps;
export default ScheduleItem;