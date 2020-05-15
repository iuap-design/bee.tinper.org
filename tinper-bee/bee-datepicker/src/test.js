var moment = require('moment');

const parsed1 = moment('2020.04.24 11:34:05 AM',['YYYY.MM.DD hh:mm:ss A'],true).isValid();

console.log('parsed1合法：'+parsed1)


console.log(moment.locale())