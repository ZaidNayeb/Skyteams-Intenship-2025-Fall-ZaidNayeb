// Author : Zaid Nayeb
// Date   : 2025/11/25
/*
. Sum of digits of a number 
Description: Calculate the sum of all digits in a given number. 
Example: Input: 
12345 Output: 
15 

*/
function sumOfDigits(num) {
  let sum = 0;
  const digits = num.toString();

  for (let i = 0; i < digits.length; i++) {
    sum += Number(digits[i]);
  }

  return sum;
}

console.log(sumOfDigits(12345));
module.exports = sumOfDigits;