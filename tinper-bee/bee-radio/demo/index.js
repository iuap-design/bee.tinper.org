import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Drawer from 'bee-drawer';
import Clipboard from 'bee-clipboard'; 
import Button from '../src';



var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var Demo4 = require("./demolist/Demo4");var Demo5 = require("./demolist/Demo5");var DemoArray = [{"example":<Demo1 />,"title":" Radio 基本用法","code":"/**\n * @title Radio 基本用法\n * @description `defaultValue`设置默认被选中的radio值，`disabled`参数设置是否可用，`onChange`是值改变的回调\n */\n\nimport React, { Component } from 'react'\nimport { Radio } from 'tinper-bee';\n\nclass Demo1 extends Component{\n  constructor(props) {\n  \tsuper(props);\n  }\n  handleChange = (value) => {\n    console.log('onChange：',value)\n  }\n  render() {\n    return (\n      <Radio.RadioGroup\n        name=\"fruits\"\n        defaultValue=\"1\"\n        onChange={this.handleChange}\n        >\n          <Radio value=\"1\" disabled>苹果</Radio>\n          <Radio value=\"2\" disabled>香蕉</Radio>\n          <Radio value=\"3\" >葡萄</Radio>\n          <Radio value=\"4\" >菠萝</Radio>\n          <Radio value=\"5\" >梨</Radio>\n          <Radio value=\"6\" >石榴</Radio>\n      </Radio.RadioGroup>   \n    )\n  }\n};\n\n","desc":" `defaultValue`设置默认被选中的radio值，`disabled`参数设置是否可用，`onChange`是值改变的回调"},{"example":<Demo2 />,"title":" 不同颜色的radio","code":"/**\r\n * @title 不同颜色的radio\r\n * @description `colors`参数控制背景色\r\n */\r\n\r\nimport React, { Component } from 'react'\r\nimport { Radio } from 'tinper-bee';\r\n\r\n\r\n\r\nclass Demo2 extends Component{\r\n  constructor(props) {\r\n  \tsuper(props);\r\n  \tthis.state = {\r\n    \tselectedValue: '3'\r\n    };\r\n  }\r\n  handleChange(value) {\r\n    this.setState({selectedValue: value});\r\n  }\r\n  render() {\r\n    return (\r\n      <Radio.RadioGroup\r\n        name=\"color\"\r\n        selectedValue={this.state.selectedValue}\r\n        onChange={this.handleChange.bind(this)}>\r\n          <Radio colors=\"primary\" value=\"1\" >苹果</Radio>\r\n          <Radio colors=\"success\" value=\"2\" >香蕉</Radio>\r\n          <Radio colors=\"info\" value=\"3\" >葡萄</Radio>\r\n          <Radio colors=\"warning\" value=\"4\" >菠萝</Radio>\r\n          <Radio colors=\"danger\" value=\"5\" >梨</Radio>\r\n          <Radio colors=\"dark\" value=\"6\" >石榴</Radio>\r\n      </Radio.RadioGroup>\r\n    )\r\n  }\r\n};\r\n\r\n","desc":" `colors`参数控制背景色"},{"example":<Demo3 />,"title":" 竖方向Radio","code":"/**\n * @title 竖方向Radio\n * @description 可以通过style来设置radio样式\n */\n\nimport React, { Component } from 'react'\nimport { Radio } from 'tinper-bee';\n\n\n\nclass Demo3 extends Component{\n  constructor(props) {\n  \tsuper(props);\n  \tthis.state = {\n    \tselectedValue: '1'\n    };\n  }\n  handleChange(value) {\n    this.setState({selectedValue: value});\n  }\n  render() {\n    const radioStyle = {\n      display: 'block'\n    };\n    return (\n      <div className=\"demo3\">\n        <Radio.RadioGroup\n          name=\"team\"\n          selectedValue={this.state.selectedValue}\n          onChange={this.handleChange.bind(this)}>\n            <Radio style={radioStyle} value=\"1\" >苹果</Radio>\n            <Radio style={radioStyle} value=\"2\" >香蕉</Radio>\n            <Radio style={radioStyle} value=\"3\" >葡萄</Radio>\n            <Radio style={radioStyle} value=\"4\" >菠萝</Radio>\n            <Radio style={radioStyle} value=\"5\" >梨</Radio>\n            <Radio style={radioStyle} value=\"6\" >石榴</Radio>\n        </Radio.RadioGroup>\n      </div>\n    )\n  }\n};\n\n","desc":" 可以通过style来设置radio样式","scss_code":".demo3 .u-radio-group .u-radio{\r\n    margin-bottom: 8px;\r\n}"},{"example":<Demo4 />,"title":" RadioButton 基本使用","code":"/**\r\n * @title RadioButton 基本使用\r\n * @description `selectedValue`参数设置被选中的radio值，`onChange`设置值改变的回调\r\n */\r\n\r\nimport React, { Component } from 'react'\r\nimport { Radio } from 'tinper-bee';\r\n\r\nconst  RadioGroup = Radio.RadioGroup;\r\n\r\nclass Demo4 extends Component{\r\n  constructor(props) {\r\n  \tsuper(props);\r\n  \tthis.state = {\r\n      selectedValue: 'orange',\r\n      selectedValue2: 'apple'\r\n    };\r\n  }\r\n  handleChange(value) {\r\n    this.setState({selectedValue: value});\r\n  }\r\n  handleChange2(value) {\r\n    this.setState({selectedValue2: value});\r\n  }\r\n  render() {\r\n    return (\r\n      <div>\r\n        <Radio.RadioGroup\r\n          name=\"fruit\"\r\n          selectedValue={this.state.selectedValue}\r\n          onChange={this.handleChange.bind(this)}>\r\n            <Radio.RadioButton value=\"apple\">apple</Radio.RadioButton>\r\n            <Radio.RadioButton value=\"banana\">banana</Radio.RadioButton>\r\n            <Radio.RadioButton value=\"orange\">orange</Radio.RadioButton>\r\n        </Radio.RadioGroup>\r\n\r\n        <div style={{ marginTop: 16 }}>\r\n          <Radio.RadioGroup \r\n            selectedValue={this.state.selectedValue2}\r\n            onChange={this.handleChange2.bind(this)}>\r\n            <Radio.RadioButton value=\"apple\">apple</Radio.RadioButton>\r\n            <Radio.RadioButton value=\"banana\" disabled>banana</Radio.RadioButton>\r\n            <Radio.RadioButton value=\"orange\">orange</Radio.RadioButton>\r\n          </Radio.RadioGroup>\r\n        </div>\r\n\r\n        <div style={{ marginTop: 16 }}>\r\n          <Radio.RadioGroup selectedValue=\"apple\">\r\n            <Radio.RadioButton value=\"apple\" disabled>apple</Radio.RadioButton>\r\n            <Radio.RadioButton value=\"banana\" disabled>banana</Radio.RadioButton>\r\n            <Radio.RadioButton value=\"orange\" disabled>orange</Radio.RadioButton>\r\n          </Radio.RadioGroup>\r\n        </div>\r\n      </div>\r\n\r\n    )\r\n  }\r\n};\r\n\r\n","desc":" `selectedValue`参数设置被选中的radio值，`onChange`设置值改变的回调"},{"example":<Demo5 />,"title":" 红色填充的 Radio","code":"/**\r\n * @title 红色填充的 Radio\r\n * @description `inverse` 参数设置选中为红色填充。\r\n */\r\n\r\nimport React, { Component } from 'react'\r\nimport { Radio } from 'tinper-bee';\r\n\r\n\r\n\r\nclass Demo1 extends Component{\r\n  constructor(props) {\r\n  \tsuper(props);\r\n  \tthis.state = {\r\n    \tselectedValue: '1'\r\n    };\r\n  }\r\n  handleChange(value) {\r\n    this.setState({selectedValue: value});\r\n  }\r\n  render() {\r\n    return (\r\n      <Radio.RadioGroup\r\n        name=\"fruits\"\r\n        selectedValue={this.state.selectedValue}\r\n        onChange={this.handleChange.bind(this)}>\r\n          <Radio value=\"1\" inverse>苹果</Radio>\r\n          <Radio value=\"2\" inverse>香蕉</Radio>\r\n          <Radio value=\"3\" inverse>葡萄</Radio>\r\n      </Radio.RadioGroup>   \r\n    )\r\n  }\r\n};\r\n\r\n","desc":" `inverse` 参数设置选中为红色填充。"}]


class Demo extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
    }
    handleClick=()=> {
        this.setState({ open: !this.state.open })
    }
    fCloseDrawer=()=>{
        this.setState({
            open: false
        })
    }

    render () {
        const { title, example, code, desc, scss_code  } = this.props;

        const header = (
            <div>
                <p className='component-title'>{ title }</p>
                <p>{ desc }</p>
                <span className='component-code' onClick={this.handleClick}> 查看源码 <i className='uf uf-arrow-right'/> </span>
            </div>
        );
        return (
            <Col md={12} id={title.trim()} className='component-demo'>
            <Panel header={header}>
                {example}
            </Panel>
           
            <Drawer className='component-drawerc' title={title} show={this.state.open} placement='right' onClose={this.fCloseDrawer}>
            <div className='component-code-copy'> JS代码 
                <Clipboard action="copy" text={code}/>
            </div>
            <pre className="pre-js">
                <code className="hljs javascript">{ code }</code>
            </pre >
            {!!scss_code ?<div className='component-code-copy copy-css'> SCSS代码 
                <Clipboard action="copy" text={scss_code}/>
            </div>:null }
                { !!scss_code ? <pre className="pre-css">
                 <code className="hljs css">{ scss_code }</code>
                 </pre> : null }
            </Drawer>
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
