import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Drawer from 'bee-drawer';
import Clipboard from 'bee-clipboard'; 
import Button from '../src';



var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var DemoArray = [{"example":<Demo1 />,"title":" 不同颜色的消息提醒","code":"/**\n *\n * @title 不同颜色的消息提醒\n * @description 提供10种颜色，包括黑色白色及四个语义色及四个浅语义色\n *\n */\n\nimport React, { Component } from 'react';\nimport { Message, Button,  Panel ,  Con, Row, Col  } from 'tinper-bee';\n\n const info = function () {\n   let aa = Message.create({content: 'This is a Info message', color: 'info', duration: null});\n\n };\n const danger = function () {\n   Message.create({content: 'This is a danger message', color: 'danger'});\n };\n const success = function () {\n   Message.create({content: 'This is a success message', color: 'success'});\n };\n const warning = function () {\n   Message.create({content: 'This is a warning message', color: 'warning'});\n };\n const loading = function () {\n   Message.create({content: 'This is a dark message', color: 'dark'});\n };\n const light = function () {\n   Message.create({content: 'This is a light message', color: 'light'});\n };\nclass Demo1 extends Component {\n    constructor(props){\n        super(props);\n    }\n    render () {\n        return (\n            <div className=\"paddingDemo\">\n            <Button\n                colors=\"info\"\n                onClick={info}>\n                info\n            </Button>\n            <Button\n                colors=\"danger\"\n                onClick={danger}>\n                danger\n            </Button>\n            <Button\n                colors=\"warning\"\n                onClick={warning}>\n                warning\n            </Button>\n            <Button\n                colors=\"success\"\n                onClick={success}>\n                success\n            </Button>\n            <Button\n                colors=\"primary\"\n                onClick={loading}>\n                dark\n            </Button>\n            <Button\n                shape=\"border\"\n                onClick={light}>\n                light\n            </Button>\n            </div>\n        )\n    }\n}\n\n\n\n","desc":" 提供10种颜色，包括黑色白色及四个语义色及四个浅语义色","scss_code":".paddingDemo{\n  button{\n    margin: 10px;\n  }\n}"},{"example":<Demo2 />,"title":" 不同显示位置的消息提醒","code":"/**\n *\n * @title 不同显示位置的消息提醒\n * @description 一个页面的message只能设置一中显示位置，提供六种位置选择，查看每种示例，需每次刷新\n *\n */\n\nimport React, { Component } from 'react';\nimport { Message, Button,  Panel ,  Con, Row, Col  } from 'tinper-bee';\n\n const top = function () {\n   Message.create({content: 'This is a Info message', position: 'top'});\n };\n const bottom = function () {\n   Message.create({content: 'This is a Info message', position: 'bottom'});\n };\n const topRight = function () {\n   Message.create({content: 'This is a Info message', position: 'topRight'});\n };\n const topLeft = function () {\n   Message.create({content: 'This is a Info message', position: 'topLeft'});\n };\n const bottomRight = function () {\n   Message.create({content: 'This is a Info message', position: 'bottomRight'});\n };\n const bottomLeft = function () {\n   Message.create({content: 'This is a Info message', position: 'bottomLeft'});\n };\nclass Demo2 extends Component {\n    constructor(props){\n        super(props);\n    }\n    render () {\n        return (\n            <div className=\"paddingDemo\">\n            <Button\n                colors=\"info\"\n                onClick={top}>\n                top\n            </Button>\n            <Button\n                colors=\"info\"\n                onClick={bottom}>\n                bottom\n            </Button>\n            <Button\n                colors=\"info\"\n                onClick={topRight}>\n                topRight\n            </Button>\n            <Button\n                colors=\"info\"\n                onClick={topLeft}>\n                topLeft\n            </Button>\n            <Button\n                colors=\"info\"\n                onClick={bottomRight}>\n                bottomRight\n            </Button>\n            <Button\n                colors=\"info\"\n                onClick={bottomLeft}>\n                bottomLeft\n            </Button>\n            </div>\n        )\n    }\n}\n\n\n","desc":" 一个页面的message只能设置一中显示位置，提供六种位置选择，查看每种示例，需每次刷新","scss_code":".paddingDemo{\n  button{\n    margin: 10px;\n  }\n}"}]


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
