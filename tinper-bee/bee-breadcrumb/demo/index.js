import {Col, Row} from 'bee-layout';
import {Panel} from 'bee-panel';
import Button from 'bee-button';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';


const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var DemoArray = [{"example":<Demo1 />,"title":" 基础用法 ","code":"/**\r\n * @title 基础用法 \r\n * @description Breadcrumb.Item定义子面包，`active`参数定义当前状态。\r\n */\r\n\r\nimport React, { Component } from 'react';\r\nimport { Breadcrumb } from 'tinper-bee';\r\n\r\nclass Demo1 extends Component {\r\n\trender () {\r\n\t\treturn (\r\n\t\t\t<Breadcrumb>\r\n\t\t\t    <Breadcrumb.Item href=\"#\">\r\n\t\t\t      Home\r\n\t\t\t    </Breadcrumb.Item>\r\n\t\t\t    <Breadcrumb.Item>\r\n\t\t\t      Library\r\n\t\t\t    </Breadcrumb.Item>\r\n\t\t\t    <Breadcrumb.Item active>\r\n\t\t\t      Data\r\n\t\t\t    </Breadcrumb.Item>\r\n\t\t\t</Breadcrumb>\r\n\t\t)\r\n\t}\r\n}\r\n\r\n","desc":" Breadcrumb.Item定义子面包，`active`参数定义当前状态。"},{"example":<Demo2 />,"title":" 图标 ","code":"/**\r\n * @title 图标 \r\n * @description 使用Icon图标组件。\r\n */\r\n\r\nimport React, { Component } from 'react';\r\n\nimport { Breadcrumb, Icon } from 'tinper-bee';\r\n\r\nclass Demo2 extends Component {\r\n\trender () {\r\n\t\treturn (\r\n\t\t\t<Breadcrumb>\r\n\t\t\t    <Breadcrumb.Item href=\"#\">\r\n                    <Icon type=\"uf-home\"></Icon>\r\n\t\t\t    </Breadcrumb.Item>\r\n\t\t\t    <Breadcrumb.Item href=\"#\">\r\n                    <Icon type=\"uf-caven\"></Icon>\r\n\t\t\t    </Breadcrumb.Item>\r\n\t\t\t    <Breadcrumb.Item active>\r\n\t\t\t\t\t<Icon type=\"uf-cart-o\"></Icon>\r\n\t\t\t    </Breadcrumb.Item>\r\n\t\t\t</Breadcrumb>\r\n\t\t)\r\n\t}\r\n}\r\n\r\n","desc":" 使用Icon图标组件。"},{"example":<Demo3 />,"title":" 图标加文字 ","code":"/**\r\n * @title 图标加文字 \r\n * @description 图标放在文字前面。\r\n */\r\n\r\nimport React, { Component } from 'react';\r\n\nimport { Breadcrumb, Icon } from 'tinper-bee';\r\n\r\nclass Demo2 extends Component {\r\n\trender () {\r\n\t\treturn (\r\n\t\t\t<Breadcrumb>\r\n\t\t\t    <Breadcrumb.Item href=\"#\">\r\n                    <Icon type=\"uf-home\"></Icon>\r\n                    <span>Home</span>\r\n\t\t\t    </Breadcrumb.Item>\r\n\t\t\t    <Breadcrumb.Item href=\"#\">\r\n                    <Icon type=\"uf-caven\"></Icon>\r\n                    <span>Library</span>\r\n\t\t\t    </Breadcrumb.Item>\r\n\t\t\t    <Breadcrumb.Item active>\r\n                    <Icon type=\"uf-cart-o\"></Icon>\r\n\t\t\t        <span>Cart</span>\r\n\t\t\t    </Breadcrumb.Item>\r\n\t\t\t</Breadcrumb>\r\n\t\t)\r\n\t}\r\n}\r\n\r\n","desc":" 图标放在文字前面。"}]


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
            <Col md={12} id={title.trim()} >
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
