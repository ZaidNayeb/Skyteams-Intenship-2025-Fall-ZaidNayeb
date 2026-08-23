/* 
Author  :   Zaid Nayeb
Date    :   2025/12/07

20.	Check Balanced Parentheses  
Input: "{[()]}" → Output: Balanced 
"{()[]}" → Output:  Balanced

*/
console.log(isBalanced("{()[]}"));


function isBalanced(parantheses) {
    const stack = [];
    const map = {
        ')': '(',
        '}': '{',
        ']': '['
    }

    for (let char of parantheses) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else {
            if (stack.pop() !== map[char]) {
                return false;
            }
        }
    }
    return stack.length === 0;
}

module.exports = isBalanced;