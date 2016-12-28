var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  newTree.children = [];

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var childTree = Tree(value);
  this.children.push(childTree);
};

treeMethods.contains = function(target) {

  var contain = false;

  var checkTarget = function (node, target) {
    if(node.value === target) {
      contain = true;
    } else if (node.children.length) {
      for (var i = 0; i < node.children.length; i++) {
        checkTarget(node.children[i], target);
      }
    }
  };


  checkTarget(this, target);
  return contain;
};



/*
 * Complexity: What is the time complexity of the above functions?

    addChild : Linear
    contains:  nlog(n)

 */
