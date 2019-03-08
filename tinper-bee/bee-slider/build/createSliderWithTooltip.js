'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports["default"] = createSliderWithTooltip;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _beeTooltip = require('bee-tooltip');

var _beeTooltip2 = _interopRequireDefault(_beeTooltip);

var _Handle = require('./Handle');

var _Handle2 = _interopRequireDefault(_Handle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * This source code is quoted from rc-slider.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * homepage: https://github.com/react-component/slider
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


function createSliderWithTooltip(Component) {
  var _class, _temp;

  return _temp = _class = function (_React$Component) {
    _inherits(ComponentWrapper, _React$Component);

    function ComponentWrapper(props) {
      _classCallCheck(this, ComponentWrapper);

      var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

      _this.handleTooltipVisibleChange = function (index, visible) {
        _this.setState(function (prevState) {
          return {
            visibles: _extends({}, prevState.visibles, _defineProperty({}, index, visible))
          };
        });
      };

      _this.handleWithTooltip = function (_ref) {
        var value = _ref.value,
            dragging = _ref.dragging,
            index = _ref.index,
            disabled = _ref.disabled,
            restProps = _objectWithoutProperties(_ref, ['value', 'dragging', 'index', 'disabled']);

        var _this$props = _this.props,
            tipFormatter = _this$props.tipFormatter,
            tipProps = _this$props.tipProps,
            handleStyle = _this$props.handleStyle;

        var _tipProps$prefixCls = tipProps.prefixCls,
            prefixCls = _tipProps$prefixCls === undefined ? 'u-slider-tooltip' : _tipProps$prefixCls,
            _tipProps$overlay = tipProps.overlay,
            overlay = _tipProps$overlay === undefined ? tipFormatter(value) : _tipProps$overlay,
            _tipProps$placement = tipProps.placement,
            placement = _tipProps$placement === undefined ? 'top' : _tipProps$placement,
            restTooltipProps = _objectWithoutProperties(tipProps, ['prefixCls', 'overlay', 'placement']);

        return _react2["default"].createElement(
          _beeTooltip2["default"],
          _extends({}, restTooltipProps, {
            className: prefixCls,
            overlay: overlay,
            shouldUpdatePosition: true,
            placement: placement,
            visible: !disabled && (_this.state.visibles[index] || dragging),
            key: index
          }),
          _react2["default"].createElement(_Handle2["default"], _extends({}, restProps, {
            style: _extends({}, handleStyle[0]),
            value: value,
            onMouseEnter: function onMouseEnter() {
              return _this.handleTooltipVisibleChange(index, true);
            },
            onMouseLeave: function onMouseLeave() {
              return _this.handleTooltipVisibleChange(index, false);
            }
          }))
        );
      };

      _this.state = { visibles: {} };
      return _this;
    }

    ComponentWrapper.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {};

    ComponentWrapper.prototype.render = function render() {
      return _react2["default"].createElement(Component, _extends({}, this.props, { handle: this.handleWithTooltip }));
    };

    return ComponentWrapper;
  }(_react2["default"].Component), _class.propTypes = {
    tipFormatter: _propTypes2["default"].func,
    handleStyle: _propTypes2["default"].arrayOf(_propTypes2["default"].object),
    tipProps: _propTypes2["default"].object
  }, _class.defaultProps = {
    tipFormatter: function tipFormatter(value) {
      return value;
    },

    handleStyle: [{}],
    tipProps: {}
  }, _temp;
}
module.exports = exports['default'];