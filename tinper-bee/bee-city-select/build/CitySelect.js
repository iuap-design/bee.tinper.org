'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _beeSelect = require('bee-select');

var _beeSelect2 = _interopRequireDefault(_beeSelect);

var _lodash = require('lodash.findindex');

var _lodash2 = _interopRequireDefault(_lodash);

var _provinceData = require('./provinceData');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var Option = _beeSelect2["default"].Option;

var propTypes = {
    defaultValue: _propTypes2["default"].object,
    value: _propTypes2["default"].object,
    onChange: _propTypes2["default"].func,
    provinceData: _propTypes2["default"].array,
    lang: _propTypes2["default"].string
};
var defaultProps = {
    defaultValue: _provinceData.zh.defaultValue,
    value: null,
    onChange: function onChange() {},
    provinceData: _provinceData.zh.provinceData,
    lang: 'zh_CN'
};

var CitySelect = function (_Component) {
    _inherits(CitySelect, _Component);

    function CitySelect(props) {
        _classCallCheck(this, CitySelect);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _initialiseProps.call(_this);

        var provinceData = props.provinceData;
        if (props.lang == 'zh_TW') {
            provinceData = _provinceData.tw.provinceData;
        } else if (props.lang == 'en_US') {
            provinceData = _provinceData.en.provinceData;
        }
        _this.state = {
            province: '北京',
            provinceIndex: 0,
            cityIndex: 0,
            provinceData: provinceData,
            cities: provinceData[0].city,
            secondCity: provinceData[0].city[0].name,
            areas: provinceData[0].city[0].area,
            secondArea: provinceData[0].city[0].area[0]
        };
        return _this;
    }

    CitySelect.prototype.componentDidMount = function componentDidMount() {
        var _props = this.props,
            _defaultValue = _props.defaultValue,
            value = _props.value,
            lang = _props.lang;

        var provinceData = this.state.provinceData;
        if (lang == 'zh_TW') {
            provinceData = _provinceData.tw.provinceData;
            _defaultValue = _provinceData.tw.defaultValue;
        } else if (lang == 'en_US') {
            provinceData = _provinceData.en.provinceData;
            _defaultValue = _provinceData.en.defaultValue;
        }
        var defaultValue = value ? value : _defaultValue;
        var province = defaultValue.province;
        var provinceIndex = this.getIndex('province', defaultValue.province);
        var cityIndex = this.getIndex('city', defaultValue.city, provinceIndex);
        var cities = provinceData[provinceIndex].city;
        var secondCity = defaultValue.city;
        var areas = cities[cityIndex].area;
        var secondArea = defaultValue.area;
        this.setState({
            province: province,
            provinceIndex: provinceIndex,
            cityIndex: cityIndex,
            cities: cities,
            secondCity: secondCity,
            areas: areas,
            secondArea: secondArea,
            provinceData: provinceData
        });
    };

    CitySelect.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        if (!nextProps.value) return;
        var _nextProps$value = nextProps.value,
            province = _nextProps$value.province,
            city = _nextProps$value.city,
            area = _nextProps$value.area;

        this.setState({
            province: province,
            secondCity: city,
            secondArea: area
        });
        this.handleProvinceChange(province);
    };

    CitySelect.prototype.render = function render() {
        var provinceOptions = this.state.provinceData.map(function (province, index) {
            return _react2["default"].createElement(
                Option,
                { key: province.name },
                province.name
            );
        });
        var cityOptions = this.state.cities.map(function (city, index) {
            return _react2["default"].createElement(
                Option,
                { key: city.name },
                city.name
            );
        });
        var areaOptions = this.state.areas.map(function (area, index) {
            return _react2["default"].createElement(
                Option,
                { key: area },
                area
            );
        });
        return _react2["default"].createElement(
            'div',
            { className: (0, _classnames2["default"])("u-city-select", this.props.className) },
            _react2["default"].createElement(
                _beeSelect2["default"],
                {
                    value: this.state.province,
                    className: 'province',
                    onChange: this.handleProvinceChange },
                provinceOptions
            ),
            _react2["default"].createElement(
                _beeSelect2["default"],
                {
                    value: this.state.secondCity,
                    className: 'city',
                    onChange: this.handleCityChange },
                cityOptions
            ),
            _react2["default"].createElement(
                _beeSelect2["default"],
                {
                    value: this.state.secondArea,
                    className: 'area',
                    onChange: this.onSecondAreaChange },
                areaOptions
            )
        );
    };

    return CitySelect;
}(_react.Component);

var _initialiseProps = function _initialiseProps() {
    var _this2 = this;

    this.getIndex = function (type, name, provinceIndex) {
        var provinceData = _this2.state.provinceData;
        var provinceI = provinceIndex || _this2.state.provinceIndex;
        switch (type) {
            case 'province':
                return (0, _lodash2["default"])(provinceData, function (province) {
                    return province.name == name;
                });
                break;
            case 'city':
                return (0, _lodash2["default"])(provinceData[provinceI].city, function (city) {
                    return city.name == name;
                });
                break;
        }
    };

    this.handleProvinceChange = function (value) {
        var provinceData = _this2.state.provinceData;
        var index = _this2.getIndex('province', value);
        var city = provinceData[index].city[0].name;
        var area = provinceData[index].city[0].area[0];
        _this2.setState({
            province: value,
            cities: provinceData[index].city,
            secondCity: city,
            provinceIndex: index,
            areas: provinceData[index].city[0].area,
            secondArea: area
        });
        _this2.onChange(value, city, area);
    };

    this.handleCityChange = function (value) {
        var provinceData = _this2.state.provinceData;
        var index = _this2.getIndex('city', value);
        var provinceIndex = _this2.state.provinceIndex;
        var area = provinceData[provinceIndex].city[index].area[0];
        _this2.setState({
            secondCity: provinceData[provinceIndex].city[index].name,
            areas: provinceData[provinceIndex].city[index].area,
            secondArea: area,
            cityIndex: value
        });
        _this2.onChange(undefined, value, area);
    };

    this.onSecondAreaChange = function (value) {
        _this2.setState({
            secondArea: value
        });
        _this2.onChange(undefined, undefined, value);
    };

    this.onChange = function (province, city, area) {
        _this2.props.onChange({
            province: province || _this2.state.province,
            city: city || _this2.state.secondCity,
            area: area
        });
    };
};

CitySelect.propTypes = propTypes;
CitySelect.defaultProps = defaultProps;
exports["default"] = CitySelect;
module.exports = exports['default'];