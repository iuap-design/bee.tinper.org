/**
 * 批量修改tinper组件的 index-demo-base.js 文件
 */
const fs = require('fs-extra');
const exec = require('child_process').exec;
const path = require('path')
let componentsSource = require('../../static/componentsSource.json');

componentsSource['bee-complex-grid']={}
componentsSource['bee-label']={}
componentsSource['bee-progress']={}
componentsSource['bee-city-select']={}
componentsSource['bee-city-select']={}
delete componentsSource['bee-affix']

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
 * @param {*} msg commit信息
 */
function push(item,msg){
    let cmd = `cd ../../../tinper-bee/${item}/ && git add . && git commit -m"${msg}" && git push ` ;
    exec(cmd,(error)=>{
        if(error){
            console.log(`❌❌❌❌❌❌❌❌ ${item} 出错了！`)
            console.log(error);
        }else{
            console.log(`😀😀😀 ${item} 成功了！`)
        }
    })
}

//批量替换 index.html
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

function cpNpmIgnore(item){
    let cmd = `cp ../../../tinper-bee/bee-affix/.npmignore  ../../../tinper-bee/${item} && cp ../../../tinper-bee/bee-affix/index.html ../../../tinper-bee/${item}/index.html`;
    exec(cmd,(error)=>{
        if(error){
            console.log(`❌❌❌❌❌❌❌❌ ${item} 出错了！`)
            console.log(error);
        }else{
            console.log(`😀😀😀 ${item} 成功了！`)
        }
    })
}

async function rename(item){
    let filePath = path.join(__dirname, `../../../../../tinper-bee/${item}/docs/api.md`);
    let name = item.split('bee-')[1];
    let high = '# '+name[0].toUpperCase()+name.substring(1,item.length)
    name = '# '+componentsSource[item].name+' '+name[0].toUpperCase()+name.substring(1,item.length);
    let data = fs.readFileSync(filePath, 'utf-8');
    data = data.replace(high, name);
    fs.writeFile(filePath,data).then(()=>{
        console.log(`😀😀😀 ${name} 成功了！`)
    })
    .catch((error)=>{
        console.log(`❌❌❌❌❌❌❌❌ ${name} 出错了！`)
        console.log(error);
    })
}






Object.keys(componentsSource).forEach(item=>{
    // reset(item)
    // install(item)
    // push(item,'react改为development npm发包忽略 demo,docs,test,dist目录')
    // runDev(item)
    // installD(item)
    // runDev(item)
    // rename(item)
    // cpNpmIgnore(item)
})
