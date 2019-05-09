import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Drawer from 'bee-drawer';
import Clipboard from 'bee-clipboard'; 
import Button from '../src';



var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var Demo4 = require("./demolist/Demo4");var Demo5 = require("./demolist/Demo5");var Demo6 = require("./demolist/Demo6");var DemoArray = [{"example":<Demo1 />,"title":" 基础 Step","code":"/**\r\n*\r\n* @title 基础 Step\r\n* @description current 标记当前进行哪一步\r\n*\r\n*/\r\n\r\nimport React, { Component } from 'react';\r\nimport { Step } from 'tinper-bee';\r\n\r\nclass Demo1 extends Component {\r\n  render () {\r\n      return (\r\n          <Step.Steps current={1}>\r\n            <Step title=\"已完成\" description=\"这是一段描述\" />\r\n            <Step title=\"进行中\" description=\"这是一段描述\" />\r\n            <Step title=\"未开始\" description=\"这是一段描述\" />\r\n          </Step.Steps>\r\n      )\r\n  }\r\n}\r\n\r\n\r\n","desc":" current 标记当前进行哪一步"},{"example":<Demo2 />,"title":" 自定义图标","code":"/**\r\n*\r\n* @title 自定义图标\r\n* @description\r\n*\r\n*/\r\n\r\nimport React, { Component } from 'react';\r\n\nimport { Step, Icon } from 'tinper-bee';\r\n\r\nclass Demo2 extends Component {\r\n  render () {\r\n      return (\r\n        <Step.Steps>\r\n          <Step status=\"finish\" title=\"登录\" icon={<Icon type=\"uf-users-o\" />} />\r\n          <Step status=\"finish\" title=\"身份认证\" icon={<Icon type=\"uf-personin-o\" />} />\r\n          <Step status=\"process\" title=\"支付\" icon={<Icon type=\"uf-creditcard\" />} />\r\n          <Step status=\"wait\" title=\"交易完成\" icon={<Icon type=\"uf-correct-2\" />} />\r\n        </Step.Steps>\r\n      )\r\n  }\r\n}\r\n\r\n","desc":""},{"example":<Demo3 />,"title":" 结合切换事件的 Step","code":"\r\n/**\r\n*\r\n* @title 结合切换事件的 Step\r\n* @description 点击next，Step的流程跟进\r\n*\r\n*/\r\nimport React, { Component } from 'react';\r\n\n\nimport { Step, Button, Message } from 'tinper-bee';\r\n\r\nconst Steps = Step.Steps;\r\n\r\nconst steps = [{\r\n  title: '填写申请信息',\r\n  content: '第一步：填写申请信息',\r\n}, {\r\n  title: '上传资料',\r\n  content: '第二步：上传资料',\r\n}, {\r\n  title: '提交申请',\r\n  content: '第三步：提交申请',\r\n}];\r\n\r\nclass Demo3 extends Component {\r\n  constructor(props) {\r\n    super(props);\r\n    this.state = {\r\n      current: 0,\r\n    };\r\n  }\r\n  next() {\r\n    const current = this.state.current + 1;\r\n    this.setState({ current });\r\n  }\r\n  prev() {\r\n    const current = this.state.current - 1;\r\n    this.setState({ current });\r\n  }\r\n\r\n  alertDone() {\r\n    Message.create({content: '完成', color: 'successlight'});\r\n  }\r\n\r\n  render() {\r\n    const { current } = this.state;\r\n    return (\r\n      <div>\r\n        <Steps current={current}>\r\n          {steps.map(item => <Step key={item.title} title={item.title} />)}\r\n        </Steps>\r\n        <div className=\"steps-content\">{steps[this.state.current].content}</div>\r\n        <div className=\"steps-action\">\r\n          {\r\n            this.state.current < steps.length - 1\r\n            &&\r\n            <Button type=\"primary\" onClick={() => this.next()}>下一步</Button>\r\n          }\r\n          {\r\n            this.state.current === steps.length - 1\r\n            &&\r\n            <Button type=\"primary\" onClick={() => this.alertDone()}>完成</Button>\r\n          }\r\n          {\r\n            this.state.current > 0\r\n            &&\r\n            <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>\r\n              上一步\r\n            </Button>\r\n          }\r\n        </div>\r\n      </div>\r\n    );\r\n  }\r\n}\r\n\r\n","desc":" 点击next，Step的流程跟进","scss_code":".steps-content {\r\n  margin-top: 16px;\r\n  border: 1px dashed #e9e9e9;\r\n  border-radius: 6px;\r\n  background-color: #fafafa;\r\n  min-height: 200px;\r\n  text-align: center;\r\n  padding-top: 80px;\r\n}\r\n\r\n.steps-action {\r\n  margin-top: 24px;\r\n}"},{"example":<Demo4 />,"title":" 竖向的 Step","code":"/**\n*\n* @title 竖向的 Step\n* @description 通过 `direction` API设置步骤条的方向，默认是水平方向 horizontal\n*\n*/\n\nimport React, { Component } from 'react';\nimport { Step } from 'tinper-bee';\n\nconst Steps = Step.Steps;\n\nclass Demo4 extends Component {\n  render () {\n      return (\n        <div>\n          <Steps direction=\"vertical\"  current={1}>\n            <Step title=\"已完成\" description=\"这是一段描述\" />\n            <Step title=\"进行中\" description=\"这是一段描述\" />\n            <Step title=\"未开始\" description=\"这是一段描述\" />\n         </Steps>\n        </div>\n      )\n  }\n}\n\n","desc":" 通过 `direction` API设置步骤条的方向，默认是水平方向 horizontal"},{"example":<Demo5 />,"title":" 指定状态的Step","code":"/**\r\n*\r\n* @title 指定状态的Step\r\n* @description  用step的status属性，指定当前step的状态\r\n*\r\n*/\r\n\r\nimport React, { Component } from 'react';\r\nimport { Step } from 'tinper-bee';\r\n\r\nconst Steps = Step.Steps;\r\n\r\nclass Demo5 extends Component {\r\n  render () {\r\n      return (\r\n        <div>\r\n          <Steps current={1} status=\"error\">\r\n            <Step title=\"已完成\" description=\"这是一段描述\" />\r\n            <Step title=\"进行中\" description=\"这是一段描述\" />\r\n            <Step title=\"未开始\" description=\"这是一段描述\" />\r\n          </Steps>\r\n        </div>\r\n      )\r\n  }\r\n}\r\n\r\n","desc":"  用step的status属性，指定当前step的状态"},{"example":<Demo6 />,"title":" 不同尺寸的 Step","code":"/**\r\n*\r\n* @title 不同尺寸的 Step\r\n* @description size 可设置为 small，默认是 default\r\n*\r\n*/\r\n\r\nimport React, { Component } from 'react';\r\nimport { Step } from 'tinper-bee';\r\n\r\nconst Steps = Step.Steps;\r\n\r\nclass Demo6 extends Component {\r\n  render () {\r\n      return (\r\n        <div>\r\n          <Steps current={1} size=\"small\">\r\n            <Step title=\"已完成\" description=\"这是一段描述\" />\r\n            <Step title=\"进行中\" description=\"这是一段描述\" />\r\n            <Step title=\"未开始\" description=\"这是一段描述\" />\r\n          </Steps>\r\n        </div>\r\n      )\r\n  }\r\n}\r\n\r\n\r\n","desc":" size 可设置为 small，默认是 default"}]


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
