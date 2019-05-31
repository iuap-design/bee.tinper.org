import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Drawer from 'bee-drawer';
import Clipboard from 'bee-clipboard'; 
import Button from '../src';



var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var DemoArray = [{"example":<Demo1 />,"title":" InputGroup 两边是可选Addon","code":"/**\n * @title InputGroup 两边是可选Addon\n * @description \n */\nimport React, { Component } from 'react';\nimport { InputGroup, FormControl } from 'tinper-bee';\n\nclass Demo1 extends Component {\n\trender () {\n\t\treturn (\n\t\t\t<div className=\"demo-input-group\">\n\t\t\t\t<InputGroup >\n\t\t\t\t\t<InputGroup.Addon >https://</InputGroup.Addon>\n\t\t\t\t\t<FormControl type=\"text\" />\n\t\t\t\t\t<InputGroup.Addon>.com</InputGroup.Addon>\n\t\t\t\t</InputGroup>\n\t\t\t\t<InputGroup>\n\t\t\t\t\t<InputGroup.Addon>.00</InputGroup.Addon>\n\t\t\t\t\t<FormControl type=\"text\" />\n\t\t\t\t</InputGroup>\n\t\t\t\t<InputGroup>\n\t\t\t\t\t<FormControl type=\"text\" />\n\t\t\t\t\t<InputGroup.Addon>.00</InputGroup.Addon>\n\t\t\t\t</InputGroup>\t\t\n\t        </div>\n\t\t)\n\t}\n}\n","desc":" ","scss_code":".demo-input-group .u-input-group {\r\n\tmargin-bottom: 5px;\r\n\twidth:500px;\r\n}"},{"example":<Demo2 />,"title":" InputGroup 两边是可选Button","code":"/**\n * @title InputGroup 两边是可选Button\n * @description \n */\n\nimport React, { Component } from 'react';\nimport { InputGroup, Menu, Button, Dropdown, FormControl } from 'tinper-bee';\n\nlet MenuItem = Menu.Item;\nlet Divider = Menu.Divider;\nlet SubMenu = Menu.SubMenu;\nlet MenuItemGroup = Menu.MenuItemGroup;\n\n\nfunction onSelect({ key }) {\n\tconsole.log(`${key} selected`);\n\n}\n\nfunction onVisibleChange(visible) {\n\tconsole.log(visible);\n}\n\nconst menu1 = (\n\t<Menu\n\t\tmultiple\n\t\tonSelect={onSelect}>\n\t\t<MenuItem key=\"1\">借款合同</MenuItem>\n\t\t<MenuItem key=\"2\">抵/质押合同</MenuItem>\n\t\t<MenuItem key=\"3\">担保合同</MenuItem>\n\t\t<MenuItem key=\"4\">联保合同</MenuItem>\n\t\t<Divider />\n\t\t<MenuItem key=\"5\">合同审批</MenuItem>\n\t\t<MenuItem key=\"6\">抵/质押合同跟踪</MenuItem>\n\t</Menu>\n);\nclass Demo2 extends Component {\n\trender() {\n\t\treturn (\n\t\t\t<div className=\"demo-input-group\">\n\t\t\t\t<InputGroup>\n\t\t\t\t\t<InputGroup.Button>\n\t\t\t\t\t\t<Button>http://</Button>\n\t\t\t\t\t</InputGroup.Button>\n\t\t\t\t\t<FormControl type=\"text\" />\n\t\t\t\t</InputGroup>\n\n\t\t\t\t<InputGroup>\n\t\t\t\t\t<InputGroup.Button shape=\"border\">\n\t\t\t\t\t\t<Dropdown\n\t\t\t\t\t\t\ttrigger={['click']}\n\t\t\t\t\t\t\toverlay={menu1}\n\t\t\t\t\t\t\tanimation=\"slide-up\"\n\t\t\t\t\t\t\tonVisibleChange={onVisibleChange}\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<Button shape=\"border\">带有分割线的下拉 <span className=\"uf uf-arrow-down\"> </span></Button>\n\t\t\t\t\t\t</Dropdown>\n\t\t\t\t\t</InputGroup.Button>\n\t\t\t\t\t<FormControl type=\"text\" />\n\t\t\t\t\t<InputGroup.Button>\n\t\t\t\t\t\t<Button><span className=\"uf uf-search\"> </span></Button>\n\t\t\t\t\t</InputGroup.Button>\n\t\t\t\t</InputGroup>\n\t\t\t\t<InputGroup simple>\n\t\t\t\t\t<FormControl type=\"text\" />\n\t\t\t\t\t<InputGroup.Button shape=\"border\">\n\t\t\t\t\t\t<span className=\"uf uf-search\"> </span>\n\t\t\t\t\t</InputGroup.Button>\n\t\t\t\t</InputGroup>\n\t\t\t\t{/* <InputGroup>\n\t\t\t\t\t<InputGroup.Button>\n\t\t\t\t\t\t<Button>test</Button>\n\t\t\t\t\t</InputGroup.Button>\n\t\t\t\t\t<FormControl type=\"text\" />\n\t\t\t\t\t<InputGroup.Button>\n\t\t\t\t\t\t<Button>test</Button>\n\t\t\t\t\t</InputGroup.Button>\n\t\t\t\t</InputGroup> */}\n\t\t\t</div>\n\t\t)\n\t}\n}\n\n","desc":" ","scss_code":".demo-input-group .u-input-group {\r\n\tmargin-bottom: 5px;\r\n\twidth:500px;\r\n}"}]


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
