# 分页 Pagination
分页组件

## 何时使用
用于内容过多，分页显示内容

## 如何使用

```
import { Pagination } from 'tinper-bee';

or

import Pagination from 'bee-pagination';
import 'bee-pagination/build/Pagination.css';

```

## 代码演示

## API

|参数|说明|类型|默认值|
|:---|:----|:---|:------|
|items|总页数|number|1|
|activePage|哪一页是激活状态|number|1|
|onSelect|切换页的方法|func |() => {}|
|maxButtons|显示最多页数按钮|number|0|
|prev|显示上一页按钮|bool|false|
|next|显示下一页按钮|bool|false|
|first|显示第一页按钮|bool|false|
|last|显示最后一页按钮|bool|last|
|ellipsis|显示省略按钮|bool|false|
|boundaryLinks|显示边界按钮|bool|false|
|gap|按钮之间有间隔|bool|true|
|noBorder|不显示按钮边框|bool|false|
|size|分页按钮大小(lg md sm)|string|'sm'|
|showJump|是否显示跳页选择|bool|false(为了兼容老版本)|
|onDataNumSelect|选择每页多少条的回调函数|func|() => {}|
|dataNumSelect|每页多少条的下拉选择Option内容|array|['5','10','15','20']|
|dataNum|每页显示条数在 dataNumSelect 数组中的下标 index。例如每页显示 15 条，那么 dataNum 的值应为 '15' 在 ['5','10','15','20'] 中的下标：2 |num|1|
|total|一共多少条|num|1|
|disabled|pagination不可用，不可点击|bool|false|
|confirmBtn|渲染确认按钮dom的方法|func|() => {}|
|sizeWithCookie|分页的大小存储在cookie中,需保证其唯一性|string|''|

## 注意事项
bee-pagination@3.0.0 版本优化了分页交互，gap 默认值改为 true，size 默认值改为 'sm'

## 更新日志