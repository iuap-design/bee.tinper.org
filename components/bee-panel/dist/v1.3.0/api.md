## Panel 展示板

带有折叠效果的展示板。

## 代码演示

### API

#### Panel

|参数|说明|类型|默认值|
|:---|:-----|:----|:------|
|collapsible|是否添加折叠|boolean|-|
|onSelect|有折叠效果时选中的效果|function|-|
|defaultExpanded|默认是否打开|boolean|false|
|expanded|折叠是否展开|object|-|
|onEnter|开始显示时的钩子函数|function|-|
|onEntering|显示时的钩子函数|function|-|
|onEntered|显示完成后的钩子函数|function|-|
|onExit|隐藏开始时的钩子函数|function|-|
|onExiting|隐藏进行时的钩子函数|function|-|
|onExited|隐藏结束时的钩子函数|function|-|
|header|头部|node|-|
|headerStyle|传递给头部的style|object|-|
|footer|尾部|node|-|
|footerStyle|传递给尾部的style|object|-|
|eventKey|当多个panel存在时,每个panel的标记|any|-|
|colors|panel的颜色|primary\accent\success\info\warning\danger\default\bordered|default|

#### PanelGroup

|参数|说明|类型|默认值|
|:---|:-----|:----|:------|
|accordion|是否是手风琴效果|boolean|false|
|activeKey|当前展开的项|any|-|
|defaultActiveKey|默认展开的项|any|-|
|onSelect|选中的钩子函数|function|-|
|className|传入的class|any|-|
|style|传入的style|pbject|-|
