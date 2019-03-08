import {Col, Row} from 'bee-layout';
import {Panel} from 'bee-panel';
import Button from 'bee-button';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';


const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var Demo4 = require("./demolist/Demo4");var DemoArray = [{"example":<Demo1 />,"title":" 基本常用Timeline","code":"/**\r\n*\r\n* @title 基本常用Timeline\r\n*\r\n*/\r\n\r\nimport React, { Component } from 'react';\r\nimport { Timeline } from 'tinper-bee';\r\n\r\nclass Demo1 extends Component {\r\n    render () {\r\n        return (\r\n            <Timeline>\r\n                <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>\r\n                <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>\r\n                <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>\r\n                <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>\r\n            </Timeline>\r\n        )\r\n    }\r\n}\r\n\r\n\r\n\r\n","desc":""},{"example":<Demo2 />,"title":" 定制化颜色Timeline","code":"/**\r\n*\r\n* @title 定制化颜色Timeline\r\n* @description 设置圆环的颜色[success,info,danger,warning,news]\r\n*\r\n*/\r\nimport React, { Component } from 'react';\r\nimport { Timeline, Icon } from 'tinper-bee';\r\n\n\r\nclass Demo2 extends Component {\r\n    render () {\r\n        return (\r\n            <Timeline>\r\n                <Timeline.Item color=\"success\">Create a services site 2015-09-01</Timeline.Item>\r\n                <Timeline.Item color=\"info\">Create a services site 2015-09-01</Timeline.Item>\r\n                <Timeline.Item color=\"danger\">\r\n                    <p>Solve initial network problems 1</p>\r\n                    <p>Solve initial network problems 2</p>\r\n                    <p>Solve initial network problems 3 2015-09-01</p>\r\n                </Timeline.Item>\r\n                <Timeline.Item>\r\n                    <p>Technical testing 1</p>\r\n                    <p>Technical testing 2</p>\r\n                    <p>Technical testing 3 2015-09-01</p>\r\n                </Timeline.Item>\r\n            </Timeline>\r\n        )\r\n    }\r\n}\r\n\r\n\r\n\r\n","desc":" 设置圆环的颜色[success,info,danger,warning,news]"},{"example":<Demo3 />,"title":" pending Timeline","code":"/**\r\n*\r\n* @title pending Timeline\r\n* @description 当Timeline还未完成或者正在进行,将幽灵节点放到最后。通过设置 pending={true} 或者 pending={a React Element}。\r\n*\r\n*/\r\nimport React, { Component } from 'react';\r\nimport { Timeline } from 'tinper-bee';\r\n\r\nclass Demo3 extends Component {\r\n    render () {\r\n        return (\r\n            <Timeline pending={<a href=\"#\">See more</a>}>\r\n                <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>\r\n                <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>\r\n                <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>\r\n            </Timeline>\r\n        )\r\n    }\r\n}\r\n\r\n\r\n\r\n\r\n","desc":" 当Timeline还未完成或者正在进行,将幽灵节点放到最后。通过设置 pending={true} 或者 pending={a React Element}。"},{"example":<Demo4 />,"title":" 自定义Timeline节点","code":"/**\r\n*\r\n* @title 自定义Timeline节点\r\n* @description 将icon或者其他自定义元素设置成节点.\r\n*\r\n*/\r\nimport React, { Component } from 'react';\r\nimport { Timeline, Icon } from 'tinper-bee';\r\n\n\r\nclass Demo4 extends Component {\r\n    render () {\r\n        return (\r\n            <Timeline>\r\n                <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>\r\n                <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>\r\n                <Timeline.Item dot={<Icon type=\"uf-time-c-o\" style={{ fontSize: '16px' }} />} color=\"danger\">Technical testing 2015-09-01</Timeline.Item>\r\n                <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>\r\n            </Timeline>\r\n        )\r\n    }\r\n}\r\n\r\n\r\n\r\n\r\n","desc":" 将icon或者其他自定义元素设置成节点."}]


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
