# 警告提示 Alert

页面内部针对用户行为操作的区域性提醒。根据信息类型不同提供相应的以背景颜色区分的alert。若需背景颜色加深需加`dark`类。

## 何时使用

需要区域性提醒

## 如何使用

```
import { Alert } from 'tinper-bee';

or

import Alert from 'bee-alert';
import 'bee-alert/build/Alert.css';

```

## 代码演示

### API

|参数|说明|类型|默认值|
|:--|:---|:--|:---|
|className|类名|string|-|
|colors|oneOf:`info` `news` `success` `danger` `warning`|string|`warning`|
|controlLabel|关闭按钮文字|string|-|
|onDismiss|关闭alert触发的方法|func|-|
|dark|显示颜色深度|bool|false|


## 注意事项

暂无

## 更新日志
