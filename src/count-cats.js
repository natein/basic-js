module.exports = function countCats(matrix) {
    if(arguments.length == 0) return 0;
    let count = 0;
    let len = matrix.length;
    for(let i = 0; i < len; i++) {
        let len_internal = matrix[i].length;
        for(let j = 0; j < len_internal; j++) {
            if(matrix[i][j] == "^^") count++;
        }
    }
  return count;
};
