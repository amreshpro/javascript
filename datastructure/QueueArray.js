class Queue {
  constructor(capacity) {
    this.capacity = capacity;
    this.length = 0;
    this.list = [];
  }

  enqueue(item) {
    if (this.length < this.capacity) {
      this.list.push(item);
      this.length++;
    }
  }

  dequeue() {
    if (this.length != 0) this.list.shift();
    this.length--;
  }
  isEmpty(){
    return this.length==0 ? true : false
  }
  isFull(){
    return this.length==this.capacity
  }
  size(){
    return this.length
  }


print(){
    // this.list.forEach((item)=>{
    //     console.log(item)
    // })
    console.log(this.list)
}

}



const queue = new Queue(5);

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.print()
console.log("Size: "+queue.size())
console.log("Full: "+queue.isFull())
console.log("IsEmpty: "+queue.isEmpty())


queue.print()
queue.dequeue()
queue.dequeue()
queue.print()