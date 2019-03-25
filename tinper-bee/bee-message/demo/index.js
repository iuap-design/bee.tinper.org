import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Drawer from 'bee-drawer';
import Clipboard from 'bee-clipboard'; 
import Button from '../src';



var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var DemoArray = [{"example":<Demo1 />,"title":" 不同颜色的消息提醒","code":"/**\r\n *\r\n * @title 不同颜色的消息提醒\r\n * @description 提供10种颜色，包括黑色白色及四个语义色及四个浅语义色\r\n *\r\n */\r\n\r\n\n\nimport React, { Component } from 'react';\r\n\nimport { Message, Button,  Panel ,  Con, Row, Col  } from 'tinper-bee';\r\n\r\n const info = function () {\r\n   let aa = Message.create({content: 'This is a Info message', color: 'info', duration: null});\r\n\r\n };\r\n const danger = function () {\r\n   Message.create({content: 'This is a danger message', color: 'danger'});\r\n };\r\n const success = function () {\r\n   Message.create({content: 'This is a success message', color: 'success'});\r\n };\r\n const warning = function () {\r\n   Message.create({content: 'This is a warning message', color: 'warning'});\r\n };\r\n const loading = function () {\r\n   Message.create({content: 'This is a dark message', color: 'dark'});\r\n };\r\n const light = function () {\r\n   Message.create({content: 'This is a light message', color: 'light'});\r\n };\r\nclass Demo1 extends Component {\r\n    constructor(props){\r\n        super(props);\r\n    }\r\n    render () {\r\n        return (\r\n            <div className=\"paddingDemo\">\r\n            <Button\r\n                colors=\"info\"\r\n                onClick={info}>\r\n                info\r\n            </Button>\r\n            <Button\r\n                colors=\"danger\"\r\n                onClick={danger}>\r\n                danger\r\n            </Button>\r\n            <Button\r\n                colors=\"warning\"\r\n                onClick={warning}>\r\n                warning\r\n            </Button>\r\n            <Button\r\n                colors=\"success\"\r\n                onClick={success}>\r\n                success\r\n            </Button>\r\n            <Button\r\n                colors=\"primary\"\r\n                onClick={loading}>\r\n                dark\r\n            </Button>\r\n            <Button\r\n                shape=\"border\"\r\n                onClick={light}>\r\n                light\r\n            </Button>\r\n            </div>\r\n        )\r\n    }\r\n}\r\n\r\n\r\n\r\n","desc":" 提供10种颜色，包括黑色白色及四个语义色及四个浅语义色","scss_code":".paddingDemo{\r\n  button{\r\n    margin: 10px;\r\n  }\r\n}"},{"example":<Demo2 />,"title":" 不同显示位置的消息提醒","code":"/**\r\n *\r\n * @title 不同显示位置的消息提醒\r\n * @description 一个页面的message只能设置一中显示位置，提供六种位置选择，查看每种示例，需每次刷新\r\n *\r\n */\r\n\r\n\n\nimport React, { Component } from 'react';\r\n\nimport { Message, Button,  Panel ,  Con, Row, Col  } from 'tinper-bee';\r\n\r\n const top = function () {\r\n    Message.destroy();\r\n    Message.create({content: 'This is a Info message', position: 'top'});\r\n };\r\n const bottom = function () {\r\n    Message.destroy();\r\n    Message.create({content: 'This is a Info message', position: 'bottom'});\r\n };\r\n const topRight = function () {\r\n    Message.destroy();\r\n    Message.create({content: 'This is a Info message', position: 'topRight'});\r\n };\r\n const topLeft = function () {\r\n    Message.destroy();\r\n    Message.create({content: 'This is a Info message', position: 'topLeft'});\r\n };\r\n const bottomRight = function () {\r\n    Message.destroy();\r\n    Message.create({content: 'This is a Info message', position: 'bottomRight'});\r\n };\r\n const bottomLeft = function () {\r\n    Message.destroy();\r\n    Message.create({content: 'This is a Info message', position: 'bottomLeft'});\r\n };\r\nclass Demo2 extends Component {\r\n    constructor(props){\r\n        super(props);\r\n    }\r\n    render () {\r\n        return (\r\n            <div className=\"paddingDemo\">\r\n            <Button\r\n                colors=\"info\"\r\n                onClick={top}>\r\n                top\r\n            </Button>\r\n            <Button\r\n                colors=\"info\"\r\n                onClick={bottom}>\r\n                bottom\r\n            </Button>\r\n            <Button\r\n                colors=\"info\"\r\n                onClick={topRight}>\r\n                topRight\r\n            </Button>\r\n            <Button\r\n                colors=\"info\"\r\n                onClick={topLeft}>\r\n                topLeft\r\n            </Button>\r\n            <Button\r\n                colors=\"info\"\r\n                onClick={bottomRight}>\r\n                bottomRight\r\n            </Button>\r\n            <Button\r\n                colors=\"info\"\r\n                onClick={bottomLeft}>\r\n                bottomLeft\r\n            </Button>\r\n            </div>\r\n        )\r\n    }\r\n}\r\n\r\n\r\n","desc":" 一个页面的message只能设置一中显示位置，提供六种位置选择，查看每种示例，需每次刷新","scss_code":".paddingDemo{\r\n  button{\r\n    margin: 10px;\r\n  }\r\n}"}]


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
