
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Button from 'bee-button';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';


const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var DemoArray = [{"example":<Demo1 />,"title":"  FromGroup 三种校验状态实例","code":"/**\r\n * @title  FromGroup 三种校验状态实例\r\n * @description `validationState`参数控制状态颜色\r\n */\r\n\r\nimport { Component } from 'react';\r\n\nimport { FormGroup, FormControl } from 'tinper-bee';\r\n\r\n class Demo1 extends Component {\r\n\trender () {\r\n\t\treturn (\r\n\t\t\t<div className=\"demo-form-group\">\r\n\t        \t<FormGroup validationState=\"error\"> \r\n\t\t\t\t\t<FormControl type=\"text\" />\r\n\t\t\t\t</FormGroup>\t\r\n\t\t\t\t<FormGroup validationState=\"warning\"> \r\n\t\t\t\t\t<FormControl type=\"text\" />\r\n\t\t\t\t</FormGroup>\t\r\n\t\t\t\t<FormGroup validationState=\"success\"> \r\n\t\t\t\t\t<FormControl type=\"text\" />\r\n\t\t\t\t</FormGroup>\t\t\t\r\n\t        </div>\r\n\t\t)\r\n\t}\r\n}\r\n\r\n","desc":" `validationState`参数控制状态颜色"},{"example":<Demo2 />,"title":" FormGroup 动态校验实例","code":"/**\r\n * @title FormGroup 动态校验实例\r\n * @description 限制只能输入数字\r\n */\r\nimport React, { Component } from 'react';\r\n\nimport { FormGroup, FormControl } from 'tinper-bee';\r\n\r\nclass Demo2 extends Component {\r\n    constructor (props) {\r\n        super(props);\r\n        this.state = {\r\n            value: ''\r\n        }\r\n    }\r\n    validateState () {\r\n\r\n        if ( this.state.value == \"\" ) {\r\n            return \"warning\";\r\n        }\r\n        if ( /^[0-9]*$/.test(this.state.value) ) {\r\n            return \"success\";\r\n        } else {\r\n            return \"error\"\r\n        }\r\n    }\r\n\r\n    handerChange (e) {\r\n        this.setState({value:e});\r\n    }\r\n    render (){\r\n        return( \r\n            <div className=\"demo-form-control\">\r\n                <FormGroup ref='demo3FormGroup' validationState={this.validateState()}>\r\n                    <FormControl ref=\"demo3FormControl\" placeholder=\"只能输入数字\" value={this.state.value} onChange={this.handerChange.bind(this)}/> \r\n                </FormGroup>\r\n            </div>\r\n        )\r\n    }\r\n\r\n}\r\n\r\n","desc":" 限制只能输入数字"}]


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
