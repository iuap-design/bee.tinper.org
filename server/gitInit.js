const process = require('child_process');
const fs = require('fs-extra')
let componentsSource = require('../static/components/componentsSource.json');
let length = Object.keys(componentsSource).length;

fs.remove('tinper-bee')
    .then(() => {
        fs.mkdir('tinper-bee');
        Object.keys(componentsSource).forEach((item,index)=>{
            console.log(`git clone https://github.com/tinper-bee/${item}.git tinper-bee/${item}`)
            process.exec(`git clone https://github.com/tinper-bee/${item}.git tinper-bee/${item}`,function (error, stdout, stderr) {
                if (error !== null) {
                  console.log(`❌${item} clone 失败,还剩  ${length}  个` + error);
                }else{
                    console.log(`😀${item} clone 成功,还剩  ${--length}  个`)
                }
            });
        })
    })
    .catch(err => {
        console.error(err)
})



