
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Button from 'bee-button';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Viewer from '../src';


const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var DemoArray = [{"example":<Demo1 />,"title":" 单个图片查看","code":"/**\n*\n* @title 单个图片查看\n* @description 单个图片查看\n*\n*/\nimport React, { Component } from 'react';\nimport { Viewer } from 'tinper-bee';\n\nclass Demo1 extends Component {\n\n    shown=(e)=>{\n        console.log(e,'shwon')\n    }\n    hidden=(e)=>{\n        console.log(e,'hidden')\n    }\n    render () {\n        return (\n            <div className='demo'>\n                <Viewer shown={this.shown} hidden={this.hidden}>\n                    <img id=\"image\" src='http://design.yonyoucloud.com/static/bee.tinper.org-demo/swiper-demo-1-min.jpg' alt=\"Picture\"/>\n                </Viewer>\n            </div>\n        )\n    }\n}\n","desc":" 单个图片查看"},{"example":<Demo2 />,"title":" 图片列表查看","code":"/**\n*\n* @title 图片列表查看\n* @description 图片列表查看。 img 的 data-original 写高清大图地址。src写缩略图地址\n*\n*/\nimport React, { Component } from 'react';\nimport { Viewer } from 'tinper-bee';\n\nclass Demo2 extends Component {\n\n    render () {\n        return (\n            <div className='demo'>\n                <Viewer>\n                    <div>\n                        <img data-original=\"http://design.yonyoucloud.com/static/bee.tinper.org-demo/swiper-demo-5-min.jpg\" src='http://design.yonyoucloud.com/static/bee.tinper.org-demo/swiper-demo-1-min.jpg' alt=\"Picture\"/>\n                        <img data-original=\"http://design.yonyoucloud.com/static/bee.tinper.org-demo/swiper-demo-4-min.jpg\" src='http://design.yonyoucloud.com/static/bee.tinper.org-demo/swiper-demo-2-min.jpg' alt=\"Picture\"/>\n                        <img data-original=\"http://design.yonyoucloud.com/static/bee.tinper.org-demo/swiper-demo-3-min.jpg\" src='http://design.yonyoucloud.com/static/bee.tinper.org-demo/swiper-demo-3-min.jpg' alt=\"Picture\"/>\n                        <img data-original=\"http://design.yonyoucloud.com/static/bee.tinper.org-demo/swiper-demo-2-min.jpg\" src='http://design.yonyoucloud.com/static/bee.tinper.org-demo/swiper-demo-4-min.jpg' alt=\"Picture\"/>\n                        <img data-original=\"http://design.yonyoucloud.com/static/bee.tinper.org-demo/swiper-demo-1-min.jpg\" src='http://design.yonyoucloud.com/static/bee.tinper.org-demo/swiper-demo-5-min.jpg' alt=\"Picture\"/>\n                    </div>\n                </Viewer>\n            </div>\n            \n        )\n    }\n}\n","desc":" 图片列表查看。 img 的 data-original 写高清大图地址。src写缩略图地址"},{"example":<Demo3 />,"title":" 异步加载图片","code":"/**\n*\n* @title 异步加载图片\n* @description 设置  asyncLoad={true} \n*\n*/\nimport React, { Component } from 'react';\nimport { Viewer, Button } from 'tinper-bee';\n\nclass Demo3 extends Component {\n    constructor(props){\n        super(props);\n        this.state = {\n            pictureSrc: [],\n        }\n    }\n\n    get = ()=>{\n        fetch('https://mock.yonyoucloud.com/mock/360/viewer/getPic')\n        .then(response => response.json())\n        .then(data => {\n            console.log(data)\n            this.setState({\n                pictureSrc: data.pictureSrc\n            })\n        })\n    }\n\n    loadPic=()=>{\n        window.setTimeout(()=>{\n            this.setState({\n                pictureSrc: [\n                    'http://design.yonyoucloud.com/static/bee.tinper.org-demo/swiper-demo-1-min.jpg'\n                ]\n            })\n        },100)\n    }\n\n    componentWillMount(){\n        this.get();\n    }\n    addPicture=()=>{\n        let pictureSrc = this.state.pictureSrc;\n        pictureSrc.push('http://design.yonyoucloud.com/static/bee.tinper.org-demo/swiper-demo-2-min.jpg');\n        this.setState({\n            pictureSrc\n        })\n    }\n\n    render () {\n        return (\n            <div className='demo'>\n                <Button colors=\"primary\" onClick={this.addPicture} style={{'marginBottom':'10px'}}>点击新增图片</Button>\n                <Viewer asyncLoad={true} >\n                    <div>\n                        {this.state.pictureSrc?\n                            this.state.pictureSrc.map((item,index) => {\n                                return (<img  key={index} src={item} alt=\"Picture\"/>)\n                            }) :null\n                        }\n                    </div>\n                </Viewer>\n            </div>\n            \n        )\n    }\n}\n","desc":" 设置  asyncLoad={true} "}]


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
