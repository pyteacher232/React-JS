import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import * as actions from '../actions';

import './css/NextPage.css';

const defaultProps = {

};


class NextPage extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log('componentDidMount', this.props);
        // set to true
        setTimeout(() => {
            fetch("https://api.publicapis.org/entries")
                .then(res => res.json())
                .then(
                    (result) => {
                        console.log(result.entries.slice(1, 10));

                        this.props.handleDisplayAPIDATA(true, null, result.entries.slice(1, 10));
                    },
                    // Note: it's important to handle errors here
                    // instead of a catch() block so that we don't swallow
                    // exceptions from actual bugs in components.
                    (error) => {
                        this.props.handleDisplayAPIDATA(true, error, []);
                    }
                )
        }, 5000);



    }

    componentDidUpdate(prevProps, prevState) {
        console.log("[componentDidUpdate] => ", this.props);
    }


    renderContentOfPreviousPage(data) {
        if (data) {
            return (
                <div>
                    {data.percent}% Completed
                </div>
            )
        }
        else {
            return (
                <div>
                </div>
            )
        }

    }

    renderContentFromAPI(is_loaded, error, items) {
        if (error) {
            return <div className="result-item error">Error: {error.message}</div>;
        } else if (!is_loaded) {
            return <div className="result-item loading">Loading...</div>;
        } else {
            return (
                <React.Fragment>
                    {items.map(item => (
                        <React.Fragment>
                            <div className="result-item api">{item.API}</div>
                            <div className="result-item desc">{item.Description}</div>
                        </React.Fragment>
                    ))}
                </React.Fragment>
            );
        }
    }

    render() {
        const { is_loaded, error, items } = this.props;

        return (
            <div>
                <div>
                    <Link to='/'>
                        <button className="prev-btn">Previous Page</button>
                    </Link>
                </div>
                <div className="content-from-prev-page">
                    <div className="prev-completed">
                        {this.props.percent} % Completed
                    </div>
                    <div className="prev-status">
                        {this.props.status}
                    </div>
                    {this.renderContentFromAPI(is_loaded, error, items)}
                </div>
            </div>
        )

    }
}

NextPage.defaultProps = defaultProps;

const mapStateToProps = (state) => {
    return {
        percent: state.scheduleCheck.percent,
        status: state.scheduleCheck.status,
        is_loaded: state.fetchAPI.is_loaded,
        error: state.fetchAPI.error,
        items: state.fetchAPI.items,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleDisplayAPIDATA: (is_loaded, error, items) => {
            console.log("mapDispatchToProps => ", items);
            dispatch(actions.displayAPIDATA(is_loaded, error, items))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NextPage);