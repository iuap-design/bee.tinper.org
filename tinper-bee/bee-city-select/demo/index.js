
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Button from 'bee-button';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CitySelect from '../src';


const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var DemoArray = [{"example":<Demo1 />,"title":" 地区级联","code":"/**\r\n*\r\n* @title 地区级联\r\n* @description 中国地区级联\r\n*\r\n*/\r\n\r\nimport React, { Component } from 'react';\r\nimport ReactDOM from 'react-dom';\r\n\nimport { CitySelect, Button  } from 'tinper-bee';\r\n\r\nclass Demo1 extends Component {\r\n\r\n\tconstructor() {\r\n\t\tsuper();\r\n\t\tthis.state = {\r\n\t\t\tdefaultValue:{ province:'北京',city:'北京',area:'东城区'},\r\n\t\t\tvalue:null\r\n\t\t}\r\n\t}\r\n\r\n\tonChange=(obj)=>{\r\n\t\tconsole.log(obj)\r\n\t}\r\n\r\n\tbtnOnClick=()=>{\r\n\t\tthis.setState({\r\n\t\t\tvalue:{ province:'山西',city:'长治',area:'长治县'}\r\n\t\t})\r\n\t}\r\n\r\n\trender () {\r\n\t\tlet value = { province:'山西',city:'长治',area:'长治县'};\r\n\t\treturn (\r\n\t\t\t<div>\r\n\t\t\t\t<CitySelect ref='city' onChange={this.onChange} defaultValue={this.state.defaultValue} value={value}/>\r\n\t\t\t\t<Button shape=\"border\" onClick={this.btnOnClick} style={{marginTop:\"10px\"}}>代码设置数据</Button>\r\n\t\t\t</div>\r\n\t)}\r\n}\r\n","desc":" 中国地区级联"},{"example":<Demo2 />,"title":" 切换语言","code":"/**\r\n*\r\n* @title 切换语言\r\n* @description 目前支持三种语言  zh_CN 中文简体(默认)、zh_TW 中文繁体、en_US 英文\r\n*\r\n*/\r\n\r\nimport React, { Component } from 'react';\r\nimport ReactDOM from 'react-dom';\r\nimport { CitySelect } from 'tinper-bee';\r\n\r\nclass Demo2 extends Component {\r\n\r\n\tonChange=(obj)=>{\r\n\t\tconsole.log(obj)\r\n\t}\r\n\trender () {\r\n\t\treturn (\r\n\t\t\t<div>\r\n\t\t\t\t<CitySelect lang='en_US' onChange={this.onChange}/>\r\n\t\t\t\t<div style={{'height':'20px'}}/>\r\n\t\t\t\t<CitySelect lang='zh_TW' onChange={this.onChange}/>\r\n\t\t\t</div>\r\n\t)}\r\n}\r\n","desc":" 目前支持三种语言  zh_CN 中文简体(默认)、zh_TW 中文繁体、en_US 英文"}]


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
        const { title, example, code, desc  } = this.props;
        let caret = this.state.open ? CARETUP : CARET;
        let text = this.state.open ? "隐藏代码" : "查看代码";

        const footer = (
            <Button shape="block" onClick={ this.handleClick }>
                { caret }
                { text }
            </Button>
        );
        return (
            <Col md={12} id={title.trim()} >
                <h3>{ title }</h3>
                <p>{ desc }</p>
                <Panel collapsible headerContent expanded={ this.state.open } colors='bordered' header={ example } footer={footer} footerStyle = {{padding: 0}}>
                    <pre><code className="hljs javascript">{ code }</code></pre>
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
                            <Demo example= {child.example} title= {child.title} code= {child.code} desc= {child.desc} key= {index}/>
                        )

                    })}
                </Row>
        )
    }
}

ReactDOM.render(<DemoGroup/>, document.getElementById('tinperBeeDemo'));
