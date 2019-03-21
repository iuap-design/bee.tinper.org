import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Drawer from 'bee-drawer';
import Clipboard from 'bee-clipboard'; 
import Button from '../src';



var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var Demo4 = require("./demolist/Demo4");var Demo5 = require("./demolist/Demo5");var DemoArray = [{"example":<Demo1 />,"title":" 基本Tooltip","code":"/**\n * @title 基本Tooltip\n * @description `placement`参数控制显示位置，`trigger`设置显示方式。\n */\n\n\nimport React, { Component } from 'react';\nimport { Tooltip, Button } from 'tinper-bee';\n\n\nclass Demo1 extends Component {\n\n\trender () {\n\t\tlet tip = (\n\t\t\t<div>\n\t\t\t\t这是一个很强的提醒！\n\t\t\t</div>\n\t\t)\n\n\t\treturn (\n\t\t\t<div className=\"demo-tooltip\">\n\t\t\t\t<Tooltip inverse overlay={tip}>\n\t\t\t\t\t<Button colors=\"primary\">\n\t\t\t\t\t\t请拂过我的脸庞\n\t\t\t\t\t</Button>\n\t\t\t\t</Tooltip>\n\t\t\t\t<Tooltip trigger=\"click\" rootClose placement=\"bottom\" overlay={tip}>\n\t\t\t\t\t<Button style={{ marginLeft: 100 }} colors=\"primary\">\n\t\t\t\t\t\t轻轻触碰我的指尖\n\t\t\t\t\t</Button>\n\t\t\t\t</Tooltip>\n\t\t\t</div>\n\t\t)\n\t}\n}\n\n","desc":" `placement`参数控制显示位置，`trigger`设置显示方式。"},{"example":<Demo2 />,"title":" 延时显示Tooltip","code":"/**\n * @title 延时显示Tooltip\n * @description `delay`参数设置延时显示和隐藏，以下示例为 鼠标悬停两秒后显示\n */\n\n\nimport React, { Component } from 'react';\nimport { Tooltip, Button } from 'tinper-bee';\n\n\nclass Demo2 extends Component {\n    render () {\n        let tip = (\n            <div>\n                这是一个很强的提醒！\n            </div>\n        )\n\n        return (\n            <div className=\"demo-tooltip\">\n                <Tooltip delay={2000} inverse overlay={tip}>\n                    <Button colors=\"primary\">\n                        延时显示\n                    </Button>\n                </Tooltip>\n            </div>\n        )\n    }\n}\n\n","desc":" `delay`参数设置延时显示和隐藏，以下示例为 鼠标悬停两秒后显示"},{"example":<Demo3 />,"title":" 受控显示和隐藏","code":"/**\n * @title 受控显示和隐藏\n * @description `visible`属性控制\n */\n\n\nimport React, { Component } from 'react';\nimport { Tooltip } from 'tinper-bee';\nimport classnames from \"classnames\";\n\n\n\nclass Demo3 extends Component {\n\tstate = {\n\t\tvisible: false\n\t}\n\n\thandleChange = (e) => {\n\t\tlet value = e.target.value;\n\t\tif (Number(value) > 5) {\n\t\t\tthis.setState({\n\t\t\t\tvisible: false\n\t\t\t})\n\t\t} else {\n\t\t\tthis.setState({\n\t\t\t\tvisible: true\n\t\t\t})\n\t\t}\n\t}\n\n\trender () {\n\t\tlet { visible } = this.state;\n\t\tlet tip = (\n\t\t\t<div>\n\t\t\t\t输入的值必须大于5\n\t\t\t</div>\n\t\t)\n\n\t\treturn (\n\t\t\t<div className=\"demo-tooltip\">\n\t\t\t\t<Tooltip\n\t\t\t\t\tvisible={visible}\n\t\t\t\t\tinverse\n\t\t\t\t\tplacement=\"right\"\n\t\t\t\t\toverlay={tip}>\n\t\t\t\t\t<input\n\t\t\t\t\t\tclassName={classnames(\"input\", { err: visible })}\n\t\t\t\t\t\ttype=\"text\"\n\t\t\t\t\t\tonChange={this.handleChange}\n\t\t\t\t\t/>\n\t\t\t\t</Tooltip>\n\t\t\t</div>\n\t\t)\n\t}\n}\n\n","desc":" `visible`属性控制","scss_code":".demo-tooltip{\n  .input{\n    border: 1px solid #a5adba;\n    border-radius: 3px; \n    &:focus{\n    \tborder-color: #66afe9;\n\t    outline: 0;\n    }\n  }\n  .err{\n    border-color: red;\n    &:focus{\n    \tborder-color:red;\n\t    outline: 0;\n    }\n  }\n} "},{"example":<Demo4 />,"title":" 提示类组件支持出现在可配置的container中","code":"/**\n * @title 提示类组件支持出现在可配置的container中\n * @description \"container\"可以是DOM元素/React组件/或者返回React组件的函数，注意，容器需要设置position\n */\n\nimport React, { Component } from 'react';\nimport { Tooltip, Button } from 'tinper-bee';\n\nclass Demo4 extends Component {\n\tstate = {\n\t\tvisible: false\n\t}\n\n\thandleChange = () => {\n\t\tthis.setState(prevState => ({\n\t\t\tvisible: !prevState.visible\n\t\t}));\n\t}\n\n\trender () {\n\t\tlet { visible } = this.state;\n\t\treturn (\n\t\t\t<div className=\"demo-tooltip\">\n\t\t\t\t<div className=\"demo-tooltip-box\">\n\t\t\t\t\t<div className=\"demo-tooltip-wrapper\" ref={ref => this.container = ref}>\n\t\t\t\t\t\t<Button colors=\"primary\" onClick={this.handleChange} style={{marginRight: 20}}>\n\t\t\t\t\t\t\t{visible ? \"隐藏\" : \"显示\"}tooltip\n\t\t\t\t\t\t</Button>\n\t\t\t\t\t\t<Tooltip\n\t\t\t\t\t\t\ttrigger=\"click\"\n\t\t\t\t\t\t\toverlay=\"我会跟着移动\"\n\t\t\t\t\t\t\tvisible={visible}\n\t\t\t\t\t\t\tcontainer={this.container ? this.container : null}\n\t\t\t\t\t\t\tplacement=\"right\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<Button shape=\"border\">\n\t\t\t\t\t\t\t\ttooltip会跟随我移动\n\t\t\t\t\t\t\t</Button>\n\t\t\t\t\t\t</Tooltip>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t);\n\t}\n}\n\n","desc":" \"container\"可以是DOM元素/React组件/或者返回React组件的函数，注意，容器需要设置position","scss_code":".demo-tooltip {\n  &-box {\n    width: 500px;\n    height: 200px;\n    line-height: 100px;\n    overflow: auto;\n    border: 1px solid #ccc;\n    border-radius: 5px;\n  }\n\n  &-wrapper {\n    width: 900px;\n    position: relative;\n  }\n}"},{"example":<Demo5 />,"title":" 提示类组件支持出现在可配置的container中","code":"/**\n * @title 提示类组件支持出现在可配置的container中\n * @description \"container\"可以是DOM元素/React组件/或者返回React组件的函数，注意，容器需要设置定位\n */\n\nimport React, { Component } from 'react';\nimport { Tooltip, Table } from 'tinper-bee';\n\nclass Demo5 extends Component {\n\tconstructor(props) {\n\t\tsuper(props);\n\t\tthis.columns = [\n\t\t\t{\n\t\t\t\ttitle: \"名字\",\n\t\t\t\tdataIndex: \"a\",\n\t\t\t\tkey: \"a\",\n\t\t\t\twidth: 500\n\t\t\t}, {\n\t\t\t\ttitle: \"出处\",\n\t\t\t\tdataIndex: \"e\",\n\t\t\t\tkey: \"e\",\n\t\t\t\twidth: 500,\n\t\t\t\trender: (text, record, index) => {\n\t\t\t\t\treturn (\n\t\t\t\t\t\t<Tooltip\n\t\t\t\t\t\t\ttrigger=\"click\"\n\t\t\t\t\t\t\toverlay={text}\n\t\t\t\t\t\t\tcontainer={this.container ? ReactDOM.findDOMNode(this.container).querySelector(\".u-table-body\") : null}\n\t\t\t\t\t\t\tplacement=\"bottom\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<span className=\"source\">{text}</span>\n\t\t\t\t\t\t</Tooltip>\n\t\t\t\t\t)\n\t\t\t\t}\n\t\t\t},\n\t\t\t{\n\t\t\t\ttitle: \"性别\",\n\t\t\t\tdataIndex: \"b\",\n\t\t\t\tkey: \"b\",\n\t\t\t\twidth: 500\n\t\t\t},\n\t\t\t{\n\t\t\t\ttitle: \"年龄\",\n\t\t\t\tdataIndex: \"c\",\n\t\t\t\tkey: \"c\",\n\t\t\t\twidth: 500\n\t\t\t},\n\t\t\t{\n\t\t\t\ttitle: \"武功级别\",\n\t\t\t\tdataIndex: \"d\",\n\t\t\t\twidth: 500,\n\t\t\t\tkey: \"d\"\n\t\t\t}\n\t\t];\n\n\t\tthis.state = {\n\t\t\tdata: []\n\t\t};\n\n\t}\n\n\tcomponentDidMount () {\n\t\tthis.getData();\n\t}\n\n\tgetData = () => {\n\t\tsetTimeout(() => {\n\t\t\tlet data = [\n\t\t\t\t{\n\t\t\t\t\ta: \"杨过\",\n\t\t\t\t\tb: \"男\",\n\t\t\t\t\tc: 30,\n\t\t\t\t\td: '内行',\n\t\t\t\t\te: \"神雕侠侣\",\n\t\t\t\t\tkey: \"2\"\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\ta: \"令狐冲\",\n\t\t\t\t\tb: \"男\",\n\t\t\t\t\tc: 41,\n\t\t\t\t\td: '大侠',\n\t\t\t\t\te: \"笑傲江湖\",\n\t\t\t\t\tkey: \"1\"\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\ta: \"郭靖\",\n\t\t\t\t\tb: \"男\",\n\t\t\t\t\tc: 25,\n\t\t\t\t\td: '大侠',\n\t\t\t\t\te: \"射雕英雄传\",\n\t\t\t\t\tkey: \"3\"\n\t\t\t\t}\n\t\t\t];\n\t\t\tthis.setState({\n\t\t\t\tdata\n\t\t\t})\n\t\t}, 50);\n\t}\n\n\trender () {\n\t\treturn (\n\t\t\t<div className=\"demo-tooltip\">\n\t\t\t\t<Table\n\t\t\t\t\tcolumns={this.columns}\n\t\t\t\t\tdata={this.state.data}\n\t\t\t\t\tref={ref => this.container = ref}\n\t\t\t\t/>\n\t\t\t</div>\n\t\t);\n\t}\n}\n\n","desc":" \"container\"可以是DOM元素/React组件/或者返回React组件的函数，注意，容器需要设置定位","scss_code":".demo-tooltip{\n .source{\n   cursor: pointer;\n }\n} "}]


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
