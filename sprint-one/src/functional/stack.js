var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var length = 0;
  // Implement the methods below
  someInstance.push = function(value) {
    storage[length++] = value;
  };

  someInstance.pop = function() {
    var temp = storage[--length];
    delete storage[length];
    return temp;
  };

  someInstance.size = function() {
    return length < 0 ? 0 : length;
  };

  return someInstance;
};
