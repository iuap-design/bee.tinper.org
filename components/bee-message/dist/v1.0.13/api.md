## Message 消息

全局展示操作反馈信息。

## 代码演示

### API

#### 函数api

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

#### message函数参数

|参数|说明|类型|默认值|
|:---|:-----|:----|:------|
|content|内容|string/number|-|
|duration|显示时间|number|3|
|color|颜色|dark/light/success/danger/warning/info/successlight/dangerlight/warninglight/infolight|'dark'|
|onClose|关闭时的钩子函数|function|-|
|position|位置|top/bottom/topRight/topLeft/bottomRight/bottomLeft|top|
|style|样式|object|{}|
|keyboard|esc触发关闭|boolean|true|
|onEscapeKeyUp|响应ESC键时的钩子函数|function|-|
|showIcon|是否显示icon|boolean|false|
