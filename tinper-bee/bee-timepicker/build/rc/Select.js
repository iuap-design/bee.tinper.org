'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames3 = require('classnames');

var _classnames4 = _interopRequireDefault(_classnames3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /* eslint jsx-a11y/no-noninteractive-element-to-interactive-role: 0 */


var scrollTo = function scrollTo(element, to, duration) {
  var requestAnimationFrame = window.requestAnimationFrame || function requestAnimationFrameTimeout() {
    return setTimeout(arguments[0], 10); // eslint-disable-line
  };
  // jump to target if duration zero
  if (duration <= 0) {
    element.scrollTop = to;
    return;
  }
  var difference = to - element.scrollTop;
  var perTick = difference / duration * 10;

  requestAnimationFrame(function () {
    element.scrollTop += perTick;
    if (element.scrollTop === to) return;
    scrollTo(element, to, duration - 10);
  });
};

var Select = function (_Component) {
  _inherits(Select, _Component);

  function Select() {
    var _temp, _this, _ret;

    _classCallCheck(this, Select);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      active: false
    }, _this.onSelect = function (value) {
      var _this$props = _this.props,
          onSelect = _this$props.onSelect,
          type = _this$props.type;

      onSelect(type, value);
    }, _this.handleMouseEnter = function (e) {
      var onMouseEnter = _this.props.onMouseEnter;

      _this.setState({ active: true });
      onMouseEnter(e);
    }, _this.handleMouseLeave = function () {
      _this.setState({ active: false });
    }, _this.saveList = function (node) {
      _this.list = node;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Select.prototype.componentDidMount = function componentDidMount() {
    // jump to selected option
    this.scrollToSelected(0);
  };

  Select.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    var selectedIndex = this.props.selectedIndex;
    // smooth scroll to selected option

    if (prevProps.selectedIndex !== selectedIndex) {
      this.scrollToSelected(120);
    }
  };

  Select.prototype.getOptions = function getOptions() {
    var _this2 = this;

    var _props = this.props,
        options = _props.options,
        selectedIndex = _props.selectedIndex,
        prefixCls = _props.prefixCls;

    return options.map(function (item, index) {
      var _classnames;

      var cls = (0, _classnames4["default"])((_classnames = {}, _defineProperty(_classnames, prefixCls + '-select-option-selected', selectedIndex === index), _defineProperty(_classnames, prefixCls + '-select-option-disabled', item.disabled), _classnames));
      var onClick = item.disabled ? undefined : function () {
        _this2.onSelect(item.value);
      };
      return _react2["default"].createElement(
        'li',
        { role: 'button', onClick: onClick, className: cls, key: index, disabled: item.disabled },
        item.value
      );
    });
  };

  Select.prototype.scrollToSelected = function scrollToSelected(duration) {
    // move to selected item
    var selectedIndex = this.props.selectedIndex;

    var select = _reactDom2["default"].findDOMNode(this);
    var list = _reactDom2["default"].findDOMNode(this.list);
    if (!list) {
      return;
    }
    var index = selectedIndex;
    if (index < 0) {
      index = 0;
    }
    var topOption = list.children[index];
    var to = topOption.offsetTop;
    scrollTo(select, to, duration);
  };

  Select.prototype.render = function render() {
    var _props2 = this.props,
        prefixCls = _props2.prefixCls,
        options = _props2.options;
    var active = this.state.active;

    if (options.length === 0) {
      return null;
    }
    var cls = (0, _classnames4["default"])(prefixCls + '-select', _defineProperty({}, prefixCls + '-select-active', active));
    return _react2["default"].createElement(
      'div',
      {
        className: cls,
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave
      },
      _react2["default"].createElement(
        'ul',
        { ref: this.saveList },
        this.getOptions()
      )
    );
  };

  return Select;
}(_react.Component);

Select.propTypes = {
  prefixCls: _propTypes2["default"].string,
  options: _propTypes2["default"].array,
  selectedIndex: _propTypes2["default"].number,
  type: _propTypes2["default"].string,
  onSelect: _propTypes2["default"].func,
  onMouseEnter: _propTypes2["default"].func
};
exports["default"] = Select;
module.exports = exports['default'];