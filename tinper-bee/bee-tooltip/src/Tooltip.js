import classnames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import OverlayTrigger from 'bee-overlay/build/OverlayTrigger';

const propTypes = {
    /**
     * @required
     */
    id: PropTypes.oneOfType([
        PropTypes.string, PropTypes.number,
    ]),
    inverse: PropTypes.bool,
    visible: PropTypes.bool,
    onVisibleChange: PropTypes.func,
    /**
     * 相对目标元素显示上下左右的位置
     */
    placement: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),

    /**
     * 绝对定位上边距.
     */
    positionTop: PropTypes.oneOfType([
        PropTypes.number, PropTypes.string,
    ]),
    /**
     * 绝对定位左边距
     */
    positionLeft: PropTypes.oneOfType([
        PropTypes.number, PropTypes.string,
    ]),

    /**
     * 与目标Top的距离
     */
    arrowOffsetTop: PropTypes.oneOfType([
        PropTypes.number, PropTypes.string,
    ]),
    /**
     * 与目标Left的距离
     */
    arrowOffsetLeft: PropTypes.oneOfType([
        PropTypes.number, PropTypes.string,
    ]),
};

const defaultProps = {
    placement: 'right',
    clsPrefix: 'u-tooltip'
};
function OverlayNode(props){
    let { className, classNames, style, overlay, arrowOffsetTop, arrowOffsetLeft } = props;
    return (
        <div
            className={classnames(className, classNames)}
            onMouseEnter={props.onMouseEnter}
            onMouseLeave={props.onMouseLeave}
            style={style}
        >
        {
            overlay?(
                <div className='tooltip-arrow' style={{
                    top: arrowOffsetTop,
                    left: arrowOffsetLeft
                }}/>
            ):''
        }
        {
            overlay?(
                <div className='tooltip-inner'>
                    {overlay}
                </div>
            ):''
        }
        </div>
    )
}


class Tooltip extends React.Component {
    constructor(props){
        super(props);
        let initState = {
            isHoverShow: false
        }
        if ('visible' in props) {
            Object.assign(initState, {
                visible: props.visible
            })
        }
        this.state = initState;
    }
    

    componentDidUpdate(prevProps) {
        let { visible, onVisibleChange } = this.props;
        if ('visible' in this.props && prevProps.visible !== visible) {
            this.setState({
                visible: visible
            })
            onVisibleChange && onVisibleChange(visible)
        }
    }

    /**
     * @desc 鼠标划入时候的事件
     */
    onMouseEnter = () => {
        this.setState({
            isHoverShow: true
        })
    }

    /**
     * @desc 鼠标划出时候的事件
     */
    onMouseLeave = () => {
        this.setState({
            isHoverShow: false
        })
    }

    render() {
        const {
            placement,
            positionTop,
            positionLeft,
            arrowOffsetTop,
            arrowOffsetLeft,
            className,
            style,
            children,
            clsPrefix,
            overlay,
            inverse,
            ...others
        } = this.props;


        let classes = {
            [placement]: true,
            'inverse': inverse
        };

        let outerStyle = {
            top: positionTop,
            left: positionLeft,
            ...style,
        };

        let arrowStyle = {
            top: arrowOffsetTop,
            left: arrowOffsetLeft
        };

        let classNames = classnames(clsPrefix, classes);

        let overlayNode = <OverlayNode
            className={className}
            classNames={classNames}
            overlay={overlay}
            onMouseEnter={this.onMouseEnter}
            onMouseLeave={this.onMouseLeave}
            style
            arrowOffsetTop
            arrowOffsetLeft
            />
        return 'visible' in this.props ? (
            <OverlayTrigger visible={this.state.visible} ref={ref => this.trigger = ref} shouldUpdatePosition placement={placement} {...others} overlay={overlayNode}>
                { children }
            </OverlayTrigger>

        ) : (
            <OverlayTrigger isHoverShow={this.state.isHoverShow} ref={ref => this.trigger = ref} shouldUpdatePosition placement={placement} {...others} overlay={overlayNode}>
                { children }
            </OverlayTrigger>
        )
    }
}

Tooltip.propTypes = propTypes;
Tooltip.defaultProps = defaultProps;

export default Tooltip;
