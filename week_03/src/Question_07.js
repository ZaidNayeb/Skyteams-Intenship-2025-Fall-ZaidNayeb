// Author : Zaid Nayeb
// Date   : 2025/11/25
/*
7.	Write a function to find the sum of all elements in an array Description: Calculate the total sum of all array elements. 
Example: 
Input: [1, 2, 3, 4, 5] Output: 
15 


*/

function sumOfArray(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += Number(arr[i]);
  }

  return sum;
}


console.log(sumOfArray([1, 2, 3, 4, 5]));


module.exports = sumOfArray;