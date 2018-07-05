# bee.tinper.org

bee组件库文档官网。

[tinper-bee](http://github.com/iuap-design/tinper-bee.org)

[组件仓库](http://github.com/tinper-bee)

组件以git子模块的模式存放在tinper-bee文件夹内。

### 调试

- clone代码后，执行`npm run init`下载子模块

```
npm run init
```

- 更新子模块

```
npm run update
```

- 启动服务（要查看文档完整性，个别文档会有不显示和显示错误）

```
npm run server
```

会监听9090端口。


### 更新

- 更新子模块

```
npm run update
```
- 验证是否可用

```
npm run server
```
- 修改文档

修改docs目录内的changelog.md, 修改tinper-bee版本views/common/nav.swig里面的最新版本。

- 修改完成提交git

- 压缩bee.tinper.org的内存文件为压缩包。注意不压缩文件夹，只压缩里面的文件。

- 登录开发者中心，上传压缩的zip包。在应用管理内更新。