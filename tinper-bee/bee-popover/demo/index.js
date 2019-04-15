import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Drawer from 'bee-drawer';
import Clipboard from 'bee-clipboard'; 
import Button from '../src';



var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var DemoArray = [{"example":<Demo1 />,"title":" 气泡卡片默认样式","code":"/**\r\n *\r\n * @title 气泡卡片默认样式\r\n * @description 支持12个位置\r\n */\r\n\r\nimport {Component} from 'react';\r\nimport { Popover, Button } from 'tinper-bee';\r\n\n\r\n\r\n class Demo1 extends Component {\r\n    constructor(props) {\r\n        super(props);\r\n    }\r\n\r\n    onHide = () => {\r\n        console.log('onHide')\r\n    }\r\n\r\n    render() {\r\n        let content = (\r\n            <div>\r\n                <h3>消息</h3>\r\n                <ul>\r\n                    <li>您的服务器已宕机，请处理。</li>\r\n                    <li>您的手机已停机，请续费。</li>\r\n                    <li>你的工资已到账，请查收。</li>\r\n                </ul>\r\n            </div>\r\n        )\r\n        return (\r\n            <div style={{position: 'relative', height: 320, marginTop: 100, marginLeft: 250}}>\r\n                <Popover\r\n                    placement=\"leftTop\"\r\n                    content={content}\r\n                    onHide={this.onHide}\r\n                    trigger=\"hover\"\r\n                    id=\"leftTop\"\r\n                >\r\n                    <Button\r\n                        colors=\"primary\"\r\n                        style={{\r\n                            position: 'absolute',\r\n                            top: 5,\r\n                            left: 0\r\n                        }}>左上</Button>\r\n                </Popover>\r\n                <Popover\r\n                    placement=\"left\"\r\n                    content={content}\r\n                    trigger=\"hover\"\r\n                    id=\"left\"\r\n                >\r\n                    <Button\r\n                        colors=\"primary\"\r\n                        style={{\r\n                            position: 'absolute',\r\n                            top: 55,\r\n                            left: 0\r\n                        }}>左\r\n                    </Button>\r\n                </Popover>\r\n                <Popover\r\n                    placement=\"leftBottom\"\r\n                    content={content}\r\n                    trigger=\"hover\"\r\n                    id=\"leftBottom\"\r\n                >\r\n                    <Button\r\n                        colors=\"primary\"\r\n                        style={{\r\n                            position: 'absolute',\r\n                            top: 110,\r\n                            left: 0\r\n                        }}>左下</Button>\r\n                </Popover>\r\n                <Popover\r\n                    placement=\"topLeft\"\r\n                    content={content}\r\n                    trigger=\"hover\"\r\n                    id=\"topLeft\"\r\n                >\r\n                    <Button\r\n                        colors=\"primary\"\r\n                        style={{\r\n                            position: 'absolute',\r\n                            top: 0,\r\n                            left: 100\r\n                        }}>上左\r\n                    </Button>\r\n                </Popover>\r\n                <Popover\r\n                    placement=\"top\"\r\n                    content={content}\r\n                    trigger=\"hover\"\r\n                    id=\"top\"\r\n                >\r\n                    <Button\r\n                        colors=\"primary\"\r\n                        style={{\r\n                            position: 'absolute',\r\n                            top: 0,\r\n                            left: 200\r\n                        }}>上\r\n                    </Button>\r\n                </Popover>\r\n                <Popover\r\n                    placement=\"topRight\"\r\n                    content={content}\r\n                    trigger=\"hover\"\r\n                    id=\"topRight\"\r\n                >\r\n                    <Button\r\n                        colors=\"primary\"\r\n                        style={{\r\n                            position: 'absolute',\r\n                            top: 0,\r\n                            left: 300\r\n                        }}>\r\n                        上右\r\n                    </Button>\r\n                </Popover>\r\n                <Popover\r\n                    placement=\"rightTop\"\r\n                    content={content}\r\n                    trigger=\"hover\"\r\n                    id=\"rightTop\"\r\n                >\r\n                    <Button\r\n                        colors=\"primary\"\r\n                        style={{\r\n                            position: 'absolute',\r\n                            top: 5,\r\n                            left: 400\r\n                        }}>右上\r\n                    </Button>\r\n                </Popover>\r\n                <Popover\r\n                    placement=\"right\"\r\n                    content={content}\r\n                    trigger=\"hover\"\r\n                    id=\"right\"\r\n                >\r\n                    <Button\r\n                        colors=\"primary\"\r\n                        style={{\r\n                            position: 'absolute',\r\n                            top: 55,\r\n                            left: 400\r\n                        }}>右</Button>\r\n                </Popover>\r\n                <Popover\r\n                    placement=\"rightBottom\"\r\n                    content={content}\r\n                    trigger=\"hover\"\r\n                    id=\"rightBottom\"\r\n                >\r\n                    <Button\r\n                        colors=\"primary\"\r\n                        style={{\r\n                            position: 'absolute',\r\n                            top: 110,\r\n                            left: 400\r\n                        }}>右下</Button>\r\n                </Popover>\r\n                <Popover\r\n                    placement=\"bottomLeft\"\r\n                    content={content}\r\n                    trigger=\"hover\"\r\n                    id=\"bottomLeft\"\r\n                >\r\n                    <Button\r\n                        colors=\"primary\"\r\n                        style={{\r\n                            position: 'absolute',\r\n                            top: 115,\r\n                            left: 100\r\n                        }}>下左</Button>\r\n                </Popover>\r\n                <Popover\r\n                    placement=\"bottom\"\r\n                    content={content}\r\n                    trigger=\"hover\"\r\n                    id=\"bottom\"\r\n                >\r\n                    <Button\r\n                        colors=\"primary\"\r\n                        style={{\r\n                            position: 'absolute',\r\n                            top: 115,\r\n                            left: 200\r\n                        }}>下</Button>\r\n                </Popover>\r\n                <Popover\r\n                    placement=\"bottomRight\"\r\n                    content={content}\r\n                    trigger=\"hover\"\r\n                    id=\"bottomRight\"\r\n                >\r\n                    <Button\r\n                        colors=\"primary\"\r\n                        style={{\r\n                            position: 'absolute',\r\n                            top: 115,\r\n                            left: 300\r\n                        }}>下右</Button>\r\n                </Popover>\r\n            </div>\r\n        )\r\n    }\r\n}\r\n\r\n","desc":" 支持12个位置","scss_code":".demoPadding{\r\n  button{\r\n    margin: 10px;\r\n  }\r\n}\r\n\r\nul,li{\r\n  list-style: none;\r\n}"},{"example":<Demo2 />,"title":" 受控制的气泡卡片","code":"/**\r\n *\r\n * @title 受控制的气泡卡片\r\n * @description 通过设置show，来控制气泡卡片的显示和隐藏\r\n */\r\n\r\nimport {Component} from 'react';\r\nimport { Popover, Button } from 'tinper-bee';\r\n\n\r\n\r\nclass Demo2 extends Component {\r\n    constructor(props) {\r\n        super(props);\r\n        this.state = {\r\n            show: false\r\n        }\r\n    }\r\n\r\n    handleClose = () => {\r\n        this.setState({\r\n            show: false\r\n        })\r\n    }\r\n\r\n    show = () => {\r\n        this.setState({\r\n            show: true\r\n        })\r\n    }\r\n\r\n    render() {\r\n        let content = (\r\n            <div>\r\n                <p>请确认您的包裹已签收！</p>\r\n                <div>\r\n                    <Button\r\n                        colors=\"primary\"\r\n                        onClick={ this.handleClose }\r\n                        size=\"sm\">\r\n                        关闭\r\n                    </Button>\r\n                </div>\r\n            </div>\r\n        )\r\n        return (\r\n            <div>\r\n                <Popover\r\n                    placement=\"right\"\r\n                    content={content}\r\n                    show={this.state.show}\r\n                    id=\"demo2\"\r\n                >\r\n                    <Button\r\n                        colors=\"primary\"\r\n                        onClick={ this.show }\r\n                        >确认按钮</Button>\r\n                </Popover>\r\n            </div>\r\n        )\r\n    }\r\n}\r\n\r\n\r\n","desc":" 通过设置show，来控制气泡卡片的显示和隐藏"},{"example":<Demo3 />,"title":" 提示类组件支持出现在可配置的container中","code":"/**\r\n * @title 提示类组件支持出现在可配置的container中\r\n * @description \"container\"可以是DOM元素/React组件/或者返回React组件的函数，注意，容器需要设置定位\r\n */\r\n\r\nimport React, { Component } from 'react';\r\nimport { Popover } from 'tinper-bee';\r\n\r\nclass Demo3 extends Component {\r\n    state = {\r\n        show: false\r\n    }\r\n\r\n    content = (\r\n        <div>\r\n            <p>我会跟着移动！</p>\r\n        </div>\r\n    )\r\n\r\n    show = () => {\r\n        this.setState({\r\n            show: true\r\n        })\r\n    }\r\n\r\n    close = () => {\r\n        this.setState({\r\n            show: false\r\n        })\r\n    }\r\n\r\n    render () {\r\n        let { show } = this.state;\r\n\r\n        return (\r\n            <div className=\"demo-popover\">\r\n                <div className=\"demo-popover-box\">\r\n                    <div className=\"demo-popover-wrapper\" ref={ref => this.container = ref}>\r\n                        <Popover\r\n                            placement=\"right\"\r\n                            content={this.content}\r\n                            container={this.container ? this.container : null}\r\n                            show={show}\r\n                            id=\"demo3\"\r\n                        >\r\n                            <span className=\"demo-popover-text\" onClick={this.show}>点击我，popover会跟随我移动</span>\r\n                        </Popover>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        );\r\n    }\r\n}\r\n\r\n","desc":" \"container\"可以是DOM元素/React组件/或者返回React组件的函数，注意，容器需要设置定位","scss_code":".demo-popover {\r\n  &-box {\r\n    width: 100%;\r\n    height: 200px;\r\n    line-height: 100px;\r\n    overflow: auto;\r\n    border: 1px solid #ccc;\r\n    border-radius: 5px;\r\n  }\r\n\r\n  &-wrapper {\r\n    width: 120%;\r\n    position: relative;\r\n  }\r\n\r\n  &-text{\r\n    font-size: 14px;\r\n    cursor: pointer;\r\n  }\r\n\r\n}"}]


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
