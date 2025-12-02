const leapYears = function(year) {

const fHundred = (yr) => !(year % 400);
let oHundred = (yr) => !(year % 100);
let four = (yr) => !(year % 4);

if(fHundred(year)){
  return true;
  }else if (four(year) && !oHundred(year)) {
  return true;
  }else return false;
};

// Do not edit below this line
module.exports = leapYears;
