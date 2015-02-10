var primes = [
  2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67,
  71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149,
  151, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233,
  239, 241
];

var alphabet = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o',
  'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D',
  'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S',
  'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];

var map = (function() {
  var primeMap = {};
  alphabet.forEach(function(letter, index) {
    primeMap[letter] = primes[index];
  });
  return primeMap;

})();



var anagramDetection = function(parentSt, childSt) {
  //calculate the prime proudct of child string
  var primeProduct = 1, index;
  var value = 1;
  var found = 0;
  for (var i = 0; i < childSt.length; i++) {
    primeProduct *= map[childSt[i]];

  }
  //
  for (var i = 0; i <= parentSt.length - childSt.length; i++) {
    for (var j = 0; j < childSt.length; j++) {
      value *= map[parentSt[i+j]];

    }
    if (value === primeProduct) {
      found += 1;

    }
    value = 1;

  }
  return found;
};

console.log(anagramDetection('Lovevovov', 'ov'));
