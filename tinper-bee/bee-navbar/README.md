# bee-navbar
[![npm version](https://img.shields.io/npm/v/bee-navbar.svg)](https://www.npmjs.com/package/bee-navbar)
[![Build Status](https://img.shields.io/travis/tinper-bee/bee-navbar/master.svg)](https://travis-ci.org/tinper-bee/bee-navbar)
[![devDependency Status](https://img.shields.io/david/dev/tinper-bee/bee-navbar.svg)](https://david-dm.org/tinper-bee/bee-navbar#info=devDependencies)


帮助用户依赖导航在各个页面中进行跳转。顶部导航提供全局性的类目和功能.


## 使用

使用单独的bee-navbar包
#### 组件引入
先进行下载bee-navbar包
```
npm install --save bee-navbar
```
组件调用
```js
import Navbar from 'bee-navbar';
import FormControl from 'bee-form-control';

const NavItem = Navbar.NavItem;
const Header = Navbar.Header;
const Brand = Navbar.Brand;
const Collapse = Navbar.Collapse;
const Toggle = Navbar.Toggle;
const Nav = Navbar.Nav;


class Demo1 extends Component {
	constructor(props, context) {
	    super(props, context);
	    this.state = {
	    	expanded : false
	    }
	}
	onToggle(value) {
		this.setState({expanded:value});
	}
	render(){
		return( 
			<div>
				<Navbar inverse expanded={this.state.expanded} onToggle={this.onToggle.bind(this)}>
				    <Header>
					    <Brand>
					        	<a href="#">React-Bootstrap</a>
					    </Brand>
					    <Toggle />
				    </Header>

				    <Collapse>
					    <Nav>
						    <NavItem eventKey={1} href="#">Link</NavItem>
						    <NavItem eventKey={2} href="#">Link</NavItem>
						    
					    </Nav>
					    <Navbar.Form pullRight>
					          <FormControl type="text" placeholder="Search" />
					    </Navbar.Form>
				    </Collapse>
				</Navbar>

			</div>
		)
	}
}
React.render(Demo1, document.getElementById('app');

```
#### 样式引入

- 可以使用link引入dist目录下bee-Navbar.css
```
<link rel="stylesheet" href="./node_modules/build/bee-navbar.css">
```
- 可以在js中import样式
```js
import "./node_modules/src/Navbar.scss"
//或是
import "./node_modules/build/bee-navbar.css"
```




## API

## Navbar

|参数|说明|类型|默认值|
|---|----|---|------|
|componentClass|自定义组件元素|element type|nav|
|expanded|设置导航条是否展开，针对小屏幕|bool|false|
|fixedBottom|设置固定在底部|bool|false|
|fixedTop|设置固定在顶部|bool|false|
|inverse|黑色背景|bool|false|
|onToggle|切换导航条显示隐藏 针对小屏幕|func|-|

## Navbar.Toggle

|参数|说明|类型|默认值|
|---|----|---|------|
|children|切换的文字或图标|element type|如例子|
|onClick|自定义方法|func|-|


#### 开发调试

```sh
$ git clone https://github.com/tinper-bee/bee-navbar
$ cd bee-navbar
$ npm install
$ npm run dev
```
