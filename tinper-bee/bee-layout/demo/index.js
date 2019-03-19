import { Con, Row, Col } from '../src';
import { Panel } from 'bee-panel';
import Button from 'bee-button';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';


const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var DemoArray = [{"example":<Demo1 />,"title":" 基础布局","code":"/**\n *\n * @title 基础布局\n * @description 使用<Row>组件和<Col>组件进行页面栅格切分\n *\n */\n\nimport React, {Component} from 'react';\nimport { Col, Row } from 'tinper-bee';\n\nclass Demo1 extends Component {\n    render() {\n        return (\n            <Row>\n                <Col md={12} xs={12} sm={12}>\n                    <div className='grayDeep'>12</div>\n                </Col>\n                <Col md={6} xs={6} sm={6}>\n                    <div className='gray'>6</div>\n                </Col>\n                <Col md={6} xs={6} sm={6}>\n                    <div className='grayLight'>6</div>\n                </Col>\n                <Col md={4} xs={4} sm={4}>\n                    <div className='grayDeep'>4</div>\n                </Col>\n                <Col md={4} xs={4} sm={4}>\n                    <div className='gray'>4</div>\n                </Col>\n                <Col md={4} xs={4} sm={4}>\n                    <div className='grayLight'>4</div>\n                </Col>\n                <Col md={3} xs={3} sm={3}>\n                    <div className='grayDeep'>3</div>\n                </Col>\n                <Col md={3} xs={3} sm={3}>\n                    <div className='gray'>3</div>\n                </Col>\n                <Col md={3} xs={3} sm={3}>\n                    <div className='grayLight'>3</div>\n                </Col>\n                <Col md={3} xs={3} sm={3}>\n                    <div className='grayDeep'>3</div>\n                </Col>\n                <Col md={2} xs={2} sm={2}>\n                    <div className='gray'>2</div>\n                </Col>\n                <Col md={2} xs={2} sm={2}>\n                    <div className='grayLight'>2</div>\n                </Col>\n                <Col md={2} xs={2} sm={2}>\n                    <div className='grayDeep'>2</div>\n                </Col>\n                <Col md={2} xs={2} sm={2}>\n                    <div className='gray'>2</div>\n                </Col>\n                <Col md={2} xs={2} sm={2}>\n                    <div className='grayLight'>2</div>\n                </Col>\n                <Col md={2} xs={2} sm={2}>\n                    <div className='grayDeep'>2</div>\n                </Col>\n            </Row>\n\n        )\n    }\n}\n\n","desc":" 使用<Row>组件和<Col>组件进行页面栅格切分","scss_code":"\n.grayDeep {\n  background: rgb(189,189,189);\n  height: 30px;\n  width: 100%;\n  margin-bottom: 10px;\n  line-height: 30px;\n  text-align: center;\n}\n.gray {\n  background: rgb(224,224,224);\n  height: 30px;\n  width: 100%;\n  margin-bottom: 10px;\n  line-height: 30px;\n  text-align: center;\n}\n.grayLight{\n  background: rgb(238,238,238);\n  height: 30px;\n  width: 100%;\n  margin-bottom: 10px;\n  color: rgb(66,66,66);\n  text-align: center;\n  line-height: 30px;\n}"},{"example":<Demo2 />,"title":" 偏移的栅格","code":"/**\n *\n * @title 偏移的栅格\n * @description 使用mdOffset lgOffset smOffset xsOffset来设置栅格偏移的量\n *\n */\n\nimport React, {Component} from 'react';\nimport { Col, Row } from 'tinper-bee';\n\nclass Demo2 extends Component {\n    render() {\n        return (\n            <Row>\n                <Col md={3} mdOffset={3} xs={3} xsOffset={3} sm={3} smOffset={3}>\n                    <div className='grayDeep'>3 offset-3</div>\n                </Col>\n                <Col md={3} mdOffset={3} xs={3} xsOffset={3} sm={3} smOffset={3}>\n                    <div className='gray'>3 offset-3</div>\n                </Col>\n                <Col md={6} mdOffset={6} xs={6} xsOffset={6} sm={6} smOffset={6}>\n                    <div className='grayLight'>6 offset-6</div>\n                </Col>\n                <Col md={4} mdOffset={2} xs={4} xsOffset={2} sm={4} smOffset={2}>\n                    <div className='gray'>4 offset-2</div>\n                </Col>\n                <Col md={2} mdOffset={3} xs={2} xsOffset={3} sm={2} smOffset={3}>\n                    <div className='grayLight'>2 offset-3</div>\n                </Col>\n                <Col md={6} mdOffset={3} xs={6} xsOffset={3} sm={6} smOffset={3}>\n                    <div className='grayDeep'>6 offset-3</div>\n                </Col>\n            </Row>\n        )\n    }\n}\n\n\n","desc":" 使用mdOffset lgOffset smOffset xsOffset来设置栅格偏移的量","scss_code":"\n.grayDeep {\n  background: rgb(189,189,189);\n  height: 30px;\n  width: 100%;\n  margin-bottom: 10px;\n  line-height: 30px;\n  text-align: center;\n}\n.gray {\n  background: rgb(224,224,224);\n  height: 30px;\n  width: 100%;\n  margin-bottom: 10px;\n  line-height: 30px;\n  text-align: center;\n}\n.grayLight{\n  background: rgb(238,238,238);\n  height: 30px;\n  width: 100%;\n  margin-bottom: 10px;\n  color: rgb(66,66,66);\n  text-align: center;\n  line-height: 30px;\n}"},{"example":<Demo3 />,"title":" 平移的栅格","code":"/**\n *\n * @title 平移的栅格\n * @description 通过设置mdPull, mdPush来控制平移的量\n *\n */\n\nimport React, {Component} from 'react';\nimport { Col, Row } from 'tinper-bee';\n\nclass Demo3 extends Component {\n    render() {\n        return (\n            <Row>\n                <Col md={8} mdPush={4} xs={8} xsPush={4} sm={8} smPush={4}>\n                    <div className='grayDeep'>8 push-4</div>\n                </Col>\n                <Col md={4} mdPull={8} xs={4} xsPull={8} sm={4} smPull={8}>\n                    <div className='gray'>4 pull-8</div>\n                </Col>\n            </Row>\n        )\n    }\n}\n\n\n","desc":" 通过设置mdPull, mdPush来控制平移的量","scss_code":"\n.grayDeep {\n  background: rgb(189,189,189);\n  height: 30px;\n  width: 100%;\n  margin-bottom: 10px;\n  line-height: 30px;\n  text-align: center;\n}\n.gray {\n  background: rgb(224,224,224);\n  height: 30px;\n  width: 100%;\n  margin-bottom: 10px;\n  line-height: 30px;\n  text-align: center;\n}\n.grayLight{\n  background: rgb(238,238,238);\n  height: 30px;\n  width: 100%;\n  margin-bottom: 10px;\n  color: rgb(66,66,66);\n  text-align: center;\n  line-height: 30px;\n}"}]


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
                <Panel copyable collapsible headerContent expanded={ this.state.open } colors='bordered' header={ header } footerStyle = {{padding: 0}}>
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
