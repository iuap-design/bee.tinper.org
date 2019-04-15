import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Drawer from 'bee-drawer';
import Clipboard from 'bee-clipboard'; 
import Button from '../src';



var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var Demo4 = require("./demolist/Demo4");var Demo5 = require("./demolist/Demo5");var DemoArray = [{"example":<Demo1 />,"title":" 不同方向的气泡确认框","code":"/**\r\n *\r\n * @title 不同方向的气泡确认框\r\n *\r\n */\r\n\r\nimport React, {Component} from 'react';\r\n\nimport { Popconfirm, Button } from 'tinper-bee';\r\n\r\nclass Demo1 extends Component {\r\n    constructor(props) {\r\n        super(props);\r\n    }\r\n\r\n    render() {\r\n        const content = '您喜欢使用tinper-bee组件库吗？';\r\n        return (\r\n            <div className=\"demoPadding\">\r\n                <Popconfirm trigger=\"click\" placement=\"right\" content={content}>\r\n                    <Button colors=\"primary\">向右!</Button>\r\n                </Popconfirm>\r\n                <Popconfirm trigger=\"click\" placement=\"top\" content={content}>\r\n                    <Button colors=\"primary\">向上!</Button>\r\n                </Popconfirm>\r\n                <Popconfirm trigger=\"click\" placement=\"bottom\" content={content}>\r\n                    <Button colors=\"primary\">向下!</Button>\r\n                </Popconfirm>\r\n                <Popconfirm trigger=\"click\" placement=\"left\" content={content} animation={false}>\r\n                    <Button colors=\"primary\">向左!</Button>\r\n                </Popconfirm>\r\n            </div>\r\n        )\r\n    }\r\n}\r\n\r\n\r\n","desc":"","scss_code":".demoPadding{\r\n  button{\r\n    margin: auto 10px;\r\n  }\r\n}"},{"example":<Demo2 />,"title":" 不同颜色气泡确认框","code":"/**\r\n *\r\n * @title 不同颜色气泡确认框\r\n * @description 气泡确认框提供黑和白两种颜色，并且支持是否能被全局点击事件关闭。\r\n *\r\n */\r\n\r\nimport React, { Component } from 'react';\r\n\nimport { Popconfirm, Button } from 'tinper-bee';\r\n\r\nclass Demo2 extends Component {\r\n\r\n    render () {\r\n        const content = '您喜欢使用tinper-bee组件库吗？';\r\n        return (\r\n            <div className=\"demoPadding\">\r\n            <Popconfirm trigger=\"click\" placement=\"bottom\" content={content} color='dark'>\r\n              <Button colors=\"primary\">黑色</Button>\r\n            </Popconfirm>\r\n            <Popconfirm trigger=\"click\" rootClose placement=\"bottom\" content={content}>\r\n              <Button colors=\"primary\">点击其他关闭</Button>\r\n            </Popconfirm>\r\n            </div>\r\n        )\r\n    }\r\n}\r\n\r\n\r\n","desc":" 气泡确认框提供黑和白两种颜色，并且支持是否能被全局点击事件关闭。","scss_code":".demoPadding{\r\n  button{\r\n    margin: auto 10px;\r\n  }\r\n}"},{"example":<Demo3 />,"title":" 气泡确认框修改显示语言","code":"/**\r\n *\r\n * @title 气泡确认框修改显示语言\r\n *\r\n */\r\nimport React, { Component } from 'react';\r\n\nimport { Popconfirm, Button } from 'tinper-bee';\r\n\r\nclass Demo3 extends Component {\r\n    constructor(props){\r\n        super(props);\r\n    }\r\n\r\n    render () {\r\n        const content = 'Do you like tinper-bee UI Components Library？';\r\n        let locale = {\r\n            lang: 'en',\r\n            ok: 'OK',\r\n            cancel: 'Cancel'\r\n        };\r\n        return (\r\n            <div className=\"demoPadding\">\r\n                <Popconfirm trigger=\"click\" placement=\"right\" content={content} locale={locale}>\r\n                    <Button colors=\"primary\">Click me</Button>\r\n                </Popconfirm>\r\n            </div>\r\n        )\r\n    }\r\n}\r\n\r\n\r\n","desc":"","scss_code":".demoPadding{\r\n  button{\r\n    margin: auto 10px;\r\n  }\r\n}"},{"example":<Demo4 />,"title":" 控制显示和隐藏","code":"/**\r\n *\r\n * @title 控制显示和隐藏\r\n *\r\n */\r\n\r\nimport React, {Component} from 'react';\r\n\nimport { Popconfirm, Button } from 'tinper-bee';\r\n\r\nclass Demo4 extends Component {\r\n    constructor(props) {\r\n        super(props);\r\n        this.state = {\r\n            show: false\r\n        }\r\n    }\r\n\r\n    handleShow = () => {\r\n        this.setState({\r\n            show: !this.state.show\r\n        })\r\n    }\r\n\r\n    cancel = () => {\r\n        this.setState({\r\n            show: false\r\n        })\r\n    }\r\n\r\n    close = () => {\r\n        this.setState({\r\n            show: false\r\n        })\r\n    }\r\n\r\n    onRootClose = () => {\r\n        this.setState({\r\n            show: false\r\n        })\r\n    }\r\n\r\n    render() {\r\n        let {show} = this.state;\r\n        const content = '您喜欢使用tinper-bee组件库吗？';\r\n        return (\r\n            <div className=\"demoPadding\">\r\n                <div className=\"demoPadding-btn-box\">\r\n                    <Button colors=\"primary\" onClick={this.handleShow}>{show ? \"隐藏popConfirm\" : \"显示popConfirm\"}</Button>\r\n                </div>\r\n                <Popconfirm \r\n                    trigger=\"click\" \r\n                    placement=\"right\" \r\n                    content={content}\r\n                    show={show}\r\n                    onClick={() => console.log(1234)}\r\n                    onCancel={this.cancel}\r\n                    onClose={this.close}\r\n                    rootClose\r\n                    onRootClose={this.onRootClose}\r\n                >\r\n                    <Button colors=\"primary\">向右!</Button>\r\n                </Popconfirm>\r\n            </div>\r\n        )\r\n    }\r\n}\r\n\r\n\r\n","desc":"","scss_code":".demoPadding{\r\n  &-btn-box{\r\n    margin: 10px 0;\r\n  }\r\n  button{\r\n    margin: auto 10px;\r\n  }\r\n}"},{"example":<Demo5 />,"title":" 传入自定义“确认”和“取消”按钮","code":"/**\r\n *\r\n * @title 传入自定义“确认”和“取消”按钮\r\n *\r\n */\r\n\r\nimport React, { Component } from \"react\";\r\n\nimport { Popconfirm, Button } from 'tinper-bee';\r\n\r\n\r\nfunction CloseBtn() {\r\n  return (\r\n    <Button colors=\"info\" size=\"sm\">\r\n      确定\r\n    </Button>\r\n  );\r\n}\r\nclass Demo5 extends Component {\r\n  cancel = () => {\r\n    console.log(\"cancel\");\r\n  };\r\n\r\n  close = () => {\r\n    console.log(\"close\");\r\n  };\r\n\r\n  render() {\r\n    const content = \"您喜欢使用tinper-bee组件库吗？\";\r\n    return (\r\n      <div className=\"demoPadding\">\r\n        <Popconfirm\r\n          trigger=\"click\"\r\n          placement=\"right\"\r\n          content={content}\r\n          onCancel={this.cancel}\r\n          onClose={this.close}\r\n          cancel_btn={\r\n            <Button shape=\"border\" colors=\"info\" size=\"sm\">\r\n              取消\r\n            </Button>\r\n          }\r\n          close_btn={CloseBtn()}\r\n        >\r\n          <Button colors=\"primary\">Popconfirm</Button>\r\n        </Popconfirm>\r\n      </div>\r\n    );\r\n  }\r\n}\r\n\r\n\r\n","desc":""}]


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
