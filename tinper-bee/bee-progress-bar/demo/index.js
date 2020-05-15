import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Drawer from 'bee-drawer';
import Clipboard from 'bee-clipboard'; 
import Button from '../src';



var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var Demo4 = require("./demolist/Demo4");var Demo5 = require("./demolist/Demo5");var DemoArray = [{"example":<Demo1 />,"title":" 基本样式展示","code":"/**\n * @title 基本样式展示\n * @description now 控制实际进度\n */\n\nimport React, { Component } from 'react';\nimport { ProgressBar } from 'tinper-bee';\n\n\nclass Demo1 extends Component {\n\n\trender () {\n\t\treturn (\n\t\t\t<ProgressBar style={{width:30}} now = {40} />\n\t\t)\n\t}\n}\n\n\nexport default Demo1;","desc":" now 控制实际进度"},{"example":<Demo2 />,"title":" 激活状态 ProgressBar","code":"/**\n * @title 激活状态 ProgressBar\n * @description 添加参数active,具备动画。\n */\n\nimport React, { Component } from 'react';\nimport { ProgressBar } from 'tinper-bee';\n\n\nclass Demo2 extends Component {\n\trender(){\n\t\treturn (\n\t\t\t<ProgressBar active now = {40} />\n\t\t)\n\t}\n}\n\nexport default Demo2;","desc":" 添加参数active,具备动画。"},{"example":<Demo3 />,"title":" 进度条组合","code":"/**\n * @title 进度条组合\n * @description 多种状态或者背景的进度条组合成一条。`size`控制大小。\n */\n\nimport React, { Component } from 'react';\nimport { ProgressBar } from 'tinper-bee';\n\n\nclass Demo3 extends Component {\n\trender () {\n\t\treturn (\n\t\t\t<ProgressBar size=\"sm\">\n\t\t\t\t<ProgressBar colors=\"danger\" now = {10} />\n\t\t\t\t<ProgressBar colors=\"success\" now = {20} />\n\t\t\t\t<ProgressBar colors=\"warning\" now = {30} />\n\t\t\t</ProgressBar>\t\n\t\t)\n\t}\n}\n\nexport default Demo3;","desc":" 多种状态或者背景的进度条组合成一条。`size`控制大小。"},{"example":<Demo4 />,"title":" 带label ProgressBar","code":"/**\n * @title 带label ProgressBar\n * @description\n */\n\nimport React, { Component } from 'react';\nimport { ProgressBar } from 'tinper-bee';\n\n\nclass Demo4 extends Component {\n\trender(){\n\t\tlet now = 40;\n\t\treturn (\n\t\t\t<div>\n\t\t\t\t<ProgressBar active now = {now} label={`${now}%`} ></ProgressBar>\n\t\t\t\t<ProgressBar size=\"sm\" active now = {now} label={`${now}%`} ></ProgressBar>\n\t\t\t\t<ProgressBar size=\"xs\" active now = {now} label={`${now}%`} ></ProgressBar>\n\t\t\t</div>\n\t\t)\n\t}\n}\n\nexport default Demo4;","desc":""},{"example":<Demo5 />,"title":" 网页顶部进度条","code":"/**\n * @title 网页顶部进度条\n * @description 网页顶部进度条\n */\n\nimport React, { Component } from 'react';\nimport { Button, ProgressBar } from 'tinper-bee';\n\n\n\n\nclass Demo4 extends Component {\n    start = () => {\n        ProgressBar.start();\n    }\n    set = () => {\n        ProgressBar.set(0.4);\n    }\n    inc = () => {\n        ProgressBar.inc();\n    }\n    done = () => {\n        ProgressBar.done();\n    }\n\trender(){\n        const style = {marginRight:\"10px\"};\n\t\treturn (\n\t\t\t<div>\n\t\t\t\t<Button style={style} onClick={this.start}>点我开始</Button>\n\t\t\t\t<Button style={style} onClick={this.set}>设置固定位置</Button>\n\t\t\t\t<Button style={style} onClick={this.inc}>点我加快</Button>\n\t\t\t\t<Button onClick={this.done}>点我结束</Button>\n\t\t\t</div>\n\t\t)\n\t}\n}\n\nexport default Demo4;","desc":" 网页顶部进度条"}]


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
