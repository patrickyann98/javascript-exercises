function reverseString (str) {
  let stringArray = [];
  stringArray = str.split("");
  let newArray = [];
  for (let i = 0; i < stringArray.length; i++) {
    let counter = stringArray.length -1;
    newArray[i] = stringArray[counter - i];
  }
  return newArray.join("");
}
console.log(reverseString("test"));
/*let str1 = "Hallihallo";
const stringArray = str1.split("").reduce().join("");
console.log(stringArray);

// Do not edit below this line
//module.exports = reverseString;*/
