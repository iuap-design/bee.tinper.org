import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Button from 'bee-button';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';


const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var Demo4 = require("./demolist/Demo4");var Demo5 = require("./demolist/Demo5");var Demo6 = require("./demolist/Demo6");var Demo7 = require("./demolist/Demo7");var DemoArray = [{"example":<Demo1 />,"title":" 数组选择控件 ","code":"/**\n *\n* @title 数组选择控件 \n * @description 最简单输入控制\n *\n */\n\n\nimport React, {Component} from 'react';\nimport { InputNumber } from 'tinper-bee';\n\nclass Demo1 extends Component {\n    constructor(props) {\n        super(props);\n        this.state = {\n            value: 0\n        }\n    }\n\n    handleChange = (value) => {\n        console.log(value);\n        this.setState({\n            value: value\n        })\n    }\n\n    render() {\n        return (\n            <div>\n                <InputNumber  precision={2} min={0} value={this.state.value} onChange={ this.handleChange }/>\n            </div>\n        )\n    }\n}\n\n","desc":" 最简单输入控制"},{"example":<Demo2 />,"title":" 数组选择控件","code":"/**\n*\n* @title 数组选择控件\n* @description 自定义max=12,min=5,step=1\n*\n*/\n\nimport React, { Component } from 'react';\nimport { InputNumber } from 'tinper-bee';\n\nclass Demo2 extends Component {\n    constructor(props) {\n        super(props);\n        this.state = {\n            value: 0\n        }\n    }\n    handleChange = (value) => {\n        this.setState({\n            value: value\n        })\n    }\n\trender () {\n\t\treturn (\n\t\t\t<InputNumber\n\t\t\t\tmax={12}\n\t\t\t\tmin={5}\n\t\t\t\tstep={1}\n\t\t\t\tvalue={this.state.value}\n\t\t\t\tonChange={ this.handleChange }\n\t\t\t/>\n\t\t)\n\t}\n}\n\n","desc":" 自定义max=12,min=5,step=1"},{"example":<Demo3 />,"title":" 数组选择控件","code":"/**\n*\n* @title 数组选择控件\n* @description 自定义max=12,min=5,step=2\n*\n*/\n\nimport React, { Component } from 'react';\nimport { InputNumber } from 'tinper-bee'; \n\nclass Demo3 extends Component {\n    constructor(props) {\n        super(props);\n        this.state = {\n            value: 0\n        }\n    }\n    handleChange = (value) => {\n        this.setState({\n            value: value\n        })\n    }\n\trender () {\n\t\treturn (\n\t\t\t<InputNumber\n\t\t\t\ticonStyle=\"one\"\n\t\t\t\tmax={12}\n\t\t\t\tmin={5}\n\t\t\t\tstep={2}\n\t\t\t\tvalue={this.state.value}\n\t\t\t\tonChange={ this.handleChange }\n\t\t\t/>\n\t\t)\n\t}\n}\n\n","desc":" 自定义max=12,min=5,step=2"},{"example":<Demo4 />,"title":" 数组选择控件 ","code":"/**\n *\n * @title 数组选择控件 \n * @description disabled 的单输入控制\n *\n */\n\n\nimport React, {Component} from 'react';\nimport { InputNumber } from 'tinper-bee';\n\nclass Demo4 extends Component {\n    constructor(props) {\n        super(props);\n        this.state = {\n            value: 0\n        }\n    }\n\n    handleChange = (value) => {\n        this.setState({\n            value: value\n        })\n    }\n\n    render() {\n        return (\n            <div>\n                <InputNumber disabled precision={2} min={0} value={this.state.value} onChange={ this.handleChange }/>\n            </div>\n        )\n    }\n}\n\n","desc":" disabled 的单输入控制"},{"example":<Demo5 />,"title":" 数组选择控件","code":"/**\n*\n* @title 数组选择控件\n* @description 自定义max=12,min=5,step=2 且设置 disabled 处理\n*\n*/\n\nimport React, { Component } from 'react';\nimport { InputNumber } from 'tinper-bee'; \n\nclass Demo5 extends Component {\n    constructor(props) {\n        super(props);\n        this.state = {\n            value: 8\n        }\n    }\n    handleChange = (value) => {\n        this.setState({\n            value: value\n        })\n    }\n\trender () {\n\t\treturn (\n\t\t\t<InputNumber\n\t\t\t\tdisabled\n\t\t\t\ticonStyle=\"one\"\n\t\t\t\tmax={12}\n\t\t\t\tmin={5}\n\t\t\t\tstep={2}\n\t\t\t\tvalue={this.state.value}\n\t\t\t\tonChange={ this.handleChange }\n\t\t\t/>\n\t\t)\n\t}\n}\n\n","desc":" 自定义max=12,min=5,step=2 且设置 disabled 处理"},{"example":<Demo6 />,"title":" 保留两位小数","code":"/**\n*\n* @title 保留两位小数\n* @description precision={2} 设置小数点后保留两位，失去焦点时数据会格式化为两位小数\n*\n*/\n\nimport React, { Component } from 'react';\nimport { InputNumber } from 'tinper-bee'; \n\nclass Demo6 extends Component {\n    constructor(props) {\n        super(props);\n        this.state = {\n            value: 0\n        }\n    }\n    handleChange = (value) => {\n\t\tconsole.log(value)\n        this.setState({\n            value: value\n        })\n    }\n\trender () {\n\t\treturn (\n\t\t\t<InputNumber\n\t\t\t\ticonStyle=\"one\"\n\t\t\t\tprecision={2}\n\t\t\t\tvalue={this.state.value}\n\t\t\t\tonChange={ this.handleChange }\n\t\t\t/>\n\t\t)\n\t}\n}\n\n","desc":" precision={2} 设置小数点后保留两位，失去焦点时数据会格式化为两位小数"},{"example":<Demo7 />,"title":" 显示千分符示例","code":"/**\n *\n* @title 显示千分符示例\n * @description 设置toThousands={true}  只会在显示的时候带有千分符，onChange里的回调还是原来不带千分符的值\n *\n */\n\n\nimport React, {Component} from 'react';\nimport { InputNumber } from 'tinper-bee';\n\nclass Demo1 extends Component {\n    constructor(props) {\n        super(props);\n        this.state = {\n            value: 0\n        }\n    }\n\n    handleChange = (value) => {\n        console.log('onChange:   '+value)\n        this.setState({\n            value: value\n        })\n    }\n\n    render() {\n        return (\n            <div>\n                <InputNumber toThousands={true} precision={2} min={0} value={this.state.value} onChange={ this.handleChange }/>\n            </div>\n        )\n    }\n}\n\n","desc":" 设置toThousands={true}  只会在显示的时候带有千分符，onChange里的回调还是原来不带千分符的值"}]


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
