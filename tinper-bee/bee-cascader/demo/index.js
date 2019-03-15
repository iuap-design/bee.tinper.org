import {Col, Row} from 'bee-layout';
import {Panel} from 'bee-panel';
import Button from 'bee-button';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';


const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var Demo4 = require("./demolist/Demo4");var Demo5 = require("./demolist/Demo5");var Demo6 = require("./demolist/Demo6");var Demo7 = require("./demolist/Demo7");var DemoArray = [{"example":<Demo1 />,"title":" 基础级联菜单","code":"/**\r\n *\r\n * @title 基础级联菜单\r\n * @description 级联选择对数据有较严格要求，请参照示例的格式使用options，每项数据至少包含 value、label 两项，子集为 children，以此类推。\r\n *\r\n */\r\n\r\nimport React, { Component } from 'react';\r\n\nimport { Cascader,  Row, Col  } from 'tinper-bee';\r\n\r\nconst options = [{\r\n\tlabel: '浙江',\r\n\tvalue: 'zj',\r\n\tchildren: [{\r\n\t\tlabel: '杭州',\r\n\t\tvalue: 'hz',\r\n\t\tchildren: [{\r\n\t\t\tlabel: '西湖',\r\n\t\t\tvalue: 'xh',\r\n\t\t\tchildren: [{\r\n\t\t\t\tlabel: '白娘子',\r\n\t\t\t\tvalue: 'bnz'\r\n\t\t\t},{\r\n\t\t\t\tlabel: '许仙',\r\n\t\t\t\tvalue: 'xx'\r\n\t\t\t}]\r\n\t\t}]\r\n\t}]\r\n\t},\r\n\t{\r\n\t\tlabel: '江苏',\r\n\t\tvalue: 'js',\r\n\t\tchildren: [{\r\n\t\t\tlabel: '南京',\r\n\t\t\tvalue: 'nj',\r\n\t\t\tchildren: [{\r\n\t\t\t\tlabel: '中华门',\r\n\t\t\t\tvalue: 'zhm'\r\n\t\t\t}]\r\n\t\t}]\r\n \t},\r\n \t{\r\n\t\tlabel: '山东',\r\n \t    value: 'sd'\r\n \t}\r\n];\r\nclass Demo1 extends Component {\r\n\r\n\tonChange = (value, selectedOptions) => {\r\n    \tconsole.log(value, selectedOptions);\r\n\t}\r\n\t\r\n \trender(){\r\n \t\treturn(\r\n\t\t\t<Row>\r\n\t\t\t\t<Col md={4}>\r\n\t\t\t\t\t<div className=\"height-150\">\r\n\t\t\t\t\t\t<Cascader \r\n\t\t\t\t\t\t\toptions = {options} \r\n\t\t\t\t\t\t\tonChange = {this.onChange}\r\n\t\t\t\t\t\t\tplaceholder = \"请选择地址\"\r\n\t\t\t\t\t\t/>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</Col>\r\n\t\t\t</Row>\r\n \t\t)\r\n \t}\r\n}\r\n","desc":" 级联选择对数据有较严格要求，请参照示例的格式使用options，每项数据至少包含 value、label 两项，子集为 children，以此类推。"},{"example":<Demo2 />,"title":" 默认值","code":"/**\r\n *\r\n * @title 默认值\r\n * @description 默认值通过数组的方式指定。注：需要给数组的每一项指定label和value属性。\r\n *\r\n */\r\n\r\nimport React, { Component } from 'react';\r\n\nimport { Cascader,  Row, Col  } from 'tinper-bee';\r\n\r\nconst options = [{\r\n    label: '浙江',\r\n    value: 'zj',\r\n    children: [{\r\n        label: '杭州',\r\n        value: 'hz',\r\n        children: [{\r\n            label: '西湖',\r\n            value: 'xh',\r\n            children: [{\r\n                label: '白娘子',\r\n                value: 'bnz'\r\n            },{\r\n                label: '许仙',\r\n                value: 'xx'\r\n            }]\r\n        }]\r\n    }]\r\n    },\r\n    {\r\n        label: '江苏',\r\n        value: 'js',\r\n        children: [{\r\n\t\t\tlabel: '南京',\r\n\t\t\tvalue: 'nj',\r\n\t\t\tchildren: [{\r\n\t\t\t\tlabel: '中华门',\r\n\t\t\t\tvalue: 'zhm'\r\n\t\t\t}]\r\n \t\t}]\r\n \t},\r\n \t{\r\n\t\tlabel: '山东',\r\n \t    value: 'sd'\r\n \t}\r\n];\r\n\r\nconst defaultOptions = [{\r\n    label: '江苏',\r\n    value: 'js',\r\n}, {\r\n    label: '南京',\r\n    value: 'nj',\r\n}, {\r\n    label: '中华门',\r\n    value: 'zhm',\r\n}];\r\n\r\nclass Demo2 extends Component {\r\n\r\n\tonChange = (value, selectedOptions) => {\r\n        console.log(value, selectedOptions);\r\n\t}\r\n\t\r\n \trender(){\r\n \t\treturn(\r\n\t\t\t<Row>\r\n\t\t\t\t<Col md={4}>\r\n\t\t\t\t\t<div className=\"height-150\">\r\n                        <Cascader \r\n                            defaultValue={defaultOptions}\r\n\t\t\t\t\t\t\toptions = {options} \r\n\t\t\t\t\t\t\tonChange = {this.onChange}\r\n\t\t\t\t\t\t\tplaceholder = \"请选择地址\"\r\n\t\t\t\t\t\t/>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</Col>\r\n\t\t\t</Row>\r\n \t\t)\r\n \t}\r\n}\r\n","desc":" 默认值通过数组的方式指定。注：需要给数组的每一项指定label和value属性。"},{"example":<Demo3 />,"title":" 移入展开","code":"/**\r\n *\r\n * @title 移入展开\r\n * @description 鼠标hover时展开菜单子选项\r\n *\r\n */\r\n\r\nimport React, { Component } from 'react';\r\n\nimport { Cascader,  Row, Col  } from 'tinper-bee';\r\n\r\nconst options = [{\r\n    label: '浙江',\r\n    value: 'zj',\r\n    children: [{\r\n            label: '杭州',\r\n            value: 'hz',\r\n            children: [{\r\n                label: '西湖',\r\n                value: 'xh',\r\n                children: [{\r\n                    label: '白娘子',\r\n                    value: 'bnz'\r\n                },{\r\n                    label: '许仙',\r\n                    value: 'xx'\r\n                }]\r\n            }]\r\n        }]\r\n    },\r\n    {\r\n        label: '江苏',\r\n    value: 'js',\r\n    children: [{\r\n            label: '南京',\r\n            value: 'nj',\r\n            children: [{\r\n                label: '中华门',\r\n                value: 'zhm'\r\n            }]\r\n        }]\r\n    },\r\n    {\r\n        label: '山东',\r\n    value: 'sd'\r\n    }\r\n];\r\n\r\nclass Demo3 extends Component {\r\n\r\n    onChange = (value) => {\r\n        console.log(value)\r\n    }\r\n\r\n    render(){\r\n        return (\r\n            <Row>\r\n                <Col md={4}>\r\n                    <div className=\"height-150\">\r\n                        <Cascader expandTrigger=\"hover\" options={options} onChange={this.onChange} placeholder=\"请选择地址\"/>\r\n                    </div>\r\n                </Col>\r\n            </Row>\r\n        )\r\n    }\r\n}\r\n\r\n","desc":" 鼠标hover时展开菜单子选项"},{"example":<Demo4 />,"title":" 禁用状态","code":"/**\r\n *\r\n * @title 禁用状态\r\n * @description 通过`disabled`参数设置是否禁用。\r\n *\r\n */\r\n\r\nimport React, { Component } from 'react';\r\n\nimport { Cascader,  Row, Col  } from 'tinper-bee';\r\n\r\nconst options = [{\r\n    label: '浙江',\r\n    value: 'zj',\r\n    children: [{\r\n            label: '杭州',\r\n            value: 'hz',\r\n            children: [{\r\n                label: '西湖',\r\n                value: 'xh',\r\n                children: [{\r\n                    label: '白娘子',\r\n                    value: 'bnz'\r\n                },{\r\n                    label: '许仙',\r\n                    value: 'xx'\r\n                }]\r\n            }]\r\n        }]\r\n    },\r\n    {\r\n        label: '江苏',\r\n    value: 'js',\r\n    children: [{\r\n            label: '南京',\r\n            value: 'nj',\r\n            children: [{\r\n                label: '中华门',\r\n                value: 'zhm'\r\n            }]\r\n        }]\r\n    },\r\n    {\r\n        label: '山东',\r\n    value: 'sd'\r\n    }\r\n];\r\n\r\nclass Demo4 extends Component {  \r\n    render(){\r\n        return (\r\n            <Row>\r\n                <Col md={4}>\r\n                    <div className=\"height-150\">\r\n                        <Cascader disabled options={options} placeholder=\"请选择地址\"/>\r\n                    </div>\r\n                </Col>\r\n            </Row>\r\n        )\r\n    }\r\n}\r\n\r\n","desc":" 通过`disabled`参数设置是否禁用。"},{"example":<Demo5 />,"title":" 选择即改变","code":"/**\r\n *\r\n * @title 选择即改变\r\n * @description 设置属性 `changeOnSelect` 点任何一级都可以选择。\r\n *\r\n */\r\n\r\nimport React, { Component } from 'react';\r\n\nimport { Cascader,  Row, Col  } from 'tinper-bee';\r\n\r\nconst options = [{\r\n    label: '浙江',\r\n    value: 'zj',\r\n    children: [{\r\n            label: '杭州',\r\n            value: 'hz',\r\n            children: [{\r\n                label: '西湖',\r\n                value: 'xh',\r\n                children: [{\r\n                    label: '白娘子',\r\n                    value: 'bnz'\r\n                },{\r\n                    label: '许仙',\r\n                    value: 'xx'\r\n                }]\r\n            }]\r\n        }]\r\n    },\r\n    {\r\n        label: '江苏',\r\n    value: 'js',\r\n    children: [{\r\n            label: '南京',\r\n            value: 'nj',\r\n            children: [{\r\n                label: '中华门',\r\n                value: 'zhm'\r\n            }]\r\n        }]\r\n    },\r\n    {\r\n        label: '山东',\r\n    value: 'sd'\r\n    }\r\n];\r\n\r\nclass Demo5 extends Component {  \r\n    render(){\r\n        return (\r\n            <Row>\r\n                <Col md={4}>\r\n                    <div className=\"height-150\">\r\n                        <Cascader changeOnSelect options={options} placeholder=\"请选择地址\"/>\r\n                    </div>\r\n                </Col>\r\n            </Row>\r\n        )\r\n    }\r\n}\r\n\r\n","desc":" 设置属性 `changeOnSelect` 点任何一级都可以选择。"},{"example":<Demo6 />,"title":" 动态改变options","code":"/**\r\n *\r\n * @title 动态改变options\r\n * @description 通过动态设置`options`参数，即可灵活改变数据源。\r\n *\r\n */\r\n\r\nimport React, { Component } from 'react';\r\n\n\nimport { Cascader, Button,  Row, Col  } from 'tinper-bee';\r\n\r\nconst addressOptions = [{\r\n    label: '浙江',\r\n    value: 'zj',\r\n    children: [{\r\n            label: '杭州',\r\n            value: 'hz',\r\n            children: [{\r\n                label: '西湖',\r\n                value: 'xh',\r\n                children: [{\r\n                    label: '白娘子',\r\n                    value: 'bnz'\r\n                },{\r\n                    label: '许仙',\r\n                    value: 'xx'\r\n                }]\r\n            }]\r\n        }]\r\n    },\r\n    {\r\n        label: '江苏',\r\n        value: 'js',\r\n        children: [{\r\n            label: '南京',\r\n            value: 'nj',\r\n            children: [{\r\n                label: '中华门',\r\n                value: 'zhm'\r\n            }]\r\n        }]\r\n    },\r\n    {\r\n        label: '山东',\r\n        value: 'sd'\r\n    }\r\n];\r\n\r\nclass Demo6 extends Component {  \r\n    state = {\r\n        options: addressOptions\r\n    }\r\n    \r\n    changeOptions = () => {\r\n        this.setState({\r\n            options: [{\r\n                label: '北京',\r\n                value: 'bj',\r\n                children: [{\r\n                        label: '故宫',\r\n                        value: 'gg',\r\n                    },{\r\n                        label: '天坛',\r\n                        value: 'tt',\r\n                    },{\r\n                        label: '王府井',\r\n                        value: 'wfj',\r\n                    }]\r\n                },\r\n                {\r\n                    label: '江苏1',\r\n                    value: 'js1',\r\n                    children: [{\r\n                            label: '南京1',\r\n                            value: 'nj1',\r\n                            children: [{\r\n                                label: '中华门1',\r\n                                value: 'zhm1'\r\n                            }]\r\n                        }]\r\n                    },\r\n                    {\r\n                        label: '山东1',\r\n                    value: 'sd1'\r\n                }\r\n            ]\r\n        })\r\n    }\r\n\r\n    render(){\r\n        return (\r\n            <Row>\r\n                <Col md={4}>\r\n                    <div className=\"height-150\">\r\n                        <Button colors=\"primary\" onClick={this.changeOptions} style={{marginBottom:8+'px'}}>点击改变选项数组</Button>\r\n                        <Cascader options={this.state.options} placeholder=\"请选择地址\"/>\r\n                    </div>\r\n                </Col>\r\n            </Row>\r\n        )\r\n    }\r\n}\r\n\r\n","desc":" 通过动态设置`options`参数，即可灵活改变数据源。"},{"example":<Demo7 />,"title":" 不同尺寸的Cascader","code":"/**\r\n *\r\n * @title 不同尺寸的Cascader\r\n * @description 通过设置`size`属性为 \"lg\" 和 \"sm\" 将输入框设置为大和小尺寸，不设置为默认（中）尺寸。\r\n *\r\n */\r\n\r\nimport React, { Component } from 'react';\r\n\n\nimport { Cascader, Button,  Row, Col  } from 'tinper-bee';\r\n\r\nconst addressOptions = [{\r\n    label: '浙江',\r\n    value: 'zj',\r\n    children: [{\r\n            label: '杭州',\r\n            value: 'hz',\r\n            children: [{\r\n                label: '西湖',\r\n                value: 'xh',\r\n                children: [{\r\n                    label: '白娘子',\r\n                    value: 'bnz'\r\n                },{\r\n                    label: '许仙',\r\n                    value: 'xx'\r\n                }]\r\n            }]\r\n        }]\r\n    },\r\n    {\r\n        label: '江苏',\r\n        value: 'js',\r\n        children: [{\r\n            label: '南京',\r\n            value: 'nj',\r\n            children: [{\r\n                label: '中华门',\r\n                value: 'zhm'\r\n            }]\r\n        }]\r\n    },\r\n    {\r\n        label: '山东',\r\n        value: 'sd'\r\n    }\r\n];\r\n\r\nclass Demo7 extends Component {  \r\n\r\n    render(){\r\n        return (\r\n            <Row>\r\n                <Col md={4}>\r\n                    <div className=\"height-150 demo7\">\r\n                        <Cascader size=\"sm\" options={addressOptions} placeholder=\"请选择地址\"/>\r\n                        <Cascader options={addressOptions} placeholder=\"请选择地址\"/>\r\n                        <Cascader size=\"lg\" options={addressOptions} placeholder=\"请选择地址\"/>\r\n                    </div>\r\n                </Col>\r\n            </Row>\r\n        )\r\n    }\r\n}\r\n\r\n","desc":" 通过设置`size`属性为 \"lg\" 和 \"sm\" 将输入框设置为大和小尺寸，不设置为默认（中）尺寸。","scss_code":".demo7{\r\n    span{\r\n        margin-bottom: 16px;\r\n    }\r\n    .u-form-control.lg{\r\n        width: 183px;\r\n    }\r\n}"}]


class Demo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({open: !this.state.open})
    }

    render() {
        const {title, example, code, desc, scss_code} = this.props;
        let caret = this.state.open ? CARETUP : CARET;
        let text = this.state.open ? "隐藏代码" : "查看代码";

        const header = (
            <div>
                {example}
                <Button style={{"marginTop": "10px"}} shape="block" onClick={this.handleClick}>
                    {caret}
                    {text}
                </Button>
            </div>
        );
        return (
            <Col md={12}>
                <h3>{title}</h3>
                <p>{desc}</p>
                <Panel collapsible headerContent expanded={this.state.open} colors='bordered' header={header}
                       footerStyle={{padding: 0}}>
                    <pre><code className="hljs javascript">{code}</code></pre>
                    {!!scss_code ? <pre><code className="hljs css">{scss_code}</code></pre> : null}
                </Panel>
            </Col>
        )
    }
}

class DemoGroup extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Row>
                {DemoArray.map((child, index) => {

                    return (
                        <Demo example={child.example} title={child.title} code={child.code} scss_code={child.scss_code}
                              desc={child.desc} key={index}/>
                    )

                })}
            </Row>
        )
    }
}

ReactDOM.render(<DemoGroup/>, document.getElementById('tinperBeeDemo'));
