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
    placement: PropTypes.oneOf(['top', 'right', 'bottom', 'left', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight', 'leftTop', 'leftBottom', 'rightTop', 'rightBottom']),

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
    let { id, className, classNames, style, overlay, overlayStyle, otherProps } = props;
    // style 包含用户传入的自定义样式，以及 bee-overlay 计算返回的样式。
    // overlayStyle 是用户传入的自定义样式。
    if(overlayStyle && overlayStyle.width) {
        style.width = overlayStyle.width;
    } else {
        delete style.width;
    }
    return (
        <div
            id={id}
            role="tooltip"
            className={classnames(className, classNames)}
            onMouseEnter={props.onMouseEnter}
            onMouseLeave={props.onMouseLeave}
            style={style}
            {...otherProps}
        >
        {
            overlay?(
                <div className='tooltip-arrow'/>
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
        let { visible } = this.props;
        if ('visible' in this.props && prevProps.visible !== visible) {
            this.setState({
                visible: visible
            })
        }
    }

    /**
     * @desc 鼠标划入时候的事件
     */
    onMouseEnter = () => {
        let {trigger} = this.props;
        if(trigger === 'click') return;
        this.setState({
            isHoverShow: true
        })
    }

    /**
     * @desc 鼠标划出时候的事件
     */
    onMouseLeave = () => {
        let {trigger} = this.props;
        if(trigger === 'click') return;
        this.setState({
            isHoverShow: false
        })
    }

    handleOnHide = () => {
        let { onHide } = this.props;
        onHide && onHide(false)
    }

    render() {
        const {
            placement,
            id,
            arrowOffsetTop,
            arrowOffsetLeft,
            className,
            style,
            children,
            clsPrefix,
            overlay,
            inverse,
            trigger,
            onVisibleChange,
            onHide,
            rootClose,
            visible,
            defaultOverlayShown,
            positionTop,
            positionLeft,
            ...others
        } = this.props;

        
        let classes = {
            [placement]: true,
            'inverse': inverse
        };

        let arrowStyle = {
            top: arrowOffsetTop,
            left: arrowOffsetLeft
        };

        let classNames = classnames(clsPrefix, classes);

        let overlayNode = <OverlayNode
            id={id}
            className={className}
            classNames={classNames}
            overlay={overlay}
            onMouseEnter={this.onMouseEnter}
            onMouseLeave={this.onMouseLeave}
            style={style}
            overlayStyle={style} // 用户自定义样式
            arrowOffsetTop={arrowOffsetTop}
            arrowOffsetLeft={arrowOffsetLeft}
            otherProps={others}
            />
        return 'visible' in this.props ? (
            <OverlayTrigger 
            {...others} 
            visible={this.state.visible} 
            onVisibleChange={onVisibleChange}
            ref={ref => this.trigger = ref} 
            shouldUpdatePosition 
            placement={placement} 
            overlay={overlayNode}
            onHide={this.handleOnHide}
            rootClose={rootClose}
            defaultOverlayShown={defaultOverlayShown}
            positionTop={positionTop}
            positionLeft={positionLeft}
            trigger={trigger}
            >
                { children }
            </OverlayTrigger>

        ) : (
            <OverlayTrigger 
            {...others} 
            isHoverShow={this.state.isHoverShow} 
            onVisibleChange={onVisibleChange}
            ref={ref => this.trigger = ref} 
            shouldUpdatePosition 
            placement={placement} 
            overlay={overlayNode}
            onHide={this.handleOnHide}
            rootClose={rootClose}
            defaultOverlayShown={defaultOverlayShown}
            positionTop={positionTop}
            positionLeft={positionLeft}
            trigger={trigger}
            >
                { children }
            </OverlayTrigger>
        )
    }
}

Tooltip.propTypes = propTypes;
Tooltip.defaultProps = defaultProps;

export default Tooltip;
