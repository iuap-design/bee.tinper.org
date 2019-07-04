const gh = require('ghreleases');
const fs = require('fs-extra');
const moment = require('moment');
const marked = require("marked");
let componentsSource = require('../../static/componentsSource.json');
let components = require('../../static/components.json');
let sidebar = require('../../static/sidebar.json');
const newComReg = /- (.*)@/g;
const auth = {
    token: '878a24b98bc84228a61ebf44f33a95d8f8aeaf32',
    user: 'yangchch6'
}

/**
 * 获得组件release
 * @param {*} component 
 */
function getRelease(component) {
    gh.list(auth, 'tinper-bee', component, (err, list) => {
        if (err) {
            console.log(`❌❌ 读取release失败！${component} `)
            console.log(err);
        } else {
            let changesArray = [];
            list.forEach(item => {
                let change = {
                    published_at: moment(item.published_at).format('YYYY-MM-DD'),
                    html_url: item.html_url,
                    tag_name: item.tag_name,
                    // body: item.body.replace(/- /g,'').replace(/##/g,''),
                    body: marked(item.body.replace(/@/g,' @').replace(/##/g,'').replace(/`/g,'')),
                };
                changesArray.push(change)
            });
            components[component].changeLog = changesArray;
            fs.writeJson('./static/components.json', components)
                .then(() => {
                    console.log(`😀json文件写入成功! 写入了 ${component} 的 changelog`);
                })
                .catch(err => {
                    console.log(`❌json文件写入失败! ${component} 出错 的 changelog`);
                    console.error(err)
                })
        }
    })

    
}

Object.keys(componentsSource).forEach(item=>{
    getRelease(item);
})

gh.list(auth, 'iuap-design', 'tinper-bee', (err,list)=>{
    if (err) {
        console.log(`❌❌ 读取release失败！${component} `)
        console.log(err);
    } else {
        let changesArray = [];
        let menus = {};   
        let latestVersion = list[0].tag_name; 
        list.forEach(item => {
            let change = {
                published_at: moment(item.published_at).format('YYYY-MM-DD'),
                html_url: item.html_url,
                tag_name: item.tag_name,
                // body: item.body.replace(/- /g,'').replace(/##/g,''),
                body: marked(item.body.replace(/@/g,' @').replace(/##/g,'').replace(/`/g,'')),
            };
            changesArray.push(change);
            menus[item.tag_name] = {};
        });
        
        sidebar['更新日志'].changeLog = changesArray;
        sidebar['更新日志'].menus = menus;
        sidebar['更新日志'].version = latestVersion;
        
        fs.writeJson('./static/sidebar.json', sidebar)
            .then(() => {
                console.log(`😀json文件写入成功! 写入了 更新日志 的 changelog`);
            })
            .catch(err => {
                console.log(`❌json文件写入失败! 更新日志 出错 的 changelog`);
                console.error(err)
            })

        //写入new.json

        let latestRelease = list[0].body;
        let newAry=latestRelease.match(newComReg);
        let newJsonAry = []
        newAry.forEach(item=>{
            newJsonAry.push(item.replace('- ','').replace('@',''))
        })
        fs.writeJson('./static/new.json', newJsonAry)
            .then(() => {
                console.log('😀✌️ ✌️ ✌️ ✌️ ✌️ ✌️ ✌️ ✌️ ✌️ ✌️ ✌️ ✌️ ✌️ ✌️ ✌️ new.json文件写入成功!')
            })
            .catch(err => {
                console.log('😀new.json文件写入失败!')
                console.error(err)
            })
    }
})