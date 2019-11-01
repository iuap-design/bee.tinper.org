import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import svgType from './svg';
import { toArrayChildren } from './utils';

const propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    theme: PropTypes.oneOf(['pure', 'colour']),
};
const defaultProps = {
    viewBox: "64 64 896 896",
    width: '1em',
    height: '1em',
    clsPrefix: 'uftype',
    theme: 'colour'
};

class SvgIcon extends Component {
    constructor(props) {
        super();
        const children = this.getStartChildren(props);
        this.state = {
            children
        };
    }

    getStartChildren = (props) => {
        const svg = props.children || svgType[props.type];
        return toArrayChildren(svg).map((item, i) => {
            return React.cloneElement(item, { key: item.key || i });
        });
    }

    render () {
        const {
            // affect outter <i>...</i>
            className,
            // affect inner <svg>...</svg>
            type,
            component: Component,
            viewBox,
            tabIndex,
            onClick,
            width,
            height,
            clsPrefix,
            theme,
            ...restProps
        } = this.props;

        const { children } = this.state;
        const classString = classNames({
            [`${clsPrefix}`]: true,
            [`${clsPrefix}-${type}`]: theme === 'pure',
        })
        const renderInnerNode = () => {
            // component > children > type
            if (Component) {
                return <Component {...this.props}>{children}</Component>;
            }

            if (children) {
                return (
                    <svg {...this.props} viewBox={viewBox}>
                        {children}
                    </svg>
                );
            }
        };
        let iconTabIndex = tabIndex;
        if (iconTabIndex === undefined && onClick) {
            iconTabIndex = -1;
        }
        return (
            <i
                {...restProps}
                tabIndex={iconTabIndex}
                onClick={onClick}
                className={classString}
            >
                {theme === 'colour' && renderInnerNode()}
            </i>
        )
    }
};

SvgIcon.propTypes = propTypes;
SvgIcon.defaultProps = defaultProps;
export default SvgIcon;