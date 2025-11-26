// Author : Zaid Nayeb
// Date   : 2025/11/25
/*
2.	Reverse a number 
Description: Reverse the digits of a number. 
Example: Input: 
1234 Output: 
4321 

*/

function reverseNumber(num) {
  let reverse = 0;

  if (num < 0) {
    num *= -1;

    while (num > 0) {
      reverse += num % 10;
      if (num >= 10) {
        reverse *= 10;
      }
      num = Math.floor(num / 10);
    }

    reverse *= -1;
    return reverse;

  } else {
    while (num > 0) {
      reverse += num % 10;
      if (num >= 10) {
        reverse *= 10;
      }
      num = Math.floor(num / 10);
    }

    return reverse;
  }
}

console.log(reverseNumber(12345));  
console.log(reverseNumber(-987));   
