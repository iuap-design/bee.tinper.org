'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AjaxUploader = require('./AjaxUploader');

var _AjaxUploader2 = _interopRequireDefault(_AjaxUploader);

var _IframeUploader = require('./IframeUploader');

var _IframeUploader2 = _interopRequireDefault(_IframeUploader);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * This source code is quoted from rc-upload.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * homepage: https://github.com/react-component/upload
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


function empty() {}

var propTypes = {
  component: _propTypes2["default"].string,
  style: _propTypes2["default"].object,
  clsPrefix: _propTypes2["default"].string,
  action: _propTypes2["default"].string,
  name: _propTypes2["default"].string,
  multipart: _propTypes2["default"].bool,
  onError: _propTypes2["default"].func,
  onSuccess: _propTypes2["default"].func,
  onProgress: _propTypes2["default"].func,
  onStart: _propTypes2["default"].func,
  data: _propTypes2["default"].oneOfType([_propTypes2["default"].object, _propTypes2["default"].func]),
  headers: _propTypes2["default"].object,
  accept: _propTypes2["default"].string,
  multiple: _propTypes2["default"].bool,
  disabled: _propTypes2["default"].bool,
  beforeUpload: _propTypes2["default"].func,
  customRequest: _propTypes2["default"].func,
  onReady: _propTypes2["default"].func,
  withCredentials: _propTypes2["default"].bool,
  supportServerRender: _propTypes2["default"].bool
};
var defaultProps = {
  component: 'span',
  clsPrefix: 'u-upload',
  data: {},
  headers: {},
  name: 'file',
  multipart: false,
  onProgress: empty,
  onReady: empty,
  onStart: empty,
  onError: empty,
  onSuccess: empty,
  supportServerRender: false,
  multiple: false,
  beforeUpload: null,
  customRequest: null,
  withCredentials: false
};

var Upload = function (_Component) {
  _inherits(Upload, _Component);

  function Upload(props) {
    _classCallCheck(this, Upload);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.state = {
      Component: null
    };
    _this.getComponent = _this.getComponent.bind(_this);
    _this.abort = _this.abort.bind(_this);
    return _this;
  }

  Upload.prototype.componentDidMount = function componentDidMount() {
    if (this.props.supportServerRender) {
      /* eslint react/no-did-mount-set-state:0 */
      this.setState({
        Component: this.getComponent()
      }, this.props.onReady);
    }
  };

  Upload.prototype.getComponent = function getComponent() {
    return typeof FormData !== 'undefined' ? _AjaxUploader2["default"] : _IframeUploader2["default"];
  };

  Upload.prototype.abort = function abort(file) {
    this.refs.inner.abort(file);
  };

  Upload.prototype.render = function render() {
    if (this.props.supportServerRender) {
      var _Component2 = this.state.Component;

      if (_Component2) {
        return _react2["default"].createElement(_Component2, _extends({}, this.props, { ref: 'inner' }));
      }
      return null;
    }
    var Component = this.getComponent();
    return _react2["default"].createElement(Component, _extends({}, this.props, { ref: 'inner' }));
  };

  return Upload;
}(_react.Component);

;

Upload.propTypes = propTypes;
Upload.defaultProps = defaultProps;
exports["default"] = Upload;
module.exports = exports['default'];