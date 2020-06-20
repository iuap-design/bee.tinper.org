"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * 在此存储全局配置项
 */

// 树懒加载功能，需要用到的变量
exports["default"] = {
    loadBuffer: 20, //懒加载时缓冲区数据量
    defaultRowsInView: 20, //可视区数据量
    rowDiff: 10 //行差值，需要重新截取数据的阈值
};
module.exports = exports["default"];