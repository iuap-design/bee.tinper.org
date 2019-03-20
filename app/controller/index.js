const marked = require("marked");
const fs = require('fs-extra');
const path = require('path');
const render = require('koa-ejs');
const sidebar = require('../../static/sidebar.json');
const axios = require('axios');
const components = require('../../static/components.json');
const renderer = new marked.Renderer();

renderer.heading = function(text, level){
  if(level>1){
    return `<h${level} id="${text}">${text}</h${level}/>`
  }else{
    return `<h${level}>${text}</h${level}/>`
  }
}

marked.setOptions({
  renderer: renderer,
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false
});

//定义变量提取
///##.*代码演示/ 匹配规则改变，
// 官网react版本
module.exports = {
  index: async (ctx, next) => {
    let tag = ctx.url.split('tag=')[1];//版本号
    let component = ctx.params.component;
    let data ='';
    let filePath = '';
    let isComponentFlag=false;//是否是组件
    let rightMenus = {};//右侧菜单
    let changeLog = [];//组件更新日志
    let changelogs = '';
    
    if (component) {
      if (component.indexOf('bee') != -1) {
        rightMenus = components[component].menus;
        changeLog = components[component].changeLog;
        isComponentFlag = true;
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
        // let listStr = '<select class="tag-select" id="tagSelect" >';
        let tags = components[pack_data.name].versions;
        let selectTag = tag ? tag : 'v'+pack_data.version;
        // tags.forEach(item => {
        //   if (item == selectTag) {
        //     listStr += `<option selected value=${item} >${item}</li>`;
        //   } else {
        //     listStr += `<option value=${item} >${item}</li>`;
        //   }
        // })
        // listStr += '</select>';



        let listStr = '<div class="u-select u-select-focused u-select-enabled tag-select" id="tagSelect"><div class="u-select-selection '+
'u-select-selection--single" role="combobox" aria-autocomplete="list" aria-haspopup="true" aria-expanded="false" tabindex="0"> '+
            '<div class="u-select-selection-rendered" name="input"><div class="u-select-selection-selected-value" title="'+selectTag+'" style="display: block; opacity: 1;">'+selectTag+'</div>'+
            '</div><span class="u-select-arrow" unselectable="unselectable" style="user-select: none;"><b></b></span></div></div>';


        
        listStr += '<div id="tagList" class="select-list"><div><div class="u-select-dropdown nav-lang-select u-select-dropdown--single u-select-dropdown-placement-bottomLeft " style="width: 100px; "><div style="overflow: auto;">'+
                    '<ul class="u-select-dropdown-menu u-select-dropdown-menu-vertical  u-menu-light u-select-dropdown-menu-root" role="menu" aria-activedescendant="">';
        tags.forEach(item=>{
          if(item==selectTag){
            listStr+='<li unselectable="unselectable" title="'+item+'" class="u-select-dropdown-menu-item-selected u-select-dropdown-menu-item" role="menuitem" aria-selected="true" style="user-select: none;">'+item+'</li> '
          }else{
            listStr+='<li unselectable="unselectable" title="'+item+'" class="u-select-dropdown-menu-item" role="menuitem" aria-selected="true" style="user-select: none;">'+item+'</li> '
          }
          
        });       
        listStr +='</ul></div></div></div></div>'




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
        rightMenus = {};
        changeLog = [];
        filePath = path.join(__dirname, `../../docs/${component}.md`);
        data = await fs.readFileSync(filePath, 'utf-8');
      }
    }else{
      rightMenus = {}
      changeLog = [];
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
      isComponent:isComponentFlag,
      rightMenus:rightMenus,
      changeLog:changeLog
    });
  }
}