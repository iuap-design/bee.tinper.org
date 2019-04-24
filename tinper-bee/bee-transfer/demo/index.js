import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Drawer from 'bee-drawer';
import Clipboard from 'bee-clipboard'; 
import Button from '../src';



var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var Demo4 = require("./demolist/Demo4");var Demo5 = require("./demolist/Demo5");var DemoArray = [{"example":<Demo1 />,"title":" 常用可选transfer","code":"/**\r\n*\r\n* @title 常用可选transfer\r\n* @description targetKeys需要通过ES6的扩展运算符进行赋值，实现对象的深拷贝\r\n*\r\n*/\r\n\r\n\r\nimport React, { Component } from 'react';\r\nimport { Transfer } from 'tinper-bee';\r\n\r\nconst mockData = [];\r\nfor (let i = 0; i < 20; i++) {\r\n  mockData.push({\r\n    key: i.toString(),\r\n    title: `content${i + 1}`,\r\n    description: `description of content${i + 1}`,\r\n    disabled: i % 3 < 1,\r\n\r\n  });\r\n}\r\n\r\nconst targetKeys = mockData\r\n        .filter(item => +item.key % 3 > 1)\r\n        .map(item => item.key);\r\n\r\nclass Demo1 extends React.Component {\r\n  state = {\r\n    targetKeys,\r\n    selectedKeys: [],\r\n    showModal: false,\r\n    modalSize: ''\r\n  }\r\n\r\n  handleChange = (nextTargetKeys, direction, moveKeys) => {\r\n    this.setState({ targetKeys: nextTargetKeys });\r\n\r\n    console.log('targetKeys: ', nextTargetKeys);\r\n    console.log('direction: ', direction);\r\n    console.log('moveKeys: ', moveKeys);\r\n  }\r\n\r\n  handleSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {\r\n    this.setState({ selectedKeys: [...sourceSelectedKeys, ...targetSelectedKeys] });\r\n\r\n    console.log('sourceSelectedKeys: ', sourceSelectedKeys);\r\n    console.log('targetSelectedKeys: ', targetSelectedKeys);\r\n  }\r\n\r\n  handleScroll = (direction, e) => {\r\n    console.log('direction:', direction);\r\n    console.log('target:', e.target);\r\n  }\r\n\r\n\r\n  render() {\r\n    const state = this.state;\r\n    const targetKeys = [...this.state.targetKeys];\r\n    return (\r\n       <Transfer\r\n          dataSource={mockData}\r\n          titles={['Source', 'Target']}\r\n          targetKeys={targetKeys}\r\n          selectedKeys={state.selectedKeys}\r\n          onChange={this.handleChange}\r\n          onSelectChange={this.handleSelectChange}\r\n          onScroll={this.handleScroll}\r\n          render={item => item.title}\r\n        />\r\n    );\r\n  }\r\n}\r\n\r\n\r\n\r\n","desc":" targetKeys需要通过ES6的扩展运算符进行赋值，实现对象的深拷贝"},{"example":<Demo2 />,"title":" 带搜索框的tranfer","code":"/**\r\n*\r\n* @title 带搜索框的tranfer\r\n* @description\r\n*\r\n*/\r\n\r\nimport React, { Component } from 'react';\r\nimport { Transfer } from 'tinper-bee';\r\n\r\n\r\nclass Demo2 extends React.Component {\r\n  state = {\r\n    mockData: [],\r\n    targetKeys: [],\r\n  }\r\n  componentDidMount() {\r\n    this.getMock();\r\n  }\r\n  getMock = () => {\r\n    const targetKeys = [];\r\n    const mockData = [];\r\n    for (let i = 0; i < 20; i++) {\r\n      const data = {\r\n        key: i.toString(),\r\n        title: `content${i + 1}`,\r\n        description: `description of content${i + 1}`,\r\n        chosen: Math.random() * 2 > 1,\r\n      };\r\n      if (data.chosen) {\r\n        targetKeys.push(data.key);\r\n      }\r\n      mockData.push(data);\r\n    }\r\n    this.setState({ mockData, targetKeys });\r\n  }\r\n  filterOption = (inputValue, option) => {\r\n    return option.title.indexOf(inputValue) > -1;\r\n  }\r\n  handleChange = (targetKeys) => {\r\n    this.setState({ targetKeys });\r\n  }\r\n  render() {\r\n    return (\r\n      <Transfer\r\n        dataSource={this.state.mockData}\r\n        showSearch\r\n        filterOption={this.filterOption}\r\n        targetKeys={this.state.targetKeys}\r\n        onChange={this.handleChange}\r\n        render={item => item.title}\r\n      />\r\n    );\r\n  }\r\n}\r\n\r\n\r\n\r\n","desc":""},{"example":<Demo3 />,"title":" 底部自定义的transfer","code":"/**\r\n*\r\n* @title 底部自定义的transfer\r\n* @description \r\n*\r\n*/\r\n\r\nimport React, { Component } from 'react';\r\n\nimport { Transfer, Button } from 'tinper-bee';\r\n\r\nclass Demo3 extends React.Component {\r\n  state = {\r\n    mockData: [],\r\n    targetKeys: [],\r\n  }\r\n  componentDidMount() {\r\n    this.getMock();\r\n  }\r\n  getMock = () => {\r\n    const targetKeys = [];\r\n    const mockData = [];\r\n    for (let i = 0; i < 20; i++) {\r\n      const data = {\r\n        key: i.toString(),\r\n        title: `content${i + 1}`,\r\n        description: `description of content${i + 1}`,\r\n        chosen: Math.random() * 2 > 1,\r\n      };\r\n      if (data.chosen) {\r\n        targetKeys.push(data.key);\r\n      }\r\n      mockData.push(data);\r\n    }\r\n    this.setState({ mockData, targetKeys });\r\n  }\r\n  handleChange = (targetKeys) => {\r\n    this.setState({ targetKeys });\r\n  }\r\n  renderFooter = () => {\r\n    return (\r\n      <Button\r\n        size=\"sm\"\r\n        style={{ float: 'right', margin: 5 }}\r\n        onClick={this.getMock}\r\n      >\r\n        reload\r\n      </Button>\r\n    );\r\n  }\r\n  render() {\r\n    return (\r\n      <Transfer\r\n        dataSource={this.state.mockData}\r\n        showSearch\r\n        listStyle={{\r\n          width: 250,\r\n          height: 300,\r\n        }}\r\n        targetKeys={this.state.targetKeys}\r\n        onChange={this.handleChange}\r\n        render={item => `${item.title}-${item.description}`}\r\n        footer={this.renderFooter}\r\n      />\r\n    );\r\n  }\r\n}\r\n\r\n\r\n","desc":" "},{"example":<Demo4 />,"title":" 隐藏复选框","code":"/**\r\n*\r\n* @title 隐藏复选框\r\n* @description 通过`showCheckbox`参数控制复选框显示和隐藏\r\n*\r\n*/\r\n\r\n\r\nimport React, { Component } from 'react';\r\nimport { Transfer } from 'tinper-bee';\r\n\r\nconst mockData = [];\r\nfor (let i = 0; i < 20; i++) {\r\n  mockData.push({\r\n    key: i.toString(),\r\n    title: `content${i + 1}`,\r\n    description: `description of content${i + 1}`,\r\n    disabled: i % 3 < 1,\r\n\r\n  });\r\n}\r\n\r\nconst targetKeys = mockData\r\n        .filter(item => +item.key % 3 > 1)\r\n        .map(item => item.key);\r\n\r\nclass Demo4 extends React.Component {\r\n  state = {\r\n    targetKeys,\r\n    selectedKeys: [],\r\n    showModal: false,\r\n    modalSize: ''\r\n  }\r\n\r\n  handleChange = (nextTargetKeys, direction, moveKeys) => {\r\n    this.setState({ targetKeys: nextTargetKeys });\r\n\r\n    console.log('targetKeys: ', targetKeys);\r\n    console.log('direction: ', direction);\r\n    console.log('moveKeys: ', moveKeys);\r\n  }\r\n\r\n  handleSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {\r\n    this.setState({ selectedKeys: [...sourceSelectedKeys, ...targetSelectedKeys] });\r\n\r\n    console.log('sourceSelectedKeys: ', sourceSelectedKeys);\r\n    console.log('targetSelectedKeys: ', targetSelectedKeys);\r\n  }\r\n\r\n  handleScroll = (direction, e) => {\r\n    console.log('direction:', direction);\r\n    console.log('target:', e.target);\r\n  }\r\n\r\n\r\n  render() {\r\n    const state = this.state;\r\n\r\n    return (\r\n       <Transfer\r\n          dataSource={mockData}\r\n          showCheckbox={false}\r\n          titles={['Source', 'Target']}\r\n          targetKeys={state.targetKeys}\r\n          selectedKeys={state.selectedKeys}\r\n          onChange={this.handleChange}\r\n          onSelectChange={this.handleSelectChange}\r\n          onScroll={this.handleScroll}\r\n          render={item => item.title}\r\n        />\r\n    );\r\n  }\r\n}\r\n\r\n\r\n\r\n","desc":" 通过`showCheckbox`参数控制复选框显示和隐藏"},{"example":<Demo5 />,"title":" 拖拽穿梭","code":"/**\n*\n* @title 拖拽穿梭\n* @description 通过`draggable`参数设置是否可以通过拖拽进行穿梭和排序\n*\n*/\n\n\nimport React, { Component } from 'react';\nimport { Transfer } from 'tinper-bee';\n\nconst mockData = [];\nfor (let i = 0; i < 20; i++) {\n  mockData.push({\n    key: i.toString(),\n    title: `content${i + 1}`,\n    description: `description of content${i + 1}`,\n    disabled: i % 3 < 1,\n\n  });\n}\n\nconst targetKeys = mockData\n        .filter(item => +item.key % 3 > 1)\n        .map(item => item.key);\n\nclass Demo5 extends React.Component {\n  state = {\n    targetKeys,\n    selectedKeys: [],\n    showModal: false,\n    modalSize: ''\n  }\n\n  handleChange = (nextTargetKeys, direction, moveKeys) => {\n    this.setState({ targetKeys: nextTargetKeys });\n\n    console.log('targetKeys: ', nextTargetKeys);\n    console.log('direction: ', direction);\n    console.log('moveKeys: ', moveKeys);\n  }\n\n  handleSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {\n    this.setState({ selectedKeys: [...sourceSelectedKeys, ...targetSelectedKeys] });\n\n    console.log('sourceSelectedKeys: ', sourceSelectedKeys);\n    console.log('targetSelectedKeys: ', targetSelectedKeys);\n  }\n\n  handleScroll = (direction, e) => {\n    console.log('direction:', direction);\n    console.log('target:', e.target);\n  }\n\n\n  render() {\n    const state = this.state;\n    // targetKeys需要通过数组的扩展运算符进行赋值\n    const targetKeys = [...this.state.targetKeys];\n    return (\n       <Transfer\n          draggable={true}\n          showCheckbox={false}\n          dataSource={mockData}\n          titles={['Source', 'Target']}\n          targetKeys={targetKeys}\n          selectedKeys={state.selectedKeys}\n          onChange={this.handleChange}\n          onSelectChange={this.handleSelectChange}\n          onScroll={this.handleScroll}\n          render={item => item.title}\n        />\n    );\n  }\n}\n\n\n\n","desc":" 通过`draggable`参数设置是否可以通过拖拽进行穿梭和排序"}]


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
