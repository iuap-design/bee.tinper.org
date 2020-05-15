import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Drawer from 'bee-drawer';
import Clipboard from 'bee-clipboard'; 
import Button from '../src';



var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var DemoArray = [{"example":<Demo1 />,"title":" 基本样式展示","code":"/**\n * @title 基本样式展示\n * @description 以下两种`Alert`颜色深度由props`dark`控制。`colors`控制背景颜色种类。Alert本身不支持关闭功能,需要你控制显示隐藏。\n */\n\nimport React, { Component } from 'react';\nimport { Icon, Alert } from 'tinper-bee';\n\n\n class Demo1 extends Component {\n\trender () {\n\t\treturn (\n\t\t\t<div>\n\t\t\t\t<Alert className=\"demo1-alert\" colors=\"news\">\n\t\t\t\t    <Icon type=\"uf-notification\" />\n\t\t\t\t    <span className=\"alert-text\">\n\t\t\t\t\t\t这是一条很长的信息提示。。。。。。\n\t\t\t\t\t</span>\n\t\t\t\t</Alert>\n\t\t\t\t<Alert colors=\"news\" className=\"demo1-alert\" dark>\n\t\t\t\t    <Icon type=\"uf-notification\" />\n\t\t\t\t    <span className=\"alert-text\">\n\t\t\t\t\t\t这是一条深色的信息提示。。。。。。\n\t\t\t\t\t</span>\n\t\t\t\t</Alert>\n\t\t\t</div>\n\t\t)\n\t}\n}\n\nexport default Demo1;","desc":" 以下两种`Alert`颜色深度由props`dark`控制。`colors`控制背景颜色种类。Alert本身不支持关闭功能,需要你控制显示隐藏。","scss_code":".demo1-alert{\n   margin-bottom: 20px;\n  .alert-text{\n    padding: 0 15px;\n  }\n }"},{"example":<Demo2 />,"title":" 按钮触发`Alert`","code":"/**\n * @title 按钮触发`Alert`\n * @description 业务场景，通过点击触发按钮动作。控制`Alert`显示与否\n */\n\nimport React, { Component } from 'react';\nimport { Button, Alert } from 'tinper-bee';\n\n\n class Demo2 extends Component {\n\tconstructor(props) {\n\t\tsuper(props);\n\t\tthis.state = {\n\t\t\tshowAlert: false\n\t\t}\n\t}\n\thandleAlertDismiss = () => {\n\t\tthis.setState({showAlert: false});\n\t}\n\thanderAlertShow = () => {\n\t\tthis.setState({showAlert: true});\n\t}\n\trender(){\n\t\t\treturn ( \n\t\t\t\t<div>\n\t\t\t\t\t<Button\n\t\t\t\t\t\tcolors=\"warning\"\n\t\t\t\t\t\tonClick={this.handerAlertShow}>\n\t\t\t\t\t\t点击显示\n\t\t\t\t\t</Button>\n\t\t\t\t\t{\n\t\t\t\t\t\tthis.state.showAlert ? (\n\t\t\t\t\t\t\t<Alert\n\t\t\t\t\t\t\t\tcolors=\"warning\"\n\t\t\t\t\t\t\t\tdark\n\t\t\t\t\t\t\t\tonDismiss={this.handleAlertDismiss}\n\t\t\t\t\t\t\t\tclassName=\"demo2-alert\"\n\t\t\t\t\t\t\t\tcloseLabel=\"关闭\">\n\t\t\t\t\t\t\t\t这是一条很有深意的警示\n\t\t\t\t\t\t\t</Alert>\n\t\t\t\t\t\t) : null\n\t\t\t\t\t}\n\n\t\t\t\t</div>\n\t\t\t)\n\t}\n}\n\nexport default Demo2;","desc":" 业务场景，通过点击触发按钮动作。控制`Alert`显示与否","scss_code":".demo2-alert{\n  margin: 20px 0;\n\n}"}]


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
