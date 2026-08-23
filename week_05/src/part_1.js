/*
Author  : Zaid Nayeb
Date    : 2025-12-13

Part 1 — Linked List Basics  
1.	Create a Singly Linked List 
•	Create a linked list with 3 nodes [10, 20, 30] and print all elements. 

2.	Add a Node at the Beginning 
•	Insert 5 at the start → [5,10,20,30]. 

3.	Add a Node at the End 
•	Append 40 → [5,10,20,30,40]. 

4.	Delete the First Node 
•	Remove head → [10,20,30,40]. 

5. Search for a Value 
    • 	Check if 20 exists → return true/false. 
    
*/

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }

    //1.	Create a Singly Linked List 
    insertThreeFirstElements() {
        this.insertFirst(10);
        this.insertLast(20);
        this.insertLast(30);
        // this.printList();
    }

    //2.	Add a Node at the Beginning
    insertFirst(element) {
        const newNode = new Node(element);
        if (this.isEmpty()) {//If the list is empty
            this.head = newNode;
        } else {//If the list is not Empty
            newNode.next = this.head;
            this.head = newNode;
        }
        this.size++;
    }

    //3.	Add a Node at the End 
    insertLast(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.head = newNode;
        } else {
            let previous = this.head;
            while (previous.next) {
                previous = previous.next;
            }
            previous.next = newNode;
        }
        this.size++;
    }

    //4.    Delete the First Node
    deleteFirst() {
        let deletedNode = this.head;
        this.head = this.head.next;
        this.size--;
        return deletedNode;
    }

    search(value) {
        if (this.isEmpty()) return false;
        if (this.head.value == value) {
            return true;

        } else {
            let previous = this.head;
            while (previous.next && previous.next.value != value) {
                previous = previous.next;
            }
            if (previous.next) {
                return true;
            }
        }
        return false;
    }

    /*
    search(value){
        if( this.isEmpty()){
            return -1;
        }

        let i = 0;
        let current = this.head;
        while( current ){
            if ( current.value == value){
                return i;
            }
            current = current.next;
            i++;
        }
        return -1;
    }
    */

    printList() {
        if (this.isEmpty()) {
            console.log("The list is Empty");
        } else {
            let current = this.head;
            let valuesList = '';
            while (current) {
                valuesList += `${current.value} `;
                current = current.next;
            }
            console.log(valuesList);

        }
    }


}
const list = new LinkedList();
list.insertThreeFirstElements();
list.printList();
console.log(list.search(20));
console.log(list.search(22));
console.log(list.search(30));






