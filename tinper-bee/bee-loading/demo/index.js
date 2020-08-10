import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Drawer from 'bee-drawer';
import Clipboard from 'bee-clipboard'; 
import Button from '../src';



var Demo0 = require("./demolist/Demo0");var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var Demo4 = require("./demolist/Demo4");var Demo5 = require("./demolist/Demo5");var Demo6 = require("./demolist/Demo6");var DemoArray = [{"example":<Demo0 />,"title":" 页面级加载提示","code":"/**\r\n * @title 页面级加载提示\r\n * @description 页面级加载提示推荐使用进度条组件\r\n */\r\n\r\nimport React, { Component } from 'react';\nimport { Button, ProgressBar } from 'tinper-bee';\r\n\n\n\r\n\r\n\r\nclass Demo0 extends Component {\r\n    start = () => {\r\n        ProgressBar.start();\r\n    }\r\n    set = () => {\r\n        ProgressBar.set(0.4);\r\n    }\r\n    inc = () => {\r\n        ProgressBar.inc();\r\n    }\r\n    done = () => {\r\n        ProgressBar.done();\r\n    }\r\n\trender(){\r\n        const style = {marginRight:\"10px\"};\r\n\t\treturn (\r\n\t\t\t<div>\r\n\t\t\t\t<Button style={style} onClick={this.start}>点我开始</Button>\r\n\t\t\t\t<Button style={style} onClick={this.set}>设置固定位置</Button>\r\n\t\t\t\t<Button style={style} onClick={this.inc}>点我加快</Button>\r\n\t\t\t\t<Button onClick={this.done}>点我结束</Button>\r\n\t\t\t</div>\r\n\t\t)\r\n\t}\r\n}\r\n\r\nexport default Demo0;","desc":" 页面级加载提示推荐使用进度条组件"},{"example":<Demo1 />,"title":" 基本用法","code":"/**\n *\n * @title 基本用法\n * @description 设置`loadingType`来修改Loading样式。默认是'default'。\n *\n */\n\nimport React, { Component } from 'react';\nimport { Button, Loading } from 'tinper-bee';\n\n\nclass Demo1 extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      showDefault:false,\n      showRotate: false,\n        showLine: false\n    }\n  }\n\n  handleShow = () => {\n      this.setState({\n        showDefault: true\n      })\n      setTimeout(() => {\n          this.setState({\n            showDefault: false\n          })\n      }, 3000)\n\n  }\n  handleShowRotate = () => {\n      this.setState({\n          showRotate: true\n      })\n      setTimeout(() => {\n          this.setState({\n              showRotate: false\n          })\n      }, 3000)\n\n  }\n\n    handleShowLine = () => {\n        this.setState({\n            showLine: true\n        })\n        setTimeout(() => {\n            this.setState({\n                showLine: false\n            })\n        }, 3000)\n\n    }\n\n  render() {\n    return (\n      <div>\n        <Button\n            colors=\"primary\"\n            onClick={this.handleShow}>\n          点击显示默认loading\n        </Button>\n        <Loading\n            fullScreen\n            showBackDrop={true}\n            show={this.state.showDefault}\n        />\n        <Button\n            colors=\"primary\"\n            style={{ marginLeft: 50 }}\n            onClick={this.handleShowRotate}>\n          点击显示 rotate loading\n        </Button>\n        <Loading\n            fullScreen\n            showBackDrop={true}\n            show={this.state.showRotate}\n            loadingType=\"rotate\"\n        />\n        <Button\n            colors=\"primary\"\n            style={{ marginLeft: 50 }}\n            onClick={this.handleShowLine}>\n          点击显示line loading\n        </Button>\n        <Loading\n            fullScreen\n            showBackDrop={true}\n            loadingType=\"line\"\n            show={this.state.showLine}\n        />\n      </div>\n    )\n  }\n}\n\nexport default Demo1;","desc":" 设置`loadingType`来修改Loading样式。默认是'default'。"},{"example":<Demo2 />,"title":" 容器","code":"/**\r\n *\r\n * @title 容器\r\n * @description 指定`container`属性为`this`，可显示在该组件的上面。\r\n *\r\n */\r\n\r\nimport React, { Component } from 'react';\nimport { Loading } from 'tinper-bee';\r\n\r\n\r\nclass Demo2 extends Component {\r\n    render() {\r\n        return (\r\n            <div className=\"demo2\">\r\n                <Loading container={this} show={true} >\r\n                </Loading>\r\n            </div>\r\n        )\r\n    }\r\n}\r\n\r\nexport default Demo2;","desc":" 指定`container`属性为`this`，可显示在该组件的上面。","scss_code":".demo2{\r\n  height: 100px;\r\n  width: 500px;\r\n  background: rgba(0, 0, 0, 0.05);\r\n  overflow: hidden;\r\n  font-size: 14px;\r\n  .u-loading-backdrop{\r\n    z-index:1029;\r\n  }\r\n}"},{"example":<Demo3 />,"title":" 容器","code":"/**\r\n *\r\n * @title 容器\r\n * @description 通过document对象的方法，指定`container`属性。\r\n *\r\n */\r\n\r\nimport React, { Component } from 'react';\nimport { Loading } from 'tinper-bee';\r\n\r\n\r\nclass Demo4 extends Component {\r\n    constructor(props) {\r\n        super(props);\r\n    }\r\n    getElement =()=>{\r\n        return document.querySelector('.demo4')\r\n    }\r\n    render() {\r\n        return (\r\n            <div className=\"demo4\">\r\n                <Loading container={this.getElement} show={true} />\r\n            </div>\r\n        )\r\n    }\r\n}\r\n\r\n\r\nexport default Demo4;\r\n","desc":" 通过document对象的方法，指定`container`属性。","scss_code":".demo4{\r\n  height: 100px;\r\n  width: 500px;\r\n  background: rgba(0, 0, 0, 0.05);\r\n  overflow: hidden;\r\n  font-size: 14px;\r\n  .u-loading-backdrop{\r\n    z-index:1029;\r\n  }\r\n}"},{"example":<Demo4 />,"title":" 自定义描述文案","code":"/**\r\n *\r\n * @title 自定义描述文案\r\n * @description 通过设置 `tip` 属性，来添加Loading的文字描述。\r\n *\r\n */\r\n\r\nimport React, { Component } from 'react';\nimport { Loading } from 'tinper-bee';\r\n\r\n\r\n\r\nclass Demo3 extends Component {\r\n    constructor(props) {\r\n        super(props);\r\n        this.a = null;\r\n    }\r\n\r\n    render() {\r\n        return (\r\n            <div className=\"demo3\">\r\n                <p>\r\n                    曾经有一份真诚的爱情放在我面前，我没有珍惜，等我失去的时候我才后悔莫及，人世间最痛苦的事莫过于此。\r\n                    如果上天能够给我一个再来一次的机会，我会对那个女孩子说三个字：我爱你。\r\n                    如果非要在这份爱上加上一个期限，我希望是……\r\n                    一万年\r\n                </p>\r\n                <Loading\r\n                container={this}\r\n                show={true} \r\n                tip=\"Loading...\"\r\n                />\r\n            </div>\r\n        )\r\n    }\r\n}\r\n\r\n\r\nexport default Demo3;","desc":" 通过设置 `tip` 属性，来添加Loading的文字描述。","scss_code":".demo3{\r\n  height: 130px;\r\n  width: 500px;\r\n  border: 1px solid #c1c7d0;\r\n  overflow: hidden;\r\n  font-size: 14px;\r\n  .u-loading-backdrop{\r\n    z-index:1029;\r\n  }\r\n}"},{"example":<Demo5 />,"title":" 不同尺寸的Loading","code":"/**\n *\n * @title 不同尺寸的Loading\n * @description 通过设置`size`属性，来控制loading图标的大小\n *\n */\n\nimport React, { Component } from 'react';\nimport { Loading } from 'tinper-bee';\n\n\n\nclass Demo5 extends Component {\n    constructor(props) {\n        super(props);\n        this.state = {\n            show: true\n        }\n        this.a = null;\n    }\n\n\n    render() {\n        return (\n                <div className=\"demo5\">\n                    <Loading size=\"sm\" container={this} show={this.state.show} />\n                    <Loading container={this} show={this.state.show} />\n                    <Loading size=\"lg\" container={this} show={this.state.show} />\n                </div>\n        )\n    }\n}\n\n\nexport default Demo5;","desc":" 通过设置`size`属性，来控制loading图标的大小","scss_code":".demo5{\r\n    height: 100px;\r\n    width: 500px;\r\n    overflow: hidden;\r\n    font-size: 14px;\r\n    .u-loading-backdrop{\r\n      z-index:1029;\r\n      background: rgba(255,255,255,0);\r\n    }\r\n    .u-loading.u-loading-rotate.u-loading-rotate-sm>div{\r\n        left: 20%;\r\n    }\r\n    .u-loading.u-loading-rotate>div{\r\n        left: 40%;\r\n    }\r\n    .u-loading.u-loading-rotate.u-loading-rotate-lg>div{\r\n        left: 65%;\r\n    }\r\n}"},{"example":<Demo6 />,"title":" 自定义加载图标","code":"/**\r\n *\r\n * @title 自定义加载图标\r\n * @description 如需自定义加载图标，需要同时设置 `loadingType` 属性和 `indicator` 属性。\r\n *\r\n */\r\n\r\nimport React, { Component } from 'react';\nimport { Loading } from 'tinper-bee';\r\n\r\n\r\nlet imgsrc = \"http://design.yonyoucloud.com/static/bee.tinper.org-demo/loading.gif\";\r\n\r\nclass Demo6 extends Component {\r\n    constructor(props) {\r\n        super(props);\r\n        this.state = {\r\n            show: true\r\n        }\r\n        this.a = null;\r\n    }\r\n\r\n\r\n    render() {\r\n        const beeIcon = <img src={imgsrc} style={{width:'50px'}}/>;\r\n        return (\r\n            <div className=\"demo5\">\r\n                <Loading \r\n                    container={this} \r\n                    show={this.state.show} \r\n                    loadingType=\"custom\"  //启用自定义图标\r\n                    indicator={beeIcon}  //自定义图标的内容\r\n                />\r\n            </div>\r\n        )\r\n    }\r\n}\r\n\r\n\r\nexport default Demo6;","desc":" 如需自定义加载图标，需要同时设置 `loadingType` 属性和 `indicator` 属性。"}]


class Demo extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
    }
    handleClick=()=> {
        this.setState({ open: !this.state.open })
    }
    fCloseDrawer=()=>{
        this.setState({
            open: false
        })
    }

    render () {
        const { title, example, code, desc, scss_code  } = this.props;

        const header = (
            <div>
                <p className='component-title'>{ title }</p>
                <p>{ desc }</p>
                <span className='component-code' onClick={this.handleClick}> 查看源码 <i className='uf uf-arrow-right'/> </span>
            </div>
        );
        return (
            <Col md={12} id={title.trim()} className='component-demo'>
            <Panel header={header}>
                {example}
            </Panel>
           
            <Drawer className='component-drawerc' title={title} show={this.state.open} placement='right' onClose={this.fCloseDrawer}>
            <div className='component-code-copy'> JS代码 
                <Clipboard action="copy" text={code}/>
            </div>
            <pre className="pre-js">
                <code className="hljs javascript">{ code }</code>
            </pre >
            {!!scss_code ?<div className='component-code-copy copy-css'> SCSS代码 
                <Clipboard action="copy" text={scss_code}/>
            </div>:null }
                { !!scss_code ? <pre className="pre-css">
                 <code className="hljs css">{ scss_code }</code>
                 </pre> : null }
            </Drawer>
        </Col>
    )
    }
}

class DemoGroup extends Component {
    constructor(props){
        super(props)
    }
    render () {
        return (
            <Row>
            {DemoArray.map((child,index) => {

                return (
            <Demo example= {child.example} title= {child.title} code= {child.code} scss_code= {child.scss_code} desc= {child.desc} key= {index}/>
    )

    })}
    </Row>
    )
    }
}

ReactDOM.render(<DemoGroup/>, document.getElementById('tinperBeeDemo'));
