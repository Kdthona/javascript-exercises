const findTheOldest = function(pplArr) {
	console.log("NEW TEST");
	return pplArr.reduce(function(oldest, person){
		if(Object.hasOwn(person, "yearOfDeath")){
			console.log(person.name + " " + (person.yearOfDeath - person.yearOfBirth));
			if(person.yearOfDeath - person.yearOfBirth > oldest.age){
				oldest.name = person.name;
				oldest.age = person.yearOfDeath - person.yearOfBirth;
			}
		}else{
		  if((new Date()).getFullYear() - person.yearOfBirth > oldest.yearOfDeath - oldest.yearOfBirth){
				oldest.name = person.name;
				oldest.age = (new Date()).getFullYear() - person.yearOfBirth;
		  }
		}return oldest;
	  }, {
	  name: '',
	  yearOfBirth: 0,
	  yearOfDeath: 0,
	  age: 0
	});
};

// Do not edit below this line
module.exports = findTheOldest;
