import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Button from 'bee-button';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';


const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var Demo4 = require("./demolist/Demo4");var Demo5 = require("./demolist/Demo5");var DemoArray = [{"example":<Demo1 />,"title":" 基础下拉菜单","code":"/**\n *\n * @title 基础下拉菜单\n * @description 下拉菜单提供click，hover和focus事件触发。\n *\n */\n\nimport React, { Component } from 'react';\nimport { Dropdown, Icon, Menu, Button } from 'tinper-bee';\n\nconst { Item } = Menu;\n\n function onSelect({ key }) {\n   console.log(`${key} selected`);\n\n }\n\n function onVisibleChange(visible) {\n   console.log(visible);\n }\n\n class Demo1 extends Component {\n\n    render () {\n\n        const menu1 = (\n              <Menu\n                onSelect={onSelect}>\n                <Item key=\"1\">借款合同</Item>\n                <Item key=\"2\">抵/质押合同</Item>\n                <Item key=\"3\">担保合同</Item>\n                <Item key=\"4\">联保合同</Item>\n                <Item key=\"5\">合同审批</Item>\n                <Item key=\"6\">抵/质押合同跟踪</Item>\n              </Menu>\n          );\n          const menu2 = (\n                <Menu\n                  onSelect={onSelect}>\n                      <Item key=\"1\"><Icon type='uf-listsearch' />借款合同</Item>\n                      <Item key=\"2\"><Icon type='uf-listsearch' />抵/质押合同</Item>\n                      <Item key=\"3\"><Icon type='uf-listsearch' />担保合同</Item>\n                      <Item key=\"4\"><Icon type='uf-listsearch' />联保合同</Item>\n                      <Item key=\"5\"><Icon type='uf-seal' />合同审批</Item>\n                      <Item key=\"6\"><Icon type='uf-bullseye' />抵/质押合同跟踪</Item>\n                </Menu>\n            );\n        return (\n            <div className=\"demoPadding\">\n                <Dropdown\n                    trigger={['click']}\n                    overlay={menu1}\n                    animation=\"slide-up\"\n                    onVisibleChange={onVisibleChange}>\n                    <Button colors='primary'>点击显示</Button>\n                </Dropdown>\n                <Dropdown\n                    trigger={['hover']}\n                    overlay={menu2}\n                    animation=\"slide-up\"\n                    onVisibleChange={onVisibleChange}>\n                    <Button colors='primary'>鼠标滑过显示</Button>\n                </Dropdown>\n            </div>\n        )\n    }\n}\n\n","desc":" 下拉菜单提供click，hover和focus事件触发。"},{"example":<Demo2 />,"title":" 不同样子的下拉菜单","code":"/**\n *\n * @title 不同样子的下拉菜单\n * @description 通过不同的子组件搭配，组成不同形式的菜单\n *\n */\n\nimport React, { Component } from 'react';\nimport { Dropdown, Menu, Button } from 'tinper-bee';\n\nconst { Item,Divider, SubMenu, ItemGroup } = Menu;\n\n\n\n function onSelect({ key }) {\n   console.log(`${key} selected`);\n\n }\n\n function onVisibleChange(visible) {\n   console.log(visible);\n }\n\n const menu1 = (\n     <Menu\n       multiple\n       onSelect={onSelect}>\n       <Item key=\"1\">借款合同</Item>\n       <Item key=\"2\">抵/质押合同</Item>\n       <Item key=\"3\">担保合同</Item>\n       <Item key=\"4\">联保合同</Item>\n       <Divider />\n       <Item key=\"5\">合同审批</Item>\n       <Item key=\"6\">抵/质押合同跟踪</Item>\n     </Menu>\n );\n\n const menu2 = (\n     <Menu\n       multiple\n       onSelect={onSelect}>\n       <ItemGroup title=\"合同类别\">\n           <Item key=\"1\">借款合同</Item>\n           <Item key=\"2\">抵/质押合同</Item>\n           <Item key=\"3\">担保合同</Item>\n           <Item key=\"4\">联保合同</Item>\n        </ItemGroup>\n        <ItemGroup title=\"合同操作\">\n            <Item key=\"5\">合同审批</Item>\n            <Item key=\"6\">抵/质押合同跟踪</Item>\n        </ItemGroup>\n     </Menu>\n );\n const menu3 = (\n     <Menu\n       vertical\n       onSelect={onSelect}>\n       <SubMenu key=\"sub1\" title=\"合同类别\">\n            <Item key=\"1\">借款合同</Item>\n            <Item key=\"2\">抵/质押合同</Item>\n            <Item key=\"3\">担保合同</Item>\n            <Item key=\"4\">联保合同</Item>\n\t\t</SubMenu>\n\t\t<SubMenu key=\"sub2\" title=\"合同操作\">\n            <Item key=\"5\">抵/质押合同跟踪</Item>\n\t\t    <SubMenu key=\"sub3\" title=\"合同审批\">\n                <Item key=\"6\">待审批合同</Item>\n                <Item key=\"7\">已审批合同</Item>\n\t\t\t</SubMenu>\n\t\t</SubMenu>\n     </Menu>\n );\nclass Demo2 extends Component {\n    render () {\n        return (\n            <div className=\"demoPadding\">\n\n                 <Dropdown\n                   trigger={['click']}\n                   overlay={menu1}\n                   animation=\"slide-up\"\n                   onVisibleChange={onVisibleChange}\n                 >\n                   <Button colors='primary'>带有分割线的下拉</Button>\n                 </Dropdown>\n\n                 <Dropdown\n                   trigger={['click']}\n                   overlay={menu2}\n                   animation=\"slide-up\"\n                   onVisibleChange={onVisibleChange}\n                 >\n                   <Button colors='primary'>带有小标题的下拉</Button>\n                 </Dropdown>\n                 <Dropdown\n                   trigger={['click']}\n                   overlay={menu3}\n                   animation=\"slide-up\"\n                   onVisibleChange={onVisibleChange}\n                 >\n                   <Button colors='primary' style={{ width: 150 }}>多级下拉</Button>\n                 </Dropdown>\n             </div>\n        )\n    }\n}\n\n","desc":" 通过不同的子组件搭配，组成不同形式的菜单"},{"example":<Demo3 />,"title":" 控制显示隐藏的下拉菜单","code":"/**\n *\n * @title 控制显示隐藏的下拉菜单\n * @description 通过设置Dropdown组件`visible`props，可以外部控制睇下啦菜单的显示隐藏。\n *\n */\n\nimport React, { Component } from 'react';\nimport { Dropdown, Menu, Button } from 'tinper-bee';\n\nconst { Item } = Menu;\n\n\nfunction onVisibleChange(visible) {\n    console.log(visible);\n}\n\nclass Demo3 extends Component {\n    state = {\n        visible: false\n    }\n    handleSelect = () => {\n        this.setState({\n            visible: false\n        })\n    }\n\n    handleShow = () => {\n        this.setState({\n            visible: true\n        })\n    }\n\n    render () {\n\n        const menu1 = (\n            <Menu\n                onSelect={this.handleSelect}>\n                <Item key=\"1\">借款合同</Item>\n                <Item key=\"2\">抵/质押合同</Item>\n                <Item key=\"3\">担保合同</Item>\n                <Item key=\"4\">联保合同</Item>\n                <Item key=\"5\">合同审批</Item>\n                <Item key=\"6\">抵/质押合同跟踪</Item>\n            </Menu>\n        );\n\n        return (\n            <div className=\"demoPadding\">\n                <Dropdown\n                    trigger={['click']}\n                    overlay={menu1}\n                    animation=\"slide-up\"\n                    visible={ this.state.visible }\n                    onVisibleChange={onVisibleChange}\n                >\n                    <Button\n                        onClick={this.handleShow}\n                        colors='primary'>\n                        受控制的下拉\n                    </Button>\n                </Dropdown>\n\n            </div>\n        )\n    }\n}\n\n\n","desc":" 通过设置Dropdown组件`visible`props，可以外部控制睇下啦菜单的显示隐藏。"},{"example":<Demo4 />,"title":" 基础下拉菜单","code":"/**\n *\n * @title 基础下拉菜单\n * @description 如何获取选中对象自定义对象和数据\n *\n */\n\nimport React, { Component } from 'react';\nimport { Dropdown, Icon, Menu, Button } from 'tinper-bee';\n\nconst { Item } = Menu;\n  \n const dataList = [\n     {\"key\":\"1\",value:\"借款合同\",id:\"a\"},\n     {\"key\":\"2\",value:\"抵/质押合同\",id:\"v\"},\n     {\"key\":\"3\",value:\"担保合同\",id:\"c\"},\n     {\"key\":\"4\",value:\"联保合同\",id:\"d\"},\n ]\n\nfunction onVisibleChange(visible) {\n    console.log(visible);\n}\n\n class Demo4 extends Component {\n \n    /**\n     * 获取当前选中行的item对象。\n     * @param {*} value \n     */\n    onSelect({key,item}){ \n      console.log(`${key} selected`); //获取key\n      let currentObject = item.props.data; //获取选中对象的数据\n      console.log(currentObject); \n    }\n \n    render () {\n        const menu1 = (\n            <Menu onSelect={this.onSelect} >{\n                dataList.map(da=><Item key={da.key} data={da} >{da.value}</Item> )}\n            </Menu>)\n\n        return (\n            <div className=\"demoPadding\">\n                <Dropdown\n                    trigger={['click']} \n                    overlay={menu1}\n                    animation=\"slide-up\"\n                    onVisibleChange={onVisibleChange}>\n                    <Button colors='primary'>点击显示</Button>\n                  </Dropdown> \n            </div>\n        )\n    }\n}\n\n","desc":" 如何获取选中对象自定义对象和数据"},{"example":<Demo5 />,"title":" 使用键盘操作示例","code":"/**\n *\n * @title 使用键盘操作示例\n * @description \n *\n */\n\nimport React, { Component } from 'react';\nimport ReactDOM from 'react-dom';\nimport { Dropdown, Icon, Menu, Button } from 'tinper-bee';\n\nconst { Item } = Menu;\n\n\n\n class Demo5 extends Component {\n\n    onSelect({ key }) {\n        console.log(`${key} selected`);\n    }\n    onVisibleChange=(visible)=> {\n        console.log(visible);\n         if(visible){\n             window.setTimeout(()=>{\n                ReactDOM.findDOMNode(this.refs.menurefs).focus();\n             })\n         }\n      }\n\n    render () {\n\n        const menu1 = (\n            <Menu ref='menurefs'\n                onSelect={this.onSelect}>\n                <Item key=\"1\">借款合同</Item>\n                <Item key=\"2\">抵/质押合同</Item>\n                <Item key=\"3\">担保合同</Item>\n                <Item key=\"4\">联保合同</Item>\n                <Item key=\"5\">合同审批</Item>\n                <Item key=\"6\">抵/质押合同跟踪</Item>\n              </Menu>\n          );\n        return (\n            <div className=\"demoPadding\">\n                <Dropdown\n                    trigger={['click']}\n                    overlay={menu1}\n                    animation=\"slide-up\"\n                    onVisibleChange={this.onVisibleChange}>\n                    <Button colors='primary'>点击显示</Button>\n                </Dropdown>\n            </div>\n        )\n    }\n}\n\n","desc":" "}]


class Demo extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({ open: !this.state.open })
    }

    render () {
        const { title, example, code, desc, scss_code  } = this.props;
        let caret = this.state.open ? CARETUP : CARET;
        let text = this.state.open ? "隐藏代码" : "查看代码";

        const header = (
            <div>
                {example}
                <Button style={{"marginTop": "10px"}} shape="block" onClick={ this.handleClick }>
                    { caret }
                    { text }
                </Button>
            </div>
        );
        return (
            <Col md={12} >
                <h3>{ title }</h3>
                <p>{ desc }</p>
                <Panel collapsible headerContent expanded={ this.state.open } colors='bordered' header={ header } footerStyle = {{padding: 0}}>
                    <pre><code className="hljs javascript">{ code }</code></pre>
                    { !!scss_code ? <pre><code className="hljs css">{ scss_code }</code></pre> : null }
                </Panel>
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