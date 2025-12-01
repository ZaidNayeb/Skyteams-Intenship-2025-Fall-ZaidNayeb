// Author : Zaid Nayeb
// Date   : 2025/11/27
/*

30.	Find Missing Number in Array (1 to N) 
Description: Given numbers from 1 to N with one missing, find the missing number. Example: 
Input: [1, 2, 4, 5] Output: 3 

*/

let a = [1, 2, 4, 5];

console.log(findMissingNumber(a));

function findMissingNumber(arr) {

    for (let i = 0; i < arr.length; i++) {
        if ((i + 1) !== arr[i]) {
            return (i + 1)
        }
    }
    return arr.length + 1;
}
module.exports = findMissingNumber;