# 页签 Tabs 

分隔内容上有关联但属于不同类别的数据集合。

## 何时使用

例如：切换不同tab展示不同内容时

## 如何使用

```
import { Tabs } from 'tinper-bee';

or

import Tabs from 'bee-tabs';
import 'bee-tabs/build/Tabs.css';

```

## 代码演示

## API

### Tabs

| 参数                     | 说明                                       | 类型                | 默认值     |
| :--------------------- | :--------------------------------------- | :---------------- | :------ |
| activeKey              | 设置当前激活的tabPanel的key                      | String            | -       |
| tabBarPosition         | tab头的定位，可以是['left','right','top','bottom']中选择 | String            | -       |
| defaultActiveKey       | 如果activeKey没有设置的时候，当初始化的时候设置当前激活的tabPanel的key | String            | 默认激活第一个 |
| renderTabBar           | 怎样去渲染tab的头部                              | ():React.Node     | -       |
| renderTabContent       | 怎样去渲染tab的内容区域                            | ():React.Node     | -       |
| onChange               | tabPanel改变的时候的回调函数                       | (key:string):void | -       |
| destroyInactiveTabPane | 是否在更改选项卡时销毁无效标签                          | Boolean           | false   |
| style                  | 添加到table上的style                          | String            | u-tabs  |
| onTabClick             | tab 被点击的回调                               | fun               | -       |
| className              | 在tab组件上添加className                       | String               | -       |
| extraContent           | 在导航上添加扩展元素                       |  ():React.Node                | -       |
| onPrevClick            | 当出现滚动时，点击上一个时的回调函数                       | Function               | -       |
| onNextClick            | 当出现滚动时，点击下一个时的回调函数                       | Function               | -       |
| animated               | tab切换时，是否使用动画(1.0.8版本及其以后弃用，动画全部去掉) | bool               | true       |
| tabBarStyle            | tabBar样式选择，可以是['primary','simple','upborder','editable-card']中选择| String | 'simple'|
| [v2.1.2新增]hideAdd | 是否隐藏加号图标，在 `type="editable-card"` 时有效 | boolean | false |
| [v2.1.2新增]onEdit | 新增和删除页签的回调，在 `type="editable-card"` 时有效 | (targetKey, action): void | - |

### TabPane

| 参数          | 说明                          | 类型                | 默认值   |
| ----------- | :-------------------------- | ----------------- | ----- |
| key         | 对应 activeKey                | string            | -     |
| tab         | 选项卡头显示文字                    | string\|ReactNode | -     |
| style       | 选项卡样式                       | Object            | -     |
| forceRender | 在选项卡中强制渲染内容，而不是在单击选项卡后呈现延迟。 | Boolean           | false |
| placeholder | 懒加载时显示的内容 | React:Node | - |


### SearchTabs

|参数|说明|类型|默认值|
|:---|:-----|:----|:------|
|onChange|数据改变的回调|func|-|
|value|被选中的值|string|-|

### SearchTabs.Item

|参数|说明|类型|默认值|
|:---|:-----|:----|:------|
|value|Item的标示|string|-|


## 注意事项

暂无

## 更新日志
