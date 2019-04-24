import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Drawer from 'bee-drawer';
import Clipboard from 'bee-clipboard'; 
import Button from '../src';



var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var DemoArray = [{"example":<Demo1 />,"title":" 基本时间选择","code":"/**\n *\n * @title 基本时间选择\n * @description 点击 Timepicker，然后可以在浮层中选择或者输入某一时间。\n *\n */\n\n\n\nimport React, { Component } from 'react';\nimport Timepicker from \"tinper-bee/lib/Timepicker\";\nimport moment from 'moment';\n\nclass Demo1 extends Component {\n\n    onChange(time){\n        console.log(time);\n    }\n    getPopupContainer() {\n        return this.d || document.getElementById('d');\n    }\n    render() {\n        return (\n            <div id={\"d\"}>\n                <Timepicker getPopupContainer={this.getPopupContainer} placeholder=\"选择时间\" onChange={this.onChange.bind(this)} />\n            </div>\n        )\n    }\n}\n\n\n","desc":" 点击 Timepicker，然后可以在浮层中选择或者输入某一时间。"},{"example":<Demo2 />,"title":" 12小时制时间选择","code":"/**\n *\n * @title 12小时制时间选择\n * @description 点击 Timepicker，然后可以在浮层中选择或者输入某一时间。\n *\n */\n\nimport React, { Component } from 'react';\nimport Timepicker from \"tinper-bee/lib/Timepicker\";\nimport moment from 'moment';\n\n\nclass Demo2 extends Component {\n\n    onChange(time,timeString){\n        console.log(time, timeString);\n    }\n    render() {\n        const format = 'h:mm a';\n        const now = moment().hour(0).minute(0);\n        return (\n            <div>\n                <Timepicker\n                    format={format}\n                    showSecond={false}\n                    defaultValue={now}\n                    placeholder=\"选择时间\"\n                    onChange={this.onChange.bind(this)}\n                    use12Hours\n                />\n            </div>\n        )\n    }\n}\n\n","desc":" 点击 Timepicker，然后可以在浮层中选择或者输入某一时间。"},{"example":<Demo3 />,"title":" 限定时间","code":"/**\n *\n * @title 限定时间\n * @description 点击 Timepicker，然后可以在浮层中选择或者输入某一时间。\n *\n */\n\nimport React, { Component } from 'react';\nimport Timepicker from \"tinper-bee/lib/Timepicker\";\nimport moment from 'moment';\n\nconst showSecond = true;\nconst str = showSecond ? 'HH:mm:ss' : 'HH:mm';\n\nclass Demo3 extends Component {\n\n    onChange(value) {\n        console.log(value && value.format(str));\n    }\n\n    generateOptions(length, excludedOptions) {\n        const arr = [];\n        for (let value = 0; value < length; value++) {\n            if (excludedOptions.indexOf(value) < 0) {\n                arr.push(value);\n            }\n        }\n        return arr;\n    }\n\n    disabledHours() {\n        return [0, 1, 2, 3, 4, 5, 6, 7, 8, 22, 23];\n    }\n\n    disabledMinutes(h) {\n        switch (h) {\n            case 9:\n                return this.generateOptions(60, [30]);\n            case 21:\n                return this.generateOptions(60, [0]);\n            default:\n                return this.generateOptions(60, [0, 30]);\n        }\n    }\n\n    disabledSeconds(h, m) {\n        return [h + m % 60];\n    }\n\n    render() {\n        const format = 'h:mm a';\n        const now = moment().hour(0).minute(0);\n        return (\n            <div>\n                <Timepicker\n                    showSecond={showSecond}\n                    defaultValue={now}\n                    onChange={this.onChange.bind(this)}\n                    disabledHours={this.disabledHours}\n                    disabledMinutes={this.disabledMinutes.bind(this)}\n                    disabledSeconds={this.disabledSeconds.bind(this)}\n                />\n            </div>\n        )\n    }\n}\n\n","desc":" 点击 Timepicker，然后可以在浮层中选择或者输入某一时间。"}]


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
