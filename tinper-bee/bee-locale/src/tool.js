export function getComponentLocale(props, context, componentName, getDefaultLocale) {
    let locale = {};
    if (context && context.beeLocale && context.beeLocale[componentName]) {
        locale = context.beeLocale[componentName];
    } else {
        const defaultLocale = getDefaultLocale();

        locale = defaultLocale.default || defaultLocale;
    }

    const result = {
        ...locale,
        ...props.locale,
    };
    if(props.locale){
        result.lang = {
            ...locale.lang,
            ...props.locale.lang,
        };
    }else{
        result.lang = {
            ...locale.lang
        };
    }
    
    return result;
}

export function getLocaleCode(context) {
    const localeCode = context.beeLocale && context.beeLocale.lang;
    // Had use LocaleProvide but didn't set locale
    if (context.beeLocale && context.beeLocale.exist && !localeCode) {
        return 'zh-cn';
    }
    return localeCode;
}