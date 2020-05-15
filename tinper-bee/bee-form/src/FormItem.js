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
        const {children,className = '',prefixCls,style , ...others} = this.props;
        return (
            <div className={`${prefixCls}-item`+' '+className } style={style} {...others}>
               {children}
            </div>
            )
    }
};
FormItem.propTypes = propTypes;
FormItem.defaultProps = defaultProps;
export default FormItem;