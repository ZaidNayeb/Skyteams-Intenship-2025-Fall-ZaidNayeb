/*
Author  :   Zaid Nayeb
Date    :   2025-12-17

Problem: 
Design a stack that supports: 
•	push(x) 
•	pop() 
•	top() 
•	getMin() → returns the minimum element in O(1) 


*/
import LinkedList from "./main.js";

class Stack {
    constructor() {
        this.stack = new LinkedList();
        this.min = new LinkedList();
    }

    push(value) {
        this.stack.insertFirst(value);
        if (this.min.isEmpty() || value <= this.min.head.value) {
            this.min.insertFirst(value);
        }
    }

    pop() {
        const removed = this.stack.deleteFirst();
        if (removed === this.min.head.value) {
            this.min.deleteFirst();
        }
        return removed;
    }

    top() {
        return this.stack.head.value;
    }

    getMin() {
        return this.min.head.value;
    }
    // getMin(){
    //     let min = Infinity;
    //     let temp = this.stack.head;
    //     for(let i = 0; i < this.stack.size; i++){
    //         if( temp.value < min) min = temp.value;
    //         temp = temp.next;
    //     }
    //     return min;
    // }


}

const stack = new Stack();
stack.push(10);
stack.push(20);
console.log(stack.top());
stack.pop();
console.log(stack.top());
stack.push(5);
stack.pop();
console.log(stack.getMin());


