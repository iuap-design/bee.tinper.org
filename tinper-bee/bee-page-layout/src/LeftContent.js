import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col } from 'bee-layout';

const propTypes = {};
const defaultProps = {};

class LeftContent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let { className, children, ...other } = this.props;
        let classes = 'left-content';
        if(className)classes+=' '+className;
        return (
            <Col className={classes} md={4} sm={6} xs={12} {...other} >
                {this.props.children}
            </Col>
        )
    }
}
LeftContent.propTypes = propTypes;
LeftContent.defaultProps = defaultProps;
export default LeftContent;
