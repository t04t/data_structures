export default class Item {
  data: number;
  next: Item | null;

  constructor(data: number) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  head: Item | null;
  constructor() {
    this.head = null;
  }

  push(data: number): void {
    let temp = this.head;
    this.head = new Item(data);
    this.head.next = temp;
  }

  pop(): number | null {
    if (this.head == null) return null;
    let temp = this.head;
    this.head = this.head.next;
    return temp.data;
  }

  peek(): number | null {
    if (this.head === null) return null;
    return this.head.data;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
console.log(stack.head?.data); // 2
stack.pop();
console.log(stack.peek()); // 1
