'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isFlexSupported = isFlexSupported;
/**
* This source code is quoted from rc-steps.
* homepage: https://github.com/react-component/steps
*/
function isFlexSupported() {
  if (typeof window !== 'undefined' && window.document && window.document.documentElement) {
    var documentElement = window.document.documentElement;

    return 'flex' in documentElement.style || 'webkitFlex' in documentElement.style || 'Flex' in documentElement.style || 'msFlex' in documentElement.style;
  }
  return false;
}