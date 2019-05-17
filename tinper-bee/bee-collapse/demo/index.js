import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Drawer from 'bee-drawer';
import Clipboard from 'bee-clipboard'; 
import Button from '../src';



var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var Demo4 = require("./demolist/Demo4");var Demo5 = require("./demolist/Demo5");var DemoArray = [{"example":<Demo1 />,"title":" collapse","code":"/**\r\n *\r\n * @title collapse\r\n * @description 简单collpase\r\n *\r\n */\r\n\r\nimport React, {Component} from 'react';\r\n\r\n\n\r\nimport { Collapse, Button } from 'tinper-bee';\r\n\r\n\r\nclass Demo1 extends Component {\r\n\tconstructor(props) {\r\n\t\tsuper(props);\r\n\t\tthis.state = {\r\n\t\t\topen: true\r\n\t\t}\r\n\t}\r\n\trender() {\r\n\t\treturn (\r\n\t\t\t<div>\r\n\t\t\t\t<Button\r\n\t\t\t\t\tcolors=\"primary\"\r\n\t\t\t\t\tonClick={ ()=> this.setState({ open: !this.state.open })}>\r\n\t\t          点我啦\r\n\t\t        </Button>\r\n\t\t        \r\n\t\t        <Collapse in={this.state.open}>\r\n\t\t          <div>\r\n\t\t            我是折叠区域的内容，点击按钮我就显示，再次点击就会隐藏。快来点击按钮体验我的交互效果吧，是不是很棒！赶快使用吧~~~\r\n\t\t          </div>\r\n\t\t        </Collapse>\r\n\t\t    </div>\r\n\t\t)\r\n\r\n\t}\r\n}\r\n\r\n","desc":" 简单collpase"},{"example":<Demo2 />,"title":" unmountOnExit使用","code":"/**\r\n *\r\n * @title unmountOnExit使用\r\n * @description collapse中使用unmountOnExit，默认值为false，unmountOnExit为true时每次隐藏折叠区时，组件会从dom中删除；为false时，不会删除\r\n */\r\n\r\nimport React, {Component} from 'react';\r\n\r\n\n\r\nimport { Collapse, Button } from 'tinper-bee';\r\n\r\n\r\nclass Demo1 extends Component {\r\n    constructor(props) {\r\n        super(props);\r\n        this.state = {\r\n            open: false\r\n        }\r\n    }\r\n\r\n    render() {\r\n        return (\r\n            <div>\r\n                <Button\r\n                    colors=\"primary\"\r\n                    onClick={() => this.setState({open: !this.state.open})}>\r\n                    unmountOnExit为true的Demo\r\n                </Button>\r\n\r\n                <Collapse\r\n                    in={this.state.open}\r\n                    unmountOnExit={true}>\r\n                    <div>\r\n                        我是折叠区域的内容，点击按钮我就显示，再次点击就会隐藏。unmountOnExit为true隐藏时我这个dom将被移除。\r\n                    </div>\r\n                </Collapse>\r\n\r\n\r\n            </div>\r\n        )\r\n\r\n    }\r\n}\r\n\r\n","desc":" collapse中使用unmountOnExit，默认值为false，unmountOnExit为true时每次隐藏折叠区时，组件会从dom中删除；为false时，不会删除"},{"example":<Demo3 />,"title":" 各种Enter事件","code":"/**\r\n *\r\n * @title 各种Enter事件\r\n * @description collapse显示内容时onEnter，onEntering，onEntered事件调用\r\n *\r\n */\r\n\r\nimport React, {Component} from 'react';\r\n\r\n\n\r\nimport { Collapse, Button } from 'tinper-bee';\r\n\r\n\r\n\r\nclass Demo1 extends Component {\r\n\tconstructor(props) {\r\n\t\tsuper(props);\r\n\t\tthis.state = {\r\n\t\t\topen: false\r\n\t\t}\r\n\t\tthis.onEnter = this.onEnter.bind(this);\r\n\t\tthis.onEntering = this.onEntering.bind(this);\r\n\t\tthis.onEntered = this.onEntered.bind(this);\r\n\t}\r\n\tonEnter() {\r\n\r\n\t\tdocument.getElementById('desc').innerHTML = \"内容将要显示\";\r\n\t}\r\n\tonEntering() {\r\n\r\n\t\tdocument.getElementById('desc').innerHTML = \"内容正在显示\";\r\n\t}\r\n\tonEntered() {\r\n\t\tdocument.getElementById('desc').innerHTML = \"内容已显示完成\";\r\n\t}\r\n\trender() {\r\n\t\treturn (\r\n\t\t\t<div className=\"demo3\">\r\n\t\t        <Button\r\n\t\t\t\t\tcolors=\"primary\"\r\n\t\t\t\t\tonClick={ ()=> this.setState({ open: !this.state.open })}>\r\n\t\t          各种EnterEvent\r\n\t\t        </Button>\r\n\t\t        \r\n\t\t        <Collapse\r\n\t\t\t\t\tin={this.state.open}\r\n\t\t\t\t\tonEnter={this.onEnter}\r\n\t\t\t\t\tonEntering={this.onEntering}\r\n\t\t\t\t\tonEntered={this.onEntered}>\r\n\t\t          <div>\r\n\t\t            我是折叠区域的内容，点击按钮我就显示，再次点击就会隐藏。快来点击按钮体验我的交互效果吧，是不是很棒！赶快使用吧~~~\r\n\t\t          </div>\r\n\t\t        </Collapse>\r\n\r\n\t\t        <p id=\"desc\">我来显示具体调用事件的信息</p>\r\n\t\t       \r\n\t\t    </div>\r\n\t\t)\r\n\r\n\t}\r\n}\r\n\r\n","desc":" collapse显示内容时onEnter，onEntering，onEntered事件调用","scss_code":".demo3 {\r\n  #desc {\r\n    border: 1px solid rgb(30,136,229);\r\n    background: #eee;\r\n    padding: 10px;\r\n  }\r\n}"},{"example":<Demo4 />,"title":" 各种Exit事件","code":"/**\r\n *\r\n * @title 各种Exit事件\r\n * @description collapse隐藏内容时onExit，onExiting，onExited事件调用\r\n *\r\n */\r\n\r\nimport React, {Component} from 'react';\r\n\r\n\n\r\nimport { Collapse, Button } from 'tinper-bee';\r\n\r\n\r\n\r\nclass Demo1 extends Component {\r\n\tconstructor(props) {\r\n\t\tsuper(props);\r\n\t\tthis.state = {\r\n\t\t\topen: true\r\n\t\t}\r\n\t\tthis.onExit = this.onExit.bind(this);\r\n\t\tthis.onExiting = this.onExiting.bind(this);\r\n\t\tthis.onExited = this.onExited.bind(this);\r\n\t}\r\n\tonExit() {\r\n\t\tdocument.getElementById('desc4').innerHTML = \"我将要隐藏\";\r\n\t}\r\n\tonExiting() {\r\n\t\tdocument.getElementById('desc4').innerHTML = \"我正在隐藏\";\r\n\t}\r\n\tonExited() {\r\n\t\tdocument.getElementById('desc4').innerHTML = \"我已隐藏完成\";\r\n\t}\r\n\trender() {\r\n\t\treturn (\r\n\t\t\t<div className=\"demo4\">\r\n\t\t        <Button\r\n\t\t\t\t\tcolors=\"primary\"\r\n\t\t\t\t\tonClick={ ()=> this.setState({ open: !this.state.open })}>\r\n\t\t          各种Exit事件\r\n\t\t        </Button>\r\n\t\t        \r\n\t\t        <Collapse\r\n\t\t\t\t\tin={this.state.open}\r\n\t\t\t\t\tonExit={this.onExit}\r\n\t\t\t\t\tonExiting={this.onExiting}\r\n\t\t\t\t\tonExited={this.onExited}>\r\n\t\t          <div>\r\n\t\t            我是折叠区域的内容，点击按钮我就显示，再次点击就会隐藏。快来点击按钮体验我的交互效果吧，是不是很棒！赶快使用吧~~~\r\n\t\t          </div>\r\n\t\t        </Collapse>\r\n\t\t         <p id=\"desc4\">我来显示具体调用事件的信息</p>\r\n\t\t       \r\n\t\t    </div>\r\n\t\t)\r\n\r\n\t}\r\n}\r\n","desc":" collapse隐藏内容时onExit，onExiting，onExited事件调用","scss_code":".demo4 {\r\n  #desc4 {\r\n    border: 1px solid rgb(30,136,229);\r\n    background: #eee;\r\n    padding: 10px;\r\n  }\r\n}"},{"example":<Demo5 />,"title":" 折叠区横向展开","code":"/**\n *\n * @title 折叠区横向展开\n * @description dimension为\"width\"具体使用\n *\n */\n\nimport React, {Component} from 'react';\n\n\nimport { Collapse, Button } from 'tinper-bee';\n\n\n\nclass Demo1 extends Component {\n\tconstructor(props) {\n\t\tsuper(props);\n\t\tthis.state = {\n\t\t\topen: true\n\t\t}\n\t}\n\trender() {\n\t\treturn (\n\t\t\t<div className=\"demo5\">\n\t\t        <Button\n\t\t\t\t\tcolors=\"primary\"\n\t\t\t\t\tonClick={ ()=> this.setState({ open: !this.state.open })}>\n\t\t          点我内容横向动态显示隐藏\n\t\t        </Button>\n\t\t        <div style={{height: '25px'}}>\n\t\t\t\t\t<Collapse\n\t\t\t\t\t\tin={this.state.open}\n\t\t\t\t\t\tdimension=\"width\" >\n\t\t\t\t\t<div>\n\t\t\t\t\t\t我是折叠区域的内容，点击按钮我就显示，再次点击就会隐藏。快来点击按钮体验我的交互效果吧，是不是很棒！赶快使用吧~~~\n\t\t\t\t\t\t<br/>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t</Collapse>\n\t\t\t\t</div>\n\t\t    </div>\n\t\t)\n\n\t}\n}\n","desc":" dimension为\"width\"具体使用"}]


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
