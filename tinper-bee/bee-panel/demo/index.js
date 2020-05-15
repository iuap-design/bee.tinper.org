import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Con, Row, Col } from 'bee-layout';
import { Panel } from '../src';
import Drawer from 'bee-drawer';
import Clipboard from 'bee-clipboard'; 



var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var Demo4 = require("./demolist/Demo4");var DemoArray = [{"example":<Demo1 />,"title":" 默认的展示板","code":"/**\n *\n * @title 默认的展示板\n * @description 默认的展示板由header,body和footer组成。\n *\n */\n\nimport React, {Component} from 'react';\n\n\n\nclass Demo1 extends Component {\n    render() {\n        return (\n            <div>\n                <Panel header=\"Panel header\" footer='Panel footer'>\n                    Panel content\n                </Panel>\n            </div>\n\n        )\n    }\n}\n\n\nexport default Demo1;\n","desc":" 默认的展示板由header,body和footer组成。"},{"example":<Demo2 />,"title":" 手风琴效果的展示板组","code":"/**\n *\n * @title 手风琴效果的展示板组\n * @description 使用PanelGroup组件的accordion属性设置手风琴效果\n *\n */\n\nimport React, {Component} from 'react';\n\n\n\nclass Demo2 extends Component {\n    constructor(...args) {\n        super(...args);\n        this.state = {\n            activeKey: '1'\n        };\n        this.handleSelect = this.handleSelect.bind(this);\n    }\n\n    handleSelect(activeKey) {\n        this.setState({activeKey});\n    }\n\n    render() {\n        return (\n            <div>\n\n                <PanelGroup activeKey={this.state.activeKey} onSelect={this.handleSelect} accordion>\n                    <Panel header=\"Panel 1\" eventKey=\"1\">Panel 1 content</Panel>\n                    <Panel header=\"Panel 2\" eventKey=\"2\">Panel 2 content</Panel>\n                </PanelGroup>\n\n            </div>\n        )\n    }\n}\n\nexport default Demo2;\n","desc":" 使用PanelGroup组件的accordion属性设置手风琴效果"},{"example":<Demo3 />,"title":" 可折叠的展示板","code":"/**\n *\n * @title 可折叠的展示板\n * @description 设置展示板Panel的collapsible属性设置可折叠\n *\n */\n\nimport React, {Component} from 'react';\nimport { Button } from 'tinper-bee';\n\n\n\nclass Demo3 extends Component {\n    constructor(...args) {\n        super(...args);\n        this.state = {\n            open: true\n        };\n    }\n\n    render() {\n        return (\n            <div>\n                <Button colors=\"primary\" onClick={() => this.setState({open: !this.state.open})}>\n                    click\n                </Button>\n                <Panel collapsible expanded={this.state.open}>\n                    \"来玩躲猫猫啊~~\"\n                </Panel>\n            </div>\n        )\n    }\n}\n\nexport default Demo3;\n","desc":" 设置展示板Panel的collapsible属性设置可折叠"},{"example":<Demo4 />,"title":" 代码示例展示板","code":"/**\n *\n * @title 代码示例展示板\n * @description 可一键复制代码的展示板\n *\n */\n\nimport React, {Component} from 'react';\n\n\nconst code = \"<div>\\n  hello world!\\n</div>\";\n\nclass Demo4 extends Component {\n    render() {\n        return (\n            <div className=\"demoPadding\">\n                <Panel copyable>\n                    <pre><code className=\"hljs javascript\">{code}</code></pre>\n                </Panel>\n            </div>\n        )\n    }\n}\n\n\nexport default Demo4;","desc":" 可一键复制代码的展示板"}]


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
