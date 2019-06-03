import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col } from 'bee-layout';

const propTypes = {};
const defaultProps = {};

class RightContent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let { className, children, ...other } = this.props;
        let classes = 'right-content';
        if(className)classes+=' '+className;
        return (
            <Col className={classes} md={8} sm={6} xs={12} {...other} >
                {this.props.children}
            </Col>
        )
    }
}
RightContent.propTypes = propTypes;
RightContent.defaultProps = defaultProps;
export default RightContent;
