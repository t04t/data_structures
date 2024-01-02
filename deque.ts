export default class Item {
  data: number;
  prev: Item | null;
  next: Item | null;
  constructor(data: number) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class Deque {
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

  enqueueFront(data: number): void {
    if (this.head === null) {
      this.head = new Item(data);
      this.tail = this.head;
    } else {
      this.head.prev = new Item(data);
      this.head.prev.next = this.head;
      this.head = this.head.prev;
    }
  }

  enqueueBack(data: number): void {
    if (this.head === null) {
      this.head = new Item(data);
      this.tail = this.head;
    } else if (this.tail !== null) {
      this.tail.next = new Item(data);
      this.tail.next.prev = this.tail;
      this.tail = this.tail.next;
    }
  }

  dequeueFront(): number | null {
    if (this.head === null) return null;
    const temp = this.head;
    this.head = this.head.next;
    if (this.head === null) {
      this.tail = null;
    } else {
      this.head.prev = null;
    }
    return temp.data;
  }

  dequeueBack(): number | null {
    if (this.tail === null) return null;
    const temp = this.tail;
    this.tail = this.tail.prev;
    if (this.tail === null) {
      this.head = null;
    } else {
      this.tail.next = null;
    }
    return temp.data;
  }
}

const dequeue = new Deque();
dequeue.enqueueFront(1);
dequeue.enqueueFront(2);
dequeue.enqueueBack(0);
console.log(dequeue.peekBack()); // 0
console.log(dequeue.peekFront()); // 2
console.log(dequeue.dequeueBack()); // 0
console.log(dequeue.dequeueFront()); // 2
console.log(dequeue.dequeueFront()); // 1
console.log(dequeue.head); // null
