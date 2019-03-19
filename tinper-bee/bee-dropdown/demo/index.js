import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Button from 'bee-button';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';


const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var Demo4 = require("./demolist/Demo4");var Demo5 = require("./demolist/Demo5");var DemoArray = [{"example":<Demo1 />,"title":" 基础下拉菜单","code":"/**\r\n *\r\n * @title 基础下拉菜单\r\n * @description 下拉菜单提供click，hover和focus事件触发。\r\n *\r\n */\r\n\r\nimport React, { Component } from 'react';\r\n\n\n\nimport { Dropdown, Icon, Menu, Button } from 'tinper-bee';\r\n\r\nconst { Item } = Menu;\r\n\r\n function onSelect({ key }) {\r\n   console.log(`${key} selected`);\r\n\r\n }\r\n\r\n function onVisibleChange(visible) {\r\n   console.log(visible);\r\n }\r\n\r\n class Demo1 extends Component {\r\n\r\n    render () {\r\n\r\n        const menu1 = (\r\n              <Menu\r\n                onSelect={onSelect}>\r\n                <Item key=\"1\">借款合同</Item>\r\n                <Item key=\"2\">抵/质押合同</Item>\r\n                <Item key=\"3\">担保合同</Item>\r\n                <Item key=\"4\">联保合同</Item>\r\n                <Item key=\"5\">合同审批</Item>\r\n                <Item key=\"6\">抵/质押合同跟踪</Item>\r\n              </Menu>\r\n          );\r\n          const menu2 = (\r\n                <Menu\r\n                  onSelect={onSelect}>\r\n                      <Item key=\"1\"><Icon type='uf-listsearch' />借款合同</Item>\r\n                      <Item key=\"2\"><Icon type='uf-listsearch' />抵/质押合同</Item>\r\n                      <Item key=\"3\"><Icon type='uf-listsearch' />担保合同</Item>\r\n                      <Item key=\"4\"><Icon type='uf-listsearch' />联保合同</Item>\r\n                      <Item key=\"5\"><Icon type='uf-seal' />合同审批</Item>\r\n                      <Item key=\"6\"><Icon type='uf-bullseye' />抵/质押合同跟踪</Item>\r\n                </Menu>\r\n            );\r\n        return (\r\n            <div className=\"demoPadding\">\r\n                <Dropdown\r\n                    trigger={['click']}\r\n                    overlay={menu1}\r\n                    animation=\"slide-up\"\r\n                    onVisibleChange={onVisibleChange}>\r\n                    <Button colors='primary'>点击显示</Button>\r\n                </Dropdown>\r\n                <Dropdown\r\n                    trigger={['hover']}\r\n                    overlay={menu2}\r\n                    animation=\"slide-up\"\r\n                    onVisibleChange={onVisibleChange}>\r\n                    <Button colors='primary'>鼠标滑过显示</Button>\r\n                </Dropdown>\r\n            </div>\r\n        )\r\n    }\r\n}\r\n\r\n","desc":" 下拉菜单提供click，hover和focus事件触发。"},{"example":<Demo2 />,"title":" 不同样子的下拉菜单","code":"/**\r\n *\r\n * @title 不同样子的下拉菜单\r\n * @description 通过不同的子组件搭配，组成不同形式的菜单\r\n *\r\n */\r\n\r\nimport React, { Component } from 'react';\r\n\n\nimport { Dropdown, Menu, Button } from 'tinper-bee';\r\n\r\nconst { Item,Divider, SubMenu, ItemGroup } = Menu;\r\n\r\n\r\n\r\n function onSelect({ key }) {\r\n   console.log(`${key} selected`);\r\n\r\n }\r\n\r\n function onVisibleChange(visible) {\r\n   console.log(visible);\r\n }\r\n\r\n const menu1 = (\r\n     <Menu\r\n       multiple\r\n       onSelect={onSelect}>\r\n       <Item key=\"1\">借款合同</Item>\r\n       <Item key=\"2\">抵/质押合同</Item>\r\n       <Item key=\"3\">担保合同</Item>\r\n       <Item key=\"4\">联保合同</Item>\r\n       <Divider />\r\n       <Item key=\"5\">合同审批</Item>\r\n       <Item key=\"6\">抵/质押合同跟踪</Item>\r\n     </Menu>\r\n );\r\n\r\n const menu2 = (\r\n     <Menu\r\n       multiple\r\n       onSelect={onSelect}>\r\n       <ItemGroup title=\"合同类别\">\r\n           <Item key=\"1\">借款合同</Item>\r\n           <Item key=\"2\">抵/质押合同</Item>\r\n           <Item key=\"3\">担保合同</Item>\r\n           <Item key=\"4\">联保合同</Item>\r\n        </ItemGroup>\r\n        <ItemGroup title=\"合同操作\">\r\n            <Item key=\"5\">合同审批</Item>\r\n            <Item key=\"6\">抵/质押合同跟踪</Item>\r\n        </ItemGroup>\r\n     </Menu>\r\n );\r\n const menu3 = (\r\n     <Menu\r\n       vertical\r\n       onSelect={onSelect}>\r\n       <SubMenu key=\"sub1\" title=\"合同类别\">\r\n            <Item key=\"1\">借款合同</Item>\r\n            <Item key=\"2\">抵/质押合同</Item>\r\n            <Item key=\"3\">担保合同</Item>\r\n            <Item key=\"4\">联保合同</Item>\r\n\t\t</SubMenu>\r\n\t\t<SubMenu key=\"sub2\" title=\"合同操作\">\r\n            <Item key=\"5\">抵/质押合同跟踪</Item>\r\n\t\t    <SubMenu key=\"sub3\" title=\"合同审批\">\r\n                <Item key=\"6\">待审批合同</Item>\r\n                <Item key=\"7\">已审批合同</Item>\r\n\t\t\t</SubMenu>\r\n\t\t</SubMenu>\r\n     </Menu>\r\n );\r\nclass Demo2 extends Component {\r\n    render () {\r\n        return (\r\n            <div className=\"demoPadding\">\r\n\r\n                 <Dropdown\r\n                   trigger={['click']}\r\n                   overlay={menu1}\r\n                   animation=\"slide-up\"\r\n                   onVisibleChange={onVisibleChange}\r\n                 >\r\n                   <Button colors='primary'>带有分割线的下拉</Button>\r\n                 </Dropdown>\r\n\r\n                 <Dropdown\r\n                   trigger={['click']}\r\n                   overlay={menu2}\r\n                   animation=\"slide-up\"\r\n                   onVisibleChange={onVisibleChange}\r\n                 >\r\n                   <Button colors='primary'>带有小标题的下拉</Button>\r\n                 </Dropdown>\r\n                 <Dropdown\r\n                   trigger={['click']}\r\n                   overlay={menu3}\r\n                   animation=\"slide-up\"\r\n                   onVisibleChange={onVisibleChange}\r\n                 >\r\n                   <Button colors='primary' style={{ width: 150 }}>多级下拉</Button>\r\n                 </Dropdown>\r\n             </div>\r\n        )\r\n    }\r\n}\r\n\r\n","desc":" 通过不同的子组件搭配，组成不同形式的菜单"},{"example":<Demo3 />,"title":" 控制显示隐藏的下拉菜单","code":"/**\r\n *\r\n * @title 控制显示隐藏的下拉菜单\r\n * @description 通过设置Dropdown组件`visible`props，可以外部控制睇下啦菜单的显示隐藏。\r\n *\r\n */\r\n\r\nimport React, { Component } from 'react';\r\n\n\nimport { Dropdown, Menu, Button } from 'tinper-bee';\r\n\r\nconst { Item } = Menu;\r\n\r\n\r\nfunction onVisibleChange(visible) {\r\n    console.log(visible);\r\n}\r\n\r\nclass Demo3 extends Component {\r\n    state = {\r\n        visible: false\r\n    }\r\n    handleSelect = () => {\r\n        this.setState({\r\n            visible: false\r\n        })\r\n    }\r\n\r\n    handleShow = () => {\r\n        this.setState({\r\n            visible: true\r\n        })\r\n    }\r\n\r\n    render () {\r\n\r\n        const menu1 = (\r\n            <Menu\r\n                onSelect={this.handleSelect}>\r\n                <Item key=\"1\">借款合同</Item>\r\n                <Item key=\"2\">抵/质押合同</Item>\r\n                <Item key=\"3\">担保合同</Item>\r\n                <Item key=\"4\">联保合同</Item>\r\n                <Item key=\"5\">合同审批</Item>\r\n                <Item key=\"6\">抵/质押合同跟踪</Item>\r\n            </Menu>\r\n        );\r\n\r\n        return (\r\n            <div className=\"demoPadding\">\r\n                <Dropdown\r\n                    trigger={['click']}\r\n                    overlay={menu1}\r\n                    animation=\"slide-up\"\r\n                    visible={ this.state.visible }\r\n                    onVisibleChange={onVisibleChange}\r\n                >\r\n                    <Button\r\n                        onClick={this.handleShow}\r\n                        colors='primary'>\r\n                        受控制的下拉\r\n                    </Button>\r\n                </Dropdown>\r\n\r\n            </div>\r\n        )\r\n    }\r\n}\r\n\r\n\r\n","desc":" 通过设置Dropdown组件`visible`props，可以外部控制睇下啦菜单的显示隐藏。"},{"example":<Demo4 />,"title":" 基础下拉菜单","code":"/**\r\n *\r\n * @title 基础下拉菜单\r\n * @description 如何获取选中对象自定义对象和数据\r\n *\r\n */\r\n\r\nimport React, { Component } from 'react';\r\n\n\n\nimport { Dropdown, Icon, Menu, Button } from 'tinper-bee';\r\n\r\nconst { Item } = Menu;\r\n  \r\n const dataList = [\r\n     {\"key\":\"1\",value:\"借款合同\",id:\"a\"},\r\n     {\"key\":\"2\",value:\"抵/质押合同\",id:\"v\"},\r\n     {\"key\":\"3\",value:\"担保合同\",id:\"c\"},\r\n     {\"key\":\"4\",value:\"联保合同\",id:\"d\"},\r\n ]\r\n\r\nfunction onVisibleChange(visible) {\r\n    console.log(visible);\r\n}\r\n\r\n class Demo4 extends Component {\r\n \r\n    /**\r\n     * 获取当前选中行的item对象。\r\n     * @param {*} value \r\n     */\r\n    onSelect({key,item}){ \r\n      console.log(`${key} selected`); //获取key\r\n      let currentObject = item.props.data; //获取选中对象的数据\r\n      console.log(currentObject); \r\n    }\r\n \r\n    render () {\r\n        const menu1 = (\r\n            <Menu onSelect={this.onSelect} >{\r\n                dataList.map(da=><Item key={da.key} data={da} >{da.value}</Item> )}\r\n            </Menu>)\r\n\r\n        return (\r\n            <div className=\"demoPadding\">\r\n                <Dropdown\r\n                    trigger={['click']} \r\n                    overlay={menu1}\r\n                    animation=\"slide-up\"\r\n                    onVisibleChange={onVisibleChange}>\r\n                    <Button colors='primary'>点击显示</Button>\r\n                  </Dropdown> \r\n            </div>\r\n        )\r\n    }\r\n}\r\n\r\n","desc":" 如何获取选中对象自定义对象和数据"},{"example":<Demo5 />,"title":" 使用键盘操作示例","code":"/**\r\n *\r\n * @title 使用键盘操作示例\r\n * @description \r\n *\r\n */\r\n\r\nimport React, { Component } from 'react';\r\nimport ReactDOM from 'react-dom';\r\n\n\n\nimport { Dropdown, Icon, Menu, Button } from 'tinper-bee';\r\n\r\nconst { Item } = Menu;\r\n\r\n\r\n\r\n class Demo5 extends Component {\r\n\r\n    onSelect({ key }) {\r\n        console.log(`${key} selected`);\r\n    }\r\n    onVisibleChange=(visible)=> {\r\n        console.log(visible);\r\n         if(visible){\r\n             window.setTimeout(()=>{\r\n                ReactDOM.findDOMNode(this.refs.menurefs).focus();\r\n             })\r\n         }\r\n      }\r\n\r\n    render () {\r\n\r\n        const menu1 = (\r\n            <Menu ref='menurefs'\r\n                onSelect={this.onSelect}>\r\n                <Item key=\"1\">借款合同</Item>\r\n                <Item key=\"2\">抵/质押合同</Item>\r\n                <Item key=\"3\">担保合同</Item>\r\n                <Item key=\"4\">联保合同</Item>\r\n                <Item key=\"5\">合同审批</Item>\r\n                <Item key=\"6\">抵/质押合同跟踪</Item>\r\n              </Menu>\r\n          );\r\n        return (\r\n            <div className=\"demoPadding\">\r\n                <Dropdown\r\n                    trigger={['click']}\r\n                    overlay={menu1}\r\n                    animation=\"slide-up\"\r\n                    onVisibleChange={this.onVisibleChange}>\r\n                    <Button colors='primary'>点击显示</Button>\r\n                </Dropdown>\r\n            </div>\r\n        )\r\n    }\r\n}\r\n\r\n","desc":" "}]


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
            <Col md={12} id={title.trim()} >
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