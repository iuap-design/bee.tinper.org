# bee-loading

[![npm version](https://img.shields.io/npm/v/bee-loading.svg)](https://www.npmjs.com/package/bee-loading)
[![Build Status](https://img.shields.io/travis/tinper-bee/bee-loading/master.svg)](https://travis-ci.org/tinper-bee/bee-loading)
[![Coverage Status](https://coveralls.io/repos/github/tinper-bee/bee-loading/badge.svg?branch=master)](https://coveralls.io/github/tinper-bee/bee-loading?branch=master)


## Browser Support

|![IE](https://raw.github.com/alrra/browser-logos/master/internet-explorer/internet-explorer_48x48.png) | ![Chrome](https://raw.github.com/alrra/browser-logos/master/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/firefox/firefox_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/opera/opera_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/safari/safari_48x48.png)|
| --- | --- | --- | --- | --- |
| IE 11+ ✔ | Chrome 31.0+ ✔ |


react bee-loading component for tinper-bee

some description...

## 使用方法

### 使用单独的loading包
#### 组件引入
先进行下载bee-loading包

```
npm install --save bee-loading
```
组件调用

```js
import Loading from 'bee-loading';


class LoadingDemo extends Component{
constructor(props) {
    super(props);
    this.state = {
      showRotate: false
    }
  }

  handleShow = () => {
        this.setState({
            showRotate: true
        })
        setTimeout(() => {
            this.setState({
                showRotate: false
            })
        }, 5000)

    }

    render() {
     return (
     <div>
     <Button
         colors="primary"
         onClick={this.handleShow}>
         点击显示默认loading
     </Button>
     <Loading
         showBackDrop={true}
         show={this.state.showRotate}
     />
     </div>

     )
    }

}

```

#### 样式引入
- 可以使用link引入build目录下button.css
```
<link rel="stylesheet" href="./node_modules/bee-loading/build/Loading.css">
```
- 可以在js中import样式
```js
import "./node_modules/bee-loading/src/Loading.scss"
//或是
import "./node_modules/bee-loading/build/Loding.css"
```

### API

##### Loading Props

|参数|说明|类型|默认值|
|:---|:----|:----|:------|
|loadingType|类型(`rotate` `line` `custom`)|string|rotate|
|indicator|加载图标，在 `loadingType` 值为 `custom` 时有效|ReactElement|-|
|size|加载大小(`lg` `md` `sm`)|string|md|
|color|颜色(`primary` `success``warning`)|string|''|
|container|渲染到的容器|node|body|
|showBackDrop|是否显示遮罩|boolean|true|
|fullScreen|是否全屏显示，或者只传入fullScreen即可|boolean|false|
|wrapperClassName|容器样式|string|''|



#### 开发调试

```sh
$ npm install -g bee-tools
$ git clone https://github.com/tinper-bee/bee-loading
$ cd bee-loading
$ npm install
$ npm run dev
```
