import './css/ScheduleItem.css';

import React, { Component } from 'react';


const defaultProps = {
    info: [],
}

class ScheduleItem extends Component {
    constructor(props) {
        super(props);
        this.changeCheckboxStyle = this.changeCheckboxStyle.bind(this);
        this.changeScheduleDateStyle = this.changeScheduleDateStyle.bind(this);
        this.changeProgressLine = this.changeProgressLine.bind(this);
    }

    handleSelect = () => {
        const { info, onSelect } = this.props;
        onSelect(info.id);
    }

    changeCheckboxStyle = (checked_) => {
        return checked_ ? { backgroundColor: "#0091ff", borderColor: "#0091ff" } : { backgroundColor: "#aaaaaa", borderColor: "#aaaaaa" };
    }

    changeScheduleDateStyle = (checked_) =>  {
        return checked_ ? { backgroundColor: "#0091ff", color: "white" } : { backgroundColor: "white", color: "black" };
    }

    changeProgressLine = (checked_, clicked) =>  {
        let s = {};
        if(clicked) {
            s = { backgroundColor: "#0091ff"}
        }
        else if(checked_){
            s = {backgroundColor: "#0091ff"}
        }
        else {
            s = { backgroundColor: "#aaaaaa"};
        }

        return s;
    }

    render() {
        const {
            id, checked_, clicked, date_str, to_do, day_str
        } = this.props.info;

        

        return (
            <React.Fragment>
                <div role="button" className="round" onClick={this.handleSelect}>
                    <input type="checkbox" onClick="return false;" checked />
                    <label for="checkbox" style={this.changeCheckboxStyle(checked_)}></label>
                    <div className="progress-line" id={id} style={this.changeProgressLine(checked_, clicked)}></div>
                </div>
                <div role="button" className="schedule-date" onClick={this.handleSelect} style={this.changeScheduleDateStyle(checked_)}>
                    <div>{date_str.split(" ")[0]}</div>
                    <div>{date_str.split(" ")[1]}</div>
                </div>
                <div role="button" className="schedule-info" onClick={this.handleSelect}>
                    <div>{to_do}</div>
                    <div style={clicked ? { color: "#4eb1fd" } : { color: "#aaaaaa" }}>{day_str}</div>
                </div>
            </React.Fragment>

        )
    }
}

ScheduleItem.defaultProps = defaultProps;
export default ScheduleItem;