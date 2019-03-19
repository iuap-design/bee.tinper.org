import {Col, Row} from 'bee-layout';
import {Panel} from 'bee-panel';
import Button from 'bee-button';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';


const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var DemoArray = [{"example":<Demo1 />,"title":" 卡片模式","code":"\n/**\n *\n * @title 卡片模式\n * @description 用于嵌套在空间有限的容器中\n *\n */\n\nimport React, { Component } from 'react';\nimport Calendar from \"tinper-bee/lib/Calendar\";\n\n\nfunction onSelect(value) {\n    console.log(value);\n}\n\n\nclass Demo1 extends Component {\n    render() {\n        return (\n            <div>\n               <Calendar\n                   style={{ margin: 10 }}\n                   fullscreen={false}\n                   onSelect={onSelect}\n               />\n            </div>\n        )\n    }\n}\n\n\n","desc":" 用于嵌套在空间有限的容器中"},{"example":<Demo2 />,"title":" 选择日历","code":"\n/**\n *\n * @title 选择日历\n * @description 一个通用的日历面板，支持年/月切换。\n *\n */\n\nimport React, { Component } from 'react';\nimport Calendar from \"tinper-bee/lib/Calendar\";\n\n\nfunction onSelect(value) {\n    console.log(value);\n}\n\nclass Demo2 extends Component {\n\n    constructor(props, context) {\n        super(props, context);\n\n        this.state =  {\n            type:'month',\n        }\n    }\n\n    onTypeChange(type) {\n        this.setState({\n            type,\n        });\n    }\n\n    render() {\n        return (\n            <div>\n               <Calendar\n                   style={{ margin: 10 }}\n                   fullscreen\n\n                   onSelect={onSelect}\n                   type={this.state.type}\n                   onTypeChange={this.onTypeChange.bind(this)}\n\n               />\n            </div>\n        )\n    }\n}\n\n","desc":" 一个通用的日历面板，支持年/月切换。"}]


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
            <Col md={12} id={title.trim()} >
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