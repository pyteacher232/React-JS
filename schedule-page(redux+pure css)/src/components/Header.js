// file: src/components/Header.js

import React, { Component } from 'react';

const defaultProps = {
    percent: 0,
    status: '',
}

class Header extends Component {
    render() {
        return (
            <div>

                <div className="headline">
                    <div className="item">
                        <div>
                            123, Main Street
                        </div>
                        <div>
                            Springfield, CA
                        </div>
                    </div>
                    <div className="item">
                        <div>
                            Closing Timeline by Alice King
                        </div>
                        <div>
                            Last updated 10/1/2017
                        </div>
                    </div>
                </div>
                <div className="main-headline">
                    <div>
                        {this.props.percent} % Completed
                    </div>
                    <div>
                        {this.props.status}
                    </div>
                    <div>
                        <h1>30 days to closing</h1>
                        <div>Inspection deadline coming up in 6 days</div>
                        <div>Agent Name</div>
                    </div>
                </div>
            </div>
        );
    }
}

Header.defaultProps = defaultProps;
export default Header;