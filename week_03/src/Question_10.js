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

function isPrime(num) {
  if (num < 2){ 
    return "Not Prime";
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0){ 
        return "Not Prime";
    }
  }

  return "Prime";
}
 
