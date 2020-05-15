import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Drawer from 'bee-drawer';
import Clipboard from 'bee-clipboard'; 
import Button from '../src';



var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var DemoArray = [{"example":<Demo1 />,"title":" 卡片模式","code":"\r\n/**\r\n *\r\n * @title 卡片模式\r\n * @description 用于嵌套在空间有限的容器中\r\n *\r\n */\r\n\r\nimport React, { Component } from 'react';\r\nimport Calendar from 'bee-calendar';\r\n\r\nfunction onSelect(value) {\r\n    console.log(value);\r\n}\r\n\r\n\r\nclass Demo1 extends Component {\r\n    render() {\r\n        return (\r\n            <div>\r\n               <Calendar\r\n                   style={{ margin: 10 }}\r\n                   fullscreen={false}\r\n                   onSelect={onSelect}\r\n               />\r\n            </div>\r\n        )\r\n    }\r\n}\r\n\r\n\r\nexport  default Demo1","desc":" 用于嵌套在空间有限的容器中"},{"example":<Demo2 />,"title":" 选择日历","code":"\r\n/**\r\n *\r\n * @title 选择日历\r\n * @description 一个通用的日历面板，支持年/月切换。\r\n *\r\n */\r\n\r\nimport React, { Component } from 'react';\r\nimport Calendar from 'bee-calendar';\r\n\r\nfunction  onSelect(value) {\r\n    console.log('onSelect',value);\r\n}\r\nclass Demo2 extends Component {\r\n\r\n    constructor(props, context) {\r\n        super(props, context);\r\n\r\n        this.state =  {\r\n            type:'month',\r\n        }\r\n    }\r\n    onTypeChange(type) {\r\n        this.setState({\r\n            type,\r\n        });\r\n    }\r\n\r\n    onChange(value){\r\n        console.log('onChange',value)\r\n    }\r\n\r\n    render() {\r\n        return (\r\n            <div>\r\n               <Calendar\r\n                   style={{ margin: 10 }}\r\n                   fullscreen\r\n\r\n                   onSelect={onSelect}\r\n                   type={this.state.type}\r\n                   onTypeChange={this.onTypeChange.bind(this)}\r\n                   onChange={this.onChange.bind(this)}\r\n               />\r\n            </div>\r\n        )\r\n    }\r\n}\r\n\r\nexport  default Demo2","desc":" 一个通用的日历面板，支持年/月切换。"},{"example":<Demo3 />,"title":" 多语示例","code":"\r\n/**\r\n *\r\n * @title 多语示例\r\n * @description 多语示例\r\n *\r\n */\r\n\r\nimport React, { Component } from 'react';\r\nimport Calendar from 'bee-calendar';\r\nimport zhCN from 'rc-calendar/lib/locale/zh_CN';\r\n\r\n// 1、设置moment语言\r\n// import moment from 'moment'\r\n// moment.locale('zh-cn')\r\n\r\nfunction onSelect(value) {\r\n    console.log(value);\r\n}\r\n\r\nclass Demo2 extends Component {\r\n\r\n    constructor(props, context) {\r\n        super(props, context);\r\n\r\n        this.state =  {\r\n            type:'month',\r\n        }\r\n    }\r\n\r\n    onTypeChange(type) {\r\n        this.setState({\r\n            type,\r\n        });\r\n    }\r\n\r\n    render() {\r\n        return (\r\n            <div>\r\n               <Calendar\r\n                   style={{ margin: 10 }}\r\n                   fullscreen\r\n                   onSelect={onSelect}\r\n                   type={this.state.type}\r\n                   onTypeChange={this.onTypeChange.bind(this)}\r\n                   locale={zhCN} // 2、设置 locale语言包\r\n               />\r\n            </div>\r\n        )\r\n    }\r\n}\r\n\r\nexport  default Demo2","desc":" 多语示例"}]


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
