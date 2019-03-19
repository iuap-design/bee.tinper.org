import React, { Component } from 'react';
import Rcascader from './rc/index';
import PropTypes from 'prop-types';

const propTypes = {};
const defaultProps = {};
class Cascader extends Component {

    render() {
        let props = this.props;
        return (
            <Rcascader prefixCls='u-cascader' {...props} />
        )
    }
};
Cascader.propTypes = propTypes;
Cascader.defaultProps = defaultProps;
export default Cascader;