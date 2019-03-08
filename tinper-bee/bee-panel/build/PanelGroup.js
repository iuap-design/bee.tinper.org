'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _tinperBeeCore = require('tinper-bee-core');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var propTypes = {
  //是否是手风琴效果
  accordion: _propTypes2["default"].bool,
  //激活的项
  activeKey: _propTypes2["default"].any,
  //默认的激活的项
  defaultActiveKey: _propTypes2["default"].any,
  //选中函数
  onSelect: _propTypes2["default"].func,
  role: _propTypes2["default"].string
};

var defaultProps = {
  accordion: false,
  clsPrefix: 'u-panel-group'
};

// TODO: Use uncontrollable.

var PanelGroup = function (_React$Component) {
  _inherits(PanelGroup, _React$Component);

  function PanelGroup(props, context) {
    _classCallCheck(this, PanelGroup);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

    _this.handleSelect = _this.handleSelect.bind(_this);

    _this.state = {
      activeKey: props.defaultActiveKey
    };
    return _this;
  }

  PanelGroup.prototype.handleSelect = function handleSelect(key, e) {
    e.preventDefault();

    if (this.props.onSelect) {
      this.props.onSelect(key, e);
    }

    if (this.state.activeKey === key) {
      key = null;
    }

    this.setState({ activeKey: key });
  };

  PanelGroup.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        accordion = _props.accordion,
        propsActiveKey = _props.activeKey,
        className = _props.className,
        children = _props.children,
        defaultActiveKey = _props.defaultActiveKey,
        onSelect = _props.onSelect,
        style = _props.style,
        clsPrefix = _props.clsPrefix,
        others = _objectWithoutProperties(_props, ['accordion', 'activeKey', 'className', 'children', 'defaultActiveKey', 'onSelect', 'style', 'clsPrefix']);

    var activeKey = void 0;
    if (accordion) {
      activeKey = propsActiveKey != null ? propsActiveKey : this.state.activeKey;
      others.role = others.role || 'tablist';
    }

    var classes = {};
    classes['' + clsPrefix] = true;

    return _react2["default"].createElement(
      'div',
      _extends({}, others, {
        className: (0, _classnames2["default"])(className, classes)
      }),
      _react2["default"].Children.map(children, function (child) {
        if (!_react2["default"].isValidElement(child)) {
          return child;
        }
        var childProps = {
          style: child.props.style
        };

        if (accordion) {
          _extends(childProps, {
            headerRole: 'tab',
            panelRole: 'tabpanel',
            collapsible: true,
            expanded: child.props.eventKey === activeKey,
            onSelect: (0, _tinperBeeCore.createChainedFunction)(_this2.handleSelect, child.props.onSelect)
          });
        }

        return (0, _react.cloneElement)(child, childProps);
      })
    );
  };

  return PanelGroup;
}(_react2["default"].Component);

PanelGroup.propTypes = propTypes;
PanelGroup.defaultProps = defaultProps;

exports["default"] = PanelGroup;
module.exports = exports['default'];