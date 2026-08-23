// Author : Zaid Nayeb
// Date   : 2025/11/28

/*
13.	Power of a number (without built-in function) Description: Compute a^b using repeated multiplication. 
Example: 
Input: 
2, 5 
Output: 
32 

*/
console.log(powerOfN(2,5))

function powerOfN(a,b){
    if (b === 0) {
        return 1;
    }
    let num = a;
    for (let i = 1; i < b; i++) {
        num *= a;
    }
    return num;
}

module.exports = powerOfN;