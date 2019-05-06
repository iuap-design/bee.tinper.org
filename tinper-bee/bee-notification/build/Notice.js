'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _beeIcon = require('bee-icon');

var _beeIcon2 = _interopRequireDefault(_beeIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var propTypes = {
  duration: _propTypes2["default"].number,
  onClose: _propTypes2["default"].func,
  children: _propTypes2["default"].any,
  color: _propTypes2["default"].oneOf(['info', 'success', 'danger', 'warning', 'light', 'dark', 'news', 'infolight', 'successlight', 'dangerlight', 'warninglight']),
  title: _propTypes2["default"].any
};

function noop() {}

var defaultProps = {
  onEnd: noop,
  onClose: noop,
  duration: 4.5,
  closable: true
};

var Notice = function (_React$Component) {
  _inherits(Notice, _React$Component);

  function Notice(props) {
    _classCallCheck(this, Notice);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.clearCloseTimer = _this.clearCloseTimer.bind(_this);
    _this.close = _this.close.bind(_this);
    return _this;
  }

  Notice.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    if (this.props.duration) {
      this.closeTimer = setTimeout(function () {
        _this2.close();
      }, this.props.duration * 1000);
    }
  };

  Notice.prototype.componentWillUnmount = function componentWillUnmount() {
    this.clearCloseTimer();
  };

  Notice.prototype.clearCloseTimer = function clearCloseTimer() {
    if (this.closeTimer) {
      clearTimeout(this.closeTimer);
      this.closeTimer = null;
    }
  };

  Notice.prototype.close = function close() {
    this.clearCloseTimer();
    this.props.onClose();
  };

  Notice.prototype.render = function render() {
    var _classes;

    var _props = this.props,
        closable = _props.closable,
        clsPrefix = _props.clsPrefix,
        className = _props.className,
        style = _props.style,
        children = _props.children,
        color = _props.color,
        title = _props.title;

    var componentClass = clsPrefix + '-notice';
    var classes = (_classes = {}, _defineProperty(_classes, '' + componentClass, 1), _defineProperty(_classes, componentClass + '-closable', closable), _defineProperty(_classes, className, !!className), _classes);
    if (color) {
      classes[componentClass + '-' + color] = true;
    }
    return _react2["default"].createElement(
      'div',
      { className: (0, _classnames2["default"])(classes), style: style, onClick: this.close },
      _react2["default"].createElement(
        'div',
        { className: componentClass + '-content' },
        title && _react2["default"].createElement(
          'div',
          { className: componentClass + '-title' },
          title
        ),
        _react2["default"].createElement(
          'div',
          { className: componentClass + '-description' },
          children
        )
      ),
      closable ? _react2["default"].createElement(
        'a',
        { tabIndex: '0', onClick: this.close, className: componentClass + '-close' },
        _react2["default"].createElement(
          'span',
          { className: componentClass + '-close-x' },
          _react2["default"].createElement(_beeIcon2["default"], { type: 'uf-close' })
        )
      ) : null
    );
  };

  return Notice;
}(_react2["default"].Component);

;

Notice.propTypes = propTypes;
Notice.defaultProps = defaultProps;

exports["default"] = Notice;
module.exports = exports['default'];