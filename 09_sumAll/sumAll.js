const sumAll = function(num1, num2) {
if(num1 < 0 || num2 < 0 || !Number.isInteger(num1 + num2)){return 'ERROR';}

const larger = (num1, num2) => {if(num1 > num2){return num1;} else return num2;};
const smaller = (num1, num2) => {if(num2 < num1){return num2;} else return num1;};

let sum = 0;
  for(let i = smaller(num1, num2); i <= larger(num1, num2); i++){
	sum += i;
  }
return sum;
}

// Do not edit below this line
module.exports = sumAll;
