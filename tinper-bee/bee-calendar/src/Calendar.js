import React, { Component } from 'react';
import FullCalendar from 'rc-calendar/lib/FullCalendar';
import PropTypes from 'prop-types';
import Select from 'rc-select';
import zhCN from 'rc-calendar/lib/locale/zh_CN';
import enUS from 'rc-calendar/lib/locale/en_US';
import moment from 'moment';

const propTypes = {};
const defaultProps = {};

const format = 'YYYY-MM-DD';
const cn = location.search.indexOf('cn') !== -1;

const now = moment();
if (cn) {
    now.locale('zh-cn').utcOffset(8);
} else {
    now.locale('en-gb').utcOffset(0);
}

const defaultCalendarValue = now.clone();
defaultCalendarValue.add(-1, 'month');

class Calendar extends Component {

    constructor(props, context) {
        super(props, context);

        this.state =  {
            type:'month',
        }
    }

    onTypeChange(type) {
        this.setState({
            type,
        });
    }

    render() {
        return (
            <FullCalendar
                prefixCls = "u-calendar"
                Select={Select}
                defaultValue={now}
                locale={cn ? zhCN : enUS}
                {...this.props}
            />
        )
    }
};
Calendar.propTypes = propTypes;
Calendar.defaultProps = defaultProps;

export default Calendar;