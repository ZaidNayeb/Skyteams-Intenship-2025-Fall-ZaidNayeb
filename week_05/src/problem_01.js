/*
Author  :   Zaid Nayeb
Date    :   2025-12-17

Problem: 
Given a string containing only '(' , ')' , '{' , '}' , '[' , ']', determine if the string is valid. 
A valid string must have brackets closed in the correct order. 
Example: 
Input: s = "()[]{}" Output: true 
Input: s = "(]" 
Output: false 
 

*/

import LinkedList from "./main.js";

console.log(isBalanced('{()[]{}}'));


function isBalanced(parantheses) {
    const stack = new LinkedList();
    const map = {
        ')': '(',
        '}': '{',
        ']': '['
    }

    for (let char of parantheses) {
        if (char === '(' || char === '{' || char === '[') {
            stack.insertFirst(char);
        } else {
            if (stack.deleteFirst() !== map[char]) {
                return false;
            }
        }
    }
    return stack.isEmpty();
}