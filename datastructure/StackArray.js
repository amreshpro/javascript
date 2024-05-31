// push/pop/isEmpty/isFull/top

class Stack {
  constructor(capacity) {
    this.list = [];
    this.capacity = capacity;
    this.length = 0;
  }

  push(item) {
    if (this.length < this.capacity) {
      this.list.push(item);
      this.length++;
    }
  }

  pop() {
    if (this.length != 0) {
      this.list.pop();
      this.length--;
    }
  }

  isEmpty() {
    return this.length == 0 ? true : false;
  }

  isFull() {
    return this.length < this.capacity ? false : true;
  }

  top() {
    return this.length != 0 ? this.list[this.length - 1] : null;
  }
  print() {
    // this.list.forEach((item)=>{
    //     console.log(item)
    // })
    console.log(this.list);
  }
}

const stack = new Stack(5);

stack.print();
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.push(50);
stack.print();
stack.push(60);
stack.print();
stack.pop();
stack.pop();
stack.print();
console.log(stack.isEmpty()); //false
console.log(stack.isFull()); //true
console.log(stack.top()); //undefined
