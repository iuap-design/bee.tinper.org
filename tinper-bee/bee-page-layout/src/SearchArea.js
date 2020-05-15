import React, { Component } from 'react';
import PropTypes from 'prop-types';


const propTypes = {};
const defaultProps = {};

class SearchArea extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let { className, children, ...other } = this.props;
        let classes = 'search-area';
        if(className)classes+=' '+className;
        return (
            <div className={classes} {...other} >
                {this.props.children}
            </div>
        )
    }
}
SearchArea.propTypes = propTypes;
SearchArea.defaultProps = defaultProps;
export default SearchArea;
