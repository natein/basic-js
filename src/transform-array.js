module.exports = function transform(arr) {
    if(type(arr) != 'array') throw new Error();
    let new_arr = [];
    let len = arr.length;
    for(let i = 0; i < len; i++) {
        if(arr[i] == '--discard-next') i++;
        else if(arr[i] == '--discard-prev') {
            if(new_arr.length != 0) new_arr.pop();
        }
        else if(arr[i] == '--double-next') {
            if(i != len - 1) {
                new_arr.push(arr[i+1]);
                new_arr.push(arr[i+1]);
                i++;
            }
        }
        else if(arr[i] == '--double-prev') {
            if(i != 0) {
                new_arr.push(arr[i -1]);
            }
        }
        else new_arr.push(arr[i]);
    }
    return new_arr;
};

function type(value) {
  var regex = /^\[object (\S+?)\]$/;
  var matches = Object.prototype.toString.call(value).match(regex) || [];
  return (matches[1] || 'undefined').toLowerCase();
}
