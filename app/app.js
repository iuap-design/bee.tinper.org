const Koa = require('koa')
const app = new Koa()
const render = require('koa-ejs');
const path = require('path');
const marked = require("marked");
const fs = require('fs-extra');
const router = require('./router')
var bodyParser = require('koa-bodyparser')
const middleware = require('./middleware')
var cors = require('koa-cors');

app.use(cors());

render(app, {
    root: path.join(__dirname, 'views'),
    layout: 'index',
    viewExt: 'html',
    cache: false,
    debug: false,
});
  
// 配置ctx.body解析中间件
app.use(bodyParser())


router(app)
middleware(app)

app.listen(3000, () => {
    console.log('服务运行在 http://localhost:3000')
})