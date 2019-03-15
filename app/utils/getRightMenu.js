const fs = require('fs-extra');

let doc = '';//doc内容
let twoTitle = [];//二级标题

fs.readdir('./tinper-bee/bee-button/demo/demolist')
.then((file)=>{//[ Demo1.js, Demo1.scss, Demo2.js, Demo3.js]
    console.log(file)
})