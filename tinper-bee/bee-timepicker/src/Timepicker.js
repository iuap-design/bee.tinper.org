import React, { Component } from 'react';
import TimePicker from './rc/index';
import PropTypes from 'prop-types';

const propTypes = {};
const defaultProps = {
    focusOnOpen:true,
    clearIcon:<i className="uf uf-close-c" />,
    onKeyDown:()=>{}
};
class Timepicker extends Component {

    render() {
        let props = this.props;
        return (
            <TimePicker prefixCls='u-time-picker' {...props} />
        )
    }
};
Timepicker.propTypes = propTypes;
Timepicker.defaultProps = defaultProps;
export default Timepicker;