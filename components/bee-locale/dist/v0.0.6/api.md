# Locale 多语组件

Locale组件，在使用时，需要将你的App跟组件包裹起来。这样才能影响到所有使用的tinper-bee组件。

## 代码演示

## API
|参数|说明|类型|默认值|
|:---|:-----|:----|:------|
|locale|设置的语言对象|object|中文语言包|

### 示例 zh_CN.js

```
export default {
    lang: 'zh_CN',
    Popconfirm: {
        ok: '确认',
        cancel: '取消'
    },
    Table: {
        noData: '无数据'
    },
    Clipboard: {
        copy: '复制'
    },
    Pagination:{
        total: '共',
        items: '条',
        show: '显示',
        goto: '跳至',
        page: '页',
        ok: '确认'
    }
}
```

### 第三方国际化方案

- [react-intl](https://github.com/yahoo/react-intl)