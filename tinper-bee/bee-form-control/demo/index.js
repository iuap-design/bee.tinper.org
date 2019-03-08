
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Button from 'bee-button';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';


const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var Demo4 = require("./demolist/Demo4");var Demo5 = require("./demolist/Demo5");var Demo6 = require("./demolist/Demo6");var Demo7 = require("./demolist/Demo7");var Demo8 = require("./demolist/Demo8");var DemoArray = [{"example":<Demo1 />,"title":" 不同size Input","code":"/**\r\n * @title 不同size Input\r\n * @description\r\n */\r\n\r\nimport React, {Component} from 'react';\r\n\nimport { FormControl, Button } from 'tinper-bee';\r\n\r\n\r\n    constructor(props) {\r\n        super(props);\r\n        this.state = {\r\n            value: \"test\"\r\n        }\r\n    }\r\n\r\n    onChange = (v) => {\r\n        this.setState({value: v});\r\n    }\r\n    onBlur = (v) => {\r\n        console.log(v);\r\n    }\r\n\r\n    render() {\r\n        return (\r\n            <div className=\"demo1\">\r\n                <FormControl\r\n                    className=\"demo1-input\"\r\n                    value={this.state.value}\r\n                    onChange={this.onChange}\r\n                    onBlur={this.onBlur}\r\n                    size=\"sm\"\r\n                    focusSelect={true}\r\n                />\r\n                <FormControl\r\n                    className=\"demo1-input\"\r\n                    value={this.state.value}\r\n                    onChange={this.onChange}\r\n                />\r\n                <FormControl\r\n                    className=\"demo1-input\"\r\n                    value={this.state.value}\r\n                    onChange={this.onChange}\r\n                    size=\"lg\"\r\n                />\r\n            </div>\r\n\r\n        )\r\n    }\r\n}","desc":"","scss_code":".demo1 {\r\n    padding-bottom: 20px;\r\n    display: block;\r\n    .demo1-input{\r\n        margin-top: 10px;\r\n        width: 200px;\r\n        display: block;\r\n    }\r\n}"},{"example":<Demo2 />,"title":" 可控 Input","code":"/**\r\n * @title 可控 Input\r\n * @description\r\n */\r\n\r\nimport React, {Component} from 'react';\r\n\nimport { FormControl, Button } from 'tinper-bee';\r\n\r\n\r\n    constructor(props) {\r\n        super(props);\r\n        this.state = {\r\n            value: \"我是这样\",\r\n            select:false\r\n        }\r\n    }\r\n\r\n    onChange = (value) => {\r\n        this.setState({value: value});\r\n    }\r\n\r\n    onHander = () => {\r\n        this.setState({\r\n            value: \"我改变了\",\r\n            select:true\r\n        })\r\n    }\r\n\r\n    render() {\r\n        return (\r\n            <div className=\"demo2\">\r\n                <Button colors=\"primary\" onClick={this.onHander}>修改输入框值</Button>\r\n                <FormControl focusSelect={this.state.select} className=\"demo2-input\" value={this.state.value} onChange={this.onChange}/>\r\n            </div>\r\n\r\n        )\r\n    }\r\n}","desc":"","scss_code":".demo2 {\r\n    padding-bottom: 20px;\r\n    display: block;\r\n    .demo2-input{\r\n        margin-top: 10px;\r\n        width: 200px;\r\n        display: block;\r\n    }\r\n}"},{"example":<Demo3 />,"title":" 获取Input对象句柄","code":"/**\r\n * @title 获取Input对象句柄\r\n * @description 获取对象句柄，两种方式。\r\n */\r\n\r\nimport React, {Component} from 'react';\r\n\nimport { FormControl, Button } from 'tinper-bee';\r\n\r\nclass Demo3 extends Component {\r\n\r\n    constructor(props) {\r\n        super(props);\r\n        this.state = {\r\n            value: \"test\"\r\n        }\r\n    }\r\n\r\n    onHander = () => {\r\n        this.textInput.input.focus();\r\n    }\r\n\r\n    render() {\r\n        return (\r\n            <div className=\"demo3\">\r\n                <Button colors=\"primary\" onClick={this.onHander}>获取input对象句柄</Button>\r\n\r\n                <FormControl\r\n                    className=\"demo3-input\"\r\n                    defaultValue={this.state.value}\r\n                    ref={(input) => {this.textInput = input}}\r\n                />\r\n                <FormControl\r\n                    className=\"demo3-input\"\r\n                    defaultValue={this.state.value}\r\n                    ref=\"test\"\r\n                />\r\n            </div>\r\n\r\n        )\r\n    }\r\n}\r\n","desc":" 获取对象句柄，两种方式。","scss_code":".demo3 {\r\n    padding-bottom: 20px;\r\n    display: block;\r\n    .demo3-input{\r\n        margin-top: 10px;\r\n        width: 200px;\r\n        display: block;\r\n    }\r\n}"},{"example":<Demo4 />,"title":" 设置文本框焦点事件 autoFocus 属性","code":"/**\r\n * @title 设置文本框焦点事件 autoFocus 属性\r\n * @description 设置文本框焦点事件 autoFocus 属性\r\n */\r\n\r\nimport React, {Component} from 'react';\r\n\nimport { FormControl, Button } from 'tinper-bee';\r\n\r\nclass Demo4 extends Component {\r\n\r\n    constructor(props) {\r\n        super(props);\r\n        this.state = {\r\n            value: \"test\"\r\n        }\r\n    }\r\n\r\n    render() {\r\n        return (\r\n            <div className=\"demo4\">\r\n                <FormControl\r\n                    className=\"demo4-input\"\r\n                    //autoFocus\r\n                    defaultValue={this.state.value}\r\n                />\r\n            </div>\r\n        )\r\n    }\r\n}\r\n","desc":" 设置文本框焦点事件 autoFocus 属性","scss_code":".demo4 {\r\n    padding-bottom: 20px;\r\n    display: block;\r\n    .demo4-input{\r\n        margin-top: 10px;\r\n        width: 200px;\r\n        display: block;\r\n    }\r\n}"},{"example":<Demo5 />,"title":" 搜索框","code":"/**\r\n * @title 搜索框\r\n * @description 通过设置type=\"search\"属性，让FormControl组件有搜索功能。type=\"search\"下showClose不可用\r\n */\r\n\r\nimport React, {Component} from 'react';\r\n\nimport { FormControl, Button } from 'tinper-bee';\r\n\r\n\r\n    constructor(props) {\r\n        super(props);\r\n        this.state = {\r\n            value: \"test\"\r\n        }\r\n    }\r\n\r\n    onChange = (value) => {\r\n        this.setState({value: value});\r\n    }\r\n\r\n    onSearch = (value) => {\r\n        console.log(\"搜索\" + value);\r\n    }\r\n\r\n    render() {\r\n        return (\r\n            <div className=\"demo5\">\r\n                <FormControl\r\n                    className=\"demo5-input\"\r\n                    value={this.state.value}\r\n                    onSearch={this.onSearch}\r\n                    onChange={this.onChange}\r\n                    type=\"search\"\r\n                />\r\n            </div>\r\n\r\n        )\r\n    }\r\n}","desc":" 通过设置type=\"search\"属性，让FormControl组件有搜索功能。type=\"search\"下showClose不可用","scss_code":".demo5 {\r\n    padding-bottom: 20px;\r\n    display: block;\r\n    .demo5-input{\r\n        margin-top: 10px;\r\n        width: 200px;\r\n        display: block;\r\n    }\r\n}"},{"example":<Demo6 />,"title":" 清空按钮","code":"/**\r\n * @title 清空按钮\r\n * @description 通过设置 showClose 属性，让FormControl组件有清空功能\r\n */\r\n\r\nimport React, {Component} from 'react';\r\n\nimport { FormControl, Button } from 'tinper-bee';\r\n\r\n\r\n    constructor(props) {\r\n        super(props);\r\n        this.state = {\r\n            value: \"test\"\r\n        }\r\n    }\r\n\r\n    onChange = (value) => {\r\n        this.setState({value: value});\r\n    }\r\n\r\n    onSearch = (value) => {\r\n        console.log(value);\r\n    }\r\n\r\n    render() {\r\n        return (\r\n            <div className=\"demo6\">\r\n                <FormControl\r\n                    className=\"demo6-input\"\r\n                    value={this.state.value}\r\n                    onChange={this.onChange}\r\n                    showClose\r\n                />\r\n            </div>\r\n\r\n        )\r\n    }\r\n}","desc":" 通过设置 showClose 属性，让FormControl组件有清空功能","scss_code":".demo6 {\r\n    padding-bottom: 20px;\r\n    display: block;\r\n    .demo6-input{\r\n        margin-top: 10px;\r\n        width: 200px;\r\n        display: block;\r\n    }\r\n}"},{"example":<Demo7 />,"title":" 配合toolTip使用","code":"/**\r\n * @title 配合toolTip使用\r\n * @description \r\n */\r\n\r\nimport React, {Component} from 'react';\r\n\nimport { FormControl, Tooltip, Button } from 'tinper-bee';\r\n\n\r\n\r\n    constructor(props) {\r\n        super(props);\r\n        this.state = {\r\n            value: \"test\"\r\n        }\r\n    }\r\n\r\n    onChange = (value) => {\r\n        this.setState({value: value});\r\n    }\r\n\r\n    onSearch = (value) => {\r\n        console.log(value);\r\n    }\r\n\r\n    render() {\r\n        return (\r\n            <div className=\"demo7\">\r\n                <Tooltip trigger=\"click\" \r\n                inverse rootClose placement=\"right\" \r\n                overlay={this.state.value}>\r\n                    <FormControl\r\n                        className=\"demo7-input\"\r\n                        value={this.state.value}\r\n                        onChange={this.onChange}\r\n                    />\r\n\t\t\t\t</Tooltip>\r\n               \r\n            </div>\r\n\r\n        )\r\n    }\r\n}","desc":" ","scss_code":"@import '../../node_modules/bee-tooltip/src/Tooltip.scss';\r\n.demo7 {\r\n    padding-bottom: 20px;\r\n    display: block;\r\n    .demo7-input{\r\n        margin-top: 10px;\r\n        width: 200px;\r\n        display: block;\r\n    }\r\n}\r\n.u-tooltip .tooltip-inner{\r\n    max-width:unset;\r\n}"},{"example":<Demo8 />,"title":" 不可用状态","code":"/**\r\n * @title 不可用状态\r\n * @description 添加 disabled 属性即可让输入框处于不可用状态\r\n */\r\n\r\nimport React, {Component} from 'react';\r\nimport { FormControl } from 'tinper-bee';\r\n\r\n\r\n    constructor(props) {\r\n        super(props);\r\n    }\r\n\r\n    render() {\r\n        return (\r\n            <div className=\"demo8\">\r\n                <FormControl disabled value=\"test\" className=\"demo8-input\"/>\r\n            </div>\r\n\r\n        )\r\n    }\r\n}","desc":" 添加 disabled 属性即可让输入框处于不可用状态","scss_code":".demo8 {\r\n    padding-bottom: 20px;\r\n    display: block;\r\n    .demo8-input{\r\n        margin-top: 10px;\r\n        width: 200px;\r\n        display: block;\r\n    }\r\n}"}]


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
