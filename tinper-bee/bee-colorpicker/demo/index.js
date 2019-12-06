import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Drawer from 'bee-drawer';
import Clipboard from 'bee-clipboard'; 
import Button from '../src';



var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var Demo4 = require("./demolist/Demo4");var Demo5 = require("./demolist/Demo5");var Demo6 = require("./demolist/Demo6");var Demo7 = require("./demolist/Demo7");var DemoArray = [{"example":<Demo1 />,"title":" 取色板","code":"/**\n*\n* @title 取色板\n* @description 提供预制色板的取色板组件\n*\n*/\nimport React, { Component } from 'react';\nimport { ColorPicker } from 'tinper-bee';\n\n\nclass Demo1 extends Component {\n    state = {\n        value : \"#E14C46\"\n    }\n\n    handleChange = (v) => {\n        console.log(\"选择的色彩信息 ：\" , v);\n        this.setState({\n            value: v.hex || ''\n        })\n    }\n    render () {\n        return (\n            <ColorPicker \n                label=\"颜色\"\n                placeholder=\"请输入十六进制色值\"\n                value={this.state.value} \n                onChange={this.handleChange}\n            />\n        )\n    }\n}\nexport default Demo1","desc":" 提供预制色板的取色板组件"},{"example":<Demo2 />,"title":" 设置必输项","code":"/**\n*\n* @title 设置必输项\n* @description `required`参数设置是否必填\n*\n*/\nimport React, { Component } from 'react';\nimport { ColorPicker } from 'tinper-bee';\n\n\nclass Demo2 extends Component {\n    state = {\n        value : \"#E14C46\"\n    }\n\n    handleChange = (v) => {\n        console.log(\"选择的色彩信息 ：\" , v);\n        this.setState({\n            value: v.hex || ''\n        })\n    }\n    render () {\n        return (\n            <ColorPicker \n                className=\"demo2\"\n                placeholder=\"请输入十六进制色值\"\n                value={this.state.value} \n                onChange={this.handleChange}\n                label=\"颜色\"\n                required={true}\n            />\n        )\n    }\n}\nexport default Demo2","desc":" `required`参数设置是否必填"},{"example":<Demo3 />,"title":" 自动计算色值","code":"/**\n*\n* @title 自动计算色值\n* @description 根据选中的颜色自动计算比其 浅一色度/深一色度 的色值，可应用于选择主色后，自动计算hover和active状态的色值\n*\n*/\nimport React, { Component } from 'react';\nimport { ColorPicker } from 'tinper-bee';\n\n\nclass Demo3 extends Component {\n    autoCalculate = (obj) => {\n        console.log(\"自动计算的色值对象 ：\",obj);\n    }\n\n    handleChange = (v) => {\n        console.log(\"选择的色彩信息 ：\" , v);\n    }\n    render () {\n        return (\n            <ColorPicker\n                className=\"demo2\"\n                label=\"颜色\"\n                placeholder=\"请输入十六进制色值\" \n                autoCalculate={this.autoCalculate}\n                onChange={this.handleChange}\n            />\n        )\n    }\n}\nexport default Demo3","desc":" 根据选中的颜色自动计算比其 浅一色度/深一色度 的色值，可应用于选择主色后，自动计算hover和active状态的色值"},{"example":<Demo4 />,"title":" 不可用状态","code":"/**\n*\n* @title 不可用状态\n* @description 添加 disabled 属性即可让取色板处于不可用状态\n*\n*/\nimport React, { Component } from 'react';\nimport { ColorPicker } from 'tinper-bee';\n\n\nclass Demo4 extends Component {\n    state = {\n        value : \"#E14C46\"\n    }\n\n    handleChange = (v) => {\n        console.log(\"选择的色彩信息 ：\" , v);\n        this.setState({\n            value: v.hex || ''\n        })\n    }\n    render () {\n        return (\n            <ColorPicker \n                disabled\n                label=\"颜色\"\n                placeholder=\"请输入十六进制色值\"\n                value={this.state.value} \n                onChange={this.handleChange}\n            />\n        )\n    }\n}\nexport default Demo4","desc":" 添加 disabled 属性即可让取色板处于不可用状态"},{"example":<Demo5 />,"title":" 禁用透明度","code":"/**\r\n*\r\n* @title 禁用透明度\r\n* @description 添加 disabledAlpha 属性可禁用透明度设置\r\n*\r\n*/\r\nimport React, { Component } from 'react';\nimport { ColorPicker } from 'tinper-bee';\r\n\r\n\r\nclass Demo5 extends Component {\r\n    state = {\r\n        value : \"#E14C46\"\r\n    }\r\n\r\n    handleChange = (v) => {\r\n        console.log(\"选择的色彩信息 ：\" , v);\r\n        this.setState({\r\n            value: v.hex || ''\r\n        })\r\n    }\r\n    render () {\r\n        return (\r\n            <ColorPicker \r\n                disabledAlpha\r\n                label=\"颜色\"\r\n                placeholder=\"请输入十六进制色值\"\r\n                value={this.state.value} \r\n                onChange={this.handleChange}\r\n            />\r\n        )\r\n    }\r\n}\r\nexport default Demo5","desc":" 添加 disabledAlpha 属性可禁用透明度设置"},{"example":<Demo6 />,"title":" 自定义文字","code":"/**\n *\n * @title 自定义文字\n * @description 提供自定义文字的取色板组件\n *\n */\nimport React, { Component } from 'react';\nimport { ColorPicker } from 'tinper-bee';\n\n\nclass Demo6 extends Component {\n    state = {\n        value : \"#E14C46\",\n    }\n\n    handleChange = (v) => {\n        console.log(\"选择的色彩信息 ：\" , v);\n        this.setState({\n            value: v.hex || ''\n        })\n    }\n    render () {\n        return (\n            <ColorPicker\n                label=\"颜色\"\n                placeholder=\"请输入十六进制色值\"\n                value={this.state.value}\n                title='自定义标题'\n                cacelBtn='自定义取消按钮文字'\n                confirmBtn='自定义确认按钮提示'\n                onChange={this.handleChange}\n            />\n        )\n    }\n}\nexport default Demo6","desc":" 提供自定义文字的取色板组件"},{"example":<Demo7 />,"title":" 参数区域是否展示","code":"/**\n *\n * @title 参数区域是否展示\n * @description 自定义是否隐藏普通用户难以理解的参数区域，有利于界面友好。\n *\n */\nimport React, { Component } from 'react';\nimport { ColorPicker } from 'tinper-bee';\n\n\nclass Demo1 extends Component {\n  state = {\n    value : \"#E14C46\"\n  }\n\n  handleChange = (v) => {\n    console.log(\"选择的色彩信息 ：\" , v);\n    this.setState({\n      value: v.hex || ''\n    })\n  }\n  render () {\n    return (\n      <ColorPicker\n        label=\"颜色\"\n        placeholder=\"请输入十六进制色值\"\n        value={this.state.value}\n        onChange={this.handleChange}\n        isParameterArea={false}\n        modalProps={{draggable:true}}\n      />\n    )\n  }\n}\nexport default Demo1\n","desc":" 自定义是否隐藏普通用户难以理解的参数区域，有利于界面友好。"}]


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
