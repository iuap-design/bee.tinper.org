import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Drawer from 'bee-drawer';
import Clipboard from 'bee-clipboard'; 
import Button from '../src';



var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var DemoArray = [{"example":<Demo1 />,"title":" 拾色器","code":"/**\n*\n* @title 拾色器\n* @description 提供预制色板的拾色器组件\n*\n*/\nimport React, { Component } from 'react';\nimport { ColorPicker } from 'tinper-bee';\n\nclass Demo1 extends Component {\n    state = {\n        value : \"#E14C46\"\n    }\n\n    handleChange = (v) => {\n        console.log(v);\n        this.setState({\n            value: v\n        })\n    }\n    render () {\n        return (\n            <ColorPicker \n                value={this.state.value} \n                onChange={this.handleChange}\n                label=\"颜色\"\n            />\n        )\n    }\n}\n","desc":" 提供预制色板的拾色器组件"},{"example":<Demo2 />,"title":" 设置必输项","code":"/**\r\n*\r\n* @title 设置必输项\r\n* @description `required`参数设置是否必填\r\n*\r\n*/\r\nimport React, { Component } from 'react';\r\nimport { ColorPicker } from 'tinper-bee';\r\n\r\nclass Demo2 extends Component {\r\n    state = {\r\n        value : \"#E14C46\"\r\n    }\r\n\r\n    handleChange = (value) => {\r\n        console.log(value);\r\n        this.setState({\r\n            value: value\r\n        })\r\n    }\r\n    render () {\r\n        return (\r\n            <ColorPicker \r\n                className=\"demo2\"\r\n                value={this.state.value} \r\n                onChange={this.handleChange}\r\n                label=\"颜色\"\r\n                required={true}\r\n            />\r\n        )\r\n    }\r\n}\r\n","desc":" `required`参数设置是否必填"},{"example":<Demo3 />,"title":" 自动计算色值","code":"/**\r\n*\r\n* @title 自动计算色值\r\n* @description 可应用于选择主色后，自动计算hover和active状态的色值\r\n*\r\n*/\r\nimport React, { Component } from 'react';\r\nimport { ColorPicker } from 'tinper-bee';\r\n\r\nclass Demo3 extends Component {\r\n    autoCalculate = (color,scale) => {\r\n        console.log(color,scale);\r\n    }\r\n    render () {\r\n        return (\r\n            <ColorPicker \r\n                className=\"demo2\"\r\n                label=\"颜色\"\r\n                autoCalculate={this.autoCalculate}\r\n            />\r\n        )\r\n    }\r\n}\r\n","desc":" 可应用于选择主色后，自动计算hover和active状态的色值"}]


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
