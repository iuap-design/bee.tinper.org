import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Drawer from 'bee-drawer';
import Clipboard from 'bee-clipboard'; 



var Demo1 = require("./demolist/Demo1");var DemoArray = [{"example":<Demo1 />,"title":" 基本示例","code":"/**\n *\n * @title 基本示例\n * @description 基本示例\n *\n */\nimport React, { Component } from 'react';\nimport { Anchor } from 'tinper-bee';\n\n\nclass Demo1 extends Component {\n    constructor(props){\n        super(props);\n        this.state={\n            anthors:[\n                {\n                    href:\"one\",\n                    name:\"国内要闻\",\n                    content:\" 戏曲进高校玩快闪 “圈粉”大学生 \\n \"\n                    + \"长春年近六旬男子上演花样自行车绝技 \\n \"\n                    + \"民众成都博物馆里享“餐桌上的文化之旅 \\n \"\n                    + \"更大更好吃的海蛎子有望端上青岛市民餐桌！ \\n \"\n                    + \"人民铁道“中央厨房”今日上线 \\n \"\n                    + \"住宅小区的大件垃圾有望得到回收利用 \\n \"\n                    + \"地上忽现大坑 瞬间吞掉两幢房子 \\n \",\n                },\n                {\n                    href:\"two\",\n                    name:\"国际新闻\",\n                    content:\" 一只好莱坞的 巨星猪 是怎么诞生的 \\n \"\n                    + \"追剧听相声玩手游 “歪果仁”为了学汉语也是拼了 \\n \"\n                    + \"一等奖得主齐现身 领奖不忘捐款献爱心 \\n \"\n                    + \"他或是安倍唯一不敢反对的男人！ \\n \"\n                    + \"美男摔落悬崖掉进活火山，躲过摄氏超过1000度 \\n \"\n                    + \"苏格兰媒体：凯尔特人没有向穆里尼奥开出邀约 \\n \"\n                    + \"青少年手机成瘾危害大 各国政府纷纷出招应对 \\n \",\n                },\n                {\n                    href:\"three\",\n                    name:\"财经\",\n                    content:\" 最低工资标准上调窗口开启 京鲁冀等多个省市 \\n \"\n                    + \"「重磅发布」2019年欧洲十大海上风电场排行榜！ \\n \"\n                    + \"又一80后上市公司实控人被刑拘！ \\n \"\n                    + \"五月种菜大全来了，这些蔬菜您种了没有？ \\n \"\n                    + \"记住这个落井之人 \\n \"\n                    + \"测绘准入放宽在即，新玩家新规则倒逼产业转型 \\n \"\n                    + \"回顾20年前A股那场轰轰烈烈的“519行情”\"\n                },\n                {\n                    href:\"four\",\n                    name:\"互联网\",\n                    content:\" 光明日报头版：读懂中国经济的巨大韧性 \\n \"\n                    + \"那些还在发朋友圈的朋友们，才是人间珍品 \\n \"\n                    + \"电商平台不该为“代吵架服务”设摊 \\n \"\n                    + \"《从0到1》序二——读书笔记 \\n \"\n                    + \"投资2000万美元狂赚7000倍 \\n \"\n                    + \"五一消费账单来了！这个小长假，你的钱花哪了？ \\n \"\n                    + \"让数字经济更好助力高质量发展 \\n \"\n                    + \"「评论」“小降准”的大意义\"\n                },\n                {\n                    href:\"five\",\n                    name:\"房产\",\n                    content:\" 智慧城市建设莫一哄而上 \\n \"\n                    + \"二手房产权纠纷有哪些？ \\n \"\n                    + \"如何降低购房风险？ \\n \"\n                    + \"哪些城市亮瞎眼，哪些城市很失落 \\n \"\n                    + \"北京项目近况一览 \\n \"\n                    + \"当初没好好装卫生间 现在后悔死了 \\n \"\n                    + \"小户型榻榻米的制作流程 这样准没错 \\n \"\n                    + \"如何解决室内干燥 一个加湿器是不行的 \\n \"\n                    + \"新风系统有没有用 到底要不要装呢\"\n                },\n                {\n                    href:\"six\",\n                    name:\"汽车\",\n                    content:\" 15万预算，适合年轻人的2台运动轿车，颜值高实力强 \\n \"\n                    + \"牌子大口碑好销量还高，12万左右的自动挡合资轿车 \\n \"\n                    + \"大众系SUV多到脸盲？一招教你如何选 \\n \"\n                    + \"一季度轿车市场分析 \\n \"\n                    + \"网友偶遇贴特大号“实习”标志的豪车 \\n \"\n                    + \"要想涡轮坏得快，这四个错误天天犯！ \\n \"\n                    + \"汽车保养只换机油，4个零件要是不换的 \\n \"\n                    + \"去4S店“首保”，这3个细节要注意 \\n \"\n                    + \"最均衡国产10万元SUV推荐\"\n                },\n            ]\n        }\n    }\n    render() {\n        return ( \n            <div className=\"demo1\">  \n                <div className=\"content\">\n                    {\n                        this.state.anthors.map(item=>{\n                            return (\n                                <p style={{'paddingTop':'100px'}} id={item.href}> \n                                    <pre >\n                                        {item.content}\n                                    </pre>\n                                </p>\n                            )\n                        })\n                    }\n                </div>\n                <Anchor selector=\"#my-awesome-nav a\" offset='100px'>\n                    <ul id=\"my-awesome-nav\" >\n                    {\n                        this.state.anthors.map(item=>{\n                            return (\n                                <li><a href={`#${item.href}`}>{item.name}</a></li>\n                            )\n                        })\n                    }\n                    </ul>\n                </Anchor>\n            </div>\n           \n        )\n    }\n}\nexport default Demo1","desc":" 基本示例","scss_code":".demo1{\n    .content{\n        p{\n            height: 500px;\n        }\n        display: inline-block\n    }\n    .u-anchor{\n        display: inline-block;\n    }\n    #my-awesome-nav {\n        position: fixed;\n        top: 200px;\n        right: 300px;\n        li{\n            padding: 0 10px 0 12px;\n            line-height: 30px;\n            height: 30px;\n            background: #FFF;\n            a{\n                color:#424242;\n            }\n        }\n    }\n    #my-awesome-nav li.active {\n        border-left: 2px solid #E14C46;\n        padding: 0 10px;\n    }\n}"}]


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
