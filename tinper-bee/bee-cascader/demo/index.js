import {Col, Row} from 'bee-layout';
import {Panel} from 'bee-panel';
import Button from 'bee-button';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';


const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


var Demo1 = require("./demolist/Demo1");var DemoArray = [{"example":<Demo1 />,"title":" 基础级联菜单","code":"/**\r\n *\r\n * @title 基础级联菜单\r\n * @description\r\n *\r\n */\r\n\r\nimport React, { Component } from 'react';\r\n\nimport { Cascader, Button, Row, Col  } from 'tinper-bee';\r\n\n\r\n const options = [\r\n \t{\r\n \t  value: '浙江',\r\n \t  children: [\r\n \t\t  {\r\n \t\t    value: '杭州',\r\n \t\t    children: [\r\n \t\t\t    {\r\n \t\t\t      value: '西湖',\r\n \t\t\t      children: [\r\n \t\t\t\t    {\r\n \t\t\t\t      value: '白娘子'\r\n \t\t\t\t    },\r\n \t\t\t\t    {\r\n \t\t\t\t      value: '许仙'\r\n \t\t\t\t    }]\r\n \t\t\t    }]\r\n \t\t  }\r\n \t  ]\r\n \t},\r\n \t{\r\n \t  value: '江苏',\r\n \t  children: [\r\n \t\t  {\r\n \t\t    value: '南京',\r\n \t\t    children: [\r\n \t\t\t    {\r\n \t\t\t      value: '中华门'\r\n \t\t\t    }]\r\n \t\t  }\r\n \t  ]\r\n \t},\r\n \t{\r\n \t  value: '山东'\r\n \t}\r\n ];\r\n class Demo1 extends Component {\r\n\tconstructor(props){\r\n\t\tsuper(props);\r\n\t\tthis.state={\r\n\t\t\toptions:options\r\n\t\t}\r\n\t}\r\n\r\n\tonClickHandler=(data)=>{\r\n\t\tconsole.log(\"data: \",data);\r\n\t}\r\n\r\n\tclick=()=>{\r\n\t\tthis.setState({\r\n\t\t\toptions:[\r\n\t\t\t\t{\r\n\t\t\t\t\tvalue: '浙江1',\r\n\t\t\t\t\tchildren: [\r\n\t\t\t\t\t\t{\r\n\t\t\t\t\t\t\tvalue: '杭州',\r\n\t\t\t\t\t\t\tchildren: [\r\n\t\t\t\t\t\t\t\t{\r\n\t\t\t\t\t\t\t\t\tvalue: '西湖',\r\n\t\t\t\t\t\t\t\t\tchildren: [\r\n\t\t\t\t\t\t\t\t\t{\r\n\t\t\t\t\t\t\t\t\t\tvalue: '白娘子'\r\n\t\t\t\t\t\t\t\t\t},\r\n\t\t\t\t\t\t\t\t\t{\r\n\t\t\t\t\t\t\t\t\t\tvalue: '许仙'\r\n\t\t\t\t\t\t\t\t\t}]\r\n\t\t\t\t\t\t\t\t}]\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t]\r\n\t\t\t\t},\r\n\t\t\t\t{\r\n\t\t\t\t\tvalue: '江苏1',\r\n\t\t\t\t\tchildren: [\r\n\t\t\t\t\t\t{\r\n\t\t\t\t\t\t\tvalue: '南京',\r\n\t\t\t\t\t\t\tchildren: [\r\n\t\t\t\t\t\t\t\t{\r\n\t\t\t\t\t\t\t\t\tvalue: '中华门'\r\n\t\t\t\t\t\t\t\t}]\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t]\r\n\t\t\t\t},\r\n\t\t\t\t{\r\n\t\t\t\t\tvalue: '山东1'\r\n\t\t\t\t}\r\n\t\t\t]\r\n\t\t})\r\n\t}\r\n \trender(){\r\n \t\treturn(\r\n            <Row>\r\n                <Col md={4}>\r\n\t\t\t\t\t\t\t\t\t<Button colors=\"primary\" onClick={this.click} style={{marginBottom:8+'px'}}>清空</Button>\r\n                    <div className=\"height-150\">\r\n                     \t<Cascader options = {this.state.options} onClick={this.onClickHandler}/>\r\n                    </div>\r\n                </Col>\r\n            </Row>\r\n \t\t)\r\n \t}\r\n }\r\n","desc":""}]


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
