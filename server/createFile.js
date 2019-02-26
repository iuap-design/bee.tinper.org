const download = require('download');
const fs = require('fs-extra');
const latestVersion = require('latest-version');
let components = require('../static/components/components.json');







/**
 * 3、创建demo.js demo.css 
 * @param {*} item 组件名称
 * @param {*} tag tag名称
 */
let writeDemo = (item, tag) => {
    console.log(`我正在操作 ${item}/${tag}`)
    fs.pathExists(`./components/${item}/dist/${tag}/demo.js`, (err, flag) => {
        if (!flag) {
            download(`https://raw.githubusercontent.com/tinper-bee/${item}/${tag}/dist/demo.js`).then(data => {
                    fs.writeFileSync(`./components/${item}/dist/${tag}/demo.js`, data);
                    console.log(`写入 ${item}/${tag}/demo.js成功 `);
                })
                .catch(() => {
                    fs.appendFile('./static/components/error.txt', `${item}/${tag}/demo.js失败 \n`)
                    console.log(`———————————————————————— 请求 ${item}/${tag}/demo.js失败，找不到文件 `)
                })
        }else{
            console.log(`${item}/${tag}/demo.js 已存在，跳过 `);
        }
    })
    fs.pathExists(`./components/${item}/dist/${tag}/demo.css`, (err, flag) => {
        if (!flag) {
            download(`https://raw.githubusercontent.com/tinper-bee/${item}/${tag}/dist/demo.css`).then(data => {
                    fs.writeFileSync(`./components/${item}/dist/${tag}/demo.css`, data);
                    console.log(`写入 ${item}/${tag}/demo.css 成功 `);
                })
                .catch(() => {
                    fs.appendFile('./static/components/error.txt', `${item}/${tag}/demo.css失败 \n`)
                    console.log(`———————————————————————— 请求 ${item}/${tag}/demo.js失败，找不到文件 `)
                })
        }else{
            console.log(`${item}/${tag}/demo.css 已存在，跳过 `);
        }
    })
}

/**
 * 2、创建文件夹
 */
let createFile = () => {
    Object.keys(components).forEach(item => {
        console.log(`我正在写  ${item}`);
        fs.ensureDir(`./components/${item}/dist/`)
            .then(() => {
                console.log(`${item}  dist文件创建成功！`)
            })
            .then(() => {
                components[item].versions.forEach(tag => {
                    fs.ensureDir(`./components/${item}/dist/${tag}/`)
                        .then(() => {
                            console.log(`${item} tag ${tag} 文件创建成功！`)
                        })
                        .then(() => {
                            writeDemo(item, tag);
                        })
                })
            })
    });
}


createFile();