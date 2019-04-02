import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Drawer from 'bee-drawer';
import Clipboard from 'bee-clipboard'; 
import Button from '../src';



var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var Demo4 = require("./demolist/Demo4");var DemoArray = [{"example":<Demo1 />,"title":" 默认开关","code":"/**\r\n *\r\n * @title 默认开关\r\n * @description\r\n *\r\n */\r\nimport React, { Component } from \"react\";\r\n\nimport { Switch,  Row, Col  } from 'tinper-bee';\r\n\r\nclass Demo1 extends Component {\r\n  constructor(props) {\r\n    super(props);\r\n    this.state = {\r\n      checked: true\r\n    };\r\n  }\r\n  onChange = () => {\r\n    this.setState({\r\n      checked: !this.state.checked\r\n    });\r\n  };\r\n  render() {\r\n    return (\r\n      <Row>\r\n        <Col sm={2}>\r\n          <Switch />\r\n        </Col>\r\n        <Col sm={2}>\r\n          <Switch\r\n            checked={this.state.checked}\r\n            onChange={this.onChange}\r\n          />\r\n        </Col>\r\n      </Row>\r\n    );\r\n  }\r\n}\r\n\r\n\r\n","desc":""},{"example":<Demo2 />,"title":" 不同大小的开关","code":"/**\r\n *\r\n * @title 不同大小的开关\r\n * @description 通过`size`属性控制开关的大小\r\n *\r\n */\r\n\r\nimport React, { Component } from \"react\";\r\n\nimport { Switch,  Row, Col  } from 'tinper-bee';\r\n\r\nclass Demo2 extends Component {\r\n  render() {\r\n    return (\r\n      <Row>\r\n        <Col sm={2}>\r\n          <Switch size=\"sm\" />\r\n        </Col>\r\n        <Col sm={2}>\r\n          <Switch />\r\n        </Col>\r\n        <Col sm={2}>\r\n          <Switch size=\"lg\" />\r\n        </Col>\r\n      </Row>\r\n    );\r\n  }\r\n}\r\n\r\n\r\n","desc":" 通过`size`属性控制开关的大小"},{"example":<Demo3 />,"title":" 事件开关","code":"/**\r\n *\r\n * @title 事件开关\r\n * @description 点击开关触发事件\r\n *\r\n */\r\n\r\nimport React, { Component } from \"react\";\r\n\nimport { Switch,  Row, Col  } from 'tinper-bee';\r\n\r\nclass Demo3 extends Component {\r\n  constructor(props) {\r\n    super(props);\r\n    this.state = {\r\n      switch: \"\",\r\n      checked: false\r\n    };\r\n  }\r\n  onChange = e => {\r\n    this.setState({\r\n      switch: `${e}`,\r\n      checked: !this.state.checked\r\n    });\r\n  };\r\n\r\n  render() {\r\n    return (\r\n      <Row>\r\n        <Col sm={2}>\r\n          <Switch\r\n            checked={this.state.checked}\r\n            onChange={this.onChange}\r\n            checkedChildren={\"on\"}\r\n            unCheckedChildren={\"off\"}\r\n          />\r\n        </Col>\r\n        <Col sm={2}>\r\n          <span>{this.state.switch}</span>\r\n        </Col>\r\n      </Row>\r\n    );\r\n  }\r\n}\r\n\r\n\r\n","desc":" 点击开关触发事件"},{"example":<Demo4 />,"title":" 被禁用开关","code":"/**\r\n *\r\n * @title 被禁用开关\r\n * @description\r\n *\r\n */\r\nimport React, { Component } from \"react\";\r\n\nimport { Switch, Button,  Row, Col  } from 'tinper-bee';\r\n\n\r\nclass Demo4 extends Component {\r\n  constructor(props) {\r\n    super(props);\r\n    this.state = {\r\n        defaultDisabled: true\r\n    };\r\n  }\r\n  onChange = () => {\r\n    this.setState({\r\n      defaultDisabled: !this.state.defaultDisabled\r\n    });\r\n  };\r\n  onConsoleLog=(x)=>{\r\n    console.log(x) \r\n  }\r\n  render() {\r\n    return (\r\n      <Row>\r\n        <Col sm={2}>\r\n          <Switch disabled={this.state.defaultDisabled}/>\r\n        </Col>\r\n        <Col sm={2}>\r\n          <Button onClick={this.onChange}>toggle disabled</Button>\r\n        </Col>\r\n      </Row>\r\n    );\r\n  }\r\n}\r\n\r\n\r\n","desc":""}]


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
