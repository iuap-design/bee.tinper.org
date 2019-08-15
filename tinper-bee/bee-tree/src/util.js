/* eslint no-loop-func: 0*/

import React from 'react';

export function browser(navigator) {
  let tem;
  const ua = navigator.userAgent;
  let M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
  if (/trident/i.test(M[1])) {
    tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
    return `IE ${tem[1] || ''}`;
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
export function getOffset(ele) {
  let doc, win, docElem, rect;

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
  let len = 1;
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

export function loopAllChildren(childs, callback, parent) {
  const loop = (children, level, _parent) => {
    const len = getChildrenlength(children);
    React.Children.forEach(children, (item, index) => {
      const pos = `${level}-${index}`;
      if (item.props.children && item.type && item.type.isTreeNode) {
        loop(item.props.children, pos, { node: item, pos });
      }
      callback(item, index, pos, item.key || pos, getSiblingPosition(index, len, {}), _parent);
    });
  };
  loop(childs, 0, parent);
}

export function isInclude(smallArray, bigArray) {
  return smallArray.every((ii, i) => {
    return ii === bigArray[i];
  });
}
// console.log(isInclude(['0', '1'], ['0', '10', '1']));


// arr.length === 628, use time: ~20ms
export function filterParentPosition(arr) {
  const levelObj = {};
  arr.forEach((item) => {
    const posLen = item.split('-').length;
    if (!levelObj[posLen]) {
      levelObj[posLen] = [];
    }
    levelObj[posLen].push(item);
  });
  const levelArr = Object.keys(levelObj).sort();
  for (let i = 0; i < levelArr.length; i++) {
    if (levelArr[i + 1]) {
      levelObj[levelArr[i]].forEach(ii => {
        for (let j = i + 1; j < levelArr.length; j++) {
          levelObj[levelArr[j]].forEach((_i, index) => {
            if (isInclude(ii.split('-'), _i.split('-'))) {
              levelObj[levelArr[j]][index] = null;
            }
          });
          levelObj[levelArr[j]] = levelObj[levelArr[j]].filter(p => p);
        }
      });
    }
  }
  let nArr = [];
  levelArr.forEach(i => {
    nArr = nArr.concat(levelObj[i]);
  });
  return nArr;
}
// console.log(filterParentPosition(
//   ['0-2', '0-3-3', '0-10', '0-10-0', '0-0-1', '0-0', '0-1-1', '0-1']
// ));


function stripTail(str) {
  const arr = str.match(/(.+)(-[^-]+)$/);
  let st = '';
  if (arr && arr.length === 3) {
    st = arr[1];
  }
  return st;
}
function splitPosition(pos) {
  return pos.split('-');
}

export function handleCheckState(obj, checkedPositionArr, checkIt) {
  // console.log(stripTail('0-101-000'));
  let objKeys = Object.keys(obj);
  // let s = Date.now();
  objKeys.forEach((i, index) => {
    const iArr = splitPosition(i);
    let saved = false;
    checkedPositionArr.forEach((_pos) => {
      // 设置子节点，全选或全不选
      const _posArr = splitPosition(_pos);
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
  objKeys = objKeys.filter(i => i); // filter non null;

  for (let pIndex = 0; pIndex < checkedPositionArr.length; pIndex++) {
    // 循环设置父节点的 选中 或 半选状态
    const loop = (__pos) => {
      const _posLen = splitPosition(__pos).length;
      if (_posLen <= 2) { // e.g. '0-0', '0-1'
        return;
      }
      let sibling = 0;
      let siblingChecked = 0;
      const parentPosition = stripTail(__pos);
      objKeys.forEach((i /* , index*/) => {
        const iArr = splitPosition(i);
        if (iArr.length === _posLen && isInclude(splitPosition(parentPosition), iArr)) {
          sibling++;
          if (obj[i].checked) {
            siblingChecked++;
            const _i = checkedPositionArr.indexOf(i);
            if (_i > -1) {
              checkedPositionArr.splice(_i, 1);
              if (_i <= pIndex) {
                pIndex--;
              }
            }
          } else if (obj[i].halfChecked) {
            siblingChecked += 0.5;
          }
          // objKeys[index] = null;
        }
      });
      // objKeys = objKeys.filter(i => i); // filter non null;
      const parent = obj[parentPosition];
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
    loop(checkedPositionArr[pIndex], pIndex);
  }
  // console.log(Date.now()-s, objKeys.length, checkIt);
}

export function getCheck(treeNodesStates) {
  const halfCheckedKeys = [];
  const checkedKeys = [];
  const checkedNodes = [];
  const checkedNodesPositions = [];
  Object.keys(treeNodesStates).forEach((item) => {
    const itemObj = treeNodesStates[item];
    if (itemObj.checked) {
      checkedKeys.push(itemObj.key);
      checkedNodes.push(itemObj.node);
      checkedNodesPositions.push({ node: itemObj.node, pos: item });
    } else if (itemObj.halfChecked) {
      halfCheckedKeys.push(itemObj.key);
    }
  });
  return {
    halfCheckedKeys, checkedKeys, checkedNodes, checkedNodesPositions, treeNodesStates,
  };
}

export function getStrictlyValue(checkedKeys, halfChecked) {
  if (halfChecked) {
    return { checked: checkedKeys, halfChecked };
  }
  return checkedKeys;
}

export function arraysEqual(a, b) {
  if (a === b) return true;
  if (a === null || typeof a === 'undefined' || b === null || typeof b === 'undefined') {
    return false;
  }
  if (a.length !== b.length) return false;

  // If you don't care about the order of the elements inside
  // the array, you should sort both arrays here.

  for (let i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}


export function closest(el, selector) {
  const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;

  while (el) {
    if (matchesSelector.call(el, selector)) {
      return el;
    } else {
      el = el.parentElement;
    }
  }
  return null;
}

export function isTreeNode(node) {
  return node && node.type && node.type.isTreeNode;
}

export function toArray(children) {
  const ret = [];
  React.Children.forEach(children, (c) => {
    ret.push(c);
  });
  return ret;
}

export function getNodeChildren(children) {
  return toArray(children).filter(isTreeNode);
}

let onlyTreeNodeWarned = false;

export function warnOnlyTreeNode() {
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
export function convertListToTree(treeData, attr, flatTreeKeysMap) {
    let tree = [];
    let resData = treeData,
        resKeysMap = {};
    resData.map((element) => {
        resKeysMap[element.key] = element;
    });
    // 查找父节点，为了补充不完整的数据结构
    let findParentNode = (node) => {
      let parentKey = node[attr.parendId];
      if (!resKeysMap.hasOwnProperty(parentKey) ) {
        let obj = {
          key: flatTreeKeysMap[parentKey][attr.id],
          title: flatTreeKeysMap[parentKey][attr.name],
          children: []
        };
        tree.push(obj);
        resKeysMap[obj.key] = obj;
      }
      return flatTreeKeysMap[parentKey];
    }

    for (let i = 0; i < resData.length; i++) {
        if (resData[i].parentKey === attr.rootId) {
            let obj = {
                key: resData[i][attr.id],
                title: resData[i][attr.name],
                isLeaf: resData[i][attr.isLeaf],
                children: []
            };
            tree.push(obj);
            resData.splice(i, 1);
            i--;
        }else {
            let parentNode = flatTreeKeysMap[resData[i][attr.id]],
                parentKey = parentNode[attr.parendId];
            while(parentKey !== attr.rootId){
              parentNode = findParentNode(parentNode);
              parentKey = parentNode[attr.parendId];
            }
        }
    }
    // console.log('tree',tree);
    var run = function(treeArrs) {
        if (resData.length > 0) {
            for (let i = 0; i < treeArrs.length; i++) {
                for (let j = 0; j < resData.length; j++) {
                    if (treeArrs[i].key === resData[j][attr.parendId]) {
                        let obj = {
                            key: resData[j][attr.id],
                            title: resData[j][attr.name],
                            isLeaf: resData[j][attr.isLeaf],
                            children: []
                        };
                        treeArrs[i].children.push(obj);
                        resData.splice(j, 1);
                        j--;
                    }
                }
                run(treeArrs[i].children);
            }
        }
    };
    run(tree);
    return tree;
}

function isObject(value) {
  const type = typeof value
  return value != null && (type == 'object' || type == 'function')
}

/**
 * 函数防抖
 * @param {*} func 
 * @param {*} wait 
 * @param {*} immediate 
 */
export function debounce(func, wait, immediate) {
  let timeout;
  return function debounceFunc() {
    const context = this;
    const args = arguments;
    // https://fb.me/react-event-pooling
    if (args[0] && args[0].persist) {
      args[0].persist();
    }
    const later = () => {
      timeout = null;
      if (!immediate) {
        func.apply(context, args);
      }
    };
    const callNow = immediate && !timeout;
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
export function throttle(func, wait, options) {
  let leading = true
  let trailing = true

  if (typeof func !== 'function') {
    throw new TypeError('Expected a function')
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading
    trailing = 'trailing' in options ? !!options.trailing : trailing
  }
  return debounce(func, wait, {
    leading,
    trailing,
    'maxWait': wait,
  })
}