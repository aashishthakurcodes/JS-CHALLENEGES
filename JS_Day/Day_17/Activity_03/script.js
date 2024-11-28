// ### Activity 3: Queue
// - **Task 5:** Implement a `Queue` class with methods `enqueue` (add element), `dequeue` (remove element), and `front` (view the first element).

console.log("Task 5")

class Queue {
    constructor() {
        this.queue = [];
    };

    enqueue(element) {
        this.queue.push(element)
    };

    dequeue() {
        if (this.queue.length === 0) {
            return "Queue is empty, you can't remove any element";
        }

        return this.queue.shift();
    }

    front(){
        if(this.queue.length===0){
            return "Queue is empty you can't view any element"
        }

        return this.queue[0];
    }
}

const queue=new Queue();
//Adding new element
queue.enqueue(345);
queue.enqueue(45);
queue.enqueue(3994);

//View the first element
console.log(queue.front());

//Whole Queue
console.log(queue)

//removing element
console.log(queue.dequeue());


// - **Task 6:** Use the `Queue` class to simulate a simple printer queue where print jobs are added to the queue and processed in order.



class Queue2 {
    // Constructor to initialize the queue
    constructor() {
      this.queue = []; // Array to store elements of the queue
    }
  
    // Method to add an element to the end of the queue
    enqueue(element) {
      // Add the element to the end of the queue
      this.queue.push(element);
    }
  
    // Method to remove and return the element from the front of the queue
    dequeue() {
      // Check if the queue is empty (no elements), then return null
      if (this.queue.length === 0) {
        return "Queue is empty, you can't remove any element";
      }
  
      // Remove and return the element from the front of the queue
      return this.queue.shift();
    }
  
    // Method to view the element at the front of the queue without removing it
    front() {
      // Check if the queue is empty (no elements), then return null
      if (this.queue.length === 0) {
        return "Queue is empty, you can't view any element";
      }
  
      // Return the element at the front of the queue
      return this.queue[0];
    }
  }
  
  // Function to simulate a printer queue using a queue
  function printerQueue(jobs) {
    // Create a new queue
    const queue = new Queue2();
  
    // Process each print job in the order they are received
    for (let i = 0; i < jobs.length; i++) {
      // Add the print job to the queue
      queue.enqueue(jobs[i]);
    }
  
    // Process each print job in the order they are received
    while (queue.queue.length > 0) {
      console.log(`Processing job: ${queue.dequeue()}`);
    }
  }
  
  // Test the printerQueue function
  const printJobs = ["Job 1", "Job 2", "Job 3", "Job 4"];
  printerQueue(printJobs);