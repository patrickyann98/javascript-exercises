const removeFromArray = function (arr, ...leftOut) {
  return arr.filter(item => !leftOut.includes(item));
}

console.log(removeFromArray([2,7,3,9, 8, 6 , 7], 7, 2));
// Do not edit below this line
//module.exports = removeFromArray;
