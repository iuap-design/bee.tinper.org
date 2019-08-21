'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.browser = browser;
exports.getOffset = getOffset;
exports.loopAllChildren = loopAllChildren;
exports.isInclude = isInclude;
exports.filterParentPosition = filterParentPosition;
exports.handleCheckState = handleCheckState;
exports.getCheck = getCheck;
exports.getStrictlyValue = getStrictlyValue;
exports.arraysEqual = arraysEqual;
exports.closest = closest;
exports.isTreeNode = isTreeNode;
exports.toArray = toArray;
exports.getNodeChildren = getNodeChildren;
exports.warnOnlyTreeNode = warnOnlyTreeNode;
exports.convertListToTree = convertListToTree;
exports.debounce = debounce;
exports.throttle = throttle;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /* eslint no-loop-func: 0*/

function browser(navigator) {
  var tem = void 0;
  var ua = navigator.userAgent;
  var M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
  if (/trident/i.test(M[1])) {
    tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
    return 'IE ' + (tem[1] || '');
  }
  if (M[1] === 'Chrome') {
    tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
    if (tem) return tem.slice(1).join(' ').replace('OPR', 'Opera');
  }
  M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
  tem = ua.match(/version\/(\d+)/i);
  if (tem) {
    M.splice(1, 1, tem[1]);
  }
  return M.join(' ');
}

// export function getOffset(el) {
//   const obj = el.getBoundingClientRect();
//   return {
//     left: obj.left + document.body.scrollLeft,
//     top: obj.top + document.body.scrollTop,
//     width: obj.width,
//     height: obj.height
//   };
// }

// // iscroll offset
// offset = function (el) {
//   var left = -el.offsetLeft,
//     top = -el.offsetTop;

//   // jshint -W084
//   while (el = el.offsetParent) {
//     left -= el.offsetLeft;
//     top -= el.offsetTop;
//   }
//   // jshint +W084

//   return {
//     left: left,
//     top: top
//   };
// }

/* eslint-disable */
function getOffset(ele) {
  var doc = void 0,
      win = void 0,
      docElem = void 0,
      rect = void 0;

  if (!ele.getClientRects().length) {
    return { top: 0, left: 0 };
  }

  rect = ele.getBoundingClientRect();

  if (rect.width || rect.height) {
    doc = ele.ownerDocument;
    win = doc.defaultView;
    docElem = doc.documentElement;

    return {
      top: rect.top + win.pageYOffset - docElem.clientTop,
      left: rect.left + win.pageXOffset - docElem.clientLeft
    };
  }

  return rect;
}
/* eslint-enable */

function getChildrenlength(children) {
  var len = 1;
  if (Array.isArray(children)) {
    len = children.length;
  }
  return len;
}

function getSiblingPosition(index, len, siblingPosition) {
  if (len === 1) {
    siblingPosition.first = true;
    siblingPosition.last = true;
  } else {
    siblingPosition.first = index === 0;
    siblingPosition.last = index === len - 1;
  }
  return siblingPosition;
}

function loopAllChildren(childs, callback, parent) {
  var loop = function loop(children, level, _parent) {
    var len = getChildrenlength(children);
    _react2["default"].Children.forEach(children, function (item, index) {
      var pos = level + '-' + index;
      if (item.props.children && item.type && item.type.isTreeNode) {
        loop(item.props.children, pos, { node: item, pos: pos });
      }
      callback(item, index, pos, item.key || pos, getSiblingPosition(index, len, {}), _parent);
    });
  };
  loop(childs, 0, parent);
}

function isInclude(smallArray, bigArray) {
  return smallArray.every(function (ii, i) {
    return ii === bigArray[i];
  });
}
// console.log(isInclude(['0', '1'], ['0', '10', '1']));


// arr.length === 628, use time: ~20ms
function filterParentPosition(arr) {
  var levelObj = {};
  arr.forEach(function (item) {
    var posLen = item.split('-').length;
    if (!levelObj[posLen]) {
      levelObj[posLen] = [];
    }
    levelObj[posLen].push(item);
  });
  var levelArr = Object.keys(levelObj).sort();

  var _loop = function _loop(i) {
    if (levelArr[i + 1]) {
      levelObj[levelArr[i]].forEach(function (ii) {
        var _loop2 = function _loop2(j) {
          levelObj[levelArr[j]].forEach(function (_i, index) {
            if (isInclude(ii.split('-'), _i.split('-'))) {
              levelObj[levelArr[j]][index] = null;
            }
          });
          levelObj[levelArr[j]] = levelObj[levelArr[j]].filter(function (p) {
            return p;
          });
        };

        for (var j = i + 1; j < levelArr.length; j++) {
          _loop2(j);
        }
      });
    }
  };

  for (var i = 0; i < levelArr.length; i++) {
    _loop(i);
  }
  var nArr = [];
  levelArr.forEach(function (i) {
    nArr = nArr.concat(levelObj[i]);
  });
  return nArr;
}
// console.log(filterParentPosition(
//   ['0-2', '0-3-3', '0-10', '0-10-0', '0-0-1', '0-0', '0-1-1', '0-1']
// ));


function stripTail(str) {
  var arr = str.match(/(.+)(-[^-]+)$/);
  var st = '';
  if (arr && arr.length === 3) {
    st = arr[1];
  }
  return st;
}
function splitPosition(pos) {
  return pos.split('-');
}

function handleCheckState(obj, checkedPositionArr, checkIt) {
  // console.log(stripTail('0-101-000'));
  var objKeys = Object.keys(obj);
  // let s = Date.now();
  objKeys.forEach(function (i, index) {
    var iArr = splitPosition(i);
    var saved = false;
    checkedPositionArr.forEach(function (_pos) {
      // 设置子节点，全选或全不选
      var _posArr = splitPosition(_pos);
      if (iArr.length > _posArr.length && isInclude(_posArr, iArr)) {
        obj[i].halfChecked = false;
        obj[i].checked = checkIt;
        objKeys[index] = null;
      }
      if (iArr[0] === _posArr[0] && iArr[1] === _posArr[1]) {
        // 如果
        saved = true;
      }
    });
    if (!saved) {
      objKeys[index] = null;
    }
  });
  // TODO: 循环 2470000 次耗时约 1400 ms。 性能瓶颈！
  // console.log(Date.now()-s, checkedPositionArr.length * objKeys.length);
  objKeys = objKeys.filter(function (i) {
    return i;
  }); // filter non null;

  var _loop3 = function _loop3(_pIndex) {
    // 循环设置父节点的 选中 或 半选状态
    var loop = function loop(__pos) {
      var _posLen = splitPosition(__pos).length;
      if (_posLen <= 2) {
        // e.g. '0-0', '0-1'
        return;
      }
      var sibling = 0;
      var siblingChecked = 0;
      var parentPosition = stripTail(__pos);
      objKeys.forEach(function (i /* , index*/) {
        var iArr = splitPosition(i);
        if (iArr.length === _posLen && isInclude(splitPosition(parentPosition), iArr)) {
          sibling++;
          if (obj[i].checked) {
            siblingChecked++;
            var _i = checkedPositionArr.indexOf(i);
            if (_i > -1) {
              checkedPositionArr.splice(_i, 1);
              if (_i <= _pIndex) {
                _pIndex--;
              }
            }
          } else if (obj[i].halfChecked) {
            siblingChecked += 0.5;
          }
          // objKeys[index] = null;
        }
      });
      // objKeys = objKeys.filter(i => i); // filter non null;
      var parent = obj[parentPosition];
      // sibling 不会等于0
      // 全不选 - 全选 - 半选
      if (siblingChecked === 0) {
        parent.checked = false;
        parent.halfChecked = false;
      } else if (siblingChecked === sibling) {
        parent.checked = true;
        parent.halfChecked = false;
      } else {
        parent.halfChecked = true;
        parent.checked = false;
      }
      loop(parentPosition);
    };
    loop(checkedPositionArr[_pIndex], _pIndex);
    pIndex = _pIndex;
  };

  for (var pIndex = 0; pIndex < checkedPositionArr.length; pIndex++) {
    _loop3(pIndex);
  }
  // console.log(Date.now()-s, objKeys.length, checkIt);
}

function getCheck(treeNodesStates) {
  var halfCheckedKeys = [];
  var checkedKeys = [];
  var checkedNodes = [];
  var checkedNodesPositions = [];
  Object.keys(treeNodesStates).forEach(function (item) {
    var itemObj = treeNodesStates[item];
    if (itemObj.checked) {
      checkedKeys.push(itemObj.key);
      checkedNodes.push(itemObj.node);
      checkedNodesPositions.push({ node: itemObj.node, pos: item });
    } else if (itemObj.halfChecked) {
      halfCheckedKeys.push(itemObj.key);
    }
  });
  return {
    halfCheckedKeys: halfCheckedKeys, checkedKeys: checkedKeys, checkedNodes: checkedNodes, checkedNodesPositions: checkedNodesPositions, treeNodesStates: treeNodesStates
  };
}

function getStrictlyValue(checkedKeys, halfChecked) {
  if (halfChecked) {
    return { checked: checkedKeys, halfChecked: halfChecked };
  }
  return checkedKeys;
}

function arraysEqual(a, b) {
  if (a === b) return true;
  if (a === null || typeof a === 'undefined' || b === null || typeof b === 'undefined') {
    return false;
  }
  if (a.length !== b.length) return false;

  // If you don't care about the order of the elements inside
  // the array, you should sort both arrays here.

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

function closest(el, selector) {
  var matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;

  while (el) {
    if (matchesSelector.call(el, selector)) {
      return el;
    } else {
      el = el.parentElement;
    }
  }
  return null;
}

function isTreeNode(node) {
  return node && node.type && node.type.isTreeNode;
}

function toArray(children) {
  var ret = [];
  _react2["default"].Children.forEach(children, function (c) {
    ret.push(c);
  });
  return ret;
}

function getNodeChildren(children) {
  return toArray(children).filter(isTreeNode);
}

var onlyTreeNodeWarned = false;

function warnOnlyTreeNode() {
  if (onlyTreeNodeWarned) return;
  onlyTreeNodeWarned = true;
  console.warn('Tree only accept TreeNode as children.');
}

/**
 * 将一维数组转换为树结构
 * @param {*} treeData  扁平结构的 List 数组
 * @param {*} attr 属性配置设置
 * @param {*} flatTreeKeysMap 存储所有 key-value 的映射，方便获取各节点信息
 */
function convertListToTree(treeData, attr, flatTreeKeysMap) {
  var tree = [];
  var resData = treeData,
      resKeysMap = {};
  resData.map(function (element) {
    resKeysMap[element.key] = element;
  });
  // 查找父节点，为了补充不完整的数据结构
  var findParentNode = function findParentNode(node) {
    var parentKey = node[attr.parendId];
    if (!resKeysMap.hasOwnProperty(parentKey)) {
      var key = node.key,
          title = node.title,
          children = node.children,
          otherProps = _objectWithoutProperties(node, ['key', 'title', 'children']);

      var obj = {
        key: flatTreeKeysMap[parentKey][attr.id],
        title: flatTreeKeysMap[parentKey][attr.name],
        children: []
      };
      tree.push(_extends(obj, _extends({}, otherProps)));
      resKeysMap[obj.key] = obj;
    }
    return flatTreeKeysMap[parentKey];
  };

  for (var i = 0; i < resData.length; i++) {
    if (resData[i].parentKey === attr.rootId) {
      var _resData$i = resData[i],
          key = _resData$i.key,
          title = _resData$i.title,
          children = _resData$i.children,
          otherProps = _objectWithoutProperties(_resData$i, ['key', 'title', 'children']);

      var obj = {
        key: resData[i][attr.id],
        title: resData[i][attr.name],
        isLeaf: resData[i][attr.isLeaf],
        children: []
      };
      tree.push(_extends(obj, _extends({}, otherProps)));
      resData.splice(i, 1);
      i--;
    } else {
      var parentNode = flatTreeKeysMap[resData[i][attr.id]],
          parentKey = parentNode[attr.parendId];
      while (parentKey !== attr.rootId) {
        parentNode = findParentNode(parentNode);
        parentKey = parentNode[attr.parendId];
      }
    }
  }
  // console.log('tree',tree);
  var run = function run(treeArrs) {
    if (resData.length > 0) {
      for (var _i2 = 0; _i2 < treeArrs.length; _i2++) {
        for (var j = 0; j < resData.length; j++) {
          if (treeArrs[_i2].key === resData[j][attr.parendId]) {
            var _resData$j = resData[j],
                _key = _resData$j.key,
                _title = _resData$j.title,
                _children = _resData$j.children,
                _otherProps = _objectWithoutProperties(_resData$j, ['key', 'title', 'children']);

            var _obj = {
              key: resData[j][attr.id],
              title: resData[j][attr.name],
              isLeaf: resData[j][attr.isLeaf],
              children: []
            };
            treeArrs[_i2].children.push(_extends(_obj, _extends({}, _otherProps)));
            resData.splice(j, 1);
            j--;
          }
        }
        run(treeArrs[_i2].children);
      }
    }
  };
  run(tree);
  return tree;
}

function isObject(value) {
  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
  return value != null && (type == 'object' || type == 'function');
}

/**
 * 函数防抖
 * @param {*} func 
 * @param {*} wait 
 * @param {*} immediate 
 */
function debounce(func, wait, immediate) {
  var timeout = void 0;
  return function debounceFunc() {
    var context = this;
    var args = arguments;
    // https://fb.me/react-event-pooling
    if (args[0] && args[0].persist) {
      args[0].persist();
    }
    var later = function later() {
      timeout = null;
      if (!immediate) {
        func.apply(context, args);
      }
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) {
      func.apply(context, args);
    }
  };
}

/**
 * 函数节流
 * @param {*} func 延时调用函数
 * @param {*} wait 延迟多长时间
 * @param {*} options 至少多长时间触发一次
 * @return Function 延迟执行的方法
 */
function throttle(func, wait, options) {
  var leading = true;
  var trailing = true;

  if (typeof func !== 'function') {
    throw new TypeError('Expected a function');
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    leading: leading,
    trailing: trailing,
    'maxWait': wait
  });
}