import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Drawer from 'bee-drawer';
import Clipboard from 'bee-clipboard'; 
import Button from '../src';



var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var Demo4 = require("./demolist/Demo4");var Demo5 = require("./demolist/Demo5");var Demo6 = require("./demolist/Demo6");var Demo7 = require("./demolist/Demo7");var Demo8 = require("./demolist/Demo8");var DemoArray = [{"example":<Demo1 />,"title":" 基础Tab","code":"/**\n *  @title 基础Tab\n *  @description 通过Tabs和TabPane配合完成Tab功能\n *\n */\n\nimport React, {Component} from 'react';\nimport { Tabs } from 'tinper-bee';\n\n\nconst {TabPane} = Tabs;\n\nclass Demo1 extends Component {\n    state = {\n        activeKey: \"1\"\n    }\n\n    onChange = (activeKey) => {\n        console.log(`onChange ${activeKey} o-^-o`);\n        this.setState({\n            activeKey,\n        });\n    }\n\n    render() {\n        return (\n            <Tabs\n                defaultActiveKey=\"1\"\n                onChange={this.onChange}\n                className=\"demo1-tabs\"\n            >\n                <TabPane tab='Tab 1' key=\"1\">Content of Tab Pane 1</TabPane>\n                <TabPane tab='Tab 2' key=\"2\">Content of Tab Pane 2</TabPane>\n                <TabPane tab='Tab 3' key=\"3\">Content of Tab Pane 3</TabPane>\n            </Tabs>\n        )\n    }\n}\n\nexport default Demo1;","desc":" 通过Tabs和TabPane配合完成Tab功能","scss_code":".demo1-tabs{\n  margin-bottom: 40px;\n}"},{"example":<Demo2 />,"title":" 禁用","code":"/**\n *  @title 禁用\n *  @description 禁用某一项。\n *\n */\n\nimport React, {Component} from 'react';\nimport { Tabs } from 'tinper-bee';\n\n\nconst {TabPane} = Tabs;\n\nclass Demo2 extends Component {\n    render() {\n        return (\n            <Tabs defaultActiveKey=\"1\">\n                <TabPane tab='Tab 1' key=\"1\">Content of Tab Pane 1</TabPane>\n                <TabPane tab='Tab 2' disabled key=\"2\">Content of Tab Pane 2</TabPane>\n                <TabPane tab='Tab 3' key=\"3\">Content of Tab Pane 3</TabPane>\n            </Tabs>\n        )\n    }\n}\n\nexport default Demo2;","desc":" 禁用某一项。"},{"example":<Demo3 />,"title":" 图标","code":"/**\n *  @title 图标\n *  @description 有图标的标签。\n *\n */\n\nimport React, {Component} from 'react';\nimport { Icon, Tabs } from 'tinper-bee';\n\n\nconst {TabPane} = Tabs;\n\nclass Demo3 extends Component {\n    render() {\n        return (\n            <Tabs defaultActiveKey=\"1\">\n                <TabPane tab={<span><Icon type=\"uf-home\"></Icon>主页</span>} key=\"1\">Content of Tab Pane 1</TabPane>\n                <TabPane tab={<span><Icon type=\"uf-settings\"></Icon>设置</span>} key=\"2\">Content of Tab Pane 2</TabPane>\n                <TabPane tab={<span><Icon type=\"uf-folder-o\"></Icon>文件</span>} key=\"3\">Content of Tab Pane 3</TabPane>\n            </Tabs>\n        )\n    }\n}\n\nexport default Demo3;","desc":" 有图标的标签。"},{"example":<Demo4 />,"title":" 位置","code":"/**\n *\n * @title 位置\n * @description tab页签头的位置，可以在['top','bottom','left','right']中选择。当页签宽度超过容器宽度时，可以左右、上下滑动，容纳更多标签。\n *\n */\n\nimport React, { Component } from 'react';\nimport { Select, Tabs } from 'tinper-bee';\n\n\nconst {TabPane} = Tabs;\nconst {Option} = Select;\n\nclass Demo4 extends Component {\n    constructor(props) {\n        super(props);\n        this.state = ({\n            activeKey: \"1\",\n            start: 0,\n            tabBarPosition: \"left\"\n        })\n    }\n    onChange = (activeKey) => {\n        console.log(`onChange ${activeKey}o-^-o`);\n        this.setState({\n            activeKey,\n        });\n    }\n\n    onTabClick = (key) => {\n        console.log(`onTabClick ${key}o^o`);\n        if (key === this.state.activeKey) {\n            this.setState({\n                activeKey: '',\n            });\n        }\n    }\n\n    changeTabPosition = (tabBarPosition) => {\n        this.setState({ tabBarPosition });\n    }\n\n    render() {\n\n        return (\n            <div className=\"demo4\">\n                <div style={{ marginBottom: 16 }}>\n                    Tab position：\n                    <Select\n                        value={this.state.tabBarPosition}\n                        onChange={this.changeTabPosition}\n                    >\n                        <Option value=\"top\">top</Option>\n                        <Option value=\"bottom\">bottom</Option>\n                        <Option value=\"left\">left</Option>\n                        <Option value=\"right\">right</Option>\n                    </Select>\n                </div>\n                <Tabs\n                    activeKey={this.state.activeKey}\n                    tabBarPosition={this.state.tabBarPosition}\n                    onChange={this.onChange}\n                    defaultActiveKey=\"1\"\n                    className=\"demo4-tabs\"\n                    onTabClick={this.onTabClick}\n                >\n                    <TabPane tab='Tab 1' key=\"1\">Content of Tab Pane 1</TabPane>\n                    <TabPane tab='Tab 2' key=\"2\">Content of Tab Pane 2</TabPane>\n                    <TabPane tab='Tab 3' key=\"3\">Content of Tab Pane 3</TabPane>\n                    <TabPane tab='Tab 4' key=\"4\">Content of Tab Pane 4</TabPane>\n                    <TabPane tab='Tab 5' key=\"5\">Content of Tab Pane 5</TabPane>\n                    <TabPane tab='Tab 6' key=\"6\">Content of Tab Pane 6</TabPane>\n                    <TabPane tab='Tab 7' key=\"7\">Content of Tab Pane 7</TabPane>\n                    <TabPane tab='Tab 8' key=\"8\">Content of Tab Pane 8</TabPane>\n                </Tabs>\n            </div>\n        )\n    }\n}\n\nexport default Demo4;","desc":" tab页签头的位置，可以在['top','bottom','left','right']中选择。当页签宽度超过容器宽度时，可以左右、上下滑动，容纳更多标签。","scss_code":".demo4{\n  width: 600px;\n  margin: 20px;\n  .demo4-tabs{\n    &.u-tabs-left, &.u-tabs-right{\n      height: 300px;\n    }\n  }\n  .u-select{\n    width: 100px;\n  }\n}"},{"example":<Demo5 />,"title":" 顶部border","code":"/**\n *\n * @title 顶部border\n * @description `tabBarStyle`参数设置不同的tabBar样式，取值可以是'primary'、'simple'或'upborder'。\n *\n */\n\nimport React, { Component } from 'react';\nimport { Tabs } from 'tinper-bee';\n\n\nconst {TabPane} = Tabs;\n\nclass Demo5 extends Component {\n    render() {\n\n        return (\n            <div className=\"Demo5\">\n                <Tabs\n                    className=\"Demo5-tabs\"\n                    defaultActiveKey=\"1\"\n                    tabBarStyle=\"upborder\"\n                >\n                    <TabPane tab='Tab 1' key=\"1\">Content of Tab Pane 1</TabPane>\n                    <TabPane tab='Tab 2' key=\"2\">Content of Tab Pane 2</TabPane>\n                    <TabPane tab='Tab 3' key=\"3\">Content of Tab Pane 3</TabPane>\n                    <TabPane tab='Tab 4' key=\"4\">Content of Tab Pane 4</TabPane>\n                    <TabPane tab='Tab 5' key=\"5\">Content of Tab Pane 5</TabPane>\n                </Tabs>\n            </div>\n        )\n    }\n}\n\nexport default Demo5;","desc":" `tabBarStyle`参数设置不同的tabBar样式，取值可以是'primary'、'simple'或'upborder'。"},{"example":<Demo6 />,"title":" 附加操作","code":"/**\r\n *\r\n * @title 附加操作\r\n * @description `extraContent`参数可以在页签右边自定义附加操作。\r\n *\r\n */\r\n\r\nimport React, { Component } from 'react';\nimport { Button, Tabs } from 'tinper-bee';\r\n\n\r\n\r\nconst {TabPane} = Tabs;\r\nclass Demo6 extends Component {\r\n\r\n    add = () => {\r\n        alert(\"在这里添加操作 ^_^\")\r\n    }\r\n\r\n    render() {\r\n        return (\r\n            <div className=\"Demo6\">\r\n                <Tabs\r\n                    className=\"Demo6-tabs\"\r\n                    defaultActiveKey=\"1\"\r\n                    tabBarStyle=\"upborder\"\r\n                    extraContent={\r\n                        <Button className=\"add-button\" size=\"sm\" colors=\"primary\" onClick={this.add}>一些操作</Button>\r\n                    }\r\n                >\r\n                    <TabPane tab='Tab 1' key=\"1\">Content of Tab Pane 1</TabPane>\r\n                    <TabPane tab='Tab 2' key=\"2\">Content of Tab Pane 2</TabPane>\r\n                    <TabPane tab='Tab 3' key=\"3\">Content of Tab Pane 3</TabPane>\r\n                </Tabs>\r\n            </div>\r\n        )\r\n    }\r\n}\r\n\r\nexport default Demo6;","desc":" `extraContent`参数可以在页签右边自定义附加操作。","scss_code":".Demo6-tabs{\n  .add-button{\n    margin: 3px;\n  }\n}"},{"example":<Demo7 />,"title":" 查询形式tab","code":"/**\n *  @title 查询形式tab\n *  @description SearchTabs = Tabs.SearchTabs\n *\n */\n\nimport React, {Component} from 'react';\nimport { Button, Tabs } from 'tinper-bee';\n\n\nconst SearchTabs = Tabs.SearchTabs;\n\nclass Demo1 extends Component {\n    constructor(props){\n        super(props);\n        this.state={\n            tabList:[\n                {\n                    name:\"待提交(9)\",value:'1'\n                },\n                {\n                    name:\"审批中(12)\",value:'2'\n                },\n                {\n                    name:\"执行中(5)\",value:'3'\n                },\n                {\n                    name:\"已完成(123)\",value:'4'\n                },\n                {\n                    name:\"已删除(0)\",value:'5'\n                },\n                {\n                    name:\"全部(149)\",value:'6'\n                },\n            ],\n            selectValue:'3'\n        }\n    }\n    getData=()=>{\n        this.setState({\n            selectValue:'1',\n            tabList:[\n                {\n                    name:\"已删除(0)\",value:'1'\n                },\n                {\n                    name:\"全部(70)\",value:'2'\n                },\n                {\n                    name:\"待提交(3)\",value:'3'\n                },\n                {\n                    name:\"审批中(67)\",value:'4'\n                },\n            ]\n        })\n    }\n\n    render () {\n        return (\n            <div>\n                <Button colors='primary' onClick={this.getData} style={{'marginBottom':'10px'}}>更改数据</Button>\n                <SearchTabs value={this.state.selectValue} onChange={(v)=>{console.log('onchange',v)}}>\n                    {\n                        this.state.tabList.map(item=>\n                            <SearchTabs.Item value={item.value}>{item.name}</SearchTabs.Item >)\n                    }\n                </SearchTabs>\n            </div>\n        )\n    }\n}\nexport default Demo1","desc":" SearchTabs = Tabs.SearchTabs"},{"example":<Demo8 />,"title":" 新增和关闭页签","code":"/**\r\n *\r\n * @title 新增和关闭页签\r\n * @description 只有卡片样式的页签支持新增和关闭选项。使用 closable={false} 禁止关闭。\r\n *\r\n */\r\n\r\nimport React, {Component} from 'react';\nimport { Tabs } from 'tinper-bee';\r\n\r\n\r\nconst {TabPane} = Tabs;\r\n\r\nclass Demo8 extends Component {\r\n    constructor(props){\r\n        super(props);\r\n        this.newTabIndex = 0;\r\n        const panes = [\r\n            { title: 'Tab 1', content: 'Content of Tab 1', key: '1' },\r\n            { title: 'Tab 2', content: 'Content of Tab 2', key: '2' },\r\n            {\r\n              title: 'Tab 3',\r\n              content: 'Content of Tab 3',\r\n              key: '3',\r\n              closable: false,\r\n            },\r\n        ];\r\n        this.state = {\r\n            activeKey: panes[0].key,\r\n            panes\r\n        }\r\n    }\r\n\r\n    onTabChange = (activeKey) => {\r\n        this.setState({\r\n            activeKey,\r\n        });\r\n    }\r\n    \r\n    remove = targetKey => {\r\n        let { activeKey } = this.state;\r\n        let lastIndex;\r\n        this.state.panes.forEach((pane, i) => {\r\n          if (pane.key === targetKey) {\r\n            lastIndex = i - 1;\r\n          }\r\n        });\r\n        const panes = this.state.panes.filter(pane => pane.key !== targetKey);\r\n        if (panes.length && activeKey === targetKey) {\r\n          if (lastIndex >= 0) {\r\n            activeKey = panes[lastIndex].key;\r\n          } else {\r\n            activeKey = panes[0].key;\r\n          }\r\n        }\r\n        this.setState({ panes, activeKey });\r\n    };\r\n\r\n    add = () => {\r\n        const { panes } = this.state;\r\n        const activeKey = `newTab${this.newTabIndex++}`;\r\n        panes.push({ title: 'New Tab', content: 'Content of new Tab', key: activeKey });\r\n        this.setState({ panes, activeKey });\r\n    };\r\n\r\n    onEdit = (targetKey, action) => {\r\n        console.log('onEdit', targetKey, action)\r\n        this[action](targetKey);\r\n    };\r\n    \r\n    onNextClick = (event) => {\r\n        console.log('onNextClick', event)\r\n    }\r\n    \r\n    onPrevClick = (event) => {\r\n        console.log('onPrevClick', event)\r\n    }\r\n\r\n    render() {\r\n        return (\r\n            <Tabs\r\n                className=\"demo8\"\r\n                activeKey={this.state.activeKey}\r\n                onChange={this.onTabChange}\r\n                tabBarStyle=\"editable-card\"\r\n                onEdit={this.onEdit}\r\n                onNextClick={this.onNextClick}\r\n                onPrevClick={this.onPrevClick}\r\n            >\r\n                {this.state.panes.map(pane => (\r\n                    <TabPane tab={pane.title} key={pane.key} closable={pane.closable}>\r\n                        {pane.content}\r\n                    </TabPane>\r\n                ))}\r\n            </Tabs>\r\n        );\r\n    }\r\n}\r\n\r\nexport default Demo8;","desc":" 只有卡片样式的页签支持新增和关闭选项。使用 closable={false} 禁止关闭。"}]


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
