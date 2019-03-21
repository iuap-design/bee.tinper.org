import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Drawer from 'bee-drawer';
import Clipboard from 'bee-clipboard'; 
import Button from '../src';



var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var DemoArray = [{"example":<Demo1 />,"title":" 基本样式Badge","code":"/**\n * @title 基本样式Badge\n * @description `colors`控制背景颜色种类。\n */\n\nimport React, { Component } from 'react';\nimport { Badge } from 'tinper-bee';\n\n class Demo1 extends Component {\n\trender () {\n\t\treturn (\n\t\t\t<Badge colors=\"primary\" >8</Badge>\n\t\t)\n\t}\n}\n","desc":" `colors`控制背景颜色种类。"},{"example":<Demo2 />,"title":" 图标Badge","code":"/**\n * @title 图标Badge\n * @description 在子元素里自定义内容\n */\n\nimport React, {Component} from 'react';\nimport { Badge, Icon } from 'tinper-bee';\n\nclass Demo2 extends Component {\n    render() {\n        return (\n            <div>\n                <Badge dataBadge={4} dataBadgePlacement=\"bottom\">\n                    <Icon type=\"uf-bell\"/>\n                </Badge>\n                <Badge dataBadge={4} colors=\"warning\" dataBadgePlacement=\"up\">\n                    <Icon type=\"uf-bell\"/>\n                </Badge>\n            </div>\n        )\n    }\n}\n\n","desc":" 在子元素里自定义内容"}]


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
