module.exports = function transform(arr) {
    if(type(arr) != 'array') throw new Error();
    const new_arr = [];
    let len = arr.length;
    for(let i = 0; i < len; i++) {
        switch(arr[i]) {
            case '--discard-next':
                if (i < len - 3) {
                    if(arr[i+2] === '--double-prev'|| arr[i+2] === '--discard-prev')
                        i = i + 1;
                }
                i++; break;
            case '--discard-prev':
                if (new_arr.length) new_arr.pop();
                break;
            case '--double-next':
                if(i != len - 1) new_arr.push(arr[i+1]);
                break;
            case '--double-prev':
                if(i != 0) new_arr.push(arr[i -1]);
                break;
            default:
                new_arr.push(arr[i]);
        }
    }
    return new_arr;
};

function type(value) {
  var regex = /^\[object (\S+?)\]$/;
  var matches = Object.prototype.toString.call(value).match(regex) || [];
  return (matches[1] || 'undefined').toLowerCase();
}
