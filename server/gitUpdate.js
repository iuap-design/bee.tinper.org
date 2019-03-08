const process = require('child_process');
const fs = require('fs-extra')
let componentsSource = require('../static/components/componentsSource.json');
let length = Object.keys(componentsSource).length;

Object.keys(componentsSource).forEach((item,index)=>{
    console.log(`cd tinper-bee/${item} && git pull origin master`)
    process.exec(`cd tinper-bee/${item} && git pull origin master`,function (error, stdout, stderr) {
        if (error !== null) {
          console.log(`❌${item} pull 失败,还剩  ${length}  个` + error);
        }else{
            console.log(`😀${item} pull 成功,还剩  ${--length}  个`)
        }
    });
})

