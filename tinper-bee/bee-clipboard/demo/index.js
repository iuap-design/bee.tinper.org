
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Button from 'bee-button';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';


const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var Demo4 = require("./demolist/Demo4");var DemoArray = [{"example":<Demo1 />,"title":" 默认复制","code":"/**\n *\n * @title 默认复制\n * @description 在复制按钮中定义内容，点击复制到剪切板\n *\n */\n\nimport React, { Component } from 'react';\nimport { Clipboard } from 'tinper-bee';\n\nclass Demo1 extends Component {\n    render() {\n        function success() {\n            console.log('success');\n        }\n\n        function error() {\n            console.log('error');\n        }\n\n        return (\n            <Clipboard action=\"copy\" text=\"默认复制-我将被复制到剪切板\" success={success} error={error}>\n\n            </Clipboard>\n        )\n    }\n}\n\n","desc":" 在复制按钮中定义内容，点击复制到剪切板"},{"example":<Demo2 />,"title":" 目标复制","code":"/**\n *\n * @title 目标复制\n * @description 复制目标元素的内容到剪切板\n *\n */\n\nimport React, { Component } from 'react';\nimport { Clipboard } from 'tinper-bee';\n\nclass Demo2 extends Component {\n    render() {\n        function success(){\n           console.log('success');\n        }\n        function error(){\n           console.log('error');\n        }\n        return (\n            <div>\n                <div id=\"copyContent\" >目标复制-我将被复制到剪切板</div>\n                <Clipboard action=\"copy\"  target='#copyContent' success={success} error={error}>\n                </Clipboard>\n            </div>\n        )\n    }\n}\n\n","desc":" 复制目标元素的内容到剪切板"},{"example":<Demo3 />,"title":" 目标剪切","code":"/**\n *\n * @title 目标剪切\n * @description 剪切只适用于 textarea 元素\n *\n */\n\nimport React, { Component } from 'react';\nimport { Clipboard } from 'tinper-bee';\n\nclass Demo3 extends Component {\n    render() {\n        function success(){\n            console.log('success');\n        }\n        function error(){\n            console.log('error');\n        }\n        return (\n            <div>\n                <textarea id=\"cutContent\" >我将被剪切到剪切板</textarea>\n                <Clipboard action=\"cut\" target='#cutContent' success={success} error={error}>\n                </Clipboard>\n            </div>\n        )\n    }\n}\n\n","desc":" 剪切只适用于 textarea 元素"},{"example":<Demo4 />,"title":" 切换复制组件显示的语言","code":"/**\n *\n * @title 切换复制组件显示的语言\n * @description 通过设置locale属性来修改文字和语言\n *\n */\n\nimport React, { Component } from 'react';\nimport { Clipboard } from 'tinper-bee';\nimport ZhCn from \"bee-locale/build/zh_CN.js\";\nimport ZhTw from \"bee-locale/build/zh_TW.js\";\nimport EnUS from \"bee-locale/build/en_US.js\";\n\nclass Demo4 extends Component {\n    render() {\n        function success() {\n            console.log('success');\n        }\n\n        function error() {\n            console.log('error');\n        }\n\n        return (\n            <Clipboard locale={ZhTw.Clipboard}  action=\"copy\" text=\"默认复制-我将被复制到剪切板\" success={success} error={error}>\n\n            </Clipboard>\n        )\n    }\n}\n\n","desc":" 通过设置locale属性来修改文字和语言"}]


class Demo extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({ open: !this.state.open })
    }

    render () {
        const { title, example, code, desc, scss_code  } = this.props;
        let caret = this.state.open ? CARETUP : CARET;
        let text = this.state.open ? "隐藏代码" : "查看代码";

        const header = (
            <div>
                {example}
                <Button style={{"marginTop": "10px"}} shape="block" onClick={ this.handleClick }>
                    { caret }
                    { text }
                </Button>
            </div>
        );
        return (
            <Col md={12} >
                <h3>{ title }</h3>
                <p>{ desc }</p>
                <Panel collapsible headerContent expanded={ this.state.open } colors='bordered' header={ header } footerStyle = {{padding: 0}}>
                    <pre><code className="hljs javascript">{ code }</code></pre>
                    { !!scss_code ? <pre><code className="hljs css">{ scss_code }</code></pre> : null }
                </Panel>
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
