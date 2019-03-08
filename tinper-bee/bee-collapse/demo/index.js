import {Col, Row} from 'bee-layout';
import {Panel} from 'bee-panel';
import Button from 'bee-button';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';


const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var Demo4 = require("./demolist/Demo4");var Demo5 = require("./demolist/Demo5");var DemoArray = [{"example":<Demo1 />,"title":" collapse","code":"/**\n *\n * @title collapse\n * @description 简单collpase\n *\n */\n\nimport React, {Component} from 'react';\n\n\nimport { Collapse, Button } from 'tinper-bee';\n\n\nclass Demo1 extends Component {\n\tconstructor(props) {\n\t\tsuper(props);\n\t\tthis.state = {\n\t\t\topen: true\n\t\t}\n\t}\n\trender() {\n\t\treturn (\n\t\t\t<div>\n\t\t\t\t<Button\n\t\t\t\t\tcolors=\"primary\"\n\t\t\t\t\tonClick={ ()=> this.setState({ open: !this.state.open })}>\n\t\t          点我啦\n\t\t        </Button>\n\t\t        \n\t\t        <Collapse in={this.state.open}>\n\t\t          <div>\n\t\t            我是折叠区域的内容，点击按钮我就显示，再次点击就会隐藏。快来点击按钮体验我的交互效果吧，是不是很棒！赶快使用吧~~~\n\t\t          </div>\n\t\t        </Collapse>\n\t\t    </div>\n\t\t)\n\n\t}\n}\n\n","desc":" 简单collpase"},{"example":<Demo2 />,"title":" unmountOnExit使用","code":"/**\n *\n * @title unmountOnExit使用\n * @description collapse中使用unmountOnExit，默认值为false，unmountOnExit为true时每次隐藏折叠区时，组件会从dom中删除；为false时，不会删除\n */\n\nimport React, {Component} from 'react';\n\n\nimport { Collapse, Button } from 'tinper-bee';\n\n\nclass Demo1 extends Component {\n    constructor(props) {\n        super(props);\n        this.state = {\n            open: false\n        }\n    }\n\n    render() {\n        return (\n            <div>\n                <Button\n                    colors=\"success\"\n                    onClick={() => this.setState({open: !this.state.open})}>\n                    unmountOnExit为true的Demo\n                </Button>\n\n                <Collapse\n                    in={this.state.open}\n                    unmountOnExit={true}>\n                    <div>\n                        我是折叠区域的内容，点击按钮我就显示，再次点击就会隐藏。unmountOnExit为true隐藏时我这个dom将被移除。\n                    </div>\n                </Collapse>\n\n\n            </div>\n        )\n\n    }\n}\n\n","desc":" collapse中使用unmountOnExit，默认值为false，unmountOnExit为true时每次隐藏折叠区时，组件会从dom中删除；为false时，不会删除"},{"example":<Demo3 />,"title":" 各种Enter事件","code":"/**\n *\n * @title 各种Enter事件\n * @description collapse显示内容时onEnter，onEntering，onEntered事件调用\n *\n */\n\nimport React, {Component} from 'react';\n\n\nimport { Collapse, Button } from 'tinper-bee';\n\n\n\nclass Demo1 extends Component {\n\tconstructor(props) {\n\t\tsuper(props);\n\t\tthis.state = {\n\t\t\topen: false\n\t\t}\n\t\tthis.onEnter = this.onEnter.bind(this);\n\t\tthis.onEntering = this.onEntering.bind(this);\n\t\tthis.onEntered = this.onEntered.bind(this);\n\t}\n\tonEnter() {\n\n\t\tdocument.getElementById('desc').innerHTML = \"内容将要显示\";\n\t}\n\tonEntering() {\n\n\t\tdocument.getElementById('desc').innerHTML = \"内容正在显示\";\n\t}\n\tonEntered() {\n\t\tdocument.getElementById('desc').innerHTML = \"内容已显示完成\";\n\t}\n\trender() {\n\t\treturn (\n\t\t\t<div className=\"demo3\">\n\t\t        <Button\n\t\t\t\t\tcolors=\"primary\"\n\t\t\t\t\tonClick={ ()=> this.setState({ open: !this.state.open })}>\n\t\t          各种EnterEvent\n\t\t        </Button>\n\t\t        \n\t\t        <Collapse\n\t\t\t\t\tin={this.state.open}\n\t\t\t\t\tonEnter={this.onEnter}\n\t\t\t\t\tonEntering={this.onEntering}\n\t\t\t\t\tonEntered={this.onEntered}>\n\t\t          <div>\n\t\t            我是折叠区域的内容，点击按钮我就显示，再次点击就会隐藏。快来点击按钮体验我的交互效果吧，是不是很棒！赶快使用吧~~~\n\t\t          </div>\n\t\t        </Collapse>\n\n\t\t        <p id=\"desc\">我来显示具体调用事件的信息</p>\n\t\t       \n\t\t    </div>\n\t\t)\n\n\t}\n}\n\n","desc":" collapse显示内容时onEnter，onEntering，onEntered事件调用","scss_code":".demo3 {\n  .collapsing {\n    transition-duration: 0.5s;\n  }\n  #desc {\n    border: 1px solid rgb(30,136,229);\n    background: #eee;\n    padding: 10px;\n  }\n}"},{"example":<Demo4 />,"title":" 各种Exit事件","code":"/**\n *\n * @title 各种Exit事件\n * @description collapse隐藏内容时onExit，onExiting，onExited事件调用\n *\n */\n\nimport React, {Component} from 'react';\n\n\nimport { Collapse, Button } from 'tinper-bee';\n\n\n\nclass Demo1 extends Component {\n\tconstructor(props) {\n\t\tsuper(props);\n\t\tthis.state = {\n\t\t\topen: true\n\t\t}\n\t\tthis.onExit = this.onExit.bind(this);\n\t\tthis.onExiting = this.onExiting.bind(this);\n\t\tthis.onExited = this.onExited.bind(this);\n\t}\n\tonExit() {\n\t\tdocument.getElementById('desc4').innerHTML = \"我将要隐藏\";\n\t}\n\tonExiting() {\n\t\tdocument.getElementById('desc4').innerHTML = \"我正在隐藏\";\n\t}\n\tonExited() {\n\t\tdocument.getElementById('desc4').innerHTML = \"我已隐藏完成\";\n\t}\n\trender() {\n\t\treturn (\n\t\t\t<div className=\"demo4\">\n\t\t        <Button\n\t\t\t\t\tcolors=\"primary\"\n\t\t\t\t\tonClick={ ()=> this.setState({ open: !this.state.open })}>\n\t\t          各种Exit事件\n\t\t        </Button>\n\t\t        \n\t\t        <Collapse\n\t\t\t\t\tin={this.state.open}\n\t\t\t\t\tonExit={this.onExit}\n\t\t\t\t\tonExiting={this.onExiting}\n\t\t\t\t\tonExited={this.onExited}>\n\t\t          <div>\n\t\t            我是折叠区域的内容，点击按钮我就显示，再次点击就会隐藏。快来点击按钮体验我的交互效果吧，是不是很棒！赶快使用吧~~~\n\t\t          </div>\n\t\t        </Collapse>\n\t\t         <p id=\"desc4\">我来显示具体调用事件的信息</p>\n\t\t       \n\t\t    </div>\n\t\t)\n\n\t}\n}\n","desc":" collapse隐藏内容时onExit，onExiting，onExited事件调用","scss_code":".demo4 {\n  .collapsing {\n    transition-duration: 0.5s;\n  }\n  #desc4 {\n    border: 1px solid rgb(30,136,229);\n    background: #eee;\n    padding: 10px;\n  }\n}"},{"example":<Demo5 />,"title":" 折叠区横向展开","code":"/**\n *\n * @title 折叠区横向展开\n * @description dimension为\"width\"具体使用\n *\n */\n\nimport React, {Component} from 'react';\n\n\nimport { Collapse, Button } from 'tinper-bee';\n\n\n\nclass Demo1 extends Component {\n\tconstructor(props) {\n\t\tsuper(props);\n\t\tthis.state = {\n\t\t\topen: true\n\t\t}\n\t}\n\trender() {\n\t\treturn (\n\t\t\t<div className=\"demo5\">\n\t\t        <Button\n\t\t\t\t\tcolors=\"success\"\n\t\t\t\t\tonClick={ ()=> this.setState({ open: !this.state.open })}>\n\t\t          点我内容横向动态显示隐藏\n\t\t        </Button>\n\t\t        \n\t\t        <Collapse\n\t\t\t\t\tin={this.state.open}\n\t\t\t\t\tdimension=\"width\" >\n\t\t          <div>\n\t\t            我是折叠区域的内容，点击按钮我就显示，再次点击就会隐藏。快来点击按钮体验我的交互效果吧，是不是很棒！赶快使用吧~~~\n\t\t            <br/>\n\t\t          </div>\n\n\t\t        </Collapse>\n\n\t\t       \n\t\t    </div>\n\t\t)\n\n\t}\n}\n","desc":" dimension为\"width\"具体使用","scss_code":".collapsing.width {\n  position: relative;\n  width: 0;\n  overflow: hidden;\n  transition-property: width, visibility;\n  transition-duration: 0.5s;\n  transition-timing-function: ease;\n  height: 25px;\n}"}]


class Demo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({open: !this.state.open})
    }

    render() {
        const {title, example, code, desc, scss_code} = this.props;
        let caret = this.state.open ? CARETUP : CARET;
        let text = this.state.open ? "隐藏代码" : "查看代码";

        const header = (
            <div>
                {example}
                <Button style={{"marginTop": "10px"}} shape="block" onClick={this.handleClick}>
                    {caret}
                    {text}
                </Button>
            </div>
        );
        return (
            <Col md={12}>
                <h3>{title}</h3>
                <p>{desc}</p>
                <Panel collapsible headerContent expanded={this.state.open} colors='bordered' header={header}
                       footerStyle={{padding: 0}}>
                    <pre><code className="hljs javascript">{code}</code></pre>
                    {!!scss_code ? <pre><code className="hljs css">{scss_code}</code></pre> : null}
                </Panel>
            </Col>
        )
    }
}

class DemoGroup extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Row>
                {DemoArray.map((child, index) => {

                    return (
                        <Demo example={child.example} title={child.title} code={child.code} scss_code={child.scss_code}
                              desc={child.desc} key={index}/>
                    )

                })}
            </Row>
        )
    }
}

ReactDOM.render(<DemoGroup/>, document.getElementById('tinperBeeDemo'));
