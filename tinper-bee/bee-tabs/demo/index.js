import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Drawer from 'bee-drawer';
import Clipboard from 'bee-clipboard'; 
import Button from '../src';



var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var Demo4 = require("./demolist/Demo4");var Demo5 = require("./demolist/Demo5");var Demo6 = require("./demolist/Demo6");var DemoArray = [{"example":<Demo1 />,"title":" 基础Tab","code":"/**\r\n *  @title 基础Tab\r\n *  @description 通过Tabs和TabPane配合完成Tab功能\r\n *\r\n */\r\n\r\nimport React, {Component} from 'react';\r\nimport { Tabs } from 'tinper-bee';\r\n\r\nconst {TabPane} = Tabs;\r\n\r\nclass Demo1 extends Component {\r\n    state = {\r\n        activeKey: \"1\"\r\n    }\r\n\r\n    onChange = (activeKey) => {\r\n        console.log(`onChange ${activeKey} o-^-o`);\r\n        this.setState({\r\n            activeKey,\r\n        });\r\n    }\r\n\r\n    render() {\r\n        return (\r\n            <Tabs\r\n                defaultActiveKey=\"1\"\r\n                onChange={this.onChange}\r\n                className=\"demo1-tabs\"\r\n            >\r\n                <TabPane tab='Tab 1' key=\"1\">Content of Tab Pane 1</TabPane>\r\n                <TabPane tab='Tab 2' key=\"2\">Content of Tab Pane 2</TabPane>\r\n                <TabPane tab='Tab 3' key=\"3\">Content of Tab Pane 3</TabPane>\r\n            </Tabs>\r\n        )\r\n    }\r\n}\r\n\r\n","desc":" 通过Tabs和TabPane配合完成Tab功能","scss_code":".demo1-tabs{\r\n  margin-bottom: 40px;\r\n}"},{"example":<Demo2 />,"title":" 禁用","code":"/**\r\n *  @title 禁用\r\n *  @description 禁用某一项。\r\n *\r\n */\r\n\r\nimport React, {Component} from 'react';\r\nimport { Tabs } from 'tinper-bee';\r\n\r\nconst {TabPane} = Tabs;\r\n\r\nclass Demo2 extends Component {\r\n    render() {\r\n        return (\r\n            <Tabs defaultActiveKey=\"1\">\r\n                <TabPane tab='Tab 1' key=\"1\">Content of Tab Pane 1</TabPane>\r\n                <TabPane tab='Tab 2' disabled key=\"2\">Content of Tab Pane 2</TabPane>\r\n                <TabPane tab='Tab 3' key=\"3\">Content of Tab Pane 3</TabPane>\r\n            </Tabs>\r\n        )\r\n    }\r\n}\r\n\r\n","desc":" 禁用某一项。"},{"example":<Demo3 />,"title":" 图标","code":"/**\r\n *  @title 图标\r\n *  @description 有图标的标签。\r\n *\r\n */\r\n\r\nimport React, {Component} from 'react';\r\n\nimport { Tabs, Icon } from 'tinper-bee';\r\n\r\nconst {TabPane} = Tabs;\r\n\r\nclass Demo3 extends Component {\r\n    render() {\r\n        return (\r\n            <Tabs defaultActiveKey=\"1\">\r\n                <TabPane tab={<span><Icon type=\"uf-home\"></Icon>主页</span>} key=\"1\">Content of Tab Pane 1</TabPane>\r\n                <TabPane tab={<span><Icon type=\"uf-settings\"></Icon>设置</span>} key=\"2\">Content of Tab Pane 2</TabPane>\r\n                <TabPane tab={<span><Icon type=\"uf-folder-o\"></Icon>文件</span>} key=\"3\">Content of Tab Pane 3</TabPane>\r\n            </Tabs>\r\n        )\r\n    }\r\n}\r\n\r\n","desc":" 有图标的标签。"},{"example":<Demo4 />,"title":" 位置","code":"/**\r\n *\r\n * @title 位置\r\n * @description tab页签头的位置，可以在['top','bottom','left','right']中选择。当页签宽度超过容器宽度时，可以左右、上下滑动，容纳更多标签。\r\n *\r\n */\r\n\r\nimport React, { Component } from 'react';\r\n\nimport { Tabs, Select } from 'tinper-bee';\r\n\r\nconst {TabPane} = Tabs;\r\nconst {Option} = Select;\r\n\r\nclass Demo4 extends Component {\r\n    constructor(props) {\r\n        super(props);\r\n        this.state = ({\r\n            activeKey: \"1\",\r\n            start: 0,\r\n            tabBarPosition: \"left\"\r\n        })\r\n    }\r\n    onChange = (activeKey) => {\r\n        console.log(`onChange ${activeKey}o-^-o`);\r\n        this.setState({\r\n            activeKey,\r\n        });\r\n    }\r\n\r\n    onTabClick = (key) => {\r\n        console.log(`onTabClick ${key}o^o`);\r\n        if (key === this.state.activeKey) {\r\n            this.setState({\r\n                activeKey: '',\r\n            });\r\n        }\r\n    }\r\n\r\n    changeTabPosition = (tabBarPosition) => {\r\n        this.setState({ tabBarPosition });\r\n    }\r\n\r\n    render() {\r\n\r\n        return (\r\n            <div className=\"demo4\">\r\n                <div style={{ marginBottom: 16 }}>\r\n                    Tab position：\r\n                    <Select\r\n                        value={this.state.tabBarPosition}\r\n                        onChange={this.changeTabPosition}\r\n                    >\r\n                        <Option value=\"top\">top</Option>\r\n                        <Option value=\"bottom\">bottom</Option>\r\n                        <Option value=\"left\">left</Option>\r\n                        <Option value=\"right\">right</Option>\r\n                    </Select>\r\n                </div>\r\n                <Tabs\r\n                    activeKey={this.state.activeKey}\r\n                    tabBarPosition={this.state.tabBarPosition}\r\n                    onChange={this.onChange}\r\n                    defaultActiveKey=\"1\"\r\n                    className=\"demo4-tabs\"\r\n                >\r\n                    <TabPane tab='Tab 1' key=\"1\">Content of Tab Pane 1</TabPane>\r\n                    <TabPane tab='Tab 2' key=\"2\">Content of Tab Pane 2</TabPane>\r\n                    <TabPane tab='Tab 3' key=\"3\">Content of Tab Pane 3</TabPane>\r\n                    <TabPane tab='Tab 4' key=\"4\">Content of Tab Pane 4</TabPane>\r\n                    <TabPane tab='Tab 5' key=\"5\">Content of Tab Pane 5</TabPane>\r\n                    <TabPane tab='Tab 6' key=\"6\">Content of Tab Pane 6</TabPane>\r\n                    <TabPane tab='Tab 7' key=\"7\">Content of Tab Pane 7</TabPane>\r\n                    <TabPane tab='Tab 8' key=\"8\">Content of Tab Pane 8</TabPane>\r\n                </Tabs>\r\n            </div>\r\n        )\r\n    }\r\n}\r\n\r\n","desc":" tab页签头的位置，可以在['top','bottom','left','right']中选择。当页签宽度超过容器宽度时，可以左右、上下滑动，容纳更多标签。","scss_code":".demo4{\r\n  width: 600px;\r\n  margin: 20px;\r\n  .demo4-tabs{\r\n    &.u-tabs-left, &.u-tabs-right{\r\n      height: 300px;\r\n    }\r\n  }\r\n  .u-select{\r\n    width: 100px;\r\n  }\r\n}"},{"example":<Demo5 />,"title":" 顶部border","code":"/**\r\n *\r\n * @title 顶部border\r\n * @description `tabBarStyle`参数设置不同的tabBar样式，取值可以是'primary'、'simple'或'upborder'。\r\n *\r\n */\r\n\r\nimport React, { Component } from 'react';\r\nimport { Tabs } from 'tinper-bee';\r\n\r\nconst {TabPane} = Tabs;\r\n\r\nclass Demo5 extends Component {\r\n    render() {\r\n\r\n        return (\r\n            <div className=\"Demo5\">\r\n                <Tabs\r\n                    className=\"Demo5-tabs\"\r\n                    defaultActiveKey=\"1\"\r\n                    tabBarStyle=\"upborder\"\r\n                >\r\n                    <TabPane tab='Tab 1' key=\"1\">Content of Tab Pane 1</TabPane>\r\n                    <TabPane tab='Tab 2' key=\"2\">Content of Tab Pane 2</TabPane>\r\n                    <TabPane tab='Tab 3' key=\"3\">Content of Tab Pane 3</TabPane>\r\n                    <TabPane tab='Tab 4' key=\"4\">Content of Tab Pane 4</TabPane>\r\n                    <TabPane tab='Tab 5' key=\"5\">Content of Tab Pane 5</TabPane>\r\n                </Tabs>\r\n            </div>\r\n        )\r\n    }\r\n}\r\n\r\n","desc":" `tabBarStyle`参数设置不同的tabBar样式，取值可以是'primary'、'simple'或'upborder'。"},{"example":<Demo6 />,"title":" 附加操作","code":"/**\r\n *\r\n * @title 附加操作\r\n * @description `extraContent`参数可以在页签右边自定义附加操作。\r\n *\r\n */\r\n\r\nimport React, { Component } from 'react';\r\n\nimport { Tabs, Button } from 'tinper-bee';\r\n\r\nconst {TabPane} = Tabs;\r\nclass Demo6 extends Component {\r\n\r\n    add = () => {\r\n        alert(\"在这里添加操作 ^_^\")\r\n    }\r\n\r\n    render() {\r\n        return (\r\n            <div className=\"Demo6\">\r\n                <Tabs\r\n                    className=\"Demo6-tabs\"\r\n                    defaultActiveKey=\"1\"\r\n                    tabBarStyle=\"upborder\"\r\n                    extraContent={\r\n                        <Button className=\"add-button\" size=\"sm\" colors=\"primary\" onClick={this.add}>一些操作</Button>\r\n                    }\r\n                >\r\n                    <TabPane tab='Tab 1' key=\"1\">Content of Tab Pane 1</TabPane>\r\n                    <TabPane tab='Tab 2' key=\"2\">Content of Tab Pane 2</TabPane>\r\n                    <TabPane tab='Tab 3' key=\"3\">Content of Tab Pane 3</TabPane>\r\n                </Tabs>\r\n            </div>\r\n        )\r\n    }\r\n}\r\n\r\n","desc":" `extraContent`参数可以在页签右边自定义附加操作。","scss_code":".Demo6-tabs{\r\n  .add-button{\r\n    margin: 3px;\r\n  }\r\n}"}]


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
