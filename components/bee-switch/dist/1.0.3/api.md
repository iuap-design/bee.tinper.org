## Switch 开关

切换开关交互来源于表示用户用于打开或关闭选项的物理开关。 

## 代码演示

### API

|参数|说明|类型|默认值|
|:---|:----|:---|:------|
|checked	|指定当前是否选中|	Boolean	|false|
|defaultChecked	|初始是否选中	|Boolean|	false |
|onChange	|变化时回调函数,自定义参照demo	|Function(checked:Boolean) |
|disabled|设置是否禁用|Boolean|false|
|checkedChildren	|选中时的内容	|React| Node |
|unCheckedChildren	|非选中时的内容	|React| Node|
|size|	大小设置，oneOf：`primary`,`success`,`info`,`dark`,`warning`|string|''|
|colors| 颜色设置，oneOf：`sm`, `lg`,''|	string	|''|
