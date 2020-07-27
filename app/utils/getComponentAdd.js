const fs = require('fs-extra');
const download = require('download-git-repo')
let componentsSource = require('../../static/new.json');
let length = Object.keys(componentsSource).length;
const oldLength = Object.keys(componentsSource).length;

let components = require('../../static/new.json');

console.log(`本次更新需要重新下载 ${oldLength} 个组件，请等待...`)

function consoleItem(length){
    if(length<=3){
        console.log(Object.keys(components))
    }
}


function consoleItem(length){
    if(length<=3){
        console.log(Object.keys(components))
    }
}


Object.keys(componentsSource).forEach((item,index)=>{
    console.log(`download ${item} tinper-bee/${item}`)
    download(`tinper-bee/${item}`,`tinper-bee/${item}`,
    function (error) {
        if (error) {
            console.log(`❌ download ${item} 失败,还剩  ${length}  个` + error);
        }else{
            delete components[item]
            console.log(`😀 download ${item} 成功,还剩  ${--length}  个`)
            consoleItem(length)
        }
    })
})