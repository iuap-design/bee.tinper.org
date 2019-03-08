
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Button from 'bee-button';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';


const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var Demo4 = require("./demolist/Demo4");var DemoArray = [{"example":<Demo1 />,"title":" Radio","code":"/**\r\n * @title Radio\r\n * @description 基本用法 \r\n */\r\n\r\nimport React, { Component } from 'react'\r\nimport { Radio } from 'tinper-bee';\r\n\r\n\r\n\r\nclass Demo1 extends Component{\r\n  constructor(props) {\r\n  \tsuper(props);\r\n  \tthis.state = {\r\n    \tselectedValue: ''\r\n    };\r\n  }\r\n  handleChange(value) {\r\n    this.setState({selectedValue: value});\r\n  }\r\n  render() {\r\n    return (\r\n      <Radio.RadioGroup\r\n        name=\"fruits\"\r\n        selectedValue={this.state.selectedValue}\r\n        onChange={this.handleChange.bind(this)}>\r\n          <Radio value=\"1\" >苹果</Radio>\r\n          <Radio value=\"2\" >香蕉</Radio>\r\n          <Radio value=\"3\" >葡萄</Radio>\r\n          <Radio value=\"4\" >菠萝</Radio>\r\n          <Radio value=\"5\" >梨</Radio>\r\n          <Radio value=\"6\" >石榴</Radio>\r\n      </Radio.RadioGroup>   \r\n    )\r\n  }\r\n};\r\n\r\n","desc":" 基本用法 "},{"example":<Demo2 />,"title":" 不同颜色的radio","code":"/**\r\n * @title 不同颜色的radio\r\n * @description `colors`参数控制背景色\r\n */\r\n\r\nimport React, { Component } from 'react'\r\nimport { Radio } from 'tinper-bee';\r\n\r\n\r\n\r\nclass Demo2 extends Component{\r\n  constructor(props) {\r\n  \tsuper(props);\r\n  \tthis.state = {\r\n    \tselectedValue: '3'\r\n    };\r\n  }\r\n  handleChange(value) {\r\n    this.setState({selectedValue: value});\r\n  }\r\n  render() {\r\n    return (\r\n      <Radio.RadioGroup\r\n        name=\"color\"\r\n        selectedValue={this.state.selectedValue}\r\n        onChange={this.handleChange.bind(this)}>\r\n          <Radio colors=\"primary\" value=\"1\" >苹果</Radio>\r\n          <Radio colors=\"success\" value=\"2\" >香蕉</Radio>\r\n          <Radio colors=\"info\" value=\"3\" >葡萄</Radio>\r\n          <Radio colors=\"warning\" value=\"4\" >菠萝</Radio>\r\n          <Radio colors=\"danger\" value=\"5\" >梨</Radio>\r\n          <Radio colors=\"dark\" value=\"6\" >石榴</Radio>\r\n      </Radio.RadioGroup>\r\n    )\r\n  }\r\n};\r\n\r\n","desc":" `colors`参数控制背景色"},{"example":<Demo3 />,"title":" 竖方向Radio","code":"/**\r\n * @title 竖方向Radio\r\n * @description 可以通过style来设置radio样式\r\n */\r\n\r\nimport React, { Component } from 'react'\r\nimport { Radio } from 'tinper-bee';\r\n\r\n\r\n\r\nclass Demo3 extends Component{\r\n  constructor(props) {\r\n  \tsuper(props);\r\n  \tthis.state = {\r\n    \tselectedValue: '1'\r\n    };\r\n  }\r\n  handleChange(value) {\r\n    this.setState({selectedValue: value});\r\n  }\r\n  render() {\r\n    const radioStyle = {\r\n      display: 'block'\r\n    };\r\n    return (\r\n      <Radio.RadioGroup\r\n        name=\"team\"\r\n        selectedValue={this.state.selectedValue}\r\n        onChange={this.handleChange.bind(this)}>\r\n          <Radio style={radioStyle} value=\"1\" >苹果</Radio>\r\n          <Radio style={radioStyle} value=\"2\" >香蕉</Radio>\r\n          <Radio style={radioStyle} value=\"3\" >葡萄</Radio>\r\n          <Radio style={radioStyle} value=\"4\" >菠萝</Radio>\r\n          <Radio style={radioStyle} value=\"5\" >梨</Radio>\r\n          <Radio style={radioStyle} value=\"6\" >石榴</Radio>\r\n      </Radio.RadioGroup>\r\n    )\r\n  }\r\n};\r\n\r\n","desc":" 可以通过style来设置radio样式"},{"example":<Demo4 />,"title":" RadioButton","code":"/**\r\n * @title RadioButton\r\n * @description \r\n */\r\n\r\nimport React, { Component } from 'react'\r\nimport { Radio } from 'tinper-bee';\r\n\r\nconst  RadioGroup = Radio.RadioGroup;\r\n\r\nclass Demo4 extends Component{\r\n  constructor(props) {\r\n  \tsuper(props);\r\n  \tthis.state = {\r\n    \tselectedValue: 'banana'\r\n    };\r\n  }\r\n  handleChange(value) {\r\n    this.setState({selectedValue: value});\r\n  }\r\n  render() {\r\n    return (\r\n      <Radio.RadioGroup\r\n        name=\"fruit\"\r\n        selectedValue={this.state.selectedValue}\r\n        onChange={this.handleChange.bind(this)}>\r\n\r\n          <Radio.RadioButton value=\"apple\">apple</Radio.RadioButton>\r\n\r\n          <Radio.RadioButton value=\"banana\">banana</Radio.RadioButton>\r\n\r\n          <Radio.RadioButton  value=\"orange\">orange</Radio.RadioButton>\r\n\r\n      </Radio.RadioGroup>\r\n     \r\n\r\n    )\r\n  }\r\n};\r\n\r\n","desc":" "}]


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
