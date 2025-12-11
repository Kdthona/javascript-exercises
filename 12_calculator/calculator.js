const add = function(a,b) {
return a + b;	
};

const subtract = function(a,b) {
return a - b;	
};

const sum = function(arr) {
return arr.reduce((sum, num) => sum + num, 0);
};

const multiply = function(arr) {
return arr.reduce((prod, num) => prod * num, 1);
};

const power = function(b,e) {
let prod = 1;
for(let i = 0; i < e; i++){
prod *= b;
	}return prod;
};

const factorial = function(num) {
if(!num){return 1;}
let prod = num;
for(let i = 1; i < num; i++){
prod *= num-i;
	}return prod;
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
