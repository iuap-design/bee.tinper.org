
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Button from 'bee-button';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';


const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var DemoArray = [{"example":<Demo1 />,"title":" InputGroup 两边是可选Addon","code":"/**\n * @title InputGroup 两边是可选Addon\n * @description \n */\nimport React, { Component } from 'react';\nimport { InputGroup, FormControl } from 'tinper-bee';\n\nclass Demo1 extends Component {\n\trender () {\n\t\treturn (\n\t\t\t<div className=\"demo-input-group\">\n\t\t\t\t<InputGroup >\n\t\t\t\t\t<InputGroup.Addon >https://</InputGroup.Addon>\n\t\t\t\t\t<FormControl type=\"text\" />\n\t\t\t\t\t<InputGroup.Addon>.com</InputGroup.Addon>\n\t\t\t\t</InputGroup>\n\t\t\t\t<InputGroup>\n\t\t\t\t\t<InputGroup.Addon>.00</InputGroup.Addon>\n\t\t\t\t\t<FormControl type=\"text\" />\n\t\t\t\t</InputGroup>\n\t\t\t\t<InputGroup>\n\t\t\t\t\t<FormControl type=\"text\" />\n\t\t\t\t\t<InputGroup.Addon>.00</InputGroup.Addon>\n\t\t\t\t</InputGroup>\t\t\n\t        </div>\n\t\t)\n\t}\n}\n","desc":" ","scss_code":".demo-input-group .u-input-group {\n\tmargin-bottom: 5px;\n\twidth:500px;\n}"},{"example":<Demo2 />,"title":" InputGroup 两边是可选Button","code":"/**\n * @title InputGroup 两边是可选Button\n * @description \n */\n\nimport React, { Component } from 'react';\nimport { InputGroup, Menu, Button, Dropdown, FormControl } from 'tinper-bee';\n\nlet MenuItem = Menu.Item;\nlet Divider = Menu.Divider;\nlet SubMenu = Menu.SubMenu;\nlet MenuItemGroup = Menu.MenuItemGroup;\n\n\nfunction onSelect({ key }) {\n\tconsole.log(`${key} selected`);\n\n}\n\nfunction onVisibleChange(visible) {\n\tconsole.log(visible);\n}\n\nconst menu1 = (\n\t<Menu\n\t\tmultiple\n\t\tonSelect={onSelect}>\n\t\t<MenuItem key=\"1\">借款合同</MenuItem>\n\t\t<MenuItem key=\"2\">抵/质押合同</MenuItem>\n\t\t<MenuItem key=\"3\">担保合同</MenuItem>\n\t\t<MenuItem key=\"4\">联保合同</MenuItem>\n\t\t<Divider />\n\t\t<MenuItem key=\"5\">合同审批</MenuItem>\n\t\t<MenuItem key=\"6\">抵/质押合同跟踪</MenuItem>\n\t</Menu>\n);\nclass Demo2 extends Component {\n\trender() {\n\t\treturn (\n\t\t\t<div className=\"demo-input-group\">\n\t\t\t\t<InputGroup>\n\t\t\t\t\t<InputGroup.Button>\n\t\t\t\t\t\t<Button>http://</Button>\n\t\t\t\t\t</InputGroup.Button>\n\t\t\t\t\t<FormControl type=\"text\" />\n\t\t\t\t</InputGroup>\n\n\t\t\t\t<InputGroup>\n\t\t\t\t\t<InputGroup.Button shape=\"border\">\n\t\t\t\t\t\t<Dropdown\n\t\t\t\t\t\t\ttrigger={['click']}\n\t\t\t\t\t\t\toverlay={menu1}\n\t\t\t\t\t\t\tanimation=\"slide-up\"\n\t\t\t\t\t\t\tonVisibleChange={onVisibleChange}\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<Button shape=\"border\">带有分割线的下拉 <span className=\"uf uf-arrow-down\"> </span></Button>\n\t\t\t\t\t\t</Dropdown>\n\t\t\t\t\t</InputGroup.Button>\n\t\t\t\t\t<FormControl type=\"text\" />\n\t\t\t\t\t<InputGroup.Button>\n\t\t\t\t\t\t<Button><span className=\"uf uf-search\"> </span></Button>\n\t\t\t\t\t</InputGroup.Button>\n\t\t\t\t</InputGroup>\n\t\t\t\t<InputGroup simple>\n\t\t\t\t\t<FormControl type=\"text\" />\n\t\t\t\t\t<InputGroup.Button shape=\"border\">\n\t\t\t\t\t\t<span className=\"uf uf-search\"> </span>\n\t\t\t\t\t</InputGroup.Button>\n\t\t\t\t</InputGroup>\n\t\t\t\t{/* <InputGroup>\n\t\t\t\t\t<InputGroup.Button>\n\t\t\t\t\t\t<Button>test</Button>\n\t\t\t\t\t</InputGroup.Button>\n\t\t\t\t\t<FormControl type=\"text\" />\n\t\t\t\t\t<InputGroup.Button>\n\t\t\t\t\t\t<Button>test</Button>\n\t\t\t\t\t</InputGroup.Button>\n\t\t\t\t</InputGroup> */}\n\t\t\t</div>\n\t\t)\n\t}\n}\n\n","desc":" ","scss_code":".demo-input-group .u-input-group {\n\tmargin-bottom: 5px;\n\twidth:500px;\n}"}]


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
                <Panel collapsible headerContent expanded={ this.state.open } colors='bordered' header={ header } footerStyle = {{padding: 0}}>
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
