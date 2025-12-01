// Author : Zaid Nayeb
// Date   : 2025/11/26
/*
26. Convert Decimal to Binary 
Description: Convert a decimal number to its binary representation. 
Example: 
Input: 
10 Output: 
1010 


*/
console.log(toBinary(3));


function toBinary(decimal) {
    let arr = [];
    while (decimal > 1) {
        arr.unshift(Math.floor(decimal % 2));
        decimal /= 2;
    }
    return arr;

}

module.exports = toBinary;
