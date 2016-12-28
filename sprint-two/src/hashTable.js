

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._size = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(index) || [];

  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      var temp = tuple[1];
      tuple[1] = v;
      return temp;
    }
  }

  bucket.push([k, v]);
  this._storage.set(index, bucket);
  this._size++;

  if(this._size > this._limit * 0.75) {
    this._resize(this._limit * 2);
  }

  return undefined;
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if(tuple[0] === k) {
      return tuple[1];
    }
  }
  return undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(index);

  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      bucket.splice(i,1);
      this._size--;
      if (this._size < this._limit * 0.25) {
        this._resize(Math.floor(this._limit / 2));
      }
      return tuple[1];
    }
  }
  return undefined;
};

HashTable.prototype._resize = function (newLimit) {
  var previousStorage = this._storage;

  newLimit = Math.max(newLimit, 8);
  if (newLimit === this._limit) { return; }

  this._limit = newLimit;
  this._storage = LimitedArray(this._limit);
  this._size = 0;

  previousStorage.each(function(bucket) {
    if (!bucket) {
      return;
    }
    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i];
      this.insert(tuple[0], tuple[1]);
    }
  }.bind(this));
};


/*
 * Complexity: What is the time complexity of the above functions?

                Best case  Worst case
    insert :    Constant    Linear
    retreive:   Constant    Linear
    remove:     Constant    Linear

 */


