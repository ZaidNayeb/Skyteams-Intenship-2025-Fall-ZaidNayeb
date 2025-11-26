// Author : Zaid Nayeb
// Date   : 2025/11/25
/*
2.	Reverse a number 
Description: Reverse the digits of a number. 
Example: Input: 
1234 Output: 
4321 

*/

function reverseNumber(number) {
    // Return NaN for invalid non-number inputs
    if (typeof number !== 'number' || isNaN(number)) return NaN;

    const sign = number < 0 ? -1 : 1;
    let n = Math.abs(Math.trunc(number)); // ignore fractional part if any

    let reversed = 0;
    while (n > 0) {
        reversed = reversed * 10 + (n % 10);
        n = Math.floor(n / 10);
    }

    return sign * reversed;
}

module.exports = { reverseNumber };
