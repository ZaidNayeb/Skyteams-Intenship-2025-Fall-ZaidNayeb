// Author : Zaid Nayeb
// Date   : 2025/11/25
/*
4. Display all factors of a number 
Description: Print all numbers that divide the given number exactly. 
Example: 
Input: 
12 Output: 
1, 2, 3, 4, 6, 12 
*/
function factorsOf(num) {
  const result = [];

  for (let i = 1; i <= num; i++) {
    if (num % i === 0) result.push(i);
  }

  return result;
}

console.log(factorsOf(12)); 
