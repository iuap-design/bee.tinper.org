'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.bindAll = bindAll;
exports.type = type;
exports.isNumber = isNumber;
function bindAll(context, arrFunc) {
    arrFunc.forEach(function (item) {
        context[item] = context[item].bind(context);
    });
}

function type(obj) {
    var toString = Object.prototype.toString;
    return toString.call(obj);
}

function isNumber(obj) {
    return type(obj) == '[object Number]';
}