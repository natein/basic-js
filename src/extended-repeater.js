module.exports = function repeater(str, options) {
    res = "";
    let src_str = "";
    if(str === null) src_str = "null";
    else if (typeof(str) != 'string') src_str = str.toString();
    else src_str = str;    
    let repeatTimes = 1;
    let separator = "+";
    let addition = "";
    let additionRepeatTimes = 1;
    let additionSeparator = "|";
    if(arguments.length > 1) {
        if(options.hasOwnProperty('repeatTimes') == true) {
            if(options.repeatTimes != undefined) repeatTimes = options.repeatTimes;
        }
        if(options.hasOwnProperty('separator') == true) separator = options.separator;
        if(options.hasOwnProperty('additionRepeatTimes') == true) {
            if(options.additionRepeatTimes != undefined) additionRepeatTimes = options.additionRepeatTimes;
        }
        if(options.hasOwnProperty('additionSeparator') == true) additionSeparator = options.additionSeparator;
        if(options.hasOwnProperty('addition') == true) {
            if(options.addition === null) addition = "null";
            else if(typeof(options.addition) != 'string') addition = options.addition.toString();
            else addition = options.addition;
        }
    }
    let addition_full = "";
    if(addition != "") {
        for(let i = 1; i <= additionRepeatTimes; i++) {
            if(i < additionRepeatTimes)
                addition_full = addition_full + addition + additionSeparator;
            else
                addition_full = addition_full + addition;
        }
    }
    for(let i = 1; i <= repeatTimes; i++) {
        if(i < repeatTimes)
            res = res + src_str + addition_full + separator;
        else
            res = res + src_str + addition_full;
    }
    return res;
};
  
