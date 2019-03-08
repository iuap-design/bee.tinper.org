import {Col, Row} from 'bee-layout';
import {Panel} from 'bee-panel';
import Button from 'bee-button';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';


const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var DemoArray = [{"example":<Demo1 />,"title":" 常用可选transfer","code":"/**\r\n*\r\n* @title 常用可选transfer\r\n* @description \r\n*\r\n*/\r\n\r\n\r\nimport React, { Component } from 'react';\r\nimport { Transfer } from 'tinper-bee';\r\n\r\nconst mockData = [];\r\nfor (let i = 0; i < 20; i++) {\r\n  mockData.push({\r\n    key: i.toString(),\r\n    title: `content${i + 1}`,\r\n    description: `description of content${i + 1}`,\r\n    disabled: i % 3 < 1,\r\n\r\n  });\r\n}\r\n\r\nconst targetKeys = mockData\r\n        .filter(item => +item.key % 3 > 1)\r\n        .map(item => item.key);\r\n\r\nclass Demo1 extends React.Component {\r\n  state = {\r\n    targetKeys,\r\n    selectedKeys: [],\r\n    showModal: false,\r\n    modalSize: ''\r\n  }\r\n\r\n  handleChange = (nextTargetKeys, direction, moveKeys) => {\r\n    this.setState({ targetKeys: nextTargetKeys });\r\n\r\n    console.log('targetKeys: ', targetKeys);\r\n    console.log('direction: ', direction);\r\n    console.log('moveKeys: ', moveKeys);\r\n  }\r\n\r\n  handleSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {\r\n    this.setState({ selectedKeys: [...sourceSelectedKeys, ...targetSelectedKeys] });\r\n\r\n    console.log('sourceSelectedKeys: ', sourceSelectedKeys);\r\n    console.log('targetSelectedKeys: ', targetSelectedKeys);\r\n  }\r\n\r\n  handleScroll = (direction, e) => {\r\n    console.log('direction:', direction);\r\n    console.log('target:', e.target);\r\n  }\r\n\r\n\r\n  render() {\r\n    const state = this.state;\r\n\r\n    return (\r\n       <Transfer\r\n          dataSource={mockData}\r\n          titles={['Source', 'Target']}\r\n          targetKeys={state.targetKeys}\r\n          selectedKeys={state.selectedKeys}\r\n          onChange={this.handleChange}\r\n          onSelectChange={this.handleSelectChange}\r\n          onScroll={this.handleScroll}\r\n          render={item => item.title}\r\n        />\r\n    );\r\n  }\r\n}\r\n\r\n\r\n\r\n","desc":" "},{"example":<Demo2 />,"title":" 带搜索框的tranfer","code":"/**\r\n*\r\n* @title 带搜索框的tranfer\r\n* @description\r\n*\r\n*/\r\n\r\nimport React, { Component } from 'react';\r\nimport { Transfer } from 'tinper-bee';\r\n\r\n\r\nclass Demo2 extends React.Component {\r\n  state = {\r\n    mockData: [],\r\n    targetKeys: [],\r\n  }\r\n  componentDidMount() {\r\n    this.getMock();\r\n  }\r\n  getMock = () => {\r\n    const targetKeys = [];\r\n    const mockData = [];\r\n    for (let i = 0; i < 20; i++) {\r\n      const data = {\r\n        key: i.toString(),\r\n        title: `content${i + 1}`,\r\n        description: `description of content${i + 1}`,\r\n        chosen: Math.random() * 2 > 1,\r\n      };\r\n      if (data.chosen) {\r\n        targetKeys.push(data.key);\r\n      }\r\n      mockData.push(data);\r\n    }\r\n    this.setState({ mockData, targetKeys });\r\n  }\r\n  filterOption = (inputValue, option) => {\r\n    return option.title.indexOf(inputValue) > -1;\r\n  }\r\n  handleChange = (targetKeys) => {\r\n    this.setState({ targetKeys });\r\n  }\r\n  render() {\r\n    return (\r\n      <Transfer\r\n        dataSource={this.state.mockData}\r\n        showSearch\r\n        filterOption={this.filterOption}\r\n        targetKeys={this.state.targetKeys}\r\n        onChange={this.handleChange}\r\n        render={item => item.title}\r\n      />\r\n    );\r\n  }\r\n}\r\n\r\n\r\n\r\n","desc":""},{"example":<Demo3 />,"title":" 底部自定义的transfer","code":"/**\r\n*\r\n* @title 底部自定义的transfer\r\n* @description \r\n*\r\n*/\r\n\r\nimport React, { Component } from 'react';\r\n\nimport { Transfer, Button } from 'tinper-bee';\r\n\r\nclass Demo3 extends React.Component {\r\n  state = {\r\n    mockData: [],\r\n    targetKeys: [],\r\n  }\r\n  componentDidMount() {\r\n    this.getMock();\r\n  }\r\n  getMock = () => {\r\n    const targetKeys = [];\r\n    const mockData = [];\r\n    for (let i = 0; i < 20; i++) {\r\n      const data = {\r\n        key: i.toString(),\r\n        title: `content${i + 1}`,\r\n        description: `description of content${i + 1}`,\r\n        chosen: Math.random() * 2 > 1,\r\n      };\r\n      if (data.chosen) {\r\n        targetKeys.push(data.key);\r\n      }\r\n      mockData.push(data);\r\n    }\r\n    this.setState({ mockData, targetKeys });\r\n  }\r\n  handleChange = (targetKeys) => {\r\n    this.setState({ targetKeys });\r\n  }\r\n  renderFooter = () => {\r\n    return (\r\n      <Button\r\n        size=\"sm\"\r\n        style={{ float: 'right', margin: 5 }}\r\n        onClick={this.getMock}\r\n      >\r\n        reload\r\n      </Button>\r\n    );\r\n  }\r\n  render() {\r\n    return (\r\n      <Transfer\r\n        dataSource={this.state.mockData}\r\n        showSearch\r\n        listStyle={{\r\n          width: 250,\r\n          height: 300,\r\n        }}\r\n        targetKeys={this.state.targetKeys}\r\n        onChange={this.handleChange}\r\n        render={item => `${item.title}-${item.description}`}\r\n        footer={this.renderFooter}\r\n      />\r\n    );\r\n  }\r\n}\r\n\r\n\r\n","desc":" "}]


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
