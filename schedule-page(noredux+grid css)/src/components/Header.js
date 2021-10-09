// file: src/components/Header.js

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './css/Header.css';

const defaultProps = {
    percent: 0,
    status: '',
}

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="header-1">
                    <div className="full-address-box">
                        <div className="house-icon">
                            <img src="images/location.png" alt="" />
                        </div>
                        <div className="full-address-info">
                            <div>
                                123, Main Street
                            </div>
                            <div>
                                Springfield, CA
                            </div>
                        </div>
                    </div>
                    <div className="update-info-box">
                        <div>
                            Closing Timeline by Alice King<br />Last updated 10/1/2017
                        </div>
                    </div>
                </div>
                <div className="header-2">
                    <div className="completed">
                        <div>
                            {this.props.percent} %  <br />Completed
                        </div>
                        <div>
                            <strong> {this.props.status} </strong>
                        </div>
                    </div>
                    <div className="header-2-info">
                        <div>30 days to closing</div>
                        <div>Inspection deadline coming up in 6 days</div>
                        <div className="agent-name">
                            <div></div>
                            <div>Agent Name</div>
                        </div>
                    </div>
                    <div>
                        <Link
                            to={{
                                pathname: "/next",
                            }}
                        >
                            <button className="next-btn">Next Page</button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

Header.defaultProps = defaultProps;
export default Header;