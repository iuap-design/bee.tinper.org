# 安装cli工具
![image.png](https://cdn.nlark.com/yuque/0/2019/png/192735/1550629201171-d6828c27-bf0f-48e7-8cc9-11e17c8bb18a.png#align=left&display=inline&height=53&name=image.png&originHeight=56&originWidth=377&size=4577&status=done&width=358)

安装cli工具来获得最新微服务工程框架，通过npm安装全局使用(注意权限问题)：

```bash
# 安装cli全局工具
npm install ucf-cli -g

# 查看版本
ucf -v

# 查看帮助
ucf -h
```

![](https://cdn.nlark.com/yuque/0/2019/gif/192735/1548558552333-14381228-5e61-42d3-8d56-cb4b84e1e795.gif#align=left&display=inline&height=501&originHeight=501&originWidth=669&size=0&status=done&width=669)

# 快速初始化

<a name="39da6755"></a>
## 创建项目

* 首先确定我们当前开发目录，在根目录自动创建`ucf-project`工程，执行如下：

```bash
ucf init ucf-project
```

![](https://cdn.nlark.com/yuque/0/2019/gif/192735/1548558921099-eeefc558-150a-4cfa-aab6-4406900dd50e.gif#align=left&display=inline&height=504&originHeight=504&originWidth=671&size=0&status=done&width=671)

* 如果你只是想初始化工程，在当前目录已经有`git`仓库的情况下，进入你存在版本控制文件夹后，执行如下：

> ucf init 会在你运行的根目录下平铺所有ucf工程文件，它不会向上面那样帮助我们创建一个单独的文件夹


```bash
ucf init
```

![](https://cdn.nlark.com/yuque/0/2019/gif/192735/1548558448433-3ad4d520-6220-4a15-a81c-53b658532ef6.gif#align=left&display=inline&height=504&originHeight=504&originWidth=671&size=0&status=done&width=671)

<a name="269f35f8"></a>
## 依赖安装
在运行微前端工程之前，需要我们安装依赖包，可以使用[npm](https://www.npmjs.com/)、[cnpm](http://npm.taobao.org/)，在园区内网还可以使用[ynpm](https://package.yonyoucloud.com)

```bash
# 切换到我们刚才创建好的工程ucf-project目录下
npm install

# 淘宝国内镜像源
cnpm install

# 用友内网镜像源
ynpm install
```

![](https://cdn.nlark.com/yuque/0/2019/gif/192735/1548572629142-e3ff2ca1-9e5f-447f-a926-1c6c30eb5e48.gif#align=left&display=inline&height=504&originHeight=504&originWidth=671&size=0&status=done&width=671)


<a name="4c763bb6"></a>
## 运行
安装好我们的依赖包后，开始运行前端服务，如下：

```bash
# 开启调试服务
npm start
```

![](https://cdn.nlark.com/yuque/0/2019/gif/192735/1548573820996-949ce7b6-18b8-4aa3-8302-d353df9fa3eb.gif#align=left&display=inline&height=504&originHeight=504&originWidth=671&size=0&status=done&width=671)

<a name="0796f2ff"></a>
### 如何访问

> 访问的路径实际上就是ucf-apps文件夹内的名字，需要配合bootList进行设置


* 访问模式一：直接访问

启动完成后按照提示访问即可！[http://127.0.0.1:3000/demo-app-org](http://127.0.0.1:3000/demo-app-org)

* 访问模式二：集成到应用平台后访问

也可以访问本地开发portal环境：[http:127.0.0.1:3000](http:127.0.0.1:3000)（访问密码：admin/123qwe，user/123qwe，demo/123qwe）。

**_注：访问模式一即通过URL的方式直接查看对应页面效果；_**<br />**_注：但为了__方便集中挂载管理，以及调试集成后效果，__单独应用或节点功能往往会被集成到应用平台的门户导航框架中，所以提供第二种访问方式。_**

<a name="02d9819d"></a>
### 提示

**默认启动端口是3000，如果被占用的话，工具会随机使用无占用端口进行开启服务，注意查看启动日志**

<a name="383aa405"></a>
## 资源构建

ucf 工程上线之前的前端构建如下：

```bash
# 开始构建前端静态资源到 ucf-publish
npm run build
```

![](https://cdn.nlark.com/yuque/0/2019/gif/192735/1548574422727-57777768-235c-4595-bd15-802ee039d850.gif#align=left&display=inline&height=504&originHeight=504&originWidth=671&size=0&status=done&width=671)



# 实现单表查询页面功能

通过前面部分的讲解，使开发者了解了一些ucf-web概念和思想，通过对项目结构的解读，相信开发者已经有了从环境安装、快速上手上面有了一些熟悉，下面通过一个案例教程来带领开发者深刻认识相关的开发机制和使用。

<a name="3bf21024"></a>
## 课程任务：开发组织管理页面
组织管理是一个ucf基础简单的组织编码管理系统，包含新增编码、名称；修改编码、名称；删除编码等。列表展示当前页数据，可以查看等；搜索区域可以按照编码和名称查询，并且可以调整搜索区分栏大小等。

首先我们来看一下，整体的微应用开发的项目是什么样子的，如图：

![1@2x.png](https://cdn.nlark.com/yuque/0/2019/png/192735/1550468087626-00577c6f-7a44-4e62-83e5-6d85477c7904.png#align=left&display=inline&height=385&name=1%402x.png&originHeight=1732&originWidth=3358&size=228949&status=done&width=746)

可以看出这个只是一个简单的增删改查组织系统，涉及到tinper-bee组件的使用、自定义封装组件、业务组件拆分等部分，下面通过详细讲解如何开发该类型系统。

<a name="141bc559"></a>
## 开发思路指导
<a name="cbe026b4"></a>
### 分析组件拆分

一个完整的开发阶段，首先需要分析我们得到的前端业务界面是什么样的，从拆分组件开始，这是为了我们后面合理拆分打下基础，通过以下几点来拆分组件。

> 整体组件划分界面：

![1@2x.png](https://cdn.nlark.com/yuque/0/2019/png/192735/1550477760394-1f456b55-9d1d-4a34-97d0-14ecdb006d02.png#align=left&display=inline&height=382&name=1%402x.png&originHeight=1718&originWidth=3358&size=244977&status=done&width=746)

> 新增弹出框：

![2@2x.png](https://cdn.nlark.com/yuque/0/2019/png/192735/1550478541120-a83649db-1630-49df-a2c9-e86ebbe28538.png#align=left&display=inline&height=180&name=2%402x.png&originHeight=462&originWidth=1910&size=51023&status=done&width=746)

1. 头部区域
1. 搜索区域
1. 按钮区域
1. 表格操作区域
1. 添加、修改复用一个Modal组件
1. 删除按钮弹出确认删除Confirm组件

按照功能来说分为四个组件，其他的新增、修改、查看都是复用一个功能组件，删除也是使用的系统级封装的组装件，然后在整体的App组件进行组合。

<a name="a84de429"></a>
### 组件拆分原则

通过上面的组件拆分分析后，我们得知，组件不是野蛮拆分，到处拆分，需要按照业务部分合理拆分，下面大致说下原则：

1. 微应用(ucf-apps)的组件拆分在自己的根目录`components`下存放；
  1. ![3@2x.png](https://cdn.nlark.com/yuque/0/2019/png/192735/1550479646510-c599e2e6-fdf6-47e6-bd9d-c5da896b7bd8.png#align=left&display=inline&height=216&name=3%402x.png&originHeight=480&originWidth=402&size=47383&status=done&width=181)
1. 如果多个微应用依赖2个以上的组件，那么需要存放在 `ucf-common/src/components` 下；
  1. ![4@2x.png](https://cdn.nlark.com/yuque/0/2019/png/192735/1550479713619-631dc0c9-4106-4746-9e9f-26ae4f2883a3.png#align=left&display=inline&height=255&name=4%402x.png&originHeight=482&originWidth=344&size=36225&status=done&width=182)
1. 需要的公共静态资源如图片、字体、图标等需要放在`ucf-common/src/static`下；
  1. ![5@2x.png](https://cdn.nlark.com/yuque/0/2019/png/192735/1550479845330-f911eb73-e6de-4a34-9e7c-f293bfe1b532.png#align=left&display=inline&height=238&name=5%402x.png&originHeight=440&originWidth=340&size=35981&status=done&width=184)
1. 公共函数库放置在`ucf-common/src/utils`下；

<a name="72a1996e"></a>
## 第一步：创建微应用
使用ucf-cli工具进行添加微应用模板

```bash
ucf new app
```

1. 输入我们的微应用名称`org-app ` 回车，选择 `singleApp`模板，回车确定创建。
1. 把新创建的微应用添加到启动器中，找到 `ucf.config.js` 文件，修改字段 `bootList`
1. <br />
```javascript
// 注释原有的两个示例，添加我们自己的
bootList: [
    // "demo-app-org",
    // "demo-app-staff",
    "org-app"
]
```

这样就创建好一个空的微应用，输入启动命令 `npm start` 访问 [http://127.0.0.1:3000/org-app](http://127.0.0.1:3000/org-app)<br />![1.png](https://cdn.nlark.com/yuque/0/2019/png/192735/1550485892246-280e3c9c-29dd-4105-b1e2-9ae48c956064.png#align=left&display=inline&height=126&name=1.png&originHeight=268&originWidth=670&size=22001&status=done&width=315)
<a name="b6a499f7"></a>
### 微应用目录说明

```bash
org-app
├── README.md								# 对组织管理进行详细需求说明
├── package.json						# 描述组织管理内部开发版本等信息
└── src											# 微应用源码目录
    ├── app.js							# 微应用入口文件，加载css、组件渲染等
    ├── app.less						# 微应用内部的全局样式
    ├── components					# 页面组件以及业务拆分解耦的组件
    │   └── App							# 默认首页组件
    │       ├── index.js		# 组件文件
    │       └── index.less	# 组件样式
    ├── container.js				# 容器组件进行组件与mirror状态连接
    ├── index.html					# 微应用页面模板
    ├── model.js						# 组织管理模型外部状态以及方法
    └── service.js					# 服务接口请求以及模型调用方法

3 directories, 10 files
```

<a name="25141d5f"></a>
### 公共业务组件说明
熟悉了基本的开发后，能有一个基础的页面了，这还是远远不够的，下面开始认识一下基本的公共业务组件都有哪些？<br />在我们的工程目录 `ucf-common/src/components` 里面有一部分已经封装好的公共组件，分别如下：

```bash
.
├── Alert
│   ├── index.js
│   └── style.less
├── Button
│   ├── index.js
│   └── index.less
├── FormError
│   └── index.js
├── Grid
│   └── index.js
├── Header
│   ├── index.js
│   └── index.less
├── Pop
│   ├── index.js
│   └── style.less
└── SearchPanel
    ├── index.js
    └── index.less

8 directories, 14 files
```

| Alert | 提示类基于Modal封装，用于弹出层 |
| --- | --- |
| Button | 基于Button封装并添加了Icon |
| FormError | 表单校验的错误提示 |
| Grid | 基于Table组件封装便捷组件，包含大量实用功能 |
| Header | 最顶层标题组件 |
| Pop | Modal弹出层基础封装 |
| SearchPanel | 基于Panel封装，具有基本的展开、搜索带表单 |

光这些公共组件还是不够的，我们应该在开发的过程中，一点点提炼出每一个微应用需要共享的组件，抽出复用的部分，合理的去解耦、复用才可以。

下面通过几个组件的拆分来完成整个页面组装
<a name="de3ad514"></a>
## 第二步：开发标题组件
添加标题类组件，首先打开首页：`ucf-apps/demo-app-org/src/components/App/index.js`

```jsx
/**
 * 组织管理模块
 */

import React, { Component } from 'react';
import Header from 'components/Header';


import './index.less';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {
        return (
            <div className="home-wrap">
                <Header title='组织管理' />
            </div>
        );
    }
}

App.displayName = 'App';
export default App;

```

添加引用 <Header /> 组件、样式，然后在 render 里面渲染使用该组件，传入标题文字”组织管理“，效果如下：<br />![2.png](https://cdn.nlark.com/yuque/0/2019/png/192735/1550488692006-b745e758-8061-4237-8afe-ecd864ec1d94.png#align=left&display=inline&height=328&name=2.png&originHeight=1478&originWidth=3358&size=136879&status=done&width=746)

<a name="1e2ec910"></a>
## 第三步：实现表格数据渲染
<a name="e78cef22"></a>
### 表格模型
这里我们不使用Table组件，使用封装好的业务组件Grid，使用之前需要先编写业务模型，打开 `ucf-apps/org-app/src/model.js`

关于模型详细定义说明 [请点击](https://www.yuque.com/ucf-web/book/qwkfvp)

```javascript
/**
 * 数据模型类
 */

import { actions } from "mirrorx";
import * as api from "./service";
import { Error } from 'utils';

export default {
    // 确定 Store 中的数据模型作用域
    name: "app",
    // 设置当前 Model 所需的初始化 state
    initialState: {
        list: [],//组织实体 ID、编码、名称
        showLoading: false,//加载Loading
        selectedList: [],//当前选择行
        queryParam: {//总的查询对象
            searchMap: {
                pageIndex: 0,//分页条-当前页
                pageSize: 15,//分页条-当前显示N页
                total: 0,//总记录数
                totalPages: 0,//分页条显示几页
                whereStatements: []//查询条件
            }
        }
    },
    reducers: {
        /**
         * 纯函数，相当于 Redux 中的 Reducer，只负责对数据的更新。
         * @param {*} state
         * @param {*} data
         */
        updateState(state, data) { //更新state
            return {
                ...state,
                ...data
            };
        }
    },
    effects: {
        /**
         * 加载数据
         * @param {*} param
         * @param {*} getState
         */
        async loadList(params, getState) {
            let { queryParam } = getState().app;
            let result = await api.getList(queryParam);
            if (result.code == 200) {
                queryParam['searchMap']['pageIndex'] = result.data.number;//当前第几页,0表示第一页
                queryParam['searchMap']['pageSize'] = result.data.size;//当前显示多少条
                queryParam['searchMap']['total'] = result.data.totalElements;//总记录数
                queryParam['searchMap']['totalPages'] = result.data.totalPages;//分页条显示几页
                actions.app.updateState({
                    list: result.data.content,
                    queryParam
                });
            } else {
                Error(result.message);
            }
        }
    }
};

```

模型我们添加了错误提示函数、状态、一个加载表格数据的方法、以及分页需要的数据参数。

<a name="a0ded85d"></a>
### 表格接口
接下来打开 `ucf-apps/org-app/src/service.js` ，添加请求URL以及请求方法

关于Service规范说明 [请点击](https://www.yuque.com/ucf-web/book/imsmy7)

```javascript
/**
 * 服务请求类
 */
import request from "ucf-request";
import { actions } from 'mirrorx';

//定义接口地址
const URL = {
    "POST_LIST": `${GROBAL_HTTP_PREFIX}/iuap/org/list`,
}

/**
 * 获取主列表
 * @param {object} params
 */
export const getList = (data) => {
    return request(URL.POST_LIST, {
        method: "post",
        data,
        start: () => actions.app.updateState({ showLoading: true }),
        end: () => actions.app.updateState({ showLoading: false })
    });
}
```

<a name="85654e5a"></a>
### 表格组件
有了数据模型以及请求接口后，现在添加真正的表格组件：

修改 `ucf-apps/org-app/src/components/App/index.js` 

```jsx
/**
 * 组织管理模块
 */

import React, { Component } from 'react';
import mirror, { actions } from 'mirrorx';
import { getHeight, Warning, Error, Info, deepClone } from 'utils';
import { Loading, Icon } from 'tinper-bee';
import Header from 'components/Header';

import Grid from 'components/Grid';


import './index.less';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableHeight: 0,//动态计算表格高度
        }
    }

    componentWillMount() {
        //计算表格滚动条高度
        this.resetTableHeight(true);
    }
    componentDidMount() {
        actions.app.loadList();
    }
    //定义Grid的Columns
    column = [
        {
            title: "操作区",
            dataIndex: "op",
            key: "op",
            width: 90,
            fixed: 'left',
            render: (text, record, index) => {
                return <div className="org-grid-operate">
                    <Icon onClick={() => this.handlerEdit(text, record, index, 1)} type="uf-pencil-s" />
                    <Icon onClick={() => this.handlerEdit(text, record, index, 2)} type="uf-search" />
                </div>
            }
        },
        {
            title: "编码",
            dataIndex: "code",
            key: "code",
            width: 150
        },
        {
            title: "名称",
            dataIndex: "name",
            key: "name",
            width: 120
        }]

    /**
     * 操作栏内的编辑
     *
     * @param {string} text 该字段的值
     * @param {object} record 整行字段的记录
     * @param {number} index 当前行索引
     */
    handlerEdit = (text, record, index, btnFlag) => {
        this.setState({
            editModelVisible: true,
            btnFlag,
            rowData: record
        });
    }
    /**
    * 重置表格高度计算回调
    *
    * @param {bool} isopen 是否展开
    */
    resetTableHeight = (isopen) => {
        let tableHeight = 0;
        if (isopen) {
            //展开的时候并且适配对应页面数值px
            tableHeight = getHeight() - 400
        } else {
            //收起的时候并且适配对应页面数值px
            tableHeight = getHeight() - 280
        }
        this.setState({ tableHeight });
    }
    /**
         * 分页条点击第几页或者输入第几页点击确定回调
         *
         * @param {number} pageIndex 当前跳转第几页
     */
    freshData = (pageIndex) => {
        //抽出原有查询条件
        let queryParam = deepClone(this.props.queryParam);
        //修改现有查询条件
        queryParam['searchMap']['pageIndex'] = pageIndex - 1;
        //写入查询条件
        actions.app.updateState({ queryParam });
        actions.app.loadList();
    }
    /**
     * 选中后的checkbox
     *
     * @param {array} selected 选择后返回的选中项，包含_checked字段
     */
    getSelectedDataFunc = (selectedList) => {
        actions.app.updateState({ selectedList });
    }
    /**
     * 分页条下拉显示每页N条回调
     *
     * @param {*} numberIndex 当前下拉的索引
     * @param {*} pageSize 每页显示N条回调
     */
    onDataNumSelect = (numberIndex, pageSize) => {
        //抽出原有查询条件
        let queryParam = deepClone(this.props.queryParam);
        //修改现有查询条件
        queryParam['searchMap']['pageSize'] = Number(pageSize);//当前显示几条
        queryParam['searchMap']['pageIndex'] = 0;//当前页码
        //写入查询条件
        actions.app.updateState({ queryParam });
        actions.app.loadList();
    }
    render() {
        const _this = this;
        let { tableHeight, showPop, editModelVisible, btnFlag, rowData } = _this.state;
        let { list, showLoading, queryParam } = _this.props;
        //分页条数据
        const paginationObj = {
            activePage: queryParam.searchMap.pageIndex + 1,//当前页
            items: queryParam.searchMap.totalPages,//总分页数
            total: queryParam.searchMap.total,//总条数
            freshData: _this.freshData,//点击第几页跳转
            onDataNumSelect: _this.onDataNumSelect,//下拉选择每页选择多少条
        }
        return (
            <div className="home-wrap">
                <Header title='组织管理' />
                <Grid
                    className="org-grid"
                    rowKey={'id'}//表格内使用的唯一key用于性能优化
                    columns={this.column}//定义列数据
                    paginationObj={paginationObj}//分页数据
                    data={list}//grid数据
                    getSelectedDataFunc={this.getSelectedDataFunc}//选择数据后的回调
                />
                <Loading fullScreen={true} show={showLoading} loadingType="line" />
            </div>
        );
    }
}

App.displayName = 'App';
export default App;

```

补全部分样式 修改 `ucf-apps/demo-app-org/src/components/App/index.less`

```less
.home-wrap {
    padding-top: 60px;
    .org-grid {
        box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.1);
        margin-left: 10px;
        margin-right: 10px;
        .u-pagination {
            margin-left: 10px;
            margin-right: 10px;
        }
    }
    .org-buttons {
        background: #F7F9FB;
        padding: 10px 15px;
        margin-bottom: 10px;
        margin-left: 10px;
        margin-right: 10px;
        box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.1);
        .u-button {
            height: 30px;
        }
        .u-button+.u-button {
            margin-left: 12px;
        }
    }
    .org-grid-operate {
        text-align: center;
        height: 16px;
        line-height: 16px;
        i.uf {
            font-size: 20px;
            cursor: pointer;
            transition: all .5s;
            &:hover {
                color: #0088ec;
            }
        }
    }
}
```

运行后的效果如下：

![3.png](https://cdn.nlark.com/yuque/0/2019/png/192735/1550490302410-56225e81-3b8c-49ee-8a59-e82fb6ee6808.png#align=left&display=inline&height=374&name=3.png&originHeight=1680&originWidth=3354&size=213306&status=done&width=746)<br />目前我们的页面只有一个显示标题和一个基本数据展示的表格，下面添加搜索区域组件

<a name="dd774cef"></a>
## 第四步：实现表单查询
创建组件文件夹：`ucf-apps/org-app/src/components/SearchArea`<br />添加我们需要查询的两个字段 编码和名称，组织好后端查询参数

index.js

```jsx
/**
 * 搜索区组件
 */

//React所需
import React, { Component } from 'react';
//状态管理
import { actions } from "mirrorx";
//Tinper-bee组件库
import { Col, Row, FormControl, Label } from "tinper-bee";
//表单
import Form from 'bee-form';

//加载工具类
import { deepClone } from "utils";

//其他
import SearchPanel from 'components/SearchPanel';

import './index.less';

//所需变量
const { FormItem } = Form;

class SearchArea extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    /** 执行查询方法回调
     * @param {array} error 校验是否成功
     * @param {json} values 表单数据
     */
    search = (error, values) => {
        let queryParam = deepClone(this.props.queryParam);
        // console.log(queryParam);
        let statement = [];//queryParam['searchMap']['whereStatements'];
        let Keys = Object.keys(values);
        let Vals = Object.values(values);
        for (let i = 0; i < Keys.length; i++) {
            statement.push({
                condition: 'LIKE',
                key: Keys[i],
                value: Vals[i]
            });
        }
        queryParam['searchMap']['whereStatements'] = statement;
        actions.app.updateState({ queryParam });
        actions.app.loadList();
    }

    /**
     * 重置 如果无法清空，请手动清空
     *
     */
    reset = () => {
        // actions.app.loadList();
    }


    render() {
        const { getFieldProps } = this.props.form;
        const { form, searchOpen, onCallback } = this.props;
        return (
            <SearchPanel
                className='search-area'
                form={form}
                searchOpen={searchOpen}
                reset={this.reset}
                onCallback={onCallback}
                search={this.search}>
                <Row>
                    <Col md={6} xs={6}>
                        <FormItem>
                            <Label>编码</Label>
                            <FormControl placeholder="编码查询" {...getFieldProps('code', { initialValue: '' })} />
                        </FormItem>
                    </Col>
                    <Col md={6} xs={6}>
                        <FormItem>
                            <Label>名称</Label>
                            <FormControl placeholder="名称查询" {...getFieldProps('name', { initialValue: '' })} />
                        </FormItem>
                    </Col>
                </Row>
            </SearchPanel>
        )
    }
}

SearchArea.displayName = 'SearchArea';
export default Form.createForm()(SearchArea)

```

index.less

```less
// form 布局样式
.form-panel {
    margin-left: 10px;
    margin-right: 10px;
    .u-form-item {
        min-width: 100%;
        margin-bottom: 4px;
        min-height: 48px;
        height: 48px;
        .u-form-control {
            height: 32px;
            width: 200px;
        }
        .u-label {
            min-width: 90px;
            display: inline-block;
            text-align: right;
            position: relative;
            height: 32px;
            line-height: 32px;
            padding-right: 8px;
        }
        .u-label:after {
            display: inline-block;
            margin-right: 4px;
            content: "  ";
            line-height: 1;
            font-size: 14px;
            color: #f5222d;
            font-family: monospace;
            width: 5px;
        }
        .u-label+* {
            width: 200px;
            display: inline-block;
        }
        .mast:after {
            content: "*";
        }
        .datepicker-input-group {
            .u-form-control {
                width: 100%;
            }
            .u-input-group-btn {
                top: 4px;
            }
        }
        .u-switch {
            width: 44px;
        }
        .u-switch.is-checked {
            border-color: #004898;
            background-color: #004898;
        }
        .u-select {
            width: 200px;
            color: #424242;
            .u-select-selection {
                height: 32px;
                .u-select-selection-rendered {
                    line-height: 32px;
                }
            }
        }
        .u-select.u-select-disabled {
            color: #bdbdbd;
        }
        .calendar-picker {
            display: inline-block;
            width: 200px;
            input {
                width: 100%;
            }
        }
        .error {
            margin-left: 90px;
            color: #fff;
            display: block;
            font-size: 12px;
            margin-top: 2px;
            line-height: 14px;
            background: red;
            width: 200px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }
        .u-form-control-close {
            width: auto;
            .u-form-control {
                width: 100%;
            }
        }
        .u-form-control[readonly="readonly"] {
            background: #eee;
            border-color: #e0e0e0;
            color: #424242;
            cursor: not-allowed;
        }
        .refInputWrap {
            // 参照
            input {
                width: 200px;
                min-width: auto;
            }
        }
    }
    .u-form-item.time {
        .u-label {
            bottom: 10px;
        }
        .error {
            position: relative;
            top: -10px;
        }
        .u-input-number {
            .u-form-control {
                width: 100%;
            }
        }
        .u-input-number.u-input-group.simple {
            .u-input-group-btn {
                .icon-group {
                    height: 32px;
                }
            }
        }
    }
}
```

这样创建好搜索区组件后，添加到我们的页面里。

<a name="a4e6dcfe"></a>
### 使用搜索区组件
添加引用：

```jsx
import SearchArea from '../SearchArea';
```

使用组件：

```jsx
return (
  <div className="home-wrap">
    <Header title='组织管理' />
    <SearchArea
      queryParam={queryParam}
      status={status}
      searchOpen={true}
      onCallback={this.resetTableHeight}
      />
    <Grid
      className="org-grid"
      rowKey={'id'}//表格内使用的唯一key用于性能优化
      columns={this.column}//定义列数据
      paginationObj={paginationObj}//分页数据
      data={list}//grid数据
      getSelectedDataFunc={this.getSelectedDataFunc}//选择数据后的回调
      />
    <Loading fullScreen={true} show={showLoading} loadingType="line" />
  </div>
);
```

运行后截图如下：

![4.png](https://cdn.nlark.com/yuque/0/2019/png/192735/1550491814388-d3475d83-52e6-4457-b387-4f5c3a750291.png#align=left&display=inline&height=383&name=4.png&originHeight=1704&originWidth=3320&size=222554&status=done&width=746)

<a name="53eb244c"></a>
## 第五步：完善表格操作

<a name="abe4718a"></a>
### 添加按钮区组件
按钮区组件无非是几个按钮展示，这里我们不在封装成单独组件，只需要普通的布局即可。

导入系统封装按钮：

```jsx
import Button from 'components/Button';
```
设置按钮区域布局：

```jsx
<div className="org-buttons">
  <Button iconType="uf-plus" onClick={this.handlerAdd}>新增</Button>
  <Button iconType="uf-del" onClick={this.handlerDelete}>删除</Button>
</div>
```
运行后的效果如下：<br />![5.png](https://cdn.nlark.com/yuque/0/2019/png/192735/1550491985509-34e6a1de-819e-48ac-b0ec-b93485080d59.png#align=left&display=inline&height=387&name=5.png&originHeight=1726&originWidth=3324&size=227085&status=done&width=746)

<a name="02bde435"></a>
### 编写弹出层
目前我们的表格只能查询和展示，还没有具体的添加功能，下面通过Modal组件来编写添加弹出框。

创建弹出层组件 `ucf-apps/demo-app-org/src/components/OrgModal/index.js`

```jsx
/**
 * 弹出编辑
 */
import React, { Component } from 'react';
import { Col, Row, FormControl, Label } from "tinper-bee";
import { actions } from "mirrorx";
import Form from 'bee-form';
import { Error, Info } from 'utils';
import PopDialog from 'components/Pop';
import FormError from 'components/FormError';

const { FormItem } = Form;

class OrgModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            btnFlag: props.btnFlag,//当前按钮状态
            rowData: props.rowData,//数据
        }
    }
    titleArr = ["新增", "修改", "详情"];

    componentWillReceiveProps(nextProps) {
        this.setState({
            btnFlag: nextProps.btnFlag,
            rowData: nextProps.rowData
        });
    }

    onSubmitEdit = () => {
        let _this = this;
        const { btnFlag } = _this.state;
        const { rowData: { id } } = _this.props;
        _this.props.form.validateFields(async (err, values) => {
            if (!err) {
                switch (btnFlag) {
                    case 0:
                        let resultInsert = await actions.app.postInsert(values);
                        if (resultInsert) {
                            this.onCloseEdit();
                            actions.app.loadList();
                            Info('数据添加成功,已刷新');
                        } else {
                            Error('添加数据失败');
                        }
                        break;
                    case 1:
                        let resultUpdate = await actions.app.postUpdate({ id, ...values });
                        if (resultUpdate) {
                            this.onCloseEdit();
                            actions.app.loadList();
                            Info('数据修改成功,已刷新');
                        } else {
                            Error('修改数据失败');
                        }
                        break;
                    case 2:

                        break;

                    default:
                        break;
                }
            }
        });
    }
    onCloseEdit = () => {
        let { close } = this.props;
        close && close();
    }

    /**
     *
     * @description 底部按钮是否显示处理函数
     * @param {Number} btnFlag 为页面标识
     * @returns footer中的底部按钮
     */
    onHandleBtns = (btnFlag) => {
        let _this = this;
        let btns = [
            {
                label: '确定',
                fun: _this.onSubmitEdit,
                icon: 'uf-correct'
            },

            {
                label: '取消',
                fun: this.onCloseEdit,
                icon: 'uf-back'
            }
        ];

        if (btnFlag == 2) {
            btns = [];
        }
        return btns;
    }
    render() {
        let _this = this;
        const { form, editModelVisible } = _this.props;
        const { rowData, btnFlag } = _this.state;
        const { getFieldProps, getFieldError } = form;
        let btns = _this.onHandleBtns(btnFlag);
        const {
            id,
            code,
            name,
            ts
        } = rowData;
        return (
            <div>
                <PopDialog show={editModelVisible}
                    title={this.titleArr[btnFlag]}
                    size='lg'
                    btns={btns}
                    autoFocus={false}
                    enforceFocus={false}
                    close={this.onCloseEdit}>
                    <Row className='form-panel'>
                        <Col md={6} xs={6} sm={6}>
                            <FormItem>
                                <Label>编码</Label>
                                <FormControl disabled={btnFlag == 2}
                                    {...getFieldProps('code', {
                                        initialValue: code || '',
                                        rules: [{
                                            required: true,
                                            message: '请输入编码',
                                        }]
                                    })}
                                />
                                <FormError errorMsg={getFieldError('code')} />
                            </FormItem>
                        </Col>
                        <Col md={6} xs={6} sm={6}>
                            <FormItem>
                                <Label>名称</Label>
                                <FormControl disabled={btnFlag == 2}
                                    {...getFieldProps('name', {
                                        initialValue: name || '',
                                        rules: [{
                                            required: true,
                                            message: '请输入名称',
                                        }]
                                    })}
                                />
                                <FormError errorMsg={getFieldError('name')} />
                                <FormControl type="hidden"
                                    {...getFieldProps('id', {
                                        initialValue: id
                                    })}
                                />
                                <FormControl type="hidden"
                                    {...getFieldProps('ts', {
                                        initialValue: ts
                                    })}
                                />
                            </FormItem>
                        </Col>
                    </Row>
                </PopDialog>
            </div>
        );
    }
}

OrgModal.displayName = 'OrgModal';
export default Form.createForm()(OrgModal);
```

这里首先是使用了之前讲解的Pop组件，基于这个组件又继续做了普通的布局，然后编写表单，对外props又设置了btnFlag参数，如果为空，表示是新增数据，有值代表是修改数据，通过Form组件来获取数据和写数据，rowData是数据，其他的就是对Form表单组件进行布局。<br />此时我们的组件结构应该是这样：

```bash
components
├── App
│   ├── index.js
│   └── index.less
├── OrgModal
│   └── index.js
└── SearchArea
    ├── index.js
    └── index.less

3 directories, 5 files
```


<a name="cce00c6d"></a>
### 使用弹出层
这里的弹出层组件就是上面我们封装的，用于我们的新增、修改、查看，通过rowData和btnFlag来区分出来不同状态。

导入需要的弹出层公共组件，新增、修改、查看共用一个：

```jsx
import OrgModal from '../OrgModal';
```

添加内部简单的状态：

```jsx
this.state = {
    tableHeight: 0,//动态计算表格高度
    showPop: false,//是否显示Pop
    btnFlag: 0,//新增0、修改1、查看2
    editModelVisible: false,//新增、编辑
    rowData: {},//修改的时候数据
}
```

添加弹出层组件到布局上面：<br />render部分：<br />这次我们添加上自动调节表格高度的属性 `tableHeight`
```jsx
<Grid
  className="org-grid"
  rowKey={'id'}//表格内使用的唯一key用于性能优化
  columns={this.column}//定义列数据
  paginationObj={paginationObj}//分页数据
  data={list}//grid数据
  getSelectedDataFunc={this.getSelectedDataFunc}//选择数据后的回调
  scroll={{ y: tableHeight }}//固定表头出现y滚动条动态计算
  />
<OrgModal
  rowData={rowData}//弹窗内需要的数据，有数据就是修改，无数据就是新增
  close={this.onClickModalClose}//关闭窗体回调
  btnFlag={btnFlag}//操作按钮状态也代表当前新增、修改、查看不同模式
  editModelVisible={editModelVisible}//显示弹出框
  />
```

然后添加弹出层需要的函数：

```jsx
    /**
     * 添加组织数据（Modal）
     *
     */
    handlerAdd = () => {
        this.setState({
            editModelVisible: true,
            btnFlag: 0,
            rowData: {}
        });
    }
		/**
     * 操作栏内的编辑
     *
     * @param {string} text 该字段的值
     * @param {object} record 整行字段的记录
     * @param {number} index 当前行索引
     */
    handlerEdit = (text, record, index, btnFlag) => {
        this.setState({
            editModelVisible: true,
            btnFlag,
            rowData: record
        });
    }

    /**
     * 弹出信息框取消
     *
     */
    onClickModalClose = () => {
        this.setState({
            editModelVisible: false
        });
    }
```

<a name="32c02f02"></a>
### 请求模型
添加相应的请求方法<br />修改 `ucf-apps/org-app/src/model.js`
```javascript
        /**
         * 删除数据
         * @param {*} param
         * @param {*} getState
         */
        async postDelete(params, getState) {
            let { selectedList: deleteList } = getState().app;
            let result = await api.postDelete([deleteList[0]['id']]);
            if (result.code == 200) {
                return true;
            } else {
                return false;
            }
        },
				/**
         * 添加数据
         * @param {*} param
         * @param {*} getState
         */
        async postInsert(params, getState) {
            let result = await api.postInsert(params);
            if (result.code == 200) {
                return true;
            } else {
                return false;
            }
        },
        /**
         * 修改数据
         * @param {*} param
         * @param {*} getState
         */
        async postUpdate(params, getState) {
            let result = await api.postUpdate(params);
            if (result.code == 200) {
                return true;
            } else {
                return false;
            }
        }
```

添加服务请求类：<br />修改 `ucf-apps/org-app/src/service.js`

```javascript
//定义接口地址
const URL = {
    "POST_LIST": `${GROBAL_HTTP_PREFIX}/iuap/org/list`,
    "POST_DELETE": `${GROBAL_HTTP_PREFIX}/iuap/org/delete`,
    "POST_INSERT": `${GROBAL_HTTP_PREFIX}/iuap/org/add`,
    "POST_UPDATE": `${GROBAL_HTTP_PREFIX}/iuap/org/update`
}

/**
 * 删除数据
 * @param {object} params
 */
export const postDelete = (data) => {
    return request(URL.POST_DELETE, {
        method: "post",
        data,
        start: () => actions.app.updateState({ showLoading: true }),
        end: () => actions.app.updateState({ showLoading: false })
    });
}

/**
 * 添加数据
 * @param {object} params
 */
export const postInsert = (data) => {
    return request(URL.POST_INSERT, {
        method: "post",
        data,
        start: () => actions.app.updateState({ showLoading: true }),
        end: () => actions.app.updateState({ showLoading: false })
    });
}

/**
 * 修改数据
 * @param {object} params
 */
export const postUpdate = (data) => {
    return request(URL.POST_UPDATE, {
        method: "post",
        data,
        start: () => actions.app.updateState({ showLoading: true }),
        end: () => actions.app.updateState({ showLoading: false })
    });
}
```

<a name="f86e4b09"></a>
### 添加删除
前面已经有了删除按钮，现在添加删除事件，选择复选框，点击删除按钮，弹出封装后的Alert组件，最终确认进行删除

添加事件，显示确认删除框：
```jsx
    /**
     *  批量删除组织数据（Modal）
     *
     */
    handlerDelete = () => {
        let { selectedList: deleteList } = this.props;
        if (deleteList.length > 0) {
            if (deleteList.length > 1) {//目前删除仅支持单条
                Warning('请选择单条进行删除操作');
            } else {
                this.setState({ showPop: true });
            }

        } else {
            Warning('请选择要删除的数据');
        }
    }
```

如果选择了要删除的数据，显示删除确认框：

```jsx
<div className="org-buttons">
  <Button iconType="uf-plus" onClick={this.handlerAdd}>新增</Button>
  <Button iconType="uf-del" onClick={this.handlerDelete}>删除</Button>
  <Alert
    show={showPop}
    context="是否要删除 ?"
    confirmFn={this.onClickPopDelete}
    cancelFn={this.onClickPopCancel}
    />
</div>
```

删除逻辑函数：

```jsx
    /**
     * 删除确认框的取消
     *
     */
    onClickPopCancel = () => {
        this.setState({ showPop: false });
    }

    /**
     * 确认删除开始发送请求给后端
     *
     */
    onClickPopDelete = async () => {
        this.setState({ showPop: false });
        let result = await actions.app.postDelete();
        if (result) {
            actions.app.loadList();
            Info('删除数据操作成功，已刷新');
        } else {
            Error('删除数据发生了错误');
        }
    }
```


## 更多学习资源
 
&nbsp;&nbsp;1、 项目脚手架可以使用 ucf-web 工具来初始化项目,一个专注于性能与效率的前端微应用开发框架 [快速上手使用](https://github.com/iuap-design/ucf-web/blob/master/README.md)

&nbsp;&nbsp;2、 包的下载管理可以使用ynpm。ynpm是一款基于用友内部的镜像库，为用友内部打造一个优质的代码共享平台、业务组件的多样性、组件能力最大化的输出。ynpm还提供组件的上传、下载的以及热门组件的统计。
[快速上手使用](https://package.yonyoucloud.com/#/guide)


&nbsp;&nbsp;3、CDN 使用自己定制的主题tinper-bee，生成CDN地址[工具上手连接](https://github.com/iuap-design/tinper-bee-theme-cli/blob/master/README.md)