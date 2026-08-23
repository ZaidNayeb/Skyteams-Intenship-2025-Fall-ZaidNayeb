/*
Author  :   Zaid Nayeb
Date    :   2025-12-17

4.	Evaluate Reverse Polish Notation (RPN) 
Problem: 
Evaluate an expression in Reverse Polish Notation. 
Valid operators: + - * /. 
Example: 
Input: ["2","1","+","3","*"] Output: 9 
Explanation: (2 + 1) * 3 

*/



const operation = {
    '+': (a, b) => Number(a) + Number(b),
    '-': (a, b) => Number(a) - Number(b),
    '*': (a, b) => Number(a) * Number(b),
    '/': (a, b) => Number(a) / Number(b),
}

function RPN(value) {
    const stack = [];

    for (let v of value) {
        if (operation[v]) {
            stack.push(operation[v](stack.pop(), stack.pop()));
        } else {
            stack.push(v);
        }
    }
    return stack[0];
}

console.log(RPN(["2", "1", "+", "3", "*"]));

