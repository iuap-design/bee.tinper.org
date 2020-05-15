import React, { Component } from 'react';
import PropTypes from 'prop-types';


const propTypes = {};
const defaultProps = {};

class TableContent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let { className, children, ...other } = this.props;
        let classes = 'table-container';
        if(className)classes+=' '+className;
        return (
            <div className={classes} {...other} >
                {this.props.children}
            </div>
        )
    }
}
TableContent.propTypes = propTypes;
TableContent.defaultProps = defaultProps;
export default TableContent;
