str = 'IILoveyous';

var nonRepeated = function(str) {
  var hash = {};
  for (var i = 0; i < str.length; i++) {
    hash[str[i]] = hash[str[i]] + 1 || 1;
  }
  for (var char in hash) {
    if (hash[char] >= 2) {
      hash[char] = false;
    }
    else {
      hash[char] = true;
    }
  }
  for (var i = 0; i < str.length; i++) {
    if (hash[str[i]] == true) {
      return str[i];
    }
  }
};

console.log(nonRepeated(str));
