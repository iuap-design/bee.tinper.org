## ac-input-locale

>  多语言 Input 组件


```
$ ynpm install @yonyou/ac-input-locale --save-dev

引入

import AcInputLocale from '@yonyou/ac-input-locale';

样式引入

import '@yonyou/ac-input-locale/build/ac-input-locale.css';
```

##效果
 
 

## API

|参数|说明|类型|返回值|
|:--|:---:|:--:|---:|
|className|容器样式|string| --- |
|onSave|点击确定的钩子函数|fun|object |
|onCancel|点击取消的钩子函数|fun|Object |
|locale|系统语言|string |'zh-cn/en/tw'/ |
|localeList|语言列表|Array| ---|

       

#### 开发调试

```sh
$ cd @yonyou/ac-input-locale
$ npm install
$ npm run dev
```

