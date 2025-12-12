/*
Author  :   Zaid Nayeb
Date    :   2025/12/09

25.	Set Matrix Zeroes 
If an element is zero, set its entire row and column to zero. 
Follow-up: solve in constant extra space using the matrix itself as markers. 


*/

let arr = [
    [1, 1, 1],
    [1, 1, 1],
    [1, 0, 1]
];
console.log(setZeroes(arr));

export function setZeroes(arr) {
    let rowZero = new Set();
    let colZero = new Set();

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[0].length; j++) {
            if (arr[i][j] === 0) {
                rowZero.add(i);
                colZero.add(j);
            }
        }
    }


    for (let row of rowZero) {
        for (let j = 0; j < arr[0].length; j++) {
            arr[row][j] = 0;
        }
    }
    for (let col of colZero) {
        for (let i = 0; i < arr.length; i++) {
            arr[i][col] = 0;
        }
    }
    return arr;
}





