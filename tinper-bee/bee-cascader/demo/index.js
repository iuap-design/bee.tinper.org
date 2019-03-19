import {Col, Row} from 'bee-layout';
import {Panel} from 'bee-panel';
import Button from 'bee-button';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';


const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var Demo4 = require("./demolist/Demo4");var Demo5 = require("./demolist/Demo5");var Demo6 = require("./demolist/Demo6");var Demo7 = require("./demolist/Demo7");var DemoArray = [{"example":<Demo1 />,"title":" 基础级联菜单","code":"/**\n *\n * @title 基础级联菜单\n * @description 级联选择对数据有较严格要求，请参照示例的格式使用options，每项数据至少包含 value、label 两项，子集为 children，以此类推。\n *\n */\n\nimport React, { Component } from 'react';\nimport { Cascader,  Row, Col  } from 'tinper-bee';\n\nconst options = [{\n\tlabel: '浙江',\n\tvalue: 'zj',\n\tchildren: [{\n\t\tlabel: '杭州',\n\t\tvalue: 'hz',\n\t\tchildren: [{\n\t\t\tlabel: '西湖',\n\t\t\tvalue: 'xh',\n\t\t\tchildren: [{\n\t\t\t\tlabel: '白娘子',\n\t\t\t\tvalue: 'bnz'\n\t\t\t},{\n\t\t\t\tlabel: '许仙',\n\t\t\t\tvalue: 'xx'\n\t\t\t}]\n\t\t}]\n\t}]\n\t},\n\t{\n\t\tlabel: '江苏',\n\t\tvalue: 'js',\n\t\tchildren: [{\n\t\t\tlabel: '南京',\n\t\t\tvalue: 'nj',\n\t\t\tchildren: [{\n\t\t\t\tlabel: '中华门',\n\t\t\t\tvalue: 'zhm'\n\t\t\t}]\n\t\t}]\n \t},\n \t{\n\t\tlabel: '山东',\n \t    value: 'sd'\n \t}\n];\nclass Demo1 extends Component {\n\n\tonChange = (value, selectedOptions) => {\n    \tconsole.log(value, selectedOptions);\n\t}\n\t\n \trender(){\n \t\treturn(\n\t\t\t<Row>\n\t\t\t\t<Col md={4}>\n\t\t\t\t\t<div className=\"height-150\">\n\t\t\t\t\t\t<Cascader \n\t\t\t\t\t\t\toptions = {options} \n\t\t\t\t\t\t\tonChange = {this.onChange}\n\t\t\t\t\t\t\tplaceholder = \"请选择地址\"\n\t\t\t\t\t\t/>\n\t\t\t\t\t</div>\n\t\t\t\t</Col>\n\t\t\t</Row>\n \t\t)\n \t}\n}\n","desc":" 级联选择对数据有较严格要求，请参照示例的格式使用options，每项数据至少包含 value、label 两项，子集为 children，以此类推。"},{"example":<Demo2 />,"title":" 默认值","code":"/**\n *\n * @title 默认值\n * @description 默认值通过数组的方式指定。注：需要给数组的每一项指定label和value属性。\n *\n */\n\nimport React, { Component } from 'react';\nimport { Cascader,  Row, Col  } from 'tinper-bee';\n\nconst options = [{\n    label: '浙江',\n    value: 'zj',\n    children: [{\n        label: '杭州',\n        value: 'hz',\n        children: [{\n            label: '西湖',\n            value: 'xh',\n            children: [{\n                label: '白娘子',\n                value: 'bnz'\n            },{\n                label: '许仙',\n                value: 'xx'\n            }]\n        }]\n    }]\n    },\n    {\n        label: '江苏',\n        value: 'js',\n        children: [{\n\t\t\tlabel: '南京',\n\t\t\tvalue: 'nj',\n\t\t\tchildren: [{\n\t\t\t\tlabel: '中华门',\n\t\t\t\tvalue: 'zhm'\n\t\t\t}]\n \t\t}]\n \t},\n \t{\n\t\tlabel: '山东',\n \t    value: 'sd'\n \t}\n];\n\nconst defaultOptions = [{\n    label: '江苏',\n    value: 'js',\n}, {\n    label: '南京',\n    value: 'nj',\n}, {\n    label: '中华门',\n    value: 'zhm',\n}];\n\nclass Demo2 extends Component {\n\n\tonChange = (value, selectedOptions) => {\n        console.log(value, selectedOptions);\n\t}\n\t\n \trender(){\n \t\treturn(\n\t\t\t<Row>\n\t\t\t\t<Col md={4}>\n\t\t\t\t\t<div className=\"height-150\">\n                        <Cascader \n                            defaultValue={defaultOptions}\n\t\t\t\t\t\t\toptions = {options} \n\t\t\t\t\t\t\tonChange = {this.onChange}\n\t\t\t\t\t\t\tplaceholder = \"请选择地址\"\n\t\t\t\t\t\t/>\n\t\t\t\t\t</div>\n\t\t\t\t</Col>\n\t\t\t</Row>\n \t\t)\n \t}\n}\n","desc":" 默认值通过数组的方式指定。注：需要给数组的每一项指定label和value属性。"},{"example":<Demo3 />,"title":" 移入展开","code":"/**\n *\n * @title 移入展开\n * @description 鼠标hover时展开菜单子选项\n *\n */\n\nimport React, { Component } from 'react';\nimport { Cascader,  Row, Col  } from 'tinper-bee';\n\nconst options = [{\n    label: '浙江',\n    value: 'zj',\n    children: [{\n            label: '杭州',\n            value: 'hz',\n            children: [{\n                label: '西湖',\n                value: 'xh',\n                children: [{\n                    label: '白娘子',\n                    value: 'bnz'\n                },{\n                    label: '许仙',\n                    value: 'xx'\n                }]\n            }]\n        }]\n    },\n    {\n        label: '江苏',\n    value: 'js',\n    children: [{\n            label: '南京',\n            value: 'nj',\n            children: [{\n                label: '中华门',\n                value: 'zhm'\n            }]\n        }]\n    },\n    {\n        label: '山东',\n    value: 'sd'\n    }\n];\n\nclass Demo3 extends Component {\n\n    onChange = (value) => {\n        console.log(value)\n    }\n\n    render(){\n        return (\n            <Row>\n                <Col md={4}>\n                    <div className=\"height-150\">\n                        <Cascader expandTrigger=\"hover\" options={options} onChange={this.onChange} placeholder=\"请选择地址\"/>\n                    </div>\n                </Col>\n            </Row>\n        )\n    }\n}\n\n","desc":" 鼠标hover时展开菜单子选项"},{"example":<Demo4 />,"title":" 禁用状态","code":"/**\n *\n * @title 禁用状态\n * @description 通过`disabled`参数设置是否禁用。\n *\n */\n\nimport React, { Component } from 'react';\nimport { Cascader,  Row, Col  } from 'tinper-bee';\n\nconst options = [{\n    label: '浙江',\n    value: 'zj',\n    children: [{\n            label: '杭州',\n            value: 'hz',\n            children: [{\n                label: '西湖',\n                value: 'xh',\n                children: [{\n                    label: '白娘子',\n                    value: 'bnz'\n                },{\n                    label: '许仙',\n                    value: 'xx'\n                }]\n            }]\n        }]\n    },\n    {\n        label: '江苏',\n    value: 'js',\n    children: [{\n            label: '南京',\n            value: 'nj',\n            children: [{\n                label: '中华门',\n                value: 'zhm'\n            }]\n        }]\n    },\n    {\n        label: '山东',\n    value: 'sd'\n    }\n];\n\nclass Demo4 extends Component {  \n    render(){\n        return (\n            <Row>\n                <Col md={4}>\n                    <div className=\"height-150\">\n                        <Cascader disabled options={options} placeholder=\"请选择地址\"/>\n                    </div>\n                </Col>\n            </Row>\n        )\n    }\n}\n\n","desc":" 通过`disabled`参数设置是否禁用。"},{"example":<Demo5 />,"title":" 选择即改变","code":"/**\n *\n * @title 选择即改变\n * @description 设置属性 `changeOnSelect` 点任何一级都可以选择。\n *\n */\n\nimport React, { Component } from 'react';\nimport { Cascader,  Row, Col  } from 'tinper-bee';\n\nconst options = [{\n    label: '浙江',\n    value: 'zj',\n    children: [{\n            label: '杭州',\n            value: 'hz',\n            children: [{\n                label: '西湖',\n                value: 'xh',\n                children: [{\n                    label: '白娘子',\n                    value: 'bnz'\n                },{\n                    label: '许仙',\n                    value: 'xx'\n                }]\n            }]\n        }]\n    },\n    {\n        label: '江苏',\n    value: 'js',\n    children: [{\n            label: '南京',\n            value: 'nj',\n            children: [{\n                label: '中华门',\n                value: 'zhm'\n            }]\n        }]\n    },\n    {\n        label: '山东',\n    value: 'sd'\n    }\n];\n\nclass Demo5 extends Component {  \n    render(){\n        return (\n            <Row>\n                <Col md={4}>\n                    <div className=\"height-150\">\n                        <Cascader changeOnSelect options={options} placeholder=\"请选择地址\"/>\n                    </div>\n                </Col>\n            </Row>\n        )\n    }\n}\n\n","desc":" 设置属性 `changeOnSelect` 点任何一级都可以选择。"},{"example":<Demo6 />,"title":" 动态改变options","code":"/**\n *\n * @title 动态改变options\n * @description 通过动态设置`options`参数，即可灵活改变数据源。\n *\n */\n\nimport React, { Component } from 'react';\nimport { Cascader, Button,  Row, Col  } from 'tinper-bee';\n\nconst addressOptions = [{\n    label: '浙江',\n    value: 'zj',\n    children: [{\n            label: '杭州',\n            value: 'hz',\n            children: [{\n                label: '西湖',\n                value: 'xh',\n                children: [{\n                    label: '白娘子',\n                    value: 'bnz'\n                },{\n                    label: '许仙',\n                    value: 'xx'\n                }]\n            }]\n        }]\n    },\n    {\n        label: '江苏',\n        value: 'js',\n        children: [{\n            label: '南京',\n            value: 'nj',\n            children: [{\n                label: '中华门',\n                value: 'zhm'\n            }]\n        }]\n    },\n    {\n        label: '山东',\n        value: 'sd'\n    }\n];\n\nclass Demo6 extends Component {  \n    state = {\n        options: addressOptions\n    }\n    \n    changeOptions = () => {\n        this.setState({\n            options: [{\n                label: '北京',\n                value: 'bj',\n                children: [{\n                        label: '故宫',\n                        value: 'gg',\n                    },{\n                        label: '天坛',\n                        value: 'tt',\n                    },{\n                        label: '王府井',\n                        value: 'wfj',\n                    }]\n                },\n                {\n                    label: '江苏1',\n                    value: 'js1',\n                    children: [{\n                            label: '南京1',\n                            value: 'nj1',\n                            children: [{\n                                label: '中华门1',\n                                value: 'zhm1'\n                            }]\n                        }]\n                    },\n                    {\n                        label: '山东1',\n                    value: 'sd1'\n                }\n            ]\n        })\n    }\n\n    render(){\n        return (\n            <Row>\n                <Col md={4}>\n                    <div className=\"height-150\">\n                        <Button colors=\"primary\" onClick={this.changeOptions} style={{marginBottom:8+'px'}}>点击改变选项数组</Button>\n                        <Cascader options={this.state.options} placeholder=\"请选择地址\"/>\n                    </div>\n                </Col>\n            </Row>\n        )\n    }\n}\n\n","desc":" 通过动态设置`options`参数，即可灵活改变数据源。"},{"example":<Demo7 />,"title":" 不同尺寸的Cascader","code":"/**\n *\n * @title 不同尺寸的Cascader\n * @description 通过设置`size`属性为 \"lg\" 和 \"sm\" 将输入框设置为大和小尺寸，不设置为默认（中）尺寸。\n *\n */\n\nimport React, { Component } from 'react';\nimport { Cascader, Button,  Row, Col  } from 'tinper-bee';\n\nconst addressOptions = [{\n    label: '浙江',\n    value: 'zj',\n    children: [{\n            label: '杭州',\n            value: 'hz',\n            children: [{\n                label: '西湖',\n                value: 'xh',\n                children: [{\n                    label: '白娘子',\n                    value: 'bnz'\n                },{\n                    label: '许仙',\n                    value: 'xx'\n                }]\n            }]\n        }]\n    },\n    {\n        label: '江苏',\n        value: 'js',\n        children: [{\n            label: '南京',\n            value: 'nj',\n            children: [{\n                label: '中华门',\n                value: 'zhm'\n            }]\n        }]\n    },\n    {\n        label: '山东',\n        value: 'sd'\n    }\n];\n\nclass Demo7 extends Component {  \n\n    render(){\n        return (\n            <Row>\n                <Col md={4}>\n                    <div className=\"height-150 demo7\">\n                        <Cascader size=\"sm\" options={addressOptions} placeholder=\"请选择地址\"/>\n                        <Cascader options={addressOptions} placeholder=\"请选择地址\"/>\n                        <Cascader size=\"lg\" options={addressOptions} placeholder=\"请选择地址\"/>\n                    </div>\n                </Col>\n            </Row>\n        )\n    }\n}\n\n","desc":" 通过设置`size`属性为 \"lg\" 和 \"sm\" 将输入框设置为大和小尺寸，不设置为默认（中）尺寸。","scss_code":".demo7{\n    span{\n        margin-bottom: 16px;\n    }\n    .u-form-control.lg{\n        width: 183px;\n    }\n}"}]


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
            <Col md={12} id={title.trim()} >
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
