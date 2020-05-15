# 多语 Locale 

## 何时使用
Locale组件，在使用时，需要将你的App跟组件包裹起来。这样才能影响到所有使用的tinper-bee组件。

## 如何使用
```
import { Locale } from 'tinper-bee';
import ZhCn from "tinper-bee/lib/zh_CN";
import ZhTw from "tinper-bee/lib/zh_TW";
import EnUS from "tinper-bee/lib/en_US";

```

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
        'ok': '确认',
        'cancel': '取消'
    },
    Table: {
        'resetSettings': '还原设置',
        'include': '包含',
        'exclusive': '不包含',
        'equal': '等于',
        'unequal':'不等于',
        'begin':'以开始',
        'end':'以结尾',
    },
    Clipboard: {
        'copy': '复制',
        'cut': '剪切',
        'copyReady': '已复制',
        'cutReady': '已剪切',
        'copyToClipboard':'复制到剪切板',
        'close':'关闭',
    },
    Pagination:{
        'total': '共',
        'items': '条',
        'show': '显示',
        'goto': '跳至',
        'page': '页',
        'ok': '确认'
    },
    Grid:{
        'lang': 'zh-cn',
        'fixTitle': '锁定',
        'noFixTitle': '解锁',
        'hideTitle': '隐藏',
        'rowFilter':'行过滤',
        'openRowFilter':'打开行过滤',
        'closeRowFilter':'关闭行过滤', 
    },
    SearchPanel:{
        'title': '默认筛选',
        'resetName': '清空',
        'searchName': '查询',
        'down':'展开',
        'up':'收起',
    }
}
```

### 第三方国际化方案

- [react-intl](https://github.com/yahoo/react-intl)

## 注意事项

暂无

## 更新日志