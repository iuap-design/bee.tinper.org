import React, { cloneElement, Component } from 'react';
import ReactDOM from 'react-dom';
import { componentOrElement } from 'tinper-bee-core';
import createChainedFunction from 'tinper-bee-core/lib/createChainedFunction';
import splitComponentProps from 'tinper-bee-core/lib/splitComponent';
import PropTypes from 'prop-types';
import Overlay from 'bee-overlay/build/Overlay';
import Portal from 'bee-overlay/build/Portal';
import Confirm from './Confirm';


const isReact16 = ReactDOM.createPortal !== undefined;

const propTypes = {
  ...Overlay.propTypes,


  // FIXME: This should be `defaultShow`.
  /**
   * 覆盖的初始可见性状态。对于更细微的可见性控制，请考虑直接使用覆盖组件。
   */
  defaultOverlayShown: PropTypes.bool,

  /**
   * 第二优先级位置方向
   */
  secondPlacement: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),

  /**
   * 要覆盖在目标旁边的元素或文本。
   */
  content: PropTypes.node.isRequired,

  /**
   * @private
   */
  onClick: PropTypes.func,
  onClose: PropTypes.func,
  onCancel: PropTypes.func,

  /**
   * @private rootClose关闭时候的回调
   */
  onRootClose: PropTypes.func,

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
  // show: PropTypes.oneOf([null]),
  show: PropTypes.bool
};

const defaultProps = {
  defaultOverlayShown: false,
};

class Popconfirm extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleToggle = this.handleToggle.bind(this);
    this.handleHide = this.handleHide.bind(this);
    this.makeOverlay = this.makeOverlay.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleCancel = this.handleCancel.bind(this);


    this._mountNode = null;

    this.state = {
      show: props.defaultOverlayShown,
    };
  }

  componentDidMount() {
    this._mountNode = document.createElement('div');
    !isReact16 && this.renderOverlay();
    if ('show' in this.props) {
      this.setState({
        show: this.props.show
      })
    }
  }

  componentDidUpdate(prevProps) {
      let { show } = this.props;
      !isReact16 && this.renderOverlay();
      if ("show" in this.props && prevProps.show !== show) {
        this.setState({
          show
        })
      }
  }

  componentWillUnmount() {
      !isReact16 && ReactDOM.unmountComponentAtNode(this._mountNode);
    this._mountNode = null;

  }

  handleToggle() {

    if (!this.state.show) {
      this.show();
    }
  }

  handleClose (e) {
       const { onClose } = this.props;
      "show" in this.props ? void (0) : this.hide();
       onClose && onClose(e);
   }
   handleCancel (e) {
       const { onCancel } = this.props;
       "show" in this.props ? void(0) : this.hide();
       onCancel && onCancel(e);
   }

  handleHide() {
    let { onRootClose } = this.props;
    onRootClose && onRootClose();
    if (!("show" in this.props)) {
      this.hide();
    }
  }

  show() {
    this.setState({ show: true });
  }

  hide() {
    this.setState({ show: false });
  }

  makeOverlay(overlay, props) {
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

  renderOverlay() {
    ReactDOM.unstable_renderSubtreeIntoContainer(
      this, this._overlay, this._mountNode
    );
  }

  render() {
    const {
      content,
      children,
      onClick,
      stopbubble,
      secondPlacement,
      onRootClose,
      cancel_btn,
      close_btn,
      ...props
    } = this.props;

    delete props.defaultOverlayShown;

    const [overlayProps, confirmProps] = splitComponentProps(props, Overlay);

    const child = React.Children.only(children);
    const childProps = child.props;

    const overlay = (
           <Confirm
           {...confirmProps}
           cancel_btn={cancel_btn}
           close_btn={close_btn}
           onClose={ this.handleClose}
           onCancel= {this.handleCancel}
           stopbubble={stopbubble}
           secondPlacement={secondPlacement}
           placement={props.placement}>
               { content }
           </Confirm>
       );

    const triggerProps = {
      'aria-describedby': overlay.props.id
    };

    // FIXME: 这里用于传递这个组件上的处理程序的逻辑是不一致的。我们不应该通过任何这些道具。

    triggerProps.onClick = createChainedFunction(childProps.onClick, onClick);

    if (!("show" in this.props)) {
      triggerProps.onClick = createChainedFunction(
        triggerProps.onClick, this.handleToggle
      );
    }


    overlayProps.secondPlacement = secondPlacement;
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

Popconfirm.propTypes = propTypes;
Popconfirm.defaultProps = defaultProps;



export default Popconfirm;
