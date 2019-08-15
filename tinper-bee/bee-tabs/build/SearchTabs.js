'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var propTypes = {
    clsfix: _propTypes2["default"].string,
    onChange: _propTypes2["default"].func,
    value: _propTypes2["default"].string
};
var defaultProps = {
    clsfix: 'u-search-tabs',
    onChange: function onChange() {}
};

var SearchTabs = function (_Component) {
    _inherits(SearchTabs, _Component);

    function SearchTabs(props) {
        _classCallCheck(this, SearchTabs);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.getChildren = function () {
            var _this$props = _this.props,
                children = _this$props.children,
                clsfix = _this$props.clsfix;

            var childs = [];
            if (children.length > 1) {
                _react2["default"].Children.map(children, function (child, index) {
                    childs.push(_react2["default"].cloneElement(child, {
                        tabClick: _this.childClick,
                        active: child.props.value == _this.state.activeValue,
                        clsfix: clsfix
                    }));
                    if (index < children.length - 1) {
                        childs.push(_react2["default"].createElement(
                            'span',
                            { className: clsfix + '-split' },
                            '|'
                        ));
                    }
                });
            } else {
                childs.push(_react2["default"].cloneElement(children, {
                    tabClick: _this.childClick,
                    active: children.props.value == _this.state.activeValue,
                    clsfix: clsfix
                }));
            }
            return childs;
        };

        _this.childClick = function (activeValue) {
            _this.setState({
                activeValue: activeValue
            });
            _this.props.onChange(activeValue);
        };

        _this.state = {
            activeValue: props.value
        };
        return _this;
    }

    SearchTabs.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        if ('value' in nextProps && nextProps.value != this.state.activeValue) {
            this.setState({
                activeValue: nextProps.value
            });
        }
    };

    SearchTabs.prototype.render = function render() {
        var _props = this.props,
            clsfix = _props.clsfix,
            children = _props.children;


        return _react2["default"].createElement(
            'div',
            { className: '' + clsfix },
            this.getChildren()
        );
    };

    return SearchTabs;
}(_react.Component);

;
SearchTabs.propTypes = propTypes;
SearchTabs.defaultProps = defaultProps;
exports["default"] = SearchTabs;
module.exports = exports['default'];