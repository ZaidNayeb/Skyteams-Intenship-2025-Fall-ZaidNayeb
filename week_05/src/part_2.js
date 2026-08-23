/*
Author    :   Zaid Nayeb
Date      :   2025-12-17

Part 2 — Queue Basics Using Linked Lists 
1.	Implement a Queue 
•	Use a linked list to create a queue class with enqueue, dequeue, front, rear, isEmpty. 
2.	Enqueue and Dequeue 
•	Enqueue [10,20,30], dequeue 1 element, print the queue. 
3.	Check if Queue is Empty 
•	Test before and after enqueueing items. 
4.	Get Front and Rear Values 
•	Print the front and rear of a queue after adding [5,15,25]. 
5. Reverse a Small Queue 
  • 	Reverse a queue [1,2,3] using a temporary stack/array. 
*/
import LinkedList from "./main.js";

class LinkedListQueue {
    constructor() {
        this.queue = new LinkedList();
    }

    enqueueFirst() {
        queue.enqueue(10);
        queue.enqueue(20);
        queue.enqueue(30);
    }

    enqueue(value) {
        this.queue.insertLast(value);
    }

    dequeue() {
        this.queue.deleteFirst();
    }

    front() {
        return this.queue.head.value;
    }

    rear() {
        return this.queue.tail.value;
    }

    isEmpty() {
        return this.queue.isEmpty();
    }

    getSize() {
        return this.queue.getSize();
    }

    reverse() {
        return this.queue.reverse();
    }

    printQueue() {
        return this.queue.printList();
        this.front() = this.queue.rear();
        this.rear() = this.queue.front();
    }
}

const queue = new LinkedListQueue();
queue.enqueueFirst();
queue.printQueue();

console.log(`Front : ${queue.front()}`);
console.log(`rear : ${queue.rear()}`);

queue.reverse();
queue.printQueue();
console.log(queue.getSize());



