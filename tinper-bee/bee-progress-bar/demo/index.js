import {Col, Row} from 'bee-layout';
import {Panel} from 'bee-panel';
import Button from 'bee-button';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';


const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var Demo4 = require("./demolist/Demo4");var Demo5 = require("./demolist/Demo5");var DemoArray = [{"example":<Demo1 />,"title":" 基本样式展示","code":"/**\r\n * @title 基本样式展示\r\n * @description now 控制实际进度\r\n */\r\n\r\nimport React, { Component } from 'react';\r\nimport { ProgressBar } from 'tinper-bee';\r\n\r\nclass Demo1 extends Component {\r\n\r\n\trender () {\r\n\t\treturn (\r\n\t\t\t<ProgressBar style={{width:30}} now = {40} />\r\n\t\t)\r\n\t}\r\n}\r\n\r\n\r\n","desc":" now 控制实际进度"},{"example":<Demo2 />,"title":" 激活状态 ProgressBar","code":"/**\r\n * @title 激活状态 ProgressBar\r\n * @description 添加参数active,具备动画。\r\n */\r\n\r\nimport React, { Component } from 'react';\r\nimport { ProgressBar } from 'tinper-bee';\r\n\r\nclass Demo2 extends Component {\r\n\trender(){\r\n\t\treturn (\r\n\t\t\t<ProgressBar active now = {40} />\r\n\t\t)\r\n\t}\r\n}\r\n\r\n","desc":" 添加参数active,具备动画。"},{"example":<Demo3 />,"title":" 进度条组合","code":"/**\r\n * @title 进度条组合\r\n * @description 多种状态或者背景的进度条组合成一条。`size`控制大小。\r\n */\r\n\r\nimport React, { Component } from 'react';\r\nimport { ProgressBar } from 'tinper-bee';\r\n\r\nclass Demo3 extends Component {\r\n\trender () {\r\n\t\treturn (\r\n\t\t\t<ProgressBar size=\"sm\">\r\n\t\t\t\t<ProgressBar colors=\"danger\" now = {10} />\r\n\t\t\t\t<ProgressBar colors=\"success\" now = {20} />\r\n\t\t\t\t<ProgressBar colors=\"warning\" now = {30} />\r\n\t\t\t</ProgressBar>\t\r\n\t\t)\r\n\t}\r\n}\r\n\r\n","desc":" 多种状态或者背景的进度条组合成一条。`size`控制大小。"},{"example":<Demo4 />,"title":" 带label ProgressBar","code":"/**\r\n * @title 带label ProgressBar\r\n * @description\r\n */\r\n\r\nimport React, { Component } from 'react';\r\nimport { ProgressBar } from 'tinper-bee';\r\n\r\nclass Demo4 extends Component {\r\n\trender(){\r\n\t\tlet now = 40;\r\n\t\treturn (\r\n\t\t\t<div>\r\n\t\t\t\t<ProgressBar active now = {now} label={`${now}%`} ></ProgressBar>\r\n\t\t\t\t<ProgressBar size=\"sm\" active now = {now} label={`${now}%`} ></ProgressBar>\r\n\t\t\t\t<ProgressBar size=\"xs\" active now = {now} label={`${now}%`} ></ProgressBar>\r\n\t\t\t</div>\r\n\t\t)\r\n\t}\r\n}\r\n\r\n","desc":""},{"example":<Demo5 />,"title":" 网页顶部进度条","code":"/**\r\n * @title 网页顶部进度条\r\n * @description 网页顶部进度条\r\n */\r\n\r\nimport React, { Component } from 'react';\r\nimport { ProgressBar, Button } from 'tinper-bee';\r\n\n\r\n\r\n\r\nclass Demo4 extends Component {\r\n    start = () => {\r\n        ProgressBar.start();\r\n    }\r\n    set = () => {\r\n        ProgressBar.set(0.4);\r\n    }\r\n    inc = () => {\r\n        ProgressBar.inc();\r\n    }\r\n    done = () => {\r\n        ProgressBar.done();\r\n    }\r\n\trender(){\r\n        const style = {marginRight:\"10px\"};\r\n\t\treturn (\r\n\t\t\t<div>\r\n\t\t\t\t<Button style={style} onClick={this.start}>点我开始</Button>\r\n\t\t\t\t<Button style={style} onClick={this.set}>设置固定位置</Button>\r\n\t\t\t\t<Button style={style} onClick={this.inc}>点我加快</Button>\r\n\t\t\t\t<Button onClick={this.done}>点我结束</Button>\r\n\t\t\t</div>\r\n\t\t)\r\n\t}\r\n}\r\n\r\n","desc":" 网页顶部进度条"}]


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
