// Author : Zaid Nayeb
// Date   : 2025/11/27
/*

29.	Check if Two Arrays Are Equal 
Description: Compare two arrays and determine if they contain the same elements in the same order. 
Example: 
Input: 
[1, 2, 3], [1, 2, 3] 
Output: 
Equal 

*/
let arr1 = [1, 2, 4];
let arr2 = [1, 2, 3];

console.log(equalArray(arr1, arr2));

function equalArray(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] != arr2[i]) {
            return false;
        }
    }
    return true;
}
module.exports =  equalArray;