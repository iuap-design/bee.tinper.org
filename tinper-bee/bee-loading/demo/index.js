
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Button from 'bee-button';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';


const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var Demo4 = require("./demolist/Demo4");var DemoArray = [{"example":<Demo1 />,"title":" 基础Loading","code":"/**\r\n *\r\n * @title 基础Loading\r\n * @description 设置`loadingType`来修改Loading样式。默认是'rotate'。\r\n *\r\n */\r\n\r\nimport React, { Component } from 'react';\r\nimport { Loading, Button } from 'tinper-bee';\r\n\n\r\nclass Demo1 extends Component {\r\n  constructor(props) {\r\n    super(props);\r\n    this.state = {\r\n      showRotate: false,\r\n        showLine: false\r\n    }\r\n  }\r\n\r\n  handleShow = () => {\r\n      this.setState({\r\n          showRotate: true\r\n      })\r\n      setTimeout(() => {\r\n          this.setState({\r\n              showRotate: false\r\n          })\r\n      }, 5000)\r\n\r\n  }\r\n\r\n    handleShowLine = () => {\r\n        this.setState({\r\n            showLine: true\r\n        })\r\n        setTimeout(() => {\r\n            this.setState({\r\n                showLine: false\r\n            })\r\n        }, 5000)\r\n\r\n    }\r\n\r\n  render() {\r\n    return (\r\n      <div>\r\n        <Button\r\n            colors=\"primary\"\r\n            onClick={this.handleShow}>\r\n          点击显示默认loading\r\n        </Button>\r\n        <Loading\r\n            fullScreen\r\n            showBackDrop={true}\r\n            show={this.state.showRotate}\r\n        />\r\n        <Button\r\n            colors=\"primary\"\r\n            style={{ marginLeft: 50 }}\r\n            onClick={this.handleShowLine}>\r\n          点击显示line loading\r\n        </Button>\r\n        <Loading\r\n            showBackDrop={true}\r\n            loadingType=\"line\"\r\n            show={this.state.showLine}\r\n        />\r\n      </div>\r\n    )\r\n  }\r\n}\r\n\r\n","desc":" 设置`loadingType`来修改Loading样式。默认是'rotate'。"},{"example":<Demo2 />,"title":" 将Loading渲染到容器中","code":"/**\r\n *\r\n * @title 将Loading渲染到容器中\r\n * @description 通过设置`container`属性，来控制loading渲染位置\r\n *\r\n */\r\n\r\nimport React, { Component } from 'react';\r\nimport { Loading } from 'tinper-bee';\r\n\r\n\r\nclass Demo2 extends Component {\r\n    constructor(props) {\r\n        super(props);\r\n        this.state = {\r\n            show: true\r\n        }\r\n        this.a = null;\r\n    }\r\n\r\n\r\n    render() {\r\n        return (\r\n                <div className=\"demo2\">\r\n                    <p>\r\n                        曾经有一份真诚的爱情放在我面前，我没有珍惜，等我失去的时候我才后悔莫及，人世间最痛苦的事莫过于此。\r\n                        如果上天能够给我一个再来一次的机会，我会对那个女孩子说三个字：我爱你。\r\n                        如果非要在这份爱上加上一个期限，我希望是……\r\n                        一万年\r\n                    </p>\r\n                    <Loading container={this} show={this.state.show} />\r\n                </div>\r\n        )\r\n    }\r\n}\r\n\r\n\r\n","desc":" 通过设置`container`属性，来控制loading渲染位置","scss_code":".demo2{\r\n  position: relative;\r\n  height: 100px;\r\n  width: 500px;\r\n  border: 1px solid #0084ff;\r\n  overflow: hidden;\r\n  font-size: 14px;\r\n}"},{"example":<Demo3 />,"title":" 添加描述","code":"/**\r\n *\r\n * @title 添加描述\r\n * @description 通过添加children，来添加Loading的文字描述\r\n *\r\n */\r\n\r\nimport React, { Component } from 'react';\r\nimport { Loading } from 'tinper-bee';\r\n\r\n\r\nclass Demo3 extends Component {\r\n    constructor(props) {\r\n        super(props);\r\n        this.state = {\r\n            show: true\r\n        }\r\n        this.a = null;\r\n    }\r\n\r\n    render() {\r\n        return (\r\n            <div className=\"demo3\">\r\n                <p>\r\n                    曾经有一份真诚的爱情放在我面前，我没有珍惜，等我失去的时候我才后悔莫及，人世间最痛苦的事莫过于此。\r\n                    如果上天能够给我一个再来一次的机会，我会对那个女孩子说三个字：我爱你。\r\n                    如果非要在这份爱上加上一个期限，我希望是……\r\n                    一万年\r\n                </p>\r\n                <Loading\r\n                    describe={true}\r\n                    container={this}\r\n                    show={this.state.show} >\r\n                    加载中\r\n                </Loading>\r\n            </div>\r\n        )\r\n    }\r\n}\r\n\r\n\r\n","desc":" 通过添加children，来添加Loading的文字描述","scss_code":".demo3{\r\n  position: relative;\r\n  height: 100px;\r\n  width: 500px;\r\n  border: 1px solid #0084ff;\r\n  overflow: hidden;\r\n  font-size: 14px;\r\n}"},{"example":<Demo4 />,"title":" 将Loading渲染到容器中","code":"/**\r\n *\r\n * @title 将Loading渲染到容器中\r\n * @description 通过设置`container`属性，通过传入function的方式，来控制loading渲染位置\r\n *\r\n */\r\n\r\nimport React, { Component } from 'react';\r\nimport { Loading } from 'tinper-bee';\r\n\r\n\r\nclass Demo4 extends Component {\r\n    constructor(props) {\r\n        super(props);\r\n        this.state = {\r\n            show: true\r\n        }\r\n        this.a = null;\r\n    }\r\n    getElement =()=>{\r\n        return document.getElementById('demo4')\r\n    }\r\n\r\n\r\n    render() {\r\n        return (\r\n                <div className=\"demo4\">\r\n                    <p>\r\n                        曾经有一份真诚的爱情放在我面前，我没有珍惜，等我失去的时候我才后悔莫及，人世间最痛苦的事莫过于此。\r\n                        如果上天能够给我一个再来一次的机会，我会对那个女孩子说三个字：我爱你。\r\n                        如果非要在这份爱上加上一个期限，我希望是……\r\n                        一万年\r\n                    </p>\r\n                    <p id=\"demo4\">\r\n                    \r\n                        曾经有一份真诚的爱情放在我面前，我没有珍惜，等我失去的时候我才后悔莫及，人世间最痛苦的事莫过于此。\r\n                        如果上天能够给我一个再来一次的机会，我会对那个女孩子说三个字：我爱你。\r\n                        如果非要在这份爱上加上一个期限，我希望是……\r\n                        一万年\r\n                    </p>\r\n                    <Loading container={this.getElement} show={this.state.show} />\r\n                </div>\r\n        )\r\n    }\r\n}\r\n\r\n\r\n\r\n","desc":" 通过设置`container`属性，通过传入function的方式，来控制loading渲染位置","scss_code":".demo4{\r\n  position: relative;\r\n  height: 100px;\r\n  width: 500px;\r\n  border: 1px solid #0084ff;\r\n  overflow: hidden;\r\n  font-size: 14px;\r\n}"}]


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
            <Col md={12} >
                <h3>{ title }</h3>
                <p>{ desc }</p>
                <Panel collapsible headerContent expanded={ this.state.open } colors='bordered' header={ header } footerStyle = {{padding: 0}}>
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
