const fs = require('fs-extra');
let componentsSource = require('../../static/componentsSource.json');
let components = require('../../static/components.json');

let doc = '';//doc内容
let regJs = /^Demo.*\.js$/;//判断是否是js文件
let regApi = /#{3,3}(.*)\s/g;//作为api下的第一层标题



function sortNumber(a,b){
    return a.replace(/[^0-9]/ig,"") - b.replace(/[^0-9]/ig,"")
}

/**
 * 获得 能力特性 的子标题
 * @param {*} component 
 */
let getDemoTitle = (component)=>{
    let twoTitle = {
        "何时使用":{},
        "如何使用":{},
        "能力特性":{
            
        },
        "API":{},
        "注意事项":{},
        "更新日志":{}
    }
    let baseUrl = `./tinper-bee/${component}/demo/demolist`;
    fs.readdir(baseUrl).then((file)=>{//[ Demo1.js, Demo1.scss, Demo2.js, Demo3.js]
         file = file.sort(sortNumber);
         let demosTitle = {};//二级标题
         file.forEach(item=>{
             if(regJs.test(item)){
                let data = fs.readFileSync(`${baseUrl}/${item}`,"utf-8"); 
                let title = data.match(/@title(.{0,})/)[1];
                let parent = data.match(/@parent(.{0,})/);
                if(parent){
                    let parentObj = demosTitle[parent[1].trim()]||{}
                    parentObj[title.trim()]=''
                    demosTitle[parent[1].trim()]=parentObj;
                }else{
                    demosTitle[title.trim()]='';
                }
             }
         });
         twoTitle["能力特性"] = demosTitle;
         getApiTitle(component,twoTitle);
    })
}

/**
 * 获得 API 的子标题
 * @param {*} component 
 */
let getApiTitle = (component,twoTitle)=>{
    let data = fs.readFileSync(`./tinper-bee/${component}/docs/api.md`,"utf-8"); 
    let apiTitles = {};
    let ary = data.match(regApi);
    if(ary&&ary.length){
        ary.forEach(item=>{
            let title = item.split('###')[1];
            if(item.split('###')[1].indexOf('#')==-1){
                title = title.replace(/[\r\n]/g,"").trim();
                apiTitles[title]="";
            }
        })
    }
    twoTitle["API"]=apiTitles;
    components[component].menus = twoTitle;
    fs.writeJson('./static/components.json', components)
    .then(() => {
        console.log(`😀json文件写入成功! 写入了 ${component} 的 API`);
    })
    .catch(err => {
        console.log(`❌json文件写入失败! ${component} 出错 的 API`);
        console.error(err)
    })
}


Object.keys(componentsSource).forEach(item=>{
    fs.readJSON(`./tinper-bee/${item}/docs/menu.json`,(err,json)=>{
        if(err){
            getDemoTitle(item);
        }else{
            console.log(`${item} 有 menu.json `)
            components[item].menus = json;
            fs.writeJson('./static/components.json', components)
                .then(() => {
                    console.log(`😀json文件写入成功! 写入了 ${item} 的 API`);
                })
                .catch(err => {
                    console.log(`❌json文件写入失败! ${item} 出错 的 API`);
                    console.error(err)
                })
        }
    })
})