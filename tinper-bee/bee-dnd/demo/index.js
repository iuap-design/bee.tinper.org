
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Button from 'bee-button';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';


const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var Demo4 = require("./demolist/Demo4");var Demo5 = require("./demolist/Demo5");var Demo6 = require("./demolist/Demo6");var Demo7 = require("./demolist/Demo7");var Demo8 = require("./demolist/Demo8");var Demo9 = require("./demolist/Demo9");var Demo90 = require("./demolist/Demo90");var Demo91 = require("./demolist/Demo91");var Demo92 = require("./demolist/Demo92");var DemoArray = [{"example":<Demo1 />,"title":" 基础拖拽","code":"\n/**\n *\n * @title 基础拖拽\n * @description 将某个元素设置为可拖拽\n *\n */\n\nimport React, { Component } from 'react';\nimport Dnd from \"tinper-bee/lib/Dnd\";\n\nclass Demo1 extends Component {\n\n    onStart=()=>{\n        console.log('start');\n    }\n    onStop=()=>{\n        console.log('stop');\n    }\n    render() {\n        return (\n            <div>\n                <Dnd onStart={this.onStart} onStop={this.onStop}>\n                    <div className=\"demo\">我可随意拖拽</div>\n                </Dnd>\n            </div>\n\n        );\n    }\n}\n\n","desc":" 将某个元素设置为可拖拽","scss_code":".demo {\n    width: 250px;\n    height: 50px;\n    line-height: 50px;\n    border: 1px solid rgb(30, 136, 229);\n    color: #000000;\n    text-align: center;\n    cursor: all-scroll;\n}"},{"example":<Demo2 />,"title":" 单个元素沿x轴y轴拖拽","code":"\n/**\n *\n * @title 单个元素沿x轴y轴拖拽\n * @description 设置axis=\"x\"只可以沿着x轴拖拽，同理axis=\"y\"只可以沿着y轴拖拽\n *\n */\n\nimport React, { Component } from 'react';\nimport Dnd from \"tinper-bee/lib/Dnd\";\n\nclass Demo2 extends Component {\n\n    onStart=()=>{\n        console.log('start');\n    }\n    onStop=()=>{\n        console.log('stop');\n    }\n    render() {\n        return (\n            <div>\n                <Dnd axis=\"x\" onStart={this.onStart} onStop={this.onStop}>\n                    <div className=\"demo\">我只可延X轴拖拽</div>\n                </Dnd>\n            </div>\n\n        );\n    }\n}\n\n","desc":" 设置axis=\"x\"只可以沿着x轴拖拽，同理axis=\"y\"只可以沿着y轴拖拽","scss_code":".demo {\n  width: 250px;\n  height: 50px;\n  line-height: 50px;\n  border: 1px solid rgb(30, 136, 229);\n  color: #000000;\n  text-align: center;\n  cursor: all-scroll;\n}"},{"example":<Demo3 />,"title":" 设置元素不可拖拽","code":"\n/**\n *\n * @title 设置元素不可拖拽\n * @description 设置 onStart 的返回值为false，则不可以拖拽\n *\n */\n\nimport React, { Component } from 'react';\nimport Dnd from \"tinper-bee/lib/Dnd\";\n\nclass Demo3 extends Component {\n\n    onStart=()=>{\n        console.log('start');\n        return false;\n    }\n    onStop=()=>{\n        console.log('stop');\n    }\n    render() {\n        return (\n            <div>\n                <Dnd onStart={this.onStart}  onStop={this.onStop}>\n                    <div className=\"demo\">我不可以拖拽</div>\n                </Dnd>\n            </div>\n\n        );\n    }\n}\n","desc":" 设置 onStart 的返回值为false，则不可以拖拽","scss_code":".demo {\n  width: 250px;\n  height: 50px;\n  line-height: 50px;\n  border: 1px solid rgb(30, 136, 229);\n  color: #000000;\n  text-align: center;\n  cursor: all-scroll;\n}"},{"example":<Demo4 />,"title":" 单个元素拖拽把手","code":"/**\n *\n * @title 单个元素拖拽把手\n * @description 设置 handle，值为选择器，例如 '.handle'\n *              设置不可拖拽区域 cancel，值为选择器，例如 '.handle'\n */\n\nimport React, { Component } from 'react';\nimport Dnd from \"tinper-bee/lib/Dnd\";\n\nclass Demo4 extends Component {\n\n    onStart=()=>{\n        console.log('start');\n    }\n    onStop=()=>{\n        console.log('stop');\n    }\n\n    render() {\n        return (\n            <div className=\"demo-4\">\n                <div>\n                    <Dnd handle=\".handle\" onStart={this.onStart} onStop={this.onStop}>\n                        <div className=\"demo4 \">\n                            <div className=\"handle\">我是把手</div>\n                            <div className=\"drag-context\">需要拖拽把手</div>\n                        </div>\n                    </Dnd>\n                </div>\n                <div>\n                    <Dnd cancel=\".handle\" >\n                        <div className=\"demo4 \">\n                            <div className=\"handle\">我是把手</div>\n                            <div className=\"drag-context\">不要拖拽把手</div>\n                        </div>\n                    </Dnd>\n                </div>\n            </div>\n\n\n        );\n    }\n}\n\n","desc":" 设置 handle，值为选择器，例如 '.handle'","scss_code":"\n.demo4 {\n  width: 250px;\n  line-height: 50px;\n  border: 1px solid rgb(30, 136, 229);\n  color: #000000;\n  text-align: center;\n  cursor: all-scroll;\n  border: 1px solid rgb(30, 136, 229);\n  height: 80px;\n}\n\n.demo4 .handle {\n  height: 20px;\n  line-height: 20px;\n  background: lightgrey;\n  margin: 10px;\n}\n\n.demo4 .drag-context {\n  height: 50px;\n  line-height: 50px;\n}\n\n.demo-4>div {\n  display: inline-block;\n  padding: 10px;\n}"},{"example":<Demo5 />,"title":" 每次拖拽移动距离","code":"\n/**\n *\n * @title 每次拖拽移动距离\n * @description 设置 grid={[x,y]}\n *\n */\n\nimport React, { Component } from 'react';\nimport Dnd from \"tinper-bee/lib/Dnd\";\n\nclass Demo5 extends Component {\n\n    onStart=()=>{\n        console.log('start');\n    }\n    onStop=()=>{\n        console.log('stop');\n    }\n    render() {\n        return (\n            <div>\n                <Dnd grid={[25, 25]} onStart={this.onStart}  onStop={this.onStop}>\n                    <div className=\"demo\">我每次拖拽可移动25px</div>\n                </Dnd>\n            </div>\n\n        );\n    }\n}\n\n","desc":" 设置 grid={[x,y]}","scss_code":".demo {\n  width: 250px;\n  height: 50px;\n  line-height: 50px;\n  border: 1px solid rgb(30, 136, 229);\n  color: #000000;\n  text-align: center;\n  cursor: all-scroll;\n}"},{"example":<Demo6 />,"title":" 元素拖拽范围","code":"\n/**\n *\n * @title 元素拖拽范围\n * @description 设置上下左右可拖拽范围 bounds={{top: -xxx, left: -xxx, right: xxx, bottom: xx}}\n *\n */\n\nimport React, { Component } from 'react';\nimport Dnd from \"tinper-bee/lib/Dnd\";\n\nclass Demo6 extends Component {\n\n    onStart=()=>{\n        console.log('start');\n    }\n    onStop=()=>{\n        console.log('stop');\n    }\n    render() {\n        return (\n            <div>\n                <Dnd bounds={{top: -50, left: -50, right: 50, bottom: 50}} onStart={this.onStart} onStop={this.onStop}>\n                    <div className=\"demo\">我只能再上下左右50px内移动</div>\n                </Dnd>\n            </div>\n\n        );\n    }\n}\n\n","desc":" 设置上下左右可拖拽范围 bounds={{top: -xxx, left: -xxx, right: xxx, bottom: xx}}","scss_code":".demo {\n  width: 250px;\n  height: 50px;\n  line-height: 50px;\n  border: 1px solid rgb(30, 136, 229);\n  color: #000000;\n  text-align: center;\n  cursor: all-scroll;\n}"},{"example":<Demo7 />,"title":" 在指定容器中拖拽","code":"\n/**\n *\n * @title 在指定容器中拖拽\n * @description 设置只可以在指定容器中移动\n * bounds的也可以设置为选择器,bounds=\".demo8-parent\"意为在class=demo8-parent的容器中移动\n */\n\nimport React, { Component } from 'react';\nimport Dnd from \"tinper-bee/lib/Dnd\";\n\nclass Demo7 extends Component {\n\n    onStart=()=>{\n        console.log('start');\n    }\n    onStop=()=>{\n        console.log('stop');\n    }\n    render() {\n        return (\n            <div>\n                <div className=\"demo7-parent\">\n                    <Dnd bounds=\".demo7-parent\" onStart={this.onStart} onStop={this.onStop}>\n                        <div className=\"demo\">我只能在父级元素中移动</div>\n                    </Dnd>\n                </div>\n            </div>\n\n\n        );\n    }\n}\n\n","desc":" 设置只可以在指定容器中移动","scss_code":".demo {\n  width: 250px;\n  height: 50px;\n  line-height: 50px;\n  border: 1px solid rgb(30, 136, 229);\n  color: #000000;\n  text-align: center;\n  cursor: all-scroll;\n}\n\n.demo7-parent {\n  width: 300px;\n  height: 200px;\n  background: lightgrey;\n  position: relative;\n}"},{"example":<Demo8 />,"title":" 数据集合拖拽列表排序","code":"/**\n *\n * @title 数据集合拖拽列表排序\n * @description 增加list 可以为 [1,2,3]数组，\n *              也可以为 [{},{}...]，需要配置 showKey 。\n *              也可以为 dom集合，见后边示例\n *\n */\n\nimport React, { Component } from 'react';\nimport Dnd from \"tinper-bee/lib/Dnd\";\n\nclass Demo8 extends Component {\n    \n    onDragStart=(result,list)=>{\n        console.log('开始');\n    }\n    onDragEnd=(result,list)=>{   \n        console.log('结束');\n    }\n    onDragUpdate=(result)=>{\n        console.log('update')\n    }\n    render() {\n        let list=[\n            {\n                name:'第一',\n                code:'a'\n            },\n            {\n                name:'第二',\n                code:'b'\n            },\n            {\n                name:'第三',\n                code:'c'\n            },\n            {\n                name:'第四',\n                code:'d'\n            },\n            {\n                name:'第五',\n                code:'e'\n            },\n        ];\n        return (\n            <Dnd showKey='name' list={list} onDragUpdate={this.onDragUpdate} onStart={this.onDragStart} onStop={this.onDragEnd}/>\n        );\n    }\n}\n\n","desc":" 增加list 可以为 [1,2,3]数组，","scss_code":""},{"example":<Demo9 />,"title":" DOM集合拖拽列表排序","code":"\n/**\n *\n * @title DOM集合拖拽列表排序\n * @description list传dom集合\n *\n */\n\nimport React, { Component } from 'react';\nimport Dnd from \"tinper-bee/lib/Dnd\";\n\nclass Demo9 extends Component {\n\n    onDragStart=(result,list)=>{\n        console.log('开始');\n    }\n    onDragEnd=(result,list)=>{\n        console.log('结束');\n    }\n    render() {\n        let list=[<div>DOM第一</div>,<div>DOM第二</div>,<div>DOM第三</div>,<div>DOM第四</div>,<div>DOM第五</div>];\n        return (\n           <Dnd list={list} onStart={this.onDragStart} onStop={this.onDragEnd} />\n        );\n    }\n}\n\n","desc":" list传dom集合"},{"example":<Demo90 />,"title":" 横向拖拽列表排序","code":"\n/**\n *\n * @title 横向拖拽列表排序\n * @description type='horizontal'\n *\n */\n\nimport React, { Component } from 'react';\nimport {  } from 'tinper-bee';\nimport Dnd from \"tinper-bee/lib/Dnd\";;\n\nclass Demo90 extends Component {\n\n    render() {\n        let list=['第一','第二','第三','第四','第五'];\n        return (\n           <Dnd list={list} type='horizontal'  />\n        );\n    }\n}\n\n","desc":" type='horizontal'"},{"example":<Demo91 />,"title":" 两列纵向拖拽","code":"\n/**\n *\n * @title 两列纵向拖拽\n * @description 设置 type='betweenVertical'。 如果不设置高度以及 overflow: scroll; 则高度会自动撑开\n *\n */\n\nimport React, { Component } from 'react';\nimport {  } from 'tinper-bee';\nimport Dnd from \"tinper-bee/lib/Dnd\";;\n\nclass Demo90 extends Component {\n\n    render() {\n        let list1=['第一','第二','第三','第四','第五'];\n        let list2=['1','2','3','4','5'];\n        return (\n           <Dnd className='demo91' list={list1} otherList={list2} type='betweenVertical'  />\n        );\n    }\n}\n\n","desc":" 设置 type='betweenVertical'。 如果不设置高度以及 overflow: scroll; 则高度会自动撑开","scss_code":".u-drop{\n    overflow: scroll;\n}\n.u-drag-between{\n    height: 300px;\n}"},{"example":<Demo92 />,"title":" 两列横向拖拽","code":"\n/**\n *\n * @title 两列横向拖拽\n * @description 设置 type='betweenVertical'\n *\n */\n\nimport React, { Component } from 'react';\nimport {  } from 'tinper-bee';\nimport Dnd from \"tinper-bee/lib/Dnd\";;\n\nclass Demo90 extends Component {\n    onDragStart=(result,list)=>{\n        console.log('开始');\n    }\n    onDragEnd=(result,listObj)=>{\n        console.log('结束');\n        console.log(listObj)\n    }\n    render() {\n        let list1=['第一','第二','第三','第四','第五'];\n        let list2=['1','2','3','4','5'];\n        return (\n           <Dnd list={list1} otherList={list2} type='betweenHorizontal' onStart={this.onDragStart} onStop={this.onDragEnd} />\n        );\n    }\n}\n\n","desc":" 设置 type='betweenVertical'","scss_code":".u-drop{\n    overflow: scroll;\n}\n.u-drag-between-horizontal{\n    height: 200px;\n}"}]


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
                <Panel copyable collapsible headerContent expanded={ this.state.open } colors='bordered' header={ header } footerStyle = {{padding: 0}}>
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