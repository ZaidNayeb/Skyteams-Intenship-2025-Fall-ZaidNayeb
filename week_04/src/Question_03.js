/* 
Author  :   Zaid Nayeb
Date    :   2025/12/03

3.	Rotate Array K Times to the Right 
Description: Rotate elements of an array K times to the right. 
Example: 
Input: [1, 2, 3, 4, 5], K = 2 
Output: [4, 5, 1, 2, 3] 

*/
console.log(rotateArray([1, 2, 3, 4, 5], 2));

function rotateArray(arr, k) {
    for (let i = 0; i < k; i++) {
        arr.unshift(arr[arr.length - 1]);
        arr.pop();
    }
    return arr;
}

module.exports =  rotateArray ;