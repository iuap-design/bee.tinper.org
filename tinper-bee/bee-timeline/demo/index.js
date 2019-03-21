import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Drawer from 'bee-drawer';
import Clipboard from 'bee-clipboard'; 
import Button from '../src';



var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var Demo4 = require("./demolist/Demo4");var DemoArray = [{"example":<Demo1 />,"title":" 基本常用Timeline","code":"/**\n*\n* @title 基本常用Timeline\n*\n*/\n\nimport React, { Component } from 'react';\nimport { Timeline } from 'tinper-bee';\n\nclass Demo1 extends Component {\n    render () {\n        return (\n            <Timeline>\n                <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>\n                <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>\n                <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>\n                <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>\n            </Timeline>\n        )\n    }\n}\n\n\n\n","desc":""},{"example":<Demo2 />,"title":" 定制化颜色Timeline","code":"/**\n*\n* @title 定制化颜色Timeline\n* @description 设置圆环的颜色[success,info,danger,warning,news]\n*\n*/\nimport React, { Component } from 'react';\nimport { Timeline, Icon } from 'tinper-bee';\n\nclass Demo2 extends Component {\n    render () {\n        return (\n            <Timeline>\n                <Timeline.Item color=\"success\">Create a services site 2015-09-01</Timeline.Item>\n                <Timeline.Item color=\"info\">Create a services site 2015-09-01</Timeline.Item>\n                <Timeline.Item color=\"danger\">\n                    <p>Solve initial network problems 1</p>\n                    <p>Solve initial network problems 2</p>\n                    <p>Solve initial network problems 3 2015-09-01</p>\n                </Timeline.Item>\n                <Timeline.Item>\n                    <p>Technical testing 1</p>\n                    <p>Technical testing 2</p>\n                    <p>Technical testing 3 2015-09-01</p>\n                </Timeline.Item>\n            </Timeline>\n        )\n    }\n}\n\n\n\n","desc":" 设置圆环的颜色[success,info,danger,warning,news]"},{"example":<Demo3 />,"title":" pending Timeline","code":"/**\n*\n* @title pending Timeline\n* @description 当Timeline还未完成或者正在进行,将幽灵节点放到最后。通过设置 pending={true} 或者 pending={a React Element}。\n*\n*/\nimport React, { Component } from 'react';\nimport { Timeline } from 'tinper-bee';\n\nclass Demo3 extends Component {\n    render () {\n        return (\n            <Timeline pending={<a href=\"#\">See more</a>}>\n                <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>\n                <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>\n                <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>\n            </Timeline>\n        )\n    }\n}\n\n\n\n\n","desc":" 当Timeline还未完成或者正在进行,将幽灵节点放到最后。通过设置 pending={true} 或者 pending={a React Element}。"},{"example":<Demo4 />,"title":" 自定义Timeline节点","code":"/**\n*\n* @title 自定义Timeline节点\n* @description 将icon或者其他自定义元素设置成节点.\n*\n*/\nimport React, { Component } from 'react';\nimport { Timeline, Icon } from 'tinper-bee';\n\nclass Demo4 extends Component {\n    render () {\n        return (\n            <Timeline>\n                <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>\n                <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>\n                <Timeline.Item dot={<Icon type=\"uf-time-c-o\" style={{ fontSize: '16px' }} />} color=\"danger\">Technical testing 2015-09-01</Timeline.Item>\n                <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>\n            </Timeline>\n        )\n    }\n}\n\n\n\n\n","desc":" 将icon或者其他自定义元素设置成节点."}]


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
