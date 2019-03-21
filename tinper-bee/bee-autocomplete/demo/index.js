import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Drawer from 'bee-drawer';
import Clipboard from 'bee-clipboard'; 
import Button from '../src';



var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var DemoArray = [{"example":<Demo1 />,"title":" 根据输入框的内容，进行自动匹配列表显示","code":"/**\n *\n * @title 根据输入框的内容，进行自动匹配列表显示\n * @description 用户可以按需进行选择，支持光标操作，回车事件\n *\n */\nimport React, { Component } from \"react\";\nimport { AutoComplete } from 'tinper-bee';\n\nclass Demo1 extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      value: \"\",\n      options: [\"10000(博宇)\", \"10001(波波)\", \"10002(李刚)\"],\n      placeholder: \"查找关键字,请输入1\",\n      disabled: false\n    };\n  }\n  onFormChange = value => {\n    console.log(value);\n    this.setState({\n      value: value\n    });\n  };\n  render() {\n    let { value, options, placeholder, disabled } = this.state;\n    return (\n      <div className=\"demo\" style={{ marginBottom: \"90px\" }}>\n        <AutoComplete\n          value={value}\n          disabled={disabled}\n          options={options}\n          placeholder={placeholder}\n          onValueChange={value => this.onFormChange(value)}\n        />\n      </div>\n    );\n  }\n}\n\n\n","desc":" 用户可以按需进行选择，支持光标操作，回车事件"},{"example":<Demo2 />,"title":" 动态改变options参数","code":"/**\n *\n * @title 动态改变options参数\n * @description 用户可以按需进行选择，支持光标操作，回车事件\n *\n */\nimport React, { Component } from \"react\";\nimport { AutoComplete } from 'tinper-bee';\n\nclass Demo2 extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      value: \"\",\n      options: [],\n      placeholder: \"查找关键字,请输入a\",\n      disabled: false\n    };\n  }\n  onFormChange = value => {\n    if (value !== \"a\") {\n      this.setState({\n        value: value,\n        options: [\"ab\", \"abbbbb\", \"abbbbb\", \"aaaab\"]\n      });\n    } else {\n      this.setState({\n        value: value,\n        options: [\"a\", \"aa\", \"aaa\", \"aaaa\"]\n      });\n    }\n  };\n  render() {\n    let { value, options, placeholder, disabled } = this.state;\n    return (\n      <div className=\"demo\" style={{ marginBottom: \"110px\" }}>\n        <AutoComplete\n          value={value}\n          disabled={disabled}\n          options={options}\n          placeholder={placeholder}\n          onValueChange={value => this.onFormChange(value)}\n        />\n      </div>\n    );\n  }\n}\n\n\n","desc":" 用户可以按需进行选择，支持光标操作，回车事件"}]


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
