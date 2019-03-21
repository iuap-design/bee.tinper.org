import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Drawer from 'bee-drawer';
import Clipboard from 'bee-clipboard'; 
import Button from '../src';



var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var Demo4 = require("./demolist/Demo4");var DemoArray = [{"example":<Demo1 />,"title":" 默认Rate","code":"/**\n *\n * @title 默认Rate\n * @description 这是描述\n *\n */\n\nimport React, { Component } from 'react';\nimport { Rate } from 'tinper-bee';\n\nclass Demo1 extends Component {\n    constructor(props){\n        super(props);\n        this.state={\n            value:3\n        };\n    }\n    handChange=value=>{\n        this.setState({\n            value\n        })\n    }\n    render() {\n        return (\n            <Rate value={this.state.value} onChange={this.handChange}/>\n        ) \n    }\n}\n\n","desc":" 这是描述"},{"example":<Demo2 />,"title":" 支持选中半星","code":"/**\n *\n * @title 支持选中半星\n * @description 将allowHalf设置为true即可\n *\n */\n\nimport React, { Component } from 'react';\nimport { Rate } from 'tinper-bee';\n\nclass Demo2 extends Component {\n    constructor(props){\n        super(props);\n        this.state={\n            value:3\n        };\n    }\n    handChange=value=>{\n        this.setState({\n            value\n        })\n    }\n    render() {\n        return (\n            <Rate allowHalf={true} value={this.state.value} onChange={this.handChange}/>\n        )\n    }\n}\n\n","desc":" 将allowHalf设置为true即可"},{"example":<Demo3 />,"title":" 评分加显示文案","code":"/**\n *\n * @title 评分加显示文案\n * @description onChange和onHoverChange的使用\n *\n */\n\nimport React, { Component } from 'react';\nimport { Rate } from 'tinper-bee';\n\nclass Demo3 extends Component {\n    constructor(props){\n        super(props);\n        this.state={\n            value:3\n        };\n    }\n    handleChange=(value)=>{\n        this.setState({\n            value:value\n        })\n    }\n    render() {\n        return (\n            <div>\n                <Rate value={this.state.value} onChange={this.handleChange} count={8}  />\n                <span>{this.state.value}</span>\n            </div>\n        )\n    }\n}\n\n","desc":" onChange和onHoverChange的使用"},{"example":<Demo4 />,"title":" 其它评分样式","code":"/**\n *\n * @title 其它评分样式\n * @description character的使用\n *\n */\n\nimport React, { Component } from 'react';\nimport { Rate, Icon } from 'tinper-bee';\n\nclass Demo4 extends Component {\n    constructor(props){\n        super(props);\n        this.state={\n            v1:1,\n            v2:2,\n            v3:3,\n            v4:4\n        };\n    }\n    handChange=(value,type)=>{\n        switch(type){\n            case 1:\n            this.setState({\n                v1:value\n            });\n            break;\n            case 2:\n            this.setState({\n                v2:value\n            });\n            break;\n            case 3:\n            this.setState({\n                v3:value\n            });\n            break;\n            case 4:\n            this.setState({\n                v4:value\n            });\n            break;\n        }\n    }\n    render() {\n        return (\n            <ul style={{\"listStyle\":\"none\"}}>\n                <li><Rate character=\"A\" value={this.state.v1} onChange={(v)=>{this.handChange(v,1)}} /></li>\n                <li><Rate character=\"字\" value={this.state.v2} onChange={(v)=>{this.handChange(v,2)}} /></li>\n                <li><Rate character={<Icon type=\"uf-bell\" />} value={this.state.v3} onChange={(v)=>{this.handChange(v,3)}} /></li>\n                <li><Rate character={<Icon type=\"uf-heart\" />} value={this.state.v4} onChange={(v)=>{this.handChange(v,4)}}/></li>\n            </ul>\n        )\n    }\n}\n\n","desc":" character的使用"}]


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
