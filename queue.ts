export default class Item {
  data: number;
  next: Item | null;
  constructor(data: number) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  head: Item | null;
  tail: Item | null;
  constructor() {
    this.head = null;
    this.tail = null;
  }

  peekFront(): number | null {
    if (this.head === null) return null;
    return this.head.data;
  }

  peekBack(): number | null {
    if (this.tail === null) return null;
    return this.tail.data;
  }

  enqueue(data: number): void {
    if (this.head === null) {
      this.head = new Item(data);
      this.tail = this.head;
    } else if (this.tail !== null) {
      this.tail.next = new Item(data);
      this.tail = this.tail.next;
    }
  }

  dequeue(): number | null {
    if (this.head === null) return null;
    const temp = this.head;
    this.head = this.head.next;
    if (this.head === null) {
      this.tail = null;
    }
    return temp.data;
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
console.log(queue.peekFront()); // 1
console.log(queue.peekBack()); // 2
console.log(queue.dequeue()); // 1
