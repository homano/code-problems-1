var arr = [1,2,2]

var evenOccuring = function(arr) {
  var hash = {};
  // loop through the array to add each hash together
  arr.forEach(function(num) {
    hash[num] = hash[num] + 1 || 1;
  });
  // output the number of even occurrences
  for(var i in hash) {
    if (!(hash[i] & 1)) {
      return Number(i);
    }
  }
  return False;
};

console.log(evenOccuring(arr));
