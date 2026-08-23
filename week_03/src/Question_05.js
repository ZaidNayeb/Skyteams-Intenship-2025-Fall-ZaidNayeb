// Author : Zaid Nayeb
// Date   : 2025/11/25
/*
5.	Write a function to find the largest element in an array 
Description: Given an array of numbers, return the largest value. 
Example: 
Input: [2, 8, 5, 3, 9] Output: 
9 

*/
function largestElement(arr) {
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

module.exports = largestElement;