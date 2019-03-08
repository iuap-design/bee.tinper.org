import {Col, Row} from 'bee-layout';
import {Panel} from 'bee-panel';
import Button from 'bee-button';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';


const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var DemoArray = [{"example":<Demo1 />,"title":" 根据输入框的内容，进行自动匹配列表显示","code":"/**\r\n *\r\n * @title 根据输入框的内容，进行自动匹配列表显示\r\n * @description 用户可以按需进行选择，支持光标操作，回车事件\r\n *\r\n */\r\nimport React, { Component } from \"react\";\r\nimport { AutoComplete } from 'tinper-bee';\r\n\r\nclass Demo1 extends Component {\r\n  constructor(props) {\r\n    super(props);\r\n    this.state = {\r\n      value: \"\",\r\n      options: [\"10000(博宇)\", \"10001(波波)\", \"10002(李刚)\"],\r\n      placeholder: \"查找关键字,请输入1\",\r\n      disabled: false\r\n    };\r\n  }\r\n  onFormChange = value => {\r\n    console.log(value);\r\n    this.setState({\r\n      value: value\r\n    });\r\n  };\r\n  render() {\r\n    let { value, options, placeholder, disabled } = this.state;\r\n    return (\r\n      <div className=\"demo\" style={{ marginBottom: \"90px\" }}>\r\n        <AutoComplete\r\n          value={value}\r\n          disabled={disabled}\r\n          options={options}\r\n          placeholder={placeholder}\r\n          onValueChange={value => this.onFormChange(value)}\r\n        />\r\n      </div>\r\n    );\r\n  }\r\n}\r\n\r\n\r\n","desc":" 用户可以按需进行选择，支持光标操作，回车事件"},{"example":<Demo2 />,"title":" 动态改变options参数","code":"/**\r\n *\r\n * @title 动态改变options参数\r\n * @description 用户可以按需进行选择，支持光标操作，回车事件\r\n *\r\n */\r\nimport React, { Component } from \"react\";\r\nimport { AutoComplete } from 'tinper-bee';\r\n\r\nclass Demo2 extends Component {\r\n  constructor(props) {\r\n    super(props);\r\n    this.state = {\r\n      value: \"\",\r\n      options: [],\r\n      placeholder: \"查找关键字,请输入a\",\r\n      disabled: false\r\n    };\r\n  }\r\n  onFormChange = value => {\r\n    if (value !== \"a\") {\r\n      this.setState({\r\n        value: value,\r\n        options: [\"ab\", \"abbbbb\", \"abbbbb\", \"aaaab\"]\r\n      });\r\n    } else {\r\n      this.setState({\r\n        value: value,\r\n        options: [\"a\", \"aa\", \"aaa\", \"aaaa\"]\r\n      });\r\n    }\r\n  };\r\n  render() {\r\n    let { value, options, placeholder, disabled } = this.state;\r\n    return (\r\n      <div className=\"demo\" style={{ marginBottom: \"110px\" }}>\r\n        <AutoComplete\r\n          value={value}\r\n          disabled={disabled}\r\n          options={options}\r\n          placeholder={placeholder}\r\n          onValueChange={value => this.onFormChange(value)}\r\n        />\r\n      </div>\r\n    );\r\n  }\r\n}\r\n\r\n\r\n","desc":" 用户可以按需进行选择，支持光标操作，回车事件"}]


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
