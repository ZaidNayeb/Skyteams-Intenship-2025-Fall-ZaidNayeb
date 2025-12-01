// Author : Zaid Nayeb
// Date   : 2025/11/26
/*
10.	Check whether a number is prime 
Description: Determine if a number is divisible only by 1 and itself. 
Example: 
Input: 
17 Output: 
Prime Input: 
20 Output: 
Not Prime 

*/
console.log(isPrime(10))

function isPrime(num) {
  if (num < 2){ 
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0){ 
        return false;
    }

  }
return true;
}
 

module.exports = isPrime;
