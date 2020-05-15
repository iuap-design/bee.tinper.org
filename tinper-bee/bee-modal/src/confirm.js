import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import Modal,{ destroyFns } from './Modal';
import Button from 'bee-button';
import ConfirmModal from './ConfirmModal'
import Icon from 'bee-icon';

const IS_REACT_16 = !!ReactDOM.createPortal;
class ConfirmDialog extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    const props = this.props;
    const {
      onCancel,
      onOk,
      close,
      onHide,
      show,
      keyboard,
      centered,
      getContainer,
      backdropStyle,
      okButtonProps,
      cancelButtonProps,
      iconType = 'uf-qm-c',
      locale = {
        'ok':'确定',
        'gotit':'知道了',
        'cancel':'取消',
      }
    } = props;
    
    // 支持传入{ icon: null }来隐藏`Modal.confirm`默认的Icon
    const icon = props.icon === undefined ? iconType : props.icon;
    const okType = props.okType || 'primary';
    const prefixCls = props.prefixCls || 'u-modal';
    const contentPrefixCls = `${prefixCls}-confirm`;
    // 默认为 true，保持向下兼容
    const okCancel = 'okCancel' in props ? props.okCancel : true;
    const width = props.width || 400;
    const style = props.style || {};
    const backdrop = props.backdrop === undefined ? true : props.backdrop;
    // 默认为 false，保持旧版默认行为
    const backdropClosable = props.backdropClosable === undefined ? true : props.backdropClosable;
    // const runtimeLocale = getConfirmLocale();
    const okText = props.okText || (okCancel ? locale.ok : locale.gotit);
    const cancelText = props.cancelText || locale.cancel;
    const autoFocusButton = props.autoFocusButton === null ? false : props.autoFocusButton || 'ok';
    const transitionName = props.transitionName || 'zoom';
    const maskTransitionName = props.maskTransitionName || 'fade';
  
    const classString = classNames(
      contentPrefixCls,
      `${contentPrefixCls}-${props.type}`,
      props.className,
    );
  
    const cancelButton = okCancel && (
      <Button 
        onClick={ ()=>{ close(); onCancel? onCancel() : ()=>{return} } } 
        colors="secondary" 
        style={{marginRight: 8}}
      >{cancelText}
      </Button>
    )
    const iconNode = typeof icon === 'string' ? <Icon type={icon} /> : icon;

    return (
      <Modal
        width={width}
        className={classString}
        show = {show}
        onHide = { ()=>{ close(); onCancel? onCancel() : ()=>{return} } } 
        backdrop = {backdrop} 
        backdropClosable = {backdropClosable}
        centered = {centered}
        keyboard = {keyboard}
        backdropStyle = {backdropStyle}>
          <Modal.Header>
              <Modal.Title>{iconNode}<span className={`${contentPrefixCls}-title`}>{props.title}</span></Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <div className={`${contentPrefixCls}-content`}>{props.content}</div>
          </Modal.Body>

          <Modal.Footer>
            {cancelButton}
            <Button 
              onClick={ () => { close(); onOk ? onOk(): ()=>{return} } } 
              colors={okType}
            >
            {okText}
            </Button>
          </Modal.Footer>
      </Modal>
    );
  }
}


export default function confirm(config) {
    const div = document.createElement('div');
    document.body.appendChild(div);
    let currentConfig = { ...config, close, show: true };
  
    function close(...args) {
      currentConfig = {
        ...currentConfig,
        show: false,
        onHide: destroy.bind(this, ...args),
      };
      if (IS_REACT_16) {
        render(currentConfig);
      } else {
        destroy(...args);
      }
    }
  
    function update(newConfig) {
      currentConfig = {
        ...currentConfig,
        ...newConfig,
      };
      render(currentConfig);
    }
  
    function destroy(...args) {
      const unmountResult = ReactDOM.unmountComponentAtNode(div);
      if (unmountResult && div.parentNode) {
        div.parentNode.removeChild(div);
      }
      const triggerCancel = args.some(param => param && param.triggerCancel);
      if (config.onCancel && triggerCancel) {
        config.onCancel(...args);
      }
      for (let i = 0; i < destroyFns.length; i++) {
        const fn = destroyFns[i];
        if (fn === close) {
          destroyFns.splice(i, 1);
          break;
        }
      }
    }
  
    function render(props) {
      ReactDOM.render(props.confirmType=='one'?<ConfirmDialog {...props} />:<ConfirmModal {...props}/>, div);
    }
  
    render(currentConfig);
  
    destroyFns.push(close);
  
    return {
      destroy: close,
      update,
    };
}