## ProgressBar

记录进度或动态的显示进度变化。

## 代码演示

### API

|参数|说明|类型|默认值|
|:--|:---|:--|:---|
|min|最小值|number|0|
|max|最大值|number|100|
|now|显示值|number |-|
|srOnly|label 只读不显示|bool|false|
|striped|条纹样式|bool|false|
|active|激活状态|bool|false|
|colors|颜色oneOf:danger,info,warning,success,primary,dark|string|-|
|className|增加额外的class|string|-|


### 顶部进度条API


#### ProgressBar.start()
开始显示顶部进度条

#### ProgressBar.set(arg)
设置显示百分比位置，arg: 0~1

#### ProgressBar.inc()
加快进度

#### ProgressBar.end()
直接结束进度

注：具体使用可以参考例四！
