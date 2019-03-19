const Koa = require('koa')
const app = new Koa()
const render = require('koa-ejs');
const path = require('path');
const marked = require("marked");
const fs = require('fs-extra');
const router = require('./router')
const middleware = require('./middleware')


render(app, {
    root: path.join(__dirname, 'views'),
    layout: 'index',
    viewExt: 'html',
    cache: false,
    debug: false,
});
  

router(app)
middleware(app)

app.listen(3000, () => {
    console.log('服务运行在 http://localhost:3000')
})