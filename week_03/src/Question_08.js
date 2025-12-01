// Author : Zaid Nayeb
// Date   : 2025/11/26
/*
8.	Write a function to check if an array contains a specific element Description: Determine if a given element exists in the array. 
Example: 
Input: 
Array = [3, 6, 9, 12], Element = 6 Output: 
Found 

*/

function containsElement(arr, element) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      return "Found";
    }
  }
  return "Not Found";
}

console.log(containsElement([3, 6, 9, 12], 6)); 
console.log(containsElement([3, 6, 9, 12], 5)); 


module.exports = containsElement;