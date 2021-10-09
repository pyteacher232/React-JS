import React, { Component } from 'react';
import ScheduleItem from './ScheduleItem';


const defaultProps = {
    data: [],
    onSelect: () => console.warn('onSelect is not defined'),
}

class ScheduleList extends Component {
    render() {
        return (
            <div>
                {
                    this.props.data.map(
                        info => (
                            <ScheduleItem
                                key={info.id}
                                info={info}
                                onSelect={this.props.onSelect}
                            />
                        )
                    )
                }
            </div>
        )
    }

}

ScheduleList.defaultProps = defaultProps;
export default ScheduleList;