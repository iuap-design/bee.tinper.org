import {Col, Row} from 'bee-layout';
import {Panel} from 'bee-panel';
import Button from 'bee-button';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';


const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var Demo4 = require("./demolist/Demo4");var Demo5 = require("./demolist/Demo5");var Demo6 = require("./demolist/Demo6");var Demo7 = require("./demolist/Demo7");var Demo8 = require("./demolist/Demo8");var DemoArray = [{"example":<Demo1 />,"title":" 少页数Pagination","code":"/**\n * @title 少页数Pagination\n * @description 所有页数均显示。默认无确认按钮。\n */\n\nimport React, { Component } from 'react';\nimport { Pagination } from 'tinper-bee';\n\nclass Demo1 extends React.Component {\n    constructor(props) {\n        super(props);\n        this.state = {\n            activePage: 1\n        }\n    }\n    handleSelect(eventKey) {\n        console.log(eventKey);\n        this.setState({\n            activePage: eventKey\n        });\n    }\n\n    dataNumSelect = (index, value) => {\n        console.log(index, value);\n\n    }\n\n    render() {\n        return (\n            <div>\n                <Pagination\n                    first\n                    last\n                    prev\n                    next\n                    maxButtons={5}\n                    boundaryLinks\n                    activePage={this.state.activePage}\n                    onSelect={this.handleSelect.bind(this)}\n                    onDataNumSelect={this.dataNumSelect}\n                    showJump={true}\n                    total={100}\n                    dataNum={2}\n                />\n\n            </div>\n        );\n    }\n}\n\n","desc":" 所有页数均显示。默认无确认按钮。"},{"example":<Demo2 />,"title":" 多页数Pagination","code":"/**\n * @title 多页数Pagination\n * @description 可根据参数设置功能按钮的显示，部分页数隐藏。\n */\n\nimport React, { Component } from 'react';\nimport { Pagination } from 'tinper-bee';\n\nclass Demo2 extends React.Component {\n\tconstructor(props) {\n\t\tsuper(props);\n\t\tthis.state = {\n\t\t\tactivePage:1\n\t\t}\n\t}\n\thandleSelect(eventKey) {\n\t    this.setState({\n\t      activePage: eventKey\n\t    });\n\t}\n\trender() {\n\t    return (\n\t      <div>\n\t        <Pagination\n\t        \tfirst\n\t        \tlast\n\t        \tprev\n\t        \tnext\n\t        \tboundaryLinks\n\t\t        items={11}\n\t\t        maxButtons={5}\n\t\t        activePage={this.state.activePage}\n\t\t        onSelect={this.handleSelect.bind(this)}\n\t\t\t/>\n\t      </div>\n\t    );\n\t}\n}\n","desc":" 可根据参数设置功能按钮的显示，部分页数隐藏。"},{"example":<Demo3 />,"title":" 有间隔Pagination","code":"/**\n * @title 有间隔Pagination\n * @description 有间隔Pagination\n */\n\nimport React, { Component } from \"react\";\nimport { Pagination } from 'tinper-bee';\n\nclass Demo3 extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      activePage: 1\n    };\n  }\n  handleSelect(eventKey) {\n    this.setState({\n      activePage: eventKey\n    });\n  }\n  render() {\n    return (\n      <Pagination\n        prev\n        next\n        size=\"sm\"\n        gap={true}\n        items={5}\n        maxButtons={5}\n        activePage={this.state.activePage}\n        onSelect={this.handleSelect.bind(this)}\n      />\n    );\n  }\n}\n\n","desc":" 有间隔Pagination"},{"example":<Demo4 />,"title":" 多语示例","code":"/**\n * @title 多语示例\n * @description 所有页数均显示。\n */\n\nimport React, { Component } from 'react';\nimport { Pagination } from 'tinper-bee';\n\nclass Demo4 extends React.Component {\n\tconstructor(props) {\n\t\tsuper(props);\n\t\tthis.state = {\n\t\t\tactivePage:1\n\t\t}\n\t}\n\thandleSelect(eventKey) {\n\t    this.setState({\n\t      activePage: eventKey\n\t    });\n\t}\n\n    dataNumSelect = (index,value) =>{\n        console.log(index,value);\n\n    }\n\trender() {\n\t\tvar local={\n\t\t\t'lang':'en',\n\t\t\t'total': 'Total',\n\t\t\t'items': 'Items',\n\t\t\t'show': 'page',\n\t\t\t'goto':'goto',\n\t\t\t'page':'',\n\t\t\t'ok':'ok'\n\t\t}\n\t    return (\n\t      <div>\n\t        <Pagination\n\t\t\t\tfirst\n\t\t\t\tlast\n\t\t\t\tprev\n\t\t\t\tnext\n\t\t\t\tmaxButtons={5}\n\t        \tboundaryLinks\n\t\t        activePage={this.state.activePage}\n\t\t        onSelect={this.handleSelect.bind(this)}\n\t\t\t\tonDataNumSelect={this.dataNumSelect}\n\t\t\t\tshowJump={true}\n\t\t\t\ttotal={100}\n\t\t\t\tdataNum={2}\n\t\t\t\tlocale={local}\n\t\t\t/>\n\t      </div>\n\t    );\n\t}\n}\n\n","desc":" 所有页数均显示。"},{"example":<Demo5 />,"title":" 不可用pagiantion","code":"/**\n * @title 不可用pagiantion\n * @description pagination不可使用状态\n */\n\nimport React, { Component } from 'react';\nimport { Pagination } from 'tinper-bee';\n\nclass Demo5 extends React.Component {\n\tconstructor(props) {\n\t\tsuper(props);\n\t\tthis.state = {\n\t\t\tactivePage:1\n\t\t}\n\t}\n\thandleSelect(eventKey) {\n\t\tconsole.log(eventKey);\n\t    this.setState({\n\t      activePage: eventKey\n\t    });\n\t}\n\n    dataNumSelect = (index,value) =>{\n        console.log(index,value);\n\n    }\n\trender() {\n\t    return (\n\t      <div>\n\t        <Pagination\n\t\t\t\tfirst\n\t\t\t\tlast\n\t\t\t\tprev\n\t\t\t\tnext\n\t\t\t\tmaxButtons={5}\n\t        \tboundaryLinks\n\t\t        activePage={this.state.activePage}\n\t\t        onSelect={this.handleSelect.bind(this)}\n\t\t\t\tonDataNumSelect={this.dataNumSelect}\n\t\t\t\tshowJump={true}\n\t\t\t\ttotal={100}\n\t\t\t\tdataNum={2}\n\t\t\t\tdisabled={true}\n\t\t\t/>\n\t      </div>\n\t    );\n\t}\n}\n\n","desc":" pagination不可使用状态"},{"example":<Demo6 />,"title":" 自定义按钮的Pagination","code":"/**\n * @title 自定义按钮的Pagination\n * @description 通过confirmBtn参数自定义确认按钮，默认不显示按钮。\n */\n\nimport React, { Component } from 'react';\nimport { Pagination, Button } from 'tinper-bee';\n\nclass Demo6 extends React.Component {\n\tconstructor(props) {\n\t\tsuper(props);\n\t\tthis.state = {\n\t\t\tactivePage:1\n\t\t}\n\t}\n\thandleSelect(eventKey) {\n\t\tconsole.log(eventKey);\n\t    this.setState({\n\t      activePage: eventKey\n\t    });\n\t}\n\n    dataNumSelect = (index,value) =>{\n        console.log(index,value);\n\n\t}\n\t\n\trenderConfirmBtn = () => {\n\t\treturn (\n\t\t  \t<Button\n\t\t\t\tcolors=\"dark\"\n\t\t\t\tshape='border'\n\t\t\t>\n\t\t\t\t确认\n\t\t\t</Button>\n\t\t);\n\t}\n\n\trender() {\n\t    return (\n\t      <div>\n\t        <Pagination\n\t\t\t\tfirst\n\t\t\t\tlast\n\t\t\t\tprev\n\t\t\t\tnext\n\t\t\t\tmaxButtons={5}\n\t        \tboundaryLinks\n\t\t        activePage={this.state.activePage}\n\t\t        onSelect={this.handleSelect.bind(this)}\n\t\t\t\tonDataNumSelect={this.dataNumSelect}\n\t\t\t\tshowJump={true}\n\t\t\t\ttotal={100}\n\t\t\t\tdataNum={2}\n\t\t\t\tconfirmBtn={this.renderConfirmBtn}\n\t\t\t/>\n\t      </div>\n\t    );\n\t}\n}\n\n","desc":" 通过confirmBtn参数自定义确认按钮，默认不显示按钮。"},{"example":<Demo7 />,"title":" 显示按钮边框的Pagination","code":"/**\n * @title 显示按钮边框的Pagination\n * @description 通过noBorder参数设置是否显示按钮边框。\n */\n\nimport React, { Component } from 'react';\nimport { Pagination } from 'tinper-bee';\n\nclass Demo1 extends React.Component {\n    constructor(props) {\n        super(props);\n        this.state = {\n            activePage: 1\n        }\n    }\n    handleSelect(eventKey) {\n        console.log(eventKey);\n        this.setState({\n            activePage: eventKey\n        });\n    }\n\n    dataNumSelect = (index, value) => {\n        console.log(index, value);\n\n    }\n\n    render() {\n        return (\n            <div>\n                <Pagination\n                    first\n                    last\n                    prev\n                    next\n                    maxButtons={5}\n                    boundaryLinks\n                    activePage={this.state.activePage}\n                    onSelect={this.handleSelect.bind(this)}\n                    onDataNumSelect={this.dataNumSelect}\n                    showJump={true}\n                    noBorder={false}\n                    total={100}\n                    dataNum={2}\n                />\n\n            </div>\n        );\n    }\n}\n\n","desc":" 通过noBorder参数设置是否显示按钮边框。"},{"example":<Demo8 />,"title":" 不同大小的Pagination","code":"/**\n * @title 不同大小的Pagination\n * @description 通过size参数控制分页的大小。\n */\n\nimport React, { Component } from 'react';\nimport { Pagination, Button } from 'tinper-bee';\n\nclass Demo8 extends React.Component {\n    constructor(props) {\n        super(props);\n        this.state = {\n            activePage: 1\n        }\n    }\n    handleSelect(eventKey) {\n        console.log(eventKey);\n        this.setState({\n            activePage: eventKey\n        });\n    }\n\n    dataNumSelect = (index, value) => {\n        console.log(index, value);\n\n    }\n\n    render() {\n        return (\n            <div className=\"demo8\">\n                <Pagination\n                    className=\"demo8-pagination\"\n                    first\n                    last\n                    prev\n                    next\n                    maxButtons={5}\n                    boundaryLinks\n                    activePage={this.state.activePage}\n                    onSelect={this.handleSelect.bind(this)}\n                    onDataNumSelect={this.dataNumSelect}\n                    showJump={true}\n                    total={100}\n                    dataNum={2}\n                    size=\"sm\"\n                />\n                <Pagination\n                    className=\"demo8-pagination\"\n                    first\n                    last\n                    prev\n                    next\n                    maxButtons={5}\n                    boundaryLinks\n                    activePage={this.state.activePage}\n                    onSelect={this.handleSelect.bind(this)}\n                    onDataNumSelect={this.dataNumSelect}\n                    showJump={true}\n                    total={100}\n                    dataNum={2}\n                />\n                <Pagination\n                    className=\"demo8-pagination\"\n                    first\n                    last\n                    prev\n                    next\n                    maxButtons={5}\n                    boundaryLinks\n                    activePage={this.state.activePage}\n                    onSelect={this.handleSelect.bind(this)}\n                    onDataNumSelect={this.dataNumSelect}\n                    showJump={true}\n                    total={100}\n                    dataNum={2}\n                    size=\"lg\"\n                />\n            </div>\n        );\n    }\n}\n\n","desc":" 通过size参数控制分页的大小。","scss_code":".demo8 {\n    padding-bottom: 20px;\n    display: block;\n    .demo8-pagination{\n        height: 50px;\n        display: block;\n    }\n}"}]


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
            <Col md={12} id={title.trim()} >
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
