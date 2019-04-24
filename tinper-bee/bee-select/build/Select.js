"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _RcSelect = require("./RcSelect");

var _RcSelect2 = _interopRequireDefault(_RcSelect);

var _Option = require("./Option");

var _Option2 = _interopRequireDefault(_Option);

var _OptGroup = require("./OptGroup");

var _OptGroup2 = _interopRequireDefault(_OptGroup);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * This source code is quoted from rc-select.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * homepage: https://github.com/react-component/select
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var SelectContext = {
  antLocale: {
    Select: _propTypes2["default"].any
  }
};

var defaultProps = {
  clsPrefix: "u-select",
  showSearch: false,
  transitionName: "slide-up",
  choiceTransitionName: "zoom",
  enterKeyDown: true
};

var propTypes = {
  clsPrefix: _propTypes2["default"].string,
  className: _propTypes2["default"].string,
  value: _propTypes2["default"].oneOfType([_propTypes2["default"].string, _propTypes2["default"].any]),
  defaultValue: _propTypes2["default"].oneOfType([_propTypes2["default"].node, _propTypes2["default"].array, _propTypes2["default"].any]),
  size: _propTypes2["default"].oneOf(["default", "lg", "sm"]),
  combobox: _propTypes2["default"].bool,
  notFoundContent: _propTypes2["default"].oneOfType([_propTypes2["default"].node, _propTypes2["default"].array, _propTypes2["default"].any]),
  showSearch: _propTypes2["default"].bool,
  open: _propTypes2["default"].bool,
  transitionName: _propTypes2["default"].string,
  choiceTransitionName: _propTypes2["default"].string,
  multiple: _propTypes2["default"].bool,
  allowClear: _propTypes2["default"].bool,
  filterOption: _propTypes2["default"].oneOfType([_propTypes2["default"].bool, _propTypes2["default"].func]),
  tags: _propTypes2["default"].bool,
  onSelect: _propTypes2["default"].func,
  onDeselect: _propTypes2["default"].func,
  onSearch: _propTypes2["default"].func,
  placeholder: _propTypes2["default"].string,
  dropdownMatchSelectWidth: _propTypes2["default"].bool,
  optionFilterProp: _propTypes2["default"].string,
  optionLabelProp: _propTypes2["default"].string,
  disabled: _propTypes2["default"].bool,
  defaultActiveFirstOption: _propTypes2["default"].bool,
  labelInValue: _propTypes2["default"].bool,
  getPopupContainer: _propTypes2["default"].func,
  style: _propTypes2["default"].object,
  dropdownStyle: _propTypes2["default"].object,
  dropdownMenuStyle: _propTypes2["default"].object,
  onChange: _propTypes2["default"].func,
  scrollToEnd: _propTypes2["default"].func,
  onKeyDown: _propTypes2["default"].func,
  enterKeyDown: _propTypes2["default"].bool //是否启用 enter 和 space 键
};

var Select = function (_Component) {
  _inherits(Select, _Component);

  function Select(props) {
    _classCallCheck(this, Select);

    return _possibleConstructorReturn(this, _Component.call(this, props));
  }

  Select.prototype.render = function render() {
    var _classNames;

    var _props = this.props,
        clsPrefix = _props.clsPrefix,
        _props$className = _props.className,
        className = _props$className === undefined ? "" : _props$className,
        size = _props.size,
        data = _props.data,
        showSearch = _props.showSearch,
        combobox = _props.combobox;
    var _props2 = this.props,
        _props2$notFoundConte = _props2.notFoundContent,
        notFoundContent = _props2$notFoundConte === undefined ? "Not Found" : _props2$notFoundConte,
        optionLabelProp = _props2.optionLabelProp;


    var cls = (0, _classnames2["default"])((_classNames = {}, _defineProperty(_classNames, clsPrefix + "-lg", size === "lg"), _defineProperty(_classNames, clsPrefix + "-sm", size === "sm"), _defineProperty(_classNames, clsPrefix + "-show-search", showSearch), _classNames), className);

    var antLocale = this.context.antLocale;

    if (antLocale && antLocale.Select) {
      notFoundContent = "notFoundContent" in this.props ? notFoundContent : antLocale.Select.notFoundContent;
    }

    if (combobox) {
      notFoundContent = null;
      // children 带 dom 结构时，无法填入输入框
      optionLabelProp = optionLabelProp || "value";
    }
    if (data) {
      data.map(function (item) {
        return _react2["default"].createElement(
          _Option2["default"],
          { value: item.value },
          item.key
        );
      });
    }
    return data ? _react2["default"].createElement(
      _RcSelect2["default"],
      _extends({}, this.props, {
        className: cls,
        optionLabelProp: optionLabelProp || "children",
        notFoundContent: notFoundContent
      }),
      data.map(function (item) {
        return _react2["default"].createElement(
          _Option2["default"],
          { key: item.value, value: item.value, disabled: item.disabled ? true : false },
          item.key
        );
      })
    ) : _react2["default"].createElement(_RcSelect2["default"], _extends({}, this.props, {
      className: cls,
      optionLabelProp: optionLabelProp || "children",
      notFoundContent: notFoundContent
    }));
  };

  return Select;
}(_react.Component);

Select.context = SelectContext;
Select.propTypes = propTypes;
Select.defaultProps = defaultProps;
Select.Option = _Option2["default"];
Select.OptGroup = _OptGroup2["default"];

exports["default"] = Select;
module.exports = exports["default"];