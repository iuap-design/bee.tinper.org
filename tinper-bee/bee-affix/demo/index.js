import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Button from 'bee-button';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';


const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var Demo4 = require("./demolist/Demo4");var DemoArray = [{"example":<Demo1 />,"title":" 基本的Affix,带有container","code":"/**\n*\n* @title 基本的Affix,带有container\n* @description 基本的Affix,带有container\n*\n*/\n\nimport React, { Component } from 'react';\nimport { Affix } from 'tinper-bee';\n\n\nclass Demo1 extends Component {\n  constructor(props){\n    super(props);\n    this.state = {\n      container:null,\n    }\n  }\n\n  componentDidMount(){\n    if(document.getElementById('outer-box')){\n      this.setState({container:document.getElementById('outer-box')})\n    }\n  }\n  render () {\n  \n    return (\n      <div className=\"outer-box\" id=\"outer-box\">\n        <label>某个div内的affix，container canHidden={true} zIndex={2001}</label>\n          <Affix container={this.state.container} canHidden={true} zIndex={2001}>\n            <div className='content'>\n              <span>affix</span>\n            </div>\n          </Affix>\n       \n      </div>\n    )\n  }\n}\n\n\n","desc":" 基本的Affix,带有container","scss_code":".content {\n  width: 150px;\n  height: 100px;\n  background-image: linear-gradient(-180deg, #6873E8 0%, #277DF4 100%);\n  font-size: 20px;\n  color: #fff;\n  text-align: center;\n  line-height: 100px;\n}\n.u-panel-title{\n  height: 800px;\n}\n#outer-box{\n  width: 700px;\n  height: 300px!important;\n  background: #1baede;\n}"},{"example":<Demo2 />,"title":" offsetTop Affix","code":"/**\n*\n* @title offsetTop Affix\n* @description 触发固定的距离屏幕顶部高度等于offetTop\n*\n*/\n\nimport React, { Component } from 'react';\nimport { Affix } from 'tinper-bee';\n\nclass Demo2 extends Component {\n  render () {\n    //请注意，这个container是为了适应tinperbee官网的布局特意设定，其他没有意外不需要传container，默认body\n    let container = document.getElementsByClassName('page-container u-container example')[0]? document.getElementsByClassName('page-container u-container example')[0] : document.getElementById('tinperBeeDemo');\n\n    return (\n      <div className=\"outer-box\" id=\"outer-box2\">\n        <label>基本的Affix，具体屏幕顶部距离等于offetTop `zIndex={2001} offsetTop=200`</label>\n        <Affix container={container} zIndex={2001} offsetTop={200}>\n          <div className='content'>\n            <span>affix</span>\n          </div>\n        </Affix>\n      </div>\n    )\n  }\n}\n\n\n","desc":" 触发固定的距离屏幕顶部高度等于offetTop","scss_code":".content {\n    width: 150px;\n    height: 100px;\n    background-image: linear-gradient(-180deg, #6873E8 0%, #277DF4 100%);\n    font-size: 20px;\n    color: #fff;\n    text-align: center;\n    line-height: 100px;\n  }"},{"example":<Demo3 />,"title":" horizontal Affix","code":"/**\n *\n * @title horizontal Affix\n * @description 基本的Affix，水平滚动affix距离左侧位置确定\n *\n */\n\n\nimport React, { Component } from 'react';\nimport { Affix } from 'tinper-bee';\n\nclass Demo3 extends Component {\n    render() {\n       //请注意，这个container是为了适应tinperbee官网的布局特意设定，其他没有意外不需要传container，默认body\n        let container = document.getElementsByClassName('page-container u-container example')[0]? document.getElementsByClassName('page-container u-container example')[0] : document.getElementById('tinperBeeDemo');\n\n        return (\n          <div className = \"outer-box\"id = \"outer-box3\" >\n            <label > 基本的Affix，水平滚动affix距离左侧位置确定 `zIndex={2001} horizontal offsetTop=450 ` </label> \n            <Affix container={container} zIndex={2001} horizontal={true} offsetTop = { 450 } >\n              <div className = 'content' >\n                <span > affix </span>\n              </div> \n            </Affix> \n          </div>\n        )\n    }\n}\n\n","desc":" 基本的Affix，水平滚动affix距离左侧位置确定","scss_code":".content {\n    width: 150px;\n    height: 100px;\n    background-image: linear-gradient(-180deg, #6873E8 0%, #277DF4 100%);\n    font-size: 20px;\n    color: #fff;\n    text-align: center;\n    line-height: 100px;\n  }"},{"example":<Demo4 />,"title":" affix下面的dom是可变化的时候","code":"/**\n*\n* @title affix下面的dom是可变化的时候\n* @description affix下面的dom是可变化的时候\n*\n*/\n\nimport React, { Component } from 'react';\nimport { Affix } from 'tinper-bee';\n\n\nclass Demo4 extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      dom: null,\n      childrenRef: null,\n    }\n  }\n\n  componentDidMount() {\n    if (document.getElementById('outer-box')) {\n      this.setState({\n        dom: <div style={{ backgroundColor: 'green', opacity: 0.2 }} ref={(ref) => { this.setState({ childrenRef: ref }) }} ><h1>affix</h1><h1>affix</h1></div>\n      });\n    }\n    setTimeout(() => {\n      this.setState({\n        dom: <div style={{ backgroundColor: 'green', opacity: 0.2 }} ref={(ref) => { this.setState({ childrenRef: ref }) }} ><h1>affix</h1><h1>affix</h1><h1>affix</h1><h1>affix</h1><h1>affix</h1><h1>affix</h1></div>\n      });\n    }, 16000);\n\n  }\n  onChange = () => {\n    console.log('hahah变化');\n  }\n  render() {\n    return (\n      <div className=\"outer-box\" id=\"outer-box\">\n        <label>affix下面的dom是可变化的时候</label>\n        <Affix  zIndex={2001} onChange={this.onChange} childrenRef={this.state.childrenRef}>\n              {this.state.dom}\n          </Affix>\n\n        <div className=\"button\">1222</div>\n\n      </div>\n    );\n  }\n\n}\n\n\n","desc":" affix下面的dom是可变化的时候","scss_code":"body{\n    height: 3000px;\n}\n  .content {\n      width: 60%;\n      background-image: linear-gradient(-180deg, #6873E8 0%, #277DF4 100%);\n      font-size: 20px;\n      color: #fff;\n      text-align: center;\n      /* line-height: 100px; */\n    }\n    .u-panel-title{\n      height: 800px;\n    }\n    .button{\n      height: 60px;\n      width: 200px;\n      background: pink;\n      color:#fff;\n      border-radius: 3px;\n    }\n    h1{\n      margin:0;\n      padding:0;\n    }\n   "}]


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
