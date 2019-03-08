import {Col, Row} from 'bee-layout';
import {Panel} from 'bee-panel';
import Button from 'bee-button';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';


const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var Demo4 = require("./demolist/Demo4");var DemoArray = [{"example":<Demo1 />,"title":" 默认Rate","code":"/**\r\n *\r\n * @title 默认Rate\r\n * @description 这是描述\r\n *\r\n */\r\n\r\nimport React, { Component } from 'react';\r\nimport { Rate } from 'tinper-bee';\r\n\r\nclass Demo1 extends Component {\r\n    constructor(props){\r\n        super(props);\r\n        this.state={\r\n            value:3\r\n        };\r\n    }\r\n    handChange=value=>{\r\n        this.setState({\r\n            value\r\n        })\r\n    }\r\n    render() {\r\n        return (\r\n            <Rate value={this.state.value} onChange={this.handChange}/>\r\n        ) \r\n    }\r\n}\r\n\r\n","desc":" 这是描述"},{"example":<Demo2 />,"title":" 支持选中半星","code":"/**\r\n *\r\n * @title 支持选中半星\r\n * @description 将allowHalf设置为true即可\r\n *\r\n */\r\n\r\nimport React, { Component } from 'react';\r\nimport { Rate } from 'tinper-bee';\r\n\r\nclass Demo2 extends Component {\r\n    constructor(props){\r\n        super(props);\r\n        this.state={\r\n            value:3\r\n        };\r\n    }\r\n    handChange=value=>{\r\n        this.setState({\r\n            value\r\n        })\r\n    }\r\n    render() {\r\n        return (\r\n            <Rate allowHalf={true} value={this.state.value} onChange={this.handChange}/>\r\n        )\r\n    }\r\n}\r\n\r\n","desc":" 将allowHalf设置为true即可"},{"example":<Demo3 />,"title":" 评分加显示文案","code":"/**\r\n *\r\n * @title 评分加显示文案\r\n * @description onChange和onHoverChange的使用\r\n *\r\n */\r\n\r\nimport React, { Component } from 'react';\r\nimport { Rate } from 'tinper-bee';\r\n\r\nclass Demo3 extends Component {\r\n    constructor(props){\r\n        super(props);\r\n        this.state={\r\n            value:3\r\n        };\r\n    }\r\n    handleChange=(value)=>{\r\n        this.setState({\r\n            value:value\r\n        })\r\n    }\r\n    render() {\r\n        return (\r\n            <div>\r\n                <Rate value={this.state.value} onChange={this.handleChange} count={8}  />\r\n                <span>{this.state.value}</span>\r\n            </div>\r\n        )\r\n    }\r\n}\r\n\r\n","desc":" onChange和onHoverChange的使用"},{"example":<Demo4 />,"title":" 其它评分样式","code":"/**\r\n *\r\n * @title 其它评分样式\r\n * @description character的使用\r\n *\r\n */\r\n\r\nimport React, { Component } from 'react';\r\n\nimport { Rate, Icon } from 'tinper-bee';\r\n\r\nclass Demo4 extends Component {\r\n    constructor(props){\r\n        super(props);\r\n        this.state={\r\n            v1:1,\r\n            v2:2,\r\n            v3:3,\r\n            v4:4\r\n        };\r\n    }\r\n    handChange=(value,type)=>{\r\n        switch(type){\r\n            case 1:\r\n            this.setState({\r\n                v1:value\r\n            });\r\n            break;\r\n            case 2:\r\n            this.setState({\r\n                v2:value\r\n            });\r\n            break;\r\n            case 3:\r\n            this.setState({\r\n                v3:value\r\n            });\r\n            break;\r\n            case 4:\r\n            this.setState({\r\n                v4:value\r\n            });\r\n            break;\r\n        }\r\n    }\r\n    render() {\r\n        return (\r\n            <ul style={{\"listStyle\":\"none\"}}>\r\n                <li><Rate character=\"A\" value={this.state.v1} onChange={(v)=>{this.handChange(v,1)}} /></li>\r\n                <li><Rate character=\"字\" value={this.state.v2} onChange={(v)=>{this.handChange(v,2)}} /></li>\r\n                <li><Rate character={<Icon type=\"uf-bell\" />} value={this.state.v3} onChange={(v)=>{this.handChange(v,3)}} /></li>\r\n                <li><Rate character={<Icon type=\"uf-heart\" />} value={this.state.v4} onChange={(v)=>{this.handChange(v,4)}}/></li>\r\n            </ul>\r\n        )\r\n    }\r\n}\r\n\r\n","desc":" character的使用"}]


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
