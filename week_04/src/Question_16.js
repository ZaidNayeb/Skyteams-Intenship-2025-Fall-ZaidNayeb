/* 
Author  :   Zaid Nayeb
Date    :   2025/12/07

16.	Matrix Multiplication 
Description: Multiply matrix A × B manually. 
Example: 
[[1,2],[3,4]] × [[5,6],[7,8]] → [[19,22],[43,50]] 

*/
console.log(matrixMultiplication([[1, 2], [3, 4]], [[5, 6], [7, 8]]));


function matrixMultiplication(a, b) {
    const aRow = a.length;
    const aCol = a[0].length;
    const bRow = b.length;
    const bCol = b[0].length;
    if (aCol !== bRow) {
        throw new Error("Incompatible matrices for multiplication");
    }
    const result = new Array(aRow);

    for (let i = 0; i < aRow; i++) {
        result[i] = new Array(bCol);
        for (let j = 0; j < bCol; j++) {
            result[i][j] = 0;
            for (let k = 0; k < aCol; k++) {
                result[i][j] += a[i][k] * b[k][j];
            }
        }
    }
    return result;

}
module.exports =  matrixMultiplication ;