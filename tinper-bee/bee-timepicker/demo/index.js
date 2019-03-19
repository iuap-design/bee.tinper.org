import {Col, Row} from 'bee-layout';
import {Panel} from 'bee-panel';
import Button from 'bee-button';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';


const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var DemoArray = [{"example":<Demo1 />,"title":" 基本时间选择","code":"/**\r\n *\r\n * @title 基本时间选择\r\n * @description 点击 Timepicker，然后可以在浮层中选择或者输入某一时间。\r\n *\r\n */\r\n\r\n\r\n\r\nimport React, { Component } from 'react';\r\nimport Timepicker from \"tinper-bee/lib/Timepicker\";\r\nimport moment from 'moment';\r\n\r\nclass Demo1 extends Component {\r\n\r\n    onChange(time){\r\n        console.log(time);\r\n    }\r\n    getPopupContainer() {\r\n        return this.d || document.getElementById('d');\r\n    }\r\n    render() {\r\n        return (\r\n            <div id={\"d\"}>\r\n                <Timepicker getPopupContainer={this.getPopupContainer} placeholder=\"选择时间\" onChange={this.onChange.bind(this)} />\r\n            </div>\r\n        )\r\n    }\r\n}\r\n\r\n\r\n","desc":" 点击 Timepicker，然后可以在浮层中选择或者输入某一时间。"},{"example":<Demo2 />,"title":" 12小时制时间选择","code":"/**\r\n *\r\n * @title 12小时制时间选择\r\n * @description 点击 Timepicker，然后可以在浮层中选择或者输入某一时间。\r\n *\r\n */\r\n\r\nimport React, { Component } from 'react';\r\nimport Timepicker from \"tinper-bee/lib/Timepicker\";\r\nimport moment from 'moment';\r\n\r\n\r\nclass Demo2 extends Component {\r\n\r\n    onChange(time,timeString){\r\n        console.log(time, timeString);\r\n    }\r\n    render() {\r\n        const format = 'h:mm a';\r\n        const now = moment().hour(0).minute(0);\r\n        return (\r\n            <div>\r\n                <Timepicker\r\n                    format={format}\r\n                    showSecond={false}\r\n                    defaultValue={now}\r\n                    placeholder=\"选择时间\"\r\n                    onChange={this.onChange.bind(this)}\r\n                    use12Hours\r\n                />\r\n            </div>\r\n        )\r\n    }\r\n}\r\n\r\n","desc":" 点击 Timepicker，然后可以在浮层中选择或者输入某一时间。"},{"example":<Demo3 />,"title":" 限定时间","code":"/**\r\n *\r\n * @title 限定时间\r\n * @description 点击 Timepicker，然后可以在浮层中选择或者输入某一时间。\r\n *\r\n */\r\n\r\nimport React, { Component } from 'react';\r\nimport Timepicker from \"tinper-bee/lib/Timepicker\";\r\nimport moment from 'moment';\r\n\r\nconst showSecond = true;\r\nconst str = showSecond ? 'HH:mm:ss' : 'HH:mm';\r\n\r\nclass Demo3 extends Component {\r\n\r\n    onChange(value) {\r\n        console.log(value && value.format(str));\r\n    }\r\n\r\n    generateOptions(length, excludedOptions) {\r\n        const arr = [];\r\n        for (let value = 0; value < length; value++) {\r\n            if (excludedOptions.indexOf(value) < 0) {\r\n                arr.push(value);\r\n            }\r\n        }\r\n        return arr;\r\n    }\r\n\r\n    disabledHours() {\r\n        return [0, 1, 2, 3, 4, 5, 6, 7, 8, 22, 23];\r\n    }\r\n\r\n    disabledMinutes(h) {\r\n        switch (h) {\r\n            case 9:\r\n                return this.generateOptions(60, [30]);\r\n            case 21:\r\n                return this.generateOptions(60, [0]);\r\n            default:\r\n                return this.generateOptions(60, [0, 30]);\r\n        }\r\n    }\r\n\r\n    disabledSeconds(h, m) {\r\n        return [h + m % 60];\r\n    }\r\n\r\n    render() {\r\n        const format = 'h:mm a';\r\n        const now = moment().hour(0).minute(0);\r\n        return (\r\n            <div>\r\n                <Timepicker\r\n                    showSecond={showSecond}\r\n                    defaultValue={now}\r\n                    onChange={this.onChange.bind(this)}\r\n                    disabledHours={this.disabledHours}\r\n                    disabledMinutes={this.disabledMinutes.bind(this)}\r\n                    disabledSeconds={this.disabledSeconds.bind(this)}\r\n                />\r\n            </div>\r\n        )\r\n    }\r\n}\r\n\r\n","desc":" 点击 Timepicker，然后可以在浮层中选择或者输入某一时间。"}]


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