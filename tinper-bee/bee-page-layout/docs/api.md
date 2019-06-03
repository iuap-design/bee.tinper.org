# PageLayout

布局组件

## 何时使用

整个页面布局时使用

## 如何使用

```
import PageLayout from 'bee-page-layout';
import 'bee-page-layout/build/PageLayout.css';

const Header = PageLayout.Header;
const SearchArea = PageLayout.SearchArea;
const Content = PageLayout.Content;
const TableContent = PageLayout.TableContent;
const LeftContent = PageLayout.LeftContent;
const RightContent = PageLayout.RightContent;

```

## 代码演示

## API

### PageLayout

|参数|说明|类型|默认值|
|:---|:-----|:----|:------|
| className | 类名 | string | bee-page-layout |

### Header

|参数|说明|类型|默认值|
|:---|:-----|:----|:------|
| className | 类名 | string | header |

### SearchArea

|参数|说明|类型|默认值|
|:---|:-----|:----|:------|
| className | 类名 | string | search-area |

### Content

|参数|说明|类型|默认值|
|:---|:-----|:----|:------|
| className | 类名 | string | content |

### TableContent

|参数|说明|类型|默认值|
|:---|:-----|:----|:------|
| className | 类名 | string | table-container |

### LeftContent

|参数|说明|类型|默认值|
|:---|:-----|:----|:------|
| className | 类名 | string | left-content |
|xs|移动设备显示列数(<768px)|number|-|
|sm|小屏幕桌面设备显示列数(≥768px)|number|-|
|md|中等屏幕设备显示列数(≥992px)|number|-|
|lg|大屏幕设备显示列数(≥1200px)|number|-|
|xsPull|移动屏幕设备到右边距列数|number|-|
|smPull|小屏幕设备到右边距列数|number|-|
|mdPull|中等屏幕设备到右边距列数|number|-|
|lgPull|大屏幕设备到右边距列数|number|-|
|xsPush|移动屏幕设备到左边距列数|number|-|
|smPush|小屏幕设备到左边距列数|number|-|
|mdPush|中等屏幕设备到左边距列数|number|-|
|lgPush|大屏幕设备到左边距列数|number|-|
|xsOffset|移动设备偏移列数|number|-|
|smOffset|小屏幕设备偏移列数|number|-|
|mdOffset|中等屏幕设备偏移列数|number|-|
|lgOffset|大屏幕设备偏移列数|number|-|

### RightContent

|参数|说明|类型|默认值|
|:---|:-----|:----|:------|
| className | 类名 | string | right-content |
|xs|移动设备显示列数(<768px)|number|-|
|sm|小屏幕桌面设备显示列数(≥768px)|number|-|
|md|中等屏幕设备显示列数(≥992px)|number|-|
|lg|大屏幕设备显示列数(≥1200px)|number|-|
|xsPull|移动屏幕设备到右边距列数|number|-|
|smPull|小屏幕设备到右边距列数|number|-|
|mdPull|中等屏幕设备到右边距列数|number|-|
|lgPull|大屏幕设备到右边距列数|number|-|
|xsPush|移动屏幕设备到左边距列数|number|-|
|smPush|小屏幕设备到左边距列数|number|-|
|mdPush|中等屏幕设备到左边距列数|number|-|
|lgPush|大屏幕设备到左边距列数|number|-|
|xsOffset|移动设备偏移列数|number|-|
|smOffset|小屏幕设备偏移列数|number|-|
|mdOffset|中等屏幕设备偏移列数|number|-|
|lgOffset|大屏幕设备偏移列数|number|-|



## 注意事项

Content 为 `bee-layout` 中 `Row` 的封装

LeftContent 和 RightContent 为 `bee-layout` 中 `Col` 的封装，所以继承了 `Col` 的所有属性


## 更新日志