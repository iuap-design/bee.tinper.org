import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Drawer from 'bee-drawer';
import Clipboard from 'bee-clipboard'; 
import Button from '../src';



var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var DemoArray = [{"example":<Demo1 />,"title":" 根据输入框的内容，进行自动匹配列表显示","code":"/**\n *\n * @title 根据输入框的内容，进行自动匹配列表显示\n * @description 通过`options`设置自动完成的数据源。支持光标操作，回车事件。\n *\n */\nimport React, { Component } from \"react\";\nimport { AutoComplete } from 'tinper-bee';\n\n\nclass Demo1 extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      value: \"\",\n      options: [\"10000\", \"10001\", \"10002\", \"11000\", \"12010\"],\n      placeholder: \"查找关键字,请输入1\",\n      disabled: false\n    };\n  }\n  onFormChange = value => {\n    console.log(value);\n    this.setState({\n      value: value\n    });\n  };\n  render() {\n    let { value, options, placeholder, disabled } = this.state;\n    return (\n      <div className=\"demo\" style={{ marginBottom: \"90px\" }}>\n        <AutoComplete\n          value={value}\n          disabled={disabled}\n          options={options}\n          placeholder={placeholder}\n          onValueChange={value => this.onFormChange(value)}\n        />\n      </div>\n    );\n  }\n}\n\nexport default Demo1;\n","desc":" 通过`options`设置自动完成的数据源。支持光标操作，回车事件。"},{"example":<Demo2 />,"title":" 动态改变 options 数据源","code":"/**\r\n *\r\n * @title 动态改变 options 数据源\r\n * @description `onSelectOption`为下拉框选中时触发的回调函数\r\n *\r\n */\r\nimport React, { Component } from \"react\";\nimport { AutoComplete } from 'tinper-bee';\r\n\r\n\r\nclass Demo2 extends Component {\r\n  constructor(props) {\r\n    super(props);\r\n    this.state = {\r\n      value: \"\",\r\n      options: [],\r\n      placeholder: \"查找关键字,请输入a\"\r\n    };\r\n  }\r\n\r\n  onFormChange = value => {\r\n    this.setState({\r\n      value: value,\r\n      options: !value ? [] : [value, value + value, value + value + value]\r\n    });\r\n  };\r\n\r\n  handleSelectChange = value => {\r\n    console.log('onSelectOption',value);\r\n  }\r\n\r\n  render() {\r\n    let { value, options, placeholder } = this.state;\r\n    return (\r\n      <div className=\"demo\" style={{ marginBottom: \"110px\" }}>\r\n        <AutoComplete\r\n          value={value}\r\n          options={options}\r\n          placeholder={placeholder}\r\n          onValueChange={value => this.onFormChange(value)}\r\n          onSelectOption={value => this.handleSelectChange(value)}\r\n        />\r\n      </div>\r\n    );\r\n  }\r\n}\r\n\r\nexport default Demo2;\r\n","desc":" `onSelectOption`为下拉框选中时触发的回调函数"},{"example":<Demo3 />,"title":" 受控的`AutoComplete`","code":"/**\r\n *\r\n * @title 受控的`AutoComplete`\r\n * @description `show`参数控制下拉框展开收起，`disabled`参数设置是否禁用\r\n *\r\n */\r\nimport React, { Component } from \"react\";\nimport { Button, AutoComplete } from 'tinper-bee';\r\n\n\r\n\r\nclass Demo3 extends Component {\r\n    constructor(props) {\r\n        super(props);\r\n        this.state = {\r\n            value: \"\",\r\n            options: [\"10000\", \"10001\", \"10002\", \"11000\", \"12010\"],\r\n            placeholder: \"查找关键字,请输入1\",\r\n            open: true,\r\n            disabled: false\r\n        };\r\n    }\r\n\r\n    handleChange = value => {\r\n        this.setState({\r\n            value: value,\r\n        });\r\n    };\r\n\r\n    changeOpen = () => {\r\n        this.setState({\r\n            open: !this.state.open,\r\n        });\r\n    }\r\n\r\n    changeDisabled = () => {\r\n        this.setState({\r\n            disabled: !this.state.disabled,\r\n        });\r\n    }\r\n\r\n    render() {\r\n        let { value, options, placeholder, open, disabled } = this.state;\r\n        return (\r\n        <div className=\"demo\" style={{ marginBottom: \"110px\" }}>\r\n            <div style={{marginBottom:16 + 'px'}}>\r\n                <Button onClick={this.changeOpen} style={{marginRight:16 + 'px'}}>{open ? '隐藏面板' : '显示面板'}</Button>\r\n                <Button onClick={this.changeDisabled}>{disabled ? '启用' : '禁用'}</Button>\r\n            </div>\r\n            <AutoComplete\r\n            show={open}\r\n            disabled={disabled}\r\n            value={value}\r\n            options={options}\r\n            placeholder={placeholder}\r\n            onChange={value => this.handleChange(value)}\r\n            />\r\n        </div>\r\n        );\r\n    }\r\n}\r\n\r\nexport default Demo3;\r\n","desc":" `show`参数控制下拉框展开收起，`disabled`参数设置是否禁用"}]


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
