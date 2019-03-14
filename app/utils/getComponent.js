const fs = require('fs-extra');
const download = require('download-git-repo')
let componentsSource = require('../../static/componentsSource.json');
let length = Object.keys(componentsSource).length;

fs.remove('tinper-bee')
    .then(() => {
        fs.mkdir('tinper-bee');
        Object.keys(componentsSource).forEach((item,index)=>{
            console.log(`download ${item} tinper-bee/${item}`)
            download(`tinper-bee/${item}`,`tinper-bee/${item}`,
            function (error) {
                if (error) {
                    console.log(`❌ download ${item} 失败,还剩  ${length}  个` + error);
                }else{
                    console.log(`😀 download ${item} 成功,还剩  ${--length}  个`)
                }
            })
        })
    })
    .catch(err => {
        console.error(err)
})



