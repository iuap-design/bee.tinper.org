import React, { Component } from 'react';
import PropTypes from 'prop-types';
import zhCN from './zh_CN';

const propTypes = {
    locale: PropTypes.object
};
const defaultProps = {
    locale: zhCN
};

const childContextTypes = {
    beeLocale: PropTypes.object
};

class Locale extends Component {
    getChildContext() {
        return {
            beeLocale: {
                ...this.props.locale,
                exist: true,
            },
        };
    }
    render(){
       return React.Children.only(this.props.children);
    }
};

Locale.propTypes = propTypes;
Locale.defaultProps = defaultProps;
Locale.childContextTypes = childContextTypes;

export default Locale;