# 加载提示 Loading 

加载数据时显示动效。

## 何时使用


## 如何使用

```
import { Loading } from 'tinper-bee';

or

import Loading from 'bee-loading';
import 'bee-loading/build/Loading.css';

```

## 代码演示

## API

|参数|说明|类型|默认值|
|:---|:----|:----|:------|
|loadingType|Loading类型，可选值为 `default` `rotate` `line` `custom`|string|`default`|
|indicator|自定义加载图标，**注意：必须设置 loadingType='custom'**|ReactElement|-|
|size|加载大小，可选值为 `lg` `md` `sm`|string|md|
|container|渲染到的容器，通过this可以显示在该组件的上面，也可以通过function中return一个元素来显示在指定元素上面|this或者function|默认显示在body上面|
|showBackDrop|是否显示遮罩层|boolean|true|
|fullScreen|是否全屏显示，若Loading显示在 body 上，建议设置该属性|boolean|false|
|wrapperClassName|容器样式|string|''|
|[v2.0.0新增] tip|Loading的文字描述|string|''|

## 注意事项
- bee-loading v2.0.0及之后的版本，使用 `tip` 属性添加Loading的文字描述。使用方法：
```
    <Loading
    show={true} 
    tip="Loading..."
    />
```

## 更新日志