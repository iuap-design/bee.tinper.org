import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './iconfont.js';

const propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
};
const defaultProps = {
    viewBox: "0 0 1024 1024",
    clsPrefix: 'u-svgicon',
};

class SvgIcon extends Component {

    render () {
        const {
            className,
            type, //图标类型
            component: Component,
            viewBox,
            clsPrefix,
            children,
        } = this.props;

        const classString = classNames({
            [`${clsPrefix}`]: true,
        })
        const renderInnerNode = () => {
            // component > type
            if (Component) {
                return <i {...this.props}><Component>{children}</Component></i>;
            }

            return (
                <svg className={classNames(className, classString)} aria-hidden="true" viewBox={viewBox}>
                    <use xlinkHref={`#uftype-${type}`}></use>
                </svg >
            )
        };
        return (
            renderInnerNode()
        )
    }
};

SvgIcon.propTypes = propTypes;
SvgIcon.defaultProps = defaultProps;
export default SvgIcon;