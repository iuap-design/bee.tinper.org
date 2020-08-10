import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Drawer from 'bee-drawer';
import Clipboard from 'bee-clipboard'; 
import Button from '../src';



var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var Demo4 = require("./demolist/Demo4");var Demo5 = require("./demolist/Demo5");var Demo6 = require("./demolist/Demo6");var Demo7 = require("./demolist/Demo7");var DemoArray = [{"example":<Demo1 />,"title":" 少页数Pagination","code":"/**\n * @title 少页数Pagination\n * @description 所有页数均显示。默认无确认按钮。\n */\n\nimport React from 'react';\nimport { Pagination } from 'tinper-bee';\n\n\nclass Demo1 extends React.Component {\n    constructor(props) {\n        super(props);\n        this.state = {\n            activePage: 1,\n        }\n    }\n    handleSelect(eventKey) {\n        console.log(eventKey);\n        this.setState({\n            activePage: eventKey\n        });\n    }\n\n    dataNumSelect = (index, value) => {\n        console.log(index, value);\n\n    }\n    render() {\n        return (\n            <div>\n                <Pagination\n                    prev\n                    next\n                    maxButtons={5}\n                    boundaryLinks\n                    activePage={this.state.activePage}\n                    onSelect={this.handleSelect.bind(this)}\n                    onDataNumSelect={this.dataNumSelect}\n                    showJump={true}\n                    total={50}\n                    dataNum={1}\n                />\n\n            </div>\n        );\n    }\n}\n\nexport default Demo1;","desc":" 所有页数均显示。默认无确认按钮。"},{"example":<Demo2 />,"title":" 多页数Pagination","code":"/**\n * @title 多页数Pagination\n * @description 可根据参数设置功能按钮的显示，部分页数隐藏。\n */\n\nimport React, { Component } from 'react';\nimport { Pagination } from 'tinper-bee';\n\n\nclass Demo2 extends React.Component {\n\tconstructor(props) {\n\t\tsuper(props);\n\t\tthis.state = {\n\t\t\tactivePage:1\n\t\t}\n\t}\n\thandleSelect(eventKey) {\n\t    this.setState({\n\t      activePage: eventKey\n\t    });\n\t}\n\trender() {\n\t    return (\n\t      <div>\n\t        <Pagination\n\t        \tfirst\n\t        \tlast\n\t        \tprev\n\t        \tnext\n\t        \tboundaryLinks\n\t\t        items={11}\n\t\t        maxButtons={5}\n\t\t        activePage={this.state.activePage}\n\t\t        onSelect={this.handleSelect.bind(this)}\n\t\t\t/>\n\t      </div>\n\t    );\n\t}\n}\nexport default Demo2;","desc":" 可根据参数设置功能按钮的显示，部分页数隐藏。"},{"example":<Demo3 />,"title":" 无间隔Pagination","code":"/**\n * @title 无间隔Pagination\n * @description 无间隔Pagination\n */\n\nimport React, { Component } from \"react\";\nimport { Pagination } from 'tinper-bee';\n\n\nclass Demo3 extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      activePage: 1\n    };\n  }\n  handleSelect(eventKey) {\n    this.setState({\n      activePage: eventKey\n    });\n  }\n  render() {\n    return (\n      <Pagination\n        first\n        last\n        prev\n        next\n        size=\"md\"\n        gap={false}\n        maxButtons={5}\n        activePage={this.state.activePage}\n        onSelect={this.handleSelect.bind(this)}\n        showJump={true}\n        total={100}\n      />\n    );\n  }\n}\nexport default Demo3;\n","desc":" 无间隔Pagination"},{"example":<Demo4 />,"title":" 多语示例","code":"/**\n * @title 多语示例\n * @description 所有页数均显示。\n */\n\nimport React, { Component } from 'react';\nimport { Pagination } from 'tinper-bee';\n\n\nclass Demo4 extends React.Component {\n\tconstructor(props) {\n\t\tsuper(props);\n\t\tthis.state = {\n\t\t\tactivePage:1\n\t\t}\n\t}\n\thandleSelect(eventKey) {\n\t    this.setState({\n\t      activePage: eventKey\n\t    });\n\t}\n\n    dataNumSelect = (index,value) =>{\n        console.log(index,value);\n\n    }\n\trender() {\n\t\tvar local={\n\t\t\t'lang':'en',\n\t\t\t'total': 'Total',\n\t\t\t'items': 'Items',\n\t\t\t'show': 'page',\n\t\t\t'goto':'goto',\n\t\t\t'page':'',\n\t\t\t'ok':'ok'\n\t\t}\n\t    return (\n\t      <div>\n\t        <Pagination\n\t\t\t\tfirst\n\t\t\t\tlast\n\t\t\t\tprev\n\t\t\t\tnext\n\t\t\t\tmaxButtons={5}\n\t        \tboundaryLinks\n\t\t        activePage={this.state.activePage}\n\t\t        onSelect={this.handleSelect.bind(this)}\n\t\t\t\tonDataNumSelect={this.dataNumSelect}\n\t\t\t\tshowJump={true}\n\t\t\t\ttotal={100}\n\t\t\t\tdataNum={2}\n\t\t\t\tlocale={local}\n\t\t\t/>\n\t      </div>\n\t    );\n\t}\n}\n\nexport default Demo4;","desc":" 所有页数均显示。"},{"example":<Demo5 />,"title":" 不可用pagiantion","code":"/**\n * @title 不可用pagiantion\n * @description pagination不可使用状态\n */\n\nimport React, { Component } from 'react';\nimport { Pagination } from 'tinper-bee';\n\n\nclass Demo5 extends React.Component {\n\tconstructor(props) {\n\t\tsuper(props);\n\t\tthis.state = {\n\t\t\tactivePage:1\n\t\t}\n\t}\n\thandleSelect(eventKey) {\n\t\tconsole.log(eventKey);\n\t    this.setState({\n\t      activePage: eventKey\n\t    });\n\t}\n\n    dataNumSelect = (index,value) =>{\n        console.log(index,value);\n\n    }\n\trender() {\n\t    return (\n\t      <div>\n\t        <Pagination\n\t\t\t\tfirst\n\t\t\t\tlast\n\t\t\t\tprev\n\t\t\t\tnext\n\t\t\t\tmaxButtons={5}\n\t        \tboundaryLinks\n\t\t        activePage={this.state.activePage}\n\t\t        onSelect={this.handleSelect.bind(this)}\n\t\t\t\tonDataNumSelect={this.dataNumSelect}\n\t\t\t\tshowJump={true}\n\t\t\t\ttotal={100}\n\t\t\t\tdataNum={2}\n\t\t\t\tdisabled={true}\n\t\t\t/>\n\t      </div>\n\t    );\n\t}\n}\n\nexport default Demo5;","desc":" pagination不可使用状态"},{"example":<Demo6 />,"title":" 自定义按钮的Pagination","code":"/**\n * @title 自定义按钮的Pagination\n * @description 通过confirmBtn参数自定义确认按钮，默认不显示按钮。\n */\n\nimport React, { Component } from 'react';\nimport { Button, Pagination } from 'tinper-bee';\n\n\nclass Demo6 extends React.Component {\n\tconstructor(props) {\n\t\tsuper(props);\n\t\tthis.state = {\n\t\t\tactivePage:1\n\t\t}\n\t}\n\thandleSelect(eventKey) {\n\t\tconsole.log(eventKey);\n\t    this.setState({\n\t      activePage: eventKey\n\t    });\n\t}\n\n    dataNumSelect = (index,value) =>{\n        console.log(index,value);\n\n\t}\n\t\n\trenderConfirmBtn = () => {\n\t\treturn (\n\t\t  \t<Button bordered>确认</Button>\n\t\t);\n\t}\n\n\trender() {\n\t    return (\n\t      <div>\n\t        <Pagination\n\t\t\t\tfirst\n\t\t\t\tlast\n\t\t\t\tprev\n\t\t\t\tnext\n\t\t\t\tmaxButtons={5}\n\t        \tboundaryLinks\n\t\t        activePage={this.state.activePage}\n\t\t        onSelect={this.handleSelect.bind(this)}\n\t\t\t\tonDataNumSelect={this.dataNumSelect}\n\t\t\t\tshowJump={true}\n\t\t\t\ttotal={100}\n\t\t\t\tdataNum={2}\n\t\t\t\tconfirmBtn={this.renderConfirmBtn}\n\t\t\t/>\n\t      </div>\n\t    );\n\t}\n}\n\nexport default Demo6;","desc":" 通过confirmBtn参数自定义确认按钮，默认不显示按钮。"},{"example":<Demo7 />,"title":" 不显示按钮边框的Pagination","code":"/**\n * @title 不显示按钮边框的Pagination\n * @description 通过noBorder参数设置是否显示按钮边框。\n */\n\nimport React, { Component } from 'react';\nimport { Pagination } from 'tinper-bee';\n\n\nclass Demo7 extends React.Component {\n    constructor(props) {\n        super(props);\n        this.state = {\n            activePage: 1\n        }\n    }\n    handleSelect(eventKey) {\n        console.log(eventKey);\n        this.setState({\n            activePage: eventKey\n        });\n    }\n\n    dataNumSelect = (index, value) => {\n        console.log(index, value);\n\n    }\n\n    render() {\n        return (\n            <div>\n                <Pagination\n                    first\n                    last\n                    prev\n                    next\n                    maxButtons={5}\n                    boundaryLinks\n                    activePage={this.state.activePage}\n                    onSelect={this.handleSelect.bind(this)}\n                    onDataNumSelect={this.dataNumSelect}\n                    showJump={true}\n                    noBorder={true}\n                    total={100}\n                    dataNum={2}\n                />\n\n            </div>\n        );\n    }\n}\n\nexport default Demo7;","desc":" 通过noBorder参数设置是否显示按钮边框。"}]


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
