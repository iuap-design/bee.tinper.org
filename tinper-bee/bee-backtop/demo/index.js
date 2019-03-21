import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Drawer from 'bee-drawer';
import Clipboard from 'bee-clipboard'; 
import Button from '../src';



var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var DemoArray = [{"example":<Demo1 />,"title":" 基础实例","code":"/**\n *\n * @title 基础实例\n * @description 高度达到默认值时显示backtop\n *\n */\nimport React, {Component} from 'react';\nimport { BackTop } from 'tinper-bee';\n\nclass Demo1 extends Component {\n    render() {\n        return (\n            <div>\n                <p>让我掉下眼泪的</p>\n                <p>不止昨夜的酒</p>\n                <p>让我依依不舍的</p>\n                <p>不止你的温柔</p>\n                <p>雨路还要走多久</p>\n                <p>你攥着我的手</p>\n                <p>让我感到为难的</p>\n                <p>是挣扎的自由</p>\n                <p>分别总是在九月</p>\n                <p>回忆是思念的愁</p>\n                <p>深秋嫩绿的垂柳</p>\n                <p>亲吻着我额头</p>\n                <p>在那座阴雨的小城里</p>\n                <p>我从未忘记你</p>\n                <BackTop/>\n            </div>\n        )\n    }\n}\n\n","desc":" 高度达到默认值时显示backtop"},{"example":<Demo2 />,"title":" 指定dom的backtop","code":"/**\n *\n * @title 指定dom的backtop\n * @description 使用target属性传递指定dom\n *\n */\n\nimport React, {Component} from 'react';\nimport { BackTop } from 'tinper-bee';\n\nclass Demo2 extends Component {\n    render() {\n        return (\n            <div id=\"text\" className=\"demo-two\">\n                <p>和我在成都的街头走一走</p>\n                <p>直到所有的灯都熄灭了也不停留</p>\n                <p>你会挽着我的衣袖 </p>\n                <p>我会把手揣进裤兜</p>\n                <p>走到玉林路的尽头</p>\n                <p>坐在小酒馆的门口</p>\n                <p>分别总是在九月</p>\n                <p>回忆是思念的愁</p>\n                <p>深秋嫩绿的垂柳</p>\n                <p>亲吻着我额头</p>\n                <p>在那座阴雨的小城里</p>\n                <p>我从未忘记你</p>\n                <p>成都 带不走的 只有你</p>\n                <p>和我在成都的街头走一走</p>\n                <p>直到所有的灯都熄灭了也不停留</p>\n                <p>你会挽着我的衣袖 </p>\n                <p>我会把手揣进裤兜</p>\n                <p>走到玉林路的尽头</p>\n                <p>坐在小酒馆的门口</p>\n                <p>分别总是在九月</p>\n                <p>回忆是思念的愁</p>\n                <p>深秋嫩绿的垂柳</p>\n                <p>亲吻着我额头</p>\n                <p>在那座阴雨的小城里</p>\n                <p>我从未忘记你</p>\n                <p>成都 带不走的 只有你</p>\n                <p>和我在成都的街头走一走</p>\n                <p>直到所有的灯都熄灭了也不停留</p>\n                <p>你会挽着我的衣袖 </p>\n                <p>我会把手揣进裤兜</p>\n                <p>走到玉林路的尽头</p>\n                <BackTop target={() => document.getElementById('text')} character=\"UP\"/>\n            </div>\n        )\n    }\n}\n\n","desc":" 使用target属性传递指定dom","scss_code":".demo-two{\n  height:300px;\n  overflow: auto;\n}\n.demo-two .u-backtop{\n  bottom: 50px;\n}"}]


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
