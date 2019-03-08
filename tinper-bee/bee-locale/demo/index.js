
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Button from 'bee-button';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';


const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var DemoArray = [{"example":<Demo1 />,"title":" 多语组件设置组件的语言","code":"/**\n *\n * @title 多语组件设置组件的语言\n * @description 按照固定的格式传入语言对象，会自动改变组件内默认文字的语言。\n *\n */\n\nimport React, {Component} from 'react';\nimport { Locale, Button, Popconfirm } from 'tinper-bee';\nimport En from \"tinper-bee/lib/en_US\";;\n\nclass Demo1 extends Component {\n    render() {\n        let content = 'Do yon like me?';\n        return (\n            <Locale locale={En}>\n                <Popconfirm\n                    trigger=\"click\"\n                    placement=\"right\"\n                    content={content}>\n                    <Button colors=\"primary\">see right!</Button>\n                </Popconfirm>\n            </Locale>\n        )\n    }\n}\n\n","desc":" 按照固定的格式传入语言对象，会自动改变组件内默认文字的语言。"},{"example":<Demo2 />,"title":" 项目中使用，及切换语言","code":"/**\n *\n * @title 项目中使用，及切换语言\n * @description Locale组件通过context传递语言包，子组件通过contextTypes获取context上的beeLocale语言包对象。\n *\n */\n\nimport React, {Component} from 'react';\nimport { Locale, Button, Popconfirm } from 'tinper-bee';\nimport PropTypes from 'prop-types';\nimport ZhCn from \"tinper-bee/lib/zh_CN\";;\nimport ZhTw from \"tinper-bee/lib/zh_TW\";;\nimport EnUS from \"tinper-bee/lib/en_US\";;\n\nclass DemoButton extends Component{\n    render() {\n       let localeText = this.context.beeLocale.DemoButton.text;\n        return (\n            <div style={{ marginBottom: 20}}>\n                <Button onClick={this.props.onChangeLang} colors=\"primary\">\n                    {localeText}\n                </Button>\n            </div>\n\n        )\n    }\n}\nDemoButton.contextTypes = {\n    beeLocale: PropTypes.object\n}\n\nlet en = {\n    ...EnUS,\n    DemoButton: {\n        text: 'Change Language'\n    },\n    PopconfirmContent: {\n       content: 'Do you like tinper-bee UI library?' ,\n        buttonText: 'see right'\n    }\n};\n\nlet zh = {\n    ...ZhCn,\n    DemoButton: {\n        text: '切换语言'\n    },\n    PopconfirmContent: {\n        content: '你喜欢tinper-bee组件库吗？' ,\n        buttonText: '看右边'\n    }\n};\n\nlet tw = {\n    ...ZhTw,\n    DemoButton: {\n        text: '切換語言'\n    },\n    PopconfirmContent: {\n        content: '你喜歡tinper-bee組件庫嗎？' ,\n        buttonText: '看右邊'\n    }\n};\n\n\n\nclass Demo1 extends Component {\n    state = {\n        lang: zh\n    }\n    handleChangeLang = () => {\n        let { lang } = this.state;\n        if(lang.lang === 'zh_CN'){\n            this.setState({\n                lang: tw\n            })\n        }else if(lang.lang === 'zh_TW'){\n            this.setState({\n                lang: en\n            })\n        }else{\n            this.setState({\n                lang: zh\n            })\n        }\n\n    }\n    render() {\n        let { lang } = this.state;\n\n        return (\n            <Locale locale={lang}>\n                <div>\n                    <DemoButton onChangeLang={this.handleChangeLang} />\n                    <Popconfirm\n                        trigger=\"click\"\n                        placement=\"right\"\n                        content={lang.PopconfirmContent.content}>\n                        <Button colors=\"primary\">{lang.PopconfirmContent.buttonText}</Button>\n                    </Popconfirm>\n                </div>\n\n            </Locale>\n        )\n    }\n}\n\n","desc":" Locale组件通过context传递语言包，子组件通过contextTypes获取context上的beeLocale语言包对象。"}]


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