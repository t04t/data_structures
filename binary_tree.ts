export default class BinaryTree {
  data: number;
  left: BinaryTree | null;
  right: BinaryTree | null;

  constructor(data: number) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

const root = new BinaryTree(10);
const node2 = new BinaryTree(6);
const node3 = new BinaryTree(8);

root.left = node2;
root.right = node3;

console.log(root.data);
console.log(root.left.data);
console.log(root.right.data);
