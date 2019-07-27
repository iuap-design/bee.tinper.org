'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setStyle = exports.getWidth = exports.menuAllProps = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                                              * This source code is quoted from rc-menu.
                                                                                                                                                                                                                                                                              * homepage: https://github.com/react-component/menu
                                                                                                                                                                                                                                                                              */


exports.noop = noop;
exports.getKeyFromChildrenIndex = getKeyFromChildrenIndex;
exports.getMenuIdFromSubMenuEventKey = getMenuIdFromSubMenuEventKey;
exports.loopMenuItem = loopMenuItem;
exports.loopMenuItemRecursively = loopMenuItemRecursively;
exports.fireKeyEvent = fireKeyEvent;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function noop() {}

function getKeyFromChildrenIndex(child, menuEventKey, index) {
  var prefix = menuEventKey || '';
  return child.key || prefix + 'item_' + index;
}

function getMenuIdFromSubMenuEventKey(eventKey) {
  return eventKey + '-menu-';
}

function loopMenuItem(children, cb) {
  var index = -1;
  _react2["default"].Children.forEach(children, function (c) {
    index++;
    if (c && c.type && c.type.isMenuItemGroup) {
      _react2["default"].Children.forEach(c.props.children, function (c2) {
        index++;
        cb(c2, index);
      });
    } else {
      cb(c, index);
    }
  });
}

function loopMenuItemRecursively(children, keys, ret) {
  /* istanbul ignore if */
  if (!children || ret.find) {
    return;
  }
  _react2["default"].Children.forEach(children, function (c) {
    if (c) {
      var construct = c.type;
      if (!construct || !(construct.isSubMenu || construct.isMenuItem || construct.isMenuItemGroup)) {
        return;
      }
      if (keys.indexOf(c.key) !== -1) {
        ret.find = true;
      } else if (c.props.children) {
        loopMenuItemRecursively(c.props.children, keys, ret);
      }
    }
  });
}

var menuAllProps = exports.menuAllProps = ['defaultSelectedKeys', 'selectedKeys', 'defaultOpenKeys', 'openKeys', 'mode', 'getPopupContainer', 'onSelect', 'onDeselect', 'onDestroy', 'openTransitionName', 'openAnimation', 'subMenuOpenDelay', 'subMenuCloseDelay', 'forceSubMenuRender', 'triggerSubMenuAction', 'level', 'selectable', 'multiple', 'onOpenChange', 'visible', 'focusable', 'defaultActiveFirst', 'prefixCls', 'inlineIndent', 'parentMenu', 'title', 'rootPrefixCls', 'eventKey', 'active', 'onItemHover', 'onTitleMouseEnter', 'onTitleMouseLeave', 'onTitleClick', 'popupAlign', 'popupOffset', 'isOpen', 'renderMenuItem', 'manualRef', 'subMenuKey', 'disabled', 'index', 'isSelected', 'store', 'activeKey', 'builtinPlacements', 'overflowedIndicator',

// the following keys found need to be removed from test regression
'attribute', 'value', 'popupClassName', 'inlineCollapsed', 'menu', 'theme', 'itemIcon', 'expandIcon'];

var getWidth = exports.getWidth = function getWidth(elem) {
  return elem && typeof elem.getBoundingClientRect === 'function' && elem.getBoundingClientRect().width || 0;
};

var setStyle = exports.setStyle = function setStyle(elem, styleProperty, value) {
  if (elem && _typeof(elem.style) === 'object') {
    elem.style[styleProperty] = value;
  }
};

function fireKeyEvent(el, evtType, keyCode) {
  var evtObj;
  if (document.createEvent) {
    if (window.KeyEvent) {
      //firefox 浏览器下模拟事件
      evtObj = document.createEvent('KeyEvents');
      evtObj.initKeyEvent(evtType, true, true, window, true, false, false, false, keyCode, 0);
    } else {
      //chrome 浏览器下模拟事件
      evtObj = document.createEvent('UIEvents');
      evtObj.initUIEvent(evtType, true, true, window, 1);

      delete evtObj.keyCode;
      if (typeof evtObj.keyCode === "undefined") {
        //为了模拟keycode
        Object.defineProperty(evtObj, "keyCode", { value: keyCode });
      } else {
        evtObj.key = String.fromCharCode(keyCode);
      }

      if (typeof evtObj.ctrlKey === 'undefined') {
        //为了模拟ctrl键
        Object.defineProperty(evtObj, "ctrlKey", { value: true });
      } else {
        evtObj.ctrlKey = true;
      }
    }
    el.dispatchEvent(evtObj);
  } else if (document.createEventObject) {
    //IE 浏览器下模拟事件
    evtObj = document.createEventObject();
    evtObj.keyCode = keyCode;
    el.fireEvent('on' + evtType, evtObj);
  }
}