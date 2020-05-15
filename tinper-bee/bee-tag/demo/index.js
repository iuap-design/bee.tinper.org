import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Drawer from 'bee-drawer';
import Clipboard from 'bee-clipboard'; 



var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var Demo4 = require("./demolist/Demo4");var Demo5 = require("./demolist/Demo5");var Demo6 = require("./demolist/Demo6");var DemoArray = [{"example":<Demo1 />,"title":" 默认标签","code":"/**\n*\n* @title 默认标签\n* @description 默认提供两种形式的标签，主要用于信息标注。\n*\n*/\nimport React, { Component } from 'react';\nimport { Tag } from 'tinper-bee';\n\nclass Demo1 extends Component {\n    render () { \n        return (\n            <div className=\"demoPadding\">\n                <Tag colors=\"dark\">dark</Tag>\n                <Tag colors=\"light\" bordered>light</Tag>\n            </div>\n        )\n    }\n}\n\nexport default Demo1;","desc":" 默认提供两种形式的标签，主要用于信息标注。","scss_code":".demoPadding{\n  .u-tag{\n    margin: auto 5px;\n    padding-top:0;\n  }\n  .divider{\n    margin: 6px 0;\n    height: 1px;\n    overflow: hidden;\n    background-color: #fff;\n  }\n  input::-webkit-input-placeholder {\n    width: 83px;\n    height: 20px;\n    color: #909090;\n    font-size: 12px;\n  }\n}"},{"example":<Demo2 />,"title":" 语意色标签","code":"/**\n*\n* @title 语意色标签\n* @description 表示提示信息的标签。\n* \n*/\nimport React, { Component } from 'react';\nimport { Tag } from 'tinper-bee';\n\nclass Demo2 extends Component {\n    render () { \n        return (\n            <div className=\"demoPadding\">\n                <Tag colors=\"success\">success</Tag>\n                <Tag colors=\"warning\">warning</Tag>\n                <Tag colors=\"danger\">danger</Tag>\n                <Tag colors=\"info\">info</Tag>\n             </div>\n        )\n    }\n}\n\nexport default Demo2;","desc":" 表示提示信息的标签。"},{"example":<Demo3 />,"title":" disable标签","code":"/**\n*\n* @title disable标签\n* @description 禁用的标签，不可以进行编辑。\n*\n*/\nimport React, { Component } from 'react';\nimport { Tag } from 'tinper-bee';\n\nclass Demo3 extends Component {\n    render () { \n        return (\n            <div className=\"demoPadding\">\n                <Tag disabled>disabled</Tag> \n            </div>\n        )\n    }\n}\n\nexport default Demo3;","desc":" 禁用的标签，不可以进行编辑。"},{"example":<Demo4 />,"title":" 可删除标签","code":"/**\n*\n* @title 可删除标签\n* @description 用户可以手动删除的标签。\n*\n*/\nimport React, { Component } from 'react';\nimport { FormControl, Tag } from 'tinper-bee';\nimport ReactDOM from 'react-dom';\n\n\nclass Demo4 extends React.Component {\n    constructor(props){\n      super(props)\n      this.state = {\n        tags: ['员工编号', '员工姓名', '员工性别','所属部门']\n      };\n    }\n  \n    handleClose = (removedTag) => {\n      const tags = this.state.tags.filter(tag => tag !== removedTag);\n      this.setState({ tags });\n    }\n  \n    forMap = (tag) => {\n      const tagElem = (\n        <Tag visible={true} deleted \n          onClose={(e) => {\n            e.preventDefault();\n            this.handleClose(tag);\n          }}\n        >\n          {tag}\n        </Tag>\n      );\n      return (\n        <span key={tag}>\n          {tagElem}\n        </span>\n      );\n    }\n\n    addTag=()=>{\n      let value = ReactDOM.findDOMNode(this.refs.addTag).value;\n      if(!value) return;\n      let tags = this.state.tags;\n      if(tags.indexOf(value)==-1){\n        tags.push(value);\n        this.setState({\n          tags\n        })\n        ReactDOM.findDOMNode(this.refs.addTag).value='';\n      }else{\n        console.log('此tag已经存在')\n      }\n    }\n    blur=()=>{\n      this.addTag()\n    }\n    keyDown=(e)=>{\n      if(e.keyCode==13){\n        this.addTag()\n      }\n    }\n\n    render() {\n      const { tags } = this.state;\n      const tagChild = tags.map(this.forMap);\n      \n      return (\n         <div className=\"demoPadding\">\n            <div>\n              {tagChild}\n            </div>\n            <div className=\"divider\"></div>\n            <div>\n             <FormControl  maxlength=\"8\"  ref=\"addTag\"  onKeyDown={this.keyDown}\n             onBlur={this.blur}\n                style={{width:83,height:20}} placeholder=\"添加标签\"/>\n            </div>\n         </div>\n      );\n    }\n  }\nexport default Demo4;","desc":" 用户可以手动删除的标签。"},{"example":<Demo5 />,"title":" 可选标签","code":"/**\n*\n* @title 可选标签\n* @description 可以表示选中和未选中两种状态的标签。\n*\n*/\nimport React, { Component } from 'react';\nimport { Tag } from 'tinper-bee';\n\nclass Demo5 extends Component {\n    render () { \n        return (\n            <div className=\"demoPadding\">\n                <Tag select={true}>部门</Tag>\n                <Tag select={true}>职级</Tag>\n                <Tag select={true}>年份</Tag>\n                <Tag select={true}>月份</Tag> \n            </div>\n        )\n    }\n}\n\nexport default Demo5;","desc":" 可以表示选中和未选中两种状态的标签。"},{"example":<Demo6 />,"title":"  多彩标签","code":"/**\n *\n * @title  多彩标签\n * @description 包含多种预设色彩的标签样式，可以在不同场景使用，通过`colors`属性控制标签的颜色。\n */\n\nimport React, { Component } from 'react';\nimport { Tag } from 'tinper-bee';\n\n\n class Demo6 extends Component {\n\n    render () {\n        return (\n            <div className=\"demoPadding\">\n                <div>\n                    <Tag colors=\"success\">success</Tag>\n                    <Tag colors=\"warning\">warning</Tag>\n                    <Tag colors=\"danger\">danger</Tag>\n                    <Tag colors=\"info\">info</Tag>\n                </div>  \n                <div className=\"divider\"></div>\n                <div>\n                    <Tag bordered colors=\"success\">success</Tag>\n                    <Tag bordered colors=\"warning\">warning</Tag>\n                    <Tag bordered colors=\"danger\">danger</Tag>\n                    <Tag bordered colors=\"info\">info</Tag>\n                </div>       \n            </div>\n        )\n    }\n}\n\nexport default Demo6;","desc":" 包含多种预设色彩的标签样式，可以在不同场景使用，通过`colors`属性控制标签的颜色。"}]


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
