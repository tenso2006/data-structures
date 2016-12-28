var BinarySearchTree = function(value) {
  var binarySearchTreeInstance = Object.create(binaryTreeMethods);

  binarySearchTreeInstance.value = value;
  binarySearchTreeInstance.right = null;
  binarySearchTreeInstance.left = null;

  return binarySearchTreeInstance;
};

var binaryTreeMethods = {};

binaryTreeMethods.insert = function (value) {
  if (value < this.value) {
    if (this.left === null) {
      this.left = BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  } else if (value > this.value) {
    if (this.right === null) {
      this.right = BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }
};

binaryTreeMethods.contains = function (value) {

};

binaryTreeMethods.depthFirstLog = function (callback) {

};
/*
 * Complexity: What is the time complexity of the above functions?
 */
