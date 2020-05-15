import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Drawer from 'bee-drawer';
import Clipboard from 'bee-clipboard'; 



var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var Demo4 = require("./demolist/Demo4");var Demo5 = require("./demolist/Demo5");var DemoArray = [{"example":<Demo1 />,"title":" treeSelect基本使用","code":"/**\r\n*\r\n* @title treeSelect基本使用\r\n* @description treeSelect基本使用—单选\r\n*\r\n*/\r\nimport React, { Component } from 'react';\nimport {  } from 'tinper-bee';\r\nimport TreeSelect,{TreeNode} from '../../src';\r\nclass Demo1 extends Component {\r\n    state = {\r\n    value: undefined,\r\n  }\r\n\r\n  onChange = (value) => {\r\n    this.setState({ value });\r\n  }\r\n  onSelect = (value, node, extra) =>{\r\n    console.log('--value--'+value);\r\n  }\r\n\r\n  render () {\r\n    return (\r\n      <TreeSelect\r\n      showSearch\r\n      style={{ width: 300 }}\r\n      value={this.state.value}\r\n      dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}\r\n      placeholder=\"请选择\"\r\n      allowClear\r\n      treeDefaultExpandAll\r\n      onChange={this.onChange}\r\n      onSelect={this.onSelect}\r\n      >\r\n        <TreeNode value=\"parent 1\" title=\"parent 1\" key=\"0-1\">\r\n          <TreeNode value=\"parent 1-0\" title=\"parent 1-0\" key=\"0-1-1\">\r\n            <TreeNode value=\"leaf1\" title=\"my leaf\" key=\"random\" />\r\n            <TreeNode value=\"leaf2\" title=\"your leaf\" key=\"random1\" />\r\n          </TreeNode>\r\n          <TreeNode value=\"parent 1-1\" title=\"parent 1-1\" key=\"random2\">\r\n            <TreeNode value=\"sss\" title=\"sss\" key=\"random3\" />\r\n          </TreeNode>\r\n        </TreeNode>\r\n      </TreeSelect>\r\n    )\r\n  }\r\n}\r\n","desc":" treeSelect基本使用—单选"},{"example":<Demo2 />,"title":" treeSelect 使用JSON数据","code":"/**\r\n*\r\n* @title treeSelect 使用JSON数据\r\n* @description 使用 treeData 把 JSON 数据直接生成树结构。\r\n*\r\n*/\r\nimport React, { Component } from 'react';\nimport {  } from 'tinper-bee';\r\nimport TreeSelect,{TreeNode} from '../../src';\r\n\r\nconst treeData = [{\r\n  title: 'Node1',\r\n  value: '0-0',\r\n  key: '0-0',\r\n  children: [{\r\n    title: 'Child Node1',\r\n    value: '0-0-1',\r\n    key: '0-0-1',\r\n  }, {\r\n    title: 'Child Node2',\r\n    value: '0-0-2',\r\n    key: '0-0-2',\r\n  }],\r\n}, {\r\n  title: 'Node2',\r\n  value: '0-1',\r\n  key: '0-1',\r\n}];\r\n\r\n\r\nclass Demo2 extends Component {\r\n    state = {\r\n    value: undefined,\r\n  }\r\n  onChange = (value) => {\r\n    this.setState({ value });\r\n  }\r\n  render () {\r\n    return (\r\n\r\n              <TreeSelect\r\n                  style={{ width: 300 }}\r\n                  value={this.state.value}\r\n                  dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}\r\n                  treeData={treeData}\r\n                  placeholder=\"Please select\"\r\n                  treeDefaultExpandAll\r\n                  onChange={this.onChange}\r\n              />\r\n\r\n    )\r\n  }\r\n}\r\n","desc":" 使用 treeData 把 JSON 数据直接生成树结构。"},{"example":<Demo3 />,"title":" treeSelect 多选","code":"/**\r\n*\r\n* @title treeSelect 多选\r\n* @description 添加multiple属性，下拉树选项可以多选\r\n*\r\n*/\r\nimport React, { Component } from 'react';\nimport {  } from 'tinper-bee';\r\nimport TreeSelect,{TreeNode} from '../../src';\r\n\r\nconst treeData = [{\r\n  title: '0-0',\r\n  value: '0-0',\r\n  key: '0-0',\r\n  children: [{\r\n    title: '0-0-1',\r\n    value: '0-0-1',\r\n    key: '0-0-1',\r\n  }, {\r\n    title: '0-0-2',\r\n    value: '0-0-2',\r\n    key: '0-0-2',\r\n  }],\r\n}, {\r\n  title: '0-1',\r\n  value: '0-1',\r\n  key: '0-1',\r\n}];\r\n\r\n\r\nclass Demo3 extends Component {\r\n    state = {\r\n    value: undefined,\r\n  }\r\n  onChange = (value) => {\r\n    this.setState({ value });\r\n  }\r\n  render () {\r\n    return (\r\n\r\n        <TreeSelect\r\n            style={{ width: 300 }}\r\n            value={this.state.value}\r\n            dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}\r\n            treeData={treeData}\r\n            multiple\r\n            treeDefaultExpandAll\r\n            onChange={this.onChange}\r\n            showSearch\r\n        />\r\n\r\n    )\r\n  }\r\n}\r\n\r\n","desc":" 添加multiple属性，下拉树选项可以多选"},{"example":<Demo4 />,"title":" treeSelect 勾选框树","code":"/**\r\n*\r\n* @title treeSelect 勾选框树\r\n* @description 使用勾选框实现多选功能。\r\n*\r\n*/\r\nimport React, { Component } from 'react';\nimport {  } from 'tinper-bee';\r\nimport TreeSelect,{TreeNode} from '../../src';\r\n\r\nconst SHOW_PARENT = TreeSelect.SHOW_PARENT;\r\n\r\nconst treeData = [{\r\n  title: '0-0',\r\n  value: '0-0',\r\n  key: '0-0',\r\n  children: [{\r\n    title: '0-0-1',\r\n    value: '0-0-1',\r\n    key: '0-0-1',\r\n  }, {\r\n    title: '0-0-2',\r\n    value: '0-0-2',\r\n    key: '0-0-2',\r\n  }],\r\n}, {\r\n  title: '0-1',\r\n  value: '0-1',\r\n  key: '0-1',\r\n}];\r\n\r\n\r\nclass Demo4 extends Component {\r\n    state = {\r\n    value: undefined,\r\n  }\r\n  onChange = (value) => {\r\n    this.setState({ value });\r\n  }\r\n  render () {\r\n    return (\r\n\r\n              <TreeSelect\r\n                style={{ width: 300 }}\r\n                value={this.state.value}\r\n                dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}\r\n                treeData={treeData}\r\n                treeCheckable= {true}\r\n                showCheckedStrategy={SHOW_PARENT}\r\n                treeDefaultExpandAll\r\n                onChange={this.onChange}\r\n                showSearch\r\n            />\r\n\r\n    )\r\n  }\r\n}\r\n\r\n","desc":" 使用勾选框实现多选功能。"},{"example":<Demo5 />,"title":" treeSelect 动态加载树","code":"/**\r\n*\r\n* @title treeSelect 动态加载树\r\n* @description 点击父节点动态加载树\r\n*\r\n*/\r\nimport React, { Component } from 'react';\nimport {  } from 'tinper-bee';\r\nimport TreeSelect,{TreeNode} from '../../src';\r\nimport { getNewTreeData, generateTreeNodes } from './util';\r\n\r\n\r\nclass Demo4 extends Component {\r\n    static propTypes = {};\r\n\r\n    state = {\r\n      treeData: [\r\n        { title: 'pNode 01', value: '0-0', key: '0-0' },\r\n        { title: 'pNode 02', value: '0-1', key: '0-1' },\r\n        { title: 'pNode 03', value: '0-2', key: '0-2', isLeaf: true },\r\n      ],\r\n      // value: '0-0',\r\n      value: { value: '0-0-0-value', title: '0-0-0-title' },\r\n    };\r\n  \r\n    onChange = (value) => {\r\n      console.log(value);\r\n      this.setState({\r\n        value,\r\n      });\r\n    };\r\n  \r\n    onLoadData = (treeNode) => {\r\n      console.log(treeNode);\r\n      return new Promise((resolve) => {\r\n        setTimeout(() => {\r\n          const treeData = [...this.state.treeData];\r\n          getNewTreeData(treeData, treeNode.props.eventKey, generateTreeNodes(treeNode), 2);\r\n          this.setState({ treeData });\r\n          resolve();\r\n        }, 500);\r\n      });\r\n    };\r\n  render () {\r\n    return (\r\n\r\n        <TreeSelect\r\n        style={{ width: 300 }}\r\n        treeData={this.state.treeData}\r\n        labelInValue\r\n        value={this.state.value}\r\n        onChange={this.onChange}\r\n        loadData={this.onLoadData}\r\n      />\r\n\r\n    )\r\n  }\r\n}\r\n","desc":" 点击父节点动态加载树"}]


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
