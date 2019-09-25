import React, { Component, cloneElement } from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import createChainedFunction from 'tinper-bee-core/lib/createChainedFunction';
import splitComponentProps from 'tinper-bee-core/lib/splitComponent';
import PropTypes from 'prop-types';
import Overlay from 'bee-overlay/build/Overlay';
import Content from './Content';
import Tooltip from 'bee-tooltip';

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

    id: PropTypes.oneOfType([
        PropTypes.number, PropTypes.string,
    ]),
    // FIXME: This should be `defaultShow`.
    /**
     * 覆盖的初始可见性状态。对于更细微的可见性控制，请考虑直接使用覆盖组件。
     */
    defaultOverlayShown: PropTypes.bool,
    /**
     * 弹出框标题
     */
    title: PropTypes.oneOfType([
        PropTypes.node, PropTypes.string,
    ]),
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
    onHide: PropTypes.func,
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
    rootClose: PropTypes.bool,
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

        let visible;
        if ('show' in props) {
            visible = !!props.show;
        } else {
            visible = !!props.defaultOverlayShown;
        }
        this.state = {
            show: visible,
        };
    }

    componentDidMount() {
        this._mountNode = document.createElement('div');
    }

    componentDidUpdate(prevProps) {
        if ('show' in this.props && prevProps.show !== this.props.show) {
            this.setState({
                show: this.props.show
            })
        }
    }

    makeOverlay = (overlay, props) => {
        return (
            <div>
				{overlay}
			</div>
        );
    }

    onVisibleChange = (visible) => {
        let { onVisibleChange } = this.props;
        if(!visible){
            this.hide(visible);
        }
        onVisibleChange && onVisibleChange(visible);
    }

    hide = (visible) => {
        let { onHide } = this.props;
        onHide && onHide(visible);
    }

    render() {
        const {
            id,
            clsPrefix,
            className,
            content,
            title,
            children,
            onClick,
            trigger,
            onBlur,
            onFocus,
            onMouseOut,
            onMouseOver,
            positionTop,
            positionLeft,
            rootClose,
            defaultOverlayShown,
            container,
            show,
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
            <Content placement={ props.placement } {...confirmProps} title={title} id="u-popover-content">
                {content}
            </Content>
        );

        const triggerProps = {
            'aria-describedby': overlay.props.id
        };

        // FIXME: 这里用于传递这个组件上的处理程序的逻辑是不一致的。我们不应该通过任何这些道具。

        triggerProps.onClick = createChainedFunction(childProps.onClick, onClick);

        this._overlay = this.makeOverlay(overlay, overlayProps);

        triggerProps.key = 'overlay';

        let portal = (
            <Tooltip 
            {...props}
            className={classnames(className, clsPrefix, 'u-popover-tooltip')}
            id={id}
            inverse 
            overlay={this._overlay} 
            trigger={trigger} 
            placement={props.placement} 
            container={container}
            positionTop={positionTop}
            positionLeft={positionLeft}
            rootClose={rootClose}
            defaultOverlayShown={defaultOverlayShown}
            onVisibleChange={this.onVisibleChange}
            onHide={() => this.hide(false)}
            >
                { this.props.children }
            </Tooltip>
        )

        return 'show' in this.props ? (
            cloneElement(portal, {
                visible : this.state.show
            })
        ) : (
            portal
        )
    }

}

Popover.propTypes = propTypes;
Popover.defaultProps = defaultProps;

export default Popover;
