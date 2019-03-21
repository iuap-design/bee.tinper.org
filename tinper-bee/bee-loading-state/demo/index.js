import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Drawer from 'bee-drawer';
import Clipboard from 'bee-clipboard'; 
import Button from '../src';



var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var DemoArray = [{"example":<Demo1 />,"title":" 基础LoadingState","code":"/**\n * @title 基础LoadingState\n * @description  点击按钮，呈现等待。\n */\n\nimport React, { Component } from 'react';\nimport { LoadingState } from 'tinper-bee';\n\n\nclass Demo1 extends Component {\n\tconstructor(props) {\n\t\tsuper(props);\n\t\tthis.state = {\n            show: false\n\t\t}\n\t}\n\n\thandleClick = () => {\n\t\tthis.setState({\n\t\t\tshow: true\n\t\t});\n\n\t\tsetTimeout(() => {\n            this.setState({\n                show: false\n            })\n\t\t}, 3000)\n\t}\n\n\trender () {\n\t\treturn (\n\t\t\t<LoadingState\n\t\t\t\tshowBackDrop={false}\n\t\t\t\tonClick={ this.handleClick }\n\t\t\t\tshow={ this.state.show }\n\t\t\t\tcolors=\"primary\">\n\t\t\t\tconfirm\n\t\t\t</LoadingState>\n\t\t)\n\t}\n}\n\n\n\n","desc":"  点击按钮，呈现等待。"},{"example":<Demo2 />,"title":" 自定义`LoadingState`","code":"/**\n * @title 自定义`LoadingState`\n * @description `loadingText`自定义等待文字.\n */\n\n\nimport React, { Component } from 'react';\nimport { LoadingState } from 'tinper-bee';\n\nclass Demo2 extends Component {\n\tconstructor(props){\n\t\tsuper(props);\n\t\tthis.state = {\n\t\t\tshow: false\n\t\t}\n\t}\n\n    handleClick = () => {\n        this.setState({\n            show: true\n        })\n        setTimeout(() => {\n            this.setState({\n                show: false\n            })\n        }, 3000)\n    }\n\trender(){\n\t\treturn (\n\t\t\t<LoadingState\n\t\t\t\tonClick={ this.handleClick }\n\t\t\t\tcolors=\"primary\"\n\t\t\t\tshow={ this.state.show }\n\t\t\t\tloadingText=\"waiting...\">\n\t\t\t\tconfirm\n\t\t\t</LoadingState>\n\t\t)\n\t}\n}\n\n","desc":" `loadingText`自定义等待文字."}]


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
