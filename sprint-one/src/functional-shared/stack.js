var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};

  someInstance.storage = {};

  someInstance.length = 0;

  _.extend(someInstance, stackMethods);

  return someInstance;
};

var stackMethods = {};

stackMethods.push = function (value) {
  this.storage[this.length++] = value;
};

stackMethods.pop = function () {
  var temp = this.storage[--this.length];
  delete this.storage[this.length];
  return temp;
};

stackMethods.size = function () {
  return this.length > 0 ? this.length : 0;
};
