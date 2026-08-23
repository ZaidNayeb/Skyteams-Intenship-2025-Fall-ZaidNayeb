// Author : Zaid Nayeb
// Date   : 2025/11/26
/*
22. Collatz Sequence (Hailstone Numbers) Description: 
Take a number n. 
•	If n is even, divide it by 2. 
•	If n is odd, multiply it by 3 and add 1. 
•	Repeat until n = 1. 
•	Count the number of steps to reach 1. 
Example: 
Input: 
6 
Output: 
6 → 3 → 10 → 5 → 16 → 8 → 4 → 2 → 1 (Steps: 8) 


*/
console.log(coolatz(6));

function coolatz(num) {
    let counter = 0;
    let output = num + '';

    while (num != 1) {
        num % 2 === 0 ? num /= 2 : num = num * 3 + 1;
        output += " -> " + num;
        counter++;
    }
    return output + " (Steps : " + counter + ")";

}

module.exports = coolatz;