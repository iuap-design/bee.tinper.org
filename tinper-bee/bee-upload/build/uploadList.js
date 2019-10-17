'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _beeAnimate = require('bee-animate');

var _beeAnimate2 = _interopRequireDefault(_beeAnimate);

var _beeIcon = require('bee-icon');

var _beeIcon2 = _interopRequireDefault(_beeIcon);

var _beeProgressBar = require('bee-progress-bar');

var _beeProgressBar2 = _interopRequireDefault(_beeProgressBar);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

//import { UploadListProps } from './interface';

// https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL
var previewFile = function previewFile(file, callback) {
  var reader = new FileReader();
  reader.onloadend = function () {
    return callback(reader.result);
  };
  reader.readAsDataURL(file);
};

var propTypes = {
  listType: _propTypes2["default"].oneOf(['text', 'picture', 'picture-card']),
  onPreview: _propTypes2["default"].func,
  onRemove: _propTypes2["default"].func,
  items: _propTypes2["default"].array,
  progressAttr: _propTypes2["default"].object,
  clsPrefix: _propTypes2["default"].string
};

var defaultProps = {
  listType: 'text', // or picture
  progressAttr: {
    strokeWidth: 3,
    showInfo: false
  },
  clsPrefix: 'u-upload',
  showRemoveIcon: true,
  showPreviewIcon: true
};

var UploadList = function (_Component) {
  _inherits(UploadList, _Component);

  function UploadList() {
    var _temp, _this, _ret;

    _classCallCheck(this, UploadList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.handleClose = function (file) {
      var onRemove = _this.props.onRemove;
      if (onRemove) {
        onRemove(file);
      }
    }, _this.handlePreview = function (file, e) {
      var onPreview = _this.props.onPreview;

      if (!onPreview) {
        return;
      }
      e.preventDefault();
      return onPreview(file);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  UploadList.prototype.componentDidUpdate = function componentDidUpdate() {
    var _this2 = this;

    if (this.props.listType !== 'picture' && this.props.listType !== 'picture-card') {
      return;
    }
    (this.props.items || []).forEach(function (file) {
      if (typeof document === 'undefined' || typeof window === 'undefined' ||
      //!(window as any).FileReader || !(window as any).File ||
      !window.FileReader || !window.File || !(file.originFileObj instanceof File) || file.thumbUrl !== undefined) {
        return;
      }
      /*eslint-disable */
      file.thumbUrl = '';
      /*eslint-enable */
      previewFile(file.originFileObj, function (previewDataUrl) {
        /*eslint-disable */
        file.thumbUrl = previewDataUrl;
        /*eslint-enable */
        _this2.forceUpdate();
      });
    });
  };

  UploadList.prototype.render = function render() {
    var _this3 = this,
        _classNames2;

    var _props = this.props,
        clsPrefix = _props.clsPrefix,
        _props$items = _props.items,
        items = _props$items === undefined ? [] : _props$items,
        listType = _props.listType,
        showRemoveIcon = _props.showRemoveIcon,
        showPreviewIcon = _props.showPreviewIcon;

    var list = items.map(function (file) {
      var _classNames;

      var progress = void 0;
      var icon = _react2["default"].createElement(_beeIcon2["default"], { type: 'uf-link' });

      if (listType === 'picture' || listType === 'picture-card') {
        if (file.status === 'uploading' || !file.thumbUrl && !file.url) {
          if (listType === 'picture-card') {
            icon = _react2["default"].createElement(
              'div',
              { className: clsPrefix + '-list-item-uploading-text' },
              '\u6587\u4EF6\u4E0A\u4F20\u4E2D'
            );
          } else {
            icon = _react2["default"].createElement(_beeIcon2["default"], { className: clsPrefix + '-list-item-thumbnail', type: 'picture' });
          }
        } else {
          icon = _react2["default"].createElement(
            'a',
            {
              className: clsPrefix + '-list-item-thumbnail',
              onClick: function onClick(e) {
                return _this3.handlePreview(file, e);
              },
              href: file.url || file.thumbUrl,
              target: '_blank',
              rel: 'noopener noreferrer'
            },
            _react2["default"].createElement('img', { src: file.url || file.thumbUrl, alt: file.name })
          );
        }
      }

      if (file.status === 'uploading') {
        progress = _react2["default"].createElement(_beeProgressBar2["default"], { colors: 'success', size: 'sm', now: file.percent });
      }
      var infoUploadingClass = (0, _classnames2["default"])((_classNames = {}, _defineProperty(_classNames, clsPrefix + '-list-item', true), _defineProperty(_classNames, clsPrefix + '-list-item-' + file.status, true), _classNames));
      var preview = file.url ? _react2["default"].createElement(
        'a',
        {
          href: file.url,
          target: '_blank',
          rel: 'noopener noreferrer',
          className: clsPrefix + '-list-item-name',
          onClick: function onClick(e) {
            return _this3.handlePreview(file, e);
          }
        },
        file.name
      ) : _react2["default"].createElement(
        'span',
        {
          className: clsPrefix + '-list-item-name',
          onClick: function onClick(e) {
            return _this3.handlePreview(file, e);
          }
        },
        file.name
      );
      var style = file.url || file.thumbUrl ? undefined : {
        pointerEvents: 'none',
        opacity: 0.5
      };
      var previewIcon = showPreviewIcon ? _react2["default"].createElement(
        'a',
        {
          href: file.url || file.thumbUrl,
          target: '_blank',
          rel: 'noopener noreferrer',
          style: style,
          onClick: function onClick(e) {
            return _this3.handlePreview(file, e);
          }
        },
        _react2["default"].createElement(_beeIcon2["default"], { type: 'uf-eye-o' })
      ) : null;
      var removeIcon = showRemoveIcon ? _react2["default"].createElement(_beeIcon2["default"], { type: 'uf-del', title: '\u79FB\u9664\u6587\u4EF6', onClick: function onClick() {
          return _this3.handleClose(file);
        } }) : null;
      var removeIconClose = showRemoveIcon ? _react2["default"].createElement(_beeIcon2["default"], { type: 'uf-close', title: '\u79FB\u9664\u6587\u4EF6', onClick: function onClick() {
          return _this3.handleClose(file);
        } }) : null;
      var actions = listType === 'picture-card' && file.status !== 'uploading' ? _react2["default"].createElement(
        'span',
        { className: clsPrefix + '-list-item-actions' },
        previewIcon,
        removeIcon
      ) : removeIconClose;

      return _react2["default"].createElement(
        'div',
        { className: infoUploadingClass, key: file.uid },
        _react2["default"].createElement(
          'div',
          { className: clsPrefix + '-list-item-info' },
          icon,
          preview,
          actions
        ),
        progress
      );
    });
    var listClassNames = (0, _classnames2["default"])((_classNames2 = {}, _defineProperty(_classNames2, clsPrefix + '-list', true), _defineProperty(_classNames2, clsPrefix + '-list-' + listType, true), _classNames2));
    return _react2["default"].createElement(
      _beeAnimate2["default"],
      {
        transitionName: clsPrefix + '-margin-top',
        component: 'div',
        className: listClassNames
      },
      list
    );
  };

  return UploadList;
}(_react.Component);

UploadList.propTypes = propTypes;
UploadList.defaultProps = defaultProps;
exports["default"] = UploadList;
module.exports = exports['default'];