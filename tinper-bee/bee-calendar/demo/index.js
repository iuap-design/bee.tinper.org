import {Col, Row} from 'bee-layout';
import {Panel} from 'bee-panel';
import Button from 'bee-button';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';


const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var DemoArray = [{"example":<Demo1 />,"title":" 卡片模式","code":"\r\n/**\r\n *\r\n * @title 卡片模式\r\n * @description 用于嵌套在空间有限的容器中\r\n *\r\n */\r\n\r\nimport React, { Component } from 'react';\r\nimport Calendar from \"tinper-bee/lib/Calendar\";\r\n\r\n\r\nfunction onSelect(value) {\r\n    console.log(value);\r\n}\r\n\r\n\r\nclass Demo1 extends Component {\r\n    render() {\r\n        return (\r\n            <div>\r\n               <Calendar\r\n                   style={{ margin: 10 }}\r\n                   fullscreen={false}\r\n                   onSelect={onSelect}\r\n               />\r\n            </div>\r\n        )\r\n    }\r\n}\r\n\r\n\r\n","desc":" 用于嵌套在空间有限的容器中"},{"example":<Demo2 />,"title":" 选择日历","code":"\r\n/**\r\n *\r\n * @title 选择日历\r\n * @description 一个通用的日历面板，支持年/月切换。\r\n *\r\n */\r\n\r\nimport React, { Component } from 'react';\r\nimport Calendar from \"tinper-bee/lib/Calendar\";\r\n\r\n\r\nfunction onSelect(value) {\r\n    console.log(value);\r\n}\r\n\r\nclass Demo2 extends Component {\r\n\r\n    constructor(props, context) {\r\n        super(props, context);\r\n\r\n        this.state =  {\r\n            type:'month',\r\n        }\r\n    }\r\n\r\n    onTypeChange(type) {\r\n        this.setState({\r\n            type,\r\n        });\r\n    }\r\n\r\n    render() {\r\n        return (\r\n            <div>\r\n               <Calendar\r\n                   style={{ margin: 10 }}\r\n                   fullscreen\r\n\r\n                   onSelect={onSelect}\r\n                   type={this.state.type}\r\n                   onTypeChange={this.onTypeChange.bind(this)}\r\n\r\n               />\r\n            </div>\r\n        )\r\n    }\r\n}\r\n\r\n","desc":" 一个通用的日历面板，支持年/月切换。"}]


class Demo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({open: !this.state.open})
    }

    render() {
        const {title, example, code, desc, scss_code} = this.props;
        let caret = this.state.open ? CARETUP : CARET;
        let text = this.state.open ? "隐藏代码" : "查看代码";

        const header = (
            <div>
                {example}
                <Button style={{"marginTop": "10px"}} shape="block" onClick={this.handleClick}>
                    {caret}
                    {text}
                </Button>
            </div>
        );
        return (
            <Col md={12}>
                <h3>{title}</h3>
                <p>{desc}</p>
                <Panel collapsible headerContent expanded={this.state.open} colors='bordered' header={header}
                       footerStyle={{padding: 0}}>
                    <pre><code className="hljs javascript">{code}</code></pre>
                    {!!scss_code ? <pre><code className="hljs css">{scss_code}</code></pre> : null}
                </Panel>
            </Col>
        )
    }
}

class DemoGroup extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Row>
                {DemoArray.map((child, index) => {

                    return (
                        <Demo example={child.example} title={child.title} code={child.code} scss_code={child.scss_code}
                              desc={child.desc} key={index}/>
                    )

                })}
            </Row>
        )
    }
}

ReactDOM.render(<DemoGroup/>, document.getElementById('tinperBeeDemo'));