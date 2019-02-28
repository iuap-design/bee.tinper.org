const fs = require('fs-extra');
const gitTagsRemote = require('git-tags-remote');
let componentsSource = require('../static/components/componentsSource.json');

let errorTags = require('../static/components/errorTags.json');

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
                        if(errorTags.indexOf(`${item}/dist/${key}`==-1)){//已知有问题的tag不push进数组
                            ary.push(key)
                        }
                    }
                    console.log(item + '😀成功了——————————————')
                    componentsSource[item].versions = ary;
                }
            })
            .then(() => {
                components = componentsSource;
                fs.writeJson('./static/components/components.json', componentsSource)
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
}

getAlltag();