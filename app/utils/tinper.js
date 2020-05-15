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
// delete componentsSource['bee-locale']
// delete componentsSource['bee-pagination']
// delete componentsSource['bee-select']
// delete componentsSource['bee-dnd']
// delete componentsSource['bee-button']
// delete componentsSource['bee-table']
// delete componentsSource['bee-datepicker']
// delete componentsSource['bee-transfer']
// delete componentsSource['bee-tree']
// delete componentsSource['bee-complex-grid']
// delete componentsSource['bee-affix']

/**
 * 还原
 * @param {*} item 组件名称
 */
function reset(item){
    let cmd = `cd ../../../tinper-bee/${item}/ && git ck master && git ck . && git pull ` ;
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
    let cmd = `cd ../../../tinper-bee/${item}/ && rm -rf node_module && cnpm i ` ;
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

async function changePackageJson(item){
    let filePath = path.join(__dirname, `../../../../../tinper-bee/${item}/package.json`);
    let packageJson = fs.readJSONSync(filePath)
    packageJson.devDependencies['husky']="^4.2.5";
    packageJson.scripts['version'] = "conventional-changelog -p angular -i CHANGELOG.md -s && git add CHANGELOG.md";
    packageJson.scripts['postversion'] = "git push --follow-tags";
    packageJson.scripts['prepublishOnly'] = "npm run build";
    fs.writeJSON(filePath,packageJson).then(()=>{
        console.log(`😀😀😀 ${item} packageJson 成功了！`)
    }).catch((error)=>{
        console.log(`❌❌❌❌❌❌❌❌ ${item} packageJson出错了！`)
        console.log(error);
    })
    let cmd = `cp ../../../tinper-bee/bee-button/.huskyrc  ../../../tinper-bee/${item} && cp ../../../tinper-bee/bee-button/commitlint.config.js  ../../../tinper-bee/${item} && cp -r ../../../tinper-bee/bee-button/.github ../../../tinper-bee/${item}/`;
    exec(cmd,(error)=>{
        if(error){
            console.log(`❌❌❌❌❌❌❌❌ ${item} cp出错了！`)
            console.log(error);
        }else{
            console.log(`😀😀😀 ${item} cp成功了！`)
        }
    })
}

// changePackageJson('bee-dnd')

async function npmVersion(item){
    let cmd = `cd ../../../tinper-bee/${item}/ && npm version patch` ;
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
    // push(item,'fix: 自动化')
    // runDev(item)
    // installD(item)
    // runDev(item)
    // rename(item)
    // cpNpmIgnore(item)
    // changePackageJson(item)
    // npmVersion(item)
})
