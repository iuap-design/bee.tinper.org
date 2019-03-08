'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _beeAnimate = require('bee-animate');

var _beeAnimate2 = _interopRequireDefault(_beeAnimate);

var _createChainedFunction = require('tinper-bee-core/lib/createChainedFunction');

var _createChainedFunction2 = _interopRequireDefault(_createChainedFunction);

var _ownerDocument = require('bee-overlay/build/utils/ownerDocument');

var _ownerDocument2 = _interopRequireDefault(_ownerDocument);

var _addEventListener = require('bee-overlay/build/utils/addEventListener');

var _addEventListener2 = _interopRequireDefault(_addEventListener);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Notice = require('./Notice');

var _Notice2 = _interopRequireDefault(_Notice);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var seed = 0;
var now = Date.now();

function getUuid() {
  return 'uNotification_' + now + '_' + seed++;
}

var propTypes = {
  show: _propTypes2["default"].bool,
  clsPrefix: _propTypes2["default"].string,
  style: _propTypes2["default"].object,
  position: _propTypes2["default"].oneOf(['topRight', 'bottomRight', '']),
  transitionName: _propTypes2["default"].string,
  keyboard: _propTypes2["default"].bool, // 按esc键是否关闭notice
  onEscapeKeyUp: _propTypes2["default"].func, // 设置esc键特殊钩子函数
  animation: _propTypes2["default"].oneOfType([_propTypes2["default"].string, _propTypes2["default"].object])
};

var defaultProps = {
  clsPrefix: 'u-notification',
  animation: 'fade',
  keyboard: true,
  position: 'topRight'
};

var Notification = function (_Component) {
  _inherits(Notification, _Component);

  function Notification(props) {
    _classCallCheck(this, Notification);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.handleDocumentKeyUp = function (e) {
      if (_this.props.keyboard && e.keyCode === 27 && _this.state.notices.length) {
        _this.setState(function (previousState) {
          previousState.notices.shift();
          return {
            notices: previousState.notices
          };
        });
        if (_this.props.onEscapeKeyUp) {
          _this.props.onEscapeKeyUp(e);
        }
      }
    };

    _this.state = {
      notices: []
    };
    _this.add = _this.add.bind(_this);
    _this.remove = _this.remove.bind(_this);

    return _this;
  }

  Notification.prototype.componentDidMount = function componentDidMount() {
    // 给document绑定keyup事件
    var doc = (0, _ownerDocument2["default"])(this);
    this._onDocumentKeyupListener = (0, _addEventListener2["default"])(doc, 'keyup', this.handleDocumentKeyUp);
  };

  Notification.prototype.componentWillUnmount = function componentWillUnmount() {
    this._onDocumentKeyupListener.remove();
  };

  Notification.prototype.getTransitionName = function getTransitionName() {
    var props = this.props;
    var transitionName = props.transitionName;
    if (!transitionName && props.animation) {
      transitionName = props.clsPrefix + '-' + props.animation;
    }
    return transitionName;
  };

  Notification.prototype.add = function add(notice) {
    var key = notice.key = notice.key || getUuid();
    this.setState(function (previousState) {
      var notices = previousState.notices;
      if (!notices.filter(function (v) {
        return v.key === key;
      }).length) {
        return {
          notices: notices.concat(notice)
        };
      }
    });
  };

  Notification.prototype.remove = function remove(key) {
    this.setState(function (previousState) {
      return {
        notices: previousState.notices.filter(function (notice) {
          return notice.key !== key;
        })
      };
    });
  };

  /**
   * 处理绑定在document上的keyup事件
   */


  Notification.prototype.render = function render() {
    var _this2 = this,
        _classes;

    var _props = this.props,
        clsPrefix = _props.clsPrefix,
        className = _props.className,
        position = _props.position,
        style = _props.style;

    var noticeNodes = this.state.notices.map(function (notice) {
      var onClose = (0, _createChainedFunction2["default"])(_this2.remove.bind(_this2, notice.key), notice.onClose);
      return _react2["default"].createElement(
        _Notice2["default"],
        _extends({
          clsPrefix: clsPrefix
        }, notice, {
          onClose: onClose
        }),
        notice.content
      );
    });
    var classes = (_classes = {}, _defineProperty(_classes, clsPrefix, 1), _defineProperty(_classes, className, !!className), _classes);
    if (position) {
      classes[clsPrefix + '-' + position] = !!position;
    }

    return _react2["default"].createElement(
      'div',
      { className: (0, _classnames2["default"])(className, classes), style: style },
      _react2["default"].createElement(
        _beeAnimate2["default"],
        { transitionName: this.getTransitionName() },
        noticeNodes
      )
    );
  };

  return Notification;
}(_react.Component);

;

Notification.propTypes = propTypes;
Notification.defaultProps = defaultProps;

Notification.newInstance = function newNotificationInstance(properties, callback) {
  if (typeof callback !== 'function') {
    console.error('You must introduce callback as the second parameter of Notification.newInstance().');
    return;
  }
  var props = properties || {};
  var div = document.createElement('div');
  document.body.appendChild(div);

  var called = false;
  function ref(notification) {
    if (called) {
      return;
    }
    called = true;
    callback({
      notice: function notice(noticeProps) {
        notification.add(noticeProps);
      },
      removeNotice: function removeNotice(key) {
        notification.remove(key);
      },

      component: notification,
      destroy: function destroy() {
        _reactDom2["default"].unmountComponentAtNode(div);
        document.body.removeChild(div);
      }
    });
  }
  _reactDom2["default"].render(_react2["default"].createElement(Notification, _extends({}, props, { ref: ref })), div);
};

exports["default"] = Notification;
module.exports = exports['default'];