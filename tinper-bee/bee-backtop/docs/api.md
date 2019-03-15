# Backtop

返回页面顶部


## 何时使用

页面滚动到指定部位，返回到最上边或者指定位置时

## 如何使用

```
import { Backtop } from 'tinper-bee';

or

import Backtop from 'bee-backtop';
import bee-backtop/build/Backtop.css;

```

## 代码演示

## API

|参数|说明|类型|默认值|
|:---|:-----|:----|:------|
|visibilityHeight|当滚动条高度达到多少显示backtop|`number`|400|
|target|设置要监听滚动事件的元素|`function`|() => window|
|click|点击backtop时的回调函数|`function`|-|
|character|自定义字符|`ReactNode`/`string`|<Icon type="uf-top-up"/>|

## 注意事项

暂无

## 更新日志
