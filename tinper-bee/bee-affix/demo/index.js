import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Button from 'bee-button';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';


const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var Demo4 = require("./demolist/Demo4");var DemoArray = [{"example":<Demo1 />,"title":" 基本的Affix,带有container","code":"/**\n*\n* @title 基本的Affix,带有container\n* @description 基本的Affix,带有container\n*\n*/\n\nimport React, { Component } from 'react';\nimport { Affix, Button } from 'tinper-bee';\n\n\nclass Demo1 extends Component {\n  constructor(props){\n    super(props);\n    this.state = {\n      container:null,\n    }\n  }\n\n  componentDidMount(){\n    if(document.getElementById('outer-box')){\n      this.setState({container:document.getElementById('outer-box')})\n    }\n  }\n  render () {\n  \n    return (\n      <div className=\"demo1\">\n        <div>某个div内的affix，container canHidden={true} zIndex={2001}</div>\n        <div className=\"outer-box checkered stripes\" id=\"outer-box\">\n          <Affix container={this.state.container} canHidden={true} zIndex={2001}>\n            <Button colors=\"primary\">affix in container</Button>\n          </Affix>\n        </div>\n      </div>\n    )\n  }\n}\n\n\n","desc":" 基本的Affix,带有container","scss_code":"// .content {\n//   width: 150px;\n//   height: 100px;\n//   background-image: linear-gradient(-180deg, #6873E8 0%, #277DF4 100%);\n//   font-size: 20px;\n//   color: #fff;\n//   text-align: center;\n//   line-height: 100px;\n// }\n// .u-panel-title{\n//   height: 800px;\n// }\n// #outer-box{\n//   width: 700px;\n//   height: 300px!important;\n//   background: #1baede;\n// }\n.stripes {   \n  width: 500px;   \n  height: 400px!important;;   \n  float: left;   \n     \n  margin: 10px;   \n     \n  -webkit-background-size: 16px 16px;   \n  -moz-background-size: 16px 16px;   \n  background-size: 16px 16px; /* 控制条纹的大小 */  \n     \n  -moz-box-shadow: 1px 1px 8px #ccc;   \n  -webkit-box-shadow: 1px 1px 8px #ccc;   \n  box-shadow: 1px 1px 8px #ccc;   \n}  \n.checkered {   \n  background-image: -webkit-gradient(linear, 0 0, 100% 100%, color-stop(.25, #ccc), color-stop(.25, transparent), to(transparent)),   \n                    -webkit-gradient(linear, 0 100%, 100% 0, color-stop(.25, #ccc), color-stop(.25, transparent), to(transparent)),   \n                    -webkit-gradient(linear, 0 0, 100% 100%, color-stop(.75, transparent), color-stop(.75, #ccc)),   \n                    -webkit-gradient(linear, 0 100%, 100% 0, color-stop(.75, transparent), color-stop(.75, #ccc));   \n  background-image: -moz-linear-gradient(45deg, #ccc 25%, transparent 25%, transparent),   \n                    -moz-linear-gradient(-45deg, #ccc 25%, transparent 25%, transparent),   \n                    -moz-linear-gradient(45deg, transparent 75%, #ccc 75%),   \n                    -moz-linear-gradient(-45deg, transparent 75%, #ccc 75%);   \n  background-image: -o-linear-gradient(45deg, #ccc 25%, transparent 25%, transparent),   \n                    -o-linear-gradient(-45deg, #ccc 25%, transparent 25%, transparent),   \n                    -o-linear-gradient(45deg, transparent 75%, #ccc 75%),   \n                    -o-linear-gradient(-45deg, transparent 75%, #ccc 75%);   \n  background-image: linear-gradient(45deg, #ccc 25%, transparent 25%, transparent),   \n                    linear-gradient(-45deg, #ccc 25%, transparent 25%, transparent),   \n                    linear-gradient(45deg, transparent 75%, #ccc 75%),   \n                    linear-gradient(-45deg, transparent 75%, #ccc 75%);   \n}  "},{"example":<Demo2 />,"title":" offsetTop Affix","code":"/**\n*\n* @title offsetTop Affix\n* @description 触发固定的距离屏幕顶部高度等于offetTop\n*\n*/\n\nimport React, { Component } from 'react';\nimport { Affix, Button } from 'tinper-bee';\n\nclass Demo2 extends Component {\n  render () {\n    //请注意，这个container是为了适应tinperbee官网的布局特意设定，其他没有意外不需要传container，默认body\n    let container = document.getElementsByClassName('page-container u-container example')[0]? document.getElementsByClassName('page-container u-container example')[0] : document.getElementById('tinperBeeDemo');\n\n    return (\n      <div className=\"demo2\" id=\"outer-box2\">\n        <label>基本的Affix，具体屏幕顶部距离等于offetTop `zIndex={2001} offsetTop=200`</label>\n        <Affix container={container} zIndex={2001} offsetTop={120}>\n          <Button colors=\"primary\">120px to affix top</Button>\n        </Affix>\n      </div>\n    )\n  }\n}\n\n\n","desc":" 触发固定的距离屏幕顶部高度等于offetTop","scss_code":"// .content {\n//     width: 150px;\n//     height: 100px;\n//     background-image: linear-gradient(-180deg, #6873E8 0%, #277DF4 100%);\n//     font-size: 20px;\n//     color: #fff;\n//     text-align: center;\n//     line-height: 100px;\n//   }"},{"example":<Demo3 />,"title":" horizontal Affix","code":"/**\n *\n * @title horizontal Affix\n * @description 基本的Affix，水平滚动affix距离左侧位置确定\n *\n */\n\n\nimport React, { Component } from 'react';\nimport { Affix, Button } from 'tinper-bee';\n\nclass Demo3 extends Component {\n    render() {\n       //请注意，这个container是为了适应tinperbee官网的布局特意设定，其他没有意外不需要传container，默认body\n        let container = document.getElementsByClassName('page-container u-container example')[0]? document.getElementsByClassName('page-container u-container example')[0] : document.getElementById('tinperBeeDemo');\n\n        return (\n          <div className = \"demo3\"id = \"outer-box3\" >\n            <label > 基本的Affix，水平滚动affix距离左侧位置确定 `zIndex={2001} horizontal offsetTop=450 ` </label> \n            <div className=\"affix-container\">\n              <Affix container={container} zIndex={2001} horizontal={true} offsetTop = { 450 } >\n                <Button colors=\"primary\">450px to affix top</Button>\n              </Affix> \n            </div>\n          </div>\n        )\n    }\n}\n\n","desc":" 基本的Affix，水平滚动affix距离左侧位置确定","scss_code":"// .content {\n//     width: 150px;\n//     height: 100px;\n//     background-image: linear-gradient(-180deg, #6873E8 0%, #277DF4 100%);\n//     font-size: 20px;\n//     color: #fff;\n//     text-align: center;\n//     line-height: 100px;\n//   }\n.demo3{\n  width: 2000px;\n  height: 400px;\n  .affix-container{\n    width: 200px;\n    margin-left: 100px;\n    margin-top: 300px;\n  }\n}"},{"example":<Demo4 />,"title":" affix下面的dom是可变化的时候","code":"/**\n*\n* @title affix下面的dom是可变化的时候\n* @description affix下面的dom是可变化的时候\n*\n*/\n\nimport React, { Component } from 'react';\nimport { Affix, Button } from 'tinper-bee';\n\n\nclass Demo4 extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      dom: null,\n      childrenRef: null,\n    }\n  }\n\n  componentDidMount() {\n    if (document.getElementById('outer-box')) {\n      this.setState({\n        dom: <div style={{ backgroundColor: 'lightgrey', opacity: 0.4 }} ref={(ref) => { this.setState({ childrenRef: ref }) }} ><h1>affix</h1><h1>affix</h1></div>\n      });\n    }\n    setTimeout(() => {\n      this.setState({\n        dom: <div style={{ backgroundColor: 'lightgrey', opacity: 0.4 }} ref={(ref) => { this.setState({ childrenRef: ref }) }} ><h1>affix</h1><h1>affix</h1><h1>affix</h1><h1>affix</h1><h1>affix</h1><h1>affix</h1></div>\n      });\n    }, 5000);\n\n  }\n  onChange = () => {\n    console.log('触发固定或者固定取消时的回调函数');\n  }\n  render() {\n    return (\n      <div className=\"outer-box\" id=\"outer-box\">\n          <Affix zIndex={2001} onChange={this.onChange} childrenRef={this.state.childrenRef}>\n              {this.state.dom}\n          </Affix>\n        <p>问世间、情为何物，只教生死相许？天南地北双飞客，老翅几回寒暑。欢乐趣，离别苦， 就中更有痴儿女。君应有语，渺万里层云，千山暮雪，只影向谁去？横汾路，寂寞当年箫鼓，荒烟依旧平楚。招魂楚些何嗟及， 山鬼暗谛风雨。天也妒，未信与，莺几燕子俱黄土。千秋万古，为留待骚人，狂歌痛饮，来访雁丘处。</p>\n\n      </div>\n    );\n  }\n\n}\n\n\n","desc":" affix下面的dom是可变化的时候","scss_code":"// body{\n//     height: 3000px;\n// }\n//   .content {\n//       width: 60%;\n//       background-image: linear-gradient(-180deg, #6873E8 0%, #277DF4 100%);\n//       font-size: 20px;\n//       color: #fff;\n//       text-align: center;\n//       /* line-height: 100px; */\n//     }\n//     .u-panel-title{\n//       height: 800px;\n//     }\n//     .button{\n//       height: 60px;\n//       width: 200px;\n//       background: pink;\n//       color:#fff;\n//       border-radius: 3px;\n//     }\n//     h1{\n//       margin:0;\n//       padding:0;\n//     }\n.navbar-container{\n    margin: 10px 15px;\n}"}]


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
