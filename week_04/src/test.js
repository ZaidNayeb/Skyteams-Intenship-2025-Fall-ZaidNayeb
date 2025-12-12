/*
Author  :   Zaid Nayeb
Date    :   2025/12/09

25.	Set Matrix Zeroes 
If an element is zero, set its entire row and column to zero. 

*/

arr = [
    [1, 1, 1],
    [1, 1, 1],
    [1, 0, 1]
];

let a;
    for ( let i = 0; i < arr.length; i++ ) {
        for ( let j = 0; j < arr[i].length; j++ ){
            if( arr[i][j] === 0){
                a = j - 1;
                for( let k = 0; k < arr[i].length; k++ ){
                    arr[i][k] = 0;
                }
            }
        }
    }
    for ( let i = 0; i < arr.length; i++ ) {
        arr[i][a] = 0;
    }

console.log(arr);




