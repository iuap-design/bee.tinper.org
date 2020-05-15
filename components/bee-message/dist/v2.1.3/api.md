# 消息提醒 Message

全局展示操作反馈信息。

## 何时使用

例如：成功、失败、警告等提示

## 如何使用

```
import { Message } from 'tinper-bee';

or

import Message from 'bee-message';
import 'bee-message/build/Message.css';

```

## 代码演示

## API

### 函数api

```
//设置默认设置
Message.config({
    top: 20,  //顶上显示时距顶部的位置
    bottom: 20, //左下右下显示时距底部的位置
    defaultBottom: 20, //底部显示时距底部的位置
    duration: 20, //显示持续时间
    width: 500 //左下左上右下右上显示时的宽度
    });

//销毁所有消息
Message.destroy();

//创建消息
Messsage.create({});

```

### message函数参数

|参数|说明|类型|默认值|
|:---|:-----|:----|:------|
|content|内容|string/number|-|
|duration|显示时间|number|3|
|color|颜色|`dark / light / success / danger / warning / info / successlight / dangerlight / warninglight / infolight`|`light`|
|onClose|关闭时的钩子函数|function|-|
|position|弹出框显示的位置|`top / bottom / topRight / topLeft / bottomRight / bottomLeft`|`top`|
|style|样式|object|{}|
|keyboard|esc触发关闭|boolean|true|
|onEscapeKeyUp|响应ESC键时的钩子函数|function|-|
|showIcon|是否显示icon|boolean|true|
|icon|自定义显示icon图标[参考这里](http://bee.tinper.org/tinper-bee/bee-icon)|string|-|

### 已支持的键盘操作

|按键|功能|
|:---|:----|
|esc |关闭message|

## 注意事项

暂无

## 更新日志
