## Menus

菜单对于网站来说很重要，它帮助用户快速地从一个站点跳转到另一个站点。侧导航提供网站的多层次结构。

## 代码演示

### API


## Menu

|参数|说明|类型|默认值|
|:---|:----|:---|:------|
|className|自定义类名|string|-|
|theme|主题颜色|String: light dark|-|
|mode|菜单类型，现在支持垂直、水平、和内嵌模式三种	|String: vertical horizontal inline|vertical|
|selectedKeys|当前选中的菜单项 key 数组|Array|-|	
|defaultSelectedKeys|初始选中的菜单项 key 数组|Array|-|	
|openKeys|当前展开的 SubMenu 菜单项 key 数组|Array|-|
|defaultOpenKeys|初始展开的 SubMenu 菜单项 key 数组|-|
|onOpenChange|SubMenu 展开/关闭的回调	Function(openKeys: string[])|noop|
|onSelect|被选中时调|	Function({ item, key, selectedKeys })|-|
|onDeselect|取消选中时调用，仅在 multiple 生效|	Function({ item, key, selectedKeys })|-|
|onClick|点击 menuitem 调用此函数，参数为 {item, key, keyPath}|	function|-|
|style|根节点样式	|Object|-|	

## Menu.Item

|参数|说明|类型|默认值|
|:---|:----|:---|:------|
|disabled|是否禁用|Boolean|false|
|key|item 的唯一标志|String|-|
|attribute|添加到dom上的属性|Object|-|

## Menu.SubMenu

|参数|说明|类型|默认值|
|:---|:----|:---|:------|
|disabled|是否禁用|Boolean|false|
|key|唯一标志|String|	
|title|子菜单项值	|String or React.Element|
|children|子菜单的菜单项|(MenuItem or SubMenu)[]|
|onTitleClick|点击子菜单标题|Function({ eventKey, domEvent })|
|disabled|是否禁用|Boolean|false|
|key|item 的唯一标志|String|-|


