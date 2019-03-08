import {Col, Row} from 'bee-layout';
import {Panel} from 'bee-panel';
import Button from 'bee-button';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';


const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var DemoArray = [{"example":<Demo1 />,"title":" Navbar基础样式","code":"/**\n * @title Navbar基础样式\n * @description 最常用简易navbar\n *  const NavItem = Navbar.NavItem;\n *  const Header = Navbar.Header;\n *  const Brand = Navbar.Brand;\n *  const Collapse = Navbar.Collapse;\n *  const Toggle = Navbar.Toggle;\n *  const Nav = Navbar.Nav;\n */\n\n\nimport React, { Component } from 'react';\nimport { Navbar } from 'tinper-bee';\n\n\n\nconst NavItem = Navbar.NavItem;\nconst Header = Navbar.Header;\nconst Brand = Navbar.Brand;\nconst Nav = Navbar.Nav;\n\nclass Demo1 extends Component {\n    constructor(props, context) {\n        super(props, context);\n        this.state = {\n            selectedkey: 1\n        }\n    }\n    handleSelect = (index) => {\n        this.setState({selectedkey: index});\n    }   \n    render() {\n        return (\n            <div className=\"demo-container\">\n                <Navbar>\n                    <Header>\n                        <Brand>\n                            <a href=\"#\">React-FED</a>\n                        </Brand>\n                    </Header>\n                    <Nav\n                        selectedkey={this.state.selectedkey}\n                        onSelect={this.handleSelect}>\n                        <NavItem eventKey={1}>选项1</NavItem>\n                        <NavItem eventKey={2}>\n                            选项2\n                        </NavItem>\n                        <NavItem eventKey={3}>\n                            选项3\n                        </NavItem>\n                    </Nav>\n                </Navbar>\n            </div>\n        )\n    }\n}\n\n","desc":" 最常用简易navbar","scss_code":".demo-container{\n  .u-container{\n    width: auto;\n  }\n}"},{"example":<Demo2 />,"title":" Navbar基础样式","code":"/**\n * @title Navbar基础样式\n * @description 当屏幕小于768 菜单隐藏。\n *  const NavItem = Navbar.NavItem;\n *  const Header = Navbar.Header;\n *  const Brand = Navbar.Brand;\n *  const Collapse = Navbar.Collapse;\n *  const Toggle = Navbar.Toggle;\n *  const Nav = Navbar.Nav;\n * 添加Collapse组件是在bee-transition的子组件组件上做的扩展 \n * 此例子结合了常用的表单场景\n */\n\n\nimport React, { Component } from 'react';\nimport { Navbar, FormControl } from 'tinper-bee';\n\n\nconst NavItem = Navbar.NavItem;\nconst Header = Navbar.Header;\nconst Brand = Navbar.Brand;\nconst Collapse = Navbar.Collapse;\nconst Toggle = Navbar.Toggle;\nconst Nav = Navbar.Nav;\n\nclass Demo2 extends Component {\n    constructor(props, context) {\n        super(props, context);\n        this.state = {\n            expanded: false,\n            selectedkey: 1\n        }\n    }\n\n    onToggle = (value) => {\n        this.setState({expanded: value});\n    }\n\n    handleSelect = (index) => {\n        this.setState({selectedkey: index});\n    }\n\n    render() {\n        return (\n            <div className=\"demo-container\">\n                <Navbar\n                    inverse\n                    expanded={this.state.expanded}\n                    onToggle={this.onToggle}>\n                    <Header>\n                        <Brand>\n                            <a href=\"#\">React-FED</a>\n                        </Brand>\n                        <Toggle />\n                    </Header>\n\n                    <Collapse>\n                        <Nav\n                            selectedkey={this.state.selectedkey}\n                            onSelect={this.handleSelect}>\n                            <NavItem eventKey={1}>选项</NavItem>\n                            <NavItem href=\"#\" eventKey={2}>\n                                选项\n                            </NavItem>\n                        </Nav>\n                        \n                        <Navbar.Form pullRight>\n                            <FormControl type=\"text\" placeholder=\"Search\"/>\n                        </Navbar.Form>\n                    </Collapse>\n                </Navbar>\n            </div>\n        )\n    }\n}\n\n","desc":" 当屏幕小于768 菜单隐藏。","scss_code":".demo-container{\n  .u-container{\n    width: auto;\n  }\n}"}]


class Demo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({open: !this.state.open})
    }

    render() {
        const {title, example, code, desc, scss_code} = this.props;
        let caret = this.state.open ? CARETUP : CARET;
        let text = this.state.open ? "隐藏代码" : "查看代码";

        const header = (
            <div>
                {example}
                <Button style={{"marginTop": "10px"}} shape="block" onClick={this.handleClick}>
                    {caret}
                    {text}
                </Button>
            </div>
        );
        return (
            <Col md={12}>
                <h3>{title}</h3>
                <p>{desc}</p>
                <Panel collapsible headerContent expanded={this.state.open} colors='bordered' header={header}
                       footerStyle={{padding: 0}}>
                    <pre><code className="hljs javascript">{code}</code></pre>
                    {!!scss_code ? <pre><code className="hljs css">{scss_code}</code></pre> : null}
                </Panel>
            </Col>
        )
    }
}

class DemoGroup extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Row>
                {DemoArray.map((child, index) => {

                    return (
                        <Demo example={child.example} title={child.title} code={child.code} scss_code={child.scss_code}
                              desc={child.desc} key={index}/>
                    )

                })}
            </Row>
        )
    }
}

ReactDOM.render(<DemoGroup/>, document.getElementById('tinperBeeDemo'));
