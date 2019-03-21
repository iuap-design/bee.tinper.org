import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Drawer from 'bee-drawer';
import Clipboard from 'bee-clipboard'; 
import Button from '../src';



var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var Demo4 = require("./demolist/Demo4");var Demo5 = require("./demolist/Demo5");var DemoArray = [{"example":<Demo1 />,"title":" 常用基础 Step","code":"/**\n*\n* @title 常用基础 Step\n* @description current 标记当前进行哪一步\n*\n*/\n\nimport React, { Component } from 'react';\nimport { Step } from 'tinper-bee';\n\nclass Demo1 extends Component {\n  render () {\n      return (\n          <Step.Steps current={1}>\n            <Step title=\"Finished\" description=\"This is a description.\" />\n            <Step title=\"In Progress\" description=\"This is a description.\" />\n            <Step title=\"Waiting\" description=\"This is a description.\" />\n          </Step.Steps>\n      )\n  }\n}\n\n\n","desc":" current 标记当前进行哪一步"},{"example":<Demo2 />,"title":" 自定义icon Step","code":"/**\n*\n* @title 自定义icon Step\n* @description\n*\n*/\n\nimport React, { Component } from 'react';\nimport { Step, Icon } from 'tinper-bee';\n\nclass Demo2 extends Component {\n  render () {\n      return (\n        <Step.Steps>\n          <Step status=\"finish\" title=\"Login\" icon={<Icon type=\"uf-users-o\" />} />\n          <Step status=\"finish\" title=\"Verification\" icon={<Icon type=\"uf-personin-o\" />} />\n          <Step status=\"process\" title=\"Pay\" icon={<Icon type=\"uf-creditcard\" />} />\n          <Step status=\"wait\" title=\"Done\" icon={<Icon type=\"uf-correct-2\" />} />\n        </Step.Steps>\n      )\n  }\n}\n\n","desc":""},{"example":<Demo3 />,"title":" 结合切换事件的 Step","code":"\n/**\n*\n* @title 结合切换事件的 Step\n* @description 点击next，Step的流程跟进\n*\n*/\nimport React, { Component } from 'react';\nimport { Step, Button, Message } from 'tinper-bee';\n\nconst Steps = Step.Steps;\n\nconst steps = [{\n  title: 'First',\n  content: 'First-content',\n}, {\n  title: 'Second',\n  content: 'Second-content',\n}, {\n  title: 'Last',\n  content: 'Last-content',\n}];\n\nclass Demo3 extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      current: 0,\n    };\n  }\n  next() {\n    const current = this.state.current + 1;\n    this.setState({ current });\n  }\n  prev() {\n    const current = this.state.current - 1;\n    this.setState({ current });\n  }\n\n  alertDone() {\n    Message.create({content: '完成', color: 'info'});\n  }\n\n  render() {\n    const { current } = this.state;\n    return (\n      <div>\n        <Steps current={current}>\n          {steps.map(item => <Step key={item.title} title={item.title} />)}\n        </Steps>\n        <div className=\"steps-content\">{steps[this.state.current].content}</div>\n        <div className=\"steps-action\">\n          {\n            this.state.current < steps.length - 1\n            &&\n            <Button type=\"primary\" onClick={() => this.next()}>下一页</Button>\n          }\n          {\n            this.state.current === steps.length - 1\n            &&\n            <Button type=\"primary\" onClick={() => this.alertDone()}>完成</Button>\n          }\n          {\n            this.state.current > 0\n            &&\n            <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>\n              上一页\n            </Button>\n          }\n        </div>\n      </div>\n    );\n  }\n}\n\n","desc":" 点击next，Step的流程跟进","scss_code":".steps-content {\n  margin-top: 16px;\n  border: 1px dashed #e9e9e9;\n  border-radius: 6px;\n  background-color: #fafafa;\n  min-height: 200px;\n  text-align: center;\n  padding-top: 80px;\n}\n\n.steps-action {\n  margin-top: 24px;\n}"},{"example":<Demo4 />,"title":" vertical Step","code":"/**\n*\n* @title vertical Step\n* @description \n*\n*/\n\nimport React, { Component } from 'react';\nimport { Step } from 'tinper-bee';\n\nconst Steps = Step.Steps;\n\nclass Demo4 extends Component {\n  render () {\n      return (\n        <div>\n          <Steps direction=\"vertical\" size=\"small\" current={1}>\n            <Step title=\"Finished\" description=\"This is a description.\" />\n            <Step title=\"In Progress\" description=\"This is a description.\" />\n            <Step title=\"Waiting\" description=\"This is a description.\" />\n         </Steps>\n        </div>\n      )\n  }\n}\n\n","desc":" "},{"example":<Demo5 />,"title":" 指定状态的Step","code":"/**\n*\n* @title 指定状态的Step\n* @description  用step的status属性，指定当前step的状态\n*\n*/\n\nimport React, { Component } from 'react';\nimport { Step } from 'tinper-bee';\n\nconst Steps = Step.Steps;\n\nclass Demo5 extends Component {\n  render () {\n      return (\n        <div>\n          <Steps current={1} status=\"error\">\n            <Step title=\"Finished\" description=\"This is a description\" />\n            <Step title=\"In Process\" description=\"This is a description\" />\n            <Step title=\"Waiting\" description=\"This is a description\" />\n        </Steps>\n        </div>\n      )\n  }\n}\n\n","desc":"  用step的status属性，指定当前step的状态"}]


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
