/*
var people = [];
var set = {
	firstname: "Wisedth",
	lastname: "Sar"
};
var len = {
	firstname: "Malane",
	lastname: "Thou"
};
var sokhan = {
	firstname: "Sokhan",
	lastname: "Suth"
};

people.push(set);
people.push(len);
people.push(sokhan);


function loopThrough() {
	for (var i = 0; i < people.length; i++) {
		console.log(people[i].firstname);
	}
}
loopThrough();


var numbers = [4, 5, 7, 8, 9, 17, 45, 50, 22, 2, 1];

function addNumbers(aListOfNumbers) {
	var total = 0;
	for (var i = 0; i < aListOfNumbers.length; i++) {
		total = total + aListOfNumbers[i];
		console.log(total);
	}

}
addNumbers(numbers);
*/






var numbers = [4, 5, 7, 8, 9, 17, 45, 50, 22, 2, 1];


function maxSize(aListOfNumbers) {
	var largest = aListOfNumbers[0];
	for (var i = 0; i < aListOfNumbers.length; i++) {
	if (aListOfNumbers[i] > largest) {
		largest = aListOfNumbers[i];
		console.log(largest);
		}
	}
}
maxSize(numbers);