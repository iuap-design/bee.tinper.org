# 日历 Calendar

基于 [calendar](https://github.com/react-component/calendar) 封装

## 何时使用

当数据是日期或按照日期划分时，例如日程、课表、价格日历等，农历等。目前支持年/月切换。

## 如何使用

```

import Calendar from 'bee-calendar';
import bee-calendar/build/Calendar.css;

```

## 代码演示

## API

|参数|说明|类型|默认值|
|:---|:-----|:----|:------|
|prefixCls|prefixCls of this component|String|
|value|输入框当前的值|moment||
|defaultValue|输入框默认的值|moment||
|defaultType|默认渲染类型：日期／月份（date/month）|string|date|
|type|面板的类型：日期／月份（date/month）|string||
|onTypeChange|面板切换的回调函数|function(type)||
|fullscreen|铺满显示|bool|false|
|monthCellRender|月份显示回调函数|function||
|dateCellRender|日期显示回调函数|function||
|monthCellContentRender|月份内容渲染回调函数|function||
|dateCellContentRender|日期内容渲染回调函数|function||
|onSelect|日期选中回调函数|Function(date: moment)||

## 注意事项

暂无

## 更新日志