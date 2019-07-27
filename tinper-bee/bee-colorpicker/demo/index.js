import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Drawer from 'bee-drawer';
import Clipboard from 'bee-clipboard'; 
import Button from '../src';



var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var Demo4 = require("./demolist/Demo4");var Demo5 = require("./demolist/Demo5");var Demo6 = require("./demolist/Demo6");var DemoArray = [{"example":<Demo1 />,"title":" 取色板","code":"/**\r\n*\r\n* @title 取色板\r\n* @description 提供预制色板的取色板组件\r\n*\r\n*/\r\nimport React, { Component } from 'react';\nimport {  } from 'tinper-bee';\r\nimport ColorPicker from \"tinper-bee/lib/src\";;\r\n\r\nclass Demo1 extends Component {\r\n    state = {\r\n        value : \"#E14C46\"\r\n    }\r\n\r\n    handleChange = (v) => {\r\n        console.log(\"选择的色彩信息 ：\" , v);\r\n        this.setState({\r\n            value: v.hex || ''\r\n        })\r\n    }\r\n    render () {\r\n        return (\r\n            <ColorPicker \r\n                label=\"颜色\"\r\n                placeholder=\"请输入十六进制色值\"\r\n                value={this.state.value} \r\n                onChange={this.handleChange}\r\n            />\r\n        )\r\n    }\r\n}\r\n","desc":" 提供预制色板的取色板组件"},{"example":<Demo2 />,"title":" 设置必输项","code":"/**\r\n*\r\n* @title 设置必输项\r\n* @description `required`参数设置是否必填\r\n*\r\n*/\r\nimport React, { Component } from 'react';\nimport {  } from 'tinper-bee';\r\nimport ColorPicker from \"tinper-bee/lib/src\";;\r\n\r\nclass Demo2 extends Component {\r\n    state = {\r\n        value : \"#E14C46\"\r\n    }\r\n\r\n    handleChange = (v) => {\r\n        console.log(\"选择的色彩信息 ：\" , v);\r\n        this.setState({\r\n            value: v.hex || ''\r\n        })\r\n    }\r\n    render () {\r\n        return (\r\n            <ColorPicker \r\n                className=\"demo2\"\r\n                placeholder=\"请输入十六进制色值\"\r\n                value={this.state.value} \r\n                onChange={this.handleChange}\r\n                label=\"颜色\"\r\n                required={true}\r\n            />\r\n        )\r\n    }\r\n}\r\n","desc":" `required`参数设置是否必填"},{"example":<Demo3 />,"title":" 自动计算色值","code":"/**\r\n*\r\n* @title 自动计算色值\r\n* @description 根据选中的颜色自动计算比其 浅一色度/深一色度 的色值，可应用于选择主色后，自动计算hover和active状态的色值\r\n*\r\n*/\r\nimport React, { Component } from 'react';\nimport {  } from 'tinper-bee';\r\nimport ColorPicker from \"tinper-bee/lib/src\";;\r\n\r\nclass Demo3 extends Component {\r\n    autoCalculate = (obj) => {\r\n        console.log(\"自动计算的色值对象 ：\",obj);\r\n    }\r\n\r\n    handleChange = (v) => {\r\n        console.log(\"选择的色彩信息 ：\" , v);\r\n    }\r\n    render () {\r\n        return (\r\n            <ColorPicker\r\n                className=\"demo2\"\r\n                label=\"颜色\"\r\n                placeholder=\"请输入十六进制色值\" \r\n                autoCalculate={this.autoCalculate}\r\n                onChange={this.handleChange}\r\n            />\r\n        )\r\n    }\r\n}\r\n","desc":" 根据选中的颜色自动计算比其 浅一色度/深一色度 的色值，可应用于选择主色后，自动计算hover和active状态的色值"},{"example":<Demo4 />,"title":" 不可用状态","code":"/**\r\n*\r\n* @title 不可用状态\r\n* @description 添加 disabled 属性即可让取色板处于不可用状态\r\n*\r\n*/\r\nimport React, { Component } from 'react';\nimport {  } from 'tinper-bee';\r\nimport ColorPicker from \"tinper-bee/lib/src\";;\r\n\r\nclass Demo4 extends Component {\r\n    state = {\r\n        value : \"#E14C46\"\r\n    }\r\n\r\n    handleChange = (v) => {\r\n        console.log(\"选择的色彩信息 ：\" , v);\r\n        this.setState({\r\n            value: v.hex || ''\r\n        })\r\n    }\r\n    render () {\r\n        return (\r\n            <ColorPicker \r\n                disabled\r\n                label=\"颜色\"\r\n                placeholder=\"请输入十六进制色值\"\r\n                value={this.state.value} \r\n                onChange={this.handleChange}\r\n            />\r\n        )\r\n    }\r\n}\r\n","desc":" 添加 disabled 属性即可让取色板处于不可用状态"},{"example":<Demo5 />,"title":" 禁用透明度","code":"/**\r\n*\r\n* @title 禁用透明度\r\n* @description 添加 disabledAlpha 属性可禁用透明度设置\r\n*\r\n*/\r\nimport React, { Component } from 'react';\nimport {  } from 'tinper-bee';\r\nimport ColorPicker from \"tinper-bee/lib/src\";;\r\n\r\nclass Demo5 extends Component {\r\n    state = {\r\n        value : \"#E14C46\"\r\n    }\r\n\r\n    handleChange = (v) => {\r\n        console.log(\"选择的色彩信息 ：\" , v);\r\n        this.setState({\r\n            value: v.hex || ''\r\n        })\r\n    }\r\n    render () {\r\n        return (\r\n            <ColorPicker \r\n                disabledAlpha\r\n                label=\"颜色\"\r\n                placeholder=\"请输入十六进制色值\"\r\n                value={this.state.value} \r\n                onChange={this.handleChange}\r\n            />\r\n        )\r\n    }\r\n}\r\n","desc":" 添加 disabledAlpha 属性可禁用透明度设置"},{"example":<Demo6 />,"title":" 自定义文字","code":"/**\r\n *\r\n * @title 自定义文字\r\n * @description 提供自定义文字的取色板组件\r\n *\r\n */\r\nimport React, { Component } from 'react';\nimport {  } from 'tinper-bee';\r\nimport ColorPicker from \"tinper-bee/lib/src\";;\r\n\r\nclass Demo6 extends Component {\r\n    state = {\r\n        value : \"#E14C46\",\r\n    }\r\n\r\n    handleChange = (v) => {\r\n        console.log(\"选择的色彩信息 ：\" , v);\r\n        this.setState({\r\n            value: v.hex || ''\r\n        })\r\n    }\r\n    render () {\r\n        return (\r\n            <ColorPicker\r\n                label=\"颜色\"\r\n                placeholder=\"请输入十六进制色值\"\r\n                value={this.state.value}\r\n                title='自定义标题'\r\n                cacelBtn='自定义取消按钮文字'\r\n                confirmBtn='自定义确认按钮提示'\r\n                onChange={this.handleChange}\r\n            />\r\n        )\r\n    }\r\n}\r\n","desc":" 提供自定义文字的取色板组件"}]


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
