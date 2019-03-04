# Form
## 代码演示
## API

### Form 参数说明
|参数|说明|类型|默认值|
|:---|:-----|:----|:------|
|submitCallBack|表单验证回调函数，参数两个，第一个为校验是否成功`true/false` 第二个为表单内元素数组`[{name: "", verify: false, value: ""}]`|function|-|
|submitAreaClassName|表单提交区域class|string|-|
|submitBtnClassName|表单提交按钮class|string|-|
|beforeSubmitBtn|表单提交按钮之前的dom|node|-|
|afterSubmitBtn|表单提交按钮之后的dom|node|-|
|useRow|是否使用栅格布局,如使用：需要再`FormItem`传格子数和label的格子数|bool|-|
|showSubmit|是否显示提交区域|bool|true|
|checkFormNow|是否立即校验，校验完成后将checkFormNow置为false，否则在form渲染的时候会直接校验|bool|false|

### FormItem 参数说明
|参数|说明|类型|默认值|
|:---|:-----|:----|:------|
|valuePropsName|子元素取值的props|string|defaultValue|
|isRequire|是否必填|bool|false|
|errorMessage|错误提示信息，可传数组，和正则数组一一对应|node/array|"校验失败"|
|htmlType|数值类型，目前支持 `email/tel/IDCard/chinese/password` 类型|string|-|
|reg|校验正则，注：设置 `htmlType` 后 `reg` 无效；当不设置`isRequire`的时候，如果有值，会使用reg校验，如果值为空，则不校验；可传数组，和错误信息数组一一对应|regExp/array|-|
|method|何时校验 change/blur|string|-|
|blur|失去焦点的回调函数|function|-|
|change|改变值的回调函数|function|-|
|check|验证的回调函数，参数两个，第一个为校验是否成功`true/false` 第二个为验证结果对象`{name: "", verify: false, value: ""}`|function|-|
|inline|是否行内显示，须有`Form`才有效，单个`FormItem`无效|bool|false|
|labelName|输入框label标签内容|node|-|
|showMast|是否显示必输项的*|bool|false|
|asyncCheck|返回`true`则校验成功，`false`或无返回值则校验失败。参数为{name:xxx,value:xxx},如果使用asyncCheck，则其它校验相关`props`不生效|function|-|
|labelClassName|输入框`label`标签的class|string|-|
|mesClassName|校验错误信息的class|string|-|
|inputBefore|input前缀|node|-|
|inputAfter|input后缀|node|-|
|xs|移动设备显示列数(<768px)|number|-|
|sm|小屏幕桌面设备显示列数(≥768px)|number|-|
|md|中等屏幕设备显示列数(≥992px)|number|-|
|lg|大屏幕设备显示列数(≥1200px)|number|-|
|xsPull|移动屏幕设备到右边距列数|number|-|
|smPull|小屏幕设备到右边距列数|number|-|
|mdPull|中等屏幕设备到右边距列数|number|-|
|lgPull|大屏幕设备到右边距列数|number|-|
|xsPush|移动屏幕设备到左边距列数|number|-|
|smPush|小屏幕设备到左边距列数|number|-|
|mdPush|中等屏幕设备到左边距列数|number|-|
|lgPush|大屏幕设备到左边距列数|number|-|
|xsOffset|移动设备偏移列数|number|-|
|smOffset|小屏幕设备偏移列数|number|-|
|mdOffset|中等屏幕设备偏移列数|number|-|
|lgOffset|大屏幕设备偏移列数|number|-|
|labelXs|label移动设备显示列数(<768px)|number|-|
|labelSm|label小屏幕桌面设备显示列数(≥768px)|number|-|
|labelMd|label中等屏幕设备显示列数(≥992px)|number|-|
|labelLg|label大屏幕设备显示列数(≥1200px)|number|-|
|labelXsPull|label移动屏幕设备到右边距列数|number|-|
|labelSmPull|label小屏幕设备到右边距列数|number|-|
|labelMdPull|label中等屏幕设备到右边距列数|number|-|
|labelLgPull|label大屏幕设备到右边距列数|number|-|
|labelXsPush|label移动屏幕设备到左边距列数|number|-|
|labelSmPush|label小屏幕设备到左边距列数|number|-|
|labelMdPush|label中等屏幕设备到左边距列数|number|-|
|labelLgPush|label大屏幕设备到左边距列数|number|-|
|labelXsOffset|label移动设备偏移列数|number|-|
|labelSmOffset|label小屏幕设备偏移列数|number|-|
|labelMdOffset|label中等屏幕设备偏移列数|number|-|
|labelLgOffset|label大屏幕设备偏移列数|number|-|




### 其它说明
- `Form`的子元素中如果有`Button`并且此`Button`的`isSubmit=true`，则可以作为提交按钮
- `Form`整体校验时，会触发`FormItem`的校验
- `FormItem`的子元素，`name`必须存在且不能重复
- `FormItem`子元素只能存在一个