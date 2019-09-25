import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Drawer from 'bee-drawer';
import Clipboard from 'bee-clipboard'; 
import Button from '../src';



var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var Demo4 = require("./demolist/Demo4");var Demo5 = require("./demolist/Demo5");var Demo6 = require("./demolist/Demo6");var Demo7 = require("./demolist/Demo7");var Demo8 = require("./demolist/Demo8");var DemoArray = [{"example":<Demo1 />,"title":" 不同size Input","code":"/**\n * @title 不同size Input\n * @description\n */\n\nimport React, {Component} from 'react';\nimport { Button, FormControl } from 'tinper-bee';\n\n\nexport default class Demo1 extends Component {\n    constructor(props) {\n        super(props);\n        this.state = {\n            value: \"test\"\n        }\n    }\n\n    onChange = (v) => {\n        this.setState({value: v});\n    }\n    onBlur = (v) => {\n        console.log(v);\n    }\n\n    render() {\n        return (\n            <div className=\"demo1\">\n                <FormControl\n                    className=\"demo1-input\"\n                    value={this.state.value}\n                    onChange={this.onChange}\n                    onBlur={this.onBlur}\n                    size=\"sm\"\n                    focusSelect={true}\n                />\n                <FormControl\n                    className=\"demo1-input\"\n                    value={this.state.value}\n                    onChange={this.onChange}\n                />\n                <FormControl\n                    className=\"demo1-input\"\n                    value={this.state.value}\n                    onChange={this.onChange}\n                    size=\"lg\"\n                />\n            </div>\n\n        )\n    }\n}","desc":"","scss_code":".demo1 {\r\n    padding-bottom: 20px;\r\n    display: block;\r\n    .demo1-input{\r\n        margin-top: 10px;\r\n        width: 200px;\r\n        display: block;\r\n    }\r\n}"},{"example":<Demo2 />,"title":" 可控 Input","code":"/**\r\n * @title 可控 Input\r\n * @description\r\n */\r\n\r\nimport React, {Component} from 'react';\nimport { Button, FormControl } from 'tinper-bee';\r\n\n\r\n\r\nexport default class Demo2 extends Component {\r\n    constructor(props) {\r\n        super(props);\r\n        this.state = {\r\n            value: \"我是这样\",\r\n            select:false\r\n        }\r\n    }\r\n\r\n    onChange = (value) => {\r\n        this.setState({value: value});\r\n    }\r\n\r\n    onHander = () => {\r\n        this.setState({\r\n            value: \"我改变了\",\r\n            select:true\r\n        })\r\n    }\r\n\r\n    render() {\r\n        return (\r\n            <div className=\"demo2\">\r\n                <Button colors=\"primary\" onClick={this.onHander}>修改输入框值</Button>\r\n                <FormControl focusSelect={this.state.select} className=\"demo2-input\" value={this.state.value} onChange={this.onChange}/>\r\n            </div>\r\n\r\n        )\r\n    }\r\n}","desc":"","scss_code":".demo2 {\r\n    padding-bottom: 20px;\r\n    display: block;\r\n    .demo2-input{\r\n        margin-top: 10px;\r\n        width: 200px;\r\n        display: block;\r\n    }\r\n}"},{"example":<Demo3 />,"title":" 获取Input对象句柄","code":"/**\r\n * @title 获取Input对象句柄\r\n * @description 获取对象句柄，两种方式。\r\n */\r\n\r\nimport React, {Component} from 'react';\nimport { Button, FormControl } from 'tinper-bee';\r\n\n\r\n\r\nclass Demo3 extends Component {\r\n\r\n    constructor(props) {\r\n        super(props);\r\n        this.state = {\r\n            value: \"test\"\r\n        }\r\n    }\r\n\r\n    onHander = () => {\r\n        this.textInput.input.focus();\r\n    }\r\n\r\n    render() {\r\n        return (\r\n            <div className=\"demo3\">\r\n                <Button colors=\"primary\" onClick={this.onHander}>获取input对象句柄</Button>\r\n\r\n                <FormControl\r\n                    className=\"demo3-input\"\r\n                    defaultValue={this.state.value}\r\n                    ref={(input) => {this.textInput = input}}\r\n                />\r\n                <FormControl\r\n                    className=\"demo3-input\"\r\n                    defaultValue={this.state.value}\r\n                    ref=\"test\"\r\n                />\r\n            </div>\r\n\r\n        )\r\n    }\r\n}\r\nexport default Demo3;","desc":" 获取对象句柄，两种方式。","scss_code":".demo3 {\r\n    padding-bottom: 20px;\r\n    display: block;\r\n    .demo3-input{\r\n        margin-top: 10px;\r\n        width: 200px;\r\n        display: block;\r\n    }\r\n}"},{"example":<Demo4 />,"title":" 设置文本框焦点事件 autoFocus 属性","code":"/**\r\n * @title 设置文本框焦点事件 autoFocus 属性\r\n * @description 设置文本框焦点事件 autoFocus 属性\r\n */\r\n\r\nimport React, {Component} from 'react';\nimport { Button, FormControl } from 'tinper-bee';\r\n\n\r\n\r\nclass Demo4 extends Component {\r\n\r\n    constructor(props) {\r\n        super(props);\r\n        this.state = {\r\n            value: \"test\"\r\n        }\r\n    }\r\n\r\n    render() {\r\n        return (\r\n            <div className=\"demo4\">\r\n                <FormControl\r\n                    className=\"demo4-input\"\r\n                    //autoFocus\r\n                    defaultValue={this.state.value}\r\n                />\r\n            </div>\r\n        )\r\n    }\r\n}\r\nexport default Demo4;","desc":" 设置文本框焦点事件 autoFocus 属性","scss_code":".demo4 {\r\n    padding-bottom: 20px;\r\n    display: block;\r\n    .demo4-input{\r\n        margin-top: 10px;\r\n        width: 200px;\r\n        display: block;\r\n    }\r\n}"},{"example":<Demo5 />,"title":" 搜索框","code":"/**\r\n * @title 搜索框\r\n * @description 通过设置type=\"search\"属性，让FormControl组件有搜索功能。type=\"search\"下showClose不可用\r\n */\r\n\r\nimport React, {Component} from 'react';\nimport { Button, FormControl } from 'tinper-bee';\r\n\n\r\n\r\nexport default class Demo5 extends Component {\r\n    constructor(props) {\r\n        super(props);\r\n        this.state = {\r\n            value: \"test\"\r\n        }\r\n    }\r\n\r\n    onChange = (value) => {\r\n        this.setState({value: value});\r\n    }\r\n\r\n    onSearch = (value) => {\r\n        console.log(\"搜索\" + value);\r\n    }\r\n\r\n    render() {\r\n        return (\r\n            <div className=\"demo5\">\r\n                <FormControl\r\n                    className=\"demo5-input\"\r\n                    value={this.state.value}\r\n                    onSearch={this.onSearch}\r\n                    onChange={this.onChange}\r\n                    type=\"search\"\r\n                />\r\n            </div>\r\n\r\n        )\r\n    }\r\n}","desc":" 通过设置type=\"search\"属性，让FormControl组件有搜索功能。type=\"search\"下showClose不可用","scss_code":".demo5 {\r\n    padding-bottom: 20px;\r\n    display: block;\r\n    .demo5-input{\r\n        margin-top: 10px;\r\n        width: 200px;\r\n        display: block;\r\n    }\r\n}"},{"example":<Demo6 />,"title":" 清空按钮","code":"/**\r\n * @title 清空按钮\r\n * @description 通过设置 showClose 属性，让FormControl组件有清空功能\r\n */\r\n\r\nimport React, {Component} from 'react';\nimport { Button, FormControl } from 'tinper-bee';\r\n\n\r\n\r\nexport default class Demo6 extends Component {\r\n    constructor(props) {\r\n        super(props);\r\n        this.state = {\r\n            value: \"test\"\r\n        }\r\n    }\r\n\r\n    onChange = (value) => {\r\n        this.setState({value: value});\r\n    }\r\n\r\n    onSearch = (value) => {\r\n        console.log(value);\r\n    }\r\n\r\n    render() {\r\n        return (\r\n            <div className=\"demo6\">\r\n                <FormControl\r\n                    className=\"demo6-input\"\r\n                    value={this.state.value}\r\n                    onChange={this.onChange}\r\n                    showClose\r\n                />\r\n            </div>\r\n\r\n        )\r\n    }\r\n}","desc":" 通过设置 showClose 属性，让FormControl组件有清空功能","scss_code":".demo6 {\r\n    padding-bottom: 20px;\r\n    display: block;\r\n    .demo6-input{\r\n        margin-top: 10px;\r\n        width: 200px;\r\n        display: block;\r\n    }\r\n}"},{"example":<Demo7 />,"title":" 不可用状态","code":"/**\n * @title 不可用状态\n * @description 添加 disabled 属性即可让输入框处于不可用状态\n */\n\nimport React, {Component} from 'react';\nimport { FormControl } from 'tinper-bee';\n\n\nexport default class Demo1 extends Component {\n    constructor(props) {\n        super(props);\n    }\n\n    render() {\n        return (\n            <div className=\"demo8\">\n                <FormControl disabled value=\"test\" className=\"demo8-input\"/>\n            </div>\n\n        )\n    }\n}","desc":" 添加 disabled 属性即可让输入框处于不可用状态","scss_code":".demo8 {\n    padding-bottom: 20px;\n    display: block;\n    .demo8-input{\n        margin-top: 10px;\n        width: 200px;\n        display: block;\n    }\n}"},{"example":<Demo8 />,"title":" onChange事件防抖","code":"/**\n * @title onChange事件防抖\n * @description\n */\n\nimport React, {Component} from 'react';\nimport { FormControl } from 'tinper-bee';\n\n\nexport default class Demo1 extends Component {\n    constructor(props) {\n        super(props);\n        this.state = {\n            value: \"test\"\n        }\n    }\n\n    onChange = (v) => {\n        this.setState({value: v});\n        console.log('onChange事件防抖')\n    }\n    onBlur = (v) => {\n        console.log(v);\n    }\n\n    render() {\n        return (\n            <div className=\"demo8\">\n                <FormControl\n                    className=\"demo8-input\"\n                    value={this.state.value}\n                    onChange={this.onChange}\n                    debounceDelay={1500}\n                />\n            </div>\n\n        )\n    }\n}","desc":"","scss_code":".demo8 {\n    padding-bottom: 20px;\n    display: block;\n    .demo8-input{\n        margin-top: 10px;\n        width: 200px;\n        display: block;\n    }\n}"}]


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
