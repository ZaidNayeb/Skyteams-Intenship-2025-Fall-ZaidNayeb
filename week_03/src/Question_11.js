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
function primeNumbers(number){
    let primes = [];

    for (let i = 2; i <= number; i++){
        let isPrime = true;
        
        for (let j = 2; j <= Math.sqrt(number); j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) primes.push(i);
    }
    return primes;
}
console.log(primeNumbers(10));