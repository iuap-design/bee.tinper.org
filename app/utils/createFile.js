const download = require('download');
const fs = require('fs-extra');
let components = require('../../static/components.json');


/**
 * 3、创建demo.js demo.css api.md
 * @param {*} item 组件名称
 * @param {*} tag tag名称
 */
let writeDemo = (item, tag) => {
    let downFn = (downPath, filePath, fileName) => {
        fs.pathExists(filePath, (err, flag) => {
            if (!flag) {
                download(downPath).then(data => {
                        fs.writeFileSync(filePath, data);
                        if (fileName == 'api.md' && (data.indexOf('include') != -1)) {
                            let reg = new RegExp(/include "([\w\W]*?)"/, 'g');
                            let reg2 = new RegExp(/"/, 'g');
                            let dataStr = data.toString('utf-8');
                            let includes = dataStr.match(reg);
                            if (includes) {
                                includes.forEach(item => {
                                    item = item.replace('include', '');
                                    item = item.replace(reg2, '').trim()
                                    downFn(downPath.replace(fileName, item), filePath.replace(fileName, item), item)
                                })
                            }
                        }

                        console.log(`😀写入 ${filePath} 成功 `);
                    })
                    .catch(() => {
                        fs.appendFile('./static/error.txt', `请求 ${downPath} 失败 \n`);
                        if (fileName == 'api.md') { //删除没有dist/demo.js 文件的tag
                            let versions = components[item].versions;
                            versions.splice(versions.indexOf(tag), 1);
                            components[item].versions = versions;
                            fs.writeJson('./static/components.json', components)
                                .then(() => {
                                    console.log(`😀json文件写入成功! 删除了 ${item}--${tag}`);
                                })
                                .catch(err => {
                                    console.log('❌json文件写入失败!')
                                    console.error(err)
                                })
                        }
                        console.log(`❌ ———————— 请求 ${downPath}失败，找不到文件 `);
                    })
            } else {
                console.log(`😀${filePath} 已存在，跳过 `);
            }
        })
    }
    // //下载demo.js
    // downFn(`https://raw.githubusercontent.com/tinper-bee/${item}/${tag}/dist/demo.js`,
    //     `./components/${item}/dist/${tag}/demo.js`, 'demo.js');
    // //下载demo.css
    // downFn(`https://raw.githubusercontent.com/tinper-bee/${item}/${tag}/dist/demo.css`,
    //     `./components/${item}/dist/${tag}/demo.css`, 'demo.css');
    //下载api.md
    downFn(`https://raw.githubusercontent.com/tinper-bee/${item}/${tag}/docs/api.md`,
        `./components/${item}/dist/${tag}/api.md`, 'api.md');
}

/**
 * 2、创建文件夹
 */
let createFile = () => {
    Object.keys(components).forEach(item => {
        fs.ensureDir(`./components/${item}/dist/`)
            .then(() => {
                console.log(`😀${item} dist文件创建成功！`)
            })
            .then(() => {
                components[item].versions.forEach(tag => {
                    fs.ensureDir(`./components/${item}/dist/${tag}/`)
                        .then(() => {
                            console.log(`😀${item} tag ${tag} 文件创建成功！`)
                        })
                        .then(() => {
                            writeDemo(item, tag);
                        })
                })
            })
    });
}

createFile();