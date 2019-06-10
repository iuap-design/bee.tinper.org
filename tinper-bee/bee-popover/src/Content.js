import React from 'react';
import isRequiredForA11y from 'tinper-bee-core/lib/isRequiredForA11y';
import classnames from 'classnames';
import PropTypes from 'prop-types';


const propTypes = {
    /**
     * An html id attribute, necessary for accessibility
     * @type {string}
     * @required
     */
    id: isRequiredForA11y(PropTypes.oneOfType([
        PropTypes.string, PropTypes.number,
    ])),

    /**
     * Sets the direction the Popover is positioned towards.
     */
    placement: PropTypes.oneOf(["top", "right", "bottom", "left", "topLeft", "rightTop", "bottomLeft", "leftTop", "topRight", "rightBottom", "bottomRight", "leftBottom"]) ,

    /**
     * The "top" position value for the Popover.
     */
    positionTop: PropTypes.oneOfType([
        PropTypes.number, PropTypes.string,
    ]),
    /**
     * The "left" position value for the Popover.
     */
    positionLeft: PropTypes.oneOfType([
        PropTypes.number, PropTypes.string,
    ]),

    /**
     * The "top" position value for the Popover arrow.
     */
    arrowOffsetTop: PropTypes.oneOfType([
        PropTypes.number, PropTypes.string,
    ]),
    /**
     * The "left" position value for the Popover arrow.
     */
    arrowOffsetLeft: PropTypes.oneOfType([
        PropTypes.number, PropTypes.string,
    ]),
};

const defaultProps = {
    placement: 'right',
    clsPrefix: 'u-popover'
};

const PLACECLASS = {
    right: 'right',
    top: 'top',
    bottom: 'bottom',
    left: 'left',
    rightTop: 'right-top',
    rightBottom: 'right-bottom',
    leftTop: 'left-top',
    leftBottom: 'left-bottom',
    topRight: 'top-right',
    topLeft: 'top-left',
    bottomLeft: 'bottom-left',
    bottomRight: 'bottom-right'
};

class Content extends React.Component {
    getInversePlacement(className, placement) {
        if (placement && className && className.includes('inverse-arrow')) {
            let inversePlacement = null;
            if (placement.startsWith('left')) {
                placement = placement.replace('left', 'right');

            } else if (placement.startsWith('right')) {
                placement = placement.replace('right', 'left');

            } else if (placement.startsWith('top')) {
                placement = placement.replace('top', 'bottom');

            } else if (placement.startsWith('bottom')) {
                placement = placement.replace('bottom', 'top');

            }
            return inversePlacement ? inversePlacement : placement;
        } else {
            return placement
        }
    }
    render() {
        const {
            title,
            placement,
            positionTop,
            positionLeft,
            arrowOffsetTop,
            arrowOffsetLeft,
            clsPrefix,
            className,
            style,
            id,
            children,
            trigger,
            ...others
        } = this.props;

        let resPlacement = this.getInversePlacement(className, placement)
        const classes = {
            [`${clsPrefix}`]: true,
            [PLACECLASS[resPlacement]]: true,
        };

        const outerStyle = {
            display: 'block',
            top: positionTop,
            left: positionLeft,
            ...style,
        };

        // const arrowStyle = {
        //     top: arrowOffsetTop,
        //     left: arrowOffsetLeft,
        // }; 
        return (
            <div>
                {title && <div className={classnames(`${clsPrefix}-title`)}>{title}</div>}
                <div className={classnames(`${clsPrefix}-content`)}>{children}</div>
            </div>
        );
    }
}

Content.propTypes = propTypes;
Content.defaultProps = defaultProps;

export default Content;
