const repeatString = function(str, a) {
  let result = "";

  for (let i = 0; i < a; i++) {
    result += str + " ";
  }

  return result;
};

console.log(repeatString("Heyaaa", 5));
// Do not edit below this line
//module.exports = repeatString;
