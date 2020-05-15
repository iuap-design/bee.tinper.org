# DatePicker

## Moment.js

### 格式化

```javascript
var moment = require('moment');
moment().format();                                // "2014-09-08T08:02:17-05:00" (ISO 8601)
moment().format("YYYY-MM-DD");                    // "2018-08-08"
moment().format("dddd, MMMM Do YYYY, h:mm:ss a"); // "Sunday, February 14th 2010, 3:25:50 pm"
moment().format("ddd, hA");                       // "Sun, 3PM"
moment('gibberish').format('YYYY MM DD');         // "Invalid date"
```

### 当前时间

```javascript
var now = moment();
```

### 设置语言 (全局)

```javascript
moment.locale('en');     //英文
moment.locale('zh-cn');  //中文
```

###  设置语言 (局部) 1.7.0+

```javascript
moment().locale('en'); //英文
```


##### 相关的文档地址[链接](http://momentjs.cn/docs/)*


## 代码演示
## API
### DatePicker

|参数|说明|类型|默认值|
|:---|:-----|:----|:------|
|prefixCls|组件的前缀|String| - |
|className|添加节点的样式|String| - |
|style|添加内联样式| Object| - |
|dateRender|日期表格|(current, value) => React.Node| - |
|renderSidebar|侧边栏|() => React.Node| - |
|renderFooter|扩展底边栏|() => React.Node| - |
| defaultValue|默认值，输入框的默认值| moment| - |
| value|日期| moment| - |
| locale| 语言包 | Object |zh_CN |
| format|日期格式化| String | - |
| open|日期组件隐藏、显示| Boolean | false |
| disabled|是否禁用功能|Boolean| false |
| disabledDate |禁用的日期|Function(current:moment):Boolean| - |
| disabledTime |禁用的时间|Function(current:moment):Object| - |
| showDateInput|显示日期输入框|Boolean| true |
| showWeekNumber|是否显示周数| Boolean| false|
| showToday|是否显示今天| Boolean| true|
| showOk|底边栏是否显示ok按钮| Boolean | auto |
| onSelect|选择日期的回调函数|Function(date: moment)| - |
| onChange|日期改变的回调函数|Function(date: moment)| - |
| dateInputPlaceholder|日期的placeholder| String | - |
| showTime | 是否显示时间选择面板 | Boolean | - |
| renderIcon |更改默认的图标|Function| () => <Icon type="uf-calendar" />|
| getCalendarContainer |更改默认渲染位置|Function| - |
| keyboardInput |外层输入框是否支持键盘输入|Boolean|false|
| iconClick |日期按钮点击的回调|Function|-|
| outInputFocus |外层输入框获得焦点的回调|Function|-|
| outInputKeydown |外层输入框keydown回调|Function|-|



注：使用keyboardInput时，以下api变化

- 输入内容的格式需要个format格式相同，也可以有部分变化，变化范围参考 [moment.js](http://momentjs.cn/)。例如：format='YYYY-MM-DD' 输入 '19-1-1'也可识别
- 当输入日期格式无法转换为 moment 对象时，onChange,onClick回调内对应的moment参数值为 null


### MonthPicker

|参数|说明|类型|默认值|
|:---|:-----|:----|:------|
|prefixCls|组件的前缀|String|-|
|className|添加节点的样式|String| - |
|style|添加内联样式| Object| - |
| value |当前值，如输入框的值|moment| - |
| defaultValue|默认值，输入框的默认值| moment| - |
| locale|语言 | Object |en_US |
| disabledDate |禁用的日期|Function(current:moment):Boolean| - |
| onSelect|选择日期的回调函数|Function(date: moment)| - |
| onChange|日期改变的回调函数|Function(date: moment)| - |
| monthCellRender |月份的渲染方法| function | - |
| dateCellRender|日期的渲染方法|function| - |
| monthCellContentRender|自定义月份的渲染方法，将被添加渲染内容中| function| - |
| getCalendarContainer |更改默认渲染位置|Function| - |
| locale| 语言包 | Object |zh_CN |

### RangePicker

|参数|说明|类型|默认值|
|:---|:-----|:----|:------|
|prefixCls|组件的前缀|String| - |
|className|添加节点的样式|String| - |
|style|添加内联样式| Object| - |
|dateRender|日期表格|(current, value) => React.Node| - |
|renderSidebar|侧边栏|() => React.Node| - |
|renderFooter|扩展底边栏|() => React.Node| - |
| selectedValue|当前选中的区间|moment[]| - |
| defaultSelectedValue|默认选中的区间|	moment[]| - |
| locale|日历的语言 | Object |en_US |
| format|日期格式化| String | - |
| disabledDate |禁用的日期|Function(current:moment):Boolean| - |
| disabledTime |禁用的时间|Function(current:moment):Object| - |
| showDateInput|显示日期输入康|Boolean| true |
| showWeekNumber|是否显示周数| Boolean| false|
| showToday|是否显示今天| Boolean| true|
| showOk|底边栏是否显示ok按钮| Boolean | auto |
| showClear|是否显示清除按钮| Boolean|false|
| onSelect|选择日期的回调函数|Function(date: moment)| - |
| onChange|日期改变的回调函数|Function(date: moment)| - |
| dateInputPlaceholder|日期的placeholder| String | - |
| type|是否固定开始或结束选定的值|enum('both','start', 'end')| - |
| getCalendarContainer |更改默认渲染位置|Function| - |
| locale| 语言包 | Object |zh_CN |

### WeekPicker

|参数|说明|类型|默认值|
|:---|:-----|:----|:------|
| placeholder|输入框placeholder|String| - |
| defaultValue|默认值|moment| - |
| getCalendarContainer |更改默认渲染位置|Function| - |
| locale| 语言包 | Object |zh_CN |

### YearPicker

|参数|说明|类型|默认值|
|:---|:-----|:----|:------|
| placeholder |输入框placeholder|String| - |
| defaultValue|默认值|moment| 当前年 |
| getCalendarContainer |更改默认渲染位置|Function| - |
| format|日期格式化| String | - |
| disabled|是否禁用功能|Boolean| false |
| locale| 语言包 | Object |zh_CN |


## DatePicker 已支持的键盘操作

|按键|功能|
|:---|:----|
|↓(下箭) |打开面板|
|esc |关闭面板|
|delete |清除内容|