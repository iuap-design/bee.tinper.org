import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Button from 'bee-button';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';


const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var Demo4 = require("./demolist/Demo4");var Demo5 = require("./demolist/Demo5");var Demo6 = require("./demolist/Demo6");var DemoArray = [{"example":<Demo1 />,"title":" 基础Tab","code":"/**\n *  @title 基础Tab\n *  @description 通过Tabs和TabPane配合完成Tab功能\n *\n */\n\nimport React, {Component} from 'react';\nimport { Tabs } from 'tinper-bee';\n\nconst {TabPane} = Tabs;\n\nclass Demo1 extends Component {\n    state = {\n        activeKey: \"1\"\n    }\n\n    onChange = (activeKey) => {\n        console.log(`onChange ${activeKey} o-^-o`);\n        this.setState({\n            activeKey,\n        });\n    }\n\n    render() {\n        return (\n            <Tabs\n                defaultActiveKey=\"1\"\n                onChange={this.onChange}\n                className=\"demo1-tabs\"\n            >\n                <TabPane tab='Tab 1' key=\"1\">Content of Tab Pane 1</TabPane>\n                <TabPane tab='Tab 2' key=\"2\">Content of Tab Pane 2</TabPane>\n                <TabPane tab='Tab 3' key=\"3\">Content of Tab Pane 3</TabPane>\n            </Tabs>\n        )\n    }\n}\n\n","desc":" 通过Tabs和TabPane配合完成Tab功能","scss_code":".demo1-tabs{\n  margin-bottom: 40px;\n}"},{"example":<Demo2 />,"title":" 禁用","code":"/**\n *  @title 禁用\n *  @description 禁用某一项。\n *\n */\n\nimport React, {Component} from 'react';\nimport { Tabs } from 'tinper-bee';\n\nconst {TabPane} = Tabs;\n\nclass Demo2 extends Component {\n    render() {\n        return (\n            <Tabs defaultActiveKey=\"1\">\n                <TabPane tab='Tab 1' key=\"1\">Content of Tab Pane 1</TabPane>\n                <TabPane tab='Tab 2' disabled key=\"2\">Content of Tab Pane 2</TabPane>\n                <TabPane tab='Tab 3' key=\"3\">Content of Tab Pane 3</TabPane>\n            </Tabs>\n        )\n    }\n}\n\n","desc":" 禁用某一项。"},{"example":<Demo3 />,"title":" 图标","code":"/**\n *  @title 图标\n *  @description 有图标的标签。\n *\n */\n\nimport React, {Component} from 'react';\nimport { Tabs, Icon } from 'tinper-bee';\n\nconst {TabPane} = Tabs;\n\nclass Demo3 extends Component {\n    render() {\n        return (\n            <Tabs defaultActiveKey=\"1\">\n                <TabPane tab={<span><Icon type=\"uf-home\"></Icon>主页</span>} key=\"1\">Content of Tab Pane 1</TabPane>\n                <TabPane tab={<span><Icon type=\"uf-settings\"></Icon>设置</span>} key=\"2\">Content of Tab Pane 2</TabPane>\n                <TabPane tab={<span><Icon type=\"uf-folder-o\"></Icon>文件</span>} key=\"3\">Content of Tab Pane 3</TabPane>\n            </Tabs>\n        )\n    }\n}\n\n","desc":" 有图标的标签。"},{"example":<Demo4 />,"title":" 位置","code":"/**\n *\n * @title 位置\n * @description tab页签头的位置，可以在['top','bottom','left','right']中选择。当页签宽度超过容器宽度时，可以左右、上下滑动，容纳更多标签。\n *\n */\n\nimport React, { Component } from 'react';\nimport { Tabs, Select } from 'tinper-bee';\n\nconst {TabPane} = Tabs;\nconst {Option} = Select;\n\nclass Demo4 extends Component {\n    constructor(props) {\n        super(props);\n        this.state = ({\n            activeKey: \"1\",\n            start: 0,\n            tabBarPosition: \"left\"\n        })\n    }\n    onChange = (activeKey) => {\n        console.log(`onChange ${activeKey}o-^-o`);\n        this.setState({\n            activeKey,\n        });\n    }\n\n    onTabClick = (key) => {\n        console.log(`onTabClick ${key}o^o`);\n        if (key === this.state.activeKey) {\n            this.setState({\n                activeKey: '',\n            });\n        }\n    }\n\n    changeTabPosition = (tabBarPosition) => {\n        this.setState({ tabBarPosition });\n    }\n\n    render() {\n\n        return (\n            <div className=\"demo4\">\n                <div style={{ marginBottom: 16 }}>\n                    Tab position：\n                    <Select\n                        value={this.state.tabBarPosition}\n                        onChange={this.changeTabPosition}\n                    >\n                        <Option value=\"top\">top</Option>\n                        <Option value=\"bottom\">bottom</Option>\n                        <Option value=\"left\">left</Option>\n                        <Option value=\"right\">right</Option>\n                    </Select>\n                </div>\n                <Tabs\n                    activeKey={this.state.activeKey}\n                    tabBarPosition={this.state.tabBarPosition}\n                    onChange={this.onChange}\n                    defaultActiveKey=\"1\"\n                    className=\"demo4-tabs\"\n                >\n                    <TabPane tab='Tab 1' key=\"1\">Content of Tab Pane 1</TabPane>\n                    <TabPane tab='Tab 2' key=\"2\">Content of Tab Pane 2</TabPane>\n                    <TabPane tab='Tab 3' key=\"3\">Content of Tab Pane 3</TabPane>\n                    <TabPane tab='Tab 4' key=\"4\">Content of Tab Pane 4</TabPane>\n                    <TabPane tab='Tab 5' key=\"5\">Content of Tab Pane 5</TabPane>\n                    <TabPane tab='Tab 6' key=\"6\">Content of Tab Pane 6</TabPane>\n                    <TabPane tab='Tab 7' key=\"7\">Content of Tab Pane 7</TabPane>\n                    <TabPane tab='Tab 8' key=\"8\">Content of Tab Pane 8</TabPane>\n                </Tabs>\n            </div>\n        )\n    }\n}\n\n","desc":" tab页签头的位置，可以在['top','bottom','left','right']中选择。当页签宽度超过容器宽度时，可以左右、上下滑动，容纳更多标签。","scss_code":".demo4{\n  width: 600px;\n  margin: 20px;\n  .demo4-tabs{\n    &.u-tabs-left, &.u-tabs-right{\n      height: 300px;\n    }\n  }\n  .u-select{\n    width: 100px;\n  }\n}"},{"example":<Demo5 />,"title":" 顶部border","code":"/**\n *\n * @title 顶部border\n * @description `tabBarStyle`参数设置不同的tabBar样式，取值可以是'primary'、'simple'或'upborder'。\n *\n */\n\nimport React, { Component } from 'react';\nimport { Tabs } from 'tinper-bee';\n\nconst {TabPane} = Tabs;\n\nclass Demo5 extends Component {\n    render() {\n\n        return (\n            <div className=\"Demo5\">\n                <Tabs\n                    className=\"Demo5-tabs\"\n                    defaultActiveKey=\"1\"\n                    tabBarStyle=\"upborder\"\n                >\n                    <TabPane tab='Tab 1' key=\"1\">Content of Tab Pane 1</TabPane>\n                    <TabPane tab='Tab 2' key=\"2\">Content of Tab Pane 2</TabPane>\n                    <TabPane tab='Tab 3' key=\"3\">Content of Tab Pane 3</TabPane>\n                    <TabPane tab='Tab 4' key=\"4\">Content of Tab Pane 4</TabPane>\n                    <TabPane tab='Tab 5' key=\"5\">Content of Tab Pane 5</TabPane>\n                </Tabs>\n            </div>\n        )\n    }\n}\n\n","desc":" `tabBarStyle`参数设置不同的tabBar样式，取值可以是'primary'、'simple'或'upborder'。"},{"example":<Demo6 />,"title":" 页签Tab","code":"/**\n *\n * @title 页签Tab\n * @description 通过扩展TabPane和ScrollableInkTabBar的方式，可以完成模拟页签的效果\n *\n */\n\nimport React, {Component} from 'react';\nimport { Tabs, Icon } from 'tinper-bee';\n\nconst {TabPane} = Tabs;\n\nlet index = 1;\nconst content = `问世间、情为何物，只教生死相许？天南地北双飞客，老翅几回寒暑。欢乐趣，离别苦，\n就中更有痴儿女。君应有语，渺万里层云，千山暮雪，只影向谁去？横汾路，寂寞当年箫鼓，荒烟依旧平楚。招魂楚些何嗟及，\n山鬼暗谛风雨。天也妒，未信与，莺几燕子俱黄土。千秋万古，为留待骚人，狂歌痛饮，来访雁丘处。`;\n\nclass Demo6 extends Component {\n    state = {\n        tabs: [{\n            title: '摸鱼儿',\n            content: content\n        }],\n        activeKey: '摸鱼儿',\n    };\n\n    onTabChange = (activeKey) => {\n        this.setState({\n            activeKey,\n        });\n    }\n\n    construct() {\n        const disabled = true;\n        return this.state.tabs.map((t) => {\n            return (\n                <TabPane\n                tab={<span>{t.title}\n                    <Icon\n                        type=\"uf-close-c\"\n                        className=\"close-icon\"\n                        onClick={this.remove.bind(this, t.title)}\n                    />\n                </span>}\n                key={t.title}\n            >\n                <div style={{padding: 100}}>\n                    {t.content}\n                </div>\n            </TabPane>);\n        }).concat([\n            <TabPane\n                tab={<a style={{color: 'black', cursor: 'pointer'}} onClick={this.add}> + 添加</a>}\n                disabled={disabled}\n                key={'__add'}\n            />,\n        ]);\n    }\n\n    // 删除\n    remove = (title, e) => {\n        e.stopPropagation();\n        if (this.state.tabs.length === 1) {\n            alert('只剩一个，不能删');\n            return;\n        }\n        let foundIndex = 0;\n        const after = this.state.tabs.filter((t, i) => {\n            if (t.title !== title) {\n                return true;\n            }\n            foundIndex = i;\n            return false;\n        });\n        let activeKey = this.state.activeKey;\n        if (activeKey === title) {\n            if (foundIndex) {\n                foundIndex--;\n            }\n            activeKey = after[foundIndex].title;\n        }\n        this.setState({\n            tabs: after,\n            activeKey,\n        });\n    }\n\n    clear = () => {\n        let { tabs } = this.state;\n        this.setState({\n            tabs:  [tabs.shift()],\n            activeKey: '摸鱼儿',\n        })\n    }\n\n    // 增加\n    add = (e) => {\n        e.stopPropagation();\n        index++;\n        const newTab = {\n            title: `名称: ${index}`,\n            content: `内容: ${content}`,\n        };\n        this.setState({\n            tabs: this.state.tabs.concat(newTab),\n            activeKey: `名称: ${index}`,\n        });\n    }\n\n    render() {\n\n        return (\n            <div style={{margin: 20}}>\n\n                <Tabs\n                    activeKey={this.state.activeKey}\n                    onChange={this.onTabChange}\n                    tabBarStyle=\"primary\"\n                    defaultActiveKey=\"摸鱼儿\"\n                    extraContent={\n                        <Icon\n                            type=\"uf-del\"\n                            className=\"clear-icon\"\n                            onClick={this.clear}\n                            title=\"清空\"\n                        />\n                    }\n                >\n                    {this.construct()}\n                </Tabs>\n            </div>\n        );\n    }\n}\n\n\n","desc":" 通过扩展TabPane和ScrollableInkTabBar的方式，可以完成模拟页签的效果","scss_code":".close-icon{\n  position: relative;\n  right: -15px;\n  top: 1px;\n}\n\n.clear-icon{\n  display: inline-block;\n  margin-top: 11px;\n  margin-right: 10px;\n}\n.u-tabs-tab-active{\n  color: #fff;\n  cursor: pointer;\n}"}]


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
