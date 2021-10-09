import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {bindActionCreators} from 'redux';
import { connect, useDispatch } from 'react-redux';
import * as actions from '../actions';


function fetchAPI() {
    return dispatch => {
        dispatch(actions.fetchApiPending());
        fetch('https://api.publicapis.org/entries')
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    throw (res.error);
                }
                dispatch(actions.fetchApiSuccess(res.entries.slice(1, 10)));
                return res.products;
            })
            .catch(error => {
                dispatch(actions.fetchApiError(error));
            })
    }
}

const defaultProps = {

};


class NextPage extends Component {
    constructor(props) {
        super(props);

        this.renderContentFromAPI = this.renderContentFromAPI.bind(this);
    }

    componentDidMount() {
        // console.log('componentDidMount', this.props);

        // fetch("https://api.publicapis.org/entries")
        //     .then(res => res.json())
        //     .then(
        //         (result) => {
        //             console.log(result.entries.slice(1, 10));

        //             this.props.handleDisplayAPIDATA(true, null, result.entries.slice(1, 10));
        //         },
        //         // Note: it's important to handle errors here
        //         // instead of a catch() block so that we don't swallow
        //         // exceptions from actual bugs in components.
        //         (error) => {
        //             this.props.handleDisplayAPIDATA(true, error, []);
        //         }
        //     )

    }

    componentWillMount() {
        console.log('componentWillMount', this.props);
        const { handleFetchAPI } = this.props;
        handleFetchAPI();
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
            return <div>Error: {error.message}</div>;
        } else if (!is_loaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <ul>
                    {items.map(item => (
                        <li >
                            <div>{item.API}</div>
                            <div>{item.Description}</div>
                        </li>
                    ))}
                </ul>
            );
        }
    }

    render() {
        console.log("NextPage = > ", this.props);
        // const { data } = this.props.location;
        const { is_loaded, error, items } = this.props;

        return (
            <div>
                <div>
                    <Link to='/'>
                        <button>Previous Page</button>
                    </Link>
                </div>
                <div>
                    {this.props.percent} % Completed
                </div>
                <div>
                    {this.props.status}
                </div>
                <div>
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
        pending: state.fetchAPI.is_loaded,
        error: state.fetchAPI.error,
        items: state.fetchAPI.items,
    };
}

const mapDispatchToProps = (dispatch) => {
    // return {
        // handleFetchApiPending: () => { dispatch(actions.fetchApiPending()) },
        // handleFetchApiSuccess: (items) => { dispatch(actions.fetchApiSuccess(items)) },
        // handleFetchApiError: (error) => { dispatch(actions.fetchApiError(error)) },
        
    // }
    return bindActionCreators({handleFetchAPI: fetchAPI}, dispatch);
}

// const mapDispatchToProps = dispatch => bindActionCreators({fetchAPI: fetchAPI}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(NextPage);