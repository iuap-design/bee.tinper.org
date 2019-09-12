import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Drawer from 'bee-drawer';
import Clipboard from 'bee-clipboard'; 
import Button from '../src';



var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var DemoArray = [{"example":<Demo1 />,"title":" 卡片模式","code":"\n/**\n *\n * @title 卡片模式\n * @description 用于嵌套在空间有限的容器中\n *\n */\n\nimport React, { Component } from 'react';\nimport Calendar from 'bee-calendar/index';\n\nfunction onSelect(value) {\n    console.log(value);\n}\n\n\nclass Demo1 extends Component {\n    render() {\n        return (\n            <div>\n               <Calendar\n                   style={{ margin: 10 }}\n                   fullscreen={false}\n                   onSelect={onSelect}\n               />\n            </div>\n        )\n    }\n}\n\n\nexport  default Demo1","desc":" 用于嵌套在空间有限的容器中"},{"example":<Demo2 />,"title":" 选择日历","code":"\n/**\n *\n * @title 选择日历\n * @description 一个通用的日历面板，支持年/月切换。\n *\n */\n\nimport React, { Component } from 'react';\nimport Calendar from 'bee-calendar/index';\n\n\nfunction onSelect(value) {\n    console.log(value);\n}\n\nclass Demo2 extends Component {\n\n    constructor(props, context) {\n        super(props, context);\n\n        this.state =  {\n            type:'month',\n        }\n    }\n\n    onTypeChange(type) {\n        this.setState({\n            type,\n        });\n    }\n\n    render() {\n        return (\n            <div>\n               <Calendar\n                   style={{ margin: 10 }}\n                   fullscreen\n\n                   onSelect={onSelect}\n                   type={this.state.type}\n                   onTypeChange={this.onTypeChange.bind(this)}\n\n               />\n            </div>\n        )\n    }\n}\n\nexport  default Demo2","desc":" 一个通用的日历面板，支持年/月切换。"},{"example":<Demo3 />,"title":" 多语示例","code":"\n/**\n *\n * @title 多语示例\n * @description 多语示例\n *\n */\n\nimport React, { Component } from 'react';\nimport Calendar from 'bee-calendar/index';\nimport zhCN from 'rc-calendar/lib/locale/zh_CN';\n\n// 1、设置moment语言\n// import moment from 'moment'\n// moment.locale('zh-cn')\n\nfunction onSelect(value) {\n    console.log(value);\n}\n\nclass Demo2 extends Component {\n\n    constructor(props, context) {\n        super(props, context);\n\n        this.state =  {\n            type:'month',\n        }\n    }\n\n    onTypeChange(type) {\n        this.setState({\n            type,\n        });\n    }\n\n    render() {\n        return (\n            <div>\n               <Calendar\n                   style={{ margin: 10 }}\n                   fullscreen\n                   onSelect={onSelect}\n                   type={this.state.type}\n                   onTypeChange={this.onTypeChange.bind(this)}\n                   locale={zhCN} // 2、设置 locale语言包\n               />\n            </div>\n        )\n    }\n}\n\nexport  default Demo2","desc":" 多语示例"}]


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
