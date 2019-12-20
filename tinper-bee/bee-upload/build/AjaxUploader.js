'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _request = require('./request');

var _request2 = _interopRequireDefault(_request);

var _uid = require('./uid');

var _uid2 = _interopRequireDefault(_uid);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * This source code is quoted from rc-upload.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * homepage: https://github.com/react-component/upload
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var propTypes = {
  component: _propTypes2["default"].string,
  style: _propTypes2["default"].object,
  clsPrefix: _propTypes2["default"].string,
  className: _propTypes2["default"].string,
  multiple: _propTypes2["default"].bool,
  disabled: _propTypes2["default"].bool,
  accept: _propTypes2["default"].string,
  children: _propTypes2["default"].any,
  onStart: _propTypes2["default"].func,
  data: _propTypes2["default"].oneOfType([_propTypes2["default"].object, _propTypes2["default"].func]),
  headers: _propTypes2["default"].object,
  beforeUpload: _propTypes2["default"].func,
  customRequest: _propTypes2["default"].func,
  withCredentials: _propTypes2["default"].bool
};

var AjaxUploader = function (_Component) {
  _inherits(AjaxUploader, _Component);

  function AjaxUploader(props) {
    _classCallCheck(this, AjaxUploader);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.reqs = {};
    _this.state = {
      uid: (0, _uid2["default"])()
    };

    _this.onChange = _this.onChange.bind(_this);
    _this.onClick = _this.onClick.bind(_this);
    _this.onKeyDown = _this.onKeyDown.bind(_this);
    _this.onFileDrop = _this.onFileDrop.bind(_this);
    _this.uploadFiles = _this.uploadFiles.bind(_this);

    _this.upload = _this.upload.bind(_this);
    _this.post = _this.post.bind(_this);
    _this.reset = _this.reset.bind(_this);
    _this.abort = _this.abort.bind(_this);
    return _this;
  }

  AjaxUploader.prototype.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;
    this.abort();
  };

  AjaxUploader.prototype.componentDidMount = function componentDidMount() {
    this.mounted = true;
  };

  AjaxUploader.prototype.onChange = function onChange(e) {
    var files = e.target.files;
    this.uploadFiles(files);
    this.reset();
  };

  AjaxUploader.prototype.onClick = function onClick() {
    var el = this.refs.file;
    if (!el) {
      return;
    }
    el.click();
  };

  AjaxUploader.prototype.onKeyDown = function onKeyDown(e) {
    if (e.key === 'Enter') {
      this.onClick();
    }
  };

  AjaxUploader.prototype.onFileDrop = function onFileDrop(e) {
    if (e.type === 'dragover') {
      e.preventDefault();
      return;
    }

    var files = e.dataTransfer.files;
    this.uploadFiles(files);

    e.preventDefault();
  };

  AjaxUploader.prototype.uploadFiles = function uploadFiles(files) {
    var postFiles = Array.prototype.slice.call(files);
    var len = postFiles.length;
    for (var i = 0; i < len; i++) {
      var file = postFiles[i];
      file.uid = (0, _uid2["default"])();
      this.upload(file, postFiles);
    }
  };

  AjaxUploader.prototype.upload = function upload(file, fileList) {
    var _this2 = this;

    var props = this.props;

    if (!props.beforeUpload) {
      // always async in case use react state to keep fileList
      return setTimeout(function () {
        return _this2.post(file);
      }, 0);
    }

    var before = props.beforeUpload(file, fileList);
    if (before && before.then) {
      before.then(function (processedFile) {
        var processedFileType = Object.prototype.toString.call(processedFile);
        if (processedFileType === '[object File]' || processedFileType === '[object Blob]') {
          _this2.post(processedFile);
        } else {
          _this2.post(file);
        }
      });
    } else if (before !== false) {
      setTimeout(function () {
        return _this2.post(file);
      }, 0);
    }
  };

  AjaxUploader.prototype.post = function post(file) {
    var _this3 = this;

    if (!this.mounted) {
      return;
    }
    var props = this.props;
    var data = props.data;
    var onStart = props.onStart;

    if (typeof data === 'function') {
      data = data(file);
    }
    var uid = file.uid;

    var request = props.customRequest || _request2["default"];
    this.reqs[uid] = request({
      action: props.action,
      filename: props.name,
      file: file,
      data: data,
      headers: props.headers,
      withCredentials: props.withCredentials,
      onProgress: function onProgress(e) {
        props.onProgress(e, file);
      },
      onSuccess: function onSuccess(ret) {
        delete _this3.reqs[uid];
        props.onSuccess(ret, file);
      },
      onError: function onError(err, ret) {
        delete _this3.reqs[uid];
        props.onError(err, ret, file);
      }
    });
    onStart(file);
  };

  AjaxUploader.prototype.reset = function reset() {
    this.setState({
      uid: (0, _uid2["default"])()
    });
  };

  AjaxUploader.prototype.abort = function abort(file) {
    var reqs = this.reqs;

    if (file) {
      var uid = file;
      if (file && file.uid) {
        uid = file.uid;
      }
      if (reqs[uid] && reqs[uid].abort) {
        reqs[uid].abort();
      }
      delete reqs[uid];
    } else {
      Object.keys(reqs).forEach(function (uid) {
        if (reqs[uid] && reqs[uid].abort) {
          reqs[uid].abort();
        }
        delete reqs[uid];
      });
    }
  };

  AjaxUploader.prototype.render = function render() {
    var _classNames;

    var _props = this.props,
        Tag = _props.component,
        clsPrefix = _props.clsPrefix,
        className = _props.className,
        disabled = _props.disabled,
        style = _props.style,
        multiple = _props.multiple,
        accept = _props.accept,
        children = _props.children,
        name = _props.name,
        action = _props.action,
        headers = _props.headers,
        data = _props.data,
        type = _props.type,
        listType = _props.listType,
        fileList = _props.fileList,
        defaultFileList = _props.defaultFileList,
        size = _props.size,
        beforeUpload = _props.beforeUpload,
        showUploadList = _props.showUploadList,
        supportServerRender = _props.supportServerRender,
        onStart = _props.onStart,
        onSuccess = _props.onSuccess,
        multipart = _props.multipart,
        onReady = _props.onReady,
        customRequest = _props.customRequest,
        withCredentials = _props.withCredentials,
        onChange = _props.onChange,
        others = _objectWithoutProperties(_props, ['component', 'clsPrefix', 'className', 'disabled', 'style', 'multiple', 'accept', 'children', 'name', 'action', 'headers', 'data', 'type', 'listType', 'fileList', 'defaultFileList', 'size', 'beforeUpload', 'showUploadList', 'supportServerRender', 'onStart', 'onSuccess', 'multipart', 'onReady', 'customRequest', 'withCredentials', 'onChange']);

    var cls = (0, _classnames2["default"])((_classNames = {}, _defineProperty(_classNames, clsPrefix, true), _defineProperty(_classNames, clsPrefix + '-disabled', disabled), _defineProperty(_classNames, className, className), _classNames));
    var events = disabled ? {} : {
      onClick: this.onClick,
      onKeyDown: this.onKeyDown,
      onDrop: this.onFileDrop,
      onDragOver: this.onFileDrop,
      tabIndex: '0'
    };
    return _react2["default"].createElement(
      Tag,
      _extends({}, events, {
        className: cls,
        role: 'button',
        style: style
      }, others),
      _react2["default"].createElement('input', {
        type: 'file',
        ref: 'file',
        key: this.state.uid,
        style: { display: 'none' },
        accept: accept,
        multiple: multiple,
        onChange: this.onChange
      }),
      children
    );
  };

  return AjaxUploader;
}(_react.Component);

;
AjaxUploader.propTypes = propTypes;
exports["default"] = AjaxUploader;
module.exports = exports['default'];