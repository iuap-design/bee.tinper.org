import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Drawer from 'bee-drawer';
import Clipboard from 'bee-clipboard'; 
import Button from '../src';



var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var DemoArray = [{"example":<Demo1 />,"title":" 根据输入框的内容，进行自动匹配列表显示","code":"/**\r\n *\r\n * @title 根据输入框的内容，进行自动匹配列表显示\r\n * @description 用户可以按需进行选择，支持光标操作，回车事件\r\n *\r\n */\r\nimport React, { Component } from \"react\";\r\nimport { AutoComplete } from 'tinper-bee';\r\n\r\nclass Demo1 extends Component {\r\n  constructor(props) {\r\n    super(props);\r\n    this.state = {\r\n      value: \"\",\r\n      options: [\"10000\", \"10001\", \"10002\"],\r\n      placeholder: \"查找关键字,请输入1\",\r\n      disabled: false\r\n    };\r\n  }\r\n  onFormChange = value => {\r\n    console.log(value);\r\n    this.setState({\r\n      value: value\r\n    });\r\n  };\r\n  render() {\r\n    let { value, options, placeholder, disabled } = this.state;\r\n    return (\r\n      <div className=\"demo\" style={{ marginBottom: \"90px\" }}>\r\n        <AutoComplete\r\n          value={value}\r\n          disabled={disabled}\r\n          options={options}\r\n          placeholder={placeholder}\r\n          onValueChange={value => this.onFormChange(value)}\r\n        />\r\n      </div>\r\n    );\r\n  }\r\n}\r\n\r\n\r\n","desc":" 用户可以按需进行选择，支持光标操作，回车事件"},{"example":<Demo2 />,"title":" 动态改变options参数","code":"/**\r\n *\r\n * @title 动态改变options参数\r\n * @description 用户可以按需进行选择，支持光标操作，回车事件\r\n *\r\n */\r\nimport React, { Component } from \"react\";\r\nimport { AutoComplete } from 'tinper-bee';\r\n\r\nclass Demo2 extends Component {\r\n  constructor(props) {\r\n    super(props);\r\n    this.state = {\r\n      value: \"\",\r\n      options: [],\r\n      placeholder: \"查找关键字,请输入a\",\r\n      disabled: false\r\n    };\r\n  }\r\n  onFormChange = value => {\r\n    if (value !== \"a\") {\r\n      this.setState({\r\n        value: value,\r\n        options: [\"ab\", \"abbbbb\", \"abbbbb\", \"aaaab\"]\r\n      });\r\n    } else {\r\n      this.setState({\r\n        value: value,\r\n        options: [\"a\", \"aa\", \"aaa\", \"aaaa\"]\r\n      });\r\n    }\r\n  };\r\n  handleSelectChange = value => {\r\n    console.log('onSelectOption',value);\r\n  }\r\n  render() {\r\n    let { value, options, placeholder, disabled } = this.state;\r\n    return (\r\n      <div className=\"demo\" style={{ marginBottom: \"110px\" }}>\r\n        <AutoComplete\r\n          value={value}\r\n          disabled={disabled}\r\n          options={options}\r\n          placeholder={placeholder}\r\n          onValueChange={value => this.onFormChange(value)}\r\n          onSelectOption={value => this.handleSelectChange(value)}\r\n        />\r\n      </div>\r\n    );\r\n  }\r\n}\r\n\r\n\r\n","desc":" 用户可以按需进行选择，支持光标操作，回车事件"}]


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
