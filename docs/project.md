# 项目实战

## 安装cli工具

![image](https://user-images.githubusercontent.com/3817644/54671311-a3cac880-4b30-11e9-98e8-2f21456433be.png)


安装cli工具来获得最新微服务工程框架，通过npm安装全局使用(注意权限问题)：

```bash
# 安装cli全局工具
npm install ucf-cli -g

# 查看版本
ucf -v

# 查看帮助
ucf -h
```


## 快速初始化

### 创建项目

* 首先确定我们当前开发目录，在根目录自动创建`ucf-project`工程，执行如下：

```bash
ucf init ucf-project
```


### 依赖安装
在运行微前端工程之前，需要我们安装依赖包，可以使用[npm](https://www.npmjs.com/)、[cnpm](http://npm.taobao.org/)，在园区内网还可以使用[ynpm](https://package.yonyoucloud.com)

```bash
# 切换到我们刚才创建好的工程ucf-project目录下
npm install

# 淘宝国内镜像源
cnpm install

# 用友内网镜像源
ynpm install
```



### 运行
安装好我们的依赖包后，开始运行前端服务，如下：

```bash
# 开启调试服务
npm start
```


### 如何访问

 访问的路径实际上就是ucf-apps文件夹内的名字，需要配合bootList进行设置


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




## 安装组件库

脚手架已经内置组件

```bash
npm install tinper-bee --save
```

## 使用组件库

### 创建微应用

首先通过ucf-cli的命令来创建一个微应用`admin`

```bash
ucf new app
```

输入名称 `admin` 选择 `MPA` 即可，

### 修改结构

修改 `ucf-apps/admin/src/components/App/index.js` 如下：

```js
/**
 * App模块
 */

import React, { Component } from 'react';
import { Table } from 'tinper-bee';
import './index.less';

class App extends Component {
    columns = [
        { title: "用户名", dataIndex: "a", key: "a", width: 300, },
        { id: "123", title: "性别", dataIndex: "b", key: "b", width: 500 },
        { title: "年龄", dataIndex: "c", key: "c", width: 200 }
    ];
    data = [
        { a: "令狐冲", b: "男", c: 41, d: "操作", key: "1" },
        { a: "杨过叔叔的女儿黄蓉", b: "男", c: 67, d: "操作", key: "2" },
        { a: "郭靖", b: "男", c: 25, d: "操作", key: "3" }
    ];
    render() {
        return (
            <div className="app-wrap">
                <Table
                    columns={this.columns}
                    data={this.data}
                    onRowClick={(record, index, indent) => {
                        console.log(record, index);
                    }}
                />
            </div>
        );
    }
}

App.displayName = "App";
export default App;

```

最终演示效果：  ![image](https://user-images.githubusercontent.com/3817644/54670257-33bb4300-4b2e-11e9-8b70-e1147ce3bd36.png)
