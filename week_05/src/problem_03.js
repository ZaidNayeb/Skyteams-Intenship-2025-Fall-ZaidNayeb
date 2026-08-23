/*
Author  :   Zaid Nayeb
Date    :   2025-12-17

3.	Implement Queue Using Stacks 
Problem: 
Implement a queue using two stacks. Operations: 
•	push(x) 
•	pop() → removes front 
•	peek() → returns front 
•	empty() 

*/

import LinkedList from "./main.js";

class Queue {
    constructor() {
        this.pushStack = new LinkedList();
        this.popStack = new LinkedList();
    }

    push(value) {
        this.pushStack.insertFirst(value);
    }

    pop() {
        if (!this.popStack.isEmpty()) {
            while (this.pushStack.isEmpty()) {
                this.popStack.insertFirst(this.pushStack.deleteFirst());
            }
        }
        return this.popStack.deleteFirst();
    }

    peek() {
        if (this.popStack.isEmpty()) {
            while (!this.pushStack.isEmpty()) {
                this.popStack.insertFirst(this.pushStack.deleteFirst());
            }
        }
        return this.popStack.head.value;
    }

    empty() {
        return !this.pushStack.size && !this.popStack.size;
    }

    print() {
        let result = [];

        let current = this.popStack.head;
        while (current) {
            result.push(current.value);
            current = current.next;
        }

        let temp = [];
        current = this.pushStack.head;
        while (current) {
            temp.push(current.value);
            current = current.next;
        }

        for (let i = temp.length - 1; i >= 0; i--) {
            result.push(temp[i]);
        }

        console.log(result.join(" "));
    }

}


let queue = new Queue();
queue.push(10);
queue.push(20);
queue.push(30)
queue.print();
console.log(queue.peek());



