import React, {cloneElement} from 'react';
import classnames from 'classnames';
import i18n from './i18n';
import Button from 'bee-button';
import PropTypes from 'prop-types';
import { componentOrElement } from 'tinper-bee-core';
import {getComponentLocale} from 'bee-locale/build/tool';


const propTypes = {

    /**
     * Sets the direction the Popover is positioned towards.
     */
    placement: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),

    secondPlacement: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
    renderPlacement: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
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

    /**
     * 阻止冒泡
     */
    stopbubble: PropTypes.number,

    /**
    * 关闭按钮
    */
    close_btn: PropTypes.oneOfType([
        componentOrElement,
        PropTypes.func
    ]),

    /**
    * 取消按钮
    */
    cancel_btn: PropTypes.oneOfType([
        componentOrElement,
        PropTypes.func
    ]),

    /**
     * Title content
     */
    title: PropTypes.node,
    onClose: PropTypes.func,
    onCancel: PropTypes.func,
    color: PropTypes.oneOf(['dark']),
};

const defaultProps = {
    stopbubble: 0,
    placement: 'right',
    clsPrefix: 'u-popconfirm',
    locale: {}
};

class Confirm extends React.Component {
    constructor(props) {
        super(props);
    }

    cancel = (e) => {
        const { stopbubble, onCancel } = this.props;
        stopbubble && e.stopPropagation();
        onCancel(e)
    }

    close = (e) => {
        const { stopbubble, onClose } = this.props;
        stopbubble && e.stopPropagation();
        onClose(e)
    }

    render() {
        const {
            placement,
            positionTop,
            positionLeft,
            arrowOffsetTop,
            arrowOffsetLeft,
            clsPrefix,
            trigger,
            title,
            className,
            style,
            children,
            locale,
            onClose,
            color,
            onCancel,
            stopbubble,
            secondPlacement,
            renderPlacement,
            cancel_btn,
            close_btn,
            ...props
        } = this.props;

        const local = getComponentLocale(this.props, this.context, 'Popconfirm', () => i18n);

        //const [bsProps, elementProps] = splitBsProps(props);

        let lastPlacement = null;
        if ("secondPlacement" in this.props && secondPlacement && renderPlacement) {
            lastPlacement = renderPlacement;
        } else {
            lastPlacement = placement
        }
        let inversePlacement = null;
        if (className.includes('inverse-arrow')) {
            switch (lastPlacement) {
                case 'top':
                    inversePlacement = 'bottom'
                    break;
                case 'left':
                    inversePlacement = 'right'
                    break;
                case 'right':
                    inversePlacement = 'left'
                    break;
                case 'bottom':
                    inversePlacement = 'top'
                    break;
            }
        } else {
            inversePlacement = lastPlacement
        }
        let resPlacement = inversePlacement ? inversePlacement : placement;
        const classes = {
            [`${clsPrefix}`]: true,
            [resPlacement]: true,
            [`${clsPrefix}-${color}`]: color,
        };

        const outerStyle = {
            display: 'block',
            top: positionTop,
            left: positionLeft,
            ...style,
        };

        const arrowStyle = {
            top: arrowOffsetTop,
            left: arrowOffsetLeft,
        };


        return (
            <div
                {...props}
                role="tooltip"
                className={classnames(className, classes)}
                style={outerStyle}
                onClick={e => stopbubble && e.stopPropagation()}
            >
                <div className="arrow" style={arrowStyle}/>
                <div className={classnames(`${clsPrefix}-content`)}>
                    {children}
                </div>
                <div className={classnames(`${clsPrefix}-confirm`)}>
                    {
                        cancel_btn ? (
                            cloneElement(cancel_btn, {
                                ...cancel_btn.props,
                                onClick: this.cancel
                            })
                        ) : (
                            <Button onClick={this.cancel} size='sm' style={{minWidth: 50}}
                                    shape='border'>{local['cancel']}</Button>
                        )
                    }
                    {
                        close_btn ? (
                            cloneElement(close_btn, {
                                ...close_btn.props,
                                onClick: this.close
                            })
                        ) : (
                            <Button onClick={this.close} size='sm' style={{minWidth: 50}} colors='primary'>{local['ok']}</Button>
                        )
                    }
                </div>
            </div>
        );
    }
}

Confirm.propTypes = propTypes;
Confirm.defaultProps = defaultProps;
Confirm.contextTypes = {
    beeLocale: PropTypes.object
};

export default Confirm;
