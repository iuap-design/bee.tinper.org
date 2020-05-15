import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Drawer from 'bee-drawer';
import Clipboard from 'bee-clipboard'; 
import Button from '../src';



var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var Demo4 = require("./demolist/Demo4");var Demo5 = require("./demolist/Demo5");var Demo6 = require("./demolist/Demo6");var DemoArray = [{"example":<Demo1 />,"title":" 基础下拉菜单","code":"/**\n *\n * @title 基础下拉菜单\n * @description 下拉菜单提供click，hover和focus事件触发。\n *\n */\n\nimport React, { Component } from 'react';\nimport { Icon, Menu, Button, Dropdown } from 'tinper-bee';\n\n\nconst { Item } = Menu;\n\n function onSelect({ key }) {\n   console.log(`${key} selected`);\n\n }\n\n function onVisibleChange(visible) {\n   console.log(visible);\n }\n\n class Demo1 extends Component {\n\n    render () {\n\n        const menu1 = (\n              <Menu\n                onSelect={onSelect}>\n                <Item key=\"1\">借款合同</Item>\n                <Item key=\"2\">抵/质押合同</Item>\n                <Item key=\"3\">担保合同</Item>\n                <Item key=\"4\">联保合同</Item>\n                <Item key=\"5\">合同审批</Item>\n                <Item key=\"6\">抵/质押合同跟踪</Item>\n              </Menu>\n          );\n          const menu2 = (\n                <Menu\n                  onSelect={onSelect}>\n                      <Item key=\"1\"><Icon type='uf-listsearch' />借款合同</Item>\n                      <Item key=\"2\"><Icon type='uf-listsearch' />抵/质押合同</Item>\n                      <Item key=\"3\"><Icon type='uf-listsearch' />担保合同</Item>\n                      <Item key=\"4\"><Icon type='uf-listsearch' />联保合同</Item>\n                      <Item key=\"5\"><Icon type='uf-seal' />合同审批</Item>\n                      <Item key=\"6\"><Icon type='uf-bullseye' />抵/质押合同跟踪</Item>\n                </Menu>\n            );\n        return (\n            <div className=\"demoPadding\">\n                <Dropdown\n                    trigger={['click']}\n                    overlay={menu1}\n                    animation=\"slide-up\"\n                    onVisibleChange={onVisibleChange}>\n                    <Button colors='primary'>点击显示</Button>\n                </Dropdown>\n                <Dropdown \n                    trigger={['hover']}\n                    overlay={menu2}\n                    animation=\"slide-up\"\n                    onVisibleChange={onVisibleChange}>\n                    <Button colors='primary'>鼠标滑过显示</Button>\n                </Dropdown>\n            </div>\n        )\n    }\n}\n\nexport default Demo1;","desc":" 下拉菜单提供click，hover和focus事件触发。"},{"example":<Demo2 />,"title":" 不同样子的下拉菜单","code":"/**\n *\n * @title 不同样子的下拉菜单\n * @description 通过不同的子组件搭配，组成不同形式的菜单\n *\n */\n\nimport React, { Component } from 'react';\nimport { Menu, Button, Dropdown } from 'tinper-bee';\n\n\nconst { Item,Divider, SubMenu, ItemGroup } = Menu;\n\n\n\n function onSelect({ key }) {\n   console.log(`${key} selected`);\n\n }\n\n function onVisibleChange(visible) {\n   console.log(visible);\n }\n\n const menu1 = (\n     <Menu\n       multiple\n       onSelect={onSelect}>\n       <Item key=\"1\">借款合同</Item>\n       <Item key=\"2\">抵/质押合同</Item>\n       <Item key=\"3\">担保合同</Item>\n       <Item key=\"4\">联保合同</Item>\n       <Divider />\n       <Item key=\"5\">合同审批</Item>\n       <Item key=\"6\">抵/质押合同跟踪</Item>\n     </Menu>\n );\n\n const menu2 = (\n     <Menu\n       multiple\n       onSelect={onSelect}>\n       <ItemGroup title=\"合同类别\">\n           <Item key=\"1\">借款合同</Item>\n           <Item key=\"2\">抵/质押合同</Item>\n           <Item key=\"3\">担保合同</Item>\n           <Item key=\"4\">联保合同</Item>\n        </ItemGroup>\n        <ItemGroup title=\"合同操作\">\n            <Item key=\"5\">合同审批</Item>\n            <Item key=\"6\">抵/质押合同跟踪</Item>\n        </ItemGroup>\n     </Menu>\n );\n const menu3 = (\n     <Menu\n       vertical\n       onSelect={onSelect}>\n       <SubMenu key=\"sub1\" title=\"合同类别\">\n            <Item key=\"1\">借款合同</Item>\n            <Item key=\"2\">抵/质押合同</Item>\n            <Item key=\"3\">担保合同</Item>\n            <Item key=\"4\">联保合同</Item>\n\t\t</SubMenu>\n\t\t<SubMenu key=\"sub2\" title=\"合同操作\">\n            <Item key=\"5\">抵/质押合同跟踪</Item>\n\t\t    <SubMenu key=\"sub3\" title=\"合同审批\">\n                <Item key=\"6\">待审批合同</Item>\n                <Item key=\"7\">已审批合同</Item>\n\t\t\t</SubMenu>\n\t\t</SubMenu>\n     </Menu>\n );\nclass Demo2 extends Component {\n    render () {\n        return (\n            <div className=\"demoPadding\">\n\n                 <Dropdown\n                   trigger={['click']}\n                   overlay={menu1}\n                   animation=\"slide-up\"\n                   onVisibleChange={onVisibleChange}\n                 >\n                   <Button colors='primary'>带有分割线的下拉</Button>\n                 </Dropdown>\n\n                 <Dropdown\n                   trigger={['click']}\n                   overlay={menu2}\n                   animation=\"slide-up\"\n                   onVisibleChange={onVisibleChange}\n                 >\n                   <Button colors='primary'>带有小标题的下拉</Button>\n                 </Dropdown>\n                 <Dropdown\n                   trigger={['click']}\n                   overlay={menu3}\n                   animation=\"slide-up\"\n                   onVisibleChange={onVisibleChange}\n                 >\n                   <Button colors='primary' style={{ width: 150 }}>多级下拉</Button>\n                 </Dropdown>\n             </div>\n        )\n    }\n}\n\nexport default Demo2;","desc":" 通过不同的子组件搭配，组成不同形式的菜单"},{"example":<Demo3 />,"title":" 控制显示隐藏的下拉菜单","code":"/**\n *\n * @title 控制显示隐藏的下拉菜单\n * @description 通过设置Dropdown组件`visible`props，可以外部控制睇下啦菜单的显示隐藏。\n *\n */\n\nimport React, { Component } from 'react';\nimport { Menu, Button, Dropdown } from 'tinper-bee';\n\n\nconst { Item } = Menu;\n\n\nfunction onVisibleChange(visible) {\n    console.log(visible);\n}\n\nclass Demo3 extends Component {\n    state = {\n        visible: false\n    }\n    handleSelect = () => {\n        this.setState({\n            visible: false\n        })\n    }\n\n    handleShow = () => {\n        this.setState({\n            visible: true\n        })\n    }\n\n    render () {\n\n        const menu1 = (\n            <Menu\n                onSelect={this.handleSelect}>\n                <Item key=\"1\">借款合同</Item>\n                <Item key=\"2\">抵/质押合同</Item>\n                <Item key=\"3\">担保合同</Item>\n                <Item key=\"4\">联保合同</Item>\n                <Item key=\"5\">合同审批</Item>\n                <Item key=\"6\">抵/质押合同跟踪</Item>\n            </Menu>\n        );\n\n        return (\n            <div className=\"demoPadding\">\n                <Dropdown\n                    trigger={['click']}\n                    overlay={menu1}\n                    animation=\"slide-up\"\n                    visible={ this.state.visible }\n                    onVisibleChange={onVisibleChange}\n                >\n                    <Button\n                        onClick={this.handleShow}\n                        colors='primary'>\n                        受控制的下拉\n                    </Button>\n                </Dropdown>\n\n            </div>\n        )\n    }\n}\n\nexport default Demo3;\n","desc":" 通过设置Dropdown组件`visible`props，可以外部控制睇下啦菜单的显示隐藏。"},{"example":<Demo4 />,"title":" 基础下拉菜单","code":"/**\r\n *\r\n * @title 基础下拉菜单\r\n * @description 如何获取选中对象自定义对象和数据\r\n *\r\n */\r\n\r\nimport React, { Component } from 'react';\nimport { Icon, Menu, Button, Dropdown } from 'tinper-bee';\r\n\n\n\n\r\n\r\nconst { Item } = Menu;\r\n  \r\n const dataList = [\r\n     {\"key\":\"1\",value:\"借款合同\",id:\"a\"},\r\n     {\"key\":\"2\",value:\"抵/质押合同\",id:\"v\"},\r\n     {\"key\":\"3\",value:\"担保合同\",id:\"c\"},\r\n     {\"key\":\"4\",value:\"联保合同\",id:\"d\"},\r\n ]\r\n\r\nfunction onVisibleChange(visible) {\r\n    console.log(visible);\r\n}\r\n\r\n class Demo4 extends Component {\r\n \r\n    /**\r\n     * 获取当前选中行的item对象。\r\n     * @param {*} value \r\n     */\r\n    onSelect({key,item}){ \r\n      console.log(`${key} selected`); //获取key\r\n      let currentObject = item.props.data; //获取选中对象的数据\r\n      console.log(currentObject); \r\n    }\r\n \r\n    render () {\r\n        const menu1 = (\r\n            <Menu onSelect={this.onSelect} >{\r\n                dataList.map(da=><Item key={da.key} data={da} >{da.value}</Item> )}\r\n            </Menu>)\r\n\r\n        return (\r\n            <div className=\"demoPadding\">\r\n                <Dropdown\r\n                    trigger={['click']} \r\n                    overlay={menu1}\r\n                    animation=\"slide-up\"\r\n                    onVisibleChange={onVisibleChange}>\r\n                    <Button colors='primary'>点击显示</Button>\r\n                  </Dropdown> \r\n            </div>\r\n        )\r\n    }\r\n}\r\n\r\nexport default Demo4;","desc":" 如何获取选中对象自定义对象和数据"},{"example":<Demo5 />,"title":" 使用键盘操作示例","code":"/**\r\n *\r\n * @title 使用键盘操作示例\r\n * @description \r\n *\r\n */\r\n\r\nimport React, { Component } from 'react';\nimport { Icon, Menu, Button, Dropdown } from 'tinper-bee';\r\nimport ReactDOM from 'react-dom';\r\n\n\n\n\r\n\r\nconst { Item } = Menu;\r\n\r\n\r\n\r\n class Demo5 extends Component {\r\n\r\n    onSelect({ key }) {\r\n        console.log(`${key} selected`);\r\n    }\r\n    onVisibleChange=(visible)=> {\r\n        console.log(visible);\r\n         if(visible){\r\n             window.setTimeout(()=>{\r\n                ReactDOM.findDOMNode(this.refs.menurefs).focus();\r\n             })\r\n         }\r\n      }\r\n\r\n    render () {\r\n\r\n        const menu1 = (\r\n            <Menu ref='menurefs'\r\n                keyboard={true}\r\n                onSelect={this.onSelect}>\r\n                <Item key=\"1\">借款合同</Item>\r\n                <Item key=\"2\">抵/质押合同</Item>\r\n                <Item key=\"3\">担保合同</Item>\r\n                <Item key=\"4\">联保合同</Item>\r\n                <Item key=\"5\">合同审批</Item>\r\n                <Item key=\"6\">抵/质押合同跟踪</Item>\r\n            </Menu>\r\n          );\r\n        return (\r\n            <div className=\"demoPadding\">\r\n                <Dropdown\r\n                    trigger={['click']}\r\n                    overlay={menu1}\r\n                    animation=\"slide-up\"\r\n                    onVisibleChange={this.onVisibleChange}>\r\n                    <Button colors='primary'>点击显示</Button>\r\n                </Dropdown>\r\n            </div>\r\n        )\r\n    }\r\n}\r\n\r\nexport default Demo5;","desc":" "},{"example":<Demo6 />,"title":" 设置延迟显示/隐藏","code":"/**\r\n *\r\n * @title 设置延迟显示/隐藏\r\n * @description 提供三个参数控制延迟时间：delay、delayShow、delayHide。单位：毫秒。如 `delay={800}` 表示延迟时间为 0.8 秒。\r\n *\r\n */\r\n\r\nimport React, { Component } from 'react';\nimport { Menu, Button, Dropdown } from 'tinper-bee';\r\n\n\n\r\n\r\nconst { Item } = Menu;\r\n\r\n function onSelect({ key }) {\r\n   console.log(`${key} selected`);\r\n\r\n }\r\n\r\n function onVisibleChange(visible) {\r\n   console.log(visible);\r\n }\r\n\r\n class Demo1 extends Component {\r\n\r\n    render () {\r\n        const menu = (\r\n              <Menu\r\n                onSelect={onSelect}>\r\n                <Item key=\"1\">借款合同</Item>\r\n                <Item key=\"2\">抵/质押合同</Item>\r\n                <Item key=\"3\">担保合同</Item>\r\n                <Item key=\"4\">联保合同</Item>\r\n                <Item key=\"5\">合同审批</Item>\r\n                <Item key=\"6\">抵/质押合同跟踪</Item>\r\n              </Menu>\r\n          );\r\n        return (\r\n            <div className=\"demoPadding\">\r\n                <Dropdown \r\n                    trigger={['hover']}\r\n                    delayShow={800}\r\n                    overlay={menu}\r\n                    animation=\"slide-up\"\r\n                    onVisibleChange={onVisibleChange}>\r\n                    <Button colors='primary'>鼠标移入0.8秒后显示</Button>\r\n                </Dropdown>\r\n            </div>\r\n        )\r\n    }\r\n}\r\n\r\nexport default Demo1;","desc":" 提供三个参数控制延迟时间：delay、delayShow、delayHide。单位：毫秒。如 `delay={800}` 表示延迟时间为 0.8 秒。"}]


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
