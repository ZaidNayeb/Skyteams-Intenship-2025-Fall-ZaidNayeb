// Author : Zaid Nayeb
// Date   : 2025/11/25
/*
6.	Write a function to find the smallest element in an array Description: Find and return the smallest number in an array. 
Example: 
Input: 
[4, 7, 1, 9, 2] 
Output: 
1 

*/
function smallestElement(arr) {
  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  return min;
}

console.log(smallestElement([4, 7, 9, 2])); 
