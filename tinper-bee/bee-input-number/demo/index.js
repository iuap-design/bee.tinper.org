import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Drawer from 'bee-drawer';
import Clipboard from 'bee-clipboard'; 
import Button from '../src';



var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var Demo4 = require("./demolist/Demo4");var Demo5 = require("./demolist/Demo5");var Demo6 = require("./demolist/Demo6");var Demo7 = require("./demolist/Demo7");var Demo8 = require("./demolist/Demo8");var Demo9 = require("./demolist/Demo9");var Demo10 = require("./demolist/Demo10");var Demo11 = require("./demolist/Demo11");var Demo12 = require("./demolist/Demo12");var DemoArray = [{"example":<Demo1 />,"title":" 基础示例 ","code":"/**\n *\n* @title 基础示例 \n * @description 最简单输入控制\n *\n */\n\n\nimport React, { Component } from 'react';\nimport { InputNumber } from 'tinper-bee';\n\nclass Demo1 extends Component {\n    constructor(props) {\n        super(props);\n        this.state = {\n            value: 0\n        }\n    }\n\n    handleChange = (value) => {\n        console.log(value);\n        this.setState({\n            value: value\n        })\n    }\n    render () {\n        return (\n            <div>\n                <InputNumber\n                    iconStyle=\"one\"\n                    min={-999999}\n                    max={999999}\n                    onChange={this.handleChange}\n                    value={this.state.value}\n                />\n            </div>\n        )\n    }\n}\n\n","desc":" 最简单输入控制","scss_code":"#tinperBeeDemo .u-input-number {\r\n    width: 200px;\r\n}"},{"example":<Demo2 />,"title":" 默认 iconStyle","code":"/**\n*\n* @title 默认 iconStyle\n* @description 自定义 最大值 max=12,min=5,step=1\n*\n*/\n\nimport React, { Component } from 'react';\nimport { InputNumber } from 'tinper-bee';\n\nclass Demo2 extends Component {\n    constructor(props) {\n        super(props);\n        this.state = {\n            value: 5\n        }\n    }\n    handleChange = (value) => {\n        this.setState({\n            value: value\n        })\n    }\n\trender () {\n\t\treturn (\n\t\t\t<InputNumber\n\t\t\t\tmax={12}\n\t\t\t\tmin={5}\n\t\t\t\tstep={1}\n\t\t\t\tvalue={this.state.value}\n                onChange={ this.handleChange }\n\t\t\t/>\n\t\t)\n\t}\n}\n\n","desc":" 自定义 最大值 max=12,min=5,step=1"},{"example":<Demo3 />,"title":" 第二种iconStyle","code":"/**\n*\n* @title 第二种iconStyle\n* @description 自定义max=12,min=5,step=2\n*\n*/\n\nimport React, { Component } from 'react';\nimport { InputNumber } from 'tinper-bee'; \n\nclass Demo3 extends Component {\n    constructor(props) {\n        super(props);\n        this.state = {\n            value: 0\n        }\n    }\n    handleChange = (value) => {\n        this.setState({\n            value: value\n        })\n    }\n\trender () {\n\t\treturn (\n\t\t\t<InputNumber\n\t\t\t\ticonStyle=\"one\"\n\t\t\t\tmax={12}\n\t\t\t\tmin={-9}\n\t\t\t\tstep={2}\n\t\t\t\tvalue={this.state.value}\n\t\t\t\tonChange={ this.handleChange }\n\t\t\t/>\n\t\t)\n\t}\n}\n\n","desc":" 自定义max=12,min=5,step=2"},{"example":<Demo4 />,"title":" 默认iconStyle不可用状态","code":"/**\n *\n * @title 默认iconStyle不可用状态\n * @description disabled 的单输入控制\n *\n */\n\n\nimport React, {Component} from 'react';\nimport { InputNumber } from 'tinper-bee';\n\nclass Demo4 extends Component {\n    constructor(props) {\n        super(props);\n        this.state = {\n            value: 0\n        }\n    }\n\n    handleChange = (value) => {\n        this.setState({\n            value: value\n        })\n    }\n\n    render() {\n        return (\n            <div>\n                <InputNumber disabled precision={2} value={this.state.value} onChange={ this.handleChange }/>\n            </div>\n        )\n    }\n}\n\n","desc":" disabled 的单输入控制"},{"example":<Demo5 />,"title":" 第二种iconStyle不可用状态","code":"/**\n*\n* @title 第二种iconStyle不可用状态\n* @description 自定义max=12,min=5,step=2 且设置 disabled 处理\n*\n*/\n\nimport React, { Component } from 'react';\nimport { InputNumber } from 'tinper-bee'; \n\nclass Demo5 extends Component {\n    constructor(props) {\n        super(props);\n        this.state = {\n            value: 8\n        }\n    }\n    handleChange = (value) => {\n        this.setState({\n            value: value\n        })\n    }\n\trender () {\n\t\treturn (\n\t\t\t<InputNumber\n\t\t\t\tdisabled\n\t\t\t\ticonStyle=\"one\"\n\t\t\t\tmax={12}\n\t\t\t\tmin={-10}\n\t\t\t\tstep={2}\n\t\t\t\tvalue={this.state.value}\n\t\t\t\tonChange={ this.handleChange }\n\t\t\t/>\n\t\t)\n\t}\n}\n\n","desc":" 自定义max=12,min=5,step=2 且设置 disabled 处理"},{"example":<Demo6 />,"title":" 保留两位小数","code":"/**\n*\n* @title 保留两位小数\n* @description precision={2} 设置小数点后保留两位，失去焦点时数据会格式化为两位小数\n*\n*/\n\nimport React, { Component } from 'react';\nimport { InputNumber } from 'tinper-bee'; \n\nclass Demo6 extends Component {\n    constructor(props) {\n        super(props);\n        this.state = {\n            value: 0\n        }\n    }\n    handleChange = (value) => {\n\t\tconsole.log(value)\n        this.setState({\n            value: value\n        })\n    }\n\trender () {\n\t\treturn (\n\t\t\t<InputNumber\n\t\t\t\ticonStyle=\"one\"\n\t\t\t\tprecision={2}\n\t\t\t\tvalue={this.state.value}\n\t\t\t\tonChange={ this.handleChange }\n\t\t\t/>\n\t\t)\n\t}\n}\n\n","desc":" precision={2} 设置小数点后保留两位，失去焦点时数据会格式化为两位小数"},{"example":<Demo7 />,"title":" 显示千分符示例","code":"/**\n *\n* @title 显示千分符示例\n * @description 设置toThousands={true}  只会在显示的时候带有千分符，onChange里的回调还是原来不带千分符的值\n *\n */\n\n\nimport React, {Component} from 'react';\nimport { InputNumber } from 'tinper-bee';\n\nclass Demo1 extends Component {\n    constructor(props) {\n        super(props);\n        this.state = {\n            value: 0\n        }\n    }\n\n    handleChange = (value) => {\n        console.log('onChange:   '+value)\n        this.setState({\n            value: value\n        })\n    }\n\n    render() {\n        return (\n            <div>\n                <InputNumber \n                    toThousands={true} \n                    precision={2}  \n                    value={this.state.value} \n                    onChange={ this.handleChange }\n                />\n            </div>\n        )\n    }\n}\n\n","desc":" 设置toThousands={true}  只会在显示的时候带有千分符，onChange里的回调还是原来不带千分符的值"},{"example":<Demo8 />,"title":" 基础示例 ","code":"/**\n *\n* @title 基础示例 \n * @description 最简单输入控制\n *\n */\n\n\nimport React, {Component} from 'react';\nimport { InputNumber } from 'tinper-bee';\n\nclass Demo1 extends Component {\n    constructor(props) {\n        super(props);\n        this.state = {\n            value: ''\n        }\n    }\n\n    handleChange = (value) => {\n        console.log(value);\n        this.setState({\n            value: value\n        })\n    }\n\n    render() {\n        return (\n            <div>\n                <InputNumber  precision={2} value={this.state.value} onChange={ this.handleChange }/>\n            </div>\n        )\n    }\n}\n\n","desc":" 最简单输入控制"},{"example":<Demo9 />,"title":" 数字区间基础示例 ","code":"/**\n *\n* @title 数字区间基础示例 \n * @description 使用 InputNumberGroup\n *\n */\n\n\nimport React, {Component} from 'react';\nimport { InputNumber } from 'tinper-bee';\n\nconst InputNumberGroup = InputNumber.InputNumberGroup;\n\nclass Demo9 extends Component {\n    constructor(props) {\n        super(props);\n        this.state = {\n            value: [10,12]\n        }\n    }\n\n    handleChange = (value) => {\n        console.log(value);\n        this.setState({\n            value\n        })\n    }\n\n    render() {\n        return (\n            <div className='demo9'>\n                <InputNumberGroup \n                iconStyle='two'\n                onChange={this.handleChange} \n                placeholder={['请输入最小值','请输入最大值']}/>\n            </div>\n        )\n    }\n}\n\n","desc":" 使用 InputNumberGroup"},{"example":<Demo10 />,"title":" 输入时校验提示 ","code":"/**\r\n *\r\n* @title 输入时校验提示 \r\n * @description 设置 displayCheckPrompt={true}，显示超出限制范围之后的提示。\r\n *\r\n */\r\n\r\n\r\nimport React, { Component } from 'react';\r\nimport { InputNumber } from 'tinper-bee';\r\n\r\nclass Demo10 extends Component {\r\n    render () {\r\n        return (\r\n            <InputNumber\r\n                iconStyle=\"one\"\r\n                min={-100}\r\n                max={100}\r\n                displayCheckPrompt={true}\r\n            />\r\n        )\r\n    }\r\n}\r\n\r\n","desc":" 设置 displayCheckPrompt={true}，显示超出限制范围之后的提示。"},{"example":<Demo11 />,"title":" size 属性 ","code":"/**\n *\n* @title size 属性 \n * @description size=\"md\" / \"lg\" / \"sm\" 分别表示中号(默认)、大号、小号\n *\n */\n\n\nimport React, { Component } from 'react';\nimport { InputNumber } from 'tinper-bee';\n\nclass Demo11 extends Component {\n    render () {\n        return (\n            <div>\n                <InputNumber\n                    size='lg'\n                    iconStyle=\"one\"\n                    min={-999999}\n                    max={999999}\n                />\n                <br/>\n                <InputNumber\n                    size='sm'\n                    iconStyle=\"one\"\n                    min={-999999}\n                    max={999999}\n                />\n                <br/>\n                <InputNumber\n                    size='lg'\n                    min={-999999}\n                    max={999999}\n                />\n                <br/>\n                <InputNumber\n                    size='sm'\n                    min={-999999}\n                    max={999999}\n                />\n            </div>\n        )\n    }\n}\n\n","desc":" size=\"md\" / \"lg\" / \"sm\" 分别表示中号(默认)、大号、小号"},{"example":<Demo12 />,"title":" 多格式组件","code":"/**\n *\n* @title 多格式组件\n * @description 自定义 format ，支持格式自定义\n *  \n */\n\nimport React, { Component } from 'react';\nimport { InputNumber } from 'tinper-bee';\n\nclass Demo12 extends Component {\n    constructor(props) {\n        super(props);\n        this.state = {\n            value:'100000.031416'\n        }\n    }\n\n    handleChange = (value) => {\n        console.log(value);\n        this.setState({\n            value: value\n        })\n    }\n    render () {\n        return (\n            <div className=\"demo12\">\n                销售价格:\n                <InputNumber\n                    iconStyle=\"one\"\n                    // precision={2}\n                    // min={-9007199254740990}\n                    // max={9007199254740990}\n                    // step={1} \n                    format={value => `$ ${value}`.replace(/\\B(?=(\\d{3})+(?!\\d))/g, ',')}\n                    value={this.state.value}\n                />\n\n                销售占比:\n                <InputNumber\n                    iconStyle=\"one\" \n                    format={value => `${value} %`}\n                    value={this.state.value}\n                />\n            </div>\n        )\n    }\n}\n\n","desc":" 自定义 format ，支持格式自定义"}]


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
