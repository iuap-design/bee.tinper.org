'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _beeButton = require('bee-button');

var _beeButton2 = _interopRequireDefault(_beeButton);

var _beeIcon = require('bee-icon');

var _beeIcon2 = _interopRequireDefault(_beeIcon);

var _Modal = require('./Modal');

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var propTypes = {
    title: _propTypes2["default"].string,
    keywords: _propTypes2["default"].string,
    content: _propTypes2["default"].string,
    onOk: _propTypes2["default"].func,
    onCancel: _propTypes2["default"].func,
    show: _propTypes2["default"].bool,
    locale: _propTypes2["default"].object
};

var defaultProps = {
    // title: "提示信息",
    onOk: function onOk() {},
    onCancel: function onCancel() {},
    content: "确认要删除吗 ?",
    show: false,
    keyword: '删除',
    locale: {
        'ok': '确定',
        'gotit': '知道了',
        'cancel': '取消'
    }
};

var AlertDialog = function (_Component) {
    _inherits(AlertDialog, _Component);

    function AlertDialog(props) {
        _classCallCheck(this, AlertDialog);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.state = {
            show: true
        };
        return _this;
    }

    AlertDialog.prototype.render = function render() {
        var _this2 = this;

        var _props = this.props,
            close = _props.close,
            title = _props.title,
            keyword = _props.keyword,
            content = _props.content,
            onOk = _props.onOk,
            onCancel = _props.onCancel,
            locale = _props.locale;
        //按钮组 

        return _react2["default"].createElement(
            'span',
            null,
            _react2["default"].createElement(
                _Modal2["default"],
                {
                    show: this.state.show,
                    className: 'ac-confirm',
                    onHide: close,
                    draggable: true,
                    resizable: true,
                    width: 400
                },
                title ? _react2["default"].createElement(
                    _Modal2["default"].Header,
                    { closeButton: true, className: 'ac-confirm-header' },
                    _react2["default"].createElement(
                        _Modal2["default"].Title,
                        { className: 'ac-confirm-header-title' },
                        title
                    )
                ) : null,
                _react2["default"].createElement(
                    _Modal2["default"].Body,
                    { className: 'ac-confirm-body' },
                    _react2["default"].createElement(
                        'span',
                        { className: 'ac-confirm-body-title' },
                        _react2["default"].createElement(_beeIcon2["default"], { type: 'uf-exc-c-2', className: 'ac-confirm-body-title-icon' }),
                        _react2["default"].createElement(
                            'span',
                            { className: 'ac-confirm-body-title-keyword' },
                            keyword
                        )
                    ),
                    _react2["default"].createElement(
                        'span',
                        { className: 'ac-confirm-body-content' },
                        content
                    )
                ),
                _react2["default"].createElement(
                    _Modal2["default"].Footer,
                    { className: 'ac-confirm-footer' },
                    _react2["default"].createElement(
                        _beeButton2["default"],
                        { colors: 'secondary', onClick: function onClick() {
                                _this2.setState({
                                    show: false
                                });
                                onCancel();
                            } },
                        locale.cancel
                    ),
                    _react2["default"].createElement(
                        _beeButton2["default"],
                        { colors: 'primary', onClick: function onClick() {
                                _this2.setState({
                                    show: false
                                });
                                onOk();
                            } },
                        locale.ok
                    )
                )
            )
        );
    };

    return AlertDialog;
}(_react.Component);

AlertDialog.propTypes = propTypes;
AlertDialog.defaultProps = defaultProps;
exports["default"] = AlertDialog;
module.exports = exports['default'];