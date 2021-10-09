import React from 'react';
import {ScheduleItem} from './ScheduleItem';
import './css/ScheduleList.css';

export const ScheduleList = (props) => {
    return (
        <React.Fragment>
            <div className="main-content">
                <div className="main-content-column1">
                    <div className="timeline-header">
                        <div>
                            Timeline
                        </div>
                    </div>
                    <div className="timeline-list">
                        {
                            props.data.map(
                                info => (
                                    <ScheduleItem
                                        key={info.id}
                                        info={info}
                                        onSelect={props.onSelect}
                                    />
                                )
                            )
                        }
                    </div>
                </div>
                <div className="main-content-column2">
                    <div className="service-providers">
                        <div className="service-providers-header">
                            <div>Service Providers</div>
                            <div>
                                <img src="images/path.png" alt="" />
                            </div>
                        </div>
                        <div className="item-list">
                            <div className="rectangular-icon"></div>
                            <div className="item-info">
                                <div>Ian Inspector</div>
                                <div>Home Inspector</div>
                            </div>
                            <div className="group-icon">
                                <img src="images/group.png" alt="" />
                            </div>

                            <div className="rectangular-icon"></div>
                            <div className="item-info">
                                <div>Ian Inspector</div>
                                <div>Home Inspector</div>
                            </div>
                            <div className="group-icon">
                                <img src="images/group.png" alt="" />
                            </div>

                            <div className="rectangular-icon"></div>
                            <div className="item-info">
                                <div>Ian Inspector</div>
                                <div>Home Inspector</div>
                            </div>
                            <div className="group-icon">
                                <img src="images/group.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="resources">
                        <div className="resources-header">
                            <div>Resources</div>
                            <div>
                                <img src="images/path.png" alt="" />
                            </div>
                        </div>
                        <div className="item-list">
                            <div className="rectangular-icon"></div>
                            <div className="item-info">
                                <div>Ian Inspector</div>
                                <div>Home Inspector</div>
                            </div>
                            <div className="group-icon">
                                <img src="images/group.png" alt="" />
                            </div>

                            <div className="rectangular-icon"></div>
                            <div className="item-info">
                                <div>Ian Inspector</div>
                                <div>Home Inspector</div>
                            </div>
                            <div className="group-icon">
                                <img src="images/group.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}