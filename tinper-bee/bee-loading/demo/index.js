import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Drawer from 'bee-drawer';
import Clipboard from 'bee-clipboard'; 
import Button from '../src';



var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var Demo4 = require("./demolist/Demo4");var DemoArray = [{"example":<Demo1 />,"title":" 基础Loading","code":"/**\n *\n * @title 基础Loading\n * @description 设置`loadingType`来修改Loading样式。默认是'rotate'。\n *\n */\n\nimport React, { Component } from 'react';\nimport { Loading, Button } from 'tinper-bee';\n\nclass Demo1 extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      showRotate: false,\n        showLine: false\n    }\n  }\n\n  handleShow = () => {\n      this.setState({\n          showRotate: true\n      })\n      setTimeout(() => {\n          this.setState({\n              showRotate: false\n          })\n      }, 3000)\n\n  }\n\n    handleShowLine = () => {\n        this.setState({\n            showLine: true\n        })\n        setTimeout(() => {\n            this.setState({\n                showLine: false\n            })\n        }, 3000)\n\n    }\n\n  render() {\n    return (\n      <div>\n        <Button\n            colors=\"primary\"\n            onClick={this.handleShow}>\n          点击显示默认loading\n        </Button>\n        <Loading\n            fullScreen\n            showBackDrop={true}\n            show={this.state.showRotate}\n        />\n        <Button\n            colors=\"primary\"\n            style={{ marginLeft: 50 }}\n            onClick={this.handleShowLine}>\n          点击显示line loading\n        </Button>\n        <Loading\n            showBackDrop={true}\n            loadingType=\"line\"\n            show={this.state.showLine}\n        />\n      </div>\n    )\n  }\n}\n\n","desc":" 设置`loadingType`来修改Loading样式。默认是'rotate'。"},{"example":<Demo2 />,"title":" 将Loading渲染到容器中","code":"/**\n *\n * @title 将Loading渲染到容器中\n * @description 通过设置`container`属性，来控制loading渲染位置\n *\n */\n\nimport React, { Component } from 'react';\nimport { Loading } from 'tinper-bee';\n\n\nclass Demo2 extends Component {\n    constructor(props) {\n        super(props);\n        this.state = {\n            show: true\n        }\n        this.a = null;\n    }\n\n\n    render() {\n        return (\n                <div className=\"demo2\">\n                    <p>\n                        曾经有一份真诚的爱情放在我面前，我没有珍惜，等我失去的时候我才后悔莫及，人世间最痛苦的事莫过于此。\n                        如果上天能够给我一个再来一次的机会，我会对那个女孩子说三个字：我爱你。\n                        如果非要在这份爱上加上一个期限，我希望是……\n                        一万年\n                    </p>\n                    <Loading container={this} show={this.state.show} />\n                </div>\n        )\n    }\n}\n\n\n","desc":" 通过设置`container`属性，来控制loading渲染位置","scss_code":".demo2{\n  position: relative;\n  height: 100px;\n  width: 500px;\n  border: 1px solid #0084ff;\n  overflow: hidden;\n  font-size: 14px;\n  .u-loading-backdrop{\n    z-index:1029;\n  }\n}"},{"example":<Demo3 />,"title":" 添加描述","code":"/**\n *\n * @title 添加描述\n * @description 通过添加children，来添加Loading的文字描述\n *\n */\n\nimport React, { Component } from 'react';\nimport { Loading } from 'tinper-bee';\n\n\nclass Demo3 extends Component {\n    constructor(props) {\n        super(props);\n        this.state = {\n            show: true\n        }\n        this.a = null;\n    }\n\n    render() {\n        return (\n            <div className=\"demo3\">\n                <p>\n                    曾经有一份真诚的爱情放在我面前，我没有珍惜，等我失去的时候我才后悔莫及，人世间最痛苦的事莫过于此。\n                    如果上天能够给我一个再来一次的机会，我会对那个女孩子说三个字：我爱你。\n                    如果非要在这份爱上加上一个期限，我希望是……\n                    一万年\n                </p>\n                <Loading\n                    describe={true}\n                    container={this}\n                    show={this.state.show} >\n                    加载中\n                </Loading>\n            </div>\n        )\n    }\n}\n\n\n","desc":" 通过添加children，来添加Loading的文字描述","scss_code":".demo3{\n  position: relative;\n  height: 100px;\n  width: 500px;\n  border: 1px solid #0084ff;\n  overflow: hidden;\n  font-size: 14px;\n  .u-loading-backdrop{\n    z-index:1029;\n  }\n}"},{"example":<Demo4 />,"title":" 将Loading渲染到容器中","code":"/**\n *\n * @title 将Loading渲染到容器中\n * @description 通过设置`container`属性，通过传入function的方式，来控制loading渲染位置\n *\n */\n\nimport React, { Component } from 'react';\nimport { Loading } from 'tinper-bee';\n\n\nclass Demo4 extends Component {\n    constructor(props) {\n        super(props);\n        this.state = {\n            show: true\n        }\n        this.a = null;\n    }\n    getElement =()=>{\n        return document.getElementById('demo4')\n    }\n\n\n    render() {\n        return (\n                <div className=\"demo4\">\n                    <p>\n                        曾经有一份真诚的爱情放在我面前，我没有珍惜，等我失去的时候我才后悔莫及，人世间最痛苦的事莫过于此。\n                        如果上天能够给我一个再来一次的机会，我会对那个女孩子说三个字：我爱你。\n                        如果非要在这份爱上加上一个期限，我希望是……\n                        一万年\n                    </p>\n                    <p id=\"demo4\">\n                    \n                        曾经有一份真诚的爱情放在我面前，我没有珍惜，等我失去的时候我才后悔莫及，人世间最痛苦的事莫过于此。\n                        如果上天能够给我一个再来一次的机会，我会对那个女孩子说三个字：我爱你。\n                        如果非要在这份爱上加上一个期限，我希望是……\n                        一万年\n                    </p>\n                    <Loading container={this.getElement} show={this.state.show} />\n                </div>\n        )\n    }\n}\n\n\n\n","desc":" 通过设置`container`属性，通过传入function的方式，来控制loading渲染位置","scss_code":".demo4{\n  position: relative;\n  height: 100px;\n  width: 500px;\n  border: 1px solid #0084ff;\n  overflow: hidden;\n  font-size: 14px;\n  .u-loading-backdrop{\n    z-index:1029;\n  }\n}"}]


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
