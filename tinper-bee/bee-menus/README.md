# bee-menus
[![npm version](https://img.shields.io/npm/v/bee-menus.svg)](https://www.npmjs.com/package/bee-menus)
[![Build Status](https://img.shields.io/travis/tinper-bee/bee-menus/master.svg)](https://travis-ci.org/tinper-bee/bee-menus)
[![devDependency Status](https://img.shields.io/david/dev/tinper-bee/bee-menus.svg)](https://david-dm.org/tinper-bee/bee-menus#info=devDependencies)


react bee-menus component for tinper-bee

some description...

## 使用方法

```js

```

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
|style|根节点样式|Object|-|	
|keyboard|是否使用键盘操作|bool|false|	
|tabIndex|设置tabIndex|string|0|	
|Children|MenuItem组件/SubMenu组件/MenuItemGroup组件|node|-|

## Menu.Item

|参数|说明|类型|默认值|
|:---|:----|:---|:------|
|disabled|是否禁用|Boolean|false|
|key|item 的唯一标志|String|-|

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
|Children|MenuItem组件/SubMenu组件/MenuItemGroup组件|node|-|


## 已支持的键盘操作

注意：目前支持两种写法，参考示例7和示例8

|按键|功能|
|:---|:----|
|↑(上箭)|切换选项|
|↓(下箭) |切换选项|
|←(左箭) |关闭下级菜单|
|→(右箭) |打开下级菜单|
|enter | 选中|


#### 开发调试

```sh
$ git clone https://github.com/tinper-bee/bee-menus
$ cd bee-menus
$ npm install
$ npm run dev
```
