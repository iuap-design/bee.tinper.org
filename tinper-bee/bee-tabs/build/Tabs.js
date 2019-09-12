"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tabs = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _KeyCode = require("./KeyCode");

var _KeyCode2 = _interopRequireDefault(_KeyCode);

var _TabPane = require("./TabPane");

var _TabPane2 = _interopRequireDefault(_TabPane);

var _classnames2 = require("classnames");

var _classnames3 = _interopRequireDefault(_classnames2);

var _TabContent = require("./TabContent");

var _TabContent2 = _interopRequireDefault(_TabContent);

var _ScrollableInkTabBar = require("./ScrollableInkTabBar");

var _ScrollableInkTabBar2 = _interopRequireDefault(_ScrollableInkTabBar);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _createReactClass = require("create-react-class");

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _beeIcon = require("bee-icon");

var _beeIcon2 = _interopRequireDefault(_beeIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /**
                                                                                                                                                                                                                  * This source code is quoted from rc-tabs.
                                                                                                                                                                                                                  * homepage: https://github.com/react-component/tabs
                                                                                                                                                                                                                  */


function noop() {}

function getDefaultActiveKey(props) {
  var activeKey = void 0;
  _react2["default"].Children.forEach(props.children, function (child) {
    if (child && !activeKey && !child.props.disabled) {
      activeKey = child.key;
    }
  });
  return activeKey;
}

var Tabs = (0, _createReactClass2["default"])({
  propTypes: {
    destroyInactiveTabPane: _propTypes2["default"].bool,
    renderTabBar: _propTypes2["default"].func.isRequired,
    renderTabContent: _propTypes2["default"].func.isRequired,
    onChange: _propTypes2["default"].func,
    children: _propTypes2["default"].any,
    clsPrefix: _propTypes2["default"].string,
    className: _propTypes2["default"].string,
    tabBarPosition: _propTypes2["default"].string,
    style: _propTypes2["default"].object,
    tabBarStyle: _propTypes2["default"].oneOf(["simple", "fill", "primary", "upborder", "fade", "downborder", "trapezoid", "editable-card"])
  },

  getDefaultProps: function getDefaultProps() {
    return {
      clsPrefix: "u-tabs",
      destroyInactiveTabPane: false,
      onChange: noop,
      tabBarPosition: "top",
      style: {},
      renderTabContent: function renderTabContent() {
        return _react2["default"].createElement(_TabContent2["default"], null);
      },
      renderTabBar: function renderTabBar() {
        return _react2["default"].createElement(_ScrollableInkTabBar2["default"], null);
      },
      tabBarStyle: "simple",
      animated: true
    };
  },
  getInitialState: function getInitialState() {
    var props = this.props;
    var activeKey = void 0;
    if ("activeKey" in props) {
      activeKey = props.activeKey;
    } else if ("defaultActiveKey" in props) {
      activeKey = props.defaultActiveKey;
    } else {
      activeKey = getDefaultActiveKey(props);
    }
    return {
      activeKey: activeKey
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if ("activeKey" in nextProps) {
      this.setState({
        activeKey: nextProps.activeKey
      });
    }
  },
  onTabClick: function onTabClick(activeKey) {
    this.props.onTabClick && this.props.onTabClick(activeKey);
    if (this.tabBar.props.onTabClick) {
      this.tabBar.props.onTabClick(activeKey);
    }
    this.setActiveKey(activeKey);
  },
  onNavKeyDown: function onNavKeyDown(e) {
    var eventKeyCode = e.keyCode;
    if (eventKeyCode === _KeyCode2["default"].RIGHT || eventKeyCode === _KeyCode2["default"].DOWN) {
      e.preventDefault();
      var nextKey = this.getNextActiveKey(true);
      this.onTabClick(nextKey);
    } else if (eventKeyCode === _KeyCode2["default"].LEFT || eventKeyCode === _KeyCode2["default"].UP) {
      e.preventDefault();
      var previousKey = this.getNextActiveKey(false);
      this.onTabClick(previousKey);
    }
  },
  setActiveKey: function setActiveKey(activeKey) {
    if (this.state.activeKey !== activeKey) {
      if (!("activeKey" in this.props)) {
        this.setState({
          activeKey: activeKey
        });
      }
      this.props.onChange(activeKey);
    }
  },
  getNextActiveKey: function getNextActiveKey(next) {
    var activeKey = this.state.activeKey;
    var children = [];
    _react2["default"].Children.forEach(this.props.children, function (c) {
      if (c && !c.props.disabled) {
        if (next) {
          children.push(c);
        } else {
          children.unshift(c);
        }
      }
    });
    var length = children.length;
    var ret = length && children[0].key;
    children.forEach(function (child, i) {
      if (child.key === activeKey) {
        if (i === length - 1) {
          ret = children[0].key;
        } else {
          ret = children[i + 1].key;
        }
      }
    });
    return ret;
  },
  onPrevClick: function onPrevClick(e) {
    this.props.onPrevClick && this.props.onPrevClick(e);
  },
  onNextClick: function onNextClick(e) {
    this.props.onNextClick && this.props.onNextClick(e);
  },
  createNewTab: function createNewTab(targetKey) {
    var onEdit = this.props.onEdit;

    if (onEdit) {
      onEdit(targetKey, 'add');
    }
  },
  removeTab: function removeTab(targetKey, e) {
    e.stopPropagation();
    if (!targetKey) {
      return;
    }

    var onEdit = this.props.onEdit;

    if (onEdit) {
      onEdit(targetKey, 'remove');
    }
  },
  render: function render() {
    var _classnames,
        _this = this;

    var props = this.props;
    var clsPrefix = props.clsPrefix,
        tabBarPosition = props.tabBarPosition,
        className = props.className,
        renderTabContent = props.renderTabContent,
        renderTabBar = props.renderTabBar,
        tabBarStyle = props.tabBarStyle,
        extraContent = props.extraContent,
        animated = props.animated,
        tabIndex = props.tabIndex,
        children = props.children,
        hideAdd = props.hideAdd;


    var cls = (0, _classnames3["default"])((_classnames = {}, _defineProperty(_classnames, clsPrefix, true), _defineProperty(_classnames, clsPrefix + "-" + tabBarPosition, true), _defineProperty(_classnames, className, !!className), _defineProperty(_classnames, clsPrefix + "-" + tabBarStyle, true), _classnames));

    this.tabBar = renderTabBar();

    // only card type tabs can be added and closed
    var childrenWithClose = [],
        tabBarExtraContent = extraContent;
    if (tabBarStyle === 'editable-card') {
      childrenWithClose = [];
      _react2["default"].Children.forEach(children, function (child, index) {
        if (!_react2["default"].isValidElement(child)) return child;
        var closable = child.props.closable;

        closable = typeof closable === 'undefined' ? true : closable;
        var closeIcon = closable ? _react2["default"].createElement(_beeIcon2["default"], {
          type: "uf-close",
          className: clsPrefix + "-close-x",
          onClick: function onClick(e) {
            return _this.removeTab(child.key, e);
          }
        }) : null;
        childrenWithClose.push(_react2["default"].cloneElement(child, {
          tab: _react2["default"].createElement(
            "div",
            { className: closable ? undefined : clsPrefix + "-tab-unclosable" },
            child.props.tab,
            closeIcon
          ),
          key: child.key || index
        }));
      });
      // Add new tab handler
      if (!hideAdd) {
        tabBarExtraContent = _react2["default"].createElement(
          "span",
          null,
          _react2["default"].createElement(_beeIcon2["default"], { type: "uf-add-s-o", className: clsPrefix + "-new-tab", onClick: this.createNewTab }),
          extraContent
        );
      }
    }

    var contents = [_react2["default"].cloneElement(this.tabBar, {
      clsPrefix: clsPrefix,
      key: "tabBar",
      onKeyDown: this.onNavKeyDown,
      tabBarPosition: tabBarPosition,
      extraContent: tabBarExtraContent,
      onTabClick: this.onTabClick,
      panels: childrenWithClose.length > 0 ? childrenWithClose : children,
      activeKey: this.state.activeKey,
      tabIndex: tabIndex,
      onPrevClick: this.onPrevClick,
      onNextClick: this.onNextClick
    }), _react2["default"].cloneElement(renderTabContent(), {
      clsPrefix: clsPrefix,
      tabBarPosition: tabBarPosition,
      animated: animated,
      activeKey: this.state.activeKey,
      destroyInactiveTabPane: props.destroyInactiveTabPane,
      children: props.children,
      // style: { height: '100%' },
      onChange: this.setActiveKey,
      key: "tabContent"
    })];
    if (tabBarPosition === "bottom") {
      contents.reverse();
    }
    return _react2["default"].createElement(
      "div",
      { className: cls, style: props.style },
      contents
    );
  }
});

Tabs.TabPane = _TabPane2["default"];

exports.Tabs = Tabs;