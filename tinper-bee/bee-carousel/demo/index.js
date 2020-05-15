import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Drawer from 'bee-drawer';
import Clipboard from 'bee-clipboard'; 
import Button from '../src';



var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var Demo4 = require("./demolist/Demo4");var Demo5 = require("./demolist/Demo5");var DemoArray = [{"example":<Demo1 />,"title":" 基础轮播","code":"/**\n *\n * @title 基础轮播\n * @description 可定制页码\n */\nimport React from 'react';\nimport Carousel from 'bee-carousel';\n\nclass Demo1 extends React.Component {\n  render() {\n    const params = {\n      pagination: {   //配置页码参数 其中 renderBullet 是自定义页码\n        el: '.swiper-pagination',\n        clickable: true,  //可点击页码切换swiper\n         renderBullet: function (index, className) {\n\t        return '<span class=\"' + className + '\">' + (index + 1) + '</span>';\n\t      },\n        \n      },\n      navigation: {   //配置上一页下一页按钮\n        nextEl: '.swiper-button-next',\n        prevEl: '.swiper-button-prev'\n      },\n      spaceBetween: 20  //配置两页之前切换距离\n    }\n\n    return(\n    \t<div id=\"customized-pagination\">\n    \t\t<Carousel {...params}>\n\t        <div className=\"carousel-demo-1\"></div>\n\t        <div className=\"carousel-demo-2\"></div>\n\t        <div className=\"carousel-demo-3\"></div>\n\t        <div className=\"carousel-demo-4\"></div>\n\t        <div className=\"carousel-demo-5\"></div>\n      \t</Carousel>\n    \t</div>\n      \n    )\n  }\n}\n\nexport default Demo1;","desc":" 可定制页码"},{"example":<Demo2 />,"title":" 旋转轮播","code":"/**\n *\n * @title 旋转轮播\n * @description 切换动画是3d翻转形式\n *\n */\nimport React from 'react';\nimport Carousel from 'bee-carousel';\n\nclass Demo2 extends React.Component {\n  render() {\n    const params = {\n      pagination: {\n        el: '.swiper-pagination',\n        type: 'bullets',\n        clickable: true\n      },\n      navigation: {\n        nextEl: '.swiper-button-next',\n        prevEl: '.swiper-button-prev'\n      },\n      spaceBetween: 30,\n      effect: 'flip' //设置3d翻转\n    }\n\n    return(\n        <div className=\"carousel-demo-two\">\n            <Carousel {...params}>\n                <div className=\"carousel-demo-1\"></div>\n                <div className=\"carousel-demo-2\"></div>\n                <div className=\"carousel-demo-3\"></div>\n                <div className=\"carousel-demo-4\"></div>\n                <div className=\"carousel-demo-5\"></div>\n            </Carousel>\n        </div>\n    )\n  }\n}\n\nexport default Demo2;","desc":" 切换动画是3d翻转形式"},{"example":<Demo3 />,"title":" 进度条轮播","code":"\n/**\n *\n * @title 进度条轮播\n * @description 切换进度可在上边1️以进度条的形式展现\n *\n */\nimport React from 'react';\nimport Carousel from 'bee-carousel';\n\nclass Demo3 extends React.Component {\n  render() {\n    const params = {\n      pagination: {\n        el: '.swiper-pagination',\n        type: 'progressbar',  //将页码改成进度条形式\n      },\n      navigation: {\n        nextEl: '.swiper-button-next',\n        prevEl: '.swiper-button-prev'\n      }\n    }\n\n    return(\n        <div className=\"carousel-demo-three\">\n            <Carousel {...params}>\n                <div className=\"carousel-demo-1\"></div>\n                <div className=\"carousel-demo-2\"></div>\n                <div className=\"carousel-demo-3\"></div>\n                <div className=\"carousel-demo-4\"></div>\n                <div className=\"carousel-demo-5\"></div>\n            </Carousel>\n        </div>\n    )\n  }\n}\n\nexport default Demo3;","desc":" 切换进度可在上边1️以进度条的形式展现"},{"example":<Demo4 />,"title":" 触摸轮播","code":"\n/**\n *\n * @title 触摸轮播\n * @description 触发方式多用于手机端 最简单的触摸模式\n *\n */\nimport React from 'react';\nimport Carousel from 'bee-carousel';\n\nclass Demo4 extends React.Component {\n  render() {\n    const params = {\n      pagination: {\n        el: '.swiper-pagination',\n      },\n      spaceBetween: 30\n    }\n\n    return(\n        <div className=\"carousel-demo-four\">\n            <Carousel {...params}>\n                <div className=\"carousel-demo-1\"></div>\n                <div className=\"carousel-demo-2\"></div>\n                <div className=\"carousel-demo-3\"></div>\n                <div className=\"carousel-demo-4\"></div>\n                <div className=\"carousel-demo-5\"></div>\n            </Carousel>\n        </div>\n\n    )\n  }\n}\n\nexport default Demo4;","desc":" 触发方式多用于手机端 最简单的触摸模式"},{"example":<Demo5 />,"title":" 响应式轮播","code":"\n/**\n *\n * @title 响应式轮播\n * @description 根据滑动的力度，定位轮播当前active的进度\n */\nimport React from 'react';\nimport Carousel from 'bee-carousel';\n\nclass Demo5 extends React.Component {\n  render() {\n    const params = {\n      pagination: {\n        el: '.swiper-pagination',\n        clickable: true,\n      },\n      slidesPerView: 5,  //单屏显示几个slider\n      spaceBetween: 50,\n      breakpoints: {  //设置不同尺寸下 单屏显示几个slider \n        1024: {\n          slidesPerView: 4,\n          spaceBetween: 40\n        },\n        768: {\n          slidesPerView: 3,\n          spaceBetween: 30\n        },\n        640: {\n          slidesPerView: 2,\n          spaceBetween: 20\n        },\n        320: {\n          slidesPerView: 1,\n          spaceBetween: 10\n        }\n      }\n    }\n\n    return(\n        <div className=\"carousel-demo-five\">\n            <Carousel {...params}>\n                <div className=\"carousel-demo-1\"></div>\n                <div className=\"carousel-demo-2\"></div>\n                <div className=\"carousel-demo-3\"></div>\n                <div className=\"carousel-demo-4\"></div>\n                <div className=\"carousel-demo-5\"></div>\n                <div className=\"carousel-demo-1\"></div>\n                <div className=\"carousel-demo-2\"></div>\n                <div className=\"carousel-demo-3\"></div>\n                <div className=\"carousel-demo-4\"></div>\n                <div className=\"carousel-demo-5\"></div>\n            </Carousel>\n        </div>\n    )\n  }\n}\n\nexport default Demo5;","desc":" 根据滑动的力度，定位轮播当前active的进度"}]


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
