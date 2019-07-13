import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Drawer from 'bee-drawer';
import Clipboard from 'bee-clipboard'; 



var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var Demo4 = require("./demolist/Demo4");var Demo5 = require("./demolist/Demo5");var DemoArray = [{"example":<Demo1 />,"title":" 单表查询","code":"/**\n *\n * @title 单表查询\n * @description \n *\n */\nimport React, { Component } from 'react';\nimport {  } from 'tinper-bee';\nimport PageLayout from \"tinper-bee/lib/src\";;\n\nconst Header = PageLayout.Header;\nconst SearchArea = PageLayout.SearchArea;\nconst TableContent = PageLayout.TableContent;\n\nclass Demo1 extends Component {\n    render() {\n        return (    \n            <div className=\"demo1\">\n                <PageLayout>\n                    <Header>\n                        我是Header区域\n                    </Header>\n                    <SearchArea>\n                        我是查询区域\n                    </SearchArea>\n                    <TableContent>\n                        我是表格区域\n                    </TableContent>\n                </PageLayout>\n            </div>\n        )\n    }\n}\n","desc":" ","scss_code":".demo1 {\n    background: #C0C5CF;\n    padding: 16px;\n    .bee-page-layout {\n\n        // Header\n        .header {\n            text-align: center;\n            line-height: 48px;\n            background: #EBECF0;\n        }\n\n        // searchArea\n        .search-area {\n            text-align: center;\n            line-height: 40px;\n            background: #F7F9FB;\n        }\n\n        //table展示区域\n        .table-container {\n            min-height: 500px;\n            text-align: center;\n            padding-top: 100px;\n            background: #fff;\n        }\n    }\n}"},{"example":<Demo2 />,"title":" 树表/卡","code":"/**\n *\n * @title 树表/卡\n * @description \n *\n */\nimport React, { Component } from 'react';\nimport {  } from 'tinper-bee';\nimport PageLayout from \"tinper-bee/lib/src\";;\n\nconst Header = PageLayout.Header;\nconst SearchArea = PageLayout.SearchArea;\nconst Content = PageLayout.Content;\nconst TableContent = PageLayout.TableContent;\nconst LeftContent = PageLayout.LeftContent;\nconst RightContent = PageLayout.RightContent;\n\nclass Demo2 extends Component {\n    render() {\n        return (\n            <div className=\"demo2\">\n                <PageLayout>\n                    <Header>\n                        我是Header区域\n                    </Header>\n                    <Content>\n                        <LeftContent>\n                            我是树区域\n                        </LeftContent>\n                        <RightContent>\n                            <SearchArea>\n                                我是查询区域\n                            </SearchArea>\n                            <TableContent>\n                                我是表格区域\n                            </TableContent>\n                        </RightContent>\n                    </Content>\n                </PageLayout>\n            </div>\n        )\n    }\n}\n","desc":" ","scss_code":".demo2 {\n    background: #C0C5CF;\n    padding: 16px;\n    .bee-page-layout {\n\n        // Header\n        .header {\n            text-align: center;\n            line-height: 48px;\n            background: #EBECF0;\n        }\n\n        // searchArea\n        .search-area {\n            text-align: center;\n            line-height: 40px;\n            background: #F7F9FB;\n        }\n\n        //table展示区域\n        .table-container {\n            min-height: 500px;\n            text-align: center;\n            padding-top: 100px;\n            background: #fff;\n        }\n\n        // 主内容区\n        .content {}\n\n        //左侧展示区域\n        .left-content {\n            min-height: 540px;\n            text-align: center;\n            padding-top: 100px;\n            background: #F7F9FB;\n        }\n\n        //右侧展示区域\n        .right-content {}\n    }\n}"},{"example":<Demo3 />,"title":" 主子表(上下)","code":"/**\n *\n * @title 主子表(上下)\n * @description \n *\n */\nimport React, { Component } from 'react';\nimport {  } from 'tinper-bee';\nimport PageLayout from \"tinper-bee/lib/src\";;\n\nconst Header = PageLayout.Header;\nconst SearchArea = PageLayout.SearchArea;\nconst TableContent = PageLayout.TableContent;\n\nclass Demo3 extends Component {\n    render() {\n        return (\n            <div className=\"demo3\">\n                <PageLayout>\n                    <Header>\n                        我是Header区域\n                    </Header>\n                    <SearchArea>\n                        我是查询区域\n                    </SearchArea>\n                    <TableContent>\n                        我是表格区域主表\n                    </TableContent>\n                    <TableContent>\n                        我是表格区域子表\n                    </TableContent>\n                </PageLayout>\n            </div>\n        )\n    }\n}\n","desc":" ","scss_code":".demo3 {\n    background: #C0C5CF;\n    padding: 16px;\n    .bee-page-layout {\n\n        // Header\n        .header {\n            text-align: center;\n            line-height: 48px;\n            background: #EBECF0;\n        }\n\n        // searchArea\n        .search-area {\n            text-align: center;\n            line-height: 40px;\n            background: #F7F9FB;\n        }\n\n        //table展示区域\n        .table-container {\n            min-height: 500px;\n            text-align: center;\n            padding-top: 100px;\n            background: #fff;\n            margin-bottom: 10px;\n        }\n    }\n}"},{"example":<Demo4 />,"title":" 主子表(左右)","code":"/**\n *\n * @title 主子表(左右)\n * @description \n *\n */\nimport React, { Component } from 'react';\nimport {  } from 'tinper-bee';\nimport PageLayout from \"tinper-bee/lib/src\";;\n\nconst Header = PageLayout.Header;\nconst SearchArea = PageLayout.SearchArea;\nconst Content = PageLayout.Content;\nconst TableContent = PageLayout.TableContent;\nconst LeftContent = PageLayout.LeftContent;\nconst RightContent = PageLayout.RightContent;\n\nclass Demo4 extends Component {\n    render() {\n        return (\n            <div className=\"demo4\">\n                <PageLayout>\n                    <Header>\n                        我是Header区域\n                    </Header>\n                    <SearchArea>\n                        我是查询区域\n                    </SearchArea>\n                    <Content>\n                        <LeftContent md={6}>\n                            <TableContent>\n                                我是表格区域主表\n                            </TableContent>\n                        </LeftContent>\n                        <RightContent md={6}>\n                            <TableContent>\n                                我是表格区域子表\n                            </TableContent>\n                        </RightContent>\n                    </Content>\n                </PageLayout>\n            </div>\n        )\n    }\n}\n","desc":" ","scss_code":".demo4 {\n    background: #C0C5CF;\n    padding: 16px;\n    .bee-page-layout {\n\n        // Header\n        .header {\n            text-align: center;\n            line-height: 48px;\n            background: #EBECF0;\n        }\n\n        // searchArea\n        .search-area {\n            text-align: center;\n            line-height: 40px;\n            background: #F7F9FB;\n        }\n\n        //table展示区域\n        .table-container {\n            min-height: 500px;\n            text-align: center;\n            padding-top: 100px;\n            background: #fff;\n        }\n\n        // 主内容区\n        .content {}\n\n        //左侧展示区域\n        .left-content {}\n\n        //右侧展示区域\n        .right-content {}\n    }\n}"},{"example":<Demo5 />,"title":" 卡表","code":"/**\n *\n * @title 卡表\n * @description \n *\n */\nimport React, { Component } from 'react';\nimport {  } from 'tinper-bee';\nimport PageLayout from \"tinper-bee/lib/src\";;\n\nconst Header = PageLayout.Header;\nconst SearchArea = PageLayout.SearchArea;\nconst TableContent = PageLayout.TableContent;\n\nclass Demo1 extends Component {\n    render() {\n        return (    \n            <div className=\"demo5\">\n                <PageLayout>\n                    <Header>\n                        我是Header区域\n                    </Header>\n                    <SearchArea>\n                        我是表单区域\n                    </SearchArea>\n                    <TableContent>\n                        我是表格区域\n                    </TableContent>\n                </PageLayout>\n            </div>\n        )\n    }\n}\n","desc":" ","scss_code":".demo5 {\n    background: #C0C5CF;\n    padding: 16px;\n    .bee-page-layout {\n\n        // Header\n        .header {\n            text-align: center;\n            line-height: 48px;\n            background: #EBECF0;\n        }\n\n        // searchArea\n        .search-area {\n            min-height: 150px;\n            text-align: center;\n            line-height: 150px;\n            background: #F7F9FB;\n        }\n\n        //table展示区域\n        .table-container {\n            min-height: 500px;\n            text-align: center;\n            padding-top: 100px;\n            background: #fff;\n        }\n    }\n}"}]


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
