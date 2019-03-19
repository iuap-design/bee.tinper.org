import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Button from 'bee-button';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';


const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var DemoArray = [{"example":<Demo1 />,"title":" 基本样式展示","code":"/**\n * @title 基本样式展示\n * @description 以下两种`Alert`颜色深度由props`dark`控制。`colors`控制背景颜色种类。Alert本身不支持关闭功能,需要你控制显示隐藏。\n */\n\nimport React, { Component } from 'react';\nimport { Alert, Icon } from 'tinper-bee';\n\n class Demo1 extends Component {\n\trender () {\n\t\treturn (\n\t\t\t<div>\n\t\t\t\t<Alert className=\"demo1-alert\" colors=\"news\">\n\t\t\t\t    <Icon type=\"uf-notification\" />\n\t\t\t\t    <span className=\"alert-text\">\n\t\t\t\t\t\t这是一条很长的信息提示。。。。。。\n\t\t\t\t\t</span>\n\t\t\t\t</Alert>\n\t\t\t\t<Alert colors=\"news\" className=\"demo1-alert\" dark>\n\t\t\t\t    <Icon type=\"uf-notification\" />\n\t\t\t\t    <span className=\"alert-text\">\n\t\t\t\t\t\t这是一条深色的信息提示。。。。。。\n\t\t\t\t\t</span>\n\t\t\t\t</Alert>\n\t\t\t</div>\n\t\t)\n\t}\n}\n\n","desc":" 以下两种`Alert`颜色深度由props`dark`控制。`colors`控制背景颜色种类。Alert本身不支持关闭功能,需要你控制显示隐藏。","scss_code":".demo1-alert{\n   margin-bottom: 20px;\n  .alert-text{\n    padding: 0 15px;\n  }\n }"},{"example":<Demo2 />,"title":" 按钮触发`Alert`","code":"/**\n * @title 按钮触发`Alert`\n * @description 业务场景，通过点击触发按钮动作。控制`Alert`显示与否\n */\n\nimport React, { Component } from 'react';\nimport { Alert, Button } from 'tinper-bee';\n\n class Demo2 extends Component {\n\tconstructor(props) {\n\t\tsuper(props);\n\t\tthis.state = {\n\t\t\tshowAlert: false\n\t\t}\n\t}\n\thandleAlertDismiss = () => {\n\t\tthis.setState({showAlert: false});\n\t}\n\thanderAlertShow = () => {\n\t\tthis.setState({showAlert: true});\n\t}\n\trender(){\n\t\t\treturn ( \n\t\t\t\t<div>\n\t\t\t\t\t<Button\n\t\t\t\t\t\tcolors=\"warning\"\n\t\t\t\t\t\tonClick={this.handerAlertShow}>\n\t\t\t\t\t\t点击显示\n\t\t\t\t\t</Button>\n\t\t\t\t\t{\n\t\t\t\t\t\tthis.state.showAlert ? (\n\t\t\t\t\t\t\t<Alert\n\t\t\t\t\t\t\t\tcolors=\"warning\"\n\t\t\t\t\t\t\t\tdark\n\t\t\t\t\t\t\t\tonDismiss={this.handleAlertDismiss}\n\t\t\t\t\t\t\t\tclassName=\"demo2-alert\"\n\t\t\t\t\t\t\t\tcloseLabel=\"关闭\">\n\t\t\t\t\t\t\t\t这是一条很有深意的警示\n\t\t\t\t\t\t\t</Alert>\n\t\t\t\t\t\t) : null\n\t\t\t\t\t}\n\n\t\t\t\t</div>\n\t\t\t)\n\t}\n}\n\n","desc":" 业务场景，通过点击触发按钮动作。控制`Alert`显示与否","scss_code":".demo2-alert{\n  margin: 20px 0;\n\n}"}]


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
