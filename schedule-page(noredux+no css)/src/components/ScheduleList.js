import React, { Component } from 'react';
import ScheduleItem from './ScheduleItem';

export default class ScheduleList extends Component {
    static defaultProps = {
        list: [],
        onSelect: () => console.warn('onSelect not defined')
    }

    render() {
        const { data, onSelect } = this.props;
        return (
            <div>
                {
                    data.map(
                        info => (
                            <ScheduleItem
                                key={info.id}
                                info={info}
                                onSelect={onSelect}
                            />
                        )
                    )
                }
            </div>
        )
    }

}