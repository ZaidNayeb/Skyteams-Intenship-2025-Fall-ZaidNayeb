// Author : Zaid Nayeb
// Date   : 2025/11/28

/*
16.	Fibonacci sequence 
Description: Print the Fibonacci sequence up to N terms. 
Example: 
Input: 
7 
Output: 
0, 1, 1, 2, 3, 5, 8 


*/
console.log(fibonacci(7));

function fibonacci(num){
    let arr = [0,1];
    let left = 0;
    let right = 1;
    while (arr[arr.length - 1] <= num) {
        arr.push( arr[left] + arr[right]);
        left++;
        right++;
    }
    return arr;
}
module.exports = fibonacci;
