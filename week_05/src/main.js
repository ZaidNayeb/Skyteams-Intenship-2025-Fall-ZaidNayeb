class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }

    insertFirst(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    insertLast(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
    }

    insertAt(value, index) {
        if (index > this.size || index < 0) return;

        if (index === 0) {
            this.insertFirst(value);
        } else {
            const newNode = new Node(value);
            let current = this.head;
            for (let i = 0; i < index - 1; i++) {
                current = current.next;
            }
            newNode.next = current.next;
            current.next = newNode;
            this.size++;
        }
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

    deleteFirst() {
        if (this.isEmpty()) {
            return null;
        } else {
            const value = this.head.value;
            this.head = this.head.next;
            this.size--;
            return value;
        }
    }

    deleteLast() {
        if (this.isEmpty()) return null;

        const value = this.tail;
        if (this.getSize() == 1) {
            this.head = null;
            this.tail = null;
        } else {
            let previous = this.head;
            while (previous.next != this.tail) {
                previous = previous.next;
            }
            previous.next = null;
            this.tail = previous;
        }
        this.size--;
        return value;
    }

    deleteValue(value) {
        if (this.isEmpty()) return null;
        if (this.head.value == value) {
            this.head = this.head.next;
            this.size--;
            return value;
        } else {
            let previous = this.head;
            while (previous.next && previous.next.value != value) {
                previous = previous.next;
            }
            if (previous.next) {
                let deletedNode = previous.next;
                previous.next = deletedNode.next;
                this.size--;
                return value;
            }
            return null;
        }
    }

    reverse() {
        let previous = null;
        let current = this.head;
        while (current) {
            let next = current.next;
            current.next = previous;
            previous = current;
            current = next;
        }
        this.head = previous;
    }


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

export default LinkedList;