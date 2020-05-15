'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.getComponentLocale = getComponentLocale;
exports.getLocaleCode = getLocaleCode;
function getComponentLocale(props, context, componentName, getDefaultLocale) {
    var locale = {};
    if (context && context.beeLocale && context.beeLocale[componentName]) {
        locale = context.beeLocale[componentName];
    } else {
        var defaultLocale = getDefaultLocale();

        locale = defaultLocale["default"] || defaultLocale;
    }

    var result = _extends({}, locale, props.locale);
    if (props.locale) {
        result.lang = _extends({}, locale.lang, props.locale.lang);
    } else {
        result.lang = _extends({}, locale.lang);
    }

    return result;
}

function getLocaleCode(context) {
    var localeCode = context.beeLocale && context.beeLocale.lang;
    // Had use LocaleProvide but didn't set locale
    if (context.beeLocale && context.beeLocale.exist && !localeCode) {
        return 'zh-cn';
    }
    return localeCode;
}