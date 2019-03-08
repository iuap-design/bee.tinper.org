/**
* This source code is quoted from rc-menu.
* homepage: https://github.com/react-component/menu
*/
import React from 'react';

export function noop() {
}

export function getKeyFromChildrenIndex(child, menuEventKey, index) {
  const prefix = menuEventKey || '';
  return child.key || `${prefix}item_${index}`;
}

export function getMenuIdFromSubMenuEventKey(eventKey) {
  return `${eventKey}-menu-`;
}

export function loopMenuItem(children, cb) {
  let index = -1;
  React.Children.forEach(children, (c) => {
    index++;
    if (c && c.type && c.type.isMenuItemGroup) {
      React.Children.forEach(c.props.children, (c2) => {
        index++;
        cb(c2, index);
      });
    } else {
      cb(c, index);
    }
  });
}

export function loopMenuItemRecursively(children, keys, ret) {
  /* istanbul ignore if */
  if (!children || ret.find) {
    return;
  }
  React.Children.forEach(children, (c) => {
    if (c) {
      const construct = c.type;
      if (!construct
        ||
        !(construct.isSubMenu || construct.isMenuItem || construct.isMenuItemGroup)
      ) {
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

export const menuAllProps = [
  'defaultSelectedKeys',
  'selectedKeys',
  'defaultOpenKeys',
  'openKeys',
  'mode',
  'getPopupContainer',
  'onSelect',
  'onDeselect',
  'onDestroy',
  'openTransitionName',
  'openAnimation',
  'subMenuOpenDelay',
  'subMenuCloseDelay',
  'forceSubMenuRender',
  'triggerSubMenuAction',
  'level',
  'selectable',
  'multiple',
  'onOpenChange',
  'visible',
  'focusable',
  'defaultActiveFirst',
  'prefixCls',
  'inlineIndent',
  'parentMenu',
  'title',
  'rootPrefixCls',
  'eventKey',
  'active',
  'onItemHover',
  'onTitleMouseEnter',
  'onTitleMouseLeave',
  'onTitleClick',
  'popupAlign',
  'popupOffset',
  'isOpen',
  'renderMenuItem',
  'manualRef',
  'subMenuKey',
  'disabled',
  'index',
  'isSelected',
  'store',
  'activeKey',
  'builtinPlacements',
  'overflowedIndicator',

  // the following keys found need to be removed from test regression
  'attribute',
  'value',
  'popupClassName',
  'inlineCollapsed',
  'menu',
  'theme',
  'itemIcon',
  'expandIcon',
];

export const getWidth = (elem) => (
  elem &&
  typeof elem.getBoundingClientRect === 'function' &&
  elem.getBoundingClientRect().width
) || 0;

export const setStyle = (elem, styleProperty, value) => {
  if (elem && typeof elem.style === 'object') {
    elem.style[styleProperty] = value;
  }
};


export function fireKeyEvent(el, evtType, keyCode) {
  var evtObj;
  if (document.createEvent) {
      if (window.KeyEvent) {//firefox 浏览器下模拟事件
          evtObj = document.createEvent('KeyEvents');
          evtObj.initKeyEvent(evtType, true, true, window, true, false, false, false, keyCode, 0);
      } else {//chrome 浏览器下模拟事件
          evtObj = document.createEvent('UIEvents');
          evtObj.initUIEvent(evtType, true, true, window, 1);

          delete evtObj.keyCode;
          if (typeof evtObj.keyCode === "undefined") {//为了模拟keycode
              Object.defineProperty(evtObj, "keyCode", { value: keyCode });                       
          } else {
              evtObj.key = String.fromCharCode(keyCode);
          }

          if (typeof evtObj.ctrlKey === 'undefined') {//为了模拟ctrl键
              Object.defineProperty(evtObj, "ctrlKey", { value: true });
          } else {
              evtObj.ctrlKey = true;
          }
      }
      el.dispatchEvent(evtObj);

  } else if (document.createEventObject) {//IE 浏览器下模拟事件
      evtObj = document.createEventObject();
      evtObj.keyCode = keyCode
      el.fireEvent('on' + evtType, evtObj);
  }
}