'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tinperBeeCore = require('tinper-bee-core');

function animate(node, show, done) {
  var height = void 0;
  return (0, _tinperBeeCore.cssAnimation)(node, 'u-motion-collapse', {
    start: function start() {
      if (!show) {
        node.style.height = node.offsetHeight + 'px';
      } else {
        height = node.offsetHeight;
        node.style.height = 0;
      }
    },
    active: function active() {
      node.style.height = (show ? height : 0) + 'px';
    },
    end: function end() {
      node.style.height = '';
      done();
    }
  });
}

var animation = {
  enter: function enter(node, done) {
    return animate(node, true, done);
  },
  leave: function leave(node, done) {
    return animate(node, false, done);
  },
  appear: function appear(node, done) {
    return animate(node, true, done);
  }
};

exports["default"] = animation;
module.exports = exports['default'];