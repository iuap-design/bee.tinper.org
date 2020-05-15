'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _splitObject3 = require('./splitObject');

var _splitObject4 = _interopRequireDefault(_splitObject3);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

// Timeline
var propTypes = {
  /** 指定圆圈颜色 */
  color: _propTypes2["default"].string,
  dot: _propTypes2["default"].node,
  pending: _propTypes2["default"].bool
};
var defaultProps = {
  prefixCls: 'u-timeline',
  color: 'primary',
  last: false,
  pending: false
};

var TimelineItem = function (_React$Component) {
  _inherits(TimelineItem, _React$Component);

  function TimelineItem() {
    _classCallCheck(this, TimelineItem);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  TimelineItem.prototype.render = function render() {
    var _classNames, _classNames2;

    var _splitObject = (0, _splitObject4["default"])(this.props, ['prefixCls', 'color', 'last', 'children', 'pending', 'className', 'dot']),
        _splitObject2 = _slicedToArray(_splitObject, 2),
        _splitObject2$ = _splitObject2[0],
        prefixCls = _splitObject2$.prefixCls,
        color = _splitObject2$.color,
        last = _splitObject2$.last,
        children = _splitObject2$.children,
        pending = _splitObject2$.pending,
        className = _splitObject2$.className,
        dot = _splitObject2$.dot,
        restProps = _splitObject2[1];

    var itemClassName = (0, _classnames2["default"])((_classNames = {}, _defineProperty(_classNames, prefixCls + '-item', true), _defineProperty(_classNames, prefixCls + '-item-last', last), _defineProperty(_classNames, prefixCls + '-item-pending', pending), _classNames), className);

    var dotClassName = (0, _classnames2["default"])((_classNames2 = {}, _defineProperty(_classNames2, prefixCls + '-item-head', true), _defineProperty(_classNames2, prefixCls + '-item-head-custom', dot), _defineProperty(_classNames2, prefixCls + '-item-head-' + color, true), _classNames2));

    return _react2["default"].createElement(
      'li',
      _extends({}, restProps, { className: itemClassName }),
      _react2["default"].createElement('div', { className: prefixCls + '-item-tail' }),
      _react2["default"].createElement(
        'div',
        {
          className: dotClassName,
          style: { borderColor: /blue|red|green/.test(color) ? null : color }
        },
        dot
      ),
      _react2["default"].createElement(
        'div',
        { className: prefixCls + '-item-content' },
        children
      )
    );
  };

  return TimelineItem;
}(_react2["default"].Component);

TimelineItem.propTypes = propTypes;
TimelineItem.defaultProps = defaultProps;
exports["default"] = TimelineItem;
module.exports = exports['default'];