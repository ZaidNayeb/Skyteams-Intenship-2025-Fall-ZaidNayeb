/*
Author  :   Zaid Nayeb
Date    :   2025-12-17

Part 3 — Stack Basics Using Arrays or Linked Lists 
1. Implement a Stack 
• 	Use an array or linked list to create a stack class with push(x), pop(), top(), isEmpty(), and size(). 
2. Push and Pop 
•	Push [10, 20, 30] onto the stack, then pop 1 element. 
•	Print the stack after each operation. 
3. Check if Stack is Empty 
    • 	Test the stack before and after adding items using isEmpty(). 
4. Get Top Element 
•	Print the top element after pushing [5, 15, 25]. 
•	Pop and check the top again. 
5. Reverse a Small Stack 
•	Reverse a stack [1, 2, 3] using a temporary stack or array. 
•	Print the reversed stack. 

*/

import LinkedList from "./main.js";



//1. Implement a Stack 
//   Use an array or linked list to create a stack class with push(x), pop(), top(), isEmpty(), and size(). 
class LinkedListStack {
    constructor() {
        this.list = new LinkedList();
    }

    // 3. Check if Stack is Empty
    isEmpty() {
        return this.list.isEmpty();
    }

    getSize() {
        return this.list.getSize();
    }

    // 2. Push and Pop 
    // •	Push [10, 20, 30] onto the stack, then pop 1 element. 
    // •	Print the stack after each operation. 
    push(value) {
        this.list.insertFirst(value);
    }

    pop() {
        return this.list.deleteFirst();
    }

    // 4. Get Top Element 
    // •    Print the top element after pushing [5, 15, 25]. 
    // •	Pop and check the top again. 
    getTop() {
        return this.list.head.value;
    }

    reverse() {
        this.list.reverse();
    }

    printList() {
        this.list.printList();
    }
}

const stack = new LinkedListStack();
stack.push(10);
stack.pop();
stack.push(20);
stack.pop();
stack.push(5);
stack.push(10);
stack.push(15);
console.log(stack.getTop());
stack.printList();
stack.reverse();
stack.printList();
