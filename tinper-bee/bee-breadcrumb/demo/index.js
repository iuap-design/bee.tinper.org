import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Drawer from 'bee-drawer';
import Clipboard from 'bee-clipboard'; 
import Button from '../src';



var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var DemoArray = [{"example":<Demo1 />,"title":" 基础用法 ","code":"/**\n * @title 基础用法 \n * @description Breadcrumb.Item定义子面包，`active`参数定义当前状态。\n */\n\nimport React, { Component } from 'react';\nimport { Breadcrumb } from 'tinper-bee';\n\nclass Demo1 extends Component {\n\trender () {\n\t\treturn (\n\t\t\t<Breadcrumb>\n\t\t\t    <Breadcrumb.Item href=\"#\">\n\t\t\t      Home\n\t\t\t    </Breadcrumb.Item>\n\t\t\t    <Breadcrumb.Item>\n\t\t\t      Library\n\t\t\t    </Breadcrumb.Item>\n\t\t\t    <Breadcrumb.Item active>\n\t\t\t      Data\n\t\t\t    </Breadcrumb.Item>\n\t\t\t</Breadcrumb>\n\t\t)\n\t}\n}\n\n","desc":" Breadcrumb.Item定义子面包，`active`参数定义当前状态。"},{"example":<Demo2 />,"title":" 图标 ","code":"/**\n * @title 图标 \n * @description 使用Icon图标组件。\n */\n\nimport React, { Component } from 'react';\nimport { Breadcrumb, Icon } from 'tinper-bee';\n\nclass Demo2 extends Component {\n\trender () {\n\t\treturn (\n\t\t\t<Breadcrumb>\n\t\t\t    <Breadcrumb.Item href=\"#\">\n                    <Icon type=\"uf-home\"></Icon>\n\t\t\t    </Breadcrumb.Item>\n\t\t\t    <Breadcrumb.Item href=\"#\">\n                    <Icon type=\"uf-caven\"></Icon>\n\t\t\t    </Breadcrumb.Item>\n\t\t\t    <Breadcrumb.Item active>\n\t\t\t\t\t<Icon type=\"uf-cart-o\"></Icon>\n\t\t\t    </Breadcrumb.Item>\n\t\t\t</Breadcrumb>\n\t\t)\n\t}\n}\n\n","desc":" 使用Icon图标组件。"},{"example":<Demo3 />,"title":" 图标加文字 ","code":"/**\n * @title 图标加文字 \n * @description 图标放在文字前面。\n */\n\nimport React, { Component } from 'react';\nimport { Breadcrumb, Icon } from 'tinper-bee';\n\nclass Demo2 extends Component {\n\trender () {\n\t\treturn (\n\t\t\t<Breadcrumb>\n\t\t\t    <Breadcrumb.Item href=\"#\">\n                    <Icon type=\"uf-home\"></Icon>\n                    <span>Home</span>\n\t\t\t    </Breadcrumb.Item>\n\t\t\t    <Breadcrumb.Item href=\"#\">\n                    <Icon type=\"uf-caven\"></Icon>\n                    <span>Library</span>\n\t\t\t    </Breadcrumb.Item>\n\t\t\t    <Breadcrumb.Item active>\n                    <Icon type=\"uf-cart-o\"></Icon>\n\t\t\t        <span>Cart</span>\n\t\t\t    </Breadcrumb.Item>\n\t\t\t</Breadcrumb>\n\t\t)\n\t}\n}\n\n","desc":" 图标放在文字前面。"}]


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
