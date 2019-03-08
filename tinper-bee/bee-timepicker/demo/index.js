import {Col, Row} from 'bee-layout';
import {Panel} from 'bee-panel';
import Button from 'bee-button';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';


const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var DemoArray = [{"example":<Demo1 />,"title":" 基本时间选择","code":"/**\n *\n * @title 基本时间选择\n * @description 点击 Timepicker，然后可以在浮层中选择或者输入某一时间。\n *\n */\n\n\n\nimport React, { Component } from 'react';\nimport Timepicker from \"tinper-bee/lib/Timepicker\";\nimport moment from 'moment';\n\nclass Demo1 extends Component {\n\n    onChange(time){\n        console.log(time);\n    }\n    getPopupContainer() {\n        return this.d || document.getElementById('d');\n    }\n    render() {\n        return (\n            <div id={\"d\"}>\n                <Timepicker getPopupContainer={this.getPopupContainer} placeholder=\"选择时间\" onChange={this.onChange.bind(this)} />\n            </div>\n        )\n    }\n}\n\n\n","desc":" 点击 Timepicker，然后可以在浮层中选择或者输入某一时间。"},{"example":<Demo2 />,"title":" 12小时制时间选择","code":"/**\n *\n * @title 12小时制时间选择\n * @description 点击 Timepicker，然后可以在浮层中选择或者输入某一时间。\n *\n */\n\nimport React, { Component } from 'react';\nimport Timepicker from \"tinper-bee/lib/Timepicker\";\nimport moment from 'moment';\n\n\nclass Demo2 extends Component {\n\n    onChange(time,timeString){\n        console.log(time, timeString);\n    }\n    render() {\n        const format = 'h:mm a';\n        const now = moment().hour(0).minute(0);\n        return (\n            <div>\n                <Timepicker\n                    format={format}\n                    showSecond={false}\n                    defaultValue={now}\n                    placeholder=\"选择时间\"\n                    onChange={this.onChange.bind(this)}\n                    use12Hours\n                />\n            </div>\n        )\n    }\n}\n\n","desc":" 点击 Timepicker，然后可以在浮层中选择或者输入某一时间。"},{"example":<Demo3 />,"title":" 限定时间","code":"/**\n *\n * @title 限定时间\n * @description 点击 Timepicker，然后可以在浮层中选择或者输入某一时间。\n *\n */\n\nimport React, { Component } from 'react';\nimport Timepicker from \"tinper-bee/lib/Timepicker\";\nimport moment from 'moment';\n\nconst showSecond = true;\nconst str = showSecond ? 'HH:mm:ss' : 'HH:mm';\n\nclass Demo3 extends Component {\n\n    onChange(value) {\n        console.log(value && value.format(str));\n    }\n\n    generateOptions(length, excludedOptions) {\n        const arr = [];\n        for (let value = 0; value < length; value++) {\n            if (excludedOptions.indexOf(value) < 0) {\n                arr.push(value);\n            }\n        }\n        return arr;\n    }\n\n    disabledHours() {\n        return [0, 1, 2, 3, 4, 5, 6, 7, 8, 22, 23];\n    }\n\n    disabledMinutes(h) {\n        switch (h) {\n            case 9:\n                return this.generateOptions(60, [30]);\n            case 21:\n                return this.generateOptions(60, [0]);\n            default:\n                return this.generateOptions(60, [0, 30]);\n        }\n    }\n\n    disabledSeconds(h, m) {\n        return [h + m % 60];\n    }\n\n    render() {\n        const format = 'h:mm a';\n        const now = moment().hour(0).minute(0);\n        return (\n            <div>\n                <Timepicker\n                    showSecond={showSecond}\n                    defaultValue={now}\n                    onChange={this.onChange.bind(this)}\n                    disabledHours={this.disabledHours}\n                    disabledMinutes={this.disabledMinutes.bind(this)}\n                    disabledSeconds={this.disabledSeconds.bind(this)}\n                />\n            </div>\n        )\n    }\n}\n\n","desc":" 点击 Timepicker，然后可以在浮层中选择或者输入某一时间。"}]


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