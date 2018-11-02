## ac-mobile-locale

## 代码演示

---

手机号多语控件

## 效果  [进入示例](https://tinper-acs.github.io/ac-mobile-locale/)


```
$ ynpm install @yonyou/ac-mobile-locale --save-dev

引入

import AcMobileLocale from '@yonyou/ac-mobile-locale';

样式引入

import '@yonyou/ac-mobile-locale/dist/index.css';
```

## API

|参数|说明|类型|返回值|是否必填|
|:--|:---:|:--:|---:|---:|
|className|容器样式|string| --- | 否 |
|accountInfo| 语种列表 |array| --- | 否 |
|selectContryPhoneCode| 默认显示语种|object| --- | 否 |
|mobile| 默认显示手机号 |string | --- | 否 |
|mobileChangeHandle|改变语种和输入手机号改变| function | arg1:输入的手机号，arg2: 选中的语种 | 否 |


#### 开发调试

```sh
$ cd @yonyou/ac-mobile-locale

$ ynpm install

$ npm run dev

```
