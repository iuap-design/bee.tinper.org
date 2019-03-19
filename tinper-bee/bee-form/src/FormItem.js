import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const propTypes = {
    prefixCls: PropTypes.string,
};
const defaultProps = {
    prefixCls:'u-form',
};
class FormItem extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {children,className = '',prefixCls,style} = this.props;
        return (
            <div className={`${prefixCls}-item`+' '+className } style={style}>
               {children}
            </div>
            )
    }
};
FormItem.propTypes = propTypes;
FormItem.defaultProps = defaultProps;
export default FormItem;