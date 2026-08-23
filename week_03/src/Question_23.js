// Author : Zaid Nayeb
// Date   : 2025/11/26
/*
23.	Calculate Factorial Using Recursion 
Description: Implement factorial(n), which calculates the factorial of n using recursion. 
Example: 
Input: 
5 
Output: 
120 


*/

console.log(factorial(170));

function factorial(num) {
    if (num === 1){
        return 1;
    } else{
        return num * factorial(num - 1);
    }
}

module.exports = factorial;