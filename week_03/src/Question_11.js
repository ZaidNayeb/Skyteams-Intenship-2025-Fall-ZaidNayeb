// Author : Zaid Nayeb
// Date   : 2025/11/26
/*
11. Generate all prime numbers up to N 
Description: List all prime numbers up to a given limit using a loop. 
Example: 
Input: 
10 Output: 
2, 3, 5, 7 

*/
function isPrime(num) {
    if (num < 2) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}


function primeNumbers(number) {
    let primes = [];
    for (let i = 0; i <= number; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    return primes;
}
console.log(primeNumbers(10));

module.exports = { isPrime, primeNumbers };
