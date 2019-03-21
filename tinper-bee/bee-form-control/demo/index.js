import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Drawer from 'bee-drawer';
import Clipboard from 'bee-clipboard'; 
import Button from '../src';



var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var Demo4 = require("./demolist/Demo4");var Demo5 = require("./demolist/Demo5");var Demo6 = require("./demolist/Demo6");var Demo7 = require("./demolist/Demo7");var DemoArray = [{"example":<Demo1 />,"title":" 不同size Input","code":"/**\n * @title 不同size Input\n * @description\n */\n\nimport React, {Component} from 'react';\nimport { FormControl, Button } from 'tinper-bee';\n\n\n    constructor(props) {\n        super(props);\n        this.state = {\n            value: \"test\"\n        }\n    }\n\n    onChange = (v) => {\n        this.setState({value: v});\n    }\n    onBlur = (v) => {\n        console.log(v);\n    }\n\n    render() {\n        return (\n            <div className=\"demo1\">\n                <FormControl\n                    className=\"demo1-input\"\n                    value={this.state.value}\n                    onChange={this.onChange}\n                    onBlur={this.onBlur}\n                    size=\"sm\"\n                    focusSelect={true}\n                />\n                <FormControl\n                    className=\"demo1-input\"\n                    value={this.state.value}\n                    onChange={this.onChange}\n                />\n                <FormControl\n                    className=\"demo1-input\"\n                    value={this.state.value}\n                    onChange={this.onChange}\n                    size=\"lg\"\n                />\n            </div>\n\n        )\n    }\n}","desc":"","scss_code":".demo1 {\n    padding-bottom: 20px;\n    display: block;\n    .demo1-input{\n        margin-top: 10px;\n        width: 200px;\n        display: block;\n    }\n}"},{"example":<Demo2 />,"title":" 可控 Input","code":"/**\n * @title 可控 Input\n * @description\n */\n\nimport React, {Component} from 'react';\nimport { FormControl, Button } from 'tinper-bee';\n\n\n    constructor(props) {\n        super(props);\n        this.state = {\n            value: \"我是这样\",\n            select:false\n        }\n    }\n\n    onChange = (value) => {\n        this.setState({value: value});\n    }\n\n    onHander = () => {\n        this.setState({\n            value: \"我改变了\",\n            select:true\n        })\n    }\n\n    render() {\n        return (\n            <div className=\"demo2\">\n                <Button colors=\"primary\" onClick={this.onHander}>修改输入框值</Button>\n                <FormControl focusSelect={this.state.select} className=\"demo2-input\" value={this.state.value} onChange={this.onChange}/>\n            </div>\n\n        )\n    }\n}","desc":"","scss_code":".demo2 {\n    padding-bottom: 20px;\n    display: block;\n    .demo2-input{\n        margin-top: 10px;\n        width: 200px;\n        display: block;\n    }\n}"},{"example":<Demo3 />,"title":" 获取Input对象句柄","code":"/**\n * @title 获取Input对象句柄\n * @description 获取对象句柄，两种方式。\n */\n\nimport React, {Component} from 'react';\nimport { FormControl, Button } from 'tinper-bee';\n\nclass Demo3 extends Component {\n\n    constructor(props) {\n        super(props);\n        this.state = {\n            value: \"test\"\n        }\n    }\n\n    onHander = () => {\n        this.textInput.input.focus();\n    }\n\n    render() {\n        return (\n            <div className=\"demo3\">\n                <Button colors=\"primary\" onClick={this.onHander}>获取input对象句柄</Button>\n\n                <FormControl\n                    className=\"demo3-input\"\n                    defaultValue={this.state.value}\n                    ref={(input) => {this.textInput = input}}\n                />\n                <FormControl\n                    className=\"demo3-input\"\n                    defaultValue={this.state.value}\n                    ref=\"test\"\n                />\n            </div>\n\n        )\n    }\n}\n","desc":" 获取对象句柄，两种方式。","scss_code":".demo3 {\n    padding-bottom: 20px;\n    display: block;\n    .demo3-input{\n        margin-top: 10px;\n        width: 200px;\n        display: block;\n    }\n}"},{"example":<Demo4 />,"title":" 设置文本框焦点事件 autoFocus 属性","code":"/**\n * @title 设置文本框焦点事件 autoFocus 属性\n * @description 设置文本框焦点事件 autoFocus 属性\n */\n\nimport React, {Component} from 'react';\nimport { FormControl, Button } from 'tinper-bee';\n\nclass Demo4 extends Component {\n\n    constructor(props) {\n        super(props);\n        this.state = {\n            value: \"test\"\n        }\n    }\n\n    render() {\n        return (\n            <div className=\"demo4\">\n                <FormControl\n                    className=\"demo4-input\"\n                    //autoFocus\n                    defaultValue={this.state.value}\n                />\n            </div>\n        )\n    }\n}\n","desc":" 设置文本框焦点事件 autoFocus 属性","scss_code":".demo4 {\n    padding-bottom: 20px;\n    display: block;\n    .demo4-input{\n        margin-top: 10px;\n        width: 200px;\n        display: block;\n    }\n}"},{"example":<Demo5 />,"title":" 搜索框","code":"/**\n * @title 搜索框\n * @description 通过设置type=\"search\"属性，让FormControl组件有搜索功能。type=\"search\"下showClose不可用\n */\n\nimport React, {Component} from 'react';\nimport { FormControl, Button } from 'tinper-bee';\n\n\n    constructor(props) {\n        super(props);\n        this.state = {\n            value: \"test\"\n        }\n    }\n\n    onChange = (value) => {\n        this.setState({value: value});\n    }\n\n    onSearch = (value) => {\n        console.log(\"搜索\" + value);\n    }\n\n    render() {\n        return (\n            <div className=\"demo5\">\n                <FormControl\n                    className=\"demo5-input\"\n                    value={this.state.value}\n                    onSearch={this.onSearch}\n                    onChange={this.onChange}\n                    type=\"search\"\n                />\n            </div>\n\n        )\n    }\n}","desc":" 通过设置type=\"search\"属性，让FormControl组件有搜索功能。type=\"search\"下showClose不可用","scss_code":".demo5 {\n    padding-bottom: 20px;\n    display: block;\n    .demo5-input{\n        margin-top: 10px;\n        width: 200px;\n        display: block;\n    }\n}"},{"example":<Demo6 />,"title":" 清空按钮","code":"/**\n * @title 清空按钮\n * @description 通过设置 showClose 属性，让FormControl组件有清空功能\n */\n\nimport React, {Component} from 'react';\nimport { FormControl, Button } from 'tinper-bee';\n\n\n    constructor(props) {\n        super(props);\n        this.state = {\n            value: \"test\"\n        }\n    }\n\n    onChange = (value) => {\n        this.setState({value: value});\n    }\n\n    onSearch = (value) => {\n        console.log(value);\n    }\n\n    render() {\n        return (\n            <div className=\"demo6\">\n                <FormControl\n                    className=\"demo6-input\"\n                    value={this.state.value}\n                    onChange={this.onChange}\n                    showClose\n                />\n            </div>\n\n        )\n    }\n}","desc":" 通过设置 showClose 属性，让FormControl组件有清空功能","scss_code":".demo6 {\n    padding-bottom: 20px;\n    display: block;\n    .demo6-input{\n        margin-top: 10px;\n        width: 200px;\n        display: block;\n    }\n}"},{"example":<Demo7 />,"title":" 不可用状态","code":"/**\n * @title 不可用状态\n * @description 添加 disabled 属性即可让输入框处于不可用状态\n */\n\nimport React, {Component} from 'react';\nimport { FormControl } from 'tinper-bee';\n\n\n    constructor(props) {\n        super(props);\n    }\n\n    render() {\n        return (\n            <div className=\"demo8\">\n                <FormControl disabled value=\"test\" className=\"demo8-input\"/>\n            </div>\n\n        )\n    }\n}","desc":" 添加 disabled 属性即可让输入框处于不可用状态","scss_code":".demo8 {\n    padding-bottom: 20px;\n    display: block;\n    .demo8-input{\n        margin-top: 10px;\n        width: 200px;\n        display: block;\n    }\n}"}]


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
