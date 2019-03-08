'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.en = exports.tw = exports.zh = undefined;

var _citys = require('./citys');

var _citys2 = _interopRequireDefault(_citys);

var _citysTw = require('./citys-tw');

var _citysTw2 = _interopRequireDefault(_citysTw);

var _citysEn = require('./citys-en');

var _citysEn2 = _interopRequireDefault(_citysEn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var zh = exports.zh = {
    defaultValue: { province: '北京', city: '北京', area: '东城区' },
    provinceData: _citys2["default"]
};

var tw = exports.tw = {
    defaultValue: { province: '北京', city: '北京', area: '東城區' },
    provinceData: _citysTw2["default"]
};

var en = exports.en = {
    defaultValue: { province: 'Beijing', city: 'Beijing', area: 'Dongcheng District' },
    provinceData: _citysEn2["default"]
};