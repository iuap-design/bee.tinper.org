import React, { Component, cloneElement } from 'react';
import ReactDOM from 'react-dom';
import createChainedFunction from 'tinper-bee-core/lib/createChainedFunction';
import splitComponentProps from 'tinper-bee-core/lib/splitComponent';
import PropTypes from 'prop-types';
import Overlay from 'bee-overlay/build/Overlay';
import Portal from 'bee-overlay/build/Portal';
import Content from './Content';
import contains from 'dom-helpers/query/contains';

//TODO: 当多个Popover在一个组件内时，显示一个会触发多个渲染。见demo1.

const isReact16 = ReactDOM.createPortal !== undefined;

const triggerType = PropTypes.oneOf(['click', 'hover', 'focus']);

/**
 * 检查值是属于这个值，还是等于这个值
 *
 * @param {string} one
 * @param {string|array} of
 * @returns {boolean}
 */
function isOneOf(one, of) {
    if (Array.isArray(of)) {
        return of.indexOf(one) >= 0;
    }
    return one === of;
}

const propTypes = {
    ...Overlay.propTypes,


    // FIXME: This should be `defaultShow`.
    /**
     * 覆盖的初始可见性状态。对于更细微的可见性控制，请考虑直接使用覆盖组件。
     */
    defaultOverlayShown: PropTypes.bool,

    /**
     * 要覆盖在目标旁边的元素或文本。
     */
    content: PropTypes.node.isRequired,
    /**
     * 显示和隐藏覆盖一旦触发的毫秒延迟量
     */
    delay: PropTypes.number,
    /**
     * 触发后显示叠加层之前的延迟毫秒
     */
    delayShow: PropTypes.number,
    /**
     * 触发后隐藏叠加层的延迟毫秒
     */
    delayHide: PropTypes.number,

    /**
     * @private
     */
    onClick: PropTypes.func,
    onClose: PropTypes.func,
    onCancel: PropTypes.func,


    // Overridden props from `<Overlay>`.
    /**
     * @private
     */
    target: PropTypes.oneOf([null]),
    /**
     * @private
     */
    onHide: PropTypes.oneOf([null]),
    /**
     * @private
     */
    show: PropTypes.bool,

    trigger: PropTypes.oneOfType([
        triggerType, PropTypes.arrayOf(triggerType),
    ]),
    /**
     * @private
     */
    onBlur: PropTypes.func,
    /**
     * @private
     */
    onFocus: PropTypes.func,
    /**
     * @private
     */
    onMouseOut: PropTypes.func,
    /**
     * @private
     */
    onMouseOver: PropTypes.func,
};


const defaultProps = {
    placement: 'right',
    clsPrefix: 'u-popover',
    rootClose: true,
    defaultOverlayShown: false,
};

class Popover extends Component{
    constructor(props, context) {
        super(props, context);

        this._mountNode = null;

        this.state = {
            show: props.defaultOverlayShown,
        };

        this.handleMouseOver = e => (
            this.handleMouseOverOut(this.handleDelayedShow, e)
        );
        this.handleMouseOut = e => (
            this.handleMouseOverOut(this.handleDelayedHide, e)
        );
    }

    componentDidMount() {
        this._mountNode = document.createElement('div');
        !isReact16 && this.renderOverlay();
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.hasOwnProperty('show')){
            if(nextProps.show){
                this.handleShow();
            }else{
                this.handleHide();
            }
        }
    }

    componentDidUpdate() {
        !isReact16 && this.renderOverlay();
    }

    componentWillUnmount() {
        !isReact16 && ReactDOM.unmountComponentAtNode(this._mountNode);
        this._mountNode = null;

    }

    handleToggle = () => {
        if (!this.state.show) {
            this.show();
        }else{
            this.hide();
        }
    }

    handleDelayedShow = () => {
        if (this._hoverHideDelay != null) {
            clearTimeout(this._hoverHideDelay);
            this._hoverHideDelay = null;
            return;
        }

        if (this.state.show || this._hoverShowDelay != null) {
            return;
        }

        const delay = this.props.delayShow != null ?
            this.props.delayShow : this.props.delay;

        if (!delay) {
            this.show();
            return;
        }

        this._hoverShowDelay = setTimeout(() => {
            this._hoverShowDelay = null;
            this.show();
        }, delay);
    }

    handleDelayedHide = () => {
        if (this._hoverShowDelay != null) {
            clearTimeout(this._hoverShowDelay);
            this._hoverShowDelay = null;
            return;
        }

        if (!this.state.show || this._hoverHideDelay != null) {
            return;
        }

        const delay = this.props.delayHide != null ?
            this.props.delayHide : this.props.delay;

        if (!delay) {
            this.hide();
            return;
        }

        this._hoverHideDelay = setTimeout(() => {
            this._hoverHideDelay = null;
            this.hide();
        }, delay);
    }

    // 简单实现mouseEnter和mouseLeave。
    // React的内置版本是有问题的：https://github.com/facebook/react/issues/4251
    //在触发器被禁用的情况下，mouseOut / Over可能导致闪烁
    //从一个子元素移动到另一个子元素。
    handleMouseOverOut = (handler, e) => {
        const target = e.currentTarget;
        const related = e.relatedTarget || e.nativeEvent.toElement;

        if (!related || related !== target && !contains(target, related)) {
            handler(e);
        }
    }


    handleHide = () => {
        if(this.state.show){
            this.hide();
        }
    }

    handleShow = () => {
        if(!this.state.show){
            this.show();
        }
    }

    show = () => {
        this.setState({ show: true });
    }

    hide = () => {
        let { onHide } = this.props;
        onHide && onHide()
        this.setState({ show: false });
    }

    makeOverlay = (overlay, props) => {
        return (
            <Overlay
                {...props}
                show={this.state.show}
                onHide={this.handleHide}
                target={this}
            >
                {overlay}
            </Overlay>
        );
    }

    renderOverlay = () => {
        ReactDOM.unstable_renderSubtreeIntoContainer(
            this, this._overlay, this._mountNode
        );
    }

    render() {
        const {
            content,
            children,
            onClick,
            trigger,
            onBlur,
            onFocus,
            onMouseOut,
            onMouseOver,
            ...props
        } = this.props;

        delete props.delay;
        delete props.delayShow;
        delete props.delayHide;
        delete props.defaultOverlayShown;

        const [overlayProps, confirmProps] = splitComponentProps(props, Overlay);

        const child = React.Children.only(children);
        const childProps = child.props;

        let overlay = (
            <Content placement={ props.placement } {...confirmProps} >
                {content}
            </Content>
        );

        const triggerProps = {
            'aria-describedby': overlay.props.id
        };

        // FIXME: 这里用于传递这个组件上的处理程序的逻辑是不一致的。我们不应该通过任何这些道具。

        triggerProps.onClick = createChainedFunction(childProps.onClick, onClick);

        if (isOneOf('click', trigger)) {
            triggerProps.onClick = createChainedFunction(
                triggerProps.onClick, this.handleToggle
            );
        }

        if (isOneOf('hover', trigger)) {

            triggerProps.onMouseOver = createChainedFunction(
                childProps.onMouseOver, onMouseOver, this.handleMouseOver
            );
            triggerProps.onMouseOut = createChainedFunction(
                childProps.onMouseOut, onMouseOut, this.handleMouseOut
            );
        }

        if (isOneOf('focus', trigger)) {
            triggerProps.onFocus = createChainedFunction(
                childProps.onFocus, onFocus, this.handleDelayedShow
            );
            triggerProps.onBlur = createChainedFunction(
                childProps.onBlur, onBlur, this.handleDelayedHide
            );
        }


        this._overlay = this.makeOverlay(overlay, overlayProps);

        if (!isReact16) {
            return cloneElement(child, triggerProps);
        }
        triggerProps.key = 'overlay';

        let portal = (
            <Portal
                key="portal"
                container={props.container}>
                { this._overlay }
            </Portal>
        )


        return [
            cloneElement(child, triggerProps),
            portal
        ]
    }

}

Popover.propTypes = propTypes;
Popover.defaultProps = defaultProps;

export default Popover;
