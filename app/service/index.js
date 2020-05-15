const marked = require('marked');
const render = require('koa-ejs');

module.exports = {
  register: async (name, pwd) => {
    let data
    if (name == 'guoyff' && pwd == '123456') {
      data = `Hello， ${name}！`
    } else {
      data = '账号信息错误'
    }
    return data
  },
  index: async compent => {
    let data = '哈哈哈';
    return data;
  }
}