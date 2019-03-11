import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Button from 'bee-button';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';


const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var DemoArray = [{"example":<Demo1 />,"title":" 基础LoadingState","code":"/**\r\n * @title 基础LoadingState\r\n * @description  点击按钮，呈现等待。\r\n */\r\n\r\nimport React, { Component } from 'react';\r\nimport { LoadingState } from 'tinper-bee';\r\n\r\n\r\nclass Demo1 extends Component {\r\n\tconstructor(props) {\r\n\t\tsuper(props);\r\n\t\tthis.state = {\r\n            show: false\r\n\t\t}\r\n\t}\r\n\r\n\thandleClick = () => {\r\n\t\tthis.setState({\r\n\t\t\tshow: true\r\n\t\t});\r\n\r\n\t\tsetTimeout(() => {\r\n            this.setState({\r\n                show: false\r\n            })\r\n\t\t}, 3000)\r\n\t}\r\n\r\n\trender () {\r\n\t\treturn (\r\n\t\t\t<LoadingState\r\n\t\t\t\tshowBackDrop={false}\r\n\t\t\t\tonClick={ this.handleClick }\r\n\t\t\t\tshow={ this.state.show }\r\n\t\t\t\tcolors=\"primary\">\r\n\t\t\t\tconfirm\r\n\t\t\t</LoadingState>\r\n\t\t)\r\n\t}\r\n}\r\n\r\n\r\n\r\n","desc":"  点击按钮，呈现等待。"},{"example":<Demo2 />,"title":" 自定义`LoadingState`","code":"/**\r\n * @title 自定义`LoadingState`\r\n * @description `loadingText`自定义等待文字.\r\n */\r\n\r\n\r\nimport React, { Component } from 'react';\r\nimport { LoadingState } from 'tinper-bee';\r\n\r\nclass Demo2 extends Component {\r\n\tconstructor(props){\r\n\t\tsuper(props);\r\n\t\tthis.state = {\r\n\t\t\tshow: false\r\n\t\t}\r\n\t}\r\n\r\n    handleClick = () => {\r\n        this.setState({\r\n            show: true\r\n        })\r\n        setTimeout(() => {\r\n            this.setState({\r\n                show: false\r\n            })\r\n        }, 3000)\r\n    }\r\n\trender(){\r\n\t\treturn (\r\n\t\t\t<LoadingState\r\n\t\t\t\tonClick={ this.handleClick }\r\n\t\t\t\tcolors=\"primary\"\r\n\t\t\t\tshow={ this.state.show }\r\n\t\t\t\tloadingText=\"waiting...\">\r\n\t\t\t\tconfirm\r\n\t\t\t</LoadingState>\r\n\t\t)\r\n\t}\r\n}\r\n\r\n","desc":" `loadingText`自定义等待文字."}]


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