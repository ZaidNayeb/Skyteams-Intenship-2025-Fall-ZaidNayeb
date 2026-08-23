// Author : Zaid Nayeb
// Date   : 2025/11/28

/*
14.	Find factorial of a number 
Description: Compute N! using iterative approach. 
Example: 
Input: 
5 
Output: 
120 

*/
console.log(factorialN(5))
function factorialN(num){
if (num === 0) {
    return 1;
}

    for (let i = num-1; i > 0; i--) {
        num *= i;
    }
    return num;
}
module.exports = factorialN;