
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Button from 'bee-button';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';


const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var Demo4 = require("./demolist/Demo4");var DemoArray = [{"example":<Demo1 />,"title":" 默认开关","code":"/**\n *\n * @title 默认开关\n * @description\n *\n */\nimport React, { Component } from \"react\";\nimport { Switch,  Row, Col  } from 'tinper-bee';\n\nclass Demo1 extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      checked: true\n    };\n  }\n  onChange = () => {\n    this.setState({\n      checked: !this.state.checked\n    });\n  };\n  render() {\n    return (\n      <Row>\n        <Col sm={2}>\n          <Switch />\n        </Col>\n        <Col sm={2}>\n          <Switch\n            checked={this.state.checked}\n            onChange={this.onChange}\n          />\n        </Col>\n      </Row>\n    );\n  }\n}\n\n\n","desc":""},{"example":<Demo2 />,"title":" 不同大小的开关","code":"/**\n *\n * @title 不同大小的开关\n * @description 通过`size`属性控制开关的大小\n *\n */\n\nimport React, { Component } from \"react\";\nimport { Switch,  Row, Col  } from 'tinper-bee';\n\nclass Demo2 extends Component {\n  render() {\n    return (\n      <Row>\n        <Col sm={2}>\n          <Switch size=\"sm\" />\n        </Col>\n        <Col sm={2}>\n          <Switch />\n        </Col>\n        <Col sm={2}>\n          <Switch size=\"lg\" />\n        </Col>\n      </Row>\n    );\n  }\n}\n\n\n","desc":" 通过`size`属性控制开关的大小"},{"example":<Demo3 />,"title":" 事件开关","code":"/**\n *\n * @title 事件开关\n * @description 点击开关触发事件\n *\n */\n\nimport React, { Component } from \"react\";\nimport { Switch,  Row, Col  } from 'tinper-bee';\n\nclass Demo3 extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      switch: \"\",\n      checked: false\n    };\n  }\n  onChange = e => {\n    this.setState({\n      switch: `${e}`,\n      checked: !this.state.checked\n    });\n  };\n\n  render() {\n    return (\n      <Row>\n        <Col sm={2}>\n          <Switch\n            checked={this.state.checked}\n            onChange={this.onChange}\n            checkedChildren={\"on\"}\n            unCheckedChildren={\"off\"}\n          />\n        </Col>\n        <Col sm={2}>\n          <span>{this.state.switch}</span>\n        </Col>\n      </Row>\n    );\n  }\n}\n\n\n","desc":" 点击开关触发事件"},{"example":<Demo4 />,"title":" 被禁用开关","code":"/**\n *\n * @title 被禁用开关\n * @description\n *\n */\nimport React, { Component } from \"react\";\nimport { Switch, Button,  Row, Col  } from 'tinper-bee';\n\nclass Demo4 extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n        defaultDisabled: true\n    };\n  }\n  onChange = () => {\n    this.setState({\n      defaultDisabled: !this.state.defaultDisabled\n    });\n  };\n  onConsoleLog=(x)=>{\n    console.log(x) \n  }\n  render() {\n    return (\n      <Row>\n        <Col sm={2}>\n          <Switch disabled={this.state.defaultDisabled}/>\n        </Col>\n        <Col sm={2}>\n          <Button onClick={this.onChange}>toggle disabled</Button>\n        </Col>\n      </Row>\n    );\n  }\n}\n\n\n","desc":""}]


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
            <Col md={12} id={title.trim()} >
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
