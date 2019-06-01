# 国际化

国际化解决方案，包含了多语言（内容多语和数据多语）、多时区、多币种、多语言录入、国际化手机号录入、多语翻译平台、本地化等相关内容。

## 概述：组件库支持的多语言能力

- 组件库的多语工具组件：[bee-locale](http://bee.tinper.org/tinper-bee/bee-locale)

- 多语言录入组件：[ac-input-locale](http://bee.tinper.org/tinper-acs/ac-input-locale)

- 国际化手机号录入组件：[ac-mobile-locale](http://bee.tinper.org/tinper-acs/ac-mobile-locale)

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
  "js.sin.src.0003": "更新成功EN",
  "js.com.Ind1.0001": "员工编号EN",
  "js.com.Ind1.0002": "员工姓名EN",
  "js.com.Ind1.0003": "员工性别EN",
  "js.com.Ind1.0004": "所属部门EN",
  "js.com.Ind1.0005": "职级EN",
  "js.com.Ind1.0006": "工龄EN",
  "js.com.Ind1.0007": "司龄EN",
  "js.com.Ind1.0008": "年份EN",
  "js.com.Ind1.0009": "月份EN",
  "js.com.Ind1.0010": "补贴类别EN",
  "js.com.Ind1.0011": "补贴标准EN",
  "js.com.Ind1.0012": "实际补贴EN",
  "js.com.Ind1.0013": "是否超标EN",
  "js.com.Ind1.0014": "申请时间EN",
  "js.com.Ind1.0015": "领取方式EN",
  "js.com.Ind1.0016": "领取时间EN",
  "js.com.Ind1.0017": "备注EN",
  "js.com.Ind1.0018": "请勾选数据后再新增EN",
  "js.com.Ind1.0019": "请勾选数据后再更新EN",
  "js.com.Ind1.0020": "数据填写不完整EN",
  "js.com.Ind1.0021": "请勾选数据后再删除EN",
  "js.com.Ind1.0022": "A2单表行内编辑示例EN",
  "js.com.Ind1.0023": "按钮权限加载完成EN",
  "js.com.Ind1.0024": "新增EN",
  "js.com.Ind1.0025": "修改EN",
  "js.com.Ind1.0026": "删除EN",
  "js.com.Ind1.0027": "导出EN",
  "js.com.Ind1.0028": "保存EN",
  "js.com.Ind1.0029": "取消EN",
  "js.com.Ind1.0030": "数据未保存，确定离开 ?EN",
  "js.com.Ind1.0031": "是否要删除 ?EN",
  "js.com.Ind2.0001": "请选择EN",
  "js.com.Ind2.0002": "男EN",
  "js.com.Ind2.0003": "女EN",
  "js.com.Ind2.0004": "一月EN",
  "js.com.Ind2.0005": "二月EN",
  "js.com.Ind2.0006": "三月EN",
  "js.com.Ind2.0007": "四月EN",
}

```