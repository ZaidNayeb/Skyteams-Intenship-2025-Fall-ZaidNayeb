/* 
Author  :   Zaid Nayeb
Date    :   2025/12/05

15.	Kadane’s Algorithm (Max Subarray Sum) 
Example: 
[-2,1,-3,4,-1,2,1,-5,4] → 6 

*/

console.log(kadanesAlgorithm([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

function kadanesAlgorithm(arr) {
    let currentSum = 0;
    let maxSum = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        currentSum += arr[i];
        if (currentSum > maxSum) {
            maxSum = currentSum;
        }
        if (currentSum < 0) {
            currentSum = 0;
        }
    }
    return maxSum;
}

module.exports =  kadanesAlgorithm ;