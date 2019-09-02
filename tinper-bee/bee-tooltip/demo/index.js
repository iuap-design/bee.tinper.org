import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Drawer from 'bee-drawer';
import Clipboard from 'bee-clipboard'; 
import Button from '../src';



var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var Demo4 = require("./demolist/Demo4");var Demo5 = require("./demolist/Demo5");var Demo6 = require("./demolist/Demo6");var DemoArray = [{"example":<Demo1 />,"title":" 基本Tooltip","code":"/**\r\n * @title 基本Tooltip\r\n * @description trigger 设置显示方式。\r\n */\r\n\r\n\r\nimport React, { Component } from 'react';\nimport { Button, Tooltip } from 'tinper-bee';\r\n\r\n\n\r\n\r\nclass Demo1 extends Component {\r\n\tstate={\r\n\t\tvisible:false\r\n\t}\r\n\r\n\tonHide = (visible) => {\r\n\t\tconsole.log('onHide',visible);\r\n\t\tthis.setState({\r\n\t\t\tvisible:visible\r\n\t\t})\r\n\t}\r\n\r\n\tshow = () => {\r\n\t\tthis.setState({\r\n\t\t\tvisible:!this.state.visible\r\n\t\t})\r\n\t}\r\n\r\n\trender () {\r\n\t\tlet tip = (\r\n\t\t\t<div>\r\n\t\t\t\t这是一个很强的提醒！\r\n\t\t\t</div>\r\n\t\t)\r\n\r\n\t\treturn (\r\n\t\t\t<div className=\"demo-tooltip\">\r\n\t\t\t\t<Tooltip inverse overlay={tip}>\r\n\t\t\t\t\t<Button colors=\"primary\">\r\n\t\t\t\t\t\t鼠标滑过显示\r\n\t\t\t\t\t</Button>\r\n\t\t\t\t</Tooltip>\r\n\t\t\t\t<Tooltip trigger=\"click\" rootClose placement=\"bottom\" overlay={tip} visible={this.state.visible} onHide={this.onHide}>\r\n\t\t\t\t\t<Button style={{ marginLeft: 100 }} colors=\"primary\" onClick={this.show}>\r\n\t\t\t\t\t点击显示\r\n\t\t\t\t\t</Button>\r\n\t\t\t\t</Tooltip>\r\n\t\t\t</div>\r\n\t\t)\r\n\t}\r\n}\r\n\r\nexport default Demo1;","desc":" trigger 设置显示方式。"},{"example":<Demo2 />,"title":" 延时显示Tooltip","code":"/**\r\n * @title 延时显示Tooltip\r\n * @description `delay`参数设置延时显示和隐藏，以下示例为 鼠标悬停两秒后显示\r\n */\r\n\r\n\r\nimport React, { Component } from 'react';\nimport { Button, Tooltip } from 'tinper-bee';\r\n\r\n\n\r\n\r\nclass Demo2 extends Component {\r\n    render () {\r\n        let tip = (\r\n            <div>\r\n                这是一个很强的提醒！\r\n            </div>\r\n        )\r\n\r\n        return (\r\n            <div className=\"demo-tooltip\">\r\n                <Tooltip delay={2000} inverse overlay={tip}>\r\n                    <Button colors=\"primary\">\r\n                        延时显示\r\n                    </Button>\r\n                </Tooltip>\r\n            </div>\r\n        )\r\n    }\r\n}\r\n\r\nexport default Demo2;","desc":" `delay`参数设置延时显示和隐藏，以下示例为 鼠标悬停两秒后显示"},{"example":<Demo3 />,"title":" 受控显示和隐藏","code":"/**\r\n * @title 受控显示和隐藏\r\n * @description `visible`属性控制\r\n */\r\n\r\n\r\nimport React, { Component } from 'react';\nimport { Tooltip } from 'tinper-bee';\r\n\r\nimport classnames from \"classnames\";\r\n\r\n\r\n\r\nclass Demo3 extends Component {\r\n\tstate = {\r\n\t\tvisible: false\r\n\t}\r\n\r\n\thandleChange = (e) => {\r\n\t\tlet value = e.target.value;\r\n\t\tif (Number(value) > 5) {\r\n\t\t\tthis.setState({\r\n\t\t\t\tvisible: false\r\n\t\t\t})\r\n\t\t} else {\r\n\t\t\tthis.setState({\r\n\t\t\t\tvisible: true\r\n\t\t\t})\r\n\t\t}\r\n\t}\r\n\r\n\tonFocus = (e) => {\r\n\t\tlet value = e.target.value;\r\n\t\tif (Number(value) < 5) {\r\n\t\t\tthis.setState({\r\n\t\t\t\tvisible: true\r\n\t\t\t})\r\n\t\t}\r\n\t}\r\n\t//使用控制弹出层显示时的钩子函数\r\n\tonVisibleChange = () => {\r\n\t\tconsole.log('visible changed.')\r\n\t}\r\n\r\n\trender () {\r\n\t\tlet { visible } = this.state;\r\n\t\tlet tip = (\r\n\t\t\t<div>\r\n\t\t\t\t输入的值必须大于5\r\n\t\t\t</div>\r\n\t\t)\r\n\r\n\t\treturn (\r\n\t\t\t<div className=\"demo-tooltip\">\r\n\t\t\t\t<Tooltip\r\n\t\t\t\t\tvisible={visible}\r\n\t\t\t\t\tonVisibleChange={this.onVisibleChange}\r\n\t\t\t\t\tinverse\r\n\t\t\t\t\tplacement=\"right\"\r\n\t\t\t\t\toverlay={tip}>\r\n\t\t\t\t\t<input\r\n\t\t\t\t\t\tclassName={classnames(\"input\", { err: visible })}\r\n\t\t\t\t\t\ttype=\"text\"\r\n\t\t\t\t\t\tonChange={this.handleChange}\r\n\t\t\t\t\t\tonFocus={this.onFocus}\r\n\t\t\t\t\t/>\r\n\t\t\t\t</Tooltip>\r\n\t\t\t</div>\r\n\t\t)\r\n\t}\r\n}\r\n\r\nexport default Demo3;","desc":" `visible`属性控制","scss_code":".demo-tooltip{\n  .input{\n    border: 1px solid #a5adba;\n    border-radius: 3px; \n    &:focus{\n    \tborder-color: #66afe9;\n\t    outline: 0;\n    }\n  }\n  .err{\n    border-color: red;\n    &:focus{\n    \tborder-color:red;\n\t    outline: 0;\n    }\n  }\n} "},{"example":<Demo4 />,"title":" 提示类组件支持出现在可配置的container中","code":"/**\r\n * @title 提示类组件支持出现在可配置的container中\r\n * @description \"container\"可以是DOM元素/React组件/或者返回React组件的函数，注意，容器需要设置position\r\n */\r\n\r\nimport React, { Component } from 'react';\nimport { Button, Tooltip } from 'tinper-bee';\r\n\n\r\n\r\nclass Demo4 extends Component {\r\n\tstate = {\r\n\t\tvisible: false\r\n\t}\r\n\r\n\thandleChange = () => {\r\n\t\tthis.setState(prevState => ({\r\n\t\t\tvisible: !prevState.visible\r\n\t\t}));\r\n\t}\r\n\r\n\trender () {\r\n\t\tlet { visible } = this.state;\r\n\t\treturn (\r\n\t\t\t<div className=\"demo-tooltip\">\r\n\t\t\t\t<div className=\"demo-tooltip-box\">\r\n\t\t\t\t\t<div className=\"demo-tooltip-wrapper\" ref={ref => this.container = ref}>\r\n\t\t\t\t\t\t<Button colors=\"primary\" onClick={this.handleChange} style={{marginRight: 20}}>\r\n\t\t\t\t\t\t\t{visible ? \"隐藏\" : \"显示\"}tooltip\r\n\t\t\t\t\t\t</Button>\r\n\t\t\t\t\t\t<Tooltip\r\n\t\t\t\t\t\t\ttrigger=\"click\"\r\n\t\t\t\t\t\t\toverlay=\"我会跟着移动\"\r\n\t\t\t\t\t\t\tvisible={visible}\r\n\t\t\t\t\t\t\tcontainer={this.container ? this.container : null}\r\n\t\t\t\t\t\t\tplacement=\"right\"\r\n\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t<Button shape=\"border\">\r\n\t\t\t\t\t\t\t\ttooltip会跟随我移动\r\n\t\t\t\t\t\t\t</Button>\r\n\t\t\t\t\t\t</Tooltip>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t);\r\n\t}\r\n}\r\n\r\nexport default Demo4;","desc":" \"container\"可以是DOM元素/React组件/或者返回React组件的函数，注意，容器需要设置position","scss_code":".demo-tooltip {\n  &-box {\n    width: 500px;\n    height: 200px;\n    line-height: 100px;\n    overflow: auto;\n    border: 1px solid #ccc;\n    border-radius: 5px;\n  }\n\n  &-wrapper {\n    width: 900px;\n    position: relative;\n  }\n}"},{"example":<Demo5 />,"title":" 提示类组件支持出现在可配置的container中","code":"/**\n * @title 提示类组件支持出现在可配置的container中\n * @description \"container\"可以是DOM元素/React组件/或者返回React组件的函数，注意，容器需要设置定位\n */\n\nimport React, { Component } from 'react';\nimport { Table, Tooltip } from 'tinper-bee';\n\n\nclass Demo5 extends Component {\n\tconstructor(props) {\n\t\tsuper(props);\n\t\tthis.columns = [\n\t\t\t{\n\t\t\t\ttitle: \"名字\",\n\t\t\t\tdataIndex: \"a\",\n\t\t\t\tkey: \"a\",\n\t\t\t\twidth: 500,\n\t\t\t\trender: (text, record, index) => {\n\t\t\t\t\treturn (\n\t\t\t\t\t\t<Tooltip\n\t\t\t\t\t\t\toverlay={text}\n\t\t\t\t\t\t\tcontainer={this.container ? ReactDOM.findDOMNode(this.container).querySelector(\".u-table-body\") : null}\n\t\t\t\t\t\t\tplacement=\"right\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<span className=\"source\">{text}</span>\n\t\t\t\t\t\t</Tooltip>\n\t\t\t\t\t)\n\t\t\t\t}\n\t\t\t}, {\n\t\t\t\ttitle: \"出处\",\n\t\t\t\tdataIndex: \"e\",\n\t\t\t\tkey: \"e\",\n\t\t\t\twidth: 500,\n\t\t\t\trender: (text, record, index) => {\n\t\t\t\t\treturn (\n\t\t\t\t\t\t<Tooltip\n\t\t\t\t\t\t\toverlay={text}\n\t\t\t\t\t\t\tcontainer={this.container ? ReactDOM.findDOMNode(this.container).querySelector(\".u-table-body\") : null}\n\t\t\t\t\t\t\tplacement=\"right\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<span className=\"source\">{text}</span>\n\t\t\t\t\t\t</Tooltip>\n\t\t\t\t\t)\n\t\t\t\t}\n\t\t\t},\n\t\t\t{\n\t\t\t\ttitle: \"性别\",\n\t\t\t\tdataIndex: \"b\",\n\t\t\t\tkey: \"b\",\n\t\t\t\twidth: 500,\n\t\t\t\trender: (text, record, index) => {\n\t\t\t\t\treturn (\n\t\t\t\t\t\t<Tooltip\n\t\t\t\t\t\t\toverlay={text}\n\t\t\t\t\t\t\tcontainer={this.container ? ReactDOM.findDOMNode(this.container).querySelector(\".u-table-body\") : null}\n\t\t\t\t\t\t\tplacement=\"right\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<span className=\"source\">{text}</span>\n\t\t\t\t\t\t</Tooltip>\n\t\t\t\t\t)\n\t\t\t\t}\n\t\t\t},\n\t\t\t{\n\t\t\t\ttitle: \"年龄\",\n\t\t\t\tdataIndex: \"c\",\n\t\t\t\tkey: \"c\",\n\t\t\t\twidth: 500,\n\t\t\t\trender: (text, record, index) => {\n\t\t\t\t\treturn (\n\t\t\t\t\t\t<Tooltip\n\t\t\t\t\t\t\toverlay={text}\n\t\t\t\t\t\t\tcontainer={this.container ? ReactDOM.findDOMNode(this.container).querySelector(\".u-table-body\") : null}\n\t\t\t\t\t\t\tplacement=\"right\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<span className=\"source\">{text}</span>\n\t\t\t\t\t\t</Tooltip>\n\t\t\t\t\t)\n\t\t\t\t}\n\t\t\t},\n\t\t\t{\n\t\t\t\ttitle: \"武功级别\",\n\t\t\t\tdataIndex: \"d\",\n\t\t\t\twidth: 500,\n\t\t\t\tkey: \"d\",\n\t\t\t\trender: (text, record, index) => {\n\t\t\t\t\treturn (\n\t\t\t\t\t\t<Tooltip\n\t\t\t\t\t\t\toverlay={text}\n\t\t\t\t\t\t\tcontainer={this.container ? ReactDOM.findDOMNode(this.container).querySelector(\".u-table-body\") : null}\n\t\t\t\t\t\t\tplacement=\"right\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<span className=\"source\">{text}</span>\n\t\t\t\t\t\t</Tooltip>\n\t\t\t\t\t)\n\t\t\t\t}\n\t\t\t}\n\t\t];\n\n\t\tthis.state = {\n\t\t\tdata: []\n\t\t};\n\n\t}\n\n\tcomponentDidMount () {\n\t\tthis.getData();\n\t}\n\n\tgetData = () => {\n\t\tsetTimeout(() => {\n\t\t\tlet data = [\n\t\t\t\t{\n\t\t\t\t\ta: \"杨过\",\n\t\t\t\t\tb: \"男\",\n\t\t\t\t\tc: 30,\n\t\t\t\t\td: '内行',\n\t\t\t\t\te: \"神雕侠侣\",\n\t\t\t\t\tkey: \"2\"\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\ta: \"令狐冲\",\n\t\t\t\t\tb: \"男\",\n\t\t\t\t\tc: 41,\n\t\t\t\t\td: '大侠',\n\t\t\t\t\te: \"笑傲江湖\",\n\t\t\t\t\tkey: \"1\"\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\ta: \"郭靖\",\n\t\t\t\t\tb: \"男\",\n\t\t\t\t\tc: 25,\n\t\t\t\t\td: '大侠',\n\t\t\t\t\te: \"射雕英雄传\",\n\t\t\t\t\tkey: \"3\"\n\t\t\t\t}\n\t\t\t];\n\t\t\tthis.setState({\n\t\t\t\tdata\n\t\t\t})\n\t\t}, 50);\n\t}\n\n\trender () {\n\t\treturn (\n\t\t\t<div className=\"demo-tooltip\">\n\t\t\t\t<Table\n\t\t\t\t\tcolumns={this.columns}\n\t\t\t\t\tdata={this.state.data}\n\t\t\t\t\tref={ref => this.container = ref}\n\t\t\t\t/>\n\t\t\t</div>\n\t\t);\n\t}\n}\n\nexport default Demo5;","desc":" \"container\"可以是DOM元素/React组件/或者返回React组件的函数，注意，容器需要设置定位","scss_code":".demo-tooltip{\n .source{\n   cursor: pointer;\n }\n} "},{"example":<Demo6 />,"title":" 位置","code":"/**\r\n *\r\n * @title 位置\r\n * @description placement 参数控制显示位置。位置有 12 个方向。\r\n */\r\n\r\nimport {Component} from 'react';\nimport { Button, Tooltip } from 'tinper-bee';\r\n\r\n\n\r\n\r\nclass Demo6 extends Component {\r\n    constructor(props) {\r\n        super(props);\r\n    }\r\n\r\n    render() {\r\n        const tip = (\r\n            <div>\r\n                <p>这是一个很强的提醒！</p>\r\n\t\t\t\t<p>这是一个很强的提醒！</p>\r\n\t\t\t\t<p>这是一个很强的提醒！</p>\r\n            </div>\r\n        );\r\n        const buttonWidth = 72;\r\n        return (\r\n            <div className=\"demo6\">\r\n                <div style={{ marginLeft: buttonWidth, whiteSpace: 'nowrap' }}>\r\n                    <Tooltip inverse placement=\"topLeft\" overlay={tip}>\r\n                        <Button colors=\"primary\">左上</Button>\r\n                    </Tooltip>\r\n                    <Tooltip inverse placement=\"top\" overlay={tip}>\r\n                        <Button colors=\"primary\">上</Button>\r\n                    </Tooltip>\r\n                    <Tooltip inverse placement=\"topRight\" overlay={tip}>\r\n                        <Button colors=\"primary\">上右</Button>\r\n                    </Tooltip>\r\n                    </div>\r\n                    <div style={{ width: buttonWidth, float: 'left' }}>\r\n                    <Tooltip inverse placement=\"leftTop\" overlay={tip}>\r\n                        <Button colors=\"primary\">左上</Button>\r\n                    </Tooltip>\r\n                    <Tooltip inverse placement=\"left\" overlay={tip}>\r\n                        <Button colors=\"primary\">左</Button>\r\n                    </Tooltip>\r\n                    <Tooltip inverse placement=\"leftBottom\" overlay={tip}>\r\n                        <Button colors=\"primary\">左下</Button>\r\n                    </Tooltip>\r\n                    </div>\r\n                    <div style={{ width: buttonWidth, marginLeft: buttonWidth * 4 + 24 }}>\r\n                    <Tooltip inverse placement=\"rightTop\" overlay={tip}>\r\n                        <Button colors=\"primary\">右上</Button>\r\n                    </Tooltip>\r\n                    <Tooltip inverse placement=\"right\" overlay={tip}>\r\n                        <Button colors=\"primary\">右</Button>\r\n                    </Tooltip>\r\n                    <Tooltip inverse placement=\"rightBottom\" overlay={tip}>\r\n                        <Button colors=\"primary\">右下</Button>\r\n                    </Tooltip>\r\n                    </div>\r\n                    <div style={{ marginLeft: buttonWidth, clear: 'both', whiteSpace: 'nowrap' }}>\r\n                    <Tooltip inverse placement=\"bottomLeft\" overlay={tip}>\r\n                        <Button colors=\"primary\">下左</Button>\r\n                    </Tooltip>\r\n                    <Tooltip inverse placement=\"bottom\" overlay={tip}>\r\n                        <Button colors=\"primary\">下</Button>\r\n                    </Tooltip>\r\n                    <Tooltip inverse placement=\"bottomRight\" overlay={tip}>\r\n                        <Button colors=\"primary\">下右</Button>\r\n                    </Tooltip>\r\n                </div>\r\n            </div>\r\n        )\r\n    }\r\n}\r\n\r\nexport default Demo6;","desc":" placement 参数控制显示位置。位置有 12 个方向。","scss_code":".demo6 {\r\n    margin-left: 250px;\r\n    .u-button {\r\n        margin-right: 8px;\r\n        margin-bottom: 8px;\r\n    }\r\n    .u-tooltip .tooltip-inner {\r\n        h3 {\r\n            margin: 16px 0;\r\n        }\r\n    }\r\n}"}]


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
