import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Drawer from 'bee-drawer';
import Clipboard from 'bee-clipboard'; 
import Button from '../src';



var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var DemoArray = [{"example":<Demo1 />,"title":" 单个图片查看","code":"/**\r\n*\r\n* @title 单个图片查看\r\n* @description 单个图片查看\r\n*\r\n*/\r\nimport React, { Component } from 'react';\r\nimport { Viewer } from 'tinper-bee';\r\n\r\nclass Demo1 extends Component {\r\n\r\n    shown=(e)=>{\r\n        console.log(e,'shwon')\r\n    }\r\n    hidden=(e)=>{\r\n        console.log(e,'hidden')\r\n    }\r\n    render () {\r\n        return (\r\n            <div className='demo'>\r\n                <Viewer shown={this.shown} hidden={this.hidden}>\r\n                    <img id=\"image\" src='http://design.yonyoucloud.com/static/bee.tinper.org-demo/swiper-demo-1-min.jpg' alt=\"Picture\"/>\r\n                </Viewer>\r\n            </div>\r\n        )\r\n    }\r\n}\r\n","desc":" 单个图片查看"},{"example":<Demo2 />,"title":" 图片列表查看","code":"/**\r\n*\r\n* @title 图片列表查看\r\n* @description 图片列表查看。 img 的 data-original 写高清大图地址。src写缩略图地址\r\n*\r\n*/\r\nimport React, { Component } from 'react';\r\nimport { Viewer } from 'tinper-bee';\r\n\r\nclass Demo2 extends Component {\r\n\r\n    render () {\r\n        return (\r\n            <div className='demo'>\r\n                <Viewer>\r\n                    <div>\r\n                        <img data-original=\"http://design.yonyoucloud.com/static/bee.tinper.org-demo/swiper-demo-5-min.jpg\" src='http://design.yonyoucloud.com/static/bee.tinper.org-demo/swiper-demo-1-min.jpg' alt=\"Picture\"/>\r\n                        <img data-original=\"http://design.yonyoucloud.com/static/bee.tinper.org-demo/swiper-demo-4-min.jpg\" src='http://design.yonyoucloud.com/static/bee.tinper.org-demo/swiper-demo-2-min.jpg' alt=\"Picture\"/>\r\n                        <img data-original=\"http://design.yonyoucloud.com/static/bee.tinper.org-demo/swiper-demo-3-min.jpg\" src='http://design.yonyoucloud.com/static/bee.tinper.org-demo/swiper-demo-3-min.jpg' alt=\"Picture\"/>\r\n                        <img data-original=\"http://design.yonyoucloud.com/static/bee.tinper.org-demo/swiper-demo-2-min.jpg\" src='http://design.yonyoucloud.com/static/bee.tinper.org-demo/swiper-demo-4-min.jpg' alt=\"Picture\"/>\r\n                        <img data-original=\"http://design.yonyoucloud.com/static/bee.tinper.org-demo/swiper-demo-1-min.jpg\" src='http://design.yonyoucloud.com/static/bee.tinper.org-demo/swiper-demo-5-min.jpg' alt=\"Picture\"/>\r\n                    </div>\r\n                </Viewer>\r\n            </div>\r\n            \r\n        )\r\n    }\r\n}\r\n","desc":" 图片列表查看。 img 的 data-original 写高清大图地址。src写缩略图地址"},{"example":<Demo3 />,"title":" 异步加载图片","code":"/**\r\n*\r\n* @title 异步加载图片\r\n* @description 设置  asyncLoad={true} \r\n*\r\n*/\r\nimport React, { Component } from 'react';\r\nimport { Viewer, Button } from 'tinper-bee';\r\n\n\r\nclass Demo3 extends Component {\r\n    constructor(props){\r\n        super(props);\r\n        this.state = {\r\n            pictureSrc: [],\r\n        }\r\n    }\r\n\r\n    get = ()=>{\r\n        fetch('https://mock.yonyoucloud.com/mock/360/viewer/getPic')\r\n        .then(response => response.json())\r\n        .then(data => {\r\n            console.log(data)\r\n            this.setState({\r\n                pictureSrc: data.pictureSrc\r\n            })\r\n        })\r\n    }\r\n\r\n    loadPic=()=>{\r\n        window.setTimeout(()=>{\r\n            this.setState({\r\n                pictureSrc: [\r\n                    'http://design.yonyoucloud.com/static/bee.tinper.org-demo/swiper-demo-1-min.jpg'\r\n                ]\r\n            })\r\n        },100)\r\n    }\r\n\r\n    componentWillMount(){\r\n        this.get();\r\n    }\r\n    addPicture=()=>{\r\n        let pictureSrc = this.state.pictureSrc;\r\n        pictureSrc.push('http://design.yonyoucloud.com/static/bee.tinper.org-demo/swiper-demo-2-min.jpg');\r\n        this.setState({\r\n            pictureSrc\r\n        })\r\n    }\r\n\r\n    render () {\r\n        return (\r\n            <div className='demo'>\r\n                <Button colors=\"primary\" onClick={this.addPicture} style={{'marginBottom':'10px'}}>点击新增图片</Button>\r\n                <Viewer asyncLoad={true} >\r\n                    <div>\r\n                        {this.state.pictureSrc?\r\n                            this.state.pictureSrc.map((item,index) => {\r\n                                return (<img  key={index} src={item} alt=\"Picture\"/>)\r\n                            }) :null\r\n                        }\r\n                    </div>\r\n                </Viewer>\r\n            </div>\r\n            \r\n        )\r\n    }\r\n}\r\n","desc":" 设置  asyncLoad={true} "}]


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
