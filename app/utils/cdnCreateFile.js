const download = require('download');
const fs = require('fs-extra');
const OSS = require('ali-oss');
const minify = require('minify');
const ossConfig = require('./ossConfig.json');

let components = require('../../static/components.json');


let client = new OSS(ossConfig);


/**
 * 2、增量上传到CDN
 * "http://iuap-design-cdn.oss-cn-beijing.aliyuncs.com/static/tinper-bee/components/bee-button/dist/v2.0.1/demo.js"
 */
function putCDN(putUrl, filePath) {
    client.put(putUrl, filePath).then(data => {
        fs.appendFileSync('./static/update.txt',`${putUrl} \n`,'utf8')
        console.log(`😀${filePath} 上传成功`)
    }).catch(function (err) {
        console.error(`❌ ${filePath} 上传失败`, err);
        fs.appendFile('./static/cdnError.txt', `❌ ${filePath} 上传失败\n`);
    });
}

/**
 * 1、下载demo.js demo.css 并压缩
 * @param {*} item 组件名称
 * @param {*} tag tag名称
 */
let writeDemo = (item, tag) => {
    let downFn = (downPath, filePath, fileName,cdnPath) => {
        client.head(cdnPath).then((result) => {
            if (result.res.status == 200) {//cdn已有此文件
              console.log(`😀${cdnPath} 已存在，跳过 `);
              return true
            }
        }).catch((e)=> {
            download(downPath).then(data => {
                fs.writeFileSync(filePath, data);
                console.log(`😀写入 ${filePath} 成功 `);
                minify(filePath).then((data)=>{//压缩文件
                    console.log(`😀压缩 ${filePath} 成功 `);
                    fs.writeFileSync(filePath, data);
                    putCDN(`static/tinper-bee/components/${item}/dist/${tag}/${fileName}`, filePath)
                })
                .catch((err)=>{
                    console.log(`❌压缩 ${filePath} 失败 `);
                    console.log(err)
                    //犹豫demo.css中有import，无法压缩，直接放到cdn
                    putCDN(`static/tinper-bee/components/${item}/dist/${tag}/${fileName}`, filePath)
                });
                
            })
            .catch(() => {
                fs.appendFile('./static/cdnError.txt', `请求 ${filePath} 失败 \n`);
                if(fileName=='demo.js'){//删除没有dist/demo.js 文件的tag
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
                console.log(`❌ ———————— 请求 ${filePath}失败，找不到文件 `);
            })
        })
    }
    //下载demo.js
    downFn(`https://raw.githubusercontent.com/tinper-bee/${item}/${tag}/dist/demo.js`,
        `./components/${item}/dist/${tag}/demo.js`, 'demo.js',`/static/tinper-bee/components/${item}/dist/${tag}/demo.js`);
    //下载demo.css
    downFn(`https://raw.githubusercontent.com/tinper-bee/${item}/${tag}/dist/demo.css`,
        `./components/${item}/dist/${tag}/demo.css`, 'demo.css',`/static/tinper-bee/components/${item}/dist/${tag}/demo.css`);
}


// 清空
fs.writeFileSync('./static/cdnError.txt', '');


Object.keys(components).forEach(item => {
    components[item].versions.forEach(tag=>{
        writeDemo(item,tag)
    })
});


