import React from 'react';
import Modal, { destroyFns } from './Modal';
import confirm from './confirm';
import Icon from 'bee-icon';


Modal.info = function(props) {
    const config = {
      type: 'info',
      icon: <Icon type="uf-i-c-2" />,
      okCancel: false,
      ...props,
    };
    return confirm(config);
};

Modal.success = function(props) {
    const config = {
        type: 'success',
        icon: <Icon type="uf-correct" />,
        okCancel: false,
        ...props,
    };
    return confirm(config);
};

Modal.error = function(props) {
    const config = {
        type: 'error',
        icon: <Icon type="uf-exc-c" />,
        okCancel: false,
        ...props,
    };
    return confirm(config);
};

Modal.warning = function(props) {
    const config = {
        type: 'warning',
        icon: <Icon type="uf-exc-t" />,
        okCancel: false,
        ...props,
    };
    return confirm(config);
};

Modal.confirm = function(props) {
    const config = {
        type: 'confirm',
        okCancel: true,
        confirmType:'one',
        ...props,
    };
    return confirm(config);
};

// onOk: ()=>{
//     console.log('onOk')
// },
// onCancel:()=>{
//     console.log('onCancel')
// },
// title:'提示信息',
// keyword:'删除',
// content:"确定要删除吗?",

Modal.destroyAll = function() {
    while (destroyFns.length) {
        const close = destroyFns.pop();
        if (close) {
            close();
        }
    }
};

export default Modal;
