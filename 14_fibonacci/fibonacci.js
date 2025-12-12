const fibonacci = function(index) {
  if(+index < 0){
	return "OOPS";
  }else switch(+index){
	case 0:
		return 0;
		break;
	case 1:
	case 2:
		return 1;
		break;
	default:
	  let a = b = 1;
	  let temp;
	  for(let i = 2; i < index; i ++){
		temp = a;
		a = b;
		b = a + temp;
	  } return b;
  }
};

// Do not edit below this line
module.exports = fibonacci;
