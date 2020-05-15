'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SearchPanel = require('./SearchPanel');

var _SearchPanel2 = _interopRequireDefault(_SearchPanel);

var _AdvancedContainer = require('./AdvancedContainer');

var _AdvancedContainer2 = _interopRequireDefault(_AdvancedContainer);

var _HeadContainer = require('./HeadContainer');

var _HeadContainer2 = _interopRequireDefault(_HeadContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_SearchPanel2["default"].HeadContainer = _HeadContainer2["default"];
_SearchPanel2["default"].AdvancedContainer = _AdvancedContainer2["default"];

exports["default"] = _SearchPanel2["default"];
module.exports = exports['default'];