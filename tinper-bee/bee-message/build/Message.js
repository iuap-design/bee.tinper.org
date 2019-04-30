'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _beeNotification = require('bee-notification');

var _beeNotification2 = _interopRequireDefault(_beeNotification);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var defaultDuration = 1.5;
var newDuration = void 0;
var defaultTop = 24;
var defaultBottom = 48;
var bottom = 90;
var padding = 30;
var width = 240;
var messageInstance = void 0;
var key = 1;
var clsPrefix = 'u-message';
var noop = function noop() {};

var positionObj = {
    "top": {
        messageStyle: {
            transform: 'translateX( -50%)'
        },
        notificationStyle: {
            top: defaultTop,
            left: '50%'
        },
        transitionName: 'top'
    },
    "bottom": {
        messageStyle: {
            transform: 'translateX( -50%)'
        },
        notificationStyle: {
            bottom: defaultBottom,
            left: '50%'
        },
        transitionName: 'bottom'
    },
    "topRight": {
        messageStyle: {
            width: width
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
            width: width
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
            width: width
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
};

function getMessageInstance() {
    var position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'top';
    var callback = arguments[1];
    var keyboard = arguments[2];
    var onEscapeKeyUp = arguments[3];

    if (messageInstance) {
        callback(messageInstance);
        return;
    }
    switch (position) {
        case 'top':
            positionObj[position].notificationStyle.top = defaultTop;
            break;
        case 'bottom':
            positionObj[position].notificationStyle.bottom = defaultBottom;
            break;
        case 'bottomRight':
            positionObj[position].notificationStyle.bottom = bottom;
            break;
        case 'bottomLeft':
            positionObj[position].notificationStyle.bottom = bottom;
            break;
        default:
            break;
    }
    if (position !== 'top' && position !== 'bottom') {
        positionObj[position].messageStyle.width = width;
    }
    var style = positionObj[position].notificationStyle;
    var instanceObj = {
        clsPrefix: clsPrefix,
        transitionName: clsPrefix + '-' + positionObj[position].transitionName,
        style: style, // 覆盖原来的样式
        position: position
    };
    if (typeof keyboard === 'boolean') {
        instanceObj.keyboard = keyboard;
    }
    if (typeof onEscapeKeyUp === 'function') {
        instanceObj.onEscapeKeyUp = onEscapeKeyUp;
    }
    _beeNotification2["default"].newInstance(instanceObj, function (instance) {
        messageInstance = instance;
        callback(instance);
    });
}

function notice(content, duration, type, onClose, position, style, keyboard, onEscapeKeyUp, showIcon) {
    var iconType = {
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
        warninglight: 'uf uf-exc-t'
    }[type];

    var positionStyle = positionObj[position].messageStyle;
    getMessageInstance(position, function (instance) {
        instance.notice({
            key: key,
            duration: duration,
            color: type,
            style: _extends({}, positionStyle, style),
            content: _react2["default"].createElement(
                'div',
                null,
                showIcon ? _react2["default"].createElement(
                    'div',
                    { className: clsPrefix + '-notice-description-icon' },
                    _react2["default"].createElement('i', { className: (0, _classnames2["default"])(iconType) })
                ) : null,
                _react2["default"].createElement(
                    'div',
                    { className: clsPrefix + '-notice-description-content' },
                    content
                )
            ),
            onClose: onClose
        });
    }, keyboard, onEscapeKeyUp);
    return function () {
        var target = key++;
        return function () {
            if (messageInstance) {
                messageInstance.removeNotice(target);
            }
        };
    }();
}

exports["default"] = {
    create: function create(obj) {
        if (newDuration) {
            //如果在config方法里设置了duration
            obj.duration = newDuration;
        }
        var content = obj.content || '';
        var duration = typeof obj.duration == 'undefined' ? defaultDuration : obj.duration;
        var color = obj.color || 'light';
        var onClose = obj.onClose || noop;
        var position = obj.position || "top";
        var style = obj.style || {};
        var showIcon = obj.showIcon || true;
        return notice(content, duration, color, onClose, position, style, obj.keyboard, obj.onEscapeKeyUp, showIcon);
    },
    config: function config(options) {
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
    destroy: function destroy() {
        if (messageInstance) {
            messageInstance.destroy();
            messageInstance = null;
        }
    }
};
module.exports = exports['default'];