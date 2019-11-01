import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Drawer from 'bee-drawer';
import Clipboard from 'bee-clipboard'; 



var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var DemoArray = [{"example":<Demo1 />,"title":" 基本用法","code":"/**\n*\n* @title 基本用法\n* @description 使用 <SvgIcon /> 标签声明组件，指定图标对应的 type 属性。\n*\n*/\nimport React, { Component } from 'react';\nimport { Clipboard, Message, SvgIcon } from 'tinper-bee';\n\n\nfunction success (content) {\n    Message.create({ content: content, color: \"successlight\" });\n}\n\nfunction SvgIconItem (props) {\n    let { type, classString } = props;\n    let content = <code>{`<SvgIcon type=${type} />  copied `}</code>;\n    return (\n        <li>\n            <SvgIcon type={type} />\n            <div className=\"name\">{type}</div>\n            <div className=\"usage\" id={classString}>{`<SvgIcon type=${type} />`}</div>\n            <Clipboard action=\"copy\" target={`#${classString}`} success={() => success(content)} />\n        </li>\n    )\n}\n\nclass Demo1 extends Component {\n    render () {\n        return (\n            <div className=\"tinper-icon-demo\">\n                <ul className=\"icon_lists\">\n                    <SvgIconItem type=\"audio\" classString=\"uftype-audio\" />\n                    <SvgIconItem type=\"excel\" classString=\"uftype-excel\" />\n                    <SvgIconItem type=\"ai\" classString=\"uftype-ai\" />\n                    <SvgIconItem type=\"gdoc\" classString=\"uftype-gdoc\" />\n                    <SvgIconItem type=\"flash\" classString=\"uftype-flash\" />\n                    <SvgIconItem type=\"gform\" classString=\"uftype-gform\" />\n                    <SvgIconItem type=\"html\" classString=\"uftype-html\" />\n                    <SvgIconItem type=\"csv\" classString=\"uftype-csv\" />\n                    <SvgIconItem type=\"slide\" classString=\"uftype-slide\" />\n                    <SvgIconItem type=\"box_notes\" classString=\"uftype-box_notes\" />\n                    <SvgIconItem type=\"webex\" classString=\"uftype-webex\" />\n                    <SvgIconItem type=\"eps\" classString=\"uftype-eps\" />\n                    <SvgIconItem type=\"psd\" classString=\"uftype-psd\" />\n                    <SvgIconItem type=\"pack\" classString=\"uftype-pack\" />\n                    <SvgIconItem type=\"gpres\" classString=\"uftype-gpres\" />\n                    <SvgIconItem type=\"exe\" classString=\"uftype-exe\" />\n                    <SvgIconItem type=\"txt\" classString=\"uftype-txt\" />\n                    <SvgIconItem type=\"unknown\" classString=\"uftype-unknown\" />\n                    <SvgIconItem type=\"attachment\" classString=\"uftype-attachment\" />\n                    <SvgIconItem type=\"pages\" classString=\"uftype-pages\" />\n                    <SvgIconItem type=\"video\" classString=\"uftype-video\" />\n                    <SvgIconItem type=\"gdocs\" classString=\"uftype-gdocs\" />\n                    <SvgIconItem type=\"ppt\" classString=\"uftype-ppt\" />\n                    <SvgIconItem type=\"word\" classString=\"uftype-word\" />\n                    <SvgIconItem type=\"pdf\" classString=\"uftype-pdf\" />\n                    <SvgIconItem type=\"image\" classString=\"uftype-image\" />\n                    <SvgIconItem type=\"stypi\" classString=\"uftype-stypi\" />\n                    <SvgIconItem type=\"keynote\" classString=\"uftype-keynote\" />\n                    <SvgIconItem type=\"gsheet\" classString=\"uftype-gsheet\" />\n                    <SvgIconItem type=\"visio\" classString=\"uftype-visio\" />\n                    <SvgIconItem type=\"zip\" classString=\"uftype-zip\" />\n                    <SvgIconItem type=\"xml\" classString=\"uftype-xml\" />\n                    <SvgIconItem type=\"rtf\" classString=\"uftype-rtf\" />\n                </ul>\n            </div >\n        )\n    }\n}\nexport default Demo1","desc":" 使用 <SvgIcon /> 标签声明组件，指定图标对应的 type 属性。","scss_code":".tinper-icon-demo .uftype{\r\n    font-size: 42px;\r\n    line-height: 100px;\r\n    margin: 10px 0;\r\n    color: #333;\r\n    -webkit-transition: font-size 0.25s ease-out 0s;\r\n    -moz-transition: font-size 0.25s ease-out 0s;\r\n    transition: font-size 0.25s ease-out 0s;\r\n}\r\n.tinper-icon-demo .uftype:hover{\r\n    font-size: 48px;\r\n}\r\n.icon_lists:after {\r\n    clear:both;\r\n    display:block;\r\n    visibility: hidden;\r\n    content:'.';\r\n}\r\n.icon_lists li {\r\n    position: relative;\r\n    float: left;\r\n    width: 100px;\r\n    height: 150px;\r\n    text-align: center;\r\n    list-style: none !important;\r\n    cursor: pointer;\r\n    border-radius: 3px;\r\n    .u-clipboard{\r\n        position: absolute;\r\n        top: 4px;\r\n        right: 4px;\r\n        opacity: 0;\r\n    }\r\n    .usage{\r\n        opacity: 0;\r\n    }\r\n    &:hover{\r\n        background: #d1d1d1;\r\n        .uftype{\r\n            font-size: 48px;\r\n        }\r\n        .u-clipboard{\r\n            opacity: 1;\r\n        }\r\n    }\r\n}"},{"example":<Demo2 />,"title":" 纯色图标","code":"/**\r\n*\r\n* @title 纯色图标\r\n* @description 可以通过设置 theme 属性为 pure 来渲染纯色图标。\r\n*\r\n*/\r\nimport React, { Component } from 'react';\nimport { SvgIcon } from 'tinper-bee';\r\n\r\n\r\nclass Demo2 extends Component {\r\n    render () {\r\n        return (\r\n            <div className=\"icons-list\">\r\n                <SvgIcon type=\"audio\" theme=\"pure\" />\r\n                <SvgIcon type=\"excel\" theme=\"pure\" />\r\n            </div>\r\n        )\r\n    }\r\n}\r\nexport default Demo2;","desc":" 可以通过设置 theme 属性为 pure 来渲染纯色图标。","scss_code":".icons-list .uftype{\r\n    font-size: 24px;\r\n}"},{"example":<Demo3 />,"title":" 自定义图标","code":"/**\r\n*\r\n* @title 自定义图标\r\n* @description 利用 SvgIcon 组件封装一个可复用的自定义图标。可以通过 component 属性传入一个组件来渲染最终的图标，以满足特定的需求。\r\n*\r\n*/\r\nimport React, { Component } from 'react';\nimport { SvgIcon } from 'tinper-bee';\r\n\r\n\r\nconst HeartSvg = () => (\r\n    <svg width=\"1em\" height=\"1em\" fill=\"currentColor\" viewBox=\"0 0 1024 1024\">\r\n        <path d=\"M923 283.6c-13.4-31.1-32.6-58.9-56.9-82.8-24.3-23.8-52.5-42.4-84-55.5-32.5-13.5-66.9-20.3-102.4-20.3-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5-24.4 23.9-43.5 51.7-56.9 82.8-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3 0.1-35.3-7-69.6-20.9-101.9z\" />\r\n    </svg>\r\n);\r\n\r\nconst PandaSvg = () => (\r\n    <svg viewBox=\"0 0 1024 1024\" width=\"1em\" height=\"1em\" fill=\"currentColor\">\r\n        <path\r\n            d=\"M99.096 315.634s-82.58-64.032-82.58-132.13c0-66.064 33.032-165.162 148.646-148.646 83.37 11.91 99.096 165.162 99.096 165.162l-165.162 115.614zM924.906 315.634s82.58-64.032 82.58-132.13c0-66.064-33.032-165.162-148.646-148.646-83.37 11.91-99.096 165.162-99.096 165.162l165.162 115.614z\"\r\n            fill=\"#6B676E\"\r\n            p-id=\"1143\"\r\n        />\r\n        <path\r\n            d=\"M1024 561.548c0 264.526-229.23 429.42-512.002 429.42S0 826.076 0 561.548 283.96 66.064 512.002 66.064 1024 297.022 1024 561.548z\"\r\n            fill=\"#FFEBD2\"\r\n            p-id=\"1144\"\r\n        />\r\n        <path\r\n            d=\"M330.324 842.126c0 82.096 81.34 148.646 181.678 148.646s181.678-66.55 181.678-148.646H330.324z\"\r\n            fill=\"#E9D7C3\"\r\n            p-id=\"1145\"\r\n        />\r\n        <path\r\n            d=\"M644.13 611.098C594.582 528.516 561.55 512 512.002 512c-49.548 0-82.58 16.516-132.13 99.096-42.488 70.814-78.73 211.264-49.548 247.742 66.064 82.58 165.162 33.032 181.678 33.032 16.516 0 115.614 49.548 181.678-33.032 29.18-36.476-7.064-176.93-49.55-247.74z\"\r\n            fill=\"#FFFFFF\"\r\n            p-id=\"1146\"\r\n        />\r\n        <path\r\n            d=\"M611.098 495.484c0-45.608 36.974-82.58 82.58-82.58 49.548 0 198.194 99.098 198.194 165.162s-79.934 144.904-148.646 99.096c-49.548-33.032-132.128-148.646-132.128-181.678zM412.904 495.484c0-45.608-36.974-82.58-82.58-82.58-49.548 0-198.194 99.098-198.194 165.162s79.934 144.904 148.646 99.096c49.548-33.032 132.128-148.646 132.128-181.678z\"\r\n            fill=\"#6B676E\"\r\n            p-id=\"1147\"\r\n        />\r\n        <path\r\n            d=\"M512.002 726.622c-30.06 0-115.614 5.668-115.614 33.032 0 49.638 105.484 85.24 115.614 82.58 10.128 2.66 115.614-32.944 115.614-82.58-0.002-27.366-85.556-33.032-115.614-33.032z\"\r\n            fill=\"#464655\"\r\n            p-id=\"1148\"\r\n        />\r\n        <path\r\n            d=\"M330.324 495.484m-33.032 0a33.032 33.032 0 1 0 66.064 0 33.032 33.032 0 1 0-66.064 0Z\"\r\n            fill=\"#464655\"\r\n            p-id=\"1149\"\r\n        />\r\n        <path\r\n            d=\"M693.678 495.484m-33.032 0a33.032 33.032 0 1 0 66.064 0 33.032 33.032 0 1 0-66.064 0Z\"\r\n            fill=\"#464655\"\r\n            p-id=\"1150\"\r\n        />\r\n    </svg>\r\n);\r\n\r\nconst HeartIcon = props => <SvgIcon component={HeartSvg} {...props} />;\r\n\r\nconst PandaIcon = props => <SvgIcon component={PandaSvg} {...props} />;\r\n\r\nclass Demo3 extends Component {\r\n    render () {\r\n        return (\r\n            <div className=\"custom-icons-list\">\r\n                <HeartIcon style={{ color: 'hotpink' }} />\r\n                <PandaIcon style={{ fontSize: '32px' }} />\r\n            </div>\r\n        )\r\n    }\r\n}\r\nexport default Demo3;","desc":" 利用 SvgIcon 组件封装一个可复用的自定义图标。可以通过 component 属性传入一个组件来渲染最终的图标，以满足特定的需求。"}]


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
