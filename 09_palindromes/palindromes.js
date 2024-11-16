const palindromes = function (str) {
  const validLettrs = "abcdefghijklmnopqrstuvwxyz0123456789";
  let cleanString = str
    .toLocaleLowerCase()
    .split("")
    .filter((char) => validLettrs.includes(char))
    .join("");

  let reversedString = cleanString.split("").reverse().join("");

  return reversedString === cleanString;
};

let str = "Hello!";
str = str.slice(0, -1);
let reverseStr = palindromes(str);

console.log("=========================================");
console.log(str);
console.log("=========================================");
console.log(reverseStr);

// Do not edit below this line
module.exports = palindromes;
