import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import './css/NextPage.css';

class NextPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            error: null,
            is_loaded: false,
            items: []
        };
    }

    componentDidMount() {
        console.log('componentDidMount');
        fetch("https://api.publicapis.org/entries")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result.entries.slice(1, 10));
                    this.setState({
                        is_loaded: true,
                        items: result.entries.slice(1, 10)
                    });
                },
               
                (error) => {
                    this.setState({
                        is_loaded: true,
                        error
                    });
                }
            )
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(this.state);
        const { is_loaded } = this.state;

        // if (is_loaded) {
        //     this.setState({
        //         is_loaded: false,
        //     });
        // }
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
        const { data } = this.props.location;
        const { is_loaded, error, items } = this.state;

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

export default withRouter(NextPage);