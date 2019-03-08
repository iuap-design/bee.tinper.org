import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Button from 'bee-button';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';


const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var DemoArray = [{"example":<Demo1 />,"title":" 默认按钮组","code":"/**\r\n *\r\n * @title 默认按钮组\r\n * @description 基础按钮组\r\n *\r\n */\r\n\r\nimport React, { Component } from 'react';\r\nimport { ButtonGroup, Icon, Button } from 'tinper-bee';\r\n\n\n\r\nclass Demo1 extends Component {\r\n    render () {\r\n        return (\r\n            <div>\r\n            <ButtonGroup style={{ margin: 10 }}>\r\n                <Button shape='border'><Icon type='uf-navmenu' /></Button>\r\n                <Button shape='border'><Icon type='uf-file' /></Button>\r\n                <Button shape='border'><Icon type='uf-pencil' /></Button>\r\n                <Button shape='border'><Icon type='uf-del' /></Button>\r\n            </ButtonGroup>\r\n            <ButtonGroup style={{ margin: 10 }}>\r\n                <Button colors=\"primary\">新增</Button>\r\n                <Button colors=\"primary\">修改</Button>\r\n                <Button colors=\"primary\">删除</Button>\r\n            </ButtonGroup>\r\n            <ButtonGroup style={{ margin: 10 }}>\r\n                <Button colors=\"primary\"><Icon type='uf-navmenu' /></Button>\r\n                <Button colors=\"primary\"><Icon type='uf-file' /></Button>\r\n                <Button colors=\"primary\"><Icon type='uf-pencil' /></Button>\r\n                <Button colors=\"primary\"><Icon type='uf-del' /></Button>\r\n            </ButtonGroup>\r\n            </div>\r\n\r\n        )\r\n    }\r\n}\r\n\r\n\r\n","desc":" 基础按钮组"},{"example":<Demo2 />,"title":" 垂直排列的按钮组","code":"/**\r\n *\r\n * @title 垂直排列的按钮组\r\n * @description 通过`vertical`属性设置按钮组垂直排列\r\n *\r\n */\r\n\r\nimport React, { Component } from 'react';\r\nimport { ButtonGroup, Icon, Button } from 'tinper-bee';\r\n\n\n\r\nclass Demo2 extends Component {\r\n    render () {\r\n        return (\r\n            <ButtonGroup vertical>\r\n                <Button colors=\"primary\"><Icon type='uf-navmenu' /></Button>\r\n                <Button colors=\"info\"><Icon type='uf-file' /></Button>\r\n                <Button colors=\"warning\"><Icon type='uf-del' /></Button>\r\n            </ButtonGroup>\r\n        )\r\n    }\r\n}\r\n\r\n\r\n\r\n","desc":" 通过`vertical`属性设置按钮组垂直排列"},{"example":<Demo3 />,"title":" 传入列表渲染按钮组","code":"/**\r\n *\r\n * @title 传入列表渲染按钮组\r\n * @description 通过`list`属性传入按钮组信息, 并且按钮具有选中样式,信息为Button组件可接受的props\r\n *\r\n */\r\n\r\nimport React, { Component } from 'react';\r\nimport { ButtonGroup } from 'tinper-bee';\r\n\r\nconst LIST = [\r\n    {\r\n        title: '未读信息',\r\n        colors: 'primary',\r\n        key: 'notRead'\r\n    },\r\n    {\r\n        title: '已读信息',\r\n        colors: 'primary',\r\n        key: 'readed'\r\n    },\r\n    {\r\n        title: '已发送信息',\r\n        colors: 'primary',\r\n        key: 'write'\r\n    },\r\n]\r\n\r\nclass Demo3 extends Component {\r\n    render () {\r\n        return (\r\n            <ButtonGroup list={ LIST } />\r\n        )\r\n    }\r\n}\r\n\r\n\r\n","desc":" 通过`list`属性传入按钮组信息, 并且按钮具有选中样式,信息为Button组件可接受的props"}]


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
