import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Drawer from 'bee-drawer';
import Clipboard from 'bee-clipboard'; 
import Button from '../src';



var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var DemoArray = [{"example":<Demo1 />,"title":" 单个图片查看","code":"/**\n*\n* @title 单个图片查看\n* @description 单个图片查看\n*\n*/\nimport React, { Component } from 'react';\nimport Viewer from 'bee-viewer'\n\nclass Demo1 extends Component {\n\n    shown=(e)=>{\n        console.log(e,'shwon')\n    }\n    hidden=(e)=>{\n        console.log(e,'hidden')\n    }\n    render () {\n        return (\n            <div className='demo'>\n                <Viewer shown={this.shown} hidden={this.hidden}>\n                    <img id=\"image\" src='http://design.yonyoucloud.com/static/bee.tinper.org-demo/swiper-demo-1-min.jpg' alt=\"Picture\"/>\n                </Viewer>\n            </div>\n        )\n    }\n}\nexport default Demo1","desc":" 单个图片查看"},{"example":<Demo2 />,"title":" 图片列表查看","code":"/**\n*\n* @title 图片列表查看\n* @description 图片列表查看。 img 的 data-original 写高清大图地址。src写缩略图地址\n*\n*/\nimport React, { Component } from 'react';\nimport Viewer from 'bee-viewer'\n\nclass Demo2 extends Component {\n\n    render () {\n        return (\n            <div className='demo'>\n                <Viewer>\n                    <div>\n                        <img data-original=\"http://design.yonyoucloud.com/static/bee.tinper.org-demo/swiper-demo-5-min.jpg\" src='http://design.yonyoucloud.com/static/bee.tinper.org-demo/swiper-demo-1-min.jpg' alt=\"Picture\"/>\n                        <img data-original=\"http://design.yonyoucloud.com/static/bee.tinper.org-demo/swiper-demo-4-min.jpg\" src='http://design.yonyoucloud.com/static/bee.tinper.org-demo/swiper-demo-2-min.jpg' alt=\"Picture\"/>\n                        <img data-original=\"http://design.yonyoucloud.com/static/bee.tinper.org-demo/swiper-demo-3-min.jpg\" src='http://design.yonyoucloud.com/static/bee.tinper.org-demo/swiper-demo-3-min.jpg' alt=\"Picture\"/>\n                        <img data-original=\"http://design.yonyoucloud.com/static/bee.tinper.org-demo/swiper-demo-2-min.jpg\" src='http://design.yonyoucloud.com/static/bee.tinper.org-demo/swiper-demo-4-min.jpg' alt=\"Picture\"/>\n                        <img data-original=\"http://design.yonyoucloud.com/static/bee.tinper.org-demo/swiper-demo-1-min.jpg\" src='http://design.yonyoucloud.com/static/bee.tinper.org-demo/swiper-demo-5-min.jpg' alt=\"Picture\"/>\n                    </div>\n                </Viewer>\n            </div>\n            \n        )\n    }\n}\nexport default Demo2;","desc":" 图片列表查看。 img 的 data-original 写高清大图地址。src写缩略图地址"},{"example":<Demo3 />,"title":" 异步加载图片","code":"/**\n*\n* @title 异步加载图片\n* @description 设置  asyncLoad={true} \n*\n*/\nimport React, { Component } from 'react';\nimport { Button } from 'tinper-bee';\nimport Viewer from 'bee-viewer';\n\nclass Demo3 extends Component {\n    constructor(props){\n        super(props);\n        this.state = {\n            pictureSrc: [],\n        }\n    }\n\n    get = ()=>{\n        fetch('https://mock.yonyoucloud.com/mock/360/viewer/getPic')\n        .then(response => response.json())\n        .then(data => {\n            console.log(data)\n            this.setState({\n                pictureSrc: data.pictureSrc\n            })\n        })\n    }\n\n    loadPic=()=>{\n        window.setTimeout(()=>{\n            this.setState({\n                pictureSrc: [\n                    'http://design.yonyoucloud.com/static/bee.tinper.org-demo/swiper-demo-1-min.jpg'\n                ]\n            })\n        },100)\n    }\n\n    componentWillMount(){\n        this.get();\n    }\n    addPicture=()=>{\n        let pictureSrc = this.state.pictureSrc;\n        pictureSrc.push('http://design.yonyoucloud.com/static/bee.tinper.org-demo/swiper-demo-2-min.jpg');\n        this.setState({\n            pictureSrc\n        })\n    }\n\n    render () {\n        return (\n            <div className='demo'>\n                <Button colors=\"primary\" onClick={this.addPicture} style={{'marginBottom':'10px'}}>点击新增图片</Button>\n                <Viewer asyncLoad={true} >\n                    <div>\n                        {this.state.pictureSrc?\n                            this.state.pictureSrc.map((item,index) => {\n                                return (<img  key={index} src={item} alt=\"Picture\"/>)\n                            }) :null\n                        }\n                    </div>\n                </Viewer>\n            </div>\n            \n        )\n    }\n}\nexport default Demo3;","desc":" 设置  asyncLoad={true} "}]


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
