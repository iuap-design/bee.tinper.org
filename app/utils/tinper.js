/**
 * 批量修改tinper组件的 index-demo-base.js 文件
 */
const fs = require('fs-extra');
const exec = require('child_process').exec;
let componentsSource = require('../../static/componentsSource.json');


/**
 * 还原
 * @param {*} item 组件名称
 */
function reset(item){
    let cmd = `cd ../../../tinper-bee/${item}/ && git ck . && git pull ` ;
    exec(cmd,(error)=>{
        if(error){
            console.log(`❌❌❌❌❌❌❌❌ ${item} 出错了！`)
            console.log(error);
        }else{
            console.log(`😀😀😀 ${item} 成功了！`)
        }
    })
}

/**
 * run dev
 * @param {*} item 
 */
function runDev(item){
    let cmd = `cd ../../../tinper-bee/${item}/ && npm run dev` ;
    exec(cmd,(error)=>{
        if(error){
            fs.appendFile('./static/error.txt', ` ${item} 失败 \n`);
            console.log(`❌❌❌❌❌❌❌❌ ${item} 出错了！`)
            console.log(error);
        }else{
            console.log(`😀😀😀 ${item} 成功了！`)
        }
    })
}

/**
 * npm install 
 * @param {*} item 
 */
function install(item){
    let cmd = `cd ../../../tinper-bee/${item}/ && rm -rf node_module && ynpm i ` ;
    exec(cmd,(error)=>{
        if(error){
            console.log(`❌❌❌❌❌❌❌❌ ${item} 出错了！`)
            console.log(error);
        }else{
            console.log(`😀😀😀 ${item} 成功了！`)
        }
    })
}

/**
 * npm install 
 * @param {*} item 
 */
function installD(item){
    let cmd = `cd ../../../tinper-bee/${item}/ && npm i bee-drawer bee-clipboard -D ` ;
    exec(cmd,(error)=>{
        if(error){
            console.log(`❌❌❌❌❌❌❌❌ ${item} 出错了！`)
            console.log(error);
        }else{
            console.log(`😀😀😀 ${item} 成功了！`)
        }
    })
}



/**
 * git push
 * @param {*} item 
 */
function push(item){
    let cmd = `cd ../../../tinper-bee/${item}/ && git add . && git commit -m"demo修改" && git push ` ;
    exec(cmd,(error)=>{
        if(error){
            console.log(`❌❌❌❌❌❌❌❌ ${item} 出错了！`)
            console.log(error);
        }else{
            console.log(`😀😀😀 ${item} 成功了！`)
        }
    })
}

function cp(item){
    let cmd = `cp ../../../tinper-bee/bee-button/demo/index-demo-base.js  ../../../tinper-bee/${item}/demo && cp ../../../tinper-bee/bee-button/demo/atom-one-dark.css  ../../../tinper-bee/${item}/demo && cp ../../../tinper-bee/bee-button/index.html ../../../tinper-bee/${item}/index.html`;
    exec(cmd,(error)=>{
        if(error){
            console.log(`❌❌❌❌❌❌❌❌ ${item} 出错了！`)
            console.log(error);
        }else{
            console.log(`😀😀😀 ${item} 成功了！`)
        }
    })
}

Object.keys(componentsSource).forEach(item=>{
    // reset(item)
    // install(item)
    push(item)
    // runDev(item)
    // installD(item)
    // runDev(item)
})
