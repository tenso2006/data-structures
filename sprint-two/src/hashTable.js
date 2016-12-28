

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);

};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(index) || [];

  _.each (bucket, function(tuple, i) {
    if (tuple[0] === k) {
      //var temp = tuple[1];
      tuple[1] = v;
    }
  });
  bucket.push([k, v]);
  this._storage.set(index, bucket);

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
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(index);

  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      bucket.splice(i,1);
      return;
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


