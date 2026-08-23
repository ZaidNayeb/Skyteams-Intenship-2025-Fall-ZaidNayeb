/* 
Author  :   Zaid Nayeb
Date    :   2025/12/03

1.	Find Second Largest Number in an Array 
Description: Find the second largest number without sorting the array. 
Example: 
Input: [10, 20, 4, 45, 99] 
Output: 45 

*/
console.log(secondLargest([7, 7, 7]));
function secondLargest(arr) {
    let largest = -Infinity;
    let second = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            second = largest;
            largest = arr[i];
        } else if (arr[i] > second && arr[i] !== largest) {
            second = arr[i];
        }

    }
    return second;
}

// function secondLargest(arr) {
//     let largest = -Infinity;
//     let second_largest = -Infinity;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > largest) largest = arr[i];
//     }
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === largest) arr[i] = 0;
//         if (arr[i] > second_largest) second_largest = arr[i];
//     }
//     return second_largest;
// }
module.exports = secondLargest;