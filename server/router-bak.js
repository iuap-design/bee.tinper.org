/**
 * Created by chief on 16/11/28.
 */

var router = require("koa-router")();
var fs = require("fs");
var path = require("path");
var cate = require("../static/json/catalog-0.1.json");
var markdown = require("markdown").markdown;
var marked = require("marked");
var axios = require('axios')
var renderer = new marked.Renderer();
var components = require('../static/components/components.json')

renderer.link = function (href,title,text) {
  var target = '';
  if(href){
    target="_blank";
  }else{
    href = 'javacript:void(0);'
  }
  return `<a target="${target}" href="${href}" >${text}</a>`;
};

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

//首页路由
//router.get('/docs/bee/:id', function*(next) {
//    var docId = this.params.id;
//    try {
//        var data = fs.readFileSync(path.join(__dirname,'../docs/'+id+'.md'),'utf-8');
//    }catch (e) {
//        data = e;
//        return ;
//    }
//    data = marked(data);
//    yield this.render('docs',{
//        sidebar:cate,
//        doc:data
//    });
//});

//首页路由
router.get("/", function* (next) {
  var data = fs.readFileSync(
    path.join(__dirname, "../docs/summarize.md"),
    "utf-8"
  );
  data = marked(data);
  var docId = "summarize";
  yield this.render("docs", {
    sidebar: cate,
    data: data,
    doc: data,
    docId: docId
  });
});

//router.get('/docs', function*(next) {
//    var data = fs.readFileSync(path.join(__dirname,'../docs/quickStart.md'),'utf-8');
//    data = marked(data);
//    yield this.render('docs',{
//        sidebar:cate,
//        doc:data
//    });
//});


//读取md文档，生成html
function* toHtml(docId,tag){
  var docId = this.params.id === 'keyboard'?'ac-keyboard-example':this.params.id;
  var isComponent = 1;
  var jsList=[];
  if (docId.search("bee-") == -1 && docId.search("ac-") === -1&& docId.search("ref-") === -1 && this.params.id != 'keyboard') {
    console.log("-----取md文档，生成ht-----------",path.join(__dirname, "../docs/" + docId + ".md"))
    try {
      var data = fs.readFileSync(
        path.join(__dirname, "../docs/" + docId + ".md"),
        "utf-8"
      );
    } catch (e) {
      data = "## 文档建设中...";
    }
    isComponent = 0;
  } else if (docId.search("ac-") > -1||docId.search("ref-") > -1){
    try {
      var data = fs.readFileSync(
        path.join(__dirname, "../docs/" + docId + ".md"),
        "utf-8"
      );
      if (/##.*代码演示/.test(data)) {
        var demo = '<div id="root"></div>';
        data = data.replace(/##.*代码演示/, demo);
        var acHomePage = yield axios.get(`https://tinper-acs.github.io/${docId}/`)
        var requestJSList = acHomePage.data.match(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi)
        var jsStartIndex,jsEndIndex,scriptUrl;
        requestJSList.forEach((item) => {
          if(item.indexOf(`${docId}`)>-1) {
            jsStartIndex = item.indexOf('src=\"')
            jsEndIndex = item.indexOf('\.js')
            scriptUrl = item.slice(jsStartIndex+5,jsEndIndex+3)
            scriptUrl = scriptUrl.indexOf('tinper-acs.github.io')===-1?'https://tinper-acs.github.io'+scriptUrl:scriptUrl
            jsList.push(scriptUrl)
          }
        })
      }
    } catch (e) {
      data = "## 文档建设中...";
    }
    isComponent = 0;
  } else {//基础组件
    try {
      //var data = fs.readFileSync(path.join(__dirname,'../tinper-bee/'+docId+'/docs/api.md'),'utf-8');
      var swig = require("swig-templates");
      var template = swig.compileFile(
        path.join(__dirname, "../tinper-bee/" + docId + "/docs/api.md")
      );

      var data = template();
    } catch (e) {
      data = "## 文档建设中...";
    }
    
    var demo = '<div id="tinperBeeDemo"></div>';
    data = data.replace(/##.*代码演示/, demo);
    var pack_data = fs.readFileSync(
      path.join(__dirname, "../tinper-bee/" + docId + "/package.json")
    );
    if (pack_data) {
      pack_data = JSON.parse(pack_data);
      if (!pack_data) {
        pack_data = {};
      }
    }
    var listStr = '<select class="tag-select" id="tagSelect" >';
    var tags = components[pack_data.name].versions;
    tags.forEach(item=>{
      if(item==pack_data.version){
        listStr+=`<option selected value=${item} >${item}</li>`;
      }else{
        listStr+=`<option value=${item} >${item}</li>`;
      }
    })
    listStr+='</select>';


    var str =
      data.match(/##? \w+/g) && data.match(/##? \w+/g).length ?
      data.match(/##? \w+/g)[0] :
      "";
    data = data.replace(
      /##? \w+/,
      str +
      "<a href='https://github.com/tinper-bee/" +
      docId +
      "/edit/master/docs/api.md' style='text-decoration: underline;' target='_blank' title='在github上编辑此页'><i class='uf uf-pencil' style='font-size: 20px;padding-left: 10px;'></i></a>" +
      "<div>" +
      "<a class='title-tag' href='https://github.com/tinper-bee/" + docId + "' target='_blank'><i class='uf uf-github-c'></i>" + docId + "</a>" +
      listStr+
      // (pack_data && pack_data.version ? "<span class='title-tag'><i class='uf uf-treeadd'></i>" + pack_data.version + "</span>" : "") +
      "<a class='title-tag' href='https://github.com/tinper-bee/" + docId + "/blob/master/CHANGELOG.md' target='_blank'><i class='uf uf-group'></i>changelog</a>" +
      "<a class='title-tag' href='https://github.com/tinper-bee/" + docId + "/issues/new' target='_blank'><i class='uf uf-qm-c'></i>issue</a>" +
      "</div>"
    );
  }
  
  data = marked(data);

  data = data
    .replace(/\<table/gi, '<div class="table-container">\n<table')
    .replace(/<\/table>/gi, "</table>\n</div>\n");

  // if(docId === "theme"){
  //   // frameborder='0' scrolling='no' style='{border: 0 none;width:100%;height:100%}'
  //   data += "<iframe src='http://tinper-bee-theme-client.online.app.yyuap.com' id='theme-iframe' frameborder='0' scrolling='no' width='100%' height='100%' />"
  //   // data += "<iframe src='http://localhost:3000' id='theme-iframe' frameborder='0' scrolling='no' width='100%' height='100%' />"
  // }

  yield this.render("docs", {
    sidebar: cate,
    docId: docId,
    doc: data,
    isComponent: isComponent,
    jsList:jsList,
    tag:tag
  });
}



router.get("/:id", function* (next) {
  var docId = this.params.id === 'keyboard'?'ac-keyboard-example':this.params.id;
  toHtml(docId)
});


router.get('/:id/:tag',function* (next){
  var docId = this.params.id === 'keyboard'?'ac-keyboard-example':this.params.id;
  var tag = this.params.tag;
  toHtml(docId,tag)
})



exports.router = router;