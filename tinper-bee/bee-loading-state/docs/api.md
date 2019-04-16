# 状态按钮 LoadingState

## 何时使用
组件常用于在按钮上加载状态,继承Button

## 如何使用
```
import { LoadingState } from 'tinper-bee';

or

import LoadingState from 'bee-loading-state';
import 'bee-loading-state/build/LoadingState.css';

```

## 代码演示

## API

|参数|说明|类型|默认值|
|:--|:---|:--|:---|
|className|类名|string|-|
|loadingText|自定义loading时显示文字内容|string|loading|
|show|是否显示loading|boolean|false|
|showBackDrop|是否显示loading时给button显示遮罩层|boolean|true|

可以使用其他Button组件的props，来设置LoadingState组件中按钮的props。

## 注意事项

暂无

## 更新日志