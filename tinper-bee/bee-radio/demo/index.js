
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Button from 'bee-button';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';


const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var Demo4 = require("./demolist/Demo4");var Demo5 = require("./demolist/Demo5");var DemoArray = [{"example":<Demo1 />,"title":" Radio 基本用法","code":"/**\n * @title Radio 基本用法\n * @description `selectedValue`参数被选中的radio值，`disabled`参数设置是否可用，`onChange`设置值改变的回调\n */\n\nimport React, { Component } from 'react'\nimport { Radio } from 'tinper-bee';\n\n\n\nclass Demo1 extends Component{\n  constructor(props) {\n  \tsuper(props);\n  \tthis.state = {\n    \tselectedValue: '2'\n    };\n  }\n  handleChange(value) {\n    this.setState({selectedValue: value});\n  }\n  render() {\n    return (\n      <Radio.RadioGroup\n        name=\"fruits\"\n        selectedValue={this.state.selectedValue}\n        onChange={this.handleChange.bind(this)}>\n          <Radio value=\"1\" disabled>苹果</Radio>\n          <Radio value=\"2\" disabled>香蕉</Radio>\n          <Radio value=\"3\" >葡萄</Radio>\n          <Radio value=\"4\" >菠萝</Radio>\n          <Radio value=\"5\" >梨</Radio>\n          <Radio value=\"6\" >石榴</Radio>\n      </Radio.RadioGroup>   \n    )\n  }\n};\n\n","desc":" `selectedValue`参数被选中的radio值，`disabled`参数设置是否可用，`onChange`设置值改变的回调"},{"example":<Demo2 />,"title":" 不同颜色的radio","code":"/**\n * @title 不同颜色的radio\n * @description `colors`参数控制背景色\n */\n\nimport React, { Component } from 'react'\nimport { Radio } from 'tinper-bee';\n\n\n\nclass Demo2 extends Component{\n  constructor(props) {\n  \tsuper(props);\n  \tthis.state = {\n    \tselectedValue: '3'\n    };\n  }\n  handleChange(value) {\n    this.setState({selectedValue: value});\n  }\n  render() {\n    return (\n      <Radio.RadioGroup\n        name=\"color\"\n        selectedValue={this.state.selectedValue}\n        onChange={this.handleChange.bind(this)}>\n          <Radio colors=\"primary\" value=\"1\" >苹果</Radio>\n          <Radio colors=\"success\" value=\"2\" >香蕉</Radio>\n          <Radio colors=\"info\" value=\"3\" >葡萄</Radio>\n          <Radio colors=\"warning\" value=\"4\" >菠萝</Radio>\n          <Radio colors=\"danger\" value=\"5\" >梨</Radio>\n          <Radio colors=\"dark\" value=\"6\" >石榴</Radio>\n      </Radio.RadioGroup>\n    )\n  }\n};\n\n","desc":" `colors`参数控制背景色"},{"example":<Demo3 />,"title":" 竖方向Radio","code":"/**\n * @title 竖方向Radio\n * @description 可以通过style来设置radio样式\n */\n\nimport React, { Component } from 'react'\nimport { Radio } from 'tinper-bee';\n\n\n\nclass Demo3 extends Component{\n  constructor(props) {\n  \tsuper(props);\n  \tthis.state = {\n    \tselectedValue: '1'\n    };\n  }\n  handleChange(value) {\n    this.setState({selectedValue: value});\n  }\n  render() {\n    const radioStyle = {\n      display: 'block'\n    };\n    return (\n      <div className=\"demo3\">\n        <Radio.RadioGroup\n          name=\"team\"\n          selectedValue={this.state.selectedValue}\n          onChange={this.handleChange.bind(this)}>\n            <Radio style={radioStyle} value=\"1\" >苹果</Radio>\n            <Radio style={radioStyle} value=\"2\" >香蕉</Radio>\n            <Radio style={radioStyle} value=\"3\" >葡萄</Radio>\n            <Radio style={radioStyle} value=\"4\" >菠萝</Radio>\n            <Radio style={radioStyle} value=\"5\" >梨</Radio>\n            <Radio style={radioStyle} value=\"6\" >石榴</Radio>\n        </Radio.RadioGroup>\n      </div>\n    )\n  }\n};\n\n","desc":" 可以通过style来设置radio样式","scss_code":".demo3 .u-radio-group .u-radio{\n    margin-bottom: 8px;\n}"},{"example":<Demo4 />,"title":" RadioButton 基本使用","code":"/**\n * @title RadioButton 基本使用\n * @description `selectedValue`参数设置被选中的radio值，`onChange`设置值改变的回调\n */\n\nimport React, { Component } from 'react'\nimport { Radio } from 'tinper-bee';\n\nconst  RadioGroup = Radio.RadioGroup;\n\nclass Demo4 extends Component{\n  constructor(props) {\n  \tsuper(props);\n  \tthis.state = {\n      selectedValue: 'orange',\n      selectedValue2: 'apple'\n    };\n  }\n  handleChange(value) {\n    this.setState({selectedValue: value});\n  }\n  handleChange2(value) {\n    this.setState({selectedValue2: value});\n  }\n  render() {\n    return (\n      <div>\n        <Radio.RadioGroup\n          name=\"fruit\"\n          selectedValue={this.state.selectedValue}\n          onChange={this.handleChange.bind(this)}>\n            <Radio.RadioButton value=\"apple\">apple</Radio.RadioButton>\n            <Radio.RadioButton value=\"banana\">banana</Radio.RadioButton>\n            <Radio.RadioButton value=\"orange\">orange</Radio.RadioButton>\n        </Radio.RadioGroup>\n\n        <div style={{ marginTop: 16 }}>\n          <Radio.RadioGroup \n            selectedValue={this.state.selectedValue2}\n            onChange={this.handleChange2.bind(this)}>\n            <Radio.RadioButton value=\"apple\">apple</Radio.RadioButton>\n            <Radio.RadioButton value=\"banana\" disabled>banana</Radio.RadioButton>\n            <Radio.RadioButton value=\"orange\">orange</Radio.RadioButton>\n          </Radio.RadioGroup>\n        </div>\n\n        <div style={{ marginTop: 16 }}>\n          <Radio.RadioGroup selectedValue=\"apple\">\n            <Radio.RadioButton value=\"apple\" disabled>apple</Radio.RadioButton>\n            <Radio.RadioButton value=\"banana\" disabled>banana</Radio.RadioButton>\n            <Radio.RadioButton value=\"orange\" disabled>orange</Radio.RadioButton>\n          </Radio.RadioGroup>\n        </div>\n      </div>\n\n    )\n  }\n};\n\n","desc":" `selectedValue`参数设置被选中的radio值，`onChange`设置值改变的回调"},{"example":<Demo5 />,"title":" 红色填充的 Radio","code":"/**\n * @title 红色填充的 Radio\n * @description `inverse` 参数设置选中为红色填充。\n */\n\nimport React, { Component } from 'react'\nimport { Radio } from 'tinper-bee';\n\n\n\nclass Demo1 extends Component{\n  constructor(props) {\n  \tsuper(props);\n  \tthis.state = {\n    \tselectedValue: '1'\n    };\n  }\n  handleChange(value) {\n    this.setState({selectedValue: value});\n  }\n  render() {\n    return (\n      <Radio.RadioGroup\n        name=\"fruits\"\n        selectedValue={this.state.selectedValue}\n        onChange={this.handleChange.bind(this)}>\n          <Radio value=\"1\" inverse>苹果</Radio>\n          <Radio value=\"2\" inverse>香蕉</Radio>\n          <Radio value=\"3\" inverse>葡萄</Radio>\n      </Radio.RadioGroup>   \n    )\n  }\n};\n\n","desc":" `inverse` 参数设置选中为红色填充。"}]


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
