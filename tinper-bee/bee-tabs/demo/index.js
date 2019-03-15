import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Button from 'bee-button';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';


const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var Demo4 = require("./demolist/Demo4");var Demo5 = require("./demolist/Demo5");var Demo6 = require("./demolist/Demo6");var DemoArray = [{"example":<Demo1 />,"title":" 基础Tab","code":"/**\r\n *  @title 基础Tab\r\n *  @description 通过Tabs和TabPane配合完成Tab功能\r\n *\r\n */\r\n\r\nimport React, {Component} from 'react';\r\nimport { Tabs } from 'tinper-bee';\r\n\r\nconst {TabPane} = Tabs;\r\n\r\nclass Demo1 extends Component {\r\n    state = {\r\n        activeKey: \"1\"\r\n    }\r\n\r\n    onChange = (activeKey) => {\r\n        console.log(`onChange ${activeKey} o-^-o`);\r\n        this.setState({\r\n            activeKey,\r\n        });\r\n    }\r\n\r\n    render() {\r\n        return (\r\n            <Tabs\r\n                defaultActiveKey=\"1\"\r\n                onChange={this.onChange}\r\n                className=\"demo1-tabs\"\r\n            >\r\n                <TabPane tab='Tab 1' key=\"1\">Content of Tab Pane 1</TabPane>\r\n                <TabPane tab='Tab 2' key=\"2\">Content of Tab Pane 2</TabPane>\r\n                <TabPane tab='Tab 3' key=\"3\">Content of Tab Pane 3</TabPane>\r\n            </Tabs>\r\n        )\r\n    }\r\n}\r\n\r\n","desc":" 通过Tabs和TabPane配合完成Tab功能","scss_code":".demo1-tabs{\r\n  margin-bottom: 40px;\r\n}"},{"example":<Demo2 />,"title":" 禁用","code":"/**\r\n *  @title 禁用\r\n *  @description 禁用某一项。\r\n *\r\n */\r\n\r\nimport React, {Component} from 'react';\r\nimport { Tabs } from 'tinper-bee';\r\n\r\nconst {TabPane} = Tabs;\r\n\r\nclass Demo2 extends Component {\r\n    render() {\r\n        return (\r\n            <Tabs defaultActiveKey=\"1\">\r\n                <TabPane tab='Tab 1' key=\"1\">Content of Tab Pane 1</TabPane>\r\n                <TabPane tab='Tab 2' disabled key=\"2\">Content of Tab Pane 2</TabPane>\r\n                <TabPane tab='Tab 3' key=\"3\">Content of Tab Pane 3</TabPane>\r\n            </Tabs>\r\n        )\r\n    }\r\n}\r\n\r\n","desc":" 禁用某一项。"},{"example":<Demo3 />,"title":" 图标","code":"/**\r\n *  @title 图标\r\n *  @description 有图标的标签。\r\n *\r\n */\r\n\r\nimport React, {Component} from 'react';\r\n\nimport { Tabs, Icon } from 'tinper-bee';\r\n\r\nconst {TabPane} = Tabs;\r\n\r\nclass Demo3 extends Component {\r\n    render() {\r\n        return (\r\n            <Tabs defaultActiveKey=\"1\">\r\n                <TabPane tab={<span><Icon type=\"uf-home\"></Icon>主页</span>} key=\"1\">Content of Tab Pane 1</TabPane>\r\n                <TabPane tab={<span><Icon type=\"uf-settings\"></Icon>设置</span>} key=\"2\">Content of Tab Pane 2</TabPane>\r\n                <TabPane tab={<span><Icon type=\"uf-folder-o\"></Icon>文件</span>} key=\"3\">Content of Tab Pane 3</TabPane>\r\n            </Tabs>\r\n        )\r\n    }\r\n}\r\n\r\n","desc":" 有图标的标签。"},{"example":<Demo4 />,"title":" 位置","code":"/**\r\n *\r\n * @title 位置\r\n * @description tab页签头的位置，可以在['top','bottom','left','right']中选择。当页签宽度超过容器宽度时，可以左右、上下滑动，容纳更多标签。\r\n *\r\n */\r\n\r\nimport React, { Component } from 'react';\r\n\nimport { Tabs, Select } from 'tinper-bee';\r\n\r\nconst {TabPane} = Tabs;\r\nconst {Option} = Select;\r\n\r\nclass Demo4 extends Component {\r\n    constructor(props) {\r\n        super(props);\r\n        this.state = ({\r\n            activeKey: \"1\",\r\n            start: 0,\r\n            tabBarPosition: \"left\"\r\n        })\r\n    }\r\n    onChange = (activeKey) => {\r\n        console.log(`onChange ${activeKey}o-^-o`);\r\n        this.setState({\r\n            activeKey,\r\n        });\r\n    }\r\n\r\n    onTabClick = (key) => {\r\n        console.log(`onTabClick ${key}o^o`);\r\n        if (key === this.state.activeKey) {\r\n            this.setState({\r\n                activeKey: '',\r\n            });\r\n        }\r\n    }\r\n\r\n    changeTabPosition = (tabBarPosition) => {\r\n        this.setState({ tabBarPosition });\r\n    }\r\n\r\n    render() {\r\n\r\n        return (\r\n            <div className=\"demo4\">\r\n                <div style={{ marginBottom: 16 }}>\r\n                    Tab position：\r\n                    <Select\r\n                        value={this.state.tabBarPosition}\r\n                        onChange={this.changeTabPosition}\r\n                    >\r\n                        <Option value=\"top\">top</Option>\r\n                        <Option value=\"bottom\">bottom</Option>\r\n                        <Option value=\"left\">left</Option>\r\n                        <Option value=\"right\">right</Option>\r\n                    </Select>\r\n                </div>\r\n                <Tabs\r\n                    activeKey={this.state.activeKey}\r\n                    tabBarPosition={this.state.tabBarPosition}\r\n                    onChange={this.onChange}\r\n                    defaultActiveKey=\"1\"\r\n                    className=\"demo4-tabs\"\r\n                >\r\n                    <TabPane tab='Tab 1' key=\"1\">Content of Tab Pane 1</TabPane>\r\n                    <TabPane tab='Tab 2' key=\"2\">Content of Tab Pane 2</TabPane>\r\n                    <TabPane tab='Tab 3' key=\"3\">Content of Tab Pane 3</TabPane>\r\n                    <TabPane tab='Tab 4' key=\"4\">Content of Tab Pane 4</TabPane>\r\n                    <TabPane tab='Tab 5' key=\"5\">Content of Tab Pane 5</TabPane>\r\n                    <TabPane tab='Tab 6' key=\"6\">Content of Tab Pane 6</TabPane>\r\n                    <TabPane tab='Tab 7' key=\"7\">Content of Tab Pane 7</TabPane>\r\n                    <TabPane tab='Tab 8' key=\"8\">Content of Tab Pane 8</TabPane>\r\n                </Tabs>\r\n            </div>\r\n        )\r\n    }\r\n}\r\n\r\n","desc":" tab页签头的位置，可以在['top','bottom','left','right']中选择。当页签宽度超过容器宽度时，可以左右、上下滑动，容纳更多标签。","scss_code":".demo4{\r\n  width: 600px;\r\n  margin: 20px;\r\n  .demo4-tabs{\r\n    &.u-tabs-left, &.u-tabs-right{\r\n      height: 300px;\r\n    }\r\n  }\r\n  .u-select{\r\n    width: 100px;\r\n  }\r\n}"},{"example":<Demo5 />,"title":" 顶部border","code":"/**\r\n *\r\n * @title 顶部border\r\n * @description `tabBarStyle`参数设置不同的tabBar样式，取值可以是'primary'、'simple'或'upborder'。\r\n *\r\n */\r\n\r\nimport React, { Component } from 'react';\r\nimport { Tabs } from 'tinper-bee';\r\n\r\nconst {TabPane} = Tabs;\r\n\r\nclass Demo5 extends Component {\r\n    render() {\r\n\r\n        return (\r\n            <div className=\"Demo5\">\r\n                <Tabs\r\n                    className=\"Demo5-tabs\"\r\n                    defaultActiveKey=\"1\"\r\n                    tabBarStyle=\"upborder\"\r\n                >\r\n                    <TabPane tab='Tab 1' key=\"1\">Content of Tab Pane 1</TabPane>\r\n                    <TabPane tab='Tab 2' key=\"2\">Content of Tab Pane 2</TabPane>\r\n                    <TabPane tab='Tab 3' key=\"3\">Content of Tab Pane 3</TabPane>\r\n                    <TabPane tab='Tab 4' key=\"4\">Content of Tab Pane 4</TabPane>\r\n                    <TabPane tab='Tab 5' key=\"5\">Content of Tab Pane 5</TabPane>\r\n                </Tabs>\r\n            </div>\r\n        )\r\n    }\r\n}\r\n\r\n","desc":" `tabBarStyle`参数设置不同的tabBar样式，取值可以是'primary'、'simple'或'upborder'。"},{"example":<Demo6 />,"title":" 页签Tab","code":"/**\r\n *\r\n * @title 页签Tab\r\n * @description 通过扩展TabPane和ScrollableInkTabBar的方式，可以完成模拟页签的效果\r\n *\r\n */\r\n\r\nimport React, {Component} from 'react';\r\nimport { Tabs, Icon } from 'tinper-bee';\r\n\n\r\nconst {TabPane} = Tabs;\r\n\r\nlet index = 1;\r\nconst content = `问世间、情为何物，只教生死相许？天南地北双飞客，老翅几回寒暑。欢乐趣，离别苦，\r\n就中更有痴儿女。君应有语，渺万里层云，千山暮雪，只影向谁去？横汾路，寂寞当年箫鼓，荒烟依旧平楚。招魂楚些何嗟及，\r\n山鬼暗谛风雨。天也妒，未信与，莺几燕子俱黄土。千秋万古，为留待骚人，狂歌痛饮，来访雁丘处。`;\r\n\r\nclass Demo6 extends Component {\r\n    state = {\r\n        tabs: [{\r\n            title: '摸鱼儿',\r\n            content: content\r\n        }],\r\n        activeKey: '摸鱼儿',\r\n    };\r\n\r\n    onTabChange = (activeKey) => {\r\n        this.setState({\r\n            activeKey,\r\n        });\r\n    }\r\n\r\n    construct() {\r\n        const disabled = true;\r\n        return this.state.tabs.map((t) => {\r\n            return (\r\n                <TabPane\r\n                tab={<span>{t.title}\r\n                    <Icon\r\n                        type=\"uf-close-c\"\r\n                        className=\"close-icon\"\r\n                        onClick={this.remove.bind(this, t.title)}\r\n                    />\r\n                </span>}\r\n                key={t.title}\r\n            >\r\n                <div style={{padding: 100}}>\r\n                    {t.content}\r\n                </div>\r\n            </TabPane>);\r\n        }).concat([\r\n            <TabPane\r\n                tab={<a style={{color: 'black', cursor: 'pointer'}} onClick={this.add}> + 添加</a>}\r\n                disabled={disabled}\r\n                key={'__add'}\r\n            />,\r\n        ]);\r\n    }\r\n\r\n    // 删除\r\n    remove = (title, e) => {\r\n        e.stopPropagation();\r\n        if (this.state.tabs.length === 1) {\r\n            alert('只剩一个，不能删');\r\n            return;\r\n        }\r\n        let foundIndex = 0;\r\n        const after = this.state.tabs.filter((t, i) => {\r\n            if (t.title !== title) {\r\n                return true;\r\n            }\r\n            foundIndex = i;\r\n            return false;\r\n        });\r\n        let activeKey = this.state.activeKey;\r\n        if (activeKey === title) {\r\n            if (foundIndex) {\r\n                foundIndex--;\r\n            }\r\n            activeKey = after[foundIndex].title;\r\n        }\r\n        this.setState({\r\n            tabs: after,\r\n            activeKey,\r\n        });\r\n    }\r\n\r\n    clear = () => {\r\n        let { tabs } = this.state;\r\n        this.setState({\r\n            tabs:  [tabs.shift()],\r\n            activeKey: '摸鱼儿',\r\n        })\r\n    }\r\n\r\n    // 增加\r\n    add = (e) => {\r\n        e.stopPropagation();\r\n        index++;\r\n        const newTab = {\r\n            title: `名称: ${index}`,\r\n            content: `内容: ${content}`,\r\n        };\r\n        this.setState({\r\n            tabs: this.state.tabs.concat(newTab),\r\n            activeKey: `名称: ${index}`,\r\n        });\r\n    }\r\n\r\n    render() {\r\n\r\n        return (\r\n            <div style={{margin: 20}}>\r\n\r\n                <Tabs\r\n                    activeKey={this.state.activeKey}\r\n                    onChange={this.onTabChange}\r\n                    tabBarStyle=\"primary\"\r\n                    defaultActiveKey=\"摸鱼儿\"\r\n                    extraContent={\r\n                        <Icon\r\n                            type=\"uf-del\"\r\n                            className=\"clear-icon\"\r\n                            onClick={this.clear}\r\n                            title=\"清空\"\r\n                        />\r\n                    }\r\n                >\r\n                    {this.construct()}\r\n                </Tabs>\r\n            </div>\r\n        );\r\n    }\r\n}\r\n\r\n\r\n","desc":" 通过扩展TabPane和ScrollableInkTabBar的方式，可以完成模拟页签的效果","scss_code":".close-icon{\r\n  position: relative;\r\n  right: -15px;\r\n  top: 1px;\r\n}\r\n\r\n.clear-icon{\r\n  display: inline-block;\r\n  margin-top: 11px;\r\n  margin-right: 10px;\r\n}\r\n.u-tabs-tab-active{\r\n  color: #fff;\r\n  cursor: pointer;\r\n}"}]


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
