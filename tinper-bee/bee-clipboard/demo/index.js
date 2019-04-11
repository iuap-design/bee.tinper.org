import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Drawer from 'bee-drawer';
import Clipboard from '../src';



var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var Demo4 = require("./demolist/Demo4");var DemoArray = [{"example":<Demo1 />,"title":" 默认复制","code":"/**\r\n *\r\n * @title 默认复制\r\n * @description 在复制按钮中定义内容，点击复制到剪切板\r\n *\r\n */\r\n\r\nimport React, { Component } from 'react';\r\nimport { Clipboard } from 'tinper-bee';\r\n\r\nclass Demo1 extends Component {\r\n    render() {\r\n        function success() {\r\n            console.log('success');\r\n        }\r\n\r\n        function error() {\r\n            console.log('error');\r\n        }\r\n\r\n        return (\r\n            <Clipboard action=\"copy\" text=\"默认复制-我将被复制到剪切板\" success={success} error={error}>\r\n\r\n            </Clipboard>\r\n        )\r\n    }\r\n}\r\n\r\n","desc":" 在复制按钮中定义内容，点击复制到剪切板"},{"example":<Demo2 />,"title":" 目标复制","code":"/**\r\n *\r\n * @title 目标复制\r\n * @description 复制目标元素的内容到剪切板\r\n *\r\n */\r\n\r\nimport React, { Component } from 'react';\r\nimport { Clipboard } from 'tinper-bee';\r\n\r\nclass Demo2 extends Component {\r\n    render() {\r\n        function success(){\r\n           console.log('success');\r\n        }\r\n        function error(){\r\n           console.log('error');\r\n        }\r\n        return (\r\n            <div>\r\n                <div id=\"copyContent\" >目标复制-我将被复制到剪切板</div>\r\n                <Clipboard action=\"copy\"  target='#copyContent' success={success} error={error}>\r\n                </Clipboard>\r\n            </div>\r\n        )\r\n    }\r\n}\r\n\r\n","desc":" 复制目标元素的内容到剪切板"},{"example":<Demo3 />,"title":" 目标剪切","code":"/**\r\n *\r\n * @title 目标剪切\r\n * @description 剪切只适用于 textarea 元素\r\n *\r\n */\r\n\r\nimport React, { Component } from 'react';\r\nimport { Clipboard } from 'tinper-bee';\r\n\r\nclass Demo3 extends Component {\r\n    render() {\r\n        function success(){\r\n            console.log('success');\r\n        }\r\n        function error(){\r\n            console.log('error');\r\n        }\r\n        return (\r\n            <div>\r\n                <textarea id=\"cutContent\" >我将被剪切到剪切板</textarea>\r\n                <Clipboard action=\"cut\" target='#cutContent' success={success} error={error}>\r\n                </Clipboard>\r\n            </div>\r\n        )\r\n    }\r\n}\r\n\r\n","desc":" 剪切只适用于 textarea 元素"},{"example":<Demo4 />,"title":" 切换复制组件显示的语言","code":"/**\r\n *\r\n * @title 切换复制组件显示的语言\r\n * @description 通过设置locale属性来修改文字和语言\r\n *\r\n */\r\n\r\nimport React, { Component } from 'react';\r\nimport { Clipboard } from 'tinper-bee';\r\nimport ZhCn from \"bee-locale/build/zh_CN.js\";\r\nimport ZhTw from \"bee-locale/build/zh_TW.js\";\r\nimport EnUS from \"bee-locale/build/en_US.js\";\r\n\r\nclass Demo4 extends Component {\r\n    render() {\r\n        function success() {\r\n            console.log('success');\r\n        }\r\n\r\n        function error() {\r\n            console.log('error');\r\n        }\r\n\r\n        return (\r\n            <Clipboard locale={ZhTw.Clipboard}  action=\"copy\" text=\"默认复制-我将被复制到剪切板\" success={success} error={error}>\r\n\r\n            </Clipboard>\r\n        )\r\n    }\r\n}\r\n\r\n","desc":" 通过设置locale属性来修改文字和语言"}]


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
