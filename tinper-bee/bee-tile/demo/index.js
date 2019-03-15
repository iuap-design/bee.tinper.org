import {Col, Row} from 'bee-layout';
import {Panel} from 'bee-panel';
import Button from 'bee-button';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';


const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var DemoArray = [{"example":<Demo1 />,"title":" Tile实例","code":"/**\r\n*\r\n* @title Tile实例\r\n* @description 通过style自定义样式，Tile的children均可自定义。hoverColors设置磁贴hover的效果\r\n*\r\n*/\r\n\r\nimport React, { Component } from 'react';\r\nimport { Tile } from 'tinper-bee';\r\n\r\nclass Demo1 extends Component {\r\n\trender () {\r\n\t\treturn (\r\n\t\t\t<Tile style={{width:200}}>\r\n\t\t\t\t<h4>磁贴标题</h4>\r\n\t\t\t\t<span>进度</span>\r\n\t\t\t\t<h1>95%</h1>\r\n\t\t\t</Tile>\r\n\t\t)\t\r\n\t}\r\n}\r\n\r\n\r\n","desc":" 通过style自定义样式，Tile的children均可自定义。hoverColors设置磁贴hover的效果"},{"example":<Demo2 />,"title":" Tile 实例","code":"/**\r\n*\r\n* @title Tile 实例\r\n* @description 具备链接功能，设置参数Component为a,且设置href为你的链接地址\r\n*\r\n*/\r\n\r\nimport React, { Component } from 'react';\r\nimport { Tile } from 'tinper-bee';\r\n\r\nclass Demo2 extends Component {\r\n\trender () {\r\n\t\treturn (\r\n\t\t\t<Tile Component=\"a\" href=\"baidu\" style={{width:200}}>\r\n\t\t\t\t<h4>磁贴标题</h4>\r\n\t\t\t\t<span>进度</span>\r\n\t\t\t\t<h1>95%</h1>\r\n\t\t\t</Tile>\r\n\t\t)\t\r\n\t}\r\n}\r\n\r\n","desc":" 具备链接功能，设置参数Component为a,且设置href为你的链接地址"}]


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
