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
}

function sortedArrayToBSTHelper(
  nums: number[],
  start: number,
  end: number
): BinaryTree {
  if (start === end) return new BinaryTree(nums[start]);
  const middle = Math.floor((start + end) / 2);

  let left: BinaryTree | null = null;
  if (middle - 1 >= start) {
    left = sortedArrayToBSTHelper(nums, start, middle - 1);
  }

  let right: BinaryTree | null = null;
  if (middle + 1 <= end) {
    right = sortedArrayToBSTHelper(nums, middle + 1, end);
  }

  const root: BinaryTree = new BinaryTree(nums[middle], left, right);
  return root;
}

function sortedArrayToBST(nums: number[]) {
  if (nums.length === 0) return null;
  return sortedArrayToBSTHelper(nums, 0, nums.length - 1);
}

function isKeyExists(key: number, bst: BinaryTree | null): boolean {
  if (bst === null) return false;
  if (bst.data === key) return true;

  if (bst.data > key) return isKeyExists(key, bst.left);
  else return isKeyExists(key, bst.right);
}

const bst = sortedArrayToBST([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
console.log(bst);
// BinaryTree {
//   data: 6,
//   left: BinaryTree {
//     data: 3,
//     left: BinaryTree { data: 1, left: null, right: [BinaryTree] },
//     right: BinaryTree { data: 4, left: null, right: [BinaryTree] }
//   },
//   right: BinaryTree {
//     data: 9,
//     left: BinaryTree { data: 7, left: null, right: [BinaryTree] },
//     right: BinaryTree { data: 10, left: null, right: [BinaryTree] }
//   }
// }
console.log(isKeyExists(5, bst)); // true
console.log(isKeyExists(100, bst)); // false
