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
  if (this.value === value) {
    return true;
  }
  if (value < this.value) {
    if (this.left !== null) {
      return this.left.contains(value);
    } else {
      return false;
    }
  } else if (value > this.value) {
    if (this.right !== null) {
      return this.right.contains(value);
    } else {
      return false;
    }
  }
};

binaryTreeMethods.depthFirstLog = function (callback) {
  callback(this.value);
  if (this.left) {
    this.left.depthFirstLog(callback);
  }
  if (this.right) {
    this.right.depthFirstLog(callback);
  }
};
/*
 * Complexity: What is the time complexity of the above functions?

   insert:          Log N
   contains:        Log N
   depthFirstLog:   Linear
 */
