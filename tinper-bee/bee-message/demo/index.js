import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Button from 'bee-button';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';


const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var DemoArray = [{"example":<Demo1 />,"title":" 不同颜色的消息提醒","code":"/**\n *\n * @title 不同颜色的消息提醒\n * @description 提供10种颜色，包括黑色白色及四个语义色及四个浅语义色\n *\n */\n\nimport React, { Component } from 'react';\nimport { Message, Button,  Panel ,  Con, Row, Col  } from 'tinper-bee';\n\n const info = function () {\n   let aa = Message.create({content: 'This is a Info message', color: 'info', duration: null});\n\n };\n const danger = function () {\n   Message.create({content: 'This is a danger message', color: 'danger'});\n };\n const success = function () {\n   Message.create({content: 'This is a success message', color: 'success'});\n };\n const warning = function () {\n   Message.create({content: 'This is a warning message', color: 'warning'});\n };\n const loading = function () {\n   Message.create({content: 'This is a dark message', color: 'dark'});\n };\n const light = function () {\n   Message.create({content: 'This is a light message', color: 'light'});\n };\nclass Demo1 extends Component {\n    constructor(props){\n        super(props);\n    }\n    render () {\n        return (\n            <div className=\"paddingDemo\">\n            <Button\n                colors=\"info\"\n                onClick={info}>\n                info\n            </Button>\n            <Button\n                colors=\"danger\"\n                onClick={danger}>\n                danger\n            </Button>\n            <Button\n                colors=\"warning\"\n                onClick={warning}>\n                warning\n            </Button>\n            <Button\n                colors=\"success\"\n                onClick={success}>\n                success\n            </Button>\n            <Button\n                colors=\"primary\"\n                onClick={loading}>\n                dark\n            </Button>\n            <Button\n                shape=\"border\"\n                onClick={light}>\n                light\n            </Button>\n            </div>\n        )\n    }\n}\n\n\n\n","desc":" 提供10种颜色，包括黑色白色及四个语义色及四个浅语义色","scss_code":".paddingDemo{\n  button{\n    margin: 10px;\n  }\n}"},{"example":<Demo2 />,"title":" 不同显示位置的消息提醒","code":"/**\n *\n * @title 不同显示位置的消息提醒\n * @description 一个页面的message只能设置一中显示位置，提供六种位置选择，查看每种示例，需每次刷新\n *\n */\n\nimport React, { Component } from 'react';\nimport { Message, Button,  Panel ,  Con, Row, Col  } from 'tinper-bee';\n\n const top = function () {\n   Message.create({content: 'This is a Info message', position: 'top'});\n };\n const bottom = function () {\n   Message.create({content: 'This is a Info message', position: 'bottom'});\n };\n const topRight = function () {\n   Message.create({content: 'This is a Info message', position: 'topRight'});\n };\n const topLeft = function () {\n   Message.create({content: 'This is a Info message', position: 'topLeft'});\n };\n const bottomRight = function () {\n   Message.create({content: 'This is a Info message', position: 'bottomRight'});\n };\n const bottomLeft = function () {\n   Message.create({content: 'This is a Info message', position: 'bottomLeft'});\n };\nclass Demo2 extends Component {\n    constructor(props){\n        super(props);\n    }\n    render () {\n        return (\n            <div className=\"paddingDemo\">\n            <Button\n                colors=\"info\"\n                onClick={top}>\n                top\n            </Button>\n            <Button\n                colors=\"info\"\n                onClick={bottom}>\n                bottom\n            </Button>\n            <Button\n                colors=\"info\"\n                onClick={topRight}>\n                topRight\n            </Button>\n            <Button\n                colors=\"info\"\n                onClick={topLeft}>\n                topLeft\n            </Button>\n            <Button\n                colors=\"info\"\n                onClick={bottomRight}>\n                bottomRight\n            </Button>\n            <Button\n                colors=\"info\"\n                onClick={bottomLeft}>\n                bottomLeft\n            </Button>\n            </div>\n        )\n    }\n}\n\n\n","desc":" 一个页面的message只能设置一中显示位置，提供六种位置选择，查看每种示例，需每次刷新","scss_code":".paddingDemo{\n  button{\n    margin: 10px;\n  }\n}"}]


class Demo extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({ open: !this.state.open })
    }

    render () {
        const { title, example, code, desc, scss_code  } = this.props;
        let caret = this.state.open ? CARETUP : CARET;
        let text = this.state.open ? "隐藏代码" : "查看代码";

        const header = (
            <div>
                {example}
                <Button style={{"marginTop": "10px"}} shape="block" onClick={ this.handleClick }>
                    { caret }
                    { text }
                </Button>
            </div>
        );
        return (
            <Col md={12} >
                <h3>{ title }</h3>
                <p>{ desc }</p>
                <Panel collapsible headerContent expanded={ this.state.open } colors='bordered' header={ header } footerStyle = {{padding: 0}}>
                    <pre><code className="hljs javascript">{ code }</code></pre>
                    { !!scss_code ? <pre><code className="hljs css">{ scss_code }</code></pre> : null }
                </Panel>
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
