
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Button from 'bee-button';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';


const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var Demo4 = require("./demolist/Demo4");var Demo5 = require("./demolist/Demo5");var Demo6 = require("./demolist/Demo6");var Demo7 = require("./demolist/Demo7");var DemoArray = [{"example":<Demo1 />,"title":" 基本用法","code":"/**\n * @title 基本用法\n * @description `checked` 参数设置是否选中，`disabled`设置是否可用，`onDoubleClick`定义双击事件。\n */\n\n\nimport React, {Component} from 'react';\nimport { Checkbox } from 'tinper-bee';\n\nclass Demo1 extends Component {\n    constructor(props) {\n        super(props);\n        this.state = {\n            checkedFlag: true\n        }\n        this.onChange = this.onChange.bind(this);\n    }\n\n    onChange(e) {\n        console.log(e);\n        this.setState({checkedFlag: e});\n    }\n\n    handleDblClick = (state) => {\n\t\tconsole.log(state);\n    }\n\n    render() {\n        return (\n            <div className=\"demo-checkbox\">\n                <Checkbox\n                    disabled\n                    className=\"test\" >\n                </Checkbox>\n                <Checkbox\n                    disabled\n                    checked={true}\n                    className=\"test\" >\n                </Checkbox>\n                <Checkbox\n                    // onDoubleClick={ this.handleDblClick }\n                    ref=\"test\"\n                    checked={this.state.checkedFlag}\n                    onChange={this.onChange}>\n                    Checkbox\n                </Checkbox>\n            </div>\n        )\n    }\n}\n\n","desc":" `checked` 参数设置是否选中，`disabled`设置是否可用，`onDoubleClick`定义双击事件。","scss_code":""},{"example":<Demo2 />,"title":" 不同颜色的 Checkbox","code":"/**\n * @title 不同颜色的 Checkbox\n * @description `colors`参数控制背景色\n */\n\nimport React, { Component } from 'react';\nimport { Checkbox } from 'tinper-bee';\n\nclass Demo2 extends Component {\n\trender(){\n\t\treturn (\n\t\t\t<div className=\"demo-checkbox\">\n\t\t\t\t<Checkbox colors=\"primary\">primary</Checkbox>\n\t\t\t\t<Checkbox colors=\"success\">success</Checkbox>\n\t\t\t\t<Checkbox colors=\"info\">info</Checkbox>\n\t\t\t\t<Checkbox colors=\"danger\">danger</Checkbox>\n\t\t\t\t<Checkbox colors=\"warning\">warning</Checkbox>\n\t\t\t\t<Checkbox colors=\"dark\">dark</Checkbox>\n\t\t\t</div>\n\t\t)\n\t}\n}\n\n","desc":" `colors`参数控制背景色","scss_code":""},{"example":<Demo3 />,"title":" 受控的 Checkbox","code":"/**\n * @title 受控的 Checkbox\n * @description `checked` 参数设置是否选中，`disabled`设置是否可用。\n */\n\nimport React, { Component } from 'react';\nimport { Checkbox, Button } from 'tinper-bee';\n\nclass Demo3 extends Component {\n\tconstructor(props) {\n\t\tsuper(props);\n\t\tthis.state = {\n\t\t\tchecked: false,\n\t\t\tdisabled: false\n\t\t}\n\t}\n\tchangeCheck=()=> {\n\t\tthis.setState({checked:!this.state.checked});\n\t}\n\tchangeDisabled=()=> {\n\t\tthis.setState({disabled:!this.state.disabled});\n\t}\n\trender () {\n\t\tconst label = `${this.state.checked ? 'Checked' : 'Unchecked'}-${this.state.disabled ? 'Disabled' : 'Enabled'}`;\n\t\treturn (\n\t\t\t<div className=\"demo-checkbox\">\n\t\t\t\t<p>\n\t\t\t\t\t<Button \n\t\t\t\t\t\tcolors=\"secondary\" \n\t\t\t\t\t\tonClick={this.changeCheck.bind(this)}\n\t\t\t\t\t\tstyle={{marginRight:\"8px\"}}\n\t\t\t\t\t>\n\t\t\t\t\t\t{!this.state.checked ? 'Check' : 'Uncheck'}\n\t\t\t\t\t</Button>\n\t\t\t\t\t<Button \n\t\t\t\t\t\tcolors=\"secondary\" \n\t\t\t\t\t\tonClick={this.changeDisabled.bind(this)}\n\t\t\t\t\t>\n\t\t\t\t\t\t{!this.state.disabled ? 'Disable' : 'Enable'}\n\t\t\t\t\t</Button>\n\t\t\t\t</p>\t\n\t\t\t\t<p>\n\t\t\t\t\t<Checkbox \n\t\t\t\t\t\tchecked={this.state.checked} \n\t\t\t\t\t\tdisabled={this.state.disabled} \n\t\t\t\t\t\tonChange={this.changeCheck}\n\t\t\t\t\t>\n\t\t\t\t\t\t{label }\n\t\t\t\t\t</Checkbox>\n\t\t\t\t</p>\n\t\t\t</div>\n\t\t)\n\t}\n}\n","desc":" `checked` 参数设置是否选中，`disabled`设置是否可用。","scss_code":""},{"example":<Demo4 />,"title":" CheckboxGroup基本使用","code":"/**\n * @title CheckboxGroup基本使用\n * @description `value` 参数设置默认值，`onChange`设置值改变的回调，`disabled`设置是否可用\n */\n\nimport React, { Component } from 'react';\nimport { Checkbox } from 'tinper-bee';\n\n\nconst CheckboxGroup = Checkbox.CheckboxGroup;\n\nclass Demo4 extends Component {\n\tconstructor(props) {\n\t\tsuper(props);\n\t\tthis.state = {\n\t\t\tvalue1:['3','4'],\n\t\t\tvalue2:['3','4']\n\t\t}\n\t}\n\tchange=(value)=>{\n\t\tconsole.log(value)\n\t\tthis.setState({\n\t\t\tvalue1:value\n\t\t})\n\t}\n\trender () {\n\t\treturn (\n\t\t\t<div className=\"demo-checkbox\">\n\t\t\t\t<CheckboxGroup value={this.state.value1} onChange={this.change}>\n\t\t\t\t\t<Checkbox value='1'>\n\t\t\t\t\t\t1\n\t\t\t\t\t</Checkbox>\n\t\t\t\t\t<Checkbox value='2'>\n\t\t\t\t\t\t2\n\t\t\t\t\t</Checkbox>\n\t\t\t\t\t<Checkbox value='3'>\n\t\t\t\t\t\t3\n\t\t\t\t\t</Checkbox>\n\t\t\t\t\t<Checkbox value='4'>\n\t\t\t\t\t\t4\n\t\t\t\t\t</Checkbox>\n\t\t\t\t\t<Checkbox value='5'>\n\t\t\t\t\t\t5\n\t\t\t\t\t</Checkbox>\n\t\t\t\t</CheckboxGroup>\n\t\t\t\t<CheckboxGroup disabled value={this.state.value2}>\n\t\t\t\t\t<Checkbox value='1'>\n\t\t\t\t\t\t1\n\t\t\t\t\t</Checkbox>\n\t\t\t\t\t<Checkbox value='2'>\n\t\t\t\t\t\t2\n\t\t\t\t\t</Checkbox>\n\t\t\t\t\t<Checkbox value='3'>\n\t\t\t\t\t\t3\n\t\t\t\t\t</Checkbox>\n\t\t\t\t\t<Checkbox value='4'>\n\t\t\t\t\t\t4\n\t\t\t\t\t</Checkbox>\n\t\t\t\t\t<Checkbox value='5'>\n\t\t\t\t\t\t5\n\t\t\t\t\t</Checkbox>\n\t\t\t\t</CheckboxGroup>\n\t\t\t</div>\n\t\t)\n\t}\n}\n","desc":" `value` 参数设置默认值，`onChange`设置值改变的回调，`disabled`设置是否可用"},{"example":<Demo5 />,"title":" CheckboxGroup在form中使用","code":"/**\n * @title CheckboxGroup在form中使用\n * @description `value` 参数设置默认值，`onChange`设置值改变的回调。\n */\n\nimport React, { Component } from 'react';\nimport { Checkbox, Button, Form } from 'tinper-bee';\n\n\nconst CheckboxGroup = Checkbox.CheckboxGroup;\n\nclass Demo4 extends Component {\n\tconstructor(props) {\n\t\tsuper(props);\n\t\tthis.state = {\n\t\t\tvalue:['3','4']\n\t\t}\n\t}\n\tchange=(value)=>{\n\t\tthis.setState({\n\t\t\tvalue\n\t\t})\n\t}\n\tclick=()=>{\n\t\tthis.props.form.validateFields((error,values)=>{\n\t\t\tconsole.log(values)\n\t\t})\n\t}\n\trender () {\n\t\tconst self = this;\n\t\tconst { getFieldProps, getFieldError }  = this.props.form;\n\t\treturn (\n\t\t\t<div className=\"demo-checkbox\">\n\t\t\t\t<CheckboxGroup \n\t\t\t\t\t{\n\t\t\t\t\t\t...getFieldProps('name',{\n\t\t\t\t\t\t\tinitialValue:['2','3'],\n\t\t\t\t\t\t\tonChange:self.change\n\t\t\t\t\t\t})\n\t\t\t\t\t}\n\t\t\t\t>\n\t\t\t\t\t<Checkbox value='1'>\n\t\t\t\t\t\t1\n\t\t\t\t\t</Checkbox>\n\t\t\t\t\t<Checkbox value='2'>\n\t\t\t\t\t\t2\n\t\t\t\t\t</Checkbox>\n\t\t\t\t\t<Checkbox value='3'>\n\t\t\t\t\t\t3\n\t\t\t\t\t</Checkbox>\n\t\t\t\t\t<Checkbox value='4'>\n\t\t\t\t\t\t4\n\t\t\t\t\t</Checkbox>\n\t\t\t\t\t<Checkbox value='5'>\n\t\t\t\t\t\t5\n\t\t\t\t\t</Checkbox>\n\t\t\t\t</CheckboxGroup>\n\t\t\t\t<Button colors=\"secondary\" onClick={this.click}>submit</Button>\n\t\t\t</div>\n\t\t)\n\t}\n}\n","desc":" `value` 参数设置默认值，`onChange`设置值改变的回调。"},{"example":<Demo6 />,"title":" 全选","code":"/**\n * @title 全选\n * @description `indeterminate` 参数设置部分选中状态。\n */\n\n\nimport React, {Component} from 'react';\nimport { Checkbox } from 'tinper-bee';\n\nconst CheckboxGroup = Checkbox.CheckboxGroup;\n\nconst plainOptions = ['1','2','3','4','5'];\nconst defaultCheckedList = ['2','3'];\n\nclass Demo7 extends Component {\n    constructor(props) {\n        super(props);\n        this.state = {\n            checkedList: defaultCheckedList,\n            indeterminate: true,\n            checkAll: false\n        }\n        this.onChange = this.onChange.bind(this);\n    }\n\n    onCheckAllChange = (e) => {\n        console.log(e);\n        this.setState({\n          checkedList: e ? plainOptions : [],\n          indeterminate: false,\n          checkAll: e,\n        });\n    }\n\n    onChange(checkedList) {\n        console.log(checkedList)\n        this.setState({\n            checkedList: checkedList,\n            indeterminate: !!checkedList.length && (checkedList.length < plainOptions.length),\n            checkAll: checkedList.length === plainOptions.length\n        });\n    }\n\n    render() {\n        return (\n            <div className=\"demo-checkbox\">\n                <Checkbox\n                    ref=\"test\"\n                    indeterminate={this.state.indeterminate}\n                    onChange={this.onCheckAllChange}\n                    checked={this.state.checkAll}>\n                    全选\n                </Checkbox>\n                <br/>\n                <CheckboxGroup value={this.state.checkedList} onChange={this.onChange}>\n                    <Checkbox value='1'>1</Checkbox>\n                    <Checkbox value='2'>2</Checkbox>\n                    <Checkbox value='3'>3</Checkbox>\n                    <Checkbox value='4'>4</Checkbox>\n                    <Checkbox value='5'>5</Checkbox>\n                </CheckboxGroup>\n            </div>\n        )\n    }\n}\n\n","desc":" `indeterminate` 参数设置部分选中状态。"},{"example":<Demo7 />,"title":" 红色填充的 Checkbox","code":"/**\n * @title 红色填充的 Checkbox\n * @description `inverse` 参数设置选中为红色填充。\n */\n\n\nimport React, {Component} from 'react';\nimport { Checkbox } from 'tinper-bee';\n\nclass Demo7 extends Component {\n    constructor(props) {\n        super(props);\n        this.state = {\n            checkedFlag: false\n        }\n        this.onChange = this.onChange.bind(this);\n    }\n\n    onChange(e) {\n        console.log(e);\n        this.setState({checkedFlag: e});\n    }\n\n    render() {\n        return (\n            <div className=\"demo-checkbox\">\n                <Checkbox\n                    inverse\n                    ref=\"test\"\n                    checked={this.state.checkedFlag}\n                    onChange={this.onChange}>\n                    全选\n                </Checkbox>\n                <Checkbox\n                    inverse\n                    ref=\"test\"\n                    indeterminate>\n                    半选\n                </Checkbox>\n            </div>\n        )\n    }\n}\n\n","desc":" `inverse` 参数设置选中为红色填充。"}]


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
