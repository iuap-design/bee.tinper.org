'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var propTypes = {
	placeholder: _propTypes2["default"].string,
	options: _propTypes2["default"].any,
	onClick: _propTypes2["default"].func
};
var defaultProps = {
	placeholder: '请输入信息',
	options: null
};
var tem = []; //用于临时存储点击的节点
var textStr = []; //存储选择的节点
var parentVal = void 0; //存储parent的value
var listArr = [];
var restoreClick = void 0; //记录点击的名字

var Cascader = function (_Component) {
	_inherits(Cascader, _Component);

	function Cascader(props) {
		_classCallCheck(this, Cascader);

		var _this = _possibleConstructorReturn(this, _Component.call(this, props));

		var options = _this.props.options;
		for (var i = options.length - 1; i >= 0; i--) {
			options[i]['parent'] = true;
		}
		_this.state = {
			option: options,
			origin: null, //用于存储点击的第一级节点
			ulArr: null,
			textStr: []
		};
		_this.formatData = _this.formatData.bind(_this);
		_this.clickHandler = _this.clickHandler.bind(_this);
		_this.focusHandler = _this.focusHandler.bind(_this);
		_this.clear = _this.clear.bind(_this);
		_this.uniqueID = _this.uniqueID.bind(_this);
		return _this;
	}

	Cascader.prototype.uniqueID = function uniqueID() {
		function s4() {
			return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
		}
		return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
	};

	Cascader.prototype.formatData = function formatData() {
		var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state.option;

		var option = data;
		var liArr = [],
		    ulArr = [];
		for (var i = option.length - 1; i >= 0; i--) {
			if ('children' in option[i]) {
				liArr.push(_react2["default"].createElement(
					'li',
					{ 'data-parent': option[i]['parent'], onClick: this.clickHandler, key: this.uniqueID(), 'data-id': i },
					option[i]['value'],
					_react2["default"].createElement(
						'i',
						{ className: 'icon uf' },
						'\uE611'
					)
				));
			} else {
				liArr.push(_react2["default"].createElement(
					'li',
					{ 'data-parent': option[i]['parent'], onClick: this.clickHandler, key: this.uniqueID(), 'data-id': i },
					option[i]['value']
				));
			}
		}
		var ulStr = _react2["default"].createElement(
			'ul',
			{ key: this.uniqueID() },
			liArr
		);
		listArr.push(ulStr);
		this.setState({
			ulArr: listArr
		});
	};

	Cascader.prototype.focusHandler = function focusHandler(e) {
		e.stopPropagation();
		e.preventDefault();
		textStr = [];

		if (this.state.ulArr) {
			var firstUl = this.state.ulArr[0];
			listArr = [];
			listArr.push(firstUl);
			this.setState({
				ulArr: listArr
			});
		}
		tem = [];
		listArr = [];
		this.setState({
			textStr: textStr
		});
		if (!this.state.ulArr) {
			this.formatData();
		}
	};

	Cascader.prototype.clickHandler = function clickHandler(e) {
		e.stopPropagation();
		e.preventDefault();
		var i = e.currentTarget.dataset.id;
		if (!parentVal) parentVal = this.state.option[i].value;
		var data = tem[i] || this.state.option[i].parent && this.state.option[i];
		if (e.currentTarget.dataset.parent) {
			parentVal = e.currentTarget.innerText;
			var urlArr = this.state.ulArr[0];
			data = this.state.option[i];
			textStr = [];
			tem = [];
			listArr = [];
			listArr.push(urlArr);
			this.setState({
				ulArr: listArr
			});
		}
		if (restoreClick != e.currentTarget.innerText) {
			restoreClick = e.currentTarget.innerText;
			textStr.push(data.value);
			this.setState({
				textStr: textStr
			});
			if (data.children) {
				tem = data.children;
				this.formatData(data.children);
			} else {
				this.clear();
			}
		}
		if (this.props.onClick) {
			this.props.onClick(textStr);
		}
	};

	Cascader.prototype.clear = function clear() {
		tem = [];
		listArr = [];
		this.setState({
			ulArr: null
		});
	};

	Cascader.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
		if ('options' in nextProps) {
			var _options = nextProps.options;
			for (var i = _options.length - 1; i >= 0; i--) {
				_options[i]['parent'] = true;
			}
			this.setState({
				option: _options,
				textStr: []
			});
			if (this.props.onClick) {
				this.props.onClick([]);
			}
		}
	};

	Cascader.prototype.render = function render() {
		var va = this.state.textStr.join('/');
		return _react2["default"].createElement(
			'div',
			{ className: (0, _classnames2["default"])("cascader-container", this.props.className) },
			_react2["default"].createElement(
				'div',
				{ className: 'cascader-header' },
				_react2["default"].createElement('input', { onFocus: this.focusHandler, type: 'text', placeholder: this.props.placeholder, value: va })
			),
			_react2["default"].createElement(
				'div',
				{ className: 'cascader-content' },
				this.state.ulArr
			)
		);
	};

	return Cascader;
}(_react.Component);

;
Cascader.propTypes = propTypes;
Cascader.defaultProps = defaultProps;
exports["default"] = Cascader;
module.exports = exports['default'];