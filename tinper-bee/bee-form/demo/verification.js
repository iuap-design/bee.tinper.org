// 通用正则
var ALLREG = {
    emailReg: /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
    telReg: /^1[3|4|5|7|8]\d{9}$/,
    IDReg: /^(\d{15}$|^\d{18}$|^\d{17}(\d|X|x))$/,
    nameReg: /^[\u4e00-\u9fa5]{2,4}$/,
    flagReg: /^([\u4e00-\u9fa5]|[a-zA-Z])+$/,
    passReg: /^[0-9a-zA-Z,.!?`~#$%^&*()-=_+<>'"\[\]\{\}\\\|]{6,15}$/,
};
export function verification(value,type){
    var value = value.trim();
    switch (type) {
        case 'mail':
                if(ALLREG.emailReg.test(value)){
                    return '';
                }else{
                    return 'error';
                }
            break;
        case 'password':
                if(ALLREG.passReg.test(value)){
                    return '';
                }else{
                    return 'error';
                }
            break;
        default:
            break;
    }

}
