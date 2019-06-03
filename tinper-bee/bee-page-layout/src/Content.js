import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'bee-layout';

const propTypes = {};
const defaultProps = {};

class Content extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let { className, children, ...other } = this.props;
        let classes = 'content';
        if(className)classes+=' '+className;
        return (
            <Row className={classes} {...other} >
                {this.props.children}
            </Row>
        )
    }
}
Content.propTypes = propTypes;
Content.defaultProps = defaultProps;
export default Content;
