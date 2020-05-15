import React, { Component } from 'react';
import PropTypes from 'prop-types';


const propTypes = {};
const defaultProps = {};

class Header extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let { className, children, ...other } = this.props;
        let classes = 'header';
        if(className)classes+=' '+className;
        return (
            <div className={classes} {...other} >
                {children}
            </div>
        )
    }
}
Header.propTypes = propTypes;
Header.defaultProps = defaultProps;
export default Header;
