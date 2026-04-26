const sumAll = function(x, y) {
  if (x < 0 || y < 0) {
    throw new Error("Must be positive");
  }

  let arr = [x, y];
  arr.sort((a, b) => a - b);

  let min = arr[0];
  let max = arr[1];

  let sum = 0;

  for (let i = min; i <= max; i++) {
    sum += i;
  }

  return sum;
};

console.log(sumAll(7, 5));

// Do not edit below this line
//module.exports = sumAll;
