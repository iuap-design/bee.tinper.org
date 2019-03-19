import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';
import { createForm, createFormField } from 'rc-form';
import classNames from 'classnames';
const propTypes = {
    prefixCls: PropTypes.string,
    onSubmit: PropTypes.func,
};
const defaultProps = {
    prefixCls: 'u-form',
    onSubmit: () => { }
};
class Form extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { prefixCls, className = '', children, style, onSubmit } = this.props;
        const formClassName = classNames(prefixCls, className);
        return (
            <form className={prefixCls+' '+className} style={style} onSubmit={onSubmit}>
                {children}
            </form>
        )
    }
};
Form.createForm = createForm;
Form.createFormField = createFormField;
Form.propTypes = propTypes;
Form.defaultProps = defaultProps;
export default Form;