import React from 'react';
import Notification from 'bee-notification';
import classnames from 'classnames';
import warning from 'warning';

let defaultDuration = 1.5;
let newDuration;
let defaultTop = 24;
let defaultBottom = 48;
let bottom = 90;
let padding = 30;
let width =240;
let messageInstance;
let key = 1;
let clsPrefix = 'u-message';
const noop = () => {};
let notificationStyle_copy = {};
let messageStyle_copy = {};
const positionType = ['topRight', 'bottomRight', 'top', 'bottom' , 'topLeft', 'bottomLeft', ''];
let defaultStyle = {};

let positionObj = {
    "top": {
        messageStyle: {

        },
        notificationStyle: {
            top: defaultTop,
            left: '50%',
            transform: 'translateX( -50%)'
        },
        transitionName: 'top'
    },
    "bottom": {
        messageStyle: {

        },
        notificationStyle: {
            bottom: defaultBottom,
            left: '50%',
            transform: 'translateX( -50%)'
        },
        transitionName: 'bottom'
    },
    "topRight": {
        messageStyle: {
            width:  width
        },
        notificationStyle: {
            top: padding,
            right: padding,
            width: width
        },
        transitionName: 'right'
    },
    "bottomRight": {
        messageStyle: {
            width:  width
        },
        notificationStyle: {
            bottom: bottom,
            right: padding,
            width: width
        },
        transitionName: 'right'
    },
    "topLeft": {
        messageStyle: {
            width:  width
        },
        notificationStyle: {
            top: padding,
            left: padding,
            width: width
        },
        transitionName: 'left'
    },
    "bottomLeft": {
        messageStyle: {
            width: width
        },
        notificationStyle: {
            bottom: bottom,
            left: padding,
            width: width
        },
        transitionName: 'left'
    }
}

function getMessageInstance(position = 'top', callback, keyboard, onEscapeKeyUp) {
    if (messageInstance) {
        callback(messageInstance);
        return;
    }
    switch(position){
        case 'top':
            notificationStyle_copy.top = defaultTop;
            break;
        case 'bottom':
            notificationStyle_copy.bottom = defaultBottom;
            break;
        case 'bottomRight':
            notificationStyle_copy.bottom = bottom;
            break;
        case 'bottomLeft':
            notificationStyle_copy.bottom = bottom;
            break;
        default:
            break;
    }
    if( position !== 'top' && position !== 'bottom'){
        messageStyle_copy.width = width;
    }
    var style = JSON.stringify(notificationStyle_copy) == "{}" ? positionObj[position].notificationStyle : notificationStyle_copy;
    let instanceObj = {
        clsPrefix,
        transitionName: `${clsPrefix}-${positionObj[position].transitionName}`,
        style: Object.assign({}, style, defaultStyle), // 覆盖原来的样式
        position: position,
    }
    if (typeof keyboard === 'boolean') {
        instanceObj.keyboard = keyboard;
    }
    if (typeof onEscapeKeyUp === 'function') {
        instanceObj.onEscapeKeyUp = onEscapeKeyUp;
    }
    Notification.newInstance(instanceObj, instance => {
        messageInstance = instance;
        callback(instance);
    });
}



function notice(content, duration_arg, type, onClose, position, style, keyboard, onEscapeKeyUp, showIcon, icon) {
    if( positionType.findIndex((item) => item === position)<0 ){
        warning(
            false,
            'Failed prop type: Invalid prop `position` supplied to `Message`, expected one of ["top","bottom","topRight","topLeft","bottomRight","bottomLeft"].',
        );
        return
    }
    let duration = duration_arg !== undefined ? duration_arg : defaultDuration;
    notificationStyle_copy = Object.assign({}, positionObj[position].notificationStyle);
    messageStyle_copy = Object.assign({}, positionObj[position].messageStyle);

    let iconType = ({
        info: 'uf uf-i-c-2',
        success: 'uf uf-correct',
        danger: 'uf uf-exc-c',
        warning: 'uf uf-exc-t',
        light: 'uf uf-notification',
        dark: 'uf uf-notification',
        news: 'uf uf-bell',
        infolight: 'uf uf-i-c-2',
        successlight: 'uf uf-correct',
        dangerlight: 'uf uf-exc-c',
        warninglight: 'uf uf-exc-t',
    })[type];

    let positionStyle = JSON.stringify(messageStyle_copy) == "{}" ? positionObj[position].messageStyle : messageStyle_copy;
    defaultStyle = Object.assign({}, positionStyle, style);
    getMessageInstance(position, instance => {
        instance.notice({
            key,
            duration,
            color: type,
            style: Object.assign({}, positionStyle, style),
            content: (
            <div>
                {
                    showIcon ? (
                        <div className={`${clsPrefix}-notice-description-icon`}>
                            {icon ? <i className= { classnames(`${icon}`) } /> : <i className= { classnames(iconType) } />}
                        </div>
                    ) : null
                }
                <div className={`${clsPrefix}-notice-description-content`}>{content}</div>
            </div>
            ),
            onClose,
        });
    }, keyboard, onEscapeKeyUp)
    return (function () {
        let target = key++;
        return function () {
        if (messageInstance) {
            messageInstance.removeNotice(target);
        }
        };
    }());
}

export default {
  create(obj) {
      if(newDuration){ //如果在config方法里设置了duration
        obj.duration = newDuration;
      }
      let content = obj.content || '';
      let duration = typeof obj.duration == 'undefined' ? defaultDuration : obj.duration;
      let color = obj.color || 'light';
      let onClose = obj.onClose || noop;
      let position = obj.position || "top";
      let style = obj.style || {};
      let showIcon = obj.hasOwnProperty('showIcon') ? obj.showIcon : true;
      let icon = obj.hasOwnProperty('icon') ? obj.icon : false;
    return notice(content, duration, color, onClose, position, style, obj.keyboard, obj.onEscapeKeyUp, showIcon, icon);
  },
  config(options) {
    if (options.top !== undefined) {
      defaultTop = options.top;
    }
    if (options.duration !== undefined) {
      defaultDuration = options.duration;
      newDuration = defaultDuration;
    }
    if (options.clsPrefix !== undefined) {
      clsPrefix = options.clsPrefix;
    }
    if (options.defaultBottom !== undefined) {
      defaultBottom = options.defaultBottom;
    }
    if (options.bottom !== undefined) {
      bottom = options.bottom;
    }
    if (options.width !== undefined) {
      width = options.width;
    }
  },
  destroy() {
    if (messageInstance) {
      messageInstance.destroy();
      messageInstance = null;
      defaultDuration = 1.5;
      newDuration = undefined;
      defaultTop = 24;
      defaultBottom = 48;
      bottom = 90;
      padding = 30;
      width = 240;
      notificationStyle_copy = null;
      messageStyle_copy = null;
      defaultStyle = null;
    }
  },
};
