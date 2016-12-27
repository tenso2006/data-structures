var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var first = 0;
  var last = 0;

  someInstance.enqueue = function(value) {
    storage[last] = value;
    last++;
  };

  someInstance.dequeue = function() {
    var temp = storage[first];
    delete storage[first++];
    return temp;
  };

  someInstance.size = function() {
    if(last - first < 0){
      return 0;
    }
    return last - first;
  };

  return someInstance;
};
