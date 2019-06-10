import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Drawer from 'bee-drawer';
import Clipboard from 'bee-clipboard'; 
import Button from '../src';



var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var Demo4 = require("./demolist/Demo4");var DemoArray = [{"example":<Demo1 />,"title":" 气泡卡片默认样式","code":"/**\n *\n * @title 气泡卡片默认样式\n * @description 支持12个位置\n */\n\nimport {Component} from 'react';\nimport { Popover, Button } from 'tinper-bee';\n\n\n class Demo1 extends Component {\n    constructor(props) {\n        super(props);\n    }\n\n    render() {\n        let content = (\n            <div>\n                <h3>消息</h3>\n                <ul>\n                    <li>您的服务器已宕机，请处理。</li>\n                    <li>您的手机已停机，请续费。</li>\n                    <li>你的工资已到账，请查收。</li>\n                </ul>\n            </div>\n        );\n        const buttonWidth = 72;\n        return (\n            <div className=\"demo1\">\n                <div style={{ marginLeft: buttonWidth, whiteSpace: 'nowrap' }}>\n                    <Popover placement=\"topLeft\" content={content}>\n                        <Button colors=\"primary\">左上</Button>\n                    </Popover>\n                    <Popover placement=\"top\" content={content}>\n                        <Button colors=\"primary\">上</Button>\n                    </Popover>\n                    <Popover placement=\"topRight\" content={content}>\n                        <Button colors=\"primary\">上右</Button>\n                    </Popover>\n                    </div>\n                    <div style={{ width: buttonWidth, float: 'left' }}>\n                    <Popover placement=\"leftTop\" content={content}>\n                        <Button colors=\"primary\">左上</Button>\n                    </Popover>\n                    <Popover placement=\"left\" content={content}>\n                        <Button colors=\"primary\">左</Button>\n                    </Popover>\n                    <Popover placement=\"leftBottom\" content={content}>\n                        <Button colors=\"primary\">左下</Button>\n                    </Popover>\n                    </div>\n                    <div style={{ width: buttonWidth, marginLeft: buttonWidth * 4 + 24 }}>\n                    <Popover placement=\"rightTop\" content={content}>\n                        <Button colors=\"primary\">右上</Button>\n                    </Popover>\n                    <Popover placement=\"right\" content={content}>\n                        <Button colors=\"primary\">右</Button>\n                    </Popover>\n                    <Popover placement=\"rightBottom\" content={content}>\n                        <Button colors=\"primary\">右下</Button>\n                    </Popover>\n                    </div>\n                    <div style={{ marginLeft: buttonWidth, clear: 'both', whiteSpace: 'nowrap' }}>\n                    <Popover placement=\"bottomLeft\" content={content}>\n                        <Button colors=\"primary\">下左</Button>\n                    </Popover>\n                    <Popover placement=\"bottom\" content={content}>\n                        <Button colors=\"primary\">下</Button>\n                    </Popover>\n                    <Popover placement=\"bottomRight\" content={content}>\n                        <Button colors=\"primary\">下右</Button>\n                    </Popover>\n                </div>\n            </div>\n        )\n    }\n}\n\n","desc":" 支持12个位置","scss_code":".demo1 {\n  margin: 100px 0 100px 250px;\n  .u-button {\n      margin-right: 8px;\n      margin-bottom: 8px;\n  }\n  .u-tooltip .tooltip-inner {\n      h3 {\n          margin: 16px 0;\n      }\n  }\n}"},{"example":<Demo2 />,"title":" 受控制的气泡卡片","code":"/**\n *\n * @title 受控制的气泡卡片\n * @description 通过设置show，来控制气泡卡片的显示和隐藏。注意：需要和 onHide 事件结合使用\n */\n\nimport {Component} from 'react';\nimport { Popover, Button } from 'tinper-bee';\n\n\nclass Demo2 extends Component {\n    constructor(props) {\n        super(props);\n        this.state = {\n            show: false\n        }\n    }\n\n    handleClose = () => {\n        this.setState({\n            show: false\n        })\n    }\n\n    show = () => {\n        this.setState({\n            show: true\n        })\n    }\n\n    onHide = (visible) => {\n        this.setState({\n            show: visible\n        })\n    }\n\n    render() {\n        let content = (\n            <div>\n                <Button\n                    colors=\"primary\"\n                    onClick={ this.handleClose }\n                    size=\"sm\">\n                    关闭\n                </Button>\n            </div>\n        )\n        return (\n            <div>\n                <Popover\n                    id=\"demo2\"\n                    placement=\"right\"\n                    title={<h3>请确认您的包裹已签收！</h3>}\n                    content={content}\n                    show={this.state.show}\n                    onHide={this.onHide}\n                >\n                    <Button\n                        colors=\"primary\"\n                        onClick={ this.show }\n                        >确认按钮</Button>\n                </Popover>\n            </div>\n        )\n    }\n}\n\n\n","desc":" 通过设置show，来控制气泡卡片的显示和隐藏。注意：需要和 onHide 事件结合使用"},{"example":<Demo3 />,"title":" 提示类组件支持出现在可配置的container中","code":"/**\n * @title 提示类组件支持出现在可配置的container中\n * @description \"container\"可以是DOM元素/React组件/或者返回React组件的函数，注意，容器需要设置定位\n */\n\nimport React, { Component } from 'react';\nimport { Popover } from 'tinper-bee';\n\nclass Demo3 extends Component {\n    state = {\n        show: false\n    }\n\n    content = (\n        <div>\n            <p>我会跟着移动！</p>\n        </div>\n    )\n\n    show = () => {\n        this.setState({\n            show: true\n        })\n    }\n\n    handleVisibleChange = visible => {\n        console.log('onVisibleChange：',visible)\n    };\n\n    handleHide = (visible) => {\n        console.log('onHide：',visible);\n        this.setState({\n            show: visible\n        })\n    }\n\n    render () {\n        let { show } = this.state;\n\n        return (\n            <div className=\"demo-popover\">\n                <div className=\"demo-popover-box\">\n                    <div className=\"demo-popover-wrapper\" ref={ref => this.container = ref}>\n                        <Popover\n                            id=\"demo3\"\n                            trigger=\"click\"\n                            content={this.content}\n                            container={this.container ? this.container : null}\n                            show={show}\n                            onVisibleChange={this.handleVisibleChange}\n                            onHide={this.handleHide}\n                        >\n                            <span className=\"demo-popover-text\" onClick={this.show}>点击我，popover会跟随我移动</span>\n                        </Popover>\n                    </div>\n                </div>\n            </div>\n        );\n    }\n}\n\n","desc":" \"container\"可以是DOM元素/React组件/或者返回React组件的函数，注意，容器需要设置定位","scss_code":".demo-popover {\n  &-box {\n    width: 100%;\n    height: 200px;\n    line-height: 100px;\n    overflow: auto;\n    border: 1px solid #ccc;\n    border-radius: 5px;\n  }\n\n  &-wrapper {\n    width: 120%;\n    position: relative;\n  }\n\n  &-text{\n    font-size: 14px;\n    cursor: pointer;\n  }\n\n}"},{"example":<Demo4 />,"title":" 自定义弹出框向上/向左偏移量","code":"/**\n *\n * @title 自定义弹出框向上/向左偏移量\n * @description 通过设置 `positionTop` 和 `positionLeft`，可自定义弹出框向上/向左偏移量。指定的数值分别代表弹出框距离浏览器窗口上侧和左侧的距离。\n */\n\nimport {Component} from 'react';\nimport { Popover, Button } from 'tinper-bee';\n\nclass Demo4 extends Component {\n    render() {\n        let content = (\n            <p>\n                请确认您的包裹已签收！\n            </p>\n        )\n        return (\n            <div>\n                <Popover\n                    id=\"demo4\"\n                    placement=\"right\"\n                    trigger=\"click\"\n                    // positionTop={1050}\n                    // positionLeft={106}\n                    title={<p>消息</p>}\n                    content={content}\n                >\n                    <Button colors=\"primary\">确认按钮</Button>\n                </Popover>\n            </div>\n        )\n    }\n}\n\n\n","desc":" 通过设置 `positionTop` 和 `positionLeft`，可自定义弹出框向上/向左偏移量。指定的数值分别代表弹出框距离浏览器窗口上侧和左侧的距离。"}]


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
