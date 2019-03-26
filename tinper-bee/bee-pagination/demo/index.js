import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Drawer from 'bee-drawer';
import Clipboard from 'bee-clipboard'; 
import Button from '../src';



var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var Demo4 = require("./demolist/Demo4");var Demo5 = require("./demolist/Demo5");var Demo6 = require("./demolist/Demo6");var Demo7 = require("./demolist/Demo7");var DemoArray = [{"example":<Demo1 />,"title":" 少页数Pagination","code":"/**\r\n * @title 少页数Pagination\r\n * @description 所有页数均显示。默认无确认按钮。\r\n */\r\n\r\nimport React, { Component } from 'react';\r\nimport { Pagination } from 'tinper-bee';\r\n\r\nclass Demo1 extends React.Component {\r\n    constructor(props) {\r\n        super(props);\r\n        this.state = {\r\n            activePage: 1\r\n        }\r\n    }\r\n    handleSelect(eventKey) {\r\n        console.log(eventKey);\r\n        this.setState({\r\n            activePage: eventKey\r\n        });\r\n    }\r\n\r\n    dataNumSelect = (index, value) => {\r\n        console.log(index, value);\r\n\r\n    }\r\n\r\n    render() {\r\n        return (\r\n            <div>\r\n                <Pagination\r\n                    first\r\n                    last\r\n                    prev\r\n                    next\r\n                    maxButtons={5}\r\n                    boundaryLinks\r\n                    activePage={this.state.activePage}\r\n                    onSelect={this.handleSelect.bind(this)}\r\n                    onDataNumSelect={this.dataNumSelect}\r\n                    showJump={true}\r\n                    total={100}\r\n                    dataNum={2}\r\n                />\r\n\r\n            </div>\r\n        );\r\n    }\r\n}\r\n\r\n","desc":" 所有页数均显示。默认无确认按钮。"},{"example":<Demo2 />,"title":" 多页数Pagination","code":"/**\r\n * @title 多页数Pagination\r\n * @description 可根据参数设置功能按钮的显示，部分页数隐藏。\r\n */\r\n\r\nimport React, { Component } from 'react';\r\nimport { Pagination } from 'tinper-bee';\r\n\r\nclass Demo2 extends React.Component {\r\n\tconstructor(props) {\r\n\t\tsuper(props);\r\n\t\tthis.state = {\r\n\t\t\tactivePage:1\r\n\t\t}\r\n\t}\r\n\thandleSelect(eventKey) {\r\n\t    this.setState({\r\n\t      activePage: eventKey\r\n\t    });\r\n\t}\r\n\trender() {\r\n\t    return (\r\n\t      <div>\r\n\t        <Pagination\r\n\t        \tfirst\r\n\t        \tlast\r\n\t        \tprev\r\n\t        \tnext\r\n\t        \tboundaryLinks\r\n\t\t        items={11}\r\n\t\t        maxButtons={5}\r\n\t\t        activePage={this.state.activePage}\r\n\t\t        onSelect={this.handleSelect.bind(this)}\r\n\t\t\t/>\r\n\t      </div>\r\n\t    );\r\n\t}\r\n}\r\n","desc":" 可根据参数设置功能按钮的显示，部分页数隐藏。"},{"example":<Demo3 />,"title":" 有间隔Pagination","code":"/**\r\n * @title 有间隔Pagination\r\n * @description 有间隔Pagination\r\n */\r\n\r\nimport React, { Component } from \"react\";\r\nimport { Pagination } from 'tinper-bee';\r\n\r\nclass Demo3 extends React.Component {\r\n  constructor(props) {\r\n    super(props);\r\n    this.state = {\r\n      activePage: 1\r\n    };\r\n  }\r\n  handleSelect(eventKey) {\r\n    this.setState({\r\n      activePage: eventKey\r\n    });\r\n  }\r\n  render() {\r\n    return (\r\n      <Pagination\r\n        prev\r\n        next\r\n        size=\"sm\"\r\n        gap={true}\r\n        items={5}\r\n        maxButtons={5}\r\n        activePage={this.state.activePage}\r\n        onSelect={this.handleSelect.bind(this)}\r\n      />\r\n    );\r\n  }\r\n}\r\n\r\n","desc":" 有间隔Pagination"},{"example":<Demo4 />,"title":" 多语示例","code":"/**\r\n * @title 多语示例\r\n * @description 所有页数均显示。\r\n */\r\n\r\nimport React, { Component } from 'react';\r\nimport { Pagination } from 'tinper-bee';\r\n\r\nclass Demo4 extends React.Component {\r\n\tconstructor(props) {\r\n\t\tsuper(props);\r\n\t\tthis.state = {\r\n\t\t\tactivePage:1\r\n\t\t}\r\n\t}\r\n\thandleSelect(eventKey) {\r\n\t    this.setState({\r\n\t      activePage: eventKey\r\n\t    });\r\n\t}\r\n\r\n    dataNumSelect = (index,value) =>{\r\n        console.log(index,value);\r\n\r\n    }\r\n\trender() {\r\n\t\tvar local={\r\n\t\t\t'lang':'en',\r\n\t\t\t'total': 'Total',\r\n\t\t\t'items': 'Items',\r\n\t\t\t'show': 'page',\r\n\t\t\t'goto':'goto',\r\n\t\t\t'page':'',\r\n\t\t\t'ok':'ok'\r\n\t\t}\r\n\t    return (\r\n\t      <div>\r\n\t        <Pagination\r\n\t\t\t\tfirst\r\n\t\t\t\tlast\r\n\t\t\t\tprev\r\n\t\t\t\tnext\r\n\t\t\t\tmaxButtons={5}\r\n\t        \tboundaryLinks\r\n\t\t        activePage={this.state.activePage}\r\n\t\t        onSelect={this.handleSelect.bind(this)}\r\n\t\t\t\tonDataNumSelect={this.dataNumSelect}\r\n\t\t\t\tshowJump={true}\r\n\t\t\t\ttotal={100}\r\n\t\t\t\tdataNum={2}\r\n\t\t\t\tlocale={local}\r\n\t\t\t/>\r\n\t      </div>\r\n\t    );\r\n\t}\r\n}\r\n\r\n","desc":" 所有页数均显示。"},{"example":<Demo5 />,"title":" 不可用pagiantion","code":"/**\r\n * @title 不可用pagiantion\r\n * @description pagination不可使用状态\r\n */\r\n\r\nimport React, { Component } from 'react';\r\nimport { Pagination } from 'tinper-bee';\r\n\r\nclass Demo5 extends React.Component {\r\n\tconstructor(props) {\r\n\t\tsuper(props);\r\n\t\tthis.state = {\r\n\t\t\tactivePage:1\r\n\t\t}\r\n\t}\r\n\thandleSelect(eventKey) {\r\n\t\tconsole.log(eventKey);\r\n\t    this.setState({\r\n\t      activePage: eventKey\r\n\t    });\r\n\t}\r\n\r\n    dataNumSelect = (index,value) =>{\r\n        console.log(index,value);\r\n\r\n    }\r\n\trender() {\r\n\t    return (\r\n\t      <div>\r\n\t        <Pagination\r\n\t\t\t\tfirst\r\n\t\t\t\tlast\r\n\t\t\t\tprev\r\n\t\t\t\tnext\r\n\t\t\t\tmaxButtons={5}\r\n\t        \tboundaryLinks\r\n\t\t        activePage={this.state.activePage}\r\n\t\t        onSelect={this.handleSelect.bind(this)}\r\n\t\t\t\tonDataNumSelect={this.dataNumSelect}\r\n\t\t\t\tshowJump={true}\r\n\t\t\t\ttotal={100}\r\n\t\t\t\tdataNum={2}\r\n\t\t\t\tdisabled={true}\r\n\t\t\t/>\r\n\t      </div>\r\n\t    );\r\n\t}\r\n}\r\n\r\n","desc":" pagination不可使用状态"},{"example":<Demo6 />,"title":" 自定义按钮的Pagination","code":"/**\r\n * @title 自定义按钮的Pagination\r\n * @description 通过confirmBtn参数自定义确认按钮，默认不显示按钮。\r\n */\r\n\r\nimport React, { Component } from 'react';\r\nimport { Pagination, Button } from 'tinper-bee';\r\n\n\r\nclass Demo6 extends React.Component {\r\n\tconstructor(props) {\r\n\t\tsuper(props);\r\n\t\tthis.state = {\r\n\t\t\tactivePage:1\r\n\t\t}\r\n\t}\r\n\thandleSelect(eventKey) {\r\n\t\tconsole.log(eventKey);\r\n\t    this.setState({\r\n\t      activePage: eventKey\r\n\t    });\r\n\t}\r\n\r\n    dataNumSelect = (index,value) =>{\r\n        console.log(index,value);\r\n\r\n\t}\r\n\t\r\n\trenderConfirmBtn = () => {\r\n\t\treturn (\r\n\t\t  \t<Button\r\n\t\t\t\tcolors=\"dark\"\r\n\t\t\t\tshape='border'\r\n\t\t\t>\r\n\t\t\t\t确认\r\n\t\t\t</Button>\r\n\t\t);\r\n\t}\r\n\r\n\trender() {\r\n\t    return (\r\n\t      <div>\r\n\t        <Pagination\r\n\t\t\t\tfirst\r\n\t\t\t\tlast\r\n\t\t\t\tprev\r\n\t\t\t\tnext\r\n\t\t\t\tmaxButtons={5}\r\n\t        \tboundaryLinks\r\n\t\t        activePage={this.state.activePage}\r\n\t\t        onSelect={this.handleSelect.bind(this)}\r\n\t\t\t\tonDataNumSelect={this.dataNumSelect}\r\n\t\t\t\tshowJump={true}\r\n\t\t\t\ttotal={100}\r\n\t\t\t\tdataNum={2}\r\n\t\t\t\tconfirmBtn={this.renderConfirmBtn}\r\n\t\t\t/>\r\n\t      </div>\r\n\t    );\r\n\t}\r\n}\r\n\r\n","desc":" 通过confirmBtn参数自定义确认按钮，默认不显示按钮。"},{"example":<Demo7 />,"title":" 不显示按钮边框的Pagination","code":"/**\r\n * @title 不显示按钮边框的Pagination\r\n * @description 通过noBorder参数设置是否显示按钮边框。\r\n */\r\n\r\nimport React, { Component } from 'react';\r\nimport { Pagination } from 'tinper-bee';\r\n\r\nclass Demo7 extends React.Component {\r\n    constructor(props) {\r\n        super(props);\r\n        this.state = {\r\n            activePage: 1\r\n        }\r\n    }\r\n    handleSelect(eventKey) {\r\n        console.log(eventKey);\r\n        this.setState({\r\n            activePage: eventKey\r\n        });\r\n    }\r\n\r\n    dataNumSelect = (index, value) => {\r\n        console.log(index, value);\r\n\r\n    }\r\n\r\n    render() {\r\n        return (\r\n            <div>\r\n                <Pagination\r\n                    first\r\n                    last\r\n                    prev\r\n                    next\r\n                    maxButtons={5}\r\n                    boundaryLinks\r\n                    activePage={this.state.activePage}\r\n                    onSelect={this.handleSelect.bind(this)}\r\n                    onDataNumSelect={this.dataNumSelect}\r\n                    showJump={true}\r\n                    noBorder={true}\r\n                    total={100}\r\n                    dataNum={2}\r\n                />\r\n\r\n            </div>\r\n        );\r\n    }\r\n}\r\n\r\n","desc":" 通过noBorder参数设置是否显示按钮边框。"}]


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
