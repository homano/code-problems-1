// the code is the check if the string with only brackets is balanced.

var brackets = {
  '(': ')',
  '[': ']',
  '{': '}'
};

var balancedBrackets = function(string) {
  var stack = [];
  for(var i = 0; i < string.length; i++) {
    if (string[i] === brackets[stack[stack.length - 1 ]]) {
      stack.pop();
    }
    else {
      stack.push(string[i]);
    }
  }
  return !stack.length;
};

console.log(balancedBrackets('((())'));
