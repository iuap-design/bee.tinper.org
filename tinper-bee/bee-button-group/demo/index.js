import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Button from 'bee-button';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';


const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var DemoArray = [{"example":<Demo1 />,"title":" 默认按钮组","code":"/**\n *\n * @title 默认按钮组\n * @description 基础按钮组\n *\n */\n\nimport React, { Component } from 'react';\nimport { ButtonGroup, Icon, Button } from 'tinper-bee';\n\nclass Demo1 extends Component {\n    render () {\n        return (\n            <div>\n            <ButtonGroup style={{ margin: 10 }}>\n                <Button shape='border'><Icon type='uf-navmenu' /></Button>\n                <Button shape='border'><Icon type='uf-file' /></Button>\n                <Button shape='border'><Icon type='uf-pencil' /></Button>\n                <Button shape='border'><Icon type='uf-del' /></Button>\n            </ButtonGroup>\n            <ButtonGroup style={{ margin: 10 }}>\n                <Button colors=\"primary\">新增</Button>\n                <Button colors=\"primary\">修改</Button>\n                <Button colors=\"primary\">删除</Button>\n            </ButtonGroup>\n            <ButtonGroup style={{ margin: 10 }}>\n                <Button colors=\"primary\"><Icon type='uf-navmenu' /></Button>\n                <Button colors=\"primary\"><Icon type='uf-file' /></Button>\n                <Button colors=\"primary\"><Icon type='uf-pencil' /></Button>\n                <Button colors=\"primary\"><Icon type='uf-del' /></Button>\n            </ButtonGroup>\n            </div>\n\n        )\n    }\n}\n\n\n","desc":" 基础按钮组"},{"example":<Demo2 />,"title":" 垂直排列的按钮组","code":"/**\n *\n * @title 垂直排列的按钮组\n * @description 通过`vertical`属性设置按钮组垂直排列\n *\n */\n\nimport React, { Component } from 'react';\nimport { ButtonGroup, Icon, Button } from 'tinper-bee';\n\nclass Demo2 extends Component {\n    render () {\n        return (\n            <ButtonGroup vertical>\n                <Button colors=\"primary\"><Icon type='uf-navmenu' /></Button>\n                <Button colors=\"info\"><Icon type='uf-file' /></Button>\n                <Button colors=\"warning\"><Icon type='uf-del' /></Button>\n            </ButtonGroup>\n        )\n    }\n}\n\n\n\n","desc":" 通过`vertical`属性设置按钮组垂直排列"},{"example":<Demo3 />,"title":" 传入列表渲染按钮组","code":"/**\n *\n * @title 传入列表渲染按钮组\n * @description 通过`list`属性传入按钮组信息, 并且按钮具有选中样式,信息为Button组件可接受的props\n *\n */\n\nimport React, { Component } from 'react';\nimport { ButtonGroup } from 'tinper-bee';\n\nconst LIST = [\n    {\n        title: '未读信息',\n        colors: 'primary',\n        key: 'notRead'\n    },\n    {\n        title: '已读信息',\n        colors: 'primary',\n        key: 'readed'\n    },\n    {\n        title: '已发送信息',\n        colors: 'primary',\n        key: 'write'\n    },\n]\n\nclass Demo3 extends Component {\n    render () {\n        return (\n            <ButtonGroup list={ LIST } />\n        )\n    }\n}\n\n\n","desc":" 通过`list`属性传入按钮组信息, 并且按钮具有选中样式,信息为Button组件可接受的props"}]


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
