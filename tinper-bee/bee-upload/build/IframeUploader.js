'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _uid = require('./uid');

var _uid2 = _interopRequireDefault(_uid);

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

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


var IFRAME_STYLE = {
  position: 'absolute',
  top: 0,
  opacity: 0,
  filter: 'alpha(opacity=0)',
  left: 0,
  zIndex: 9999
};

var propTypes = {
  component: _propTypes2["default"].string,
  style: _propTypes2["default"].object,
  disabled: _propTypes2["default"].bool,
  clsPrefix: _propTypes2["default"].string,
  className: _propTypes2["default"].string,
  accept: _propTypes2["default"].string,
  onStart: _propTypes2["default"].func,
  multiple: _propTypes2["default"].bool,
  children: _propTypes2["default"].any,
  data: _propTypes2["default"].oneOfType([_propTypes2["default"].object, _propTypes2["default"].func]),
  action: _propTypes2["default"].string,
  name: _propTypes2["default"].string
};
// diferent from AjaxUpload, can only upload on at one time, serial seriously

var IframeUploader = function (_Component) {
  _inherits(IframeUploader, _Component);

  function IframeUploader(props) {
    _classCallCheck(this, IframeUploader);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.file = {};
    _this.state = {
      uploading: false
    };

    _this.onLoad = _this.onLoad.bind(_this);
    _this.onChange = _this.onChange.bind(_this);
    _this.getIframeNode = _this.getIframeNode.bind(_this);
    _this.getIframeDocument = _this.getIframeDocument.bind(_this);
    _this.getFormNode = _this.getFormNode.bind(_this);
    _this.getFormInputNode = _this.getFormInputNode.bind(_this);
    _this.getFormDataNode = _this.getFormDataNode.bind(_this);
    _this.getFileForMultiple = _this.getFileForMultiple.bind(_this);
    _this.getIframeHTML = _this.getIframeHTML.bind(_this);
    _this.initIframeSrc = _this.initIframeSrc.bind(_this);
    _this.initIframe = _this.initIframe.bind(_this);
    _this.endUpload = _this.endUpload.bind(_this);
    _this.startUpload = _this.startUpload.bind(_this);
    _this.updateIframeWH = _this.updateIframeWH.bind(_this);
    _this.abort = _this.abort.bind(_this);
    _this.post = _this.post.bind(_this);
    return _this;
  }

  IframeUploader.prototype.componentDidMount = function componentDidMount() {
    this.updateIframeWH();
    this.initIframe();
  };

  IframeUploader.prototype.componentDidUpdate = function componentDidUpdate() {
    this.updateIframeWH();
  };

  IframeUploader.prototype.onLoad = function onLoad() {
    if (!this.state.uploading) {
      return;
    }
    var props = this.props,
        file = this.file;

    var response = void 0;
    try {
      var doc = this.getIframeDocument();
      var script = doc.getElementsByTagName('script')[0];
      if (script && script.parentNode === doc.body) {
        doc.body.removeChild(script);
      }
      response = doc.body.innerHTML;
      props.onSuccess(response, file);
    } catch (err) {
      (0, _warning2["default"])(false, 'cross domain error for Upload. Maybe server should return document.domain script. see Note from https://github.com/react-component/upload');
      response = 'cross-domain';
      props.onError(err, null, file);
    }
    this.endUpload();
  };

  IframeUploader.prototype.onChange = function onChange() {
    var _this2 = this;

    var target = this.getFormInputNode();
    // ie8/9 don't support FileList Object
    // http://stackoverflow.com/questions/12830058/ie8-input-type-file-get-files
    var file = this.file = {
      uid: (0, _uid2["default"])(),
      name: target.value
    };
    this.startUpload();
    var props = this.props;

    if (!props.beforeUpload) {
      return this.post(file);
    }
    var before = props.beforeUpload(file);
    if (before && before.then) {
      before.then(function () {
        _this2.post(file);
      }, function () {
        _this2.endUpload();
      });
    } else if (before !== false) {
      this.post(file);
    } else {
      this.endUpload();
    }
  };

  IframeUploader.prototype.getIframeNode = function getIframeNode() {
    return this.refs.iframe;
  };

  IframeUploader.prototype.getIframeDocument = function getIframeDocument() {
    return this.getIframeNode().contentDocument;
  };

  IframeUploader.prototype.getFormNode = function getFormNode() {
    return this.getIframeDocument().getElementById('form');
  };

  IframeUploader.prototype.getFormInputNode = function getFormInputNode() {
    return this.getIframeDocument().getElementById('input');
  };

  IframeUploader.prototype.getFormDataNode = function getFormDataNode() {
    return this.getIframeDocument().getElementById('data');
  };

  IframeUploader.prototype.getFileForMultiple = function getFileForMultiple(file) {
    return this.props.multiple ? [file] : file;
  };

  IframeUploader.prototype.getIframeHTML = function getIframeHTML(domain) {
    var domainScript = '';
    var domainInput = '';
    if (domain) {
      domainScript = '<script>document.domain="' + domain + '";</script>';
      domainInput = '<input name="_documentDomain" value="' + domain + '" />';
    }
    return '\n    <!DOCTYPE html>\n    <html>\n    <head>\n    <meta http-equiv="X-UA-Compatible" content="IE=edge" />\n    <style>\n    body,html {padding:0;margin:0;border:0;overflow:hidden;}\n    </style>\n    ' + domainScript + '\n    </head>\n    <body>\n    <form method="post"\n    encType="multipart/form-data"\n    action="' + this.props.action + '" id="form"\n    style="display:block;height:9999px;position:relative;overflow:hidden;">\n    <input id="input" type="file"\n     name="' + this.props.name + '"\n     style="position:absolute;top:0;right:0;height:9999px;font-size:9999px;cursor:pointer;"/>\n    ' + domainInput + '\n    <span id="data"></span>\n    </form>\n    </body>\n    </html>\n    ';
  };

  IframeUploader.prototype.initIframeSrc = function initIframeSrc() {
    if (this.domain) {
      this.getIframeNode().src = 'javascript:void((function(){\n        var d = document;\n        d.open();\n        d.domain=\'' + this.domain + '\';\n        d.write(\'\');\n        d.close();\n      })())';
    }
  };

  IframeUploader.prototype.initIframe = function initIframe() {
    var iframeNode = this.getIframeNode();
    var win = iframeNode.contentWindow;
    var doc = void 0;
    this.domain = this.domain || '';
    this.initIframeSrc();
    try {
      doc = win.document;
    } catch (e) {
      this.domain = document.domain;
      this.initIframeSrc();
      win = iframeNode.contentWindow;
      doc = win.document;
    }
    doc.open('text/html', 'replace');
    doc.write(this.getIframeHTML(this.domain));
    doc.close();
    this.getFormInputNode().onchange = this.onChange;
  };

  IframeUploader.prototype.endUpload = function endUpload() {
    if (this.state.uploading) {
      this.file = {};
      // hack avoid batch
      this.state.uploading = false;
      this.setState({
        uploading: false
      });
      this.initIframe();
    }
  };

  IframeUploader.prototype.startUpload = function startUpload() {
    if (!this.state.uploading) {
      this.state.uploading = true;
      this.setState({
        uploading: true
      });
    }
  };

  IframeUploader.prototype.updateIframeWH = function updateIframeWH() {
    var rootNode = _reactDom2["default"].findDOMNode(this);
    var iframeNode = this.getIframeNode();
    iframeNode.style.height = rootNode.offsetHeight + 'px';
    iframeNode.style.width = rootNode.offsetWidth + 'px';
  };

  IframeUploader.prototype.abort = function abort(file) {
    if (file) {
      var uid = file;
      if (file && file.uid) {
        uid = file.uid;
      }
      if (uid === this.file.uid) {
        this.endUpload();
      }
    } else {
      this.endUpload();
    }
  };

  IframeUploader.prototype.post = function post(file) {
    var formNode = this.getFormNode();
    var dataSpan = this.getFormDataNode();
    var data = this.props.data;
    var onStart = this.props.onStart;

    if (typeof data === 'function') {
      data = data(file);
    }
    var inputs = [];
    for (var key in data) {
      if (data.hasOwnProperty(key)) {
        inputs.push('<input name="' + key + '" value="' + data[key] + '"/>');
      }
    }
    dataSpan.innerHTML = inputs.join('');
    formNode.submit();
    dataSpan.innerHTML = '';
    onStart(file);
  };

  IframeUploader.prototype.render = function render() {
    var _classNames;

    var _props = this.props,
        Tag = _props.component,
        disabled = _props.disabled,
        className = _props.className,
        clsPrefix = _props.clsPrefix,
        children = _props.children,
        style = _props.style,
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
        others = _objectWithoutProperties(_props, ['component', 'disabled', 'className', 'clsPrefix', 'children', 'style', 'name', 'action', 'headers', 'data', 'type', 'listType', 'fileList', 'defaultFileList', 'size', 'beforeUpload', 'showUploadList', 'supportServerRender', 'onStart', 'onSuccess', 'multipart', 'onReady', 'customRequest', 'withCredentials', 'onChange']);

    var iframeStyle = _extends({}, IFRAME_STYLE, {
      display: this.state.uploading || disabled ? 'none' : ''
    });
    var cls = (0, _classnames2["default"])((_classNames = {}, _defineProperty(_classNames, clsPrefix, true), _defineProperty(_classNames, clsPrefix + '-disabled', disabled), _defineProperty(_classNames, className, className), _classNames));
    return _react2["default"].createElement(
      Tag,
      _extends({
        className: cls,
        style: _extends({ position: 'relative', zIndex: 0 }, style)
      }, others),
      _react2["default"].createElement('iframe', {
        ref: 'iframe',
        onLoad: this.onLoad,
        style: iframeStyle
      }),
      children
    );
  };

  return IframeUploader;
}(_react.Component);

;
IframeUploader.propTypes = propTypes;
exports["default"] = IframeUploader;
module.exports = exports['default'];