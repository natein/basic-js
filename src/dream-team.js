module.exports = function createDreamTeam(arr) {
    if (arr === null || arr == undefined) return false;
    let res = [];
    let len = arr.length;
    for(let i = 0; i < len; i++) {
        if(typeof(arr[i]) == "string") {
            let str_len = arr[i].length;
            for(let j = 0; j < str_len; j++) {
                if(arr[i][j] != " ") {
                    res.push(arr[i][j].toUpperCase());
                    break;
                }
            }
        }           
    }
    if(res.length == 0) return false;
    res.sort();
    return res.join("");
};
