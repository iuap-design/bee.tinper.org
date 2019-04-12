# 国际化

国际化解决方案，包含了多语言（内容多语和数据多语）、多时区、多币种、多语言录入、国际化手机号录入、多语翻译平台、本地化等相关内容。

## 概述：组件库支持的多语言能力

- 组件库的多语工具组件：[bee-locale](https://design.yonyoucloud.com/tinper-bee/bee-locale)

- 多语言录入组件：[ac-input-locale](https://design.yonyoucloud.com/tinper-acs/ac-input-locale)

- 国际化手机号录入组件：[ac-mobile-locale](https://design.yonyoucloud.com/tinper-acs/ac-mobile-locale)

- 项目级批量多语翻译工具：[lanbuild](https://www.npmjs.com/package/lanbuild)


## 多语言切换和多语言构建

### 多语言切换，以及批量替换工具

对于项目的多语设置，我们推荐使用[react-intl](https://github.com/yahoo/react-intl)。
简要说明如下：假设项目的入口为 App 组件，需要根据cookie判断语言

[示例](https://github.com/tinper-bee/bee-international-intl)

1、配置语言包，`en_US.json`,`zh_CN.json`

```
{
  "Demo.content": "I am App"
}
```

```
{
  "Demo.content": "我是App"
}
```

2、将本地语言包 `en_US.json` 与 tinper 语言包合并，并导出 `en_US.js`，中文同理

```
// en_US.js
import en from 'tinper-bee/locale/en_US.js';
import appLocaleData from 'react-intl/locale-data/en';
import messages from 'en_US.json';

export default {
  messages: {
    ...messages,
  },
  tinperLocale: en,
  locale: 'en',
  data: appLocaleData
};

// zh_CN.js
import zh from 'tinper-bee/locale/zh_CN.js';
import appLocaleData from 'react-intl/locale-data/zh';
import messages from 'zh_CN.json';

export default {
  messages: {
    ...messages,
  },
  tinperLocale: zh,
  locale: 'zh',
  data: appLocaleData
};

```

3、将 `App` 组件包装，给tinper的 `Locale` 组件传入 `locale`属性，给 `react-intl` 组件的 `IntlProvider` 传入 `key`,`locale`, `messages` 属性。

```
import cookie from 'react-cookie';
import { Locale } from 'tinper-bee';
import { IntlProvider } from 'react-intl';
import zh from 'zh_CN.js';    
import en from 'en_US.js';

class Inter extends Component {

    chooseLocale=()=>{
        switch(cookie.load('u_locale')){
            case 'zh-CN':
                return zh
            break;
            case 'en-US':
                return en;
            break;
            default:
                return zh;
        }
    }
    render() {
        let { tinperLocale,locale,messages } = this.chooseLocale();
        return (
            <Locale locale={tinperLocale}>
                <IntlProvider key={locale} locale={locale} messages={messages}>
                    <App/>
                </IntlProvider>
            </Locale>
        )
    }
}

```

4、在 `App` 设置默认语言，所用文字使用 `FormattedMessage` 包装

```
import { FormattedMessage, defineMessages } from 'react-intl';

const locales = defineMessages({
    content: {
        id: 'Demo.content',
        defaultMessage: '我是App',
    }
});

class App extends Component {
    render() {
        return (
            <div>
                <FormattedMessage  {...locales.content}/>
            </div>
        )
    }
}
```

注：使用 `react-intl` ，如果要兼容ie浏览器，需要单独引入 `polyfill`。此 `polyfill` cdn地址为动态地址，会根据浏览器不同使用不同的 `polyfill`

```
<script src="https://cdn.polyfill.io/v2/polyfill.min.js"></script>
```


### 多语言构建

指通过工具将一份代码翻译成多份静态资源，如：webpack-plugin-i18n，以及自研的 [lanbuild](https://www.npmjs.com/package/lanbuild) 工具。

[lanbuild 示例](https://github.com/tinper-bee/bee-international-lanbuild)
使用 lanbuild 组件产出多种语言版本代码。 目前只支持，中文，英文，繁体中文。 后续支持多种语言以及简化配置，开发正在努力中。。。


## 多语文件包 json格式示例

```
{
    "Demo.welcome":"welcome",
    "Demo.showTime":"The following is the show time.",
    "Demo.value":"Please enter content",

    "Header.back": "Back",

    "SearchPanel.clear": "  Reset",
    "SearchPanel.search": "Query",
    "SearchPanel.open": "Open",
    "SearchPanel.close": "Close",

    "International.title":"International-example",
    "International.local":"File Location",
    "International.content":"I can become multi-lingual"
}

```