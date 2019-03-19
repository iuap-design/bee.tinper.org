import {Col, Row} from 'bee-layout';
import {Panel} from 'bee-panel';
import Button from 'bee-button';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';


const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var DemoArray = [{"example":<Demo1 />,"title":" 基础用法 ","code":"/**\n * @title 基础用法 \n * @description Breadcrumb.Item定义子面包，`active`参数定义当前状态。\n */\n\nimport React, { Component } from 'react';\nimport { Breadcrumb } from 'tinper-bee';\n\nclass Demo1 extends Component {\n\trender () {\n\t\treturn (\n\t\t\t<Breadcrumb>\n\t\t\t    <Breadcrumb.Item href=\"#\">\n\t\t\t      Home\n\t\t\t    </Breadcrumb.Item>\n\t\t\t    <Breadcrumb.Item>\n\t\t\t      Library\n\t\t\t    </Breadcrumb.Item>\n\t\t\t    <Breadcrumb.Item active>\n\t\t\t      Data\n\t\t\t    </Breadcrumb.Item>\n\t\t\t</Breadcrumb>\n\t\t)\n\t}\n}\n\n","desc":" Breadcrumb.Item定义子面包，`active`参数定义当前状态。"},{"example":<Demo2 />,"title":" 带有图标的 ","code":"/**\n * @title 带有图标的 \n * @description 图标放在文字前面。\n */\n\nimport React, { Component } from 'react';\nimport { Breadcrumb, Icon } from 'tinper-bee';\n\nclass Demo2 extends Component {\n\trender () {\n\t\treturn (\n\t\t\t<Breadcrumb>\n\t\t\t    <Breadcrumb.Item href=\"#\">\n                    <Icon type=\"uf-home\"></Icon>\n\t\t\t    </Breadcrumb.Item>\n\t\t\t    <Breadcrumb.Item href=\"#\">\n                    <Icon type=\"uf-caven\"></Icon>\n                    <span>Application List</span>\n\t\t\t    </Breadcrumb.Item>\n\t\t\t    <Breadcrumb.Item active>\n\t\t\t      Data\n\t\t\t    </Breadcrumb.Item>\n\t\t\t</Breadcrumb>\n\t\t)\n\t}\n}\n\n","desc":" 图标放在文字前面。"}]


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
