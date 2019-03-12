const marked = require("marked");
const fs = require('fs-extra');
const path = require('path');
const render = require('koa-ejs');
const sidebar = require('../../static/sidebar.json');
const axios = require('axios');
const components = require('../../static/components.json');


//定义变量提取
///##.*代码演示/ 匹配规则改变，
// 官网react版本
module.exports = {
  index: async (ctx, next) => {
    let tag = ctx.url.split('tag=')[1];
    let component = ctx.params.component;
    let data ='';
    let filePath = '';
    
    if (component) {
      if (component.indexOf('bee') != -1) {
        filePath = path.join(__dirname, `../../tinper-bee/${component}/docs/api.md`);
        data = await fs.readFileSync(filePath, 'utf-8');
        let demo = '<div id="tinperBeeDemo"></div>';
        data = data.replace(/##.*代码演示/, demo);
        let pack_data = await fs.readFileSync(path.join(__dirname, "../../tinper-bee/" + component + "/package.json"));
        if (pack_data) {
          pack_data = JSON.parse(pack_data);
          if (!pack_data) {
            pack_data = {};
          }
        }
        let listStr = '<select class="tag-select" id="tagSelect" >';
        let tags = components[pack_data.name].versions;
        let selectTag = tag ? tag : 'v'+pack_data.version;;
        tags.forEach(item => {
          if (item == selectTag) {
            listStr += `<option selected value=${item} >${item}</li>`;
          } else {
            listStr += `<option value=${item} >${item}</li>`;
          }
        })
        listStr += '</select>';
        let name = components[pack_data.name].name;
        let str =
          data.match(/##? \w+/g) && data.match(/##? \w+/g).length ?
          data.match(/##? \w+/g)[0] :
          "";
        data = data.replace(
          /##? \w+/,
          str +
          "<a href='https://github.com/tinper-bee/" +
          component +
          "/edit/master/docs/api.md' class='pencil' style='text-decoration: underline;' target='_blank' title='在github上编辑此页'><i class='uf uf-pencil' style='font-size: 20px;padding-left: 10px;'></i></a>" +
          "<div class='title-right'>" +
          "<a class='title-tag' href='https://github.com/tinper-bee/" + component + "/issues/new' target='_blank'><i class='uf uf-qm-c'></i><span>issue</span></a>" +
          listStr +
          "</div>"
        );
      } else {
        filePath = path.join(__dirname, `../../docs/${component}.md`);
        data = await fs.readFileSync(filePath, 'utf-8');
      }
    }else{
      filePath = path.join(__dirname, `../../docs/summarize.md`);
      data = await fs.readFileSync(filePath, 'utf-8');
    }
    data = marked(data);
    data = data
      .replace(/\<table/gi, '<div class="table-container">\n<table')
      .replace(/<\/table>/gi, "</table>\n</div>\n");

    await ctx.render('index', {
      sidebar: sidebar,
      docs: data,
      active: component,
      tag:tag,
    });
  }
}