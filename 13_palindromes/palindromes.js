
const palindromes = (string) => {
	const alphanumerical = 'abcdefhijklmnopqrstuvwxyz1234567890';


	arr = string
		.toLowerCase()
		.split('')
		.filter((char) => alphanumerical.includes(char))
		.join('');

	rvrs = arr.split('').reverse().join('');

	return arr == rvrs;
};

// Do not edit below this line
module.exports = palindromes;
