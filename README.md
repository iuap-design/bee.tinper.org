# bee.tinper.org

基础组件官网


## 更新组件步骤

1、在 `app/utils/getRelease.js` 配置 github token和user

2、执行 `npm run writeFile` 更新组件相关文件

3、下载 https://github.com/tinper-bee/tinper-bee-components 项目,server/createFile.js 文件中填写 oss 配置，运行如下命令，更新demo.js，demo.css

    ```
    npm run getTag 

    npm run createFile 
    ```

4、执行 `npm start ` 本地运行




## 新增组件步骤

1、在 `sidebar.json` 文件中新增组件菜单

2、在 `componentsSource.json` 文件中新增组件


## 新增文档，修改文档步骤

1、 在 `sidebar.json` 文件中新增或者修改 文档 菜单名称、menus

- 注：menus为文档内所有二级标题


## 设置有组件有更新红点的办法

- 默认在创建 demo.js时候，会将组件写入 new.json 文件中，在new.json文件中存在的组件会有红点

- 如需要手动增加 组件，修改 new.json 文件即可，注意要在 npm run getTag 之后修改