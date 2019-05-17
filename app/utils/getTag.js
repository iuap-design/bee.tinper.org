const fs = require('fs-extra');
const gitTagsRemote = require('git-tags-remote');
let componentsSource = require('../../static/componentsSource.json');
let version = require('../../static/version.json');
/**
 * 1、获得所有tag，并改变 components.json
 * @param {*} item 组件名称
 */
let getAlltag = () => {
    Object.keys(componentsSource).forEach(item => {
        let ary = [];
        gitTagsRemote.get(`https://github.com/tinper-bee/${item}.git`)
            .then((tags) => {
                if (tags) {
                    for (let key of tags.keys()) {
                        ary.push(key)
                    }
                    console.log(item + '😀成功了——————————latest version 是————'+ary[0])
                    componentsSource[item].versions = ary;
                    version[item]=ary[0].replace('v',"")
                }
            })
            .then(()=>{//写入所有组件的版本
                fs.writeJsonSync('./static/version.json', version);
            })
            .then(() => {
                components = componentsSource;
                fs.writeJson('./static/components.json', componentsSource)
                    .then(() => {
                        console.log('😀json文件写入成功!')
                    })
                    .catch(err => {
                        console.log('😀json文件写入失败!')
                        console.error(err)
                    })
            })
            .catch((error) => {
                console.log(item + '❌出错了————————————');
                console.log(error)
            })
    });
    fs.writeFileSync('./static/error.txt', '');
    fs.writeFileSync('./static/new.json', '[]');
}

getAlltag();