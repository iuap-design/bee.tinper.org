import {Col, Row} from 'bee-layout';
import {Panel} from 'bee-panel';
import Button from 'bee-button';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';


const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var DemoArray = [{"example":<Demo1 />,"title":" 常用可选transfer","code":"/**\n*\n* @title 常用可选transfer\n* @description \n*\n*/\n\n\nimport React, { Component } from 'react';\nimport { Transfer } from 'tinper-bee';\n\nconst mockData = [];\nfor (let i = 0; i < 20; i++) {\n  mockData.push({\n    key: i.toString(),\n    title: `content${i + 1}`,\n    description: `description of content${i + 1}`,\n    disabled: i % 3 < 1,\n\n  });\n}\n\nconst targetKeys = mockData\n        .filter(item => +item.key % 3 > 1)\n        .map(item => item.key);\n\nclass Demo1 extends React.Component {\n  state = {\n    targetKeys,\n    selectedKeys: [],\n    showModal: false,\n    modalSize: ''\n  }\n\n  handleChange = (nextTargetKeys, direction, moveKeys) => {\n    this.setState({ targetKeys: nextTargetKeys });\n\n    console.log('targetKeys: ', targetKeys);\n    console.log('direction: ', direction);\n    console.log('moveKeys: ', moveKeys);\n  }\n\n  handleSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {\n    this.setState({ selectedKeys: [...sourceSelectedKeys, ...targetSelectedKeys] });\n\n    console.log('sourceSelectedKeys: ', sourceSelectedKeys);\n    console.log('targetSelectedKeys: ', targetSelectedKeys);\n  }\n\n  handleScroll = (direction, e) => {\n    console.log('direction:', direction);\n    console.log('target:', e.target);\n  }\n\n\n  render() {\n    const state = this.state;\n\n    return (\n       <Transfer\n          dataSource={mockData}\n          titles={['Source', 'Target']}\n          targetKeys={state.targetKeys}\n          selectedKeys={state.selectedKeys}\n          onChange={this.handleChange}\n          onSelectChange={this.handleSelectChange}\n          onScroll={this.handleScroll}\n          render={item => item.title}\n        />\n    );\n  }\n}\n\n\n\n","desc":" "},{"example":<Demo2 />,"title":" 带搜索框的tranfer","code":"/**\n*\n* @title 带搜索框的tranfer\n* @description\n*\n*/\n\nimport React, { Component } from 'react';\nimport { Transfer } from 'tinper-bee';\n\n\nclass Demo2 extends React.Component {\n  state = {\n    mockData: [],\n    targetKeys: [],\n  }\n  componentDidMount() {\n    this.getMock();\n  }\n  getMock = () => {\n    const targetKeys = [];\n    const mockData = [];\n    for (let i = 0; i < 20; i++) {\n      const data = {\n        key: i.toString(),\n        title: `content${i + 1}`,\n        description: `description of content${i + 1}`,\n        chosen: Math.random() * 2 > 1,\n      };\n      if (data.chosen) {\n        targetKeys.push(data.key);\n      }\n      mockData.push(data);\n    }\n    this.setState({ mockData, targetKeys });\n  }\n  filterOption = (inputValue, option) => {\n    return option.title.indexOf(inputValue) > -1;\n  }\n  handleChange = (targetKeys) => {\n    this.setState({ targetKeys });\n  }\n  render() {\n    return (\n      <Transfer\n        dataSource={this.state.mockData}\n        showSearch\n        filterOption={this.filterOption}\n        targetKeys={this.state.targetKeys}\n        onChange={this.handleChange}\n        render={item => item.title}\n      />\n    );\n  }\n}\n\n\n\n","desc":""},{"example":<Demo3 />,"title":" 底部自定义的transfer","code":"/**\n*\n* @title 底部自定义的transfer\n* @description \n*\n*/\n\nimport React, { Component } from 'react';\nimport { Transfer, Button } from 'tinper-bee';\n\nclass Demo3 extends React.Component {\n  state = {\n    mockData: [],\n    targetKeys: [],\n  }\n  componentDidMount() {\n    this.getMock();\n  }\n  getMock = () => {\n    const targetKeys = [];\n    const mockData = [];\n    for (let i = 0; i < 20; i++) {\n      const data = {\n        key: i.toString(),\n        title: `content${i + 1}`,\n        description: `description of content${i + 1}`,\n        chosen: Math.random() * 2 > 1,\n      };\n      if (data.chosen) {\n        targetKeys.push(data.key);\n      }\n      mockData.push(data);\n    }\n    this.setState({ mockData, targetKeys });\n  }\n  handleChange = (targetKeys) => {\n    this.setState({ targetKeys });\n  }\n  renderFooter = () => {\n    return (\n      <Button\n        size=\"sm\"\n        style={{ float: 'right', margin: 5 }}\n        onClick={this.getMock}\n      >\n        reload\n      </Button>\n    );\n  }\n  render() {\n    return (\n      <Transfer\n        dataSource={this.state.mockData}\n        showSearch\n        listStyle={{\n          width: 250,\n          height: 300,\n        }}\n        targetKeys={this.state.targetKeys}\n        onChange={this.handleChange}\n        render={item => `${item.title}-${item.description}`}\n        footer={this.renderFooter}\n      />\n    );\n  }\n}\n\n\n","desc":" "}]


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
            <Col md={12}>
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
