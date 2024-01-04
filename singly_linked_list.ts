export default class Item {
  data: number;
  next: Item | null;
  constructor(data: number) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
  head: Item;
  constructor(node: Item) {
    this.head = node;
  }
}

const node1 = new Item(1);
const node2 = new Item(2);
const node3 = new Item(3);
const numList: SinglyLinkedList = new SinglyLinkedList(node1);

numList.head.next = node2;
numList.head.next.next = node3;

console.log(numList);
