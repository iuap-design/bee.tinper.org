import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Button from 'bee-button';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';


const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var Demo4 = require("./demolist/Demo4");var Demo5 = require("./demolist/Demo5");var DemoArray = [{"example":<Demo1 />,"title":" 不同方向的气泡确认框","code":"/**\n *\n * @title 不同方向的气泡确认框\n *\n */\n\nimport React, {Component} from 'react';\nimport { Popconfirm, Button } from 'tinper-bee';\n\nclass Demo1 extends Component {\n    constructor(props) {\n        super(props);\n    }\n\n    render() {\n        const content = '您喜欢使用tinper-bee组件库吗？';\n        return (\n            <div className=\"demoPadding\">\n                <Popconfirm trigger=\"click\" placement=\"right\" content={content}>\n                    <Button colors=\"primary\">向右!</Button>\n                </Popconfirm>\n                <Popconfirm trigger=\"click\" placement=\"top\" content={content}>\n                    <Button colors=\"primary\">向上!</Button>\n                </Popconfirm>\n                <Popconfirm trigger=\"click\" placement=\"bottom\" content={content}>\n                    <Button colors=\"primary\">向下!</Button>\n                </Popconfirm>\n                <Popconfirm trigger=\"click\" placement=\"left\" content={content} animation={false}>\n                    <Button colors=\"primary\">向左!</Button>\n                </Popconfirm>\n            </div>\n        )\n    }\n}\n\n\n","desc":"","scss_code":".demoPadding{\n  button{\n    margin: auto 10px;\n  }\n}"},{"example":<Demo2 />,"title":" 不同颜色气泡确认框","code":"/**\n *\n * @title 不同颜色气泡确认框\n * @description 气泡确认框提供黑和白两种颜色，并且支持是否能被全局点击事件关闭。\n *\n */\n\nimport React, { Component } from 'react';\nimport { Popconfirm, Button } from 'tinper-bee';\n\nclass Demo2 extends Component {\n\n    render () {\n        const content = '您喜欢使用tinper-bee组件库吗？';\n        return (\n            <div className=\"demoPadding\">\n            <Popconfirm trigger=\"click\" placement=\"bottom\" content={content} color='dark'>\n              <Button colors=\"primary\">黑色</Button>\n            </Popconfirm>\n            <Popconfirm trigger=\"click\" rootClose placement=\"bottom\" content={content}>\n              <Button colors=\"primary\">点击其他关闭</Button>\n            </Popconfirm>\n            </div>\n        )\n    }\n}\n\n\n","desc":" 气泡确认框提供黑和白两种颜色，并且支持是否能被全局点击事件关闭。","scss_code":".demoPadding{\n  button{\n    margin: auto 10px;\n  }\n}"},{"example":<Demo3 />,"title":" 气泡确认框修改显示语言","code":"/**\n *\n * @title 气泡确认框修改显示语言\n *\n */\nimport React, { Component } from 'react';\nimport { Popconfirm, Button } from 'tinper-bee';\n\nclass Demo3 extends Component {\n    constructor(props){\n        super(props);\n    }\n\n    render () {\n        const content = 'Do you like tinper-bee UI Components Library？';\n        let locale = {\n            lang: 'en',\n            ok: 'OK',\n            cancel: 'Cancel'\n        };\n        return (\n            <div className=\"demoPadding\">\n                <Popconfirm trigger=\"click\" placement=\"right\" content={content} locale={locale}>\n                    <Button colors=\"primary\">Click me</Button>\n                </Popconfirm>\n            </div>\n        )\n    }\n}\n\n\n","desc":"","scss_code":".demoPadding{\n  button{\n    margin: auto 10px;\n  }\n}"},{"example":<Demo4 />,"title":" 控制显示和隐藏","code":"/**\n *\n * @title 控制显示和隐藏\n *\n */\n\nimport React, {Component} from 'react';\nimport { Popconfirm, Button } from 'tinper-bee';\n\nclass Demo4 extends Component {\n    constructor(props) {\n        super(props);\n        this.state = {\n            show: false\n        }\n    }\n\n    handleShow = () => {\n        this.setState({\n            show: !this.state.show\n        })\n    }\n\n    cancel = () => {\n        this.setState({\n            show: false\n        })\n    }\n\n    close = () => {\n        this.setState({\n            show: false\n        })\n    }\n\n    onRootClose = () => {\n        this.setState({\n            show: false\n        })\n    }\n\n    render() {\n        let {show} = this.state;\n        const content = '您喜欢使用tinper-bee组件库吗？';\n        return (\n            <div className=\"demoPadding\">\n                <div className=\"demoPadding-btn-box\">\n                    <Button colors=\"primary\" onClick={this.handleShow}>{show ? \"隐藏popConfirm\" : \"显示popConfirm\"}</Button>\n                </div>\n                <Popconfirm \n                    trigger=\"click\" \n                    placement=\"right\" \n                    content={content}\n                    show={show}\n                    onClick={() => console.log(1234)}\n                    onCancel={this.cancel}\n                    onClose={this.close}\n                    rootClose\n                    onRootClose={this.onRootClose}\n                >\n                    <Button colors=\"primary\">向右!</Button>\n                </Popconfirm>\n            </div>\n        )\n    }\n}\n\n\n","desc":"","scss_code":".demoPadding{\n  &-btn-box{\n    margin: 10px 0;\n  }\n  button{\n    margin: auto 10px;\n  }\n}"},{"example":<Demo5 />,"title":" 传入自定义“确认”和“取消”按钮","code":"/**\n *\n * @title 传入自定义“确认”和“取消”按钮\n *\n */\n\nimport React, { Component } from \"react\";\nimport { Popconfirm, Button } from 'tinper-bee';\n\n\nfunction CloseBtn() {\n  return (\n    <Button colors=\"info\" size=\"sm\">\n      确定\n    </Button>\n  );\n}\nclass Demo5 extends Component {\n  cancel = () => {\n    console.log(\"cancel\");\n  };\n\n  close = () => {\n    console.log(\"close\");\n  };\n\n  render() {\n    const content = \"您喜欢使用tinper-bee组件库吗？\";\n    return (\n      <div className=\"demoPadding\">\n        <Popconfirm\n          trigger=\"click\"\n          placement=\"right\"\n          content={content}\n          onCancel={this.cancel}\n          onClose={this.close}\n          cancel_btn={\n            <Button shape=\"border\" colors=\"info\" size=\"sm\">\n              取消\n            </Button>\n          }\n          close_btn={CloseBtn()}\n        >\n          <Button colors=\"primary\">Popconfirm</Button>\n        </Popconfirm>\n      </div>\n    );\n  }\n}\n\n\n","desc":""}]


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
            <Col md={12} id={title.trim()} >
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