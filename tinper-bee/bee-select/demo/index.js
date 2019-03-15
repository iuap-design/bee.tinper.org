import {Col, Row} from 'bee-layout';
import {Panel} from 'bee-panel';
import Button from 'bee-button';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';


const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


var Demo1 = require("./demolist/Demo1");var Demo10 = require("./demolist/Demo10");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var Demo4 = require("./demolist/Demo4");var Demo5 = require("./demolist/Demo5");var Demo6 = require("./demolist/Demo6");var Demo7 = require("./demolist/Demo7");var Demo8 = require("./demolist/Demo8");var Demo9 = require("./demolist/Demo9");var DemoArray = [{"example":<Demo1 />,"title":" 不同尺寸单选`Select`","code":"/**\n * @title 不同尺寸单选`Select`\n * @description `size`参数控制大小\n */\n\nimport React, { Component } from \"react\";\nimport { Select } from 'tinper-bee';\nimport ReactDOM from \"react-dom\";\nconst Option = Select.Option;\nconst OptGroup = Select.OptGroup;\n\nclass Demo1 extends Component {\n  handleChange = value => {\n    console.log(`selected ${value}`);\n  };  \n\n  render() {\n    return (\n      <div>\n        <Select\n          size=\"lg\"\n          defaultValue=\"1\" \n          onFocus={(v)=>{console.log('focus',v)}}\n          style={{ width: 200, marginRight: 6 }}\n          onChange={this.handleChange}\n        >\n          <Option value=\"1\">一</Option>\n          <Option value=\"2\">二</Option>\n          <Option value=\"3\" disabled>\n            三\n          </Option>\n          <Option value=\"4\">四</Option>\n        </Select>\n        <Select\n          defaultValue=\"lucy\"\n          style={{ width: 200, marginRight: 6 }}\n          onChange={this.handleChange}\n          showSearch={true}\n        >\n          <Option value=\"jack\">boyuzhou</Option>\n          <Option value=\"lucy\">renhualiu</Option>\n          <Option value=\"disabled\" disabled>\n            Disabled\n          </Option>\n          <Option value=\"yiminghe\">yuzhao</Option>\n        </Select>\n        <Select\n          size=\"sm\"\n          defaultValue=\"lucy\"\n          style={{ width: 200 }}\n          onChange={this.handleChange}\n        >\n          <Option value=\"jack\">boyuzhou</Option>\n          <Option value=\"lucy\">renhualiu</Option>\n          <Option value=\"disabled\" disabled>\n            Disabled\n          </Option>\n          <Option value=\"yiminghe\">yuzhao</Option>\n        </Select>\n      </div>\n    );\n  }\n}\n\n\n","desc":" `size`参数控制大小"},{"example":<Demo10 />,"title":" 受控的`Select`","code":"/**\n * @title 受控的`Select`\n * @description `open`参数控制下拉框展开收起\n */\n\nimport React, { Component } from \"react\";\nimport { Select, Button } from 'tinper-bee';\nimport ReactDOM from \"react-dom\";\nconst Option = Select.Option;\nconst OptGroup = Select.OptGroup;\n\nclass Demo10 extends Component {\n    constructor(props) {\n\t\tsuper(props);\n\t\tthis.state = {\n      open: true\n\t\t}\n\t}\n\tchangeOpen=()=> {\n    this.setState({open:!this.state.open});\n\t}\n\n  render() {\n    return (\n      <div>\n        <Button onClick={this.changeOpen.bind(this)} style={{marginRight:20 + 'px'}}>change select</Button>\n        <Select\n          defaultValue=\"lucy\"\n          style={{ width: 200, marginRight: 6 }}\n          onChange={this.changeOpen}\n          open={this.state.open}\n        >\n          <Option value=\"jack\">boyuzhou111</Option>\n          <Option value=\"lucy\">renhualiu</Option>\n          <Option value=\"disabled\" disabled>\n            Disabled\n          </Option>\n          <Option value=\"yiminghe\">yuzhao</Option>\n        </Select>\n      </div>\n    );\n  }\n}\n\n\n","desc":" `open`参数控制下拉框展开收起"},{"example":<Demo2 />,"title":" 常用多选","code":"/**\n * @title 常用多选\n * @description Children自定义数据列表,注意：Children已经定义到全局，此处显示为注释例子，其他例子用到Children变量均以此方式定义。\n */\n\nimport React, { Component } from \"react\";\nimport { Select } from 'tinper-bee';\n\nconst Option = Select.Option;\nconst OptGroup = Select.OptGroup;\n\nconst Children = [];\nfor (let i = 10; i < 36; i++) {\n  Children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);\n}\n\nclass Demo2 extends Component {\n  handleChange = value => {\n    console.log(`selected ${value}`);\n  };\n  render() {\n    return (\n      <Select\n        multiple\n        style={{ width: '97%' }}\n        searchPlaceholder=\"标签模式\"\n        onChange={this.handleChange}\n      >\n        {Children}\n      </Select>\n    );\n  }\n}\n\n\n","desc":" Children自定义数据列表,注意：Children已经定义到全局，此处显示为注释例子，其他例子用到Children变量均以此方式定义。"},{"example":<Demo3 />,"title":" 自定义选项多选`Select`","code":"/**\n * @title 自定义选项多选`Select`\n * @description 用户在框内输入自定义内容，Select将输入的内容自动纳入下拉选项中一员。\n */\n\nimport React, { Component } from \"react\";\nimport { Select } from 'tinper-bee';\n\nconst Option = Select.Option;\n\nconst Children = [];\nfor (let i = 10; i < 36; i++) {\n  Children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);\n}\n\nclass Demo3 extends Component {\n  handleChange = value => {\n    console.log(`selected ${value}`);\n  };\n  scrollToEnd = () => {\n    console.log(\"软加载\");\n  };\n  render() {\n    return (\n      <Select\n        tags\n        style={{ width: \"97%\" }}\n        searchPlaceholder=\"标签模式\"\n        scrollToEnd={this.scrollToEnd}\n        onChange={this.handleChange}\n      >\n        {Children}\n      </Select>\n    );\n  }\n}\n\n\n","desc":" 用户在框内输入自定义内容，Select将输入的内容自动纳入下拉选项中一员。"},{"example":<Demo4 />,"title":" 简易级联单选`Select`","code":"/**\n * @title 简易级联单选`Select`\n * @description 常用语城市级联的选择。\n */\n\nimport React, { Component } from \"react\";\nimport { Select } from 'tinper-bee';\n\nconst Option = Select.Option;\n\nconst provinceData = [\"Zhejiang\", \"Jiangsu\"];\nconst cityData = {\n  Zhejiang: [\"Hangzhou\", \"Ningbo\", \"Wenzhou\"],\n  Jiangsu: [\"Nanjing\", \"Suzhou\", \"Zhenjiang\"]\n};\n\nclass Demo4 extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      cities: cityData[provinceData[0]],\n      secondCity: cityData[provinceData[0]][0]\n    };\n  }\n  handleProvinceChange = value => {\n    this.setState({\n      cities: cityData[value],\n      secondCity: cityData[value][0]\n    });\n  };\n  onSecondCityChange = value => {\n    this.setState({\n      secondCity: value\n    });\n  };\n  render() {\n    const provinceOptions = provinceData.map(province => (\n      <Option key={province}>{province}</Option>\n    ));\n    const cityOptions = this.state.cities.map(city => (\n      <Option key={city}>{city}</Option>\n    ));\n    return (\n      <div>\n        <Select\n          defaultValue={provinceData[0]}\n          style={{ width: 90, marginRight: 6 }}\n          onChange={this.handleProvinceChange}\n        >\n          {provinceOptions}\n        </Select>\n        <Select\n          value={this.state.secondCity}\n          style={{ width: 90 }}\n          onChange={this.onSecondCityChange}\n        >\n          {cityOptions}\n        </Select>\n      </div>\n    );\n  }\n}\n\n\n","desc":" 常用语城市级联的选择。"},{"example":<Demo5 />,"title":" 自定义自动填充单选`Select`","code":"/**\n * @title 自定义自动填充单选`Select`\n * @description 常用邮箱后缀自动填充。\n */\n\nimport React, { Component } from \"react\";\nimport { Select } from 'tinper-bee';\n\nconst Option = Select.Option;\n\nclass Demo5 extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      options: []\n    };\n  }\n  handleChange = value => {\n    let options;\n    if (!value || value.indexOf(\"@\") >= 0) {\n      options = [];\n    } else {\n      options = [\"gmail.com\", \"163.com\", \"qq.com\"].map(domain => {\n        const email = `${value}@${domain}`;\n        return <Option key={email}>{email}</Option>;\n      });\n    }\n    this.setState({ options });\n  };\n\n  render() {\n    return (\n      <Select\n        combobox\n        style={{ width: 200 }}\n        onChange={this.handleChange}\n        filterOption={false}\n        placeholder=\"Enter the account name\"\n      >\n        {this.state.options}\n      </Select>\n    );\n  }\n}\n\n\n","desc":" 常用邮箱后缀自动填充。"},{"example":<Demo6 />,"title":" 搜索单选`Select`","code":"/**\n * @title 搜索单选`Select`\n * @description 从下拉选中，获取当前选中自定义对象item data\n */\nimport React, { Component } from \"react\";\nimport { Select } from 'tinper-bee';\n\nconst Option = Select.Option;\n\nconst dataList = [\n  {key:\"1\",value:\"Jack\",label:\"Jack\"},\n  {key:\"2\",value:\"lucy\",label:\"lucy\"},\n  {key:\"3\",value:\"tom\",label:\"tom\"}\n]\n\nclass Demo6 extends Component {\n\n  constructor(props) {\n    super(props);\n  }\n\n  /**\n   * 获取选中对象数据\n   */\n  onSelect = (value,{props:{item}}) => {\n    console.log(`selected ${value}`);\n    console.log(`selected item `,item);\n  };\n\n  render() {\n    return (\n      <Select\n        showSearch\n        style={{ width: 200 }}\n        placeholder=\"Select a person\"\n        optionFilterProp=\"children\"\n        onSelect={this.onSelect}\n        onChange={this.handleChange}\n      >\n        {\n          dataList.map(da=><Option key={da.key} value={da.value} item={da} >{da.label}</Option>)\n        }\n      </Select>\n    );\n  }\n}\n\n\n","desc":" 从下拉选中，获取当前选中自定义对象item data"},{"example":<Demo7 />,"title":" 设置data数组对象来自动生成option","code":"/**\n * @title 设置data数组对象来自动生成option\n * @description 必须设置key，value。根据需要设置disabed\n */\n\nimport React, { Component } from \"react\";\nimport { Select } from 'tinper-bee';\n\nconst Option = Select.Option;\n\nlet selectDataSource = [\n  {\n    key: \"张三\",\n    value: \"zhangsan\"\n  },\n  {\n    key: \"李四\",\n    value: \"lisi\"\n  },\n  {\n    key: \"王五\",\n    value: \"wangwu\"\n  }\n];\n\nclass Demo7 extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      DataSource: [\n        {\n          key: \"其他数据\",\n          value: \"qita\"\n        }\n      ]\n    };\n  }\n  handleChange = value => {\n    if (value) {\n      this.setState({\n        DataSource: [\n          {\n            key: \"张三三\",\n            value: \"zhangsansan\",\n            disabled: true\n          },\n          {\n            key: \"李四四\",\n            value: \"lisisi\"\n          },\n          {\n            key: \"王五五\",\n            value: \"wangwuwu\"\n          }\n        ]\n      });\n    }\n  };\n\n  render() {\n    return (\n      <div>\n        <Select\n          style={{ width: 200 }}\n          placeholder=\"Select a person\"\n          onChange={this.handleChange}\n          data={selectDataSource}\n        />\n        <Select\n          style={{ width: 200, marginLeft: \"5px\" }}\n          placeholder=\"Select a person\"\n          data={this.state.DataSource}\n        />\n      </div>\n    );\n  }\n}\n\n\n","desc":" 必须设置key，value。根据需要设置disabed"},{"example":<Demo8 />,"title":" 默认设置下拉框获取焦点事件 `默认获取焦点autofocu","code":"/**\n * @title 默认设置下拉框获取焦点事件 `默认获取焦点autofocus`\n * @description `autofocus`参数控制是否需要获取焦点。\n * 同时暴露两个api  onFocus、onBlur 返回当前选中的数据\n */\n\nimport React, { Component } from \"react\";\nimport { Select } from 'tinper-bee';\nimport ReactDOM from \"react-dom\";\nconst Option = Select.Option;\nconst OptGroup = Select.OptGroup;\n\nclass Demo8 extends Component {\n  handleChange = value => {\n    console.log(`selected ${value}`);\n  };  \n  handFocus = value => {\n    console.log(`获取焦点事件`);\n  };\n  onBlur = value => {\n    console.log(`onBlur`);\n  };\n\n  render() {\n    return (\n      <div>\n        <Select\n          size=\"lg\"\n          defaultValue=\"lucy\"\n          style={{ width: 200, marginRight: 6 }}\n          onChange={this.handleChange}\n          onFocus={this.handFocus}\n          onBlur={this.onBlur}\n          autofocus\n        >\n          <Option value=\"jack\">boyuzhou111</Option>\n          <Option value=\"lucy\">renhualiu</Option>\n          <Option value=\"disabled\" disabled>\n            Disabled\n          </Option>\n          <Option value=\"yiminghe\">yuzhao</Option>\n        </Select>\n        <Select\n          size=\"lg\"\n          defaultValue=\"lucy\"\n          style={{ width: 200, marginRight: 6 }}\n          onChange={this.handleChange}\n        >\n          <Option value=\"jack\">boyuzhou</Option>\n          <Option value=\"lucy\">renhualiu</Option>\n          <Option value=\"disabled\" disabled>\n            Disabled\n          </Option>\n          <Option value=\"yiminghe\">yuzhao</Option>\n        </Select>\n        \n      </div>\n    );\n  }\n}\n\n\n","desc":" `autofocus`参数控制是否需要获取焦点。"},{"example":<Demo9 />,"title":" 动态渲染Option的多选","code":"/**\n * @title 动态渲染Option的多选\n * @description Option标签与Children自定义数据列表组合的渲染方式\n */\n\nimport React, { Component } from \"react\";\nimport { Select } from 'tinper-bee';\n\nconst Option = Select.Option;\nconst OptGroup = Select.OptGroup;\n\nconst Children = ['a10','b11','c12','d13','e14','f15'];\n\nclass Demo9 extends Component {\n  handleChange = value => {\n    console.log(`selected ${value}`);\n  };\n  render() {\n    return (\n      <Select\n        multiple\n        style={{ width: \"97%\" }}\n        searchPlaceholder=\"标签模式\"\n        onChange={this.handleChange}\n      >\n        <Option key='first'>first</Option>\n        {Children.map((value) => {\n          return <Option key={value}>{value}</Option>\n        })}\n      </Select>\n    );\n  }\n}\n\n\n","desc":" Option标签与Children自定义数据列表组合的渲染方式"}]


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
