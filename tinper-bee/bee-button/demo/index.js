import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Button from '../src';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';


const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var Demo4 = require("./demolist/Demo4");var Demo5 = require("./demolist/Demo5");var Demo6 = require("./demolist/Demo6");var Demo7 = require("./demolist/Demo7");var DemoArray = [{"example":<Demo1 />,"title":" 默认按钮","code":"/**\r\n *\r\n * @title 默认按钮\r\n * @description 主按钮、次按钮用于按钮组合中的寓意[eg: 弹框中 确定，取消]\r\n *\r\n */\r\n\r\nimport React, { Component } from 'react';\r\nimport { Button } from 'tinper-bee';\r\n\r\n class Demo1 extends Component {\r\n    render () {\r\n        return (\r\n            <div className=\"demoPadding\">\r\n                <Button colors=\"primary\">主按钮</Button>\r\n                <Button colors=\"secondary\">次按钮</Button>\r\n            </div>\r\n        )\r\n    }\r\n}\r\n\r\n\r\n","desc":" 主按钮、次按钮用于按钮组合中的寓意[eg: 弹框中 确定，取消]","scss_code":".demoPadding{\r\n  button{\r\n    margin: auto 5px;\r\n  }\r\n  .divider{\r\n    margin: 6px 0;\r\n    height: 1px;\r\n    overflow: hidden;\r\n    background-color: #fff;\r\n  }\r\n}"},{"example":<Demo2 />,"title":" 按钮属性、状态","code":"/**\r\n *\r\n * @title 按钮属性、状态\r\n * @description 按钮属性、状态 [isSubmit 是否作为form的提交按钮]\r\n * \r\n */\r\n\r\nimport React, { Component } from 'react';\r\nimport { Button } from 'tinper-bee';\r\n\r\n class Demo2 extends Component {\r\n    render () {\r\n        return (\r\n            <div className=\"demoPadding\">\r\n                <Button colors=\"primary\" isSubmit={true}>Default</Button>\r\n                <Button disabled>disabled</Button>\r\n                <Button bordered>border</Button>\r\n                <Button colors=\"primary\" shape=\"round\">round</Button> \r\n            </div>\r\n        )\r\n    }\r\n}\r\n\r\n\r\n","desc":" 按钮属性、状态 [isSubmit 是否作为form的提交按钮]"},{"example":<Demo3 />,"title":" 图标按钮","code":"/**\r\n *\r\n * @title 图标按钮\r\n * @description 当需要在 Button 内嵌入图标时，可以在 Button 内使用 Icon 组件。\r\n *\r\n */\r\n\r\nimport React, { Component } from 'react';\r\nimport { Button, Icon } from 'tinper-bee';\r\n\n\r\nclass Demo3 extends Component {\r\n    render () {\r\n        return (\r\n            <div className=\"demo3 demoPadding\">\r\n                <Button colors=\"primary\" shape=\"icon\"><Icon type='uf-search' /></Button>\r\n                <Button colors=\"primary\"><Icon type='uf-search' />Search</Button>\r\n                <Button colors=\"secondary\" shape=\"icon\"><Icon type='uf-del' /></Button>\r\n                <Button colors=\"secondary\"><Icon type='uf-del' />Delete</Button>\r\n                <Button colors=\"info\" shape=\"icon\"><Icon type='uf-cloud-up' /></Button>\r\n                <Button colors=\"info\"><Icon type='uf-cloud-up' />Upload</Button>\r\n                <Button shape=\"icon\" bordered><Icon type='uf-pencil' /></Button>\r\n                <Button bordered><Icon type='uf-pencil' />Edit</Button>\r\n            </div>\r\n        )\r\n    }\r\n}\r\n\r\n","desc":" 当需要在 Button 内嵌入图标时，可以在 Button 内使用 Icon 组件。","scss_code":".demo3{\r\n    .u-button-icon + .u-button i{\r\n        padding-left: 0;\r\n    }\r\n}"},{"example":<Demo4 />,"title":" 按钮尺寸","code":"/**\r\n *\r\n * @title 按钮尺寸\r\n * @description 按钮有小、中、大、巨大四种尺寸。通过设置 size 为 sm、lg、xg 分别把按钮设为小、大、巨大尺寸。若不设置 size，则尺寸为中。\r\n *\r\n */\r\n\r\nimport React, { Component } from 'react';\r\nimport { Button } from 'tinper-bee';\r\n\r\nclass Demo4 extends Component {\r\n    render () {\r\n        return (\r\n            <div className=\"demoPadding\">\r\n                <Button size=\"sm\" colors=\"primary\">小按钮</Button>\r\n                <Button colors=\"primary\">默认</Button>\r\n                <Button size=\"lg\" colors=\"primary\">大按钮</Button>\r\n                <Button size=\"xg\" colors=\"primary\">巨大按钮</Button>\r\n            </div>\r\n        )\r\n    }\r\n}\r\n\r\n","desc":" 按钮有小、中、大、巨大四种尺寸。通过设置 size 为 sm、lg、xg 分别把按钮设为小、大、巨大尺寸。若不设置 size，则尺寸为中。"},{"example":<Demo5 />,"title":" 不同颜色的按钮","code":"/**\r\n *\r\n * @title 不同颜色的按钮\r\n * @description 通过`colors`属性控制按钮颜色\r\n *\r\n */\r\n\r\nimport React, { Component } from 'react';\r\nimport { Button } from 'tinper-bee';\r\n\r\n class Demo5 extends Component {\r\n\r\n    render () {\r\n        return (\r\n            <div className=\"demoPadding\">\r\n                    <Button colors=\"primary\">primary</Button>\r\n                    <Button colors=\"success\">success</Button>\r\n                    <Button colors=\"info\">info</Button>\r\n                    <Button colors=\"warning\">warning</Button>\r\n                    <Button colors=\"danger\">danger</Button>\r\n                    <Button colors=\"dark\">dark</Button>\r\n                <div className=\"divider\"></div>\r\n                    <Button shape=\"border\" colors=\"primary\">primary</Button>\r\n                    <Button shape=\"border\" colors=\"success\">success</Button>\r\n                    <Button shape=\"border\" colors=\"info\">info</Button>\r\n                    <Button shape=\"border\" colors=\"warning\">warning</Button>\r\n                    <Button shape=\"border\" colors=\"danger\">danger</Button>\r\n                    <Button shape=\"border\" colors=\"dark\">dark</Button>\r\n            </div>\r\n        )\r\n    }\r\n}\r\n\r\n","desc":" 通过`colors`属性控制按钮颜色"},{"example":<Demo6 />,"title":" 不可用状态","code":"/**\r\n *\r\n * @title 不可用状态\r\n * @description 通过添加disabled属性可将按钮设置为不可用状态。\r\n *\r\n */\r\n\r\nimport React, { Component } from 'react';\r\nimport { Button, Icon } from 'tinper-bee';\r\n\n\r\nclass Demo6 extends Component {\r\n    render () {\r\n        return (\r\n            <div className=\"demoPadding\">\r\n                <Button colors=\"primary\">primary</Button>\r\n                <Button colors=\"primary\" disabled>primary(disabled)</Button>\r\n                <div className=\"divider\"></div>\r\n                <Button colors=\"success\">success</Button>\r\n                <Button colors=\"success\" disabled>success(disabled)</Button>\r\n                <div className=\"divider\"></div>\r\n                <Button colors=\"info\">info</Button>\r\n                <Button colors=\"info\" disabled>info(disabled)</Button>\r\n                <div className=\"divider\"></div>\r\n                <Button colors=\"warning\">warning</Button>\r\n                <Button colors=\"warning\" disabled>warning(disabled)</Button>\r\n                <div className=\"divider\"></div>\r\n                <Button colors=\"dark\">dark</Button>\r\n                <Button colors=\"dark\" disabled>dark(disabled)</Button>\r\n                <div className=\"divider\"></div>\r\n                <Button bordered>border</Button>\r\n                <Button bordered disabled>border(disabled)</Button> \r\n                <div className=\"divider\"></div>\r\n            </div>\r\n        )\r\n    }\r\n}\r\n\r\n","desc":" 通过添加disabled属性可将按钮设置为不可用状态。"},{"example":<Demo7 />,"title":" 按钮和模态框组合使用","code":"/**\r\n *\r\n * @title 按钮和模态框组合使用\r\n * @description 点击按钮打开模态框\r\n *\r\n */\r\n\r\nimport React, { Component } from 'react';\r\n\nimport { Button, Modal } from 'tinper-bee';\r\n\r\n class Demo7 extends Component {\r\n    constructor(props) {\r\n        super(props);\r\n        this.state = {\r\n            showModal: false\r\n        }\r\n        this.close = this.close.bind(this);\r\n        this.open = this.open.bind(this);\r\n    }\r\n\r\n    close() {\r\n        this.setState({\r\n            showModal: false\r\n        });\r\n    }\r\n\r\n    open() {\r\n        this.setState({\r\n            showModal: true\r\n        });\r\n    }\r\n\r\n    render() {\r\n        return (\r\n            <div>\r\n                <Button colors=\"primary\" onClick={ this.open }>事件按钮</Button>\r\n                <Modal\r\n                    show = { this.state.showModal }\r\n                    onHide = { this.close } >\r\n                        <Modal.Header closeButton>\r\n                            <Modal.Title>这是题目</Modal.Title>\r\n                        </Modal.Header>\r\n\r\n                        <Modal.Body>\r\n                            这是一些描述。。。\r\n                        </Modal.Body>\r\n\r\n                        <Modal.Footer>\r\n                            <Button onClick={ this.close } shape=\"border\" style={{marginRight: 8}}>关闭</Button>\r\n                            <Button onClick={ this.close } colors=\"primary\">确认</Button>\r\n                        </Modal.Footer>\r\n                </Modal>\r\n            </div>\r\n        )\r\n    }\r\n}\r\n\r\n","desc":" 点击按钮打开模态框"}]


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
