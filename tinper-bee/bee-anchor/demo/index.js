import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Drawer from 'bee-drawer';
import Clipboard from 'bee-clipboard'; 



var Demo1 = require("./demolist/Demo1");var DemoArray = [{"example":<Demo1 />,"title":" 基本示例","code":"/**\n *\n * @title 基本示例\n * @description 基本示例\n *\n */\nimport React, { Component } from 'react';\nimport { Anchor } from 'tinper-bee';\n\nclass Demo1 extends Component {\n    constructor(props){\n        super(props);\n        this.state={\n            anthors:[\n                {\n                    href:\"one\",\n                    name:\"RISE\",\n                    content:\" Welcome to the war we've only begun so \\n \"\n                    + \"Pick up your weapon and face it \\n \"\n                    + \"There's blood on the crown go and take it \\n \"\n                    + \"You get one shot to make it out alive so \\n \"\n                    + \"Higher and higher you chase it \\n \"\n                    + \"It's deep in your bones go and take it \\n \"\n                    + \"This is your moment now is your time so \\n \"\n                    + \"Prove yourself and \\n \"\n                    + \"RISE RISE\",\n                },\n                {\n                    href:\"two\",\n                    name:\"Legends\",\n                    content:\" Legends never die when the world is calling you \\n \"\n                    + \"Can you hear them screaming out your name \\n \"\n                    + \"Legends never die they become a part of you \\n \"\n                    + \"Every time you bleed for reaching greatness \\n \"\n                    + \"Relentless you survive \\n \"\n                    + \"They never lose hope when everything's cold and the fighting's near \\n \"\n                    + \"It's deep in their bones they'll run into smoke when the fire is fierce \\n \"\n                    + \"Oh pick yourself up 'cause\"\n                },\n                {\n                    href:\"three\",\n                    name:\"Ignite\",\n                    content:\" There's a fire that burns inside \\n \"\n                    + \"It's an instinct that never lies \\n \"\n                    + \"The target's tattooed between our eyes \\n \"\n                    + \"Stand and fight \\n Under the lights on the high stage \\n \"\n                    + \"A part of your life it can take away \\n \"\n                    + \"Just like the blood running through your veins \\n \"\n                    + \"Everyone's watching through your eyes\"\n                },\n                {\n                    href:\"four\",\n                    name:\"Worlds Collide\",\n                    content:\" Do we fight to hold our heads up high \\n \"\n                    + \"And beat the drum to what we love \\n \"\n                    + \"Risk the fall, oh we have felt it all \\n \"\n                    + \"Come crashing down from far above \\n \"\n                    + \"Stars arising, countless worlds colliding \\n \"\n                    + \"Only one will take it all \\n \"\n                    + \"Can we bring to fall the giants \\n \"\n                    + \"Can we make the final call\"\n                },\n                {\n                    href:\"five\",\n                    name:\"Warriors\",\n                    content:\" As a child, you would wait \\n \"\n                    + \"And watch from far away. \\n \"\n                    + \"But you always knew that you'll be the one \\n \"\n                    + \"that work while they all play. \\n \"\n                    + \"And you, you lay, awake at night and scheme \\n \"\n                    + \"of all the things that you would change \\n \"\n                    + \"but it was just a dream! \\n \"\n                    + \"Here we are, don't turn away now \\n \"\n                    + \"we are the warriors that built this town.\"\n                }\n            ]\n        }\n    }\n    render() {\n        return ( \n            <div className=\"demo1\">  \n                <div className=\"content\">\n                    {\n                        this.state.anthors.map(item=>{\n                            return (\n                                <p id={item.href}>\n                                    <pre>\n                                        {item.content}\n                                    </pre>\n                                </p>\n                            )\n                        })\n                    }\n                </div>\n                <Anchor selector=\"#my-awesome-nav a\">\n                    <ul id=\"my-awesome-nav\" >\n                    {\n                        this.state.anthors.map(item=>{\n                            return (\n                                <li><a href={`#${item.href}`}>{item.name}</a></li>\n                            )\n                        })\n                    }\n                    </ul>\n                </Anchor>\n            </div>\n           \n        )\n    }\n}\n","desc":" 基本示例","scss_code":".demo1{\n    .content{\n        p{\n            height: 500px;\n        }\n        display: inline-block\n    }\n    .u-anchor{\n        display: inline-block;\n    }\n    #my-awesome-nav {\n        position: fixed;\n        top: 200px;\n        right: 300px;\n        li{\n            padding: 0 10px;\n            line-height: 30px;\n            height: 30px;\n            background: #FFF;\n            a{\n                color:#424242;\n            }\n        }\n    }\n    #my-awesome-nav li.active {\n        border-left: 2px solid #E14C46\n    }\n}"}]


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
