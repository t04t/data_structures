export default class BinaryTree {
  data: number;
  left: BinaryTree | null;
  right: BinaryTree | null;

  constructor(
    data: number,
    left: BinaryTree | null = null,
    right: BinaryTree | null = null
  ) {
    this.data = data;
    this.left = left;
    this.right = right;
  }

  printInOrder() {
    this.inOrderWalk(this);
    console.log("");
  }

  inOrderWalk(tRoot: BinaryTree | null) {
    if (tRoot !== null) {
      this.inOrderWalk(tRoot.left);
      process.stdout.write(tRoot.data + " ");
      this.inOrderWalk(tRoot.right);
    }
  }
}

class BinarySearchTree {
  arrList: number[];
  root: BinaryTree | null;
  constructor(arrList: number[]) {
    let sortedList: number[] = arrList.sort(function (a, b) {
      return a - b;
    });
    this.arrList = arrList;
    this.root = BinarySearchTree.sortedArrayToBST(sortedList);
  }

  printSorted() {
    this.root?.printInOrder();
  }

  // 再帰でたどる
  static sortedArrayToBSTHelper(
    nums: number[],
    start: number,
    end: number
  ): BinaryTree {
    if (start === end) return new BinaryTree(nums[start]);
    const middle = Math.floor((start + end) / 2);

    let left: BinaryTree | null = null;
    if (middle - 1 >= start) {
      left = BinarySearchTree.sortedArrayToBSTHelper(nums, start, middle - 1);
    }

    let right: BinaryTree | null = null;
    if (middle + 1 <= end) {
      right = BinarySearchTree.sortedArrayToBSTHelper(nums, middle + 1, end);
    }

    const root: BinaryTree = new BinaryTree(nums[middle], left, right);
    return root;
  }

  static sortedArrayToBST(nums: number[]) {
    if (nums.length === 0) return null;
    return BinarySearchTree.sortedArrayToBSTHelper(nums, 0, nums.length - 1);
  }

  // BSTリストの中にkeyが存在するかどうか
  isKeyExists(key: number): boolean {
    let iterator = this.root;
    while (iterator != null) {
      if (iterator.data == key) return true;
      if (iterator.data > key) iterator = iterator.left;
      else iterator = iterator.right;
    }
    return false;
  }

  insert(value: number): void {
    let iterator = this.root;
    while (iterator != null) {
      if (iterator.data > value && iterator.left === null) {
        iterator.left = new BinaryTree(value);
      } else if (iterator.data < value && iterator.right === null) {
        iterator.right = new BinaryTree(value);
      }
      iterator = value > iterator.data ? iterator.right : iterator.left;
    }
  }
}

const bst = new BinarySearchTree([
  4, 43, 36, 46, 32, 7, 97, 95, 34, 8, 96, 35, 85, 1010, 232,
]);
console.log(bst);
// BinarySearchTree {
//   arrList: [
//      4,  7,  8,  32,   34,
//     35, 36, 43,  46,   85,
//     95, 96, 97, 232, 1010
//   ],
//   root: BinaryTree {
//     data: 43,
//     left: BinaryTree { data: 32, left: [BinaryTree], right: [BinaryTree] },
//     right: BinaryTree { data: 96, left: [BinaryTree], right: [BinaryTree] }
//   }
// }

console.log(bst.isKeyExists(7)); // true
console.log(bst.isKeyExists(100)); // false

bst.printSorted(); // 4 7 8 32 34 35 36 43 46 85 95 96 97 232 1010
bst.insert(10);
bst.printSorted(); // 4 7 8 10 32 34 35 36 43 46 85 95 96 97 232 1010
bst.insert(100);
bst.insert(0);
bst.printSorted(); // 0 4 7 8 10 32 34 35 36 43 46 85 95 96 97 100 232 1010
