/*
Author  :   Zaid Nayeb
Date    :   2025-12-17

6.	Remove Adjacent Duplicates 
Problem: 
Given a string s, repeatedly remove adjacent pairs of equal characters. 
Example: 
Input: "abbaca" 
Output: "ca" 

*/

console.log(removeDuplicates("abbaca"));


function removeDuplicates(s) {
    const stack = [];

    for (let char of s) {
        if (stack.length > 0 && stack[stack.length - 1] === char) {
            stack.pop();
        } else {
            stack.push(char);
        }
    }

    return stack.join('');
}
