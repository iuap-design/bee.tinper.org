import {Col, Row} from 'bee-layout';
import {Panel} from 'bee-panel';
import Button from 'bee-button';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';


const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


var Demo1 = require("./demolist/Demo1");var DemoArray = [{"example":<Demo1 />,"title":" Breadcrumb ","code":"/**\r\n * @title Breadcrumb \r\n * @description Breadcrumb.Item定义子面包，`active`参数定义当前状态。\r\n */\r\n\r\nimport React, { Component } from 'react';\r\nimport { Breadcrumb } from 'tinper-bee';\r\n\r\nclass Demo1 extends Component {\r\n\trender () {\r\n\t\treturn (\r\n\t\t\t<Breadcrumb>\r\n\t\t\t    <Breadcrumb.Item href=\"#\">\r\n\t\t\t      Home\r\n\t\t\t    </Breadcrumb.Item>\r\n\t\t\t    <Breadcrumb.Item>\r\n\t\t\t      Library\r\n\t\t\t    </Breadcrumb.Item>\r\n\t\t\t    <Breadcrumb.Item active>\r\n\t\t\t      Data\r\n\t\t\t    </Breadcrumb.Item>\r\n\t\t\t</Breadcrumb>\r\n\t\t)\r\n\t}\r\n}\r\n\r\n","desc":" Breadcrumb.Item定义子面包，`active`参数定义当前状态。"}]


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
