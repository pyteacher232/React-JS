import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

class NextPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        console.log('componentDidMount');
        fetch("https://api.publicapis.org/entries")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.entries.slice(1, 10)
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(this.state);
        const { isLoaded } = this.state;

        // if (isLoaded) {
        //     this.setState({
        //         isLoaded: false,
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

    renderContentFromAPI(isLoaded, error, items) {
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
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
        const { data } = this.props.location;
        const { isLoaded, error, items } = this.state;

        return (
            <div>
                <div>
                    <Link to='/'>
                        <button>Previous Page</button>
                    </Link>
                </div>
                <div>
                    {this.renderContentOfPreviousPage(data)}
                </div>
                <div>
                    {this.renderContentFromAPI(isLoaded, error, items)}
                </div>
            </div>
        )




    }
}

export default withRouter(NextPage);