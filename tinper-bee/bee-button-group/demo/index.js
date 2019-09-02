import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Drawer from 'bee-drawer';
import Clipboard from 'bee-clipboard'; 
import Button from '../src';



var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var DemoArray = [{"example":<Demo1 />,"title":" 默认按钮组","code":"/**\n *\n * @title 默认按钮组\n * @description 基础按钮组\n *\n */\n\nimport React, { Component } from 'react';\nimport { Icon, Button, ButtonGroup } from 'tinper-bee';\n\n\nclass Demo1 extends Component {\n    render () {\n        return (\n            <div>\n            <ButtonGroup style={{ margin: 10 }}>\n                <Button shape='border'><Icon type='uf-navmenu' /></Button>\n                <Button shape='border'><Icon type='uf-file' /></Button>\n                <Button shape='border'><Icon type='uf-pencil' /></Button>\n                <Button shape='border'><Icon type='uf-del' /></Button>\n            </ButtonGroup>\n            <ButtonGroup style={{ margin: 10 }}>\n                <Button colors=\"primary\">新增</Button>\n                <Button colors=\"primary\">修改</Button>\n                <Button colors=\"primary\">删除</Button>\n            </ButtonGroup>\n            <ButtonGroup style={{ margin: 10 }}>\n                <Button colors=\"primary\"><Icon type='uf-navmenu' /></Button>\n                <Button colors=\"primary\"><Icon type='uf-file' /></Button>\n                <Button colors=\"primary\"><Icon type='uf-pencil' /></Button>\n                <Button colors=\"primary\"><Icon type='uf-del' /></Button>\n            </ButtonGroup>\n            </div>\n\n        )\n    }\n}\n\nexport default Demo1;\n","desc":" 基础按钮组"},{"example":<Demo2 />,"title":" 垂直排列的按钮组","code":"/**\n *\n * @title 垂直排列的按钮组\n * @description 通过`vertical`属性设置按钮组垂直排列\n *\n */\n\nimport React, { Component } from 'react';\nimport { Icon, Button, ButtonGroup } from 'tinper-bee';\n\n\nclass Demo2 extends Component {\n    render () {\n        return (\n            <ButtonGroup vertical>\n                <Button colors=\"primary\"><Icon type='uf-navmenu' /></Button>\n                <Button colors=\"info\"><Icon type='uf-file' /></Button>\n                <Button colors=\"warning\"><Icon type='uf-del' /></Button>\n            </ButtonGroup>\n        )\n    }\n}\n\n\nexport default Demo2;\n","desc":" 通过`vertical`属性设置按钮组垂直排列"},{"example":<Demo3 />,"title":" 传入列表渲染按钮组","code":"/**\n *\n * @title 传入列表渲染按钮组\n * @description 通过`list`属性传入按钮组信息, 并且按钮具有选中样式,信息为Button组件可接受的props\n *\n */\n\nimport React, { Component } from 'react';\nimport { ButtonGroup } from 'tinper-bee';\n\n\nconst LIST = [\n    {\n        title: '未读信息',\n        colors: 'primary',\n        key: 'notRead'\n    },\n    {\n        title: '已读信息',\n        colors: 'primary',\n        key: 'readed'\n    },\n    {\n        title: '已发送信息',\n        colors: 'primary',\n        key: 'write'\n    },\n]\n\nclass Demo3 extends Component {\n    render () {\n        return (\n            <ButtonGroup list={ LIST } />\n        )\n    }\n}\n\n\nexport default Demo3;","desc":" 通过`list`属性传入按钮组信息, 并且按钮具有选中样式,信息为Button组件可接受的props"}]


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
