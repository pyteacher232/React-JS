import React from 'react';

import './css/ScheduleItem.css';

export const ScheduleItem = (props) => {
    const {
        id, checked_, clicked, date_str, to_do, day_str
    } = props.info;

    const handleSelect = () => {
        const { info, onSelect } = props;
        onSelect(info.id);
    }

    const changeCheckboxStyle = () => {
        return checked_ ? { backgroundColor: "#0091ff", borderColor: "#0091ff" } : { backgroundColor: "#aaaaaa", borderColor: "#aaaaaa" };
    }

    const changeScheduleDateStyle = () =>  {
        return checked_ ? { backgroundColor: "#0091ff", color: "white" } : { backgroundColor: "white", color: "black" };
    }

    const changeProgressLine = () =>  {
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

    return (
        <React.Fragment>
            <div role="button" className="round" onClick={handleSelect}>
                <input type="checkbox" onClick="return false;" checked />
                <label for="checkbox" style={changeCheckboxStyle()}></label>
                <div className="progress-line" id={id} style={changeProgressLine()}></div>
            </div>
            <div role="button" className="schedule-date" onClick={handleSelect} style={changeScheduleDateStyle()}>
                <div>{date_str.split(" ")[0]}</div>
                <div>{date_str.split(" ")[1]}</div>
            </div>
            <div role="button" className="schedule-info" onClick={handleSelect}>
                <div>{to_do}</div>
                <div style={clicked ? { color: "#4eb1fd" } : { color: "#aaaaaa" }}>{day_str}</div>
            </div>
        </React.Fragment>

    )
}