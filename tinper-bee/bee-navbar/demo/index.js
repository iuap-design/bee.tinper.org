import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Drawer from 'bee-drawer';
import Clipboard from 'bee-clipboard'; 
import Button from '../src';



var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var DemoArray = [{"example":<Demo1 />,"title":" Navbar基础样式","code":"/**\n * @title Navbar基础样式\n * @description 最常用简易navbar\n *  const NavItem = Navbar.NavItem;\n *  const Header = Navbar.Header;\n *  const Brand = Navbar.Brand;\n *  const Collapse = Navbar.Collapse;\n *  const Toggle = Navbar.Toggle;\n *  const Nav = Navbar.Nav;\n */\n\n\nimport React, { Component } from 'react';\nimport { Navbar } from 'tinper-bee';\n\n\n\n\nconst NavItem = Navbar.NavItem;\nconst Header = Navbar.Header;\nconst Brand = Navbar.Brand;\nconst Nav = Navbar.Nav;\n\nclass Demo1 extends Component {\n    constructor(props, context) {\n        super(props, context);\n        this.state = {\n            selectedkey: 1\n        }\n    }\n    handleSelect = (index) => {\n        this.setState({selectedkey: index});\n    }   \n    render() {\n        return (\n            <div className=\"demo-container\">\n                <Navbar>\n                    <Header>\n                        <Brand>\n                            <a href=\"#\">React-FED</a>\n                        </Brand>\n                    </Header>\n                    <Nav\n                        selectedkey={this.state.selectedkey}\n                        onSelect={this.handleSelect}>\n                        <NavItem eventKey={1}>选项1</NavItem>\n                        <NavItem eventKey={2}>\n                            选项2\n                        </NavItem>\n                        <NavItem eventKey={3}>\n                            选项3\n                        </NavItem>\n                    </Nav>\n                </Navbar>\n            </div>\n        )\n    }\n}\n\nexport default Demo1;","desc":" 最常用简易navbar","scss_code":".demo-container{\n  .u-container{\n    width: auto;\n  }\n}"},{"example":<Demo2 />,"title":" Navbar基础样式","code":"/**\n * @title Navbar基础样式\n * @description 当屏幕小于768 菜单隐藏。\n *  const NavItem = Navbar.NavItem;\n *  const Header = Navbar.Header;\n *  const Brand = Navbar.Brand;\n *  const Collapse = Navbar.Collapse;\n *  const Toggle = Navbar.Toggle;\n *  const Nav = Navbar.Nav;\n * 添加Collapse组件是在bee-transition的子组件组件上做的扩展 \n * 此例子结合了常用的表单场景\n */\n\n\nimport React, { Component } from 'react';\nimport { FormControl, Navbar } from 'tinper-bee';\n\n\n\nconst NavItem = Navbar.NavItem;\nconst Header = Navbar.Header;\nconst Brand = Navbar.Brand;\nconst Collapse = Navbar.Collapse;\nconst Toggle = Navbar.Toggle;\nconst Nav = Navbar.Nav;\n\nclass Demo2 extends Component {\n    constructor(props, context) {\n        super(props, context);\n        this.state = {\n            expanded: false,\n            selectedkey: 1\n        }\n    }\n\n    onToggle = (value) => {\n        this.setState({expanded: value});\n    }\n\n    handleSelect = (index) => {\n        this.setState({selectedkey: index});\n    }\n\n    render() {\n        return (\n            <div className=\"demo-container\">\n                <Navbar\n                    inverse\n                    expanded={this.state.expanded}\n                    onToggle={this.onToggle}>\n                    <Header>\n                        <Brand>\n                            <a href=\"#\">React-FED</a>\n                        </Brand>\n                        <Toggle />\n                    </Header>\n\n                    <Collapse>\n                        <Nav\n                            selectedkey={this.state.selectedkey}\n                            onSelect={this.handleSelect}>\n                            <NavItem eventKey={1}>选项</NavItem>\n                            <NavItem href=\"#\" eventKey={2}>\n                                选项\n                            </NavItem>\n                        </Nav>\n                        \n                        <Navbar.Form pullRight>\n                            <FormControl type=\"text\" placeholder=\"Search\"/>\n                        </Navbar.Form>\n                    </Collapse>\n                </Navbar>\n            </div>\n        )\n    }\n}\n\nexport default Demo2;","desc":" 当屏幕小于768 菜单隐藏。","scss_code":".demo-container{\n  .u-container{\n    width: auto;\n  }\n}"}]


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
