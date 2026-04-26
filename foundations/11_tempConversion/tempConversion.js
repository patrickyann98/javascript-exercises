const convertToCelsius = function(f) {
  let c = (f-32)*(5/9);
  c = Math.round(c*10) / 10;
  return c;
};
console.log(convertToCelsius(39) + " C");
const convertToFahrenheit = function(c) {
  return Math.round((((c*9)/5+32)*10) / 10);
};
console.log(convertToFahrenheit(27.3)+ " F");
// Do not edit below this line
/*module.exports = {
  convertToCelsius,
  convertToFahrenheit
};*/
