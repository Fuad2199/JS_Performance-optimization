// A Queue is a linear data structure that follows the FIFO (First In, First Out) principle.
class Queue {
    constructor() {
        this.items = [];
    }

    // Adds an element to the end of the queue.
    enqueue(element) {
        this.items.push(element);
    }

    // Removes and returns the first element from the queue.
    dequeue() {
        return this.isEmpty() ? "Queue is empty": this.items.shift();
    }

    // Returns the first element without removing it.
    peek() {
        return this.isEmpty() ? "Queue is empty": this.items[0];
    }

    // Checks if the queue is empty.
    isEmpty() {
        return this.items.length === 0;
    }

    // Returns the number of elements in the queue.
    size() {
        return this.items.length;
    }

    // Prints the elements of the queue.
    print() {
        console.log(this.items.join(" -> "));
    }
}

// Example usage:
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.print();
console.log(queue.dequeue());
console.log(queue.peek());
console.log(queue.size());

// Example practice Customer Service System
class CustomerSupportQueue {
    constructor() {
        this.customers = [];
    }

    joinQueue(customerName) {
        console.log(`${customerName} joined the support queue.`);
        this.customers.push(customerName);
    }

    serverCustomer() {
        if (this.isEmpty()) {
            console.log("No customers to serve.");
        } else {
            const customer = this.customers.shift();
            console.log(`Serving ${customer}...`);
        }
    }

    isEmpty() {
        return this.customers.length === 0;
    }

    showQueue() {
        console.log("Current queue:", this.customers.join(" -> "));
    }
}

// Example Usage:
const supportQueue = new CustomerSupportQueue();

supportQueue.joinQueue("Alice");
supportQueue.joinQueue("Bob");
supportQueue.joinQueue("Charlie");

supportQueue.showQueue();   // Alice -> Bob -> Charlie

supportQueue.serverCustomer();  // Serving Alice
supportQueue.serverCustomer();  // Serving Bob

supportQueue.showQueue();       // Charlie