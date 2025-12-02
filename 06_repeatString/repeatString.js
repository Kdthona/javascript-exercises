const repeatString = function(str, num) {
	let strSum = '';
	if(num < 0){
		return 'ERROR';
	}else

	for(let i = 0; i < num; i++){
		strSum += str;
	}

	return strSum;
};

// Do not edit below this line
module.exports = repeatString;
