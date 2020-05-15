# Clipboard
## 代码演示
## API
|参数|说明|类型|默认值|
|:---|:---:|:--:|---:|
|action|方法，可以传`copy`或者`cut`,`cut`只支持`textarea`|`string`|`copy`|
|text|要复制的文本内容|`string`|-|
|target|要复制内容的目标元素，可传选择器，如果选择器得出多个，会取第一个|`string`/dom选择器|-|
|success|复制成功之后的回调函数|`function`|-|
|error|复制失败之后的回调函数|`function`|-|
|locale|设置默认文字语言|object|中文|