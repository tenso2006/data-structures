var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};

  someInstance.first = 0;
  someInstance.last = 0;
  someInstance.storage = {};

  _.extend(someInstance, queueMethods);

  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function (value) {
  this.storage[this.last++] = value;
};

queueMethods.dequeue = function () {
  var temp = this.storage[this.first];
  delete this.storage[this.first++];
  return temp;
};


queueMethods.size = function () {
  return this.last - this.first > 0 ?  this.last - this.first : 0;
};
