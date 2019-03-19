import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Button from '../src';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';


const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var Demo4 = require("./demolist/Demo4");var Demo5 = require("./demolist/Demo5");var DemoArray = [{"example":<Demo1 />,"title":" 默认按钮","code":"/**\n *\n * @title 默认按钮\n * @description 主按钮、次按钮用于按钮组合中的寓意[eg: 弹框中 确定，取消]、事件\n *\n */\n\nimport React, { Component } from 'react';\nimport { Button } from 'tinper-bee';\n\n class Demo1 extends Component {\n\n    open() {\n       alert(\"onClick\");\n    }\n\n    render () {\n        return (\n            <div className=\"demoPadding\">\n                <Button colors=\"primary\" onClick={ this.open } >主按钮</Button>\n                <Button colors=\"secondary\">次按钮</Button>\n            </div>\n        )\n    }\n}\n\n\n","desc":" 主按钮、次按钮用于按钮组合中的寓意[eg: 弹框中 确定，取消]、事件","scss_code":".demoPadding{\n  button{\n    margin: auto 5px;\n  }\n  .divider{\n    margin: 6px 0;\n    height: 1px;\n    overflow: hidden;\n    background-color: #fff;\n  }\n}"},{"example":<Demo2 />,"title":" 按钮属性、状态","code":"/**\n *\n * @title 按钮属性、状态\n * @description 按钮属性、状态 [isSubmit 是否作为form的提交按钮]\n * \n */\n\nimport React, { Component } from 'react';\nimport { Button } from 'tinper-bee';\n\n class Demo2 extends Component {\n    render () {\n        return (\n            <div className=\"demoPadding\">\n                <Button colors=\"primary\" isSubmit={true}>Default</Button>\n                <Button disabled>disabled</Button>\n                <Button bordered>border</Button>\n                <Button colors=\"primary\" shape=\"round\">round</Button> \n            </div>\n        )\n    }\n}\n\n\n","desc":" 按钮属性、状态 [isSubmit 是否作为form的提交按钮]"},{"example":<Demo3 />,"title":" 图标按钮","code":"/**\n *\n * @title 图标按钮\n * @description 当需要在 Button 内嵌入图标时，可以在 Button 内使用 Icon 组件。\n *\n */\n\nimport React, { Component } from 'react';\nimport { Button, Icon } from 'tinper-bee';\n\nclass Demo3 extends Component {\n    render () {\n        return (\n            <div className=\"demo3 demoPadding\">\n                <Button colors=\"primary\" shape=\"icon\"><Icon type='uf-search' /></Button>\n                <Button colors=\"primary\"><Icon type='uf-search' />Search</Button>\n                <Button colors=\"secondary\" shape=\"icon\"><Icon type='uf-del' /></Button>\n                <Button colors=\"secondary\"><Icon type='uf-del' />Delete</Button>\n                <Button colors=\"info\" shape=\"icon\"><Icon type='uf-cloud-up' /></Button>\n                <Button colors=\"info\"><Icon type='uf-cloud-up' />Upload</Button>\n                <Button shape=\"icon\" bordered><Icon type='uf-pencil' /></Button>\n                <Button bordered><Icon type='uf-pencil' />Edit</Button>\n            </div>\n        )\n    }\n}\n\n","desc":" 当需要在 Button 内嵌入图标时，可以在 Button 内使用 Icon 组件。","scss_code":".demo3{\n    .u-button-icon + .u-button i{\n        padding-left: 0;\n    }\n}"},{"example":<Demo4 />,"title":" 按钮尺寸","code":"/**\n *\n * @title 按钮尺寸\n * @description 按钮有小、中、大、巨大四种尺寸。通过设置 size 为 sm、lg、xg 分别把按钮设为小、大、巨大尺寸。若不设置 size，则尺寸为中。\n *\n */\n\nimport React, { Component } from 'react';\nimport { Button } from 'tinper-bee';\n\nclass Demo4 extends Component {\n    render () {\n        return (\n            <div className=\"demoPadding\">\n                <Button size=\"sm\" colors=\"primary\">小按钮</Button>\n                <Button colors=\"primary\">默认</Button>\n                <Button size=\"lg\" colors=\"primary\">大按钮</Button>\n                <Button size=\"xg\" colors=\"primary\">巨大按钮</Button>\n            </div>\n        )\n    }\n}\n\n","desc":" 按钮有小、中、大、巨大四种尺寸。通过设置 size 为 sm、lg、xg 分别把按钮设为小、大、巨大尺寸。若不设置 size，则尺寸为中。"},{"example":<Demo5 />,"title":" 不同颜色的按钮","code":"/**\n *\n * @title 不同颜色的按钮\n * @description 通过`colors`属性控制按钮颜色\n *\n */\n\nimport React, { Component } from 'react';\nimport { Button } from 'tinper-bee';\n\n class Demo5 extends Component {\n\n    render () {\n        return (\n            <div className=\"demoPadding\">\n                    <Button colors=\"primary\">primary</Button>\n                    <Button colors=\"success\">success</Button>\n                    <Button colors=\"info\">info</Button>\n                    <Button colors=\"warning\">warning</Button>\n                    <Button colors=\"danger\">danger</Button>\n                    <Button colors=\"dark\">dark</Button>\n                <div className=\"divider\"></div>\n                    <Button shape=\"border\" colors=\"primary\">primary</Button>\n                    <Button shape=\"border\" colors=\"success\">success</Button>\n                    <Button shape=\"border\" colors=\"info\">info</Button>\n                    <Button shape=\"border\" colors=\"warning\">warning</Button>\n                    <Button shape=\"border\" colors=\"danger\">danger</Button>\n                    <Button shape=\"border\" colors=\"dark\">dark</Button>\n                <div className=\"divider\"></div>\n                  <Button colors=\"primary\" disabled>状态(disabled)</Button>\n            </div>\n        )\n    }\n}\n\n","desc":" 通过`colors`属性控制按钮颜色"}]


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
            <Panel copyable collapsible headerContent expanded={ this.state.open } colors='bordered' header={ header } footerStyle = {{padding: 0}}>
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
