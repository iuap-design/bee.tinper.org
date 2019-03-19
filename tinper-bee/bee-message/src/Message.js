import React from 'react';
import Notification from 'bee-notification';
import classnames from 'classnames';

let defaultDuration = 1.5;
let defaultTop = 0;
let defaultBottom = 48;
let bottom = 90;
let padding = 30;
let width =200;
let messageInstance;
let key = 1;
let clsPrefix = 'u-message';
const noop = () => {};

let positionObj = {
    "top": {
        messageStyle: {
            width: "100%"
        },
        notificationStyle: {
            top: defaultTop,
            width: "100%"
        },
        transitionName: 'top'
    },
    "bottom": {
        messageStyle: {
            width: "100%"
        },
        notificationStyle: {
            bottom: defaultBottom,
            width: "100%"
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
    var style = positionObj[position].notificationStyle;
    let instanceObj = {
        clsPrefix,
        transitionName: `${clsPrefix}-${positionObj[position].transitionName}`,
        style: style, // 覆盖原来的样式
        position: '',
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



function notice(content, duration, type, onClose, position, style, keyboard, onEscapeKeyUp, showIcon) {
  let iconType = ({
    info: 'uf uf-i-c-2',
    success: 'uf uf-correct',
    danger: 'uf uf-close-c',
    warning: 'uf uf-exc-t',
    light: 'uf uf-notification',
    dark: 'uf uf-bubble',
    news: 'uf uf-bell',
    infolight: 'uf uf-i-c-2',
    successlight: 'uf uf-correct',
    dangerlight: 'uf uf-close-c',
    warninglight: 'uf uf-exc-t',
  })[type];

  let positionStyle = positionObj[position].messageStyle;

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
                        <i className= { classnames(iconType) } />
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
      let content = obj.content || '';
      let duration = typeof obj.duration == undefined ? defaultDuration : obj.duration;
      let color = obj.color || 'dark';
      let onClose = obj.onClose || noop;
      let position = obj.position || "top";
      let style = obj.style || {};
      let showIcon = obj.showIcon || false;
    return notice(content, duration, color, onClose, position, style, obj.keyboard, obj.onEscapeKeyUp, showIcon);
  },
  config(options) {
    if (options.top !== undefined) {
      defaultTop = options.top;
    }
    if (options.duration !== undefined) {
      defaultDuration = options.duration;
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
      bottom = options.width;
    }
  },
  destroy() {
    if (messageInstance) {
      messageInstance.destroy();
      messageInstance = null;
    }
  },
};
