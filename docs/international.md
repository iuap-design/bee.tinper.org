## 国际化

### 组件库多语设置

tinper-bee组件库提供了 `Locale` 组件来修改组件内写死的文字的语言。使用 `Locale` 组件将你的组件包裹起来，并将语言包传给 `Locale` 组件的 `locale` 属性，即可实现组件库多语。目前组件库提供两种语言包，中文 `tinper-bee/locale/zh_CN.js` 英文 `tinper-bee/locale/en_US.js`。
示例代码如下：

```
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { Locale } from 'tinper-bee';
import zhCn from 'tinper-bee/locale/zh_CN.js';

class App extends Component {
    render() {

        return (
            <div>
                我是App
            </div>
        )
    }
}


ReactDOM.render( (
        <Locale locale={zhCn}>
            <App />
        </Locale>
    )
}

```


### 项目国际化 方案一

[示例](https://github.com/tinper-bee/bee-international-intl)

对于项目的多语设置，我们推荐使用[react-intl](https://github.com/yahoo/react-intl)。
简要说明如下：假设项目的入口为 App 组件，需要根据cookie判断语言

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

### 项目国际化 方案二

[示例](https://github.com/tinper-bee/bee-international-lanbuild)

使用 [lanbuild](https://www.npmjs.com/package/lanbuild) 组件，产出多种语言版本代码。 目前只支持，中文，英文，繁体中文。 后续支持多种语言以及简化配置，开发正在努力中。。。