import {Col, Row} from 'bee-layout';
import {Panel} from '../src';
import Button from 'bee-button';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';


const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var Demo4 = require("./demolist/Demo4");var DemoArray = [{"example":<Demo1 />,"title":" 默认的展示板","code":"/**\r\n *\r\n * @title 默认的展示板\r\n * @description 默认的展示板由header,body和footer组成。\r\n *\r\n */\r\n\r\nimport React, {Component} from 'react';\r\nimport { Panel } from 'tinper-bee';\r\n\r\n\r\nclass Demo1 extends Component {\r\n    render() {\r\n        return (\r\n            <div>\r\n                <Panel header=\"Panel header\" footer='Panel footer'>\r\n                    Panel content\r\n                </Panel>\r\n            </div>\r\n\r\n        )\r\n    }\r\n}\r\n\r\n\r\n\r\n","desc":" 默认的展示板由header,body和footer组成。"},{"example":<Demo2 />,"title":" 手风琴效果的展示板组","code":"/**\r\n *\r\n * @title 手风琴效果的展示板组\r\n * @description 使用PanelGroup组件的accordion属性设置手风琴效果\r\n *\r\n */\r\n\r\nimport React, {Component} from 'react';\r\nimport { Panel, PanelGroup } from 'tinper-bee';\r\n\r\n\r\nclass Demo2 extends Component {\r\n    constructor(...args) {\r\n        super(...args);\r\n        this.state = {\r\n            activeKey: '1'\r\n        };\r\n        this.handleSelect = this.handleSelect.bind(this);\r\n    }\r\n\r\n    handleSelect(activeKey) {\r\n        this.setState({activeKey});\r\n    }\r\n\r\n    render() {\r\n        return (\r\n            <div>\r\n\r\n                <PanelGroup activeKey={this.state.activeKey} onSelect={this.handleSelect} accordion>\r\n                    <Panel header=\"Panel 1\" eventKey=\"1\">Panel 1 content</Panel>\r\n                    <Panel header=\"Panel 2\" eventKey=\"2\">Panel 2 content</Panel>\r\n                </PanelGroup>\r\n\r\n            </div>\r\n        )\r\n    }\r\n}\r\n\r\n\r\n","desc":" 使用PanelGroup组件的accordion属性设置手风琴效果"},{"example":<Demo3 />,"title":" 可折叠的展示板","code":"/**\r\n *\r\n * @title 可折叠的展示板\r\n * @description 设置展示板Panel的collapsible属性设置可折叠\r\n *\r\n */\r\n\r\nimport React, {Component} from 'react';\r\nimport { Panel, Button } from 'tinper-bee';\r\n\n\r\n\r\nclass Demo3 extends Component {\r\n    constructor(...args) {\r\n        super(...args);\r\n        this.state = {\r\n            open: true\r\n        };\r\n    }\r\n\r\n    render() {\r\n        return (\r\n            <div>\r\n                <Button colors=\"primary\" onClick={() => this.setState({open: !this.state.open})}>\r\n                    click\r\n                </Button>\r\n                <Panel collapsible expanded={this.state.open}>\r\n                    \"来玩躲猫猫啊~~\"\r\n                </Panel>\r\n            </div>\r\n        )\r\n    }\r\n}\r\n\r\n\r\n","desc":" 设置展示板Panel的collapsible属性设置可折叠"},{"example":<Demo4 />,"title":" 代码示例展示板","code":"/**\r\n *\r\n * @title 代码示例展示板\r\n * @description 可一键复制代码的展示板\r\n *\r\n */\r\n\r\nimport React, {Component} from 'react';\r\nimport { Panel } from 'tinper-bee';\r\n\r\nconst code = \"<div>\\n  hello world!\\n</div>\";\r\n\r\nclass Demo4 extends Component {\r\n    render() {\r\n        return (\r\n            <div className=\"demoPadding\">\r\n                <Panel copyable>\r\n                    <pre><code className=\"hljs javascript\">{code}</code></pre>\r\n                </Panel>\r\n            </div>\r\n        )\r\n    }\r\n}\r\n\r\n\r\n","desc":" 可一键复制代码的展示板"}]


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
                <Panel copyable collapsible headerContent expanded={this.state.open} colors='bordered' header={header}
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
