function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}

BinarySearchTree.prototype.add = function (value) {
  if (value === this.value) {
    this.count++;
    return;
  }

  // If value is less than this.value
  if (value < this.value) {
    //  If this.left === null
    if (this.left === null) {
      //  Then this.left = create new node (value)
      this.left = new BinarySearchTree(value);
    } else {
      //  else invoke this.left.add()
      this.left.add(value);
    }
  } else {
    //  Else value is greater than this.value
    //  If this.right === null
    if (this.right === null) {
      // this.right = new node with value
      this.right = new BinarySearchTree(value);
    } else {
      //  Else invoke this.right.add(value)
      this.right.add(value);
    }
  }
};

const bst = new BinarySearchTree(4);
bst.add(2);
bst.add(1);
bst.add(3);
bst.add(7);
bst.add(9);
bst.add(8);

/*

Given the root of a binary search tree, determine the sum of all the values.
Note that the function signature is NOT defined as a method on the
BinarySearchTree prototype. Instead, we provide the root as an argument to the
function.
            4
        2       7
    1       3       9
                8
*/
console.log(bst);
console.dir(bst, { depth: null });
const bstSum = (root) => {
  const leftVal = root.left ? bstSum(root.left) : 0;

  const rightVal = root.right ? bstSum(root.right) : 0;

  return root.value + leftVal + rightVal;
};

console.log(bstSum(bst));
