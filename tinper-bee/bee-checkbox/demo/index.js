import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Drawer from 'bee-drawer';
import Clipboard from 'bee-clipboard'; 
import Button from '../src';



var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var Demo4 = require("./demolist/Demo4");var Demo5 = require("./demolist/Demo5");var Demo6 = require("./demolist/Demo6");var Demo7 = require("./demolist/Demo7");var DemoArray = [{"example":<Demo1 />,"title":" 基本用法","code":"/**\r\n * @title 基本用法\r\n * @description `checked` 参数设置是否选中，`disabled`设置是否可用，`onDoubleClick`定义双击事件。\r\n */\r\n\r\n\r\nimport React, {Component} from 'react';\nimport { Checkbox } from 'tinper-bee';\r\n\r\n\r\nclass Demo1 extends Component {\r\n    constructor(props) {\r\n        super(props);\r\n        this.state = {\r\n            checkedFlag: true\r\n        }\r\n        this.onChange = this.onChange.bind(this);\r\n    }\r\n\r\n    onChange(e) {\r\n        console.log(e);\r\n        this.setState({checkedFlag: e});\r\n    }\r\n\r\n    handleDblClick = (state) => {\r\n\t\tconsole.log(state);\r\n    }\r\n\r\n    render() {\r\n        return (\r\n            <div className=\"demo-checkbox\">\r\n                <Checkbox\r\n                    disabled\r\n                    className=\"test\" >\r\n                </Checkbox>\r\n                <Checkbox\r\n                    disabled\r\n                    checked={true}\r\n                    className=\"test\" >\r\n                </Checkbox>\r\n                <Checkbox\r\n                    // onDoubleClick={ this.handleDblClick }\r\n                    ref=\"test\"\r\n                    checked={this.state.checkedFlag}\r\n                    onChange={this.onChange}>\r\n                    Checkbox\r\n                </Checkbox>\r\n            </div>\r\n        )\r\n    }\r\n}\r\n\r\nexport default Demo1;","desc":" `checked` 参数设置是否选中，`disabled`设置是否可用，`onDoubleClick`定义双击事件。","scss_code":""},{"example":<Demo2 />,"title":" 不同颜色的 Checkbox","code":"/**\r\n * @title 不同颜色的 Checkbox\r\n * @description `colors`参数控制背景色\r\n */\r\n\r\nimport React, { Component } from 'react';\nimport { Checkbox } from 'tinper-bee';\r\n\r\n\r\nclass Demo2 extends Component {\r\n\trender(){\r\n\t\treturn (\r\n\t\t\t<div className=\"demo-checkbox\">\r\n\t\t\t\t<Checkbox colors=\"primary\">primary</Checkbox>\r\n\t\t\t\t<Checkbox colors=\"success\">success</Checkbox>\r\n\t\t\t\t<Checkbox colors=\"info\">info</Checkbox>\r\n\t\t\t\t<Checkbox colors=\"danger\">danger</Checkbox>\r\n\t\t\t\t<Checkbox colors=\"warning\">warning</Checkbox>\r\n\t\t\t\t<Checkbox colors=\"dark\">dark</Checkbox>\r\n\t\t\t</div>\r\n\t\t)\r\n\t}\r\n}\r\nexport default Demo2;\r\n","desc":" `colors`参数控制背景色","scss_code":""},{"example":<Demo3 />,"title":" 受控的 Checkbox","code":"/**\r\n * @title 受控的 Checkbox\r\n * @description `checked` 参数设置是否选中，`disabled`设置是否可用。\r\n */\r\n\r\nimport React, { Component } from 'react';\nimport { Button, Checkbox } from 'tinper-bee';\r\n\r\n\n\r\nclass Demo3 extends Component {\r\n\tconstructor(props) {\r\n\t\tsuper(props);\r\n\t\tthis.state = {\r\n\t\t\tchecked: false,\r\n\t\t\tdisabled: false\r\n\t\t}\r\n\t}\r\n\tchangeCheck=()=> {\r\n\t\tthis.setState({checked:!this.state.checked});\r\n\t}\r\n\tchangeDisabled=()=> {\r\n\t\tthis.setState({disabled:!this.state.disabled});\r\n\t}\r\n\trender () {\r\n\t\tconst label = `${this.state.checked ? 'Checked' : 'Unchecked'}-${this.state.disabled ? 'Disabled' : 'Enabled'}`;\r\n\t\treturn (\r\n\t\t\t<div className=\"demo-checkbox\">\r\n\t\t\t\t<p>\r\n\t\t\t\t\t<Button \r\n\t\t\t\t\t\tcolors=\"secondary\" \r\n\t\t\t\t\t\tonClick={this.changeCheck.bind(this)}\r\n\t\t\t\t\t\tstyle={{marginRight:\"8px\"}}\r\n\t\t\t\t\t>\r\n\t\t\t\t\t\t{!this.state.checked ? 'Check' : 'Uncheck'}\r\n\t\t\t\t\t</Button>\r\n\t\t\t\t\t<Button \r\n\t\t\t\t\t\tcolors=\"secondary\" \r\n\t\t\t\t\t\tonClick={this.changeDisabled.bind(this)}\r\n\t\t\t\t\t>\r\n\t\t\t\t\t\t{!this.state.disabled ? 'Disable' : 'Enable'}\r\n\t\t\t\t\t</Button>\r\n\t\t\t\t</p>\t\r\n\t\t\t\t<p>\r\n\t\t\t\t\t<Checkbox \r\n\t\t\t\t\t\tchecked={this.state.checked} \r\n\t\t\t\t\t\tdisabled={this.state.disabled} \r\n\t\t\t\t\t\tonChange={this.changeCheck}\r\n\t\t\t\t\t>\r\n\t\t\t\t\t\t{label }\r\n\t\t\t\t\t</Checkbox>\r\n\t\t\t\t</p>\r\n\t\t\t</div>\r\n\t\t)\r\n\t}\r\n}\r\nexport default Demo3;","desc":" `checked` 参数设置是否选中，`disabled`设置是否可用。","scss_code":""},{"example":<Demo4 />,"title":" CheckboxGroup基本使用","code":"/**\r\n * @title CheckboxGroup基本使用\r\n * @description 方便的从数组生成 Checkbox 组。\r\n */\r\n\r\nimport React, { Component } from 'react';\nimport { Checkbox } from 'tinper-bee';\r\n\r\nconst CheckboxGroup = Checkbox.CheckboxGroup;\r\n\r\nconst plainOptions = ['Apple', 'Pear', 'Orange'];\r\nconst options = [\r\n  { label: 'Apple', value: 'Apple' },\r\n  { label: 'Pear', value: 'Pear' },\r\n  { label: 'Orange', value: 'Orange' },\r\n];\r\nconst optionsWithDisabled = [\r\n  { label: 'Apple', value: 'Apple' },\r\n  { label: 'Pear', value: 'Pear' },\r\n  { label: 'Orange', value: 'Orange', disabled: false },\r\n];\r\n\r\nclass Demo4 extends Component {\r\n\tconstructor(props) {\r\n\t\tsuper(props);\r\n\t}\r\n\tonChange(checkedValues) {\r\n\t\tconsole.log('checked = ', checkedValues);\r\n\t}\r\n\trender () {\r\n\t\treturn (\r\n\t\t\t<div className=\"demo-checkbox\">\r\n\t\t\t\t<CheckboxGroup options={plainOptions} defaultValue={['Apple']} onChange={this.onChange} />\r\n\t\t\r\n\t\t\t\t<CheckboxGroup options={options} defaultValue={['Pear']} onChange={this.onChange} />\r\n\t\t\t\r\n\t\t\t\t<CheckboxGroup\r\n\t\t\t\toptions={optionsWithDisabled}\r\n\t\t\t\tdisabled\r\n\t\t\t\tdefaultValue={['Apple']}\r\n\t\t\t\tonChange={this.onChange}\r\n\t\t\t\t/>\r\n\t\t\t</div>\r\n\t\t)\r\n\t}\r\n}\r\nexport default Demo4;","desc":" 方便的从数组生成 Checkbox 组。"},{"example":<Demo5 />,"title":" CheckboxGroup在form中使用","code":"/**\n * @title CheckboxGroup在form中使用\n * @description `value` 参数设置默认值，`onChange`设置值改变的回调。\n */\n\nimport React, { Component } from 'react';\nimport { Button, Form, Checkbox } from 'tinper-bee';\n\n\n\nconst CheckboxGroup = Checkbox.CheckboxGroup;\n\nclass Demo4 extends Component {\n\tconstructor(props) {\n\t\tsuper(props);\n\t\tthis.state = {\n\t\t\tvalue:['3','4']\n\t\t}\n\t}\n\tchange=(value)=>{\n\t\tthis.setState({\n\t\t\tvalue\n\t\t})\n\t}\n\tclick=()=>{\n\t\tthis.props.form.validateFields((error,values)=>{\n\t\t\tconsole.log(values)\n\t\t})\n\t}\n\trender () {\n\t\tconst self = this;\n\t\tconst { getFieldProps, getFieldError }  = this.props.form;\n\t\treturn (\n\t\t\t<div className=\"demo-checkbox\">\n\t\t\t\t<CheckboxGroup \n\t\t\t\t\t{\n\t\t\t\t\t\t...getFieldProps('name',{\n\t\t\t\t\t\t\tinitialValue:['2','3'],\n\t\t\t\t\t\t\tonChange:self.change\n\t\t\t\t\t\t})\n\t\t\t\t\t}\n\t\t\t\t>\n\t\t\t\t\t<Checkbox value='1'>\n\t\t\t\t\t\t1\n\t\t\t\t\t</Checkbox>\n\t\t\t\t\t<Checkbox value='2'>\n\t\t\t\t\t\t2\n\t\t\t\t\t</Checkbox>\n\t\t\t\t\t<Checkbox value='3'>\n\t\t\t\t\t\t3\n\t\t\t\t\t</Checkbox>\n\t\t\t\t\t<Checkbox value='4'>\n\t\t\t\t\t\t4\n\t\t\t\t\t</Checkbox>\n\t\t\t\t\t<Checkbox value='5'>\n\t\t\t\t\t\t5\n\t\t\t\t\t</Checkbox>\n\t\t\t\t</CheckboxGroup>\n\t\t\t\t<Button colors=\"secondary\" onClick={this.click}>submit</Button>\n\t\t\t</div>\n\t\t)\n\t}\n}\nexport default Form.createForm()(Demo4);","desc":" `value` 参数设置默认值，`onChange`设置值改变的回调。"},{"example":<Demo6 />,"title":" 全选","code":"/**\r\n * @title 全选\r\n * @description `indeterminate` 参数设置部分选中状态。\r\n */\r\n\r\n\r\nimport React, {Component} from 'react';\nimport { Checkbox } from 'tinper-bee';\r\n\r\n\r\nconst CheckboxGroup = Checkbox.CheckboxGroup;\r\n\r\nconst plainOptions = ['1','2','3','4','5'];\r\nconst defaultCheckedList = ['2','3'];\r\n\r\nclass Demo7 extends Component {\r\n    constructor(props) {\r\n        super(props);\r\n        this.state = {\r\n            checkedList: defaultCheckedList,\r\n            indeterminate: true,\r\n            checkAll: false\r\n        }\r\n        this.onChange = this.onChange.bind(this);\r\n    }\r\n\r\n    onCheckAllChange = (e) => {\r\n        console.log(e);\r\n        this.setState({\r\n          checkedList: e ? plainOptions : [],\r\n          indeterminate: false,\r\n          checkAll: e,\r\n        });\r\n    }\r\n\r\n    onChange(checkedList) {\r\n        console.log(checkedList)\r\n        this.setState({\r\n            checkedList: checkedList,\r\n            indeterminate: !!checkedList.length && (checkedList.length < plainOptions.length),\r\n            checkAll: checkedList.length === plainOptions.length\r\n        });\r\n    }\r\n\r\n    render() {\r\n        return (\r\n            <div className=\"demo-checkbox\">\r\n                <Checkbox\r\n                    ref=\"test\"\r\n                    indeterminate={this.state.indeterminate}\r\n                    onChange={this.onCheckAllChange}\r\n                    checked={this.state.checkAll}>\r\n                    全选\r\n                </Checkbox>\r\n                <br/>\r\n                <CheckboxGroup value={this.state.checkedList} onChange={this.onChange}>\r\n                    <Checkbox value='1'>1</Checkbox>\r\n                    <Checkbox value='2'>2</Checkbox>\r\n                    <Checkbox value='3'>3</Checkbox>\r\n                    <Checkbox value='4'>4</Checkbox>\r\n                    <Checkbox value='5'>5</Checkbox>\r\n                </CheckboxGroup>\r\n            </div>\r\n        )\r\n    }\r\n}\r\n\r\nexport default Demo7;","desc":" `indeterminate` 参数设置部分选中状态。"},{"example":<Demo7 />,"title":" 红色填充的 Checkbox","code":"/**\r\n * @title 红色填充的 Checkbox\r\n * @description `inverse` 参数设置选中为红色填充。\r\n */\r\n\r\n\r\nimport React, {Component} from 'react';\nimport { Checkbox } from 'tinper-bee';\r\n\r\n\r\nclass Demo7 extends Component {\r\n    constructor(props) {\r\n        super(props);\r\n        this.state = {\r\n            checkedFlag: false\r\n        }\r\n        this.onChange = this.onChange.bind(this);\r\n    }\r\n\r\n    onChange(e) {\r\n        console.log(e);\r\n        this.setState({checkedFlag: e});\r\n    }\r\n\r\n    render() {\r\n        return (\r\n            <div className=\"demo-checkbox\">\r\n                <Checkbox\r\n                    inverse\r\n                    ref=\"test\"\r\n                    checked={this.state.checkedFlag}\r\n                    onChange={this.onChange}>\r\n                    全选\r\n                </Checkbox>\r\n                <Checkbox\r\n                    inverse\r\n                    ref=\"test\"\r\n                    indeterminate>\r\n                    半选\r\n                </Checkbox>\r\n            </div>\r\n        )\r\n    }\r\n}\r\n\r\nexport default Demo7;","desc":" `inverse` 参数设置选中为红色填充。"}]


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
