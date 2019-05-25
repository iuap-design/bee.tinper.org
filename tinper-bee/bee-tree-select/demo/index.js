import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Drawer from 'bee-drawer';
import Clipboard from 'bee-clipboard'; 



var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var Demo4 = require("./demolist/Demo4");var Demo5 = require("./demolist/Demo5");var DemoArray = [{"example":<Demo1 />,"title":" treeSelect基本使用","code":"/**\n*\n* @title treeSelect基本使用\n* @description treeSelect基本使用—单选\n*\n*/\nimport React, { Component } from 'react';\nimport {  } from 'tinper-bee';\nimport TreeSelect,{TreeNode} from '../../src';\nclass Demo1 extends Component {\n    state = {\n    value: undefined,\n  }\n\n  onChange = (value) => {\n    this.setState({ value });\n  }\n  onSelect = (value, node, extra) =>{\n    console.log('--value--'+value);\n  }\n\n  render () {\n    return (\n      <TreeSelect\n      showSearch\n      style={{ width: 300 }}\n      value={this.state.value}\n      dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}\n      placeholder=\"请选择\"\n      allowClear\n      treeDefaultExpandAll\n      onChange={this.onChange}\n      onSelect={this.onSelect}\n      >\n        <TreeNode value=\"parent 1\" title=\"parent 1\" key=\"0-1\">\n          <TreeNode value=\"parent 1-0\" title=\"parent 1-0\" key=\"0-1-1\">\n            <TreeNode value=\"leaf1\" title=\"my leaf\" key=\"random\" />\n            <TreeNode value=\"leaf2\" title=\"your leaf\" key=\"random1\" />\n          </TreeNode>\n          <TreeNode value=\"parent 1-1\" title=\"parent 1-1\" key=\"random2\">\n            <TreeNode value=\"sss\" title=\"sss\" key=\"random3\" />\n          </TreeNode>\n        </TreeNode>\n      </TreeSelect>\n    )\n  }\n}\n","desc":" treeSelect基本使用—单选"},{"example":<Demo2 />,"title":" treeSelect 使用JSON数据","code":"/**\n*\n* @title treeSelect 使用JSON数据\n* @description 使用 treeData 把 JSON 数据直接生成树结构。\n*\n*/\nimport React, { Component } from 'react';\nimport {  } from 'tinper-bee';\nimport TreeSelect,{TreeNode} from '../../src';\n\nconst treeData = [{\n  title: 'Node1',\n  value: '0-0',\n  key: '0-0',\n  children: [{\n    title: 'Child Node1',\n    value: '0-0-1',\n    key: '0-0-1',\n  }, {\n    title: 'Child Node2',\n    value: '0-0-2',\n    key: '0-0-2',\n  }],\n}, {\n  title: 'Node2',\n  value: '0-1',\n  key: '0-1',\n}];\n\n\nclass Demo2 extends Component {\n    state = {\n    value: undefined,\n  }\n  onChange = (value) => {\n    this.setState({ value });\n  }\n  render () {\n    return (\n\n              <TreeSelect\n                  style={{ width: 300 }}\n                  value={this.state.value}\n                  dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}\n                  treeData={treeData}\n                  placeholder=\"Please select\"\n                  treeDefaultExpandAll\n                  onChange={this.onChange}\n              />\n\n    )\n  }\n}\n","desc":" 使用 treeData 把 JSON 数据直接生成树结构。"},{"example":<Demo3 />,"title":" treeSelect 多选","code":"/**\n*\n* @title treeSelect 多选\n* @description 添加multiple属性，下拉树选项可以多选\n*\n*/\nimport React, { Component } from 'react';\nimport {  } from 'tinper-bee';\nimport TreeSelect,{TreeNode} from '../../src';\n\nconst treeData = [{\n  title: 'Node1',\n  value: '0-0',\n  key: '0-0',\n  children: [{\n    title: 'Child Node1',\n    value: '0-0-1',\n    key: '0-0-1',\n  }, {\n    title: 'Child Node2',\n    value: '0-0-2',\n    key: '0-0-2',\n  }],\n}, {\n  title: 'Node2',\n  value: '0-1',\n  key: '0-1',\n}];\n\n\nclass Demo3 extends Component {\n    state = {\n    value: undefined,\n  }\n  onChange = (value) => {\n    this.setState({ value });\n  }\n  render () {\n    return (\n\n        <TreeSelect\n            style={{ width: 300 }}\n            value={this.state.value}\n            dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}\n            treeData={treeData}\n            multiple\n            treeDefaultExpandAll\n            onChange={this.onChange}\n        />\n\n    )\n  }\n}\n","desc":" 添加multiple属性，下拉树选项可以多选"},{"example":<Demo4 />,"title":" treeSelect 勾选框树","code":"/**\n*\n* @title treeSelect 勾选框树\n* @description 使用勾选框实现多选功能。\n*\n*/\nimport React, { Component } from 'react';\nimport {  } from 'tinper-bee';\nimport TreeSelect,{TreeNode} from '../../src';\n\nconst SHOW_PARENT = TreeSelect.SHOW_PARENT;\n\nconst treeData = [{\n  title: 'Node1',\n  value: '0-0',\n  key: '0-0',\n  children: [{\n    title: 'Child Node1',\n    value: '0-0-1',\n    key: '0-0-1',\n  }, {\n    title: 'Child Node2',\n    value: '0-0-2',\n    key: '0-0-2',\n  }],\n}, {\n  title: 'Node2',\n  value: '0-1',\n  key: '0-1',\n}];\n\n\nclass Demo4 extends Component {\n    state = {\n    value: undefined,\n  }\n  onChange = (value) => {\n    this.setState({ value });\n  }\n  render () {\n    return (\n\n              <TreeSelect\n                style={{ width: 300 }}\n                value={this.state.value}\n                dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}\n                treeData={treeData}\n                treeCheckable= {true}\n                showCheckedStrategy={SHOW_PARENT}\n                treeDefaultExpandAll\n                onChange={this.onChange}\n            />\n\n    )\n  }\n}\n","desc":" 使用勾选框实现多选功能。"},{"example":<Demo5 />,"title":" treeSelect 动态加载树","code":"/**\n*\n* @title treeSelect 动态加载树\n* @description 点击父节点动态加载树\n*\n*/\nimport React, { Component } from 'react';\nimport {  } from 'tinper-bee';\nimport TreeSelect,{TreeNode} from '../../src';\nimport { getNewTreeData, generateTreeNodes } from './util';\n\n\nclass Demo4 extends Component {\n    static propTypes = {};\n\n    state = {\n      treeData: [\n        { title: 'pNode 01', value: '0-0', key: '0-0' },\n        { title: 'pNode 02', value: '0-1', key: '0-1' },\n        { title: 'pNode 03', value: '0-2', key: '0-2', isLeaf: true },\n      ],\n      // value: '0-0',\n      value: { value: '0-0-0-value', title: '0-0-0-title' },\n    };\n  \n    onChange = (value) => {\n      console.log(value);\n      this.setState({\n        value,\n      });\n    };\n  \n    onLoadData = (treeNode) => {\n      console.log(treeNode);\n      return new Promise((resolve) => {\n        setTimeout(() => {\n          const treeData = [...this.state.treeData];\n          getNewTreeData(treeData, treeNode.props.eventKey, generateTreeNodes(treeNode), 2);\n          this.setState({ treeData });\n          resolve();\n        }, 500);\n      });\n    };\n  render () {\n    return (\n\n        <TreeSelect\n        style={{ width: 300 }}\n        treeData={this.state.treeData}\n        labelInValue\n        value={this.state.value}\n        onChange={this.onChange}\n        loadData={this.onLoadData}\n      />\n\n    )\n  }\n}\n","desc":" 点击父节点动态加载树"}]


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
