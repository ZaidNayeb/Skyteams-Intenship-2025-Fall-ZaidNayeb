class Queue{
    constructor(){
        this.stack1 = [];
        this.stack2 = [];
    }

    enqueue(value){
        this.stack1.push(value);
    }

    dequeue(){
        if(this.stack2.length === 0){
            while(this.stack1.length > 0){
                this.stack2.push(this.stack1.pop());
            }
        }
        return this.stack2.pop();
    }
    peek(){
        if(this.stack2.length === 0){
            while(this.stack1.length > 0){
                this.stack2.push(this.stack1.pop());
            }
        }
        return this.stack2[this.stack1.length -1];
    }

    isEmpty(){
        return this.stack1.length === 0 && this.stack2.length === 0;
    }

    print(){
        let values = '';
        for(let i = 0; i < this.stack1.length; i++){
            values += `${this.stack1[i]} `;
        }
        console.log(values);
        
    }
}

const queue = new Queue();
queue.enqueue(10);
queue.enqueue(29)
queue.print();

