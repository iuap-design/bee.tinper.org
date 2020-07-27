# bee.tinper.org

基础组件官网


## 更新组件步骤

1、在 `app/utils/getRelease.js` 配置 github token和user

2、执行 `npm run writeNew` 更新组件相关文件

3、在 `bee.tinper.org/app/utils` 下新建 `ossConfig.json` 文件，填写 oss 配置信息，格式如下

    ```
    {
        "accessKeyId": "xxxxxxx",
        "accessKeySecret": "xxxxx",
        "bucket": "xxxxx",
        "region": "xxxxx"
    }
    ```
5、执行 `npm run putCDN` 将各版本文件上传到cdn上

6、执行 `npm start ` 本地运行


注意：
- 步骤 2 需要 本机 github网络较好，读取需要更新的组件下载并覆盖本地文件
- 如有新增组件，可以使用 `npm run writeFile1`命令，增量下载组件
- `npm run writeFile`命令，移除所有已下载的tinper-bee组件，重新下载，由于网络原因不建议使用此命令


## 新增组件步骤

1、在 `sidebar.json` 文件中新增组件菜单

2、在 `componentsSource.json` 文件中新增组件


## 新增文档，修改文档步骤

1、 在 `sidebar.json` 文件中新增或者修改 文档 菜单名称、menus

- 注：menus为文档内所有二级标题


## 设置有组件有更新红点的办法

- 默认在创建 demo.js时候，会将组件写入 new.json 文件中，在new.json文件中存在的组件会有红点

- 如需要手动增加 组件，修改 new.json 文件即可，注意要在 npm run getTag 之后修改