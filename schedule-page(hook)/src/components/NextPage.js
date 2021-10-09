import React, { useEffect, useReducer} from 'react';
import { Link } from 'react-router-dom';
import * as actions from '../actions';
import { fetchAPIReducer, initialFetchAPI} from '../reducers/fetch_api';
import { scheduleCheckReducer, initialScheduleCheck} from '../reducers/schedule_check';

import './css/NextPage.css';

export const NextPage = () => {
    const [reducer, dispatch] = useReducer(fetchAPIReducer, initialFetchAPI);

    useEffect(() => {

        if(!reducer.is_loaded){
             fetch("https://api.publicapis.org/entries")
                .then(res => res.json())
                .then(
                    (result) => {
                        console.log(result.entries.slice(1, 10));
                        dispatch(actions.displayAPIDATA(true, null, result.entries.slice(1, 10)));

                    },
                    // Note: it's important to handle errors here
                    // instead of a catch() block so that we don't swallow
                    // exceptions from actual bugs in components.
                    (error) => {
                        // this.props.handleDisplayAPIDATA(true, error, []);
                        dispatch(actions.displayAPIDATA(true, error, []));
                    }
                )
        }
       
    })

    const renderContentFromAPI = () => {
        if (reducer.error) {
            return <div className="result-item error">Error: {reducer.error.message}</div>;
        } else if (!reducer.is_loaded) {
            return <div className="result-item loading">Loading...</div>;
        } else {
            return (
                <React.Fragment>
                    {reducer.items.map(item => (
                        <React.Fragment>
                            <div className="result-item api">{item.API}</div>
                            <div className="result-item desc">{item.Description}</div>
                        </React.Fragment>
                    ))}
                </React.Fragment>
            );
        }
    };

    return (
        <div>
            <div>
                <Link to='/'>
                    <button className="prev-btn">Previous Page</button>
                </Link>
            </div>
            <div className="content-from-prev-page">
                <div className="prev-completed">
                    {reducer.percent} % Completed
                </div>
                <div className="prev-status">
                    {reducer.status}
                </div>
                {renderContentFromAPI()}
            </div>
        </div>
    )
}