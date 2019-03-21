import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Drawer from 'bee-drawer';
import Clipboard from 'bee-clipboard'; 
import Button from '../src';



var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var DemoArray = [{"example":<Demo1 />,"title":"  FormGroup 三种校验状态实例","code":"/**\n * @title  FormGroup 三种校验状态实例\n * @description `validationState`参数控制状态颜色\n */\n\nimport { Component } from 'react';\nimport { FormGroup, FormControl } from 'tinper-bee';\n\n class Demo1 extends Component {\n\trender () {\n\t\treturn (\n\t\t\t<div className=\"demo-form-group\">\n\t        \t<FormGroup validationState=\"error\"> \n\t\t\t\t\t<FormControl type=\"text\" />\n\t\t\t\t</FormGroup>\t\n\t\t\t\t<FormGroup validationState=\"warning\"> \n\t\t\t\t\t<FormControl type=\"text\" />\n\t\t\t\t</FormGroup>\t\n\t\t\t\t<FormGroup validationState=\"success\"> \n\t\t\t\t\t<FormControl type=\"text\" />\n\t\t\t\t</FormGroup>\t\t\t\n\t        </div>\n\t\t)\n\t}\n}\n\n","desc":" `validationState`参数控制状态颜色"},{"example":<Demo2 />,"title":" FormGroup 动态校验实例","code":"/**\n * @title FormGroup 动态校验实例\n * @description 限制只能输入数字\n */\nimport React, { Component } from 'react';\nimport { FormGroup, FormControl } from 'tinper-bee';\n\nclass Demo2 extends Component {\n    constructor (props) {\n        super(props);\n        this.state = {\n            value: ''\n        }\n    }\n    validateState () {\n\n        if ( this.state.value == \"\" ) {\n            return \"warning\";\n        }\n        if ( /^[0-9]*$/.test(this.state.value) ) {\n            return \"success\";\n        } else {\n            return \"error\"\n        }\n    }\n\n    handerChange (e) {\n        this.setState({value:e});\n    }\n    render (){\n        return( \n            <div className=\"demo-form-control\">\n                <FormGroup ref='demo3FormGroup' validationState={this.validateState()}>\n                    <FormControl ref=\"demo3FormControl\" placeholder=\"只能输入数字\" value={this.state.value} onChange={this.handerChange.bind(this)}/> \n                </FormGroup>\n            </div>\n        )\n    }\n\n}\n\n","desc":" 限制只能输入数字"}]


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
