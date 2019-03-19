## Pagination

用于内容过多，分页显示内容

## 代码演示

### API

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
|gap|按钮之间有间隔|bool|false|
|noBorder|不显示按钮边框|bool|true|
|size|按钮大小oneOf:lg,sm,''|string|''|
|showJump|是否显示跳页选择|bool|false(为了兼容老版本)|
|onDataNumSelect|选择每页多少条的回调函数|func|() => {}|
|dataNumSelect|每页多少条的下拉选择Option内容|array|['5','10','15','20']|
|dataNum|下拉选择的设定值的index|num|1|
|total|一共多少条|num|1|
|disabled|pagination不可用，不可点击|bool|false|
|confirmBtn|渲染确认按钮dom的方法|func|() => {}|
 
