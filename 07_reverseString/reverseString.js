const reverseString = function(str) {
  let reversedStr = '';
  for(let i = str.length - 1; i > -1; i--){
		reversedStr += str[i];
  }
  return reversedStr;
};

// Do not edit below this line
module.exports = reverseString;
