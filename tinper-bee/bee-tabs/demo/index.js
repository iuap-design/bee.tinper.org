import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Button from 'bee-button';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';


const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var DemoArray = [{"example":<Demo1 />,"title":" 基础Tab","code":"/**\r\n *  @title 基础Tab\r\n *  @description 通过Tabs和TabPane配合完成Tab功能\r\n *\r\n */\r\n\r\nimport React, {Component} from 'react';\r\nimport { Tabs } from 'tinper-bee';\r\n\r\nconst {TabPane} = Tabs;\r\n\r\nfunction callback() {\r\n\r\n}\r\n\r\nclass Demo1 extends Component {\r\n    render() {\r\n        return (\r\n            <Tabs\r\n                defaultActiveKey=\"1\"\r\n                onChange={callback}\r\n                tabBarStyle=\"upborder\"\r\n                className=\"demo1-tabs\"\r\n                style={{width:'500px'}}\r\n            >\r\n                <TabPane tab='望庐山瀑布' key=\"1\">\r\n                    <ul>\r\n                        <li>日照香炉生紫烟，</li>\r\n                        <li>遥看瀑布挂前川。</li>\r\n                        <li>飞流直下三千尺，</li>\r\n                        <li>疑是银河落九天。</li>\r\n                    </ul>\r\n\r\n\r\n                </TabPane>\r\n                <TabPane tab='望庐山瀑2布' key=\"1-2\">\r\n                    <ul>\r\n                        <li>日照香炉生紫烟，</li>\r\n                        <li>遥看瀑布挂前2川。</li>\r\n                        <li>飞流直下三千尺，</li>\r\n                        <li>疑是银河落九2天。</li>\r\n                    </ul>\r\n\r\n\r\n                </TabPane>\r\n                <TabPane tab='早发白帝城' key=\"2\">\r\n                    <ul>\r\n                        <li>朝辞白帝彩云间，</li>\r\n                        <li>千里江陵一日还。</li>\r\n                        <li>两岸猿声啼不住，</li>\r\n                        <li>轻舟已过万重山。</li>\r\n                    </ul>\r\n                </TabPane>\r\n                <TabPane tab='菩萨蛮·平林漠漠烟如织' key=\"3\">\r\n                    <ul>\r\n                        <li>平林漠漠烟如织，寒山一带伤心碧。</li>\r\n                        <li>暝色入高楼，有人楼上愁。</li>\r\n                        <li>玉阶空伫立，宿鸟归飞急。</li>\r\n                        <li>何处是归程？长亭连短亭</li>\r\n                    </ul>\r\n                </TabPane>\r\n                <TabPane tab='关山月' key=\"4\">\r\n                    <ul>\r\n                        <li>明月出天山，苍茫云海间。</li>\r\n                        <li>长风几万里，吹度玉门关。</li>\r\n                        <li>汉下白登道，胡窥青海湾。</li>\r\n                        <li>由来征战地，不见有人还。</li>\r\n                    </ul>\r\n                </TabPane>\r\n            </Tabs>\r\n        )\r\n    }\r\n}\r\n\r\n","desc":" 通过Tabs和TabPane配合完成Tab功能","scss_code":".demo1-tabs{\r\n  margin-bottom: 40px;\r\n  width: 600px;\r\n}"},{"example":<Demo2 />,"title":" 竖向的Tab","code":"/**\r\n *\r\n * @title 竖向的Tab\r\n * @description 通过tabBarPosition属性可以控制Tab做不同方向展示,当设置为`left`和`right`时，要为Tabs设置高度。\r\n *\r\n */\r\n\r\nimport React, { Component } from 'react';\r\nimport { Tabs } from 'tinper-bee';\r\n\r\nconst {TabPane} = Tabs;\r\n\r\nclass Demo2 extends Component {\r\n    constructor(props) {\r\n        super(props);\r\n        this.state = ({\r\n            activeKey: \"1\",\r\n            start: 0,\r\n        })\r\n    }\r\n    onChange = (activeKey) => {\r\n        console.log(`onChange ${activeKey}o-^-o`);\r\n        this.setState({\r\n            activeKey,\r\n        });\r\n    }\r\n\r\n    onTabClick = (key) => {\r\n        console.log(`onTabClick ${key}o^o`);\r\n        if (key === this.state.activeKey) {\r\n            this.setState({\r\n                activeKey: '',\r\n            });\r\n        }\r\n    }\r\n\r\n    render() {\r\n\r\n        return (\r\n            <div style={{ margin: 20 }}>\r\n                <Tabs\r\n                    activeKey={this.state.activeKey}\r\n                    tabBarPosition=\"left\"\r\n                    defaultActiveKey=\"1\"\r\n                    onChange={this.onChange}\r\n                    className=\"demo2-tabs\"\r\n                >\r\n                    <TabPane tab=\"望庐山瀑布\" key=\"1\" >\r\n                        <ul>\r\n                            <li>日照香炉生紫烟，</li>\r\n                            <li>遥看瀑布挂前川。</li>\r\n                            <li>飞流直下三千尺，</li>\r\n                            <li>疑是银河落九天。</li>\r\n                        </ul>\r\n                    </TabPane>\r\n                    <TabPane tab=\"早发白帝城\" key=\"2\">\r\n                        <ul>\r\n                            <li>朝辞白帝彩云间，</li>\r\n                            <li>千里江陵一日还。</li>\r\n                            <li>两岸猿声啼不住，</li>\r\n                            <li>轻舟已过万重山。</li>\r\n                        </ul>\r\n                    </TabPane>\r\n                    <TabPane tab=\"菩萨蛮·平林漠漠烟如织\" key=\"3\">\r\n                        <ul>\r\n                            <li>平林漠漠烟如织，寒山一带伤心碧。</li>\r\n                            <li>暝色入高楼，有人楼上愁。</li>\r\n                            <li>玉阶空伫立，宿鸟归飞急。</li>\r\n                            <li>何处是归程？长亭连短亭</li>\r\n                        </ul>\r\n                    </TabPane>\r\n                    <TabPane tab=\"关山月\" key=\"4\">\r\n                        <ul>\r\n                            <li>明月出天山，苍茫云海间。</li>\r\n                            <li>长风几万里，吹度玉门关。</li>\r\n                            <li>汉下白登道，胡窥青海湾。</li>\r\n                            <li>由来征战地，不见有人还。</li>\r\n                        </ul>\r\n                    </TabPane>\r\n                </Tabs>\r\n            </div>\r\n        )\r\n    }\r\n}\r\n\r\n","desc":" 通过tabBarPosition属性可以控制Tab做不同方向展示,当设置为`left`和`right`时，要为Tabs设置高度。","scss_code":".demo2-tabs{\r\n  height: 300px;\r\n}"},{"example":<Demo3 />,"title":" 页签Tab","code":"/**\r\n *\r\n * @title 页签Tab\r\n * @description 通过扩展TabPane和ScrollableInkTabBar的方式，可以完成模拟页签的效果\r\n *\r\n */\r\n\r\nimport React, {Component} from 'react';\r\nimport { Tabs, Icon } from 'tinper-bee';\r\n\n\r\nconst {TabPane} = Tabs;\r\n\r\nlet index = 1;\r\nconst content = `问世间、情为何物，只教生死相许？天南地北双飞客，老翅几回寒暑。欢乐趣，离别苦，\r\n就中更有痴儿女。君应有语，渺万里层云，千山暮雪，只影向谁去？横汾路，寂寞当年箫鼓，荒烟依旧平楚。招魂楚些何嗟及，\r\n山鬼暗谛风雨。天也妒，未信与，莺几燕子俱黄土。千秋万古，为留待骚人，狂歌痛饮，来访雁丘处。`;\r\n\r\nclass Demo3 extends Component {\r\n    state = {\r\n        tabs: [{\r\n            title: '摸鱼儿',\r\n            content: content\r\n        }],\r\n        activeKey: '摸鱼儿',\r\n    };\r\n\r\n    onTabChange = (activeKey) => {\r\n        this.setState({\r\n            activeKey,\r\n        });\r\n    }\r\n\r\n    construct() {\r\n        const disabled = true;\r\n        return this.state.tabs.map((t) => {\r\n            return (\r\n                <TabPane\r\n                tab={<span>{t.title}\r\n                    <Icon\r\n                        type=\"uf-close-c\"\r\n                        className=\"close-icon\"\r\n                        onClick={this.remove.bind(this, t.title)}\r\n                    />\r\n                </span>}\r\n                key={t.title}\r\n            >\r\n                <div style={{padding: 100}}>\r\n                    {t.content}\r\n                </div>\r\n            </TabPane>);\r\n        }).concat([\r\n            <TabPane\r\n                tab={<a style={{color: 'black', cursor: 'pointer'}} onClick={this.add}> + 添加</a>}\r\n                disabled={disabled}\r\n                key={'__add'}\r\n            />,\r\n        ]);\r\n    }\r\n\r\n    // 删除\r\n    remove = (title, e) => {\r\n        e.stopPropagation();\r\n        if (this.state.tabs.length === 1) {\r\n            alert('只剩一个，不能删');\r\n            return;\r\n        }\r\n        let foundIndex = 0;\r\n        const after = this.state.tabs.filter((t, i) => {\r\n            if (t.title !== title) {\r\n                return true;\r\n            }\r\n            foundIndex = i;\r\n            return false;\r\n        });\r\n        let activeKey = this.state.activeKey;\r\n        if (activeKey === title) {\r\n            if (foundIndex) {\r\n                foundIndex--;\r\n            }\r\n            activeKey = after[foundIndex].title;\r\n        }\r\n        this.setState({\r\n            tabs: after,\r\n            activeKey,\r\n        });\r\n    }\r\n\r\n    clear = () => {\r\n        let { tabs } = this.state;\r\n        this.setState({\r\n            tabs:  [tabs.shift()],\r\n            activeKey: '摸鱼儿',\r\n        })\r\n    }\r\n\r\n    // 增加\r\n    add = (e) => {\r\n        e.stopPropagation();\r\n        index++;\r\n        const newTab = {\r\n            title: `名称: ${index}`,\r\n            content: `内容: ${content}`,\r\n        };\r\n        this.setState({\r\n            tabs: this.state.tabs.concat(newTab),\r\n            activeKey: `名称: ${index}`,\r\n        });\r\n    }\r\n\r\n    render() {\r\n\r\n        return (\r\n            <div style={{margin: 20}}>\r\n\r\n                <Tabs\r\n                    activeKey={this.state.activeKey}\r\n                    onChange={this.onTabChange}\r\n                    tabBarStyle=\"primary\"\r\n                    defaultActiveKey=\"摸鱼儿\"\r\n                    extraContent={\r\n                        <Icon\r\n                            type=\"uf-del\"\r\n                            className=\"clear-icon\"\r\n                            onClick={this.clear}\r\n                            title=\"清空\"\r\n                        />\r\n                    }\r\n                >\r\n                    {this.construct()}\r\n                </Tabs>\r\n            </div>\r\n        );\r\n    }\r\n}\r\n\r\n\r\n","desc":" 通过扩展TabPane和ScrollableInkTabBar的方式，可以完成模拟页签的效果","scss_code":".close-icon{\r\n  position: relative;\r\n  right: -15px;\r\n  top: 1px;\r\n  color: #fff;\r\n  cursor: pointer;\r\n}\r\n\r\n.clear-icon{\r\n  display: inline-block;\r\n  margin-top: 11px;\r\n  margin-right: 10px;\r\n}"}]


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
