'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _rcTreeSelect = require('rc-tree-select');

var _rcTreeSelect2 = _interopRequireDefault(_rcTreeSelect);

var _beeIcon = require('bee-icon');

var _beeIcon2 = _interopRequireDefault(_beeIcon);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _omit = require('omit.js');

var _omit2 = _interopRequireDefault(_omit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * This source code is quoted from rc-tree-select.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * homepage: https://github.com/react-component/tree-select
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var defaultProps = {
    prefixCls: 'u-select',
    transitionName: 'slide-up',
    choiceTransitionName: 'zoom',
    showSearch: false,
    notFoundContent: "无匹配结果"
};
var propTypes = {
    getPopupContainer: _propTypes2["default"].func
};

var TreeSelect = function (_Component) {
    _inherits(TreeSelect, _Component);

    function TreeSelect(props) {
        _classCallCheck(this, TreeSelect);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.saveTreeSelect = function (node) {
            _this.rcTreeSelect = node;
        };

        _this.renderSwitcherIcon = function (prefixCls, _ref) {
            var isLeaf = _ref.isLeaf,
                loading = _ref.loading;

            if (loading) {
                return _react2["default"].createElement(_beeIcon2["default"], { type: 'loading', className: prefixCls + '-switcher-loading-icon' });
            }
            if (isLeaf) {
                return null;
            }
            return _react2["default"].createElement(_beeIcon2["default"], { type: 'uf-triangle-down', className: prefixCls + '-switcher-icon' });
        };

        (0, _warning2["default"])(props.multiple !== false || !props.treeCheckable, 'TreeSelect', '`multiple` will alway be `true` when `treeCheckable` is true');
        return _this;
    }

    TreeSelect.prototype.focus = function focus() {
        this.rcTreeSelect.focus();
    };

    TreeSelect.prototype.blur = function blur() {
        this.rcTreeSelect.blur();
    };

    TreeSelect.prototype.render = function render() {
        var _classNames;

        var _props = this.props,
            prefixCls = _props.prefixCls,
            className = _props.className,
            size = _props.size,
            notFoundContent = _props.notFoundContent,
            dropdownStyle = _props.dropdownStyle,
            dropdownClassName = _props.dropdownClassName,
            suffixIcon = _props.suffixIcon,
            getPopupContainer = _props.getPopupContainer,
            restProps = _objectWithoutProperties(_props, ['prefixCls', 'className', 'size', 'notFoundContent', 'dropdownStyle', 'dropdownClassName', 'suffixIcon', 'getPopupContainer']);

        var rest = (0, _omit2["default"])(restProps, ['inputIcon', 'removeIcon', 'clearIcon', 'switcherIcon']);

        var cls = (0, _classnames2["default"])((_classNames = {}, _defineProperty(_classNames, prefixCls + '-lg', size === 'large'), _defineProperty(_classNames, prefixCls + '-sm', size === 'small'), _classNames), className);

        // showSearch: single - false, multiple - true
        var showSearch = restProps.showSearch;

        if (!('showSearch' in restProps)) {
            showSearch = !!(restProps.multiple || restProps.treeCheckable);
        }

        var checkable = rest.treeCheckable;
        if (checkable) {
            checkable = _react2["default"].createElement('span', { className: prefixCls + '-tree-checkbox-inner' });
        }

        var inputIcon = suffixIcon && (_react2["default"].isValidElement(suffixIcon) ? _react2["default"].cloneElement(suffixIcon) : suffixIcon) || _react2["default"].createElement(_beeIcon2["default"], { type: 'uf-treearrow-down', className: prefixCls + '-arrow-icon' });

        var removeIcon = _react2["default"].createElement(_beeIcon2["default"], { type: 'uf-close', className: prefixCls + '-remove-icon' });

        var clearIcon = _react2["default"].createElement(_beeIcon2["default"], { type: 'uf-close-c', className: prefixCls + '-clear-icon' });

        return _react2["default"].createElement(_rcTreeSelect2["default"]
        // switcherIcon={(nodeProps) =>
        //     this.renderSwitcherIcon(prefixCls, nodeProps)
        // }
        , _extends({ inputIcon: inputIcon,
            removeIcon: removeIcon,
            clearIcon: clearIcon
        }, restProps, {
            showSearch: showSearch,
            getPopupContainer: getPopupContainer,
            dropdownClassName: (0, _classnames2["default"])(dropdownClassName, prefixCls + '-dropdown'),
            prefixCls: prefixCls,
            className: cls,
            dropdownStyle: _extends({ maxHeight: '100vh', overflow: 'auto' }, dropdownStyle),
            notFoundContent: notFoundContent,
            treeCheckable: checkable,
            ref: this.saveTreeSelect
        }));
    };

    return TreeSelect;
}(_react.Component);

TreeSelect.TreeNode = _rcTreeSelect.TreeNode;
TreeSelect.SHOW_ALL = _rcTreeSelect.SHOW_ALL;
TreeSelect.SHOW_PARENT = _rcTreeSelect.SHOW_PARENT;
TreeSelect.SHOW_CHILD = _rcTreeSelect.SHOW_CHILD;
;
TreeSelect.propTypes = propTypes;
TreeSelect.defaultProps = defaultProps;
exports["default"] = TreeSelect;
module.exports = exports['default'];