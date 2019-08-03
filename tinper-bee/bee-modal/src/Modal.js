import classNames from 'classnames';
import events from 'dom-helpers/events';
import ownerDocument from 'dom-helpers/ownerDocument';
import canUseDOM from 'dom-helpers/util/inDOM';
import getScrollbarSize from 'dom-helpers/util/scrollbarSize';
import getScrollTop from 'dom-helpers/query/scrollTop';
import React from 'react';
import ReactDOM from 'react-dom';
import  BaseModal  from 'bee-overlay-modal/build/Modal';
import isOverflowing from 'bee-overlay-modal/build/utils/isOverflowing';
import { elementType, splitComponent, createChainedFunction } from 'tinper-bee-core';

import { Fade } from 'bee-transition';
import Body from './ModalBody';
import ModalDialog from './ModalDialog';
import Footer from './ModalFooter';
import Header from './ModalHeader';
import Title from './ModalTitle';
import PropTypes from 'prop-types';


const propTypes = {
  ...BaseModal.propTypes,
  ...ModalDialog.propTypes,

  /**
   * 是否弹出遮罩层/遮罩层点击是否触发关闭
   */
  backdrop: PropTypes.oneOf(['static', true, false]),

  /**
   * 点击遮罩层是否允许关闭
   */
  backdropClosable: PropTypes.bool,
  /**
   * esc触发关闭
   */
  keyboard: PropTypes.bool,

  /**
   * 显隐时是否使用动画
   */
  animation: PropTypes.bool,

  /**
   * 传递给模态框的样式
   */
  dialogComponentClass: elementType,

  /**
   * 自动设置焦点
   */
  autoFocus: PropTypes.bool,

  /**
   * 防止打开时焦点离开模态框
   */
  enforceFocus: PropTypes.bool,

  /**
   * 是否打开模态框
   */
  show: PropTypes.bool,

  /**
   * 关闭时的钩子函数
   */
  onHide: PropTypes.func,

  onEnter: PropTypes.func,

  onEntering: PropTypes.func,

  onEntered: PropTypes.func,

  onExit: PropTypes.func,

  onExiting: PropTypes.func,

  onExited: PropTypes.func,


  containerClassName: PropTypes.string,
  containerClassName: PropTypes.string,

  /**
   * 要添加到的元素
   */
  container: BaseModal.propTypes.container,

  /**
   * 尺寸
   */
  size: PropTypes.oneOf(["sm", "lg", "xlg", ""]) ,
  /**
   * 自定义宽度
   */
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * 是否可拖拽
   */
  draggable: PropTypes.bool,

  /**
   * 是否可以resize
   */
  resizable: PropTypes.bool,
  resizeClassName: PropTypes.string,

  /* resize开始 */
  onResizeStart: PropTypes.func,

  /* resizing */
  onResize: PropTypes.func,

  /* resize结束 */
  onResizeStop: PropTypes.func,

  /* resize 最小宽度、最小高度、最大宽度、最大高度 */
  minWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  minHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  maxWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  maxHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  bounds:PropTypes.oneOfType([
    PropTypes.string,PropTypes.Object
  ]),
  className: PropTypes.string,
  /* 模态框是否居中显示 */
  centered: PropTypes.bool
};

const defaultProps = {
  ...BaseModal.defaultProps,
  backdropClosable: true,
  animation: true,
  dialogComponentClass: ModalDialog,
  draggable: false,
  resizable: false,
  clsPrefix: 'u-modal',
  className: ''
};

const ModalFuncProps = {
  prefixCls: PropTypes.string,
  className: PropTypes.string,
  show: PropTypes.bool,
  title: React.ReactNode,
  content: React.ReactNode,
  onOk: PropTypes.func,
  onCancel: PropTypes.func,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  okText: PropTypes.string,
  okType: PropTypes.string,
  cancelText: PropTypes.string,
  icon: React.ReactNode,
  backdrop: PropTypes.oneOf(['static', true, false])
}

const ModalFunc = (props) => {
  destroy = () => {};
  update = (newConfig) => {};
};

export const destroyFns = [];

const childContextTypes = {
  $u_modal: PropTypes.shape({
    onHide: PropTypes.func,
  }),
};

class Modal extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      style: {},
      centered: props.centered
    }
    this.offsetTop = 0;
    this.handleEntering = this.handleEntering.bind(this);
    this.handleExited = this.handleExited.bind(this);
    this.handleWindowResize = this.handleWindowResize.bind(this);
    this.handleDialogClick = this.handleDialogClick.bind(this);
  }
  static info =  ModalFunc;
  static success =  ModalFunc;
  static error =  ModalFunc;
  static warn =  ModalFunc;
  static warning =  ModalFunc;
  static confirm =  ModalFunc;
  static destroyAll =  () => {return};

  getChildContext() {
    return {
      $u_modal: {
        onHide: this.props.onHide,
      },
    };
  }

  componentWillUnmount() {
    // Clean up the listener if we need to.
    this.handleExited();
  }

  handleEntering() {
    // FIXME: This should work even when animation is disabled.
    events.on(window, 'resize', this.handleWindowResize);
    this.updateStyle();
  }

  handleExited() {
    // FIXME: This should work even when animation is disabled.
    events.off(window, 'resize', this.handleWindowResize);
  }

  handleWindowResize() {
    this.updateStyle();
  }

  handleDialogClick(e) {
    if (e.target !== e.currentTarget) {
      return;
    }

    this.props.onHide();
  }

  updateStyle() {
    if (!canUseDOM || !this._modal) {
      return;
    }

    const dialogNode = this._modal.getDialogElement();
    const dialogHeight = dialogNode.scrollHeight;

    const document = ownerDocument(dialogNode);
    let bodyIsOverflowing=false;
    if(this.props.container){
      bodyIsOverflowing = isOverflowing(
        ReactDOM.findDOMNode(this.props.container)
      );
    }
    const modalIsOverflowing =
      dialogHeight > document.documentElement.clientHeight;

    this.setState({
      style: {
        paddingRight: bodyIsOverflowing && !modalIsOverflowing ?
          getScrollbarSize() : undefined,
        paddingLeft: !bodyIsOverflowing && modalIsOverflowing ?
          getScrollbarSize() : undefined
      }
    });
  }
  //ResizeStart 时，若模态框设置了 `centered` ，需要把居中属性移除，并通过 offsetTop 制造垂直居中的假象
  //fixbug: Resize 和 centered 一起使用时，拖拽交互不正确
  clearCenteredCls = () => {
    let { centered } = this.state;
    if(!centered){ return; }
    this.offsetTop = this.getOffsetTop();
    this.setState({
      centered: false
    })
  }
  //计算 ModalDialog 的 offsetTop
  getOffsetTop() {
    let modalDialog = document.getElementsByClassName("u-modal-dialog") && document.getElementsByClassName("u-modal-dialog")[0];
    let topPos = modalDialog && modalDialog.offsetTop;
    return topPos;
  }

  render() {
    let {
      backdrop,
      backdropClosable,
      animation,
      show,
      dialogComponentClass: Dialog,
      className,
      clsPrefix,
      style = {},
      size,
      width,
      children, // Just in case this get added to BaseModal propTypes.
      onEntering,
      onExited,
      backdropClassName,
      containerClassName,
      draggable,
      resizeClassName,
      bounds,
      container,
      ...props
    } = this.props;
    let { centered } = this.state;
    const dialogMarginTop = 30;
    //ResizeStart 时，计算 ModalDialog 的 offsetTop
    let topPosStyle = this.offsetTop > 0 ? {top: this.offsetTop - dialogMarginTop} : null;
    const [baseModalProps, dialogProps] =
      splitComponent(props, BaseModal);


    const inClassName = show && !animation && 'in';

    const backdropClasses = {
        [`${clsPrefix}-backdrop`]: true
    };
    const containerClasses = {
        [`${clsPrefix}-open`]: true
    };
    if(!!centered){
      className += ` ${clsPrefix}-centered`
    }
    if(Number(width))width += 'px';

    let styleRes = { ...this.state.style, ...style, ...topPosStyle };
    if (width) {
      Object.assign(styleRes, { width: width })
    }
    return (
      <BaseModal
        {...baseModalProps}
        ref={c => { this._modal = c; }}
        show={show}
        onEntering={createChainedFunction(onEntering, this.handleEntering)}
        onExited={createChainedFunction(onExited, this.handleExited)}
        backdrop={backdrop}
        backdropClassName={classNames(backdropClasses, inClassName, backdropClassName)}
        containerClassName={classNames(containerClasses, containerClassName)}
        transition={animation ? Fade : undefined}
        dialogTransitionTimeout={Modal.TRANSITION_DURATION}
        backdropTransitionTimeout={Modal.BACKDROP_TRANSITION_DURATION}
      >
        <Dialog
          {...dialogProps}
          style={styleRes}
          className={classNames(className, inClassName, backdropClassName)}
          onClick={backdrop === true && !!backdropClosable ? this.handleDialogClick : null}
          size ={ size }
          draggable={draggable}
          bounds={bounds}
          resizeClassName={resizeClassName}
          clearCenteredCls={this.clearCenteredCls}
        >
          {children}
        </Dialog>
      </BaseModal>
    );
  }
}

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;
Modal.childContextTypes = childContextTypes;

Modal.Body = Body;
Modal.Header = Header;
Modal.Title = Title;
Modal.Footer = Footer;

Modal.Dialog = ModalDialog;

Modal.TRANSITION_DURATION = 200000;
Modal.BACKDROP_TRANSITION_DURATION = 10000;

export default Modal;
