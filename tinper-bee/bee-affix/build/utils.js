"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.addEventListener = addEventListener;
exports.removeEventListener = removeEventListener;
function addEventListener(target, eventType, callback, options) {
    if (target.addEventListener) {
        target.addEventListener(eventType, callback, options);
    } else if (target.attachEvent) {
        target.attachEvent("on" + eventType, callback);
    }
}

function removeEventListener(target, eventType, callback, options) {
    if (target.removeEventListener) {
        target.removeEventListener(eventType, callback, options);
    } else if (target.attachEvent) {
        target.detachEvent("on" + eventType, callback);
    }
}