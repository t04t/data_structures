export default class SinglyLinkedListNode {
  data: number | null;
  next: SinglyLinkedListNode | null;
  constructor(data: number | null) {
    this.data = data;
    this.next = null;
  }

  addNextNode(newNode: SinglyLinkedListNode): void {
    let tempNode = this.next!;
    this.next = newNode;
    newNode = tempNode;
  }
}

class SinglyLinkedList {
  head: SinglyLinkedListNode | null;
  constructor(arr: number[]) {
    this.head =
      arr.length > 0
        ? new SinglyLinkedListNode(arr[0])
        : new SinglyLinkedListNode(null);

    let currentNode = this.head;
    for (let i = 1; i < arr.length; i++) {
      currentNode.next = new SinglyLinkedListNode(arr[i]);
      currentNode = currentNode.next;
    }
  }

  at(index: number): SinglyLinkedListNode | null {
    let iterator = this.head;
    if (iterator === null) return null;
    for (let i = 0; i < index; i++) {
      iterator = iterator!.next;
    }
    return iterator;
  }

  findNode(key: number): number | null {
    let iterator = this.head;
    let index = 0;
    while (iterator !== null) {
      if (iterator.data == key) return index;
      iterator = iterator.next;
      index++;
    }
    return null;
  }

  preAppend(newNode: SinglyLinkedListNode): void {
    newNode.next = this.head;
    this.head = newNode;
  }

  tailAppend(newNode: SinglyLinkedListNode): void {
    let iterator = this.head;
    while (iterator!.next !== null) {
      iterator = iterator!.next;
    }
    iterator!.next = newNode;
  }

  popFront(): void {
    this.head = this.head!.next;
  }

  delete(index: number) {
    let iterator = this.head;
    for (let i = 0; i < index - 1; i++) {
      if (iterator?.next == null) return null;
      iterator = iterator.next;
    }
    iterator!.next = iterator!.next!.next;
  }

  printList() {
    let iterator = this.head;
    let str = "";
    while (iterator !== null) {
      str += iterator.data + "→";
      iterator = iterator.next;
    }
    console.log(str.substring(0, str.length - 1));
  }
}

const numList = new SinglyLinkedList([
  35, 23, 546, 67, 86, 234, 56, 767, 34, 1, 98, 78, 555,
]);

console.log(numList.at(5));
// SinglyLinkedListNode {
//   data: 234,
//   next: SinglyLinkedListNode {
//     data: 56,
//     next: SinglyLinkedListNode { data: 767, next: [SinglyLinkedListNode] }
//   }
// }
numList.printList(); // 35→23→546→67→86→234→56→767→34→1→98→78→555
console.log(numList.findNode(234)); // 5
numList.preAppend(new SinglyLinkedListNode(0));
numList.printList(); // 0→35→23→546→67→86→234→56→767→34→1→98→78→555
numList.tailAppend(new SinglyLinkedListNode(1000));
numList.printList(); // 0→35→23→546→67→86→234→56→767→34→1→98→78→555→1000
numList.popFront();
numList.printList(); // 35→23→546→67→86→234→56→767→34→1→98→78→555→1000
numList.delete(3);
numList.printList(); // 35→23→546→86→234→56→767→34→1→98→78→555→1000
