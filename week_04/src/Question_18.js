/* 
Author  :   Zaid Nayeb
Date    :   2025/12/08

18.	Implement a Stack (Array-Based) 
Operations: push, pop, peek, isEmpty. 


*/


class Stack {
    constructor() {
        this.items = [];
    }

    push(num) {
        this.items.push(num);
    }
    pop() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items.pop();
    }
    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items[this.items.length - 1];
    }
    isEmpty() {
        return this.items.length === 0;
    }


}

const stack = new Stack();
stack.push(10);
stack.push(20);
console.log(stack.peek());
console.log(stack);

module.exports =  Stack ;


