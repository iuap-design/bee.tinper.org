'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _beeIcon = require('bee-icon');

var _beeIcon2 = _interopRequireDefault(_beeIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var propTypes = {
    /**
     * @title 样式 
     */
    style: _propTypes2["default"].object,

    /**
     * @title 形状 
     */
    bordered: _propTypes2["default"].bool,

    /**
     * @title 类型
     */
    colors: _propTypes2["default"].string,

    /**
     * @title 是否禁用
     * @veIgnore
     */
    disabled: _propTypes2["default"].bool,

    /**
    * @title 是否删除
    * @veIgnore
    */
    deleted: _propTypes2["default"].bool,

    /**
     * @title 是否选中
     * @veIgnore
     */
    select: _propTypes2["default"].bool,

    /**
     * @title 标签是否显示关闭图标
     * @veIgnore
     */
    visible: _propTypes2["default"].bool,

    /**
     * @title 类名
     * @veIgnore
     */
    className: _propTypes2["default"].string,

    tagClick: _propTypes2["default"].func,
    iconClick: _propTypes2["default"].func
};

var defaultProps = {
    disabled: false,
    deleted: false,
    visible: false,
    clsPrefix: 'u-tag',
    bordered: false,
    select: false
};

var colorsMap = {
    dark: 'dark',
    light: 'light',
    primary: 'primary',
    success: 'success',
    warning: 'warning',
    danger: 'danger',
    info: 'info'
};

var Tag = function (_Component) {
    _inherits(Tag, _Component);

    function Tag(props) {
        _classCallCheck(this, Tag);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.click = function (e) {
            _this.setState({
                selected: !_this.state.selected
            });
            _this.props.tagClick && _this.props.tagClick(e);
        };

        _this.onDelete = function (e) {
            _this.props.onClose && _this.props.onClose(e);
        };

        _this.state = {
            selected: false
        };
        return _this;
    }

    Tag.prototype.render = function render() {
        var _props = this.props,
            colors = _props.colors,
            disabled = _props.disabled,
            deleted = _props.deleted,
            select = _props.select,
            className = _props.className,
            bordered = _props.bordered,
            children = _props.children,
            clsPrefix = _props.clsPrefix,
            visible = _props.visible,
            others = _objectWithoutProperties(_props, ['colors', 'disabled', 'deleted', 'select', 'className', 'bordered', 'children', 'clsPrefix', 'visible']);

        var clsObj = {};
        if (className) {
            clsObj[className] = true;
        }
        if (colorsMap[colors]) {
            clsObj[clsPrefix + '-' + colorsMap[colors]] = true;
        }
        if (bordered) {
            clsObj[clsPrefix + '-border'] = bordered;
        }
        if (select) {
            clsObj[clsPrefix + '-select'] = select;
        }
        if (deleted) {
            clsObj[clsPrefix + '-delete'] = deleted;
        }

        // 选择标签选中时，改变标签当前状态
        if (this.props.select == true) {
            if (this.state.selected) {
                clsObj[clsPrefix + '-selected'] = true;
            }
        }

        var classes = (0, _classnames2["default"])(clsPrefix, clsObj);
        return _react2["default"].createElement(
            'span',
            _extends({}, others, { className: classes, disabled: disabled, bordered: bordered, deleted: deleted, select: select, onClick: this.click }),
            children,
            visible ? _react2["default"].createElement(_beeIcon2["default"], { type: 'uf-close', onClick: this.props.onClose }) : ''
        );
    };

    return Tag;
}(_react.Component);

Tag.propTypes = propTypes;
Tag.defaultProps = defaultProps;

exports["default"] = Tag;
module.exports = exports['default'];