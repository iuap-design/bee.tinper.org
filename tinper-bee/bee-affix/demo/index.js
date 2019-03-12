import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Button from 'bee-button';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';


const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var Demo4 = require("./demolist/Demo4");var DemoArray = [{"example":<Demo1 />,"title":" 基本的Affix,带有container","code":"/**\r\n*\r\n* @title 基本的Affix,带有container\r\n* @description 基本的Affix,带有container\r\n*\r\n*/\r\n\r\nimport React, { Component } from 'react';\r\n\nimport { Affix, Button } from 'tinper-bee';\r\n\r\n\r\nclass Demo1 extends Component {\r\n  constructor(props){\r\n    super(props);\r\n    this.state = {\r\n      container:null,\r\n    }\r\n  }\r\n\r\n  componentDidMount(){\r\n    if(document.getElementById('outer-box')){\r\n      this.setState({container:document.getElementById('outer-box')})\r\n    }\r\n  }\r\n  render () {\r\n  \r\n    return (\r\n      <div className=\"demo1\">\r\n        <div>某个div内的affix，container canHidden={true} zIndex={2001}</div>\r\n        <div className=\"outer-box checkered stripes\" id=\"outer-box\">\r\n          <Affix container={this.state.container} canHidden={true} zIndex={2001}>\r\n            <Button colors=\"primary\">affix in container</Button>\r\n          </Affix>\r\n        </div>\r\n      </div>\r\n    )\r\n  }\r\n}\r\n\r\n\r\n","desc":" 基本的Affix,带有container","scss_code":"// .content {\r\n//   width: 150px;\r\n//   height: 100px;\r\n//   background-image: linear-gradient(-180deg, #6873E8 0%, #277DF4 100%);\r\n//   font-size: 20px;\r\n//   color: #fff;\r\n//   text-align: center;\r\n//   line-height: 100px;\r\n// }\r\n// .u-panel-title{\r\n//   height: 800px;\r\n// }\r\n// #outer-box{\r\n//   width: 700px;\r\n//   height: 300px!important;\r\n//   background: #1baede;\r\n// }\r\n.stripes {   \r\n  width: 500px;   \r\n  height: 400px!important;;   \r\n  float: left;   \r\n     \r\n  margin: 10px;   \r\n     \r\n  -webkit-background-size: 16px 16px;   \r\n  -moz-background-size: 16px 16px;   \r\n  background-size: 16px 16px; /* 控制条纹的大小 */  \r\n     \r\n  -moz-box-shadow: 1px 1px 8px #ccc;   \r\n  -webkit-box-shadow: 1px 1px 8px #ccc;   \r\n  box-shadow: 1px 1px 8px #ccc;   \r\n}  \r\n.checkered {   \r\n  background-image: -webkit-gradient(linear, 0 0, 100% 100%, color-stop(.25, #ccc), color-stop(.25, transparent), to(transparent)),   \r\n                    -webkit-gradient(linear, 0 100%, 100% 0, color-stop(.25, #ccc), color-stop(.25, transparent), to(transparent)),   \r\n                    -webkit-gradient(linear, 0 0, 100% 100%, color-stop(.75, transparent), color-stop(.75, #ccc)),   \r\n                    -webkit-gradient(linear, 0 100%, 100% 0, color-stop(.75, transparent), color-stop(.75, #ccc));   \r\n  background-image: -moz-linear-gradient(45deg, #ccc 25%, transparent 25%, transparent),   \r\n                    -moz-linear-gradient(-45deg, #ccc 25%, transparent 25%, transparent),   \r\n                    -moz-linear-gradient(45deg, transparent 75%, #ccc 75%),   \r\n                    -moz-linear-gradient(-45deg, transparent 75%, #ccc 75%);   \r\n  background-image: -o-linear-gradient(45deg, #ccc 25%, transparent 25%, transparent),   \r\n                    -o-linear-gradient(-45deg, #ccc 25%, transparent 25%, transparent),   \r\n                    -o-linear-gradient(45deg, transparent 75%, #ccc 75%),   \r\n                    -o-linear-gradient(-45deg, transparent 75%, #ccc 75%);   \r\n  background-image: linear-gradient(45deg, #ccc 25%, transparent 25%, transparent),   \r\n                    linear-gradient(-45deg, #ccc 25%, transparent 25%, transparent),   \r\n                    linear-gradient(45deg, transparent 75%, #ccc 75%),   \r\n                    linear-gradient(-45deg, transparent 75%, #ccc 75%);   \r\n}  "},{"example":<Demo2 />,"title":" offsetTop Affix","code":"/**\r\n*\r\n* @title offsetTop Affix\r\n* @description 触发固定的距离屏幕顶部高度等于offetTop\r\n*\r\n*/\r\n\r\nimport React, { Component } from 'react';\r\n\nimport { Affix, Button } from 'tinper-bee';\r\n\r\nclass Demo2 extends Component {\r\n  render () {\r\n    //请注意，这个container是为了适应tinperbee官网的布局特意设定，其他没有意外不需要传container，默认body\r\n    let container = document.getElementsByClassName('page-container u-container example')[0]? document.getElementsByClassName('page-container u-container example')[0] : document.getElementById('tinperBeeDemo');\r\n\r\n    return (\r\n      <div className=\"demo2\" id=\"outer-box2\">\r\n        <label>基本的Affix，具体屏幕顶部距离等于offetTop `zIndex={2001} offsetTop=200`</label>\r\n        <Affix container={container} zIndex={2001} offsetTop={120}>\r\n          <Button colors=\"primary\">120px to affix top</Button>\r\n        </Affix>\r\n      </div>\r\n    )\r\n  }\r\n}\r\n\r\n\r\n","desc":" 触发固定的距离屏幕顶部高度等于offetTop","scss_code":"// .content {\r\n//     width: 150px;\r\n//     height: 100px;\r\n//     background-image: linear-gradient(-180deg, #6873E8 0%, #277DF4 100%);\r\n//     font-size: 20px;\r\n//     color: #fff;\r\n//     text-align: center;\r\n//     line-height: 100px;\r\n//   }"},{"example":<Demo3 />,"title":" horizontal Affix","code":"/**\r\n *\r\n * @title horizontal Affix\r\n * @description 基本的Affix，水平滚动affix距离左侧位置确定\r\n *\r\n */\r\n\r\n\r\nimport React, { Component } from 'react';\r\n\nimport { Affix, Button } from 'tinper-bee';\r\n\r\nclass Demo3 extends Component {\r\n    render() {\r\n       //请注意，这个container是为了适应tinperbee官网的布局特意设定，其他没有意外不需要传container，默认body\r\n        let container = document.getElementsByClassName('page-container u-container example')[0]? document.getElementsByClassName('page-container u-container example')[0] : document.getElementById('tinperBeeDemo');\r\n\r\n        return (\r\n          <div className = \"demo3\"id = \"outer-box3\" >\r\n            <label > 基本的Affix，水平滚动affix距离左侧位置确定 `zIndex={2001} horizontal offsetTop=450 ` </label> \r\n            <div className=\"affix-container\">\r\n              <Affix container={container} zIndex={2001} horizontal={true} offsetTop = { 450 } >\r\n                <Button colors=\"primary\">450px to affix top</Button>\r\n              </Affix> \r\n            </div>\r\n          </div>\r\n        )\r\n    }\r\n}\r\n\r\n","desc":" 基本的Affix，水平滚动affix距离左侧位置确定","scss_code":"// .content {\r\n//     width: 150px;\r\n//     height: 100px;\r\n//     background-image: linear-gradient(-180deg, #6873E8 0%, #277DF4 100%);\r\n//     font-size: 20px;\r\n//     color: #fff;\r\n//     text-align: center;\r\n//     line-height: 100px;\r\n//   }\r\n.demo3{\r\n  width: 2000px;\r\n  height: 400px;\r\n  .affix-container{\r\n    width: 200px;\r\n    margin-left: 100px;\r\n    margin-top: 300px;\r\n  }\r\n}"},{"example":<Demo4 />,"title":" affix下面的dom是可变化的时候","code":"/**\r\n*\r\n* @title affix下面的dom是可变化的时候\r\n* @description affix下面的dom是可变化的时候\r\n*\r\n*/\r\n\r\nimport React, { Component } from 'react';\r\n\nimport { Affix, Button } from 'tinper-bee';\r\n\r\n\r\nclass Demo4 extends Component {\r\n  constructor(props) {\r\n    super(props);\r\n    this.state = {\r\n      dom: null,\r\n      childrenRef: null,\r\n    }\r\n  }\r\n\r\n  componentDidMount() {\r\n    if (document.getElementById('outer-box')) {\r\n      this.setState({\r\n        dom: <div style={{ backgroundColor: 'lightgrey', opacity: 0.4 }} ref={(ref) => { this.setState({ childrenRef: ref }) }} ><h1>affix</h1><h1>affix</h1></div>\r\n      });\r\n    }\r\n    setTimeout(() => {\r\n      this.setState({\r\n        dom: <div style={{ backgroundColor: 'lightgrey', opacity: 0.4 }} ref={(ref) => { this.setState({ childrenRef: ref }) }} ><h1>affix</h1><h1>affix</h1><h1>affix</h1><h1>affix</h1><h1>affix</h1><h1>affix</h1></div>\r\n      });\r\n    }, 5000);\r\n\r\n  }\r\n  onChange = () => {\r\n    console.log('触发固定或者固定取消时的回调函数');\r\n  }\r\n  render() {\r\n    return (\r\n      <div className=\"outer-box\" id=\"outer-box\">\r\n          <Affix zIndex={2001} onChange={this.onChange} childrenRef={this.state.childrenRef}>\r\n              {this.state.dom}\r\n          </Affix>\r\n        <p>问世间、情为何物，只教生死相许？天南地北双飞客，老翅几回寒暑。欢乐趣，离别苦， 就中更有痴儿女。君应有语，渺万里层云，千山暮雪，只影向谁去？横汾路，寂寞当年箫鼓，荒烟依旧平楚。招魂楚些何嗟及， 山鬼暗谛风雨。天也妒，未信与，莺几燕子俱黄土。千秋万古，为留待骚人，狂歌痛饮，来访雁丘处。</p>\r\n\r\n      </div>\r\n    );\r\n  }\r\n\r\n}\r\n\r\n\r\n","desc":" affix下面的dom是可变化的时候","scss_code":"// body{\r\n//     height: 3000px;\r\n// }\r\n//   .content {\r\n//       width: 60%;\r\n//       background-image: linear-gradient(-180deg, #6873E8 0%, #277DF4 100%);\r\n//       font-size: 20px;\r\n//       color: #fff;\r\n//       text-align: center;\r\n//       /* line-height: 100px; */\r\n//     }\r\n//     .u-panel-title{\r\n//       height: 800px;\r\n//     }\r\n//     .button{\r\n//       height: 60px;\r\n//       width: 200px;\r\n//       background: pink;\r\n//       color:#fff;\r\n//       border-radius: 3px;\r\n//     }\r\n//     h1{\r\n//       margin:0;\r\n//       padding:0;\r\n//     }\r\n.navbar-container{\r\n    margin: 10px 15px;\r\n}"}]


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
