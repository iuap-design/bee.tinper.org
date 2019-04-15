import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Drawer from 'bee-drawer';
import Clipboard from 'bee-clipboard'; 



var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var Demo4 = require("./demolist/Demo4");var Demo5 = require("./demolist/Demo5");var Demo6 = require("./demolist/Demo6");var DemoArray = [{"example":<Demo1 />,"title":" 默认标签","code":"/**\n*\n* @title 默认标签\n* @description 默认提供两种形式的标签，主要用于信息标注。\n*\n*/\nimport React, { Component } from 'react';\nimport { Tag } from 'tinper-bee';\nclass Demo1 extends Component {\n    render () { \n        return (\n            <div className=\"demoPadding\">\n                <Tag colors=\"dark\">dark</Tag>\n                <Tag colors=\"light\" bordered>light</Tag>\n            </div>\n        )\n    }\n}\n\n","desc":" 默认提供两种形式的标签，主要用于信息标注。","scss_code":".demoPadding{\r\n  tag{\r\n    margin: auto 5px;\r\n  }\r\n  .divider{\r\n    margin: 6px 0;\r\n    height: 1px;\r\n    overflow: hidden;\r\n    background-color: #fff;\r\n  }\r\n  input::-webkit-input-placeholder {\r\n    width: 83px;\r\n    height: 20px;\r\n    color: #909090;\r\n    font-size: 12px;\r\n  }\r\n}"},{"example":<Demo2 />,"title":" 语意色标签","code":"/**\r\n*\r\n* @title 语意色标签\r\n* @description 表示提示信息的标签\r\n* \r\n*/\r\nimport React, { Component } from 'react';\r\nimport { Tag } from 'tinper-bee';\r\nclass Demo2 extends Component {\r\n    render () { \r\n        return (\r\n            <div className=\"demoPadding\">\r\n                <Tag colors=\"success\">success</Tag>\r\n                <Tag colors=\"warning\">warning</Tag>\r\n                <Tag colors=\"danger\">danger</Tag>\r\n                <Tag colors=\"info\">info</Tag>\r\n             </div>\r\n        )\r\n    }\r\n}\r\n\r\n","desc":" 表示提示信息的标签"},{"example":<Demo3 />,"title":" disable标签","code":"/**\r\n*\r\n* @title disable标签\r\n* @description 禁用的标签，不可以进行编辑。\r\n*\r\n*/\r\nimport React, { Component } from 'react';\r\nimport { Tag } from 'tinper-bee';\r\nclass Demo3 extends Component {\r\n    render () { \r\n        return (\r\n            <div className=\"demoPadding\">\r\n                <Tag disabled>disabled</Tag> \r\n            </div>\r\n        )\r\n    }\r\n}\r\n\r\n","desc":" 禁用的标签，不可以进行编辑。"},{"example":<Demo4 />,"title":" 可删除标签","code":"/**\r\n*\r\n* @title 可删除标签\r\n* @description 用户可以手动删除的标签\r\n*\r\n*/\r\nimport React, { Component } from 'react';\r\nimport ReactDOM from 'react-dom';\r\nimport { Tag, FormControl } from 'tinper-bee';\r\n\n\r\nclass Demo4 extends React.Component {\r\n    constructor(props){\r\n      super(props)\r\n      this.state = {\r\n        tags: ['员工编号', '员工姓名', '员工性别','所属部门']\r\n      };\r\n    }\r\n  \r\n    handleClose = (removedTag) => {\r\n      const tags = this.state.tags.filter(tag => tag !== removedTag);\r\n      this.setState({ tags });\r\n    }\r\n  \r\n    forMap = (tag) => {\r\n      const tagElem = (\r\n        <Tag visible={true} deleted \r\n          onClose={(e) => {\r\n            e.preventDefault();\r\n            this.handleClose(tag);\r\n          }}\r\n        >\r\n          {tag}\r\n        </Tag>\r\n      );\r\n      return (\r\n        <span key={tag}>\r\n          {tagElem}\r\n        </span>\r\n      );\r\n    }\r\n\r\n    addTag=()=>{\r\n      let value = ReactDOM.findDOMNode(this.refs.addTag).value;\r\n      if(!value) return;\r\n      let tags = this.state.tags;\r\n      if(tags.indexOf(value)==-1){\r\n        tags.push(value);\r\n        this.setState({\r\n          tags\r\n        })\r\n        ReactDOM.findDOMNode(this.refs.addTag).value='';\r\n      }else{\r\n        console.log('此tag已经存在')\r\n      }\r\n    }\r\n    blur=()=>{\r\n      this.addTag()\r\n    }\r\n    keyDown=(e)=>{\r\n      if(e.keyCode==13){\r\n        this.addTag()\r\n      }\r\n    }\r\n\r\n    render() {\r\n      const { tags } = this.state;\r\n      const tagChild = tags.map(this.forMap);\r\n      \r\n      return (\r\n         <div className=\"demoPadding\">\r\n            <div>\r\n              {tagChild}\r\n            </div>\r\n            <div className=\"divider\"></div>\r\n            <div>\r\n             <FormControl  maxlength=\"8\"  ref=\"addTag\"  onKeyDown={this.keyDown}\r\n             onBlur={this.blur}\r\n                style={{width:83,height:20}} placeholder=\"添加标签\"/>\r\n            </div>\r\n         </div>\r\n      );\r\n    }\r\n  }\r\n","desc":" 用户可以手动删除的标签"},{"example":<Demo5 />,"title":" 可选标签","code":"/**\r\n*\r\n* @title 可选标签\r\n* @description 可以表示选中和未选中两种状态的标签\r\n*\r\n*/\r\nimport React, { Component } from 'react';\r\nimport { Tag } from 'tinper-bee';\r\nclass Demo5 extends Component {\r\n    render () { \r\n        return (\r\n            <div className=\"demoPadding\">\r\n                <Tag select={true}>部门</Tag>\r\n                <Tag select={true}>职级</Tag>\r\n                <Tag select={true}>年份</Tag>\r\n                <Tag select={true}>月份</Tag> \r\n            </div>\r\n        )\r\n    }\r\n}\r\n\r\n","desc":" 可以表示选中和未选中两种状态的标签"},{"example":<Demo6 />,"title":"  多彩标签","code":"/**\r\n *\r\n * @title  多彩标签\r\n * @description 包含多种预设色彩的标签样式，可以在不同场景使用，\r\n * 通过`colors`属性控制标签的颜色\r\n */\r\n\r\nimport React, { Component } from 'react';\r\nimport { Tag } from 'tinper-bee';\r\n\r\n class Demo6 extends Component {\r\n\r\n    render () {\r\n        return (\r\n            <div className=\"demoPadding\">\r\n                <div>\r\n                    <Tag colors=\"success\">success</Tag>\r\n                    <Tag colors=\"warning\">warning</Tag>\r\n                    <Tag colors=\"danger\">danger</Tag>\r\n                    <Tag colors=\"info\">info</Tag>\r\n                </div>  \r\n                <div className=\"divider\"></div>\r\n                <div>\r\n                    <Tag bordered colors=\"success\">success</Tag>\r\n                    <Tag bordered colors=\"warning\">warning</Tag>\r\n                    <Tag bordered colors=\"danger\">danger</Tag>\r\n                    <Tag bordered colors=\"info\">info</Tag>\r\n                </div>       \r\n            </div>\r\n        )\r\n    }\r\n}\r\n\r\n","desc":" 包含多种预设色彩的标签样式，可以在不同场景使用，"}]


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
