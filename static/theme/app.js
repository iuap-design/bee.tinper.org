webpackJsonp([1],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("j1ja");
module.exports = __webpack_require__("lVK7");


/***/ }),

/***/ "JU1R":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__("F8kA");

var _Bundle = __webpack_require__("gf5I");

var _Bundle2 = _interopRequireDefault(_Bundle);

var _Home = __webpack_require__("q0Fb");

var _Home2 = _interopRequireDefault(_Home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__("rGbO")).enterModule;
  enterModule && enterModule(module);
})();

// 按需加载


// import Template from 'bundle-loader?lazy&name=template!pages/Template';

var Loading = function Loading() {
  return _react2.default.createElement('div', null);
};

var createComponent = function createComponent(component) {
  return function (props) {
    return _react2.default.createElement(
      _Bundle2.default,
      { load: component },
      function (Component) {
        return Component ? _react2.default.createElement(Component, props) : _react2.default.createElement(Loading, null);
      }
    );
  };
};

var getRouter = function getRouter() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _reactRouterDom.HashRouter,
      null,
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactRouterDom.Switch,
          null,
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: createComponent(_Home2.default) })
        )
      )
    )
  );
};

var _default = getRouter;
exports.default = _default;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__("rGbO")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Loading, 'Loading', '/Users/jony/workspaces/yonyou/tinper-component/tinper-bee-theme/src/router/router.js');
  reactHotLoader.register(createComponent, 'createComponent', '/Users/jony/workspaces/yonyou/tinper-component/tinper-bee-theme/src/router/router.js');
  reactHotLoader.register(getRouter, 'getRouter', '/Users/jony/workspaces/yonyou/tinper-component/tinper-bee-theme/src/router/router.js');
  reactHotLoader.register(_default, 'default', '/Users/jony/workspaces/yonyou/tinper-component/tinper-bee-theme/src/router/router.js');
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__("rGbO")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("3IRH")(module)))

/***/ }),

/***/ "gf5I":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__("Zx67");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("Zrlr");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("wxAW");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("zwoO");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("Pf15");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__("rGbO")).enterModule;
    enterModule && enterModule(module);
})();

var Bundle = function (_Component) {
    (0, _inherits3.default)(Bundle, _Component);

    function Bundle() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Bundle);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Bundle.__proto__ || (0, _getPrototypeOf2.default)(Bundle)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            // short for "module" but that's a keyword in js, so "mod"
            mod: null
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(Bundle, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.load(this.props);
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.load !== this.props.load) {
                this.load(nextProps);
            }
        }
    }, {
        key: 'load',
        value: function load(props) {
            var _this2 = this;

            this.setState({
                mod: null
            });
            props.load(function (mod) {
                _this2.setState({
                    // handle both es imports and cjs
                    mod: mod.default ? mod.default : mod
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return this.props.children(this.state.mod);
        }
    }, {
        key: '__reactstandin__regenerateByEval',
        // @ts-ignore
        value: function __reactstandin__regenerateByEval(key, code) {
            // @ts-ignore
            this[key] = eval(code);
        }
    }]);
    return Bundle;
}(_react.Component);

var _default = Bundle;
exports.default = _default;
;

(function () {
    var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__("rGbO")).default;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(Bundle, 'Bundle', '/Users/jony/workspaces/yonyou/tinper-component/tinper-bee-theme/src/router/Bundle.js');
    reactHotLoader.register(_default, 'default', '/Users/jony/workspaces/yonyou/tinper-component/tinper-bee-theme/src/router/Bundle.js');
})();

;

(function () {
    var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__("rGbO")).leaveModule;
    leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("3IRH")(module)))

/***/ }),

/***/ "lVK7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__("O27J");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactHotLoader = __webpack_require__("rGbO");

var _router = __webpack_require__("JU1R");

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__("rGbO")).enterModule;
  enterModule && enterModule(module);
})();
// import 'tinper-bee/assets/tinper-bee.css';
// 引入路由


// 引入css样式
// import './static/style/um.css';
// import './static/style/markdown.css';

/*初始化*/
renderWithHotReload((0, _router2.default)());

/*热更新*/
if (false) {
  module.hot.accept('./router/router', function () {
    var getRouter = require('router/router').default;
    renderWithHotReload(getRouter());
  });
}

function renderWithHotReload(RootElement) {
  _reactDom2.default.render(_react2.default.createElement(
    _reactHotLoader.AppContainer,
    null,
    RootElement
  ), document.getElementById('theme-app'));
}
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__("rGbO")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(renderWithHotReload, 'renderWithHotReload', '/Users/jony/workspaces/yonyou/tinper-component/tinper-bee-theme/src/index.js');
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__("rGbO")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("3IRH")(module)))

/***/ }),

/***/ "q0Fb":
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	new Promise(function(resolve) { resolve(); }).then((function(require) {
		cb(__webpack_require__("uI4+"));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ })

},[0]);