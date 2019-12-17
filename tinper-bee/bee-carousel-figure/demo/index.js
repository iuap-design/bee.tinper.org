import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Drawer from 'bee-drawer';
import Clipboard from 'bee-clipboard'; 



var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var Demo4 = require("./demolist/Demo4");var DemoArray = [{"example":<Demo1 />,"title":" 基本","code":"/**\n*\n* @title 基本\n* @description 最简单的用法。\n*\n*/\nimport React, { Component } from 'react';\nimport { CarouselFigure } from 'tinper-bee';\n\n\nfunction beforeChange(from, to) {\n    console.log(from, to);\n}\n\nfunction onChange(a, b, c) {\n    console.log(a, b, c);\n}\n\nclass Demo1 extends Component {\n    render () {\n        return (\n            <CarouselFigure beforeChange={beforeChange} afterChange={onChange}>\n                <div>\n                    <h3>1</h3>\n                </div>\n                <div>\n                    <h3>2</h3>\n                </div>\n                <div>\n                    <h3>3</h3>\n                </div>\n                <div>\n                    <h3>4</h3>\n                </div>\n            </CarouselFigure>\n        )\n    }\n}\nexport default Demo1","desc":" 最简单的用法。","scss_code":"/* For demo */\r\n.u-carousel-figure .slick-slide {\r\n    text-align: center;\r\n    height: 160px;\r\n    line-height: 160px;\r\n    background: #364d79;\r\n    overflow: hidden;\r\n}\r\n  \r\n.u-carousel-figure .slick-slide h3 {\r\n    color: #fff;\r\n}"},{"example":<Demo2 />,"title":" 位置","code":"/**\r\n*\r\n* @title 位置\r\n* @description 位置有 4 个方向。\r\n*\r\n*/\r\nimport React, { Component } from 'react';\nimport { Radio, CarouselFigure } from 'tinper-bee';\r\n\n\r\n\r\nclass Demo2 extends Component {\r\n    state = {\r\n        dotPosition: 'left',\r\n    };\r\n    handlePositionChange = (dotPosition) => {\r\n        this.setState({ dotPosition });\r\n    }\r\n    render () {\r\n        const { dotPosition } = this.state;\r\n        return (\r\n            <div>\r\n                <Radio.RadioGroup\r\n                onChange={this.handlePositionChange}\r\n                value={dotPosition}\r\n                style={{ marginBottom: 8 }}\r\n                >\r\n                    <Radio.RadioButton value=\"top\">Top</Radio.RadioButton>\r\n                    <Radio.RadioButton value=\"bottom\">Bottom</Radio.RadioButton>\r\n                    <Radio.RadioButton value=\"left\">Left</Radio.RadioButton>\r\n                    <Radio.RadioButton value=\"right\">Right</Radio.RadioButton>\r\n                </Radio.RadioGroup>\r\n                <CarouselFigure dotPosition={dotPosition}>\r\n                <div>\r\n                    <h3>1</h3>\r\n                </div>\r\n                <div>\r\n                    <h3>2</h3>\r\n                </div>\r\n                <div>\r\n                    <h3>3</h3>\r\n                </div>\r\n                <div>\r\n                    <h3>4</h3>\r\n                </div>\r\n                </CarouselFigure>\r\n            </div>\r\n        )\r\n    }\r\n}\r\nexport default Demo2","desc":" 位置有 4 个方向。","scss_code":"/* For demo */\r\n.u-carousel-figure .slick-slide {\r\n    text-align: center;\r\n    height: 160px;\r\n    line-height: 160px;\r\n    background: #364d79;\r\n    overflow: hidden;\r\n}\r\n  \r\n.u-carousel-figure .slick-slide h3 {\r\n    color: #fff;\r\n}"},{"example":<Demo3 />,"title":" 自动切换","code":"/**\r\n*\r\n* @title 自动切换\r\n* @description 定时切换下一张。\r\n*\r\n*/\r\nimport React, { Component } from 'react';\nimport { CarouselFigure } from 'tinper-bee';\r\n\r\n\r\nclass Demo3 extends Component {\r\n    render () {\r\n        return (\r\n             <CarouselFigure autoplay>\r\n                <div>\r\n                    <h3>1</h3>\r\n                </div>\r\n                <div>\r\n                    <h3>2</h3>\r\n                </div>\r\n                <div>\r\n                    <h3>3</h3>\r\n                </div>\r\n                <div>\r\n                    <h3>4</h3>\r\n                </div>\r\n            </CarouselFigure>\r\n        )\r\n    }\r\n}\r\nexport default Demo3","desc":" 定时切换下一张。"},{"example":<Demo4 />,"title":" 渐显","code":"/**\r\n*\r\n* @title 渐显\r\n* @description 切换效果为渐显。\r\n*\r\n*/\r\nimport React, { Component } from 'react';\nimport { CarouselFigure } from 'tinper-bee';\r\n\r\n\r\nclass Demo4 extends Component {\r\n    render () {\r\n        return (\r\n             <CarouselFigure effect=\"fade\">\r\n                <div>\r\n                    <h3>1</h3>\r\n                </div>\r\n                <div>\r\n                    <h3>2</h3>\r\n                </div>\r\n                <div>\r\n                    <h3>3</h3>\r\n                </div>\r\n                <div>\r\n                    <h3>4</h3>\r\n                </div>\r\n            </CarouselFigure>\r\n        )\r\n    }\r\n}\r\nexport default Demo4","desc":" 切换效果为渐显。"}]


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
