var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {

    //create a new node
    var newNode = new Node(value);

    //if no head value exist (linkedList is empty)
    if (this.head === null) {
      //create new node for head
      this.head = newNode;

      //set the tail to head
      this.tail = this.head;

    //if head exist
    } else {

      //set the next of existing last node to new node;
      //(joining the node)
      list.tail.next = newNode;

      //make new node as the new tail
      list.tail = newNode;
    }
  };

  list.removeHead = function() {
    // if head is not null (not empty)
    if (this.head !== null) {

      //save the head value
      var temp = this.head.value;

      //make head point to second node (first node is removed from list)
      this.head = this.head.next;

      return temp;
    }
  };

  list.contains = function(target) {

    var check = function (node, target) {
      if (node === null) {
        return false;
      } else if (node.next === 'null') {
        return false;
      } else if (node.value === target) {
        return true;
      }
      return check(node.next, target);
    };

    return check(this.head, target);
  };

  // for (var key in this) {
  //     if (_.contains(this[key],target)) {
  //       return true;
  //     }
  //   }
  //   return false;
  // };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
  addToTail : Constant Time
  removeHead : Constant Time
  contains: Linear
 */
