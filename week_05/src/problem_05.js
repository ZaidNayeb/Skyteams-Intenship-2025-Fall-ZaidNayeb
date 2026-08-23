/*
Author  :   Zaid Nayeb
Date    :   2025-12-17

5.	Backspace String Compare 
Problem: 
Given two strings s and t, return true if they are equal after interpreting # as a backspace. 
Example: 
Input: "ab#c", "ad#c" 
Output: true 
Both become "ac". 

*/

console.log(compare("ab#c", "ad#c"));


function process(value) {
    let stack = [];

    for (let i of value) {
        if (i !== '#') {
            stack.push(i);
        } else {
            stack.pop();
        }
    }
    console.log(stack);

    return stack.join("");
}

function compare(a, b) {
    return process(a) === process(b);
}
