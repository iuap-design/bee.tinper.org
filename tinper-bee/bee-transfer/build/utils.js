"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/**
 * a little function to help us with reordering the result
 * @param {*} list 
 * @param {*} targetKeys
 * @param {*} startIndex 
 * @param {*} endIndex 
 */
var reorder = function reorder(list, targetKeys, startIndex, endIndex) {
    var result1 = Array.from(list);

    var _result1$splice = result1.splice(startIndex, 1),
        _result1$splice2 = _slicedToArray(_result1$splice, 1),
        removed1 = _result1$splice2[0];

    result1.splice(endIndex, 0, removed1);

    var result2 = Array.from(targetKeys);

    var _result2$splice = result2.splice(startIndex, 1),
        _result2$splice2 = _slicedToArray(_result2$splice, 1),
        removed2 = _result2$splice2[0];

    result2.splice(endIndex, 0, removed2);

    var result = {};
    result.dataArr = result1;
    result.targetKeyArr = result2;

    return result;
};

/**
 * Moves an item from one list to another list.
 * @param {*} source 
 * @param {*} destination 
 * @param {*} droppableSource 
 * @param {*} droppableDestination 
 * @param {*} targetKeys
 */
var move = function move(source, destination, droppableSource, droppableDestination, targetKeys) {
    var sourceClone = Array.from(source);
    var destClone = Array.from(destination);

    var _sourceClone$splice = sourceClone.splice(droppableSource.index, 1),
        _sourceClone$splice2 = _slicedToArray(_sourceClone$splice, 1),
        removed = _sourceClone$splice2[0];

    destClone.splice(droppableDestination.index, 0, removed);
    targetKeys.splice(droppableDestination.index, 0, removed.key);

    var result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;
    result.newTargetKeys = targetKeys;
    return result;
};

exports.reorder = reorder;
exports.move = move;